import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [defineField({
    name: 'welcomeSlide',
    title: 'Welcome Slide',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        initialValue: 'Welcome to USA Ice Climbing',
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'text',
        initialValue: 'The national governing body for competitive ice climbing, mixed climbing, and drytooling in the United States',
      },
      {
        name: 'image',
        title: 'Background Image',
        type: 'image',
        options: { hotspot: true },
        description: 'Background image for the welcome slide',
      },
      {
        name: 'ctaText',
        title: 'Primary Button Text',
        type: 'string',
        initialValue: 'Meet the Team',
      },
      {
        name: 'ctaLink',
        title: 'Primary Button Link',
        type: 'string',
        initialValue: '/team',
      },
      {
        name: 'secondaryCtaText',
        title: 'Secondary Button Text',
        type: 'string',
        initialValue: 'Upcoming Events',
      },
      {
        name: 'secondaryCtaLink',
        title: 'Secondary Button Link',
        type: 'string',
        initialValue: '/events',
      },
    ],
  }),
  defineField({
    name: 'getStartedSlide',
    title: 'Get Started Slide',
    type: 'object',
    fields: [
      {
        name: 'title',
        title: 'Title',
        type: 'string',
        initialValue: 'Get Started Ice Climbing',
      },
      {
        name: 'subtitle',
        title: 'Subtitle',
        type: 'text',
        initialValue: 'Whether at a gym, ice festival, or with a guide—your journey into ice climbing starts here',
      },
      {
        name: 'image',
        title: 'Background Image',
        type: 'image',
        options: { hotspot: true },
        description: 'Background image for the Get Started slide',
      },
      {
        name: 'ctaText',
        title: 'Primary Button Text',
        type: 'string',
        initialValue: 'Learn How',
      },
      {
        name: 'ctaLink',
        title: 'Primary Button Link',
        type: 'string',
        initialValue: '/get-started/learn',
      },
      {
        name: 'secondaryCtaText',
        title: 'Secondary Button Text',
        type: 'string',
        initialValue: 'Find a Gym',
      },
      {
        name: 'secondaryCtaLink',
        title: 'Secondary Button Link',
        type: 'string',
        initialValue: '/get-started/gyms',
      },
    ],
  }),
    defineField({
      name: 'eventSlide',
      title: 'Event Slide Settings',
      type: 'object',
      fields: [
        {
          name: 'enabled',
          title: 'Auto-show Current/Upcoming Event',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'youtubeLink',
          title: 'YouTube Livestream Link',
          type: 'url',
          description: 'Link to watch the event live',
        },
        {
          name: 'fallbackImage',
          title: 'Fallback Image',
          type: 'image',
          options: { hotspot: true },
          description: 'Used if event has no featured image',
        },
      ],
    }),
    defineField({
      name: 'articleSlide',
      title: 'Article Slide Settings',
      type: 'object',
      fields: [
        {
          name: 'enabled',
          title: 'Auto-show Latest Article',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'fallbackImage',
          title: 'Fallback Image',
          type: 'image',
          options: { hotspot: true },
          description: 'Used if article has no featured image',
        },
      ],
    }),
    defineField({
      name: 'donateSlide',
      title: 'Donate Slide',
      type: 'object',
      fields: [
        {
          name: 'enabled',
          title: 'Show Donate Slide',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
          initialValue: 'Support Team USA',
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: 'Help our athletes compete on the world stage',
        },
        {
          name: 'image',
          title: 'Background Image',
          type: 'image',
          options: { hotspot: true },
        },
        {
          name: 'ctaText',
          title: 'Button Text',
          type: 'string',
          initialValue: 'Donate Now',
        },
      ],
    }),
    defineField({
      name: 'staticSlides',
      title: 'Additional Static Slides',
      description: 'Add any extra slides you want',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'subtitle',
              title: 'Subtitle',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Background Image',
              type: 'image',
              options: { hotspot: true },
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'ctaText',
              title: 'Button Text',
              type: 'string',
            },
            {
              name: 'ctaLink',
              title: 'Button Link',
              type: 'string',
            },
            {
              name: 'isExternal',
              title: 'External Link?',
              type: 'boolean',
              initialValue: false,
            },
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Homepage Settings',
      }
    },
  },
})