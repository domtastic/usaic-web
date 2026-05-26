import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'pressArticle',
  title: 'Press Coverage',
  type: 'document',
  fields: [
    defineField({
      name: 'headline',
      title: 'Headline',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'publication',
      title: 'Publication',
      type: 'string',
      description: 'e.g. "Deseret News", "Cottonwood Heights Journal"',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'url',
      title: 'URL',
      type: 'url',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Publish Date',
      type: 'date',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
      description: 'Optional one-sentence summary',
    }),
  ],
  orderings: [
    {
      title: 'Newest First',
      name: 'dateDesc',
      by: [{ field: 'date', direction: 'desc' }],
    },
  ],
  preview: {
    select: {
      title: 'headline',
      subtitle: 'publication',
      date: 'date',
    },
    prepare({ title, subtitle, date }) {
      return {
        title,
        subtitle: `${subtitle}${date ? ` · ${date}` : ''}`,
      }
    },
  },
})
