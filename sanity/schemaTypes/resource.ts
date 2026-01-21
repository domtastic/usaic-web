import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'resource',
  title: 'Resource',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Athlete Documents', value: 'athlete' },
          { title: 'Competition Documents', value: 'competition' },
          { title: 'Media Kit', value: 'media' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'file',
      title: 'File (PDF)',
      type: 'file',
      options: {
        accept: '.pdf,.doc,.docx',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      initialValue: 10,
      description: 'Lower numbers appear first',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'title',
      category: 'category',
    },
    prepare(selection) {
      const { title, category } = selection
      const categoryLabels: Record<string, string> = {
        athlete: '👤 Athlete',
        competition: '🏆 Competition',
        media: '📁 Media',
      }
      return {
        title,
        subtitle: categoryLabels[category] || category,
      }
    },
  },
})