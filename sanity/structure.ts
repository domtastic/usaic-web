import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Site Settings')
        .child(
          S.list()
            .title('Settings')
            .items([
              S.listItem()
                .title('Homepage')
                .child(S.document().schemaType('homepage').documentId('homepage')),
              S.listItem()
                .title('About Page')
                .child(S.document().schemaType('about').documentId('about')),
              S.listItem()
                .title('Disciplines Page')
                .child(S.document().schemaType('disciplines').documentId('disciplines')),
              S.listItem()
                .title('Olympic Bid Page')
                .child(S.document().schemaType('olympicBid').documentId('olympicBid')),
              S.listItem()
                .title('Team Resources')
                .child(S.document().schemaType('teamResources').documentId('teamResources')),
              S.listItem()
                .title('What is Drytooling Page')
                .child(S.document().schemaType('whatIsDrytooling').documentId('whatIsDrytooling')),
              S.listItem()
                .title('Gym Resources Page')
                .child(S.document().schemaType('gymResources').documentId('gymResources')),
              S.listItem()
                .title('Indoor Guidelines Page')
                .child(S.document().schemaType('indoorGuidelines').documentId('indoorGuidelines')),
            ])
        ),
      S.divider(),
      S.documentTypeListItem('athlete').title('Athletes'),
      S.listItem()
        .title('Youth Roster')
        .child(S.document().schemaType('youthRoster').documentId('youthRoster')),
      S.documentTypeListItem('historicalRoster').title('Historical Rosters'),
      S.divider(),
      S.listItem()
        .title('Events')
        .child(
          S.list()
            .title('Events by Season')
            .items([
              S.listItem()
                .title('2025-26 Season')
                .child(
                  S.documentList()
                    .title('2025-26 Events')
                    .filter('_type == "event" && season == "2025-26"')
                    .defaultOrdering([{ field: 'startDate', direction: 'asc' }])
                ),
              S.listItem()
                .title('2024-25 Season')
                .child(
                  S.documentList()
                    .title('2024-25 Events')
                    .filter('_type == "event" && season == "2024-25"')
                    .defaultOrdering([{ field: 'startDate', direction: 'asc' }])
                ),
              S.listItem()
                .title('2023-24 Season')
                .child(
                  S.documentList()
                    .title('2023-24 Events')
                    .filter('_type == "event" && season == "2023-24"')
                    .defaultOrdering([{ field: 'startDate', direction: 'asc' }])
                ),
              S.divider(),
              S.listItem()
                .title('All Events')
                .child(
                  S.documentList()
                    .title('All Events')
                    .filter('_type == "event"')
                    .defaultOrdering([{ field: 'startDate', direction: 'desc' }])
                ),
            ])
        ),
      S.documentTypeListItem('article').title('News Articles'),
      S.documentTypeListItem('sponsor').title('Sponsors'),
      S.documentTypeListItem('medalCount').title('Medal Count'),

    ])