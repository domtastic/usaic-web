/**
 * Upload script for press coverage articles
 *
 * Run with:
 * npx sanity exec sanity/scripts/upload-press-articles.ts --with-user-token
 */

import { getCliClient } from 'sanity/cli'

const client = getCliClient()

const pressArticles = [
  {
    _type: 'pressArticle',
    _id: 'press-uiaa-malbun-2026',
    headline: 'Youth climbers to the fore in Malbun',
    publication: 'UIAA Ice Climbing',
    url: 'https://iceclimbing.sport/youth-climbers-to-the-fore-in-malbun/',
    date: '2026-02-01',
    description: 'Official UIAA recap of the 2026 Ice Climbing World Youth Championships in Malbun, Liechtenstein, highlighting USA athletes Conner Bailey and Mathias Olsen.',
  },
  {
    _type: 'pressArticle',
    _id: 'press-deseret-world-champions-2026',
    headline: '14-year-old World Champions with Olympic Dreams',
    publication: 'Deseret News',
    url: 'https://www.deseret.com/videos/2026/02/20/14-year-old-world-champions-with-olympic-dreams/',
    date: '2026-02-20',
    description: 'Video feature on Utah\'s 14-year-old youth ice climbing world champions and their aspirations for the Olympics.',
  },
  {
    _type: 'pressArticle',
    _id: 'press-ksl-factory-desert-2026',
    headline: 'The ice-climbing factory in the desert',
    publication: 'KSL.com',
    url: 'https://www.ksl.com/article/51451941/the-ice-climbing-factory-in-the-desert',
    date: '2026-02-22',
    description: 'How The Scratch Pad dry-tooling gym in Bountiful, Utah became the training ground for more than half of the USA Youth National Ice Climbing Team.',
  },
  {
    _type: 'pressArticle',
    _id: 'press-cottonwood-heights-olsen-2026',
    headline: 'Brighton student gets gold, silver in Ice Climbing World Youth Championship',
    publication: 'Cottonwood Heights Journal',
    url: 'https://www.cottonwoodheightsjournal.com/2026/02/27/565047/brighton-student-gets-gold-silver-in-ice-climbing-world-youth-championship',
    date: '2026-02-27',
    description: 'Profiles Brighton High School freshman Mathias Olsen, 14, who won gold in speed and silver in lead at the UIAA Ice Climbing World Youth Championships.',
  },
  {
    _type: 'pressArticle',
    _id: 'press-fox13-bountiful-celebrate-2026',
    headline: 'Team USA athletes celebrate climb to championships in Bountiful',
    publication: 'FOX 13 Salt Lake City',
    url: 'https://www.fox13now.com/good-day-utah/team-usa-athletes-celebrate-climb-to-championships-in-bountiful',
    date: '2026-02-16',
    description: 'Homecoming celebration at The Scratch Pad in Bountiful for USA Youth National Team members who swept the podiums at the UIAA Ice Climbing World Youth Championships.',
  },
  {
    _type: 'pressArticle',
    _id: 'press-abc4-world-champions-utah-2026',
    headline: 'Youth athletes return home to Utah as Ice Climbing World Champions',
    publication: 'ABC4 Utah',
    url: 'https://www.abc4.com/news/wasatch-front/youth-athletes-bountiful-ice-climbing-world-champions/',
    date: '2026-02-17',
    description: 'Utah youth ice climbers return from the UIAA World Youth Championships in Liechtenstein, where Mathias Olsen and Conner Bailey each won gold.',
  },
  {
    _type: 'pressArticle',
    _id: 'press-kaal-mantorville-top-2026',
    headline: 'Mantorville teen climbing his way to the top',
    publication: 'ABC 6 News',
    url: 'https://www.kaaltv.com/sports/mantorville-teen-climbing-his-way-to-the-top/',
    date: '2026-01-14',
    description: 'Profile of Dominic Unnasch, a Mantorville, Minnesota teen preparing to represent the USA at the UIAA Ice Climbing World Youth Championships.',
  },
]

async function uploadPressArticles() {
  console.log(`Uploading ${pressArticles.length} press articles...`)

  for (const article of pressArticles) {
    try {
      await client.createOrReplace(article)
      console.log(`✓ ${article.publication} — ${article.headline}`)
    } catch (err) {
      console.error(`✗ Failed: ${article.headline}`, err)
    }
  }

  console.log('\nDone.')
}

uploadPressArticles()
