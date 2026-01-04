import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'sponsor',
  title: 'Sponsor',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Company Name',
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
      name: 'tier',
      title: 'Sponsor Tier',
      type: 'string',
      options: {
        list: [
          { title: 'Title Sponsor', value: 'title' },
          { title: 'Gold', value: 'gold' },
          { title: 'Silver', value: 'silver' },
          { title: 'Bronze', value: 'bronze' },
        ],
        layout: 'radio',
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'website',
      title: 'Website URL',
      type: 'url',
    }),
    defineField({
      name: 'description',
      title: 'Description / Quote',
      type: 'text',
      rows: 3,
      description: 'Optional brand message or partnership description',
    }),
    defineField({
      name: 'active',
      title: 'Active Sponsor',
      type: 'boolean',
      initialValue: true,
      description: 'Uncheck to hide from website without deleting',
    }),
    defineField({
      name: 'order',
      title: 'Display Order',
      type: 'number',
      description: 'Lower numbers appear first within their tier',
    }),
  ],
  orderings: [
    {
      title: 'Tier & Order',
      name: 'tierOrder',
      by: [
        { field: 'tier', direction: 'asc' },
        { field: 'order', direction: 'asc' },
      ],
    },
  ],
  preview: {
    select: {
      title: 'name',
      tier: 'tier',
      active: 'active',
      media: 'logo',
    },
    prepare(selection) {
      const { title, tier, active, media } = selection
      const tierLabels: Record<string, string> = {
        title: '⭐ Title Sponsor',
        gold: '🥇 Gold',
        silver: '🥈 Silver',
        bronze: '🥉 Bronze',
      }
      return {
        title: `${title}${active ? '' : ' (Inactive)'}`,
        subtitle: tierLabels[tier] || tier,
        media,
      }
    },
  },
})
