import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'historicalRoster',
  title: 'Historical Roster',
  type: 'document',
  fields: [
    defineField({
      name: 'season',
      title: 'Season',
      type: 'string',
      description: 'e.g., "2024-25", "2023-24"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'athletes',
      title: 'Athletes',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'name',
              title: 'Name',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'disciplines',
              title: 'Disciplines',
              type: 'array',
              of: [{ type: 'string' }],
              options: {
                list: [
                  { title: 'Lead', value: 'Lead' },
                  { title: 'Speed', value: 'Speed' },
                ],
              },
            },
            {
              name: 'category',
              title: 'Category',
              type: 'string',
              options: {
                list: [
                  { title: 'Adult', value: 'adult' },
                  { title: 'Youth', value: 'youth' },
                ],
              },
            },
          ],
          preview: {
            select: {
              name: 'name',
              disciplines: 'disciplines',
              category: 'category',
            },
            prepare({ name, disciplines, category }) {
              const categoryLabel = category === 'youth' ? ' (Youth)' : ''
              return {
                title: `${name}${categoryLabel}`,
                subtitle: disciplines?.join(', ') || 'No disciplines',
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      season: 'season',
      athletes: 'athletes',
    },
    prepare({ season, athletes }) {
      return {
        title: `${season || 'Unknown'} Roster`,
        subtitle: `${athletes?.length || 0} athletes`,
      }
    },
  },
  orderings: [
    {
      title: 'Season (Newest)',
      name: 'seasonDesc',
      by: [{ field: 'season', direction: 'desc' }],
    },
  ],
})
