import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'athlete',
  title: 'Athlete',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'photo',
      title: 'Profile Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'dateOfBirth',
      title: 'Date of Birth',
      type: 'string',
      description: 'e.g., October 21, 1991',
    }),
    defineField({
      name: 'residence',
      title: 'Residence',
      type: 'string',
      description: 'City, State or City, Country',
    }),
    defineField({
      name: 'discipline',
      title: 'Discipline',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'Lead', value: 'lead' },
          { title: 'Speed', value: 'speed' },
        ],
        layout: 'grid',
      },
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Adult', value: 'adult' },
          { title: 'Youth', value: 'youth' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'funFacts',
      title: 'Fun Facts',
      type: 'text',
      rows: 4,
      description: 'A paragraph about the athlete - personality, achievements, interests, etc.',
    }),
    defineField({
      name: 'socialMedia',
      title: 'Social Media',
      type: 'object',
      fields: [
        { name: 'instagram', title: 'Instagram URL', type: 'url' },
        { name: 'facebook', title: 'Facebook URL', type: 'url' },
        { name: 'twitter', title: 'Twitter/X URL', type: 'url' },
        { name: 'website', title: 'Personal Website', type: 'url' },
      ],
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first',
    }),
  ],
  orderings: [
    {
      title: 'Display Order',
      name: 'orderAsc',
      by: [{ field: 'order', direction: 'asc' }],
    },
    {
      title: 'Name',
      name: 'nameAsc',
      by: [{ field: 'name', direction: 'asc' }],
    },
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'photo',
    },
    prepare(selection) {
      const { title, subtitle, media } = selection
      return {
        title,
        subtitle: subtitle === 'adult' ? 'Adult Team' : 'Youth Team',
        media,
      }
    },
  },
})
