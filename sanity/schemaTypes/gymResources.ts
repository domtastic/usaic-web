import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'gymResources',
  title: 'Gym Resources',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
    }),
    defineField({
      name: 'whyTitle',
      title: '"Why Add Drytooling" Heading',
      type: 'string',
    }),
    defineField({
      name: 'whyDescription',
      title: '"Why Add Drytooling" Description',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      description: 'The benefit cards shown in the "Why Add Drytooling" section',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'description', title: 'Description', type: 'text', rows: 2, validation: (Rule) => Rule.required() },
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        },
      ],
    }),
    defineField({
      name: 'supportItems',
      title: 'How USAIC Can Help',
      type: 'array',
      description: 'The support items shown in the "How USAIC Can Help" section',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'description', title: 'Description', type: 'text', rows: 2, validation: (Rule) => Rule.required() },
          ],
          preview: {
            select: { title: 'title', subtitle: 'description' },
          },
        },
      ],
    }),
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'ctaEmail',
      title: 'CTA Email',
      type: 'string',
    }),
  ],
})
