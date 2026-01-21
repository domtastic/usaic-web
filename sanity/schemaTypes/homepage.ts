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
        name: 'image',
        title: 'Background Image',
        type: 'image',
        options: { hotspot: true },
        description: 'Background image for the welcome slide',
      },
    ],
  }),
  defineField({
    name: 'getStartedSlide',
    title: 'Get Started Slide',
    type: 'object',
    fields: [
      {
        name: 'image',
        title: 'Background Image',
        type: 'image',
        options: { hotspot: true },
        description: 'Background image for the Get Started slide',
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