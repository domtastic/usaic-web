import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'whatIsDrytooling',
  title: 'What is Drytooling Page',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeading',
      title: 'Hero Heading',
      type: 'string',
      initialValue: 'What is Drytooling?',
    }),
    defineField({
      name: 'heroSubheading',
      title: 'Hero Subheading',
      type: 'text',
      rows: 2,
      initialValue: 'Understanding ice climbing, mixed climbing, and drytooling—three disciplines united by ice tools',
    }),
    defineField({
      name: 'introText',
      title: 'Introduction Text',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'iceClimbing',
      title: 'Ice Climbing',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Ice Climbing',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
        },
        {
          name: 'keyPoints',
          title: 'Key Points',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Bullet points about ice climbing',
        },
      ],
    }),
    defineField({
      name: 'mixedClimbing',
      title: 'Mixed Climbing',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Mixed Climbing',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
        },
        {
          name: 'keyPoints',
          title: 'Key Points',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Bullet points about mixed climbing',
        },
      ],
    }),
    defineField({
      name: 'drytooling',
      title: 'Drytooling',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Drytooling',
        },
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: { hotspot: true },
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 4,
        },
        {
          name: 'keyPoints',
          title: 'Key Points',
          type: 'array',
          of: [{ type: 'string' }],
          description: 'Bullet points about drytooling',
        },
      ],
    }),
    defineField({
      name: 'whyDrytoolingMatters',
      title: 'Why Drytooling Matters Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Section Heading',
          type: 'string',
          initialValue: 'Why Drytooling Matters',
        },
        {
          name: 'subheading',
          title: 'Section Subheading',
          type: 'string',
          initialValue: 'Drytooling is the key to growing ice climbing as a sport',
        },
        {
          name: 'benefits',
          title: 'Benefits',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                { name: 'title', title: 'Title', type: 'string' },
                { name: 'description', title: 'Description', type: 'text', rows: 3 },
              ],
            },
          ],
          validation: (Rule) => Rule.max(3),
        },
      ],
    }),
    defineField({
      name: 'ctaSection',
      title: 'Call to Action Section',
      type: 'object',
      fields: [
        {
          name: 'heading',
          title: 'Heading',
          type: 'string',
          initialValue: 'Ready to Get Started?',
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          rows: 2,
        },
        {
          name: 'primaryButtonText',
          title: 'Primary Button Text',
          type: 'string',
          initialValue: 'Learn to Ice Climb',
        },
        {
          name: 'primaryButtonLink',
          title: 'Primary Button Link',
          type: 'string',
          initialValue: '/get-started/learn',
        },
        {
          name: 'secondaryButtonText',
          title: 'Secondary Button Text',
          type: 'string',
          initialValue: 'Find a Gym',
        },
        {
          name: 'secondaryButtonLink',
          title: 'Secondary Button Link',
          type: 'string',
          initialValue: '/get-started/gyms',
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'What is Drytooling Page Content',
      }
    },
  },
})
