import { defineField, defineType } from 'sanity'
import { EVENT_TYPE_OPTIONS, SUBMITTABLE_EVENT_TYPES } from '@/lib/eventTypes'

const SUBMITTABLE_EVENT_TYPE_OPTIONS = EVENT_TYPE_OPTIONS.filter((o) =>
  (SUBMITTABLE_EVENT_TYPES as string[]).includes(o.value)
)

export default defineType({
  name: 'eventSubmission',
  title: 'Event Submission',
  type: 'document',
  liveEdit: true,
  fields: [
    defineField({
      name: 'status',
      title: 'Status',
      type: 'string',
      options: {
        list: [
          { title: 'Pending Review', value: 'pending' },
          { title: 'Approved', value: 'approved' },
          { title: 'Rejected', value: 'rejected' },
        ],
        layout: 'radio',
      },
      initialValue: 'pending',
      readOnly: true,
      description: 'Set automatically by the "Approve & Publish Event" / "Reject" buttons above — not editable directly.',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'eventType',
      title: 'Event Type(s)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: SUBMITTABLE_EVENT_TYPE_OPTIONS,
        layout: 'grid',
      },
      description: 'World Cups and Continental Cups are scheduled by USAIC directly, not submitted publicly. An event can be more than one type.',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'startDate',
      title: 'Start Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'endDate',
      title: 'End Date',
      type: 'date',
      description: 'Leave empty if single-day event',
    }),
    defineField({
      name: 'location',
      title: 'Location',
      type: 'object',
      fields: [
        { name: 'venue', title: 'Venue Name', type: 'string' },
        { name: 'city', title: 'City', type: 'string', validation: (Rule) => Rule.required() },
        { name: 'state', title: 'State (US events)', type: 'string' },
        { name: 'country', title: 'Country', type: 'string', validation: (Rule) => Rule.required() },
      ],
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'eventLink',
      title: 'Event Homepage Link',
      type: 'url',
      description: "Link to the organizer's event page",
    }),
    defineField({
      name: 'posterImage',
      title: 'Event Poster / Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'submitterName',
      title: 'Submitted By',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'submitterEmail',
      title: 'Submitter Email',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'createdEventRef',
      title: 'Published Event',
      type: 'reference',
      to: [{ type: 'event' }],
      weak: true,
      readOnly: true,
      description: 'Set automatically when this submission is approved. Weak reference so the event can still be deleted freely.',
    }),
  ],
  orderings: [
    {
      title: 'Submitted (Newest First)',
      name: 'createdDesc',
      by: [{ field: '_createdAt', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      status: 'status',
      submitterName: 'submitterName',
      date: 'startDate',
    },
    prepare(selection) {
      const { title, status, submitterName, date } = selection
      const statusLabels: Record<string, string> = {
        pending: '🕓 Pending',
        approved: '✅ Approved',
        rejected: '❌ Rejected',
      }
      return {
        title,
        subtitle: `${statusLabels[status] || status} • ${submitterName} • ${date}`,
      }
    },
  },
})
