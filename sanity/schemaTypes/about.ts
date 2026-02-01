import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'about',
  title: 'About Page',
  type: 'document',
  fields: [
    defineField({
      name: 'missionStatement',
      title: 'Mission Statement',
      type: 'text',
      rows: 4,
      description: 'Displayed in the hero section',
    }),
    defineField({
      name: 'aboutHeading',
      title: 'About Section Heading',
      type: 'string',
      initialValue: 'About Us',
    }),
    defineField({
      name: 'aboutContent',
      title: 'About Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
          },
        },
      ],
      description: 'Main about section content (supports paragraphs and bullet lists)',
    }),
    defineField({
      name: 'values',
      title: 'Our Values',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Value Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
              rows: 2,
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: [
                  { title: 'Lightning (Excellence)', value: 'lightning' },
                  { title: 'People (Community)', value: 'people' },
                  { title: 'Globe (Growth)', value: 'globe' },
                  { title: 'Star (Achievement)', value: 'star' },
                  { title: 'Heart (Passion)', value: 'heart' },
                  { title: 'Shield (Safety)', value: 'shield' },
                ],
              },
              initialValue: 'star',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'description',
            },
          },
        },
      ],
      validation: (Rule) => Rule.max(6),
    }),
    defineField({
      name: 'uiaaImage',
      title: 'UIAA Logo/Image',
      type: 'image',
      description: 'Displayed to the left of the UIAA Associate Member heading',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'uiaaContent',
      title: 'UIAA Section Content',
      type: 'array',
      description: 'Rich text content for the UIAA section (supports paragraphs, bullet lists, and links)',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
          ],
          marks: {
            decorators: [
              { title: 'Bold', value: 'strong' },
              { title: 'Italic', value: 'em' },
            ],
            annotations: [
              {
                name: 'link',
                type: 'object',
                title: 'Link',
                fields: [
                  {
                    name: 'href',
                    type: 'url',
                    title: 'URL',
                    validation: (Rule) => Rule.uri({
                      scheme: ['http', 'https', 'mailto', 'tel'],
                    }),
                  },
                ],
              },
            ],
          },
        },
      ],
    }),
    defineField({
      name: 'contactEmail',
      title: 'Contact Email',
      type: 'string',
      initialValue: 'usaiceclimbing@gmail.com',
    }),
    defineField({
      name: 'contactDescription',
      title: 'Contact Section Description',
      type: 'text',
      rows: 3,
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'About Page Content',
      }
    },
  },
})