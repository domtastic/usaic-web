/**
 * Move the homepage Hero Takeover onto the new Buttons list, pointed at the
 * 2026 Team Trials results.
 *
 * Tryouts are over, so "View Results" is shown and the old "Learn More" and
 * "Register" buttons are kept but hidden (they can be switched back on in
 * Studio). The legacy single-button fields are cleared since Buttons now
 * replaces them. Title, subtitle and image are untouched.
 *
 * Run AFTER the code that reads `heroTakeover.buttons` is deployed, or the
 * homepage hero will briefly show no buttons.
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
      'heroTakeover.buttons': [
        { _key: 'results', _type: 'heroButton', text: 'View Results', link: '/events/team-tryouts-2026/results', show: true },
        { _key: 'learn-more', _type: 'heroButton', text: 'Learn More', link: '/events/team-tryouts-2026', show: false },
        { _key: 'register', _type: 'heroButton', text: 'Register', link: '/events/team-tryouts-2026/register', show: false },
      ],
    })
    .unset([
      'heroTakeover.ctaText',
      'heroTakeover.ctaLink',
      'heroTakeover.secondaryCtaText',
      'heroTakeover.secondaryCtaLink',
    ])
    .commit()

  console.log('Hero Takeover now uses the Buttons list, showing View Results.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
