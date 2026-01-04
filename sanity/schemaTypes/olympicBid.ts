import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'olympicBid',
  title: 'Olympic Bid Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      initialValue: 'Road to 2030',
    }),
    defineField({
      name: 'heroSubheading',
      title: 'Hero Subheading',
      type: 'text',
      rows: 2,
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: { hotspot: true },
    }),
    defineField({
      name: 'introContent',
      title: 'Introduction Content',
      type: 'array',
      of: [{ type: 'block' }],
    }),
    defineField({
      name: 'timeline',
      title: 'Timeline Milestones',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'year',
              title: 'Year',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'title',
              title: 'Milestone Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
            },
            {
              name: 'completed',
              title: 'Completed',
              type: 'boolean',
              initialValue: false,
            },
          ],
          preview: {
            select: {
              title: 'title',
              year: 'year',
              completed: 'completed',
            },
            prepare(selection) {
              const { title, year, completed } = selection
              return {
                title: `${year}: ${title}`,
                subtitle: completed ? '✅ Completed' : '⏳ Upcoming',
              }
            },
          },
        },
      ],
    }),
    defineField({
      name: 'ctaHeading',
      title: 'Call to Action Heading',
      type: 'string',
    }),
    defineField({
      name: 'ctaDescription',
      title: 'Call to Action Description',
      type: 'text',
      rows: 2,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Olympic Bid Page Content',
      }
    },
  },
})
