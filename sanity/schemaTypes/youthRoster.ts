import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'youthRoster',
  title: 'Youth Roster',
  type: 'document',
  fields: [
    defineField({
      name: 'season',
      title: 'Season',
      type: 'string',
      description: 'e.g., "2025-26"',
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
          ],
          preview: {
            select: {
              name: 'name',
              disciplines: 'disciplines',
            },
            prepare({ name, disciplines }) {
              return {
                title: name,
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
        title: `Youth Roster ${season || ''}`,
        subtitle: `${athletes?.length || 0} athletes`,
      }
    },
  },
})
