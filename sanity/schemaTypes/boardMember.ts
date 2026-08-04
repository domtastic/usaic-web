import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'boardMember',
  title: 'Leadership Member',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      description: 'Executive Leadership = staff (e.g. Co-Executive Director). Board of Directors = governance.',
      options: {
        list: [
          { title: 'Executive Leadership', value: 'executive' },
          { title: 'Board of Directors', value: 'board' },
        ],
        layout: 'radio',
      },
      initialValue: 'board',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role / Title',
      type: 'string',
      description: 'e.g. Co-Executive Director, President, Treasurer',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
      rows: 4,
      description: 'A short bio — 2 to 4 sentences.',
    }),
    defineField({
      name: 'photo',
      title: 'Photo',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first. President should be 1.',
      initialValue: 99,
    }),
    defineField({
      name: 'active',
      title: 'Active',
      type: 'boolean',
      description: 'Uncheck to hide this member without deleting them.',
      initialValue: true,
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
      title: 'name',
      subtitle: 'role',
      media: 'photo',
      category: 'category',
    },
    prepare({ title, subtitle, media, category }) {
      const categoryLabel = category === 'executive' ? 'Executive Leadership' : 'Board of Directors'
      return {
        title,
        subtitle: `${subtitle} • ${categoryLabel}`,
        media,
      }
    },
  },
})
