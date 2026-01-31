import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'teamResources',
  title: 'Team Resources',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'National Team Resources',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'text',
      initialValue: 'Essential documents, forms, and information for USA Ice Climbing national team athletes',
    }),

    // Required Documents Section
    defineField({
      name: 'requiredDocuments',
      title: 'Required Documents',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Document Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'file',
              title: 'Document File',
              type: 'file',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'required',
              title: 'Required for all athletes?',
              type: 'boolean',
              initialValue: true,
            },
          ],
          preview: {
            select: {
              title: 'title',
              required: 'required',
            },
            prepare({ title, required }) {
              return {
                title: title,
                subtitle: required ? 'Required' : 'Optional',
              }
            },
          },
        },
      ],
    }),

    // Additional Resources Section
    defineField({
      name: 'additionalResources',
      title: 'Additional Resources',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Resource Title',
              type: 'string',
              validation: (Rule) => Rule.required(),
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
            {
              name: 'file',
              title: 'Resource File',
              type: 'file',
            },
          ],
          preview: {
            select: {
              title: 'title',
            },
          },
        },
      ],
    }),

    // Tryouts & Selection Section
    defineField({
      name: 'tryoutsSection',
      title: 'Tryouts & Selection Section',
      type: 'object',
      fields: [
        {
          name: 'enabled',
          title: 'Show Tryouts Section',
          type: 'boolean',
          initialValue: true,
        },
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Tryouts & Selection',
        },
        {
          name: 'content',
          title: 'Content',
          type: 'array',
          of: [{ type: 'block' }],
          description: 'Information about tryout process, selection criteria, etc.',
        },
        {
          name: 'selectionCriteria',
          title: 'Selection Criteria',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'criterion',
                  title: 'Criterion',
                  type: 'string',
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'text',
                },
              ],
            },
          ],
        },
        {
          name: 'tryoutDocument',
          title: 'Tryout Information Document',
          type: 'file',
        },
      ],
    }),

    // Important Dates Section
    defineField({
      name: 'importantDates',
      title: 'Important Dates',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Event Title',
              type: 'string',
            },
            {
              name: 'date',
              title: 'Date',
              type: 'date',
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
          preview: {
            select: {
              title: 'title',
              date: 'date',
            },
            prepare({ title, date }) {
              return {
                title: title,
                subtitle: date,
              }
            },
          },
        },
      ],
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Team Resources Settings',
      }
    },
  },
})
