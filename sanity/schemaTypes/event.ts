import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Event Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
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
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'isUsaCircuit',
      title: 'USA Circuit Event',
      type: 'boolean',
      description: 'Check if this event is part of the official USA Ice Climbing Circuit',
      initialValue: false,
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
      name: 'featuredImage',
      title: 'Featured Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'eventLink',
      title: 'Event Homepage Link',
      type: 'url',
      description: "Link to the organizer's event page",
    }),
    defineField({
      name: 'resultsLink',
      title: 'Results Link',
      type: 'url',
      description: 'Add after event is complete',
    }),
  ],
  orderings: [
    {
      title: 'Date (Newest First)',
      name: 'dateDesc',
      by: [{ field: 'startDate', direction: 'desc' }],
    },
    {
      title: 'Date (Oldest First)',
      name: 'dateAsc',
      by: [{ field: 'startDate', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      date: 'startDate',
      eventType: 'eventType',
      isUsaCircuit: 'isUsaCircuit',
      media: 'featuredImage',
    },
    prepare(selection) {
      const { title, date, eventType, isUsaCircuit, media } = selection
      const typeLabels: Record<string, string> = {
        'world-cup': '🏆 World Cup',
        'continental-cup': '🌎 Continental Cup',
        'ice-festival': '🎪 Ice Festival',
        'local-competition': '📍 Local Competition',
      }
      return {
        title: `${title}${isUsaCircuit ? ' 🇺🇸' : ''}`,
        subtitle: `${typeLabels[eventType] || eventType} • ${date}`,
        media,
      }
    },
  },
})