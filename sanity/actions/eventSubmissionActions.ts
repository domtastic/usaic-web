import { useState } from 'react'
import { CloseCircleIcon, PublishIcon } from '@sanity/icons'
import type { DocumentActionComponent, DocumentActionProps } from 'sanity'
import { useClient } from 'sanity'

function createSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

// Season runs Oct-Apr: Oct-Dec is the start of a season, Jan-Sep is the end.
// Mirrors the logic in sanity/scripts/update-event-seasons.ts and ResultsPageClient.tsx.
function computeSeason(dateStr: string): string {
  const date = new Date(dateStr)
  const year = date.getFullYear()
  const month = date.getMonth()
  return month >= 9 ? `${year}-${year + 1}` : `${year - 1}-${year}`
}

export const ApproveAndPublishAction: DocumentActionComponent = (props: DocumentActionProps) => {
  const client = useClient({ apiVersion: '2024-01-01' })
  const [isPublishing, setIsPublishing] = useState(false)

  const doc = props.published || props.draft
  if (!doc || doc.status === 'approved') return null

  return {
    label: isPublishing ? 'Publishing…' : 'Approve & Publish Event',
    icon: PublishIcon,
    tone: 'positive',
    disabled: isPublishing,
    onHandle: async () => {
      setIsPublishing(true)
      try {
        const newEvent = await client.create({
          _type: 'event',
          title: doc.title,
          slug: { _type: 'slug', current: createSlug(doc.title as string) },
          eventType: doc.eventType,
          season: computeSeason(doc.startDate as string),
          startDate: doc.startDate,
          endDate: doc.endDate,
          location: doc.location,
          description: doc.description,
          eventLink: doc.eventLink,
          featured: false,
        })

        await client
          .patch(doc._id)
          .set({
            status: 'approved',
            createdEventRef: { _type: 'reference', _ref: newEvent._id },
          })
          .commit()
      } finally {
        setIsPublishing(false)
        props.onComplete()
      }
    },
  }
}

export const RejectSubmissionAction: DocumentActionComponent = (props: DocumentActionProps) => {
  const client = useClient({ apiVersion: '2024-01-01' })
  const [dialogOpen, setDialogOpen] = useState(false)

  const doc = props.published || props.draft
  if (!doc || doc.status === 'rejected' || doc.status === 'approved') return null

  return {
    label: 'Reject',
    icon: CloseCircleIcon,
    tone: 'critical',
    onHandle: () => setDialogOpen(true),
    dialog: dialogOpen && {
      type: 'confirm',
      tone: 'critical',
      message: 'Reject this submission? No event will be created. It will still be visible under "Rejected."',
      onConfirm: async () => {
        await client.patch(doc._id).set({ status: 'rejected' }).commit()
        setDialogOpen(false)
        props.onComplete()
      },
      onCancel: () => setDialogOpen(false),
    },
  }
}
