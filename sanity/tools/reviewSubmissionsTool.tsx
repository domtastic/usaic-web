import { useCallback, useEffect, useState } from 'react'
import { Badge, Box, Button, Card, Flex, Spinner, Stack, Text } from '@sanity/ui'
import { CloseCircleIcon, InboxIcon, PublishIcon } from '@sanity/icons'
import { useClient, type SanityDocument, type Tool } from 'sanity'
import { approveSubmission, rejectSubmission } from '../actions/eventSubmissionLogic'

const EVENT_TYPE_LABELS: Record<string, string> = {
  'world-cup': 'World Cup',
  'continental-cup': 'Continental Cup',
  'ice-festival': 'Ice Festival',
  'local-competition': 'Local Competition',
  'clinic': 'Clinic',
}

function formatLocation(location: SanityDocument['location']) {
  if (!location) return ''
  const loc = location as { venue?: string; city?: string; state?: string; country?: string }
  return [loc.venue, loc.city, loc.state, loc.country].filter(Boolean).join(', ')
}

function formatDates(startDate?: string, endDate?: string) {
  if (!startDate) return ''
  return endDate && endDate !== startDate ? `${startDate} – ${endDate}` : startDate
}

function SubmissionCard({
  doc,
  onResolved,
}: {
  doc: SanityDocument
  onResolved: () => void
}) {
  const client = useClient({ apiVersion: '2024-01-01' })
  const [processing, setProcessing] = useState<'approving' | 'rejecting' | null>(null)
  const [confirmingReject, setConfirmingReject] = useState(false)

  const handleApprove = useCallback(async () => {
    setProcessing('approving')
    try {
      await approveSubmission(client, doc)
      onResolved()
    } finally {
      setProcessing(null)
    }
  }, [client, doc, onResolved])

  const handleReject = useCallback(async () => {
    setProcessing('rejecting')
    try {
      await rejectSubmission(client, doc._id)
      onResolved()
    } finally {
      setProcessing(null)
      setConfirmingReject(false)
    }
  }, [client, doc._id, onResolved])

  const isBusy = processing !== null

  return (
    <Card padding={4} radius={3} shadow={1} border>
      <Stack space={3}>
        <Flex justify="space-between" align="flex-start">
          <Stack space={2}>
            <Text size={2} weight="semibold">
              {doc.title as string}
            </Text>
            <Flex gap={2} align="center">
              <Badge tone="primary">{EVENT_TYPE_LABELS[doc.eventType as string] || (doc.eventType as string)}</Badge>
              <Text size={1} muted>
                {formatDates(doc.startDate as string, doc.endDate as string)}
              </Text>
            </Flex>
          </Stack>
        </Flex>

        <Text size={1} muted>
          {formatLocation(doc.location)}
        </Text>

        {(doc.description as string) && <Text size={1}>{doc.description as string}</Text>}

        <Box paddingTop={2} style={{ borderTop: '1px solid var(--card-border-color)' }}>
          <Text size={1} muted style={{ paddingTop: '0.5em', display: 'block' }}>
            Submitted by {doc.submitterName as string} ({doc.submitterEmail as string})
          </Text>
        </Box>

        {confirmingReject ? (
          <Flex gap={2} align="center">
            <Text size={1}>Reject this submission? No event will be created.</Text>
            <Button
              text={processing === 'rejecting' ? 'Rejecting…' : 'Confirm Reject'}
              tone="critical"
              disabled={isBusy}
              onClick={handleReject}
            />
            <Button text="Cancel" mode="ghost" disabled={isBusy} onClick={() => setConfirmingReject(false)} />
          </Flex>
        ) : (
          <Flex gap={2}>
            <Button
              icon={PublishIcon}
              text={processing === 'approving' ? 'Publishing…' : 'Approve & Publish Event'}
              tone="positive"
              disabled={isBusy}
              onClick={handleApprove}
            />
            <Button
              icon={CloseCircleIcon}
              text="Reject"
              tone="critical"
              mode="ghost"
              disabled={isBusy}
              onClick={() => setConfirmingReject(true)}
            />
          </Flex>
        )}
      </Stack>
    </Card>
  )
}

function ReviewSubmissionsTool() {
  const client = useClient({ apiVersion: '2024-01-01' })
  const [submissions, setSubmissions] = useState<SanityDocument[] | null>(null)

  const load = useCallback(async () => {
    const docs = await client.fetch<SanityDocument[]>(
      `*[_type == "eventSubmission" && status == "pending"] | order(_createdAt desc)`
    )
    setSubmissions(docs)
  }, [client])

  useEffect(() => {
    load()
  }, [load])

  return (
    <Box padding={4} style={{ maxWidth: 720, margin: '0 auto' }}>
      <Stack space={4}>
        <Text size={3} weight="semibold">
          Review Submissions
        </Text>

        {submissions === null && (
          <Flex justify="center" padding={5}>
            <Spinner />
          </Flex>
        )}

        {submissions !== null && submissions.length === 0 && (
          <Card padding={4} radius={3} tone="transparent" border>
            <Text muted>No submissions need review.</Text>
          </Card>
        )}

        {submissions !== null &&
          submissions.map((doc) => <SubmissionCard key={doc._id} doc={doc} onResolved={load} />)}
      </Stack>
    </Box>
  )
}

export const reviewSubmissionsTool: Tool = {
  name: 'reviewSubmissions',
  title: 'Review Submissions',
  icon: InboxIcon,
  component: ReviewSubmissionsTool,
}
