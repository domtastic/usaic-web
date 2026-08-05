import { defineField, defineType } from 'sanity'

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
      title: 'Event Type',
      type: 'string',
      options: {
        list: [
          { title: 'World Cup', value: 'world-cup' },
          { title: 'Continental Cup', value: 'continental-cup' },
          { title: 'Ice Festival', value: 'ice-festival' },
          { title: 'Local Competition', value: 'local-competition' },
          { title: 'Clinic', value: 'clinic' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
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
      readOnly: true,
      description: 'Set automatically when this submission is approved.',
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
