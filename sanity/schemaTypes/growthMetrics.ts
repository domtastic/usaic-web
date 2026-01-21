import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'growthMetrics',
  title: 'Growth Metrics',
  type: 'document',
  fields: [
    defineField({
      name: 'gymCount',
      title: 'Number of Gyms',
      type: 'number',
      description: 'Number of gyms with drytooling nationwide',
      initialValue: 25,
    }),
    defineField({
      name: 'gymLabel',
      title: 'Gyms Label',
      type: 'string',
      initialValue: 'Gyms Nationwide',
    }),
    defineField({
      name: 'stateCount',
      title: 'Number of States',
      type: 'number',
      description: 'States with climbing opportunities',
      initialValue: 30,
    }),
    defineField({
      name: 'stateLabel',
      title: 'States Label',
      type: 'string',
      initialValue: 'States with Access',
    }),
    defineField({
      name: 'growthPercent',
      title: 'Growth Percentage',
      type: 'number',
      description: 'Participation growth percentage',
      initialValue: 150,
    }),
    defineField({
      name: 'growthLabel',
      title: 'Growth Label',
      type: 'string',
      initialValue: 'Growth Since 2020',
    }),
    defineField({
      name: 'olympicYear',
      title: 'Olympic Year',
      type: 'number',
      initialValue: 2030,
    }),
    defineField({
      name: 'olympicLabel',
      title: 'Olympic Label',
      type: 'string',
      initialValue: 'Olympic Bound',
    }),
  ],
  preview: {
    prepare() {
      return {
        title: 'Growth Metrics',
        subtitle: 'Homepage statistics',
      }
    },
  },
})