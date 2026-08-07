import { defineField, defineType } from 'sanity'
import { EVENT_TYPE_OPTIONS, EVENT_TYPE_LABELS, isCompetitive, toEventTypeArray } from '@/lib/eventTypes'

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
      title: 'Event Type(s)',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: EVENT_TYPE_OPTIONS,
        layout: 'grid',
      },
      description: 'An event can be more than one type — e.g. an Ice Festival that also includes a Clinic.',
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'season',
      title: 'Season',
      type: 'string',
      description: 'Ice climbing season (Oct-Apr), e.g., 2025-2026. Only applies to World Cup / Continental Cup events.',
      options: {
        list: [
          { title: '2026-2027', value: '2026-2027' },
          { title: '2025-2026', value: '2025-2026' },
          { title: '2024-2025', value: '2024-2025' },
          { title: '2023-2024', value: '2023-2024' },
          { title: '2022-2023', value: '2022-2023' },
          { title: '2021-2022', value: '2021-2022' },
        ],
        layout: 'dropdown',
      },
      hidden: ({ document }) => !isCompetitive(document?.eventType),
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (isCompetitive(context.document?.eventType) && !value) {
            return 'Season is required for World Cup / Continental Cup events'
          }
          return true
        }),
    }),
    defineField({
      name: 'year',
      title: 'Year',
      type: 'number',
      description: 'Ice festivals, local competitions, and clinics happen year-round — just the calendar year, not a competitive season.',
      hidden: ({ document }) => isCompetitive(document?.eventType),
      validation: (Rule) =>
        Rule.custom((value, context) => {
          if (!isCompetitive(context.document?.eventType) && !value) {
            return 'Year is required for non-competitive events'
          }
          return true
        }),
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
      name: 'featured',
      title: 'Feature on Homepage',
      type: 'boolean',
      description: 'Show this event in the homepage carousel (displays up to 90 days before start date)',
      initialValue: false,
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
    defineField({
      name: 'resultsPdf',
      title: 'Results PDF',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      description: 'Upload PDF of competition results',
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
      season: 'season',
      year: 'year',
      media: 'featuredImage',
    },
    prepare(selection) {
      const { title, date, eventType, season, year, media } = selection
      const emoji: Record<string, string> = {
        'world-cup': '🏆',
        'continental-cup': '🌎',
        'ice-festival': '🎪',
        'local-competition': '📍',
        'clinic': '🎓',
      }
      const typesLabel = toEventTypeArray(eventType)
        .map((t) => `${emoji[t] || ''} ${EVENT_TYPE_LABELS[t as keyof typeof EVENT_TYPE_LABELS] || t}`.trim())
        .join(', ')
      return {
        title,
        subtitle: `${season || year || ''} • ${typesLabel} • ${date}`,
        media,
      }
    },
  },
})