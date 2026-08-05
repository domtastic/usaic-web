import { useState } from 'react'
import { CloseCircleIcon, PublishIcon } from '@sanity/icons'
import type { DocumentActionComponent, DocumentActionProps } from 'sanity'
import { useClient } from 'sanity'
import { approveSubmission, rejectSubmission } from './eventSubmissionLogic'

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
        await approveSubmission(client, doc)
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
        await rejectSubmission(client, doc._id)
        setDialogOpen(false)
        props.onComplete()
      },
      onCancel: () => setDialogOpen(false),
    },
  }
}
