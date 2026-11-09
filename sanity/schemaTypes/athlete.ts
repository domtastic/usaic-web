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
      name: 'teams',
      title: 'Current Team',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'World Cup Team', value: 'worldCup' },
          { title: 'Youth Team', value: 'youth' },
        ],
        layout: 'grid',
      },
      description:
        'Uncheck both to archive the athlete. Archived athletes stay here but are hidden from the website.',
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
      // Youth athletes always compete in both, so this only applies to the World Cup team
      hidden: ({ document }) => !(document?.teams as string[] | undefined)?.includes('worldCup'),
      validation: (Rule) =>
        Rule.custom((value: string[] | undefined, context) => {
          const teams = context.document?.teams as string[] | undefined
          if (teams?.includes('worldCup') && !value?.length) {
            return 'Pick at least one discipline for World Cup athletes'
          }
          return true
        }),
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
      teams: 'teams',
      media: 'photo',
    },
    prepare({ title, teams, media }) {
      const labels: Record<string, string> = { worldCup: 'World Cup Team', youth: 'Youth Team' }
      return {
        title,
        subtitle: teams?.length ? teams.map((t: string) => labels[t] ?? t).join(' · ') : 'Archived',
        media,
      }
    },
  },
})
