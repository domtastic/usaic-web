import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'indoorGuidelines',
  title: 'Indoor Guidelines',
  type: 'document',
  groups: [
    { name: 'hero', title: 'Hero' },
    { name: 'intro', title: 'Introduction' },
    { name: 'safety', title: 'Safety' },
    { name: 'wall', title: 'Protecting the Wall' },
    { name: 'routeSetting', title: 'Route Setting' },
    { name: 'alternatives', title: 'Alternatives' },
    { name: 'gyms', title: 'Gyms' },
    { name: 'cta', title: 'Contact CTA' },
  ],
  fields: [
    // Hero
    defineField({
      name: 'heroTitle',
      title: 'Hero Title',
      type: 'string',
      group: 'hero',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Subtitle',
      type: 'string',
      group: 'hero',
    }),

    // Introduction
    defineField({
      name: 'introText',
      title: 'Introduction Text',
      type: 'text',
      rows: 4,
      group: 'intro',
    }),
    defineField({
      name: 'introImage',
      title: 'Introduction Image',
      type: 'image',
      options: { hotspot: true },
      group: 'intro',
    }),
    defineField({
      name: 'introImageCaption',
      title: 'Introduction Image Caption',
      type: 'string',
      group: 'intro',
    }),

    // Safety
    defineField({
      name: 'safetyIntro',
      title: 'Safety Section Intro',
      type: 'text',
      rows: 3,
      group: 'safety',
    }),
    defineField({
      name: 'helmetRules',
      title: 'Helmet Rules',
      type: 'array',
      group: 'safety',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'text', title: 'Rule Text', type: 'string', validation: (Rule) => Rule.required() },
          ],
          preview: { select: { title: 'text' } },
        },
      ],
    }),
    defineField({
      name: 'fallingToolsOptions',
      title: 'Falling Tools Options',
      type: 'array',
      group: 'safety',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'description', title: 'Description', type: 'text', rows: 2 },
            { name: 'details', title: 'Details (bullet points)', type: 'array', of: [{ type: 'string' }] },
          ],
          preview: { select: { title: 'title', subtitle: 'description' } },
        },
      ],
    }),
    defineField({
      name: 'safetyImageHelmet',
      title: 'Safety Photo: Helmet (lead climbing with helmet)',
      type: 'image',
      options: { hotspot: true },
      group: 'safety',
      fields: [{ name: 'caption', title: 'Caption', type: 'string' }],
    }),
    defineField({
      name: 'safetyImageTethers',
      title: 'Safety Photo: Tethers (tethers attached to toprope)',
      type: 'image',
      options: { hotspot: true },
      group: 'safety',
      fields: [{ name: 'caption', title: 'Caption', type: 'string' }],
    }),
    defineField({
      name: 'safetyImageCordon',
      title: 'Safety Photo: Cordoned Area (helmet sign)',
      type: 'image',
      options: { hotspot: true },
      group: 'safety',
      fields: [{ name: 'caption', title: 'Caption', type: 'string' }],
    }),

    // Protecting the Wall
    defineField({
      name: 'wallProtectionIntro',
      title: 'Wall Protection Intro',
      type: 'text',
      rows: 2,
      group: 'wall',
    }),
    defineField({
      name: 'backerPlateDescription',
      title: 'What Are Backer Plates',
      type: 'text',
      rows: 3,
      group: 'wall',
    }),
    defineField({
      name: 'backerPlateMaterials',
      title: 'Backer Plate Materials',
      type: 'array',
      group: 'wall',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'backerPlateSizes',
      title: 'Common Sizes',
      type: 'array',
      group: 'wall',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'wallOverviewImage',
      title: 'Wall Overview Photo (e.g. wall with volumes and plywood)',
      type: 'image',
      options: { hotspot: true },
      group: 'wall',
      fields: [{ name: 'caption', title: 'Caption', type: 'string' }],
    }),
    defineField({
      name: 'wallImages',
      title: 'Wall Protection Images',
      type: 'array',
      group: 'wall',
      of: [
        {
          type: 'image',
          options: { hotspot: true },
          fields: [{ name: 'caption', title: 'Caption', type: 'string' }],
        },
      ],
    }),

    // Route Setting
    defineField({
      name: 'drytoolingHoldsIntro',
      title: 'Drytooling Holds Intro Text',
      type: 'text',
      rows: 3,
      group: 'routeSetting',
      description: 'Introductory text displayed at the top of the Route Setting section',
    }),
    defineField({
      name: 'standardHoldsDescription',
      title: 'Standard Climbing Holds Description',
      type: 'text',
      rows: 2,
      group: 'routeSetting',
    }),
    defineField({
      name: 'drytoolingHoldManufacturers',
      title: 'Drytooling Hold Manufacturers',
      type: 'array',
      group: 'routeSetting',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Name', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'country', title: 'Country', type: 'string' },
          ],
          preview: {
            select: { title: 'name', subtitle: 'country' },
          },
        },
      ],
    }),
    defineField({
      name: 'creativeHoldOptions',
      title: 'Creative Hold Options',
      type: 'array',
      group: 'routeSetting',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'creativeHoldsNote',
      title: 'Creative Holds Note',
      type: 'string',
      group: 'routeSetting',
    }),
    defineField({
      name: 'overhangMin',
      title: 'Overhang Minimum (degrees)',
      type: 'number',
      group: 'routeSetting',
    }),
    defineField({
      name: 'overhangMax',
      title: 'Overhang Maximum (degrees)',
      type: 'number',
      group: 'routeSetting',
    }),
    defineField({
      name: 'overhangDescription',
      title: 'Overhanging Terrain Description',
      type: 'text',
      rows: 2,
      group: 'routeSetting',
    }),
    defineField({
      name: 'beginnerTips',
      title: 'Beginner Route Tips',
      type: 'array',
      group: 'routeSetting',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'advancedTips',
      title: 'Advanced Route Tips',
      type: 'array',
      group: 'routeSetting',
      of: [{ type: 'string' }],
    }),
    defineField({
      name: 'routeSettingImage',
      title: 'Route Setting Image',
      type: 'image',
      options: { hotspot: true },
      group: 'routeSetting',
      fields: [{ name: 'caption', title: 'Caption', type: 'string' }],
    }),

    // Alternatives
    defineField({
      name: 'alternativesIntro',
      title: 'Alternatives Subtitle',
      type: 'string',
      group: 'alternatives',
    }),
    defineField({
      name: 'alternatives',
      title: 'Alternatives',
      type: 'array',
      group: 'alternatives',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'subtitle', title: 'Subtitle', type: 'string' },
            { name: 'image', title: 'Image', type: 'image', options: { hotspot: true } },
            { name: 'imageCaption', title: 'Image Caption', type: 'string' },
            { name: 'pros', title: 'Pros', type: 'array', of: [{ type: 'string' }] },
            { name: 'cons', title: 'Cons', type: 'array', of: [{ type: 'string' }] },
            { name: 'note', title: 'Note', type: 'string' },
          ],
          preview: { select: { title: 'title', subtitle: 'subtitle' } },
        },
      ],
    }),
    defineField({
      name: 'alternativesBottomLine',
      title: 'Bottom Line Text',
      type: 'text',
      rows: 2,
      group: 'alternatives',
    }),

    // Gyms
    defineField({
      name: 'gymsTitle',
      title: 'Gyms Section Title',
      type: 'string',
      group: 'gyms',
    }),
    defineField({
      name: 'gymsSubtitle',
      title: 'Gyms Section Subtitle',
      type: 'string',
      group: 'gyms',
    }),
    defineField({
      name: 'gymsList',
      title: 'Gyms List',
      type: 'array',
      group: 'gyms',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'name', title: 'Gym Name', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'location', title: 'Location', type: 'string', validation: (Rule) => Rule.required() },
            { name: 'country', title: 'Country', type: 'string', options: { list: ['USA', 'Canada'] }, initialValue: 'USA', validation: (Rule) => Rule.required() },
            { name: 'note', title: 'Note (e.g. "Special events")', type: 'string' },
          ],
          preview: {
            select: { title: 'name', subtitle: 'location' },
          },
        },
      ],
    }),
    defineField({
      name: 'gymsImage',
      title: 'Gyms Section Image',
      type: 'image',
      options: { hotspot: true },
      group: 'gyms',
      fields: [{ name: 'caption', title: 'Caption', type: 'string' }],
    }),

    // CTA
    defineField({
      name: 'ctaTitle',
      title: 'CTA Title',
      type: 'string',
      group: 'cta',
    }),
    defineField({
      name: 'ctaText',
      title: 'CTA Text',
      type: 'text',
      rows: 2,
      group: 'cta',
    }),
    defineField({
      name: 'ctaEmail',
      title: 'CTA Email',
      type: 'string',
      group: 'cta',
    }),
  ],
})
