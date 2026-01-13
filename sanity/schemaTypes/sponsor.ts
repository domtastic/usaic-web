import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Sponsor Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'logoBackground',
      title: 'Logo Background',
      type: 'string',
      options: {
        list: [
          { title: 'White', value: 'white' },
          { title: 'Black', value: 'black' },
        ],
        layout: 'radio',
      },
      initialValue: 'white',
      description: 'Choose background color for the logo container',
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
      description: 'Link to sponsor\'s website',
    }),
    defineField({
      name: 'active',
      title: 'Active Sponsor',
      type: 'boolean',
      initialValue: true,
      description: 'Uncheck to hide sponsor from website',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
      initialValue: 10,
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
      media: 'logo',
      active: 'active',
    },
    prepare(selection) {
      const { title, media, active } = selection
      return {
        title: `${title}${active ? '' : ' (Hidden)'}`,
        media,
      }
    },
  },
})