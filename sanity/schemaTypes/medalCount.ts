import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'medalCount',
  title: 'Medal Count',
  type: 'document',
  fields: [
    defineField({
      name: 'goldMedals',
      title: 'Gold Medals',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'silverMedals',
      title: 'Silver Medals',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'bronzeMedals',
      title: 'Bronze Medals',
      type: 'number',
      initialValue: 0,
      validation: (Rule) => Rule.min(0),
    }),
    defineField({
      name: 'heading',
      title: 'Section Heading',
      type: 'string',
      initialValue: 'US Athletes on the World Stage',
    }),
    defineField({
      name: 'subheading',
      title: 'Section Subheading',
      type: 'text',
      rows: 2,
      initialValue: 'Our athletes continue to make history at international competitions',
    }),
    defineField({
      name: 'achievements',
      title: 'Notable Achievements',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Achievement Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'athlete',
              title: 'Athlete Name',
              type: 'string',
            },
            {
              name: 'event',
              title: 'Event',
              type: 'string',
            },
            {
              name: 'year',
              title: 'Year',
              type: 'string',
            },
            {
              name: 'medalType',
              title: 'Medal Type',
              type: 'string',
              options: {
                list: [
                  { title: 'Gold', value: 'gold' },
                  { title: 'Silver', value: 'silver' },
                  { title: 'Bronze', value: 'bronze' },
                ],
              },
            },
          ],
          preview: {
            select: {
              title: 'title',
              athlete: 'athlete',
              year: 'year',
              medalType: 'medalType',
            },
            prepare(selection) {
              const { title, athlete, year, medalType } = selection
              const medalEmoji = medalType === 'gold' ? '🥇' : medalType === 'silver' ? '🥈' : '🥉'
              return {
                title: `${medalEmoji} ${title}`,
                subtitle: `${athlete || ''} ${year ? `(${year})` : ''}`,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    select: {
      gold: 'goldMedals',
      silver: 'silverMedals',
      bronze: 'bronzeMedals',
    },
    prepare(selection) {
      const { gold, silver, bronze } = selection
      return {
        title: 'Medal Count',
        subtitle: `🥇 ${gold || 0}  🥈 ${silver || 0}  🥉 ${bronze || 0}`,
      }
    },
  },
})