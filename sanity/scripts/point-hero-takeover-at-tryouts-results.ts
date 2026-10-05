/**
 * Point the homepage Hero Takeover at the 2026 Team Trials results.
 *
 * Tryouts are over, so the hero's "Learn More" + "Register" buttons are
 * replaced with a single "View Results" button. Only the button fields are
 * touched — title, subtitle and image stay as they are.
 *
 * Run with: npx sanity exec scripts/point-hero-takeover-at-tryouts-results.ts --with-user-token
 *
 * Make sure you're in the /sanity directory when running this command.
 */

import { getCliClient } from 'sanity/cli'

const client = getCliClient()

async function main() {
  await client
    .patch('homepage')
    .set({
      'heroTakeover.ctaText': 'View Results',
      'heroTakeover.ctaLink': '/events/team-tryouts-2026/results',
    })
    .unset(['heroTakeover.secondaryCtaText', 'heroTakeover.secondaryCtaLink'])
    .commit()

  console.log('Hero Takeover now points at the Team Trials results.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
