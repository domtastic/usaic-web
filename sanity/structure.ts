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
            ])
        ),
      S.divider(),
      S.documentTypeListItem('athlete').title('Athletes'),
      S.listItem()
        .title('Youth Roster')
        .child(S.document().schemaType('youthRoster').documentId('youthRoster')),
      S.documentTypeListItem('historicalRoster').title('Historical Rosters'),
      S.divider(),
      S.documentTypeListItem('event').title('Events'),
      S.documentTypeListItem('article').title('News Articles'),
      S.documentTypeListItem('sponsor').title('Sponsors'),
      S.documentTypeListItem('medalCount').title('Medal Count'),

    ])