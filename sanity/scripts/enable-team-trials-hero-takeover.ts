/**
 * Enable the homepage Hero Takeover, pointed at the 2026 Team Trials.
 *
 * Uploads LeadClimbingPhoto.jpg (already used as the tryouts hub hero) as
 * a Sanity asset and patches the `homepage` singleton to enable the Hero
 * Takeover with that image and Team Trials copy/links.
 *
 * Run with: npx sanity exec scripts/enable-team-trials-hero-takeover.ts --with-user-token
 *
 * Make sure you're in the /sanity directory when running this command.
 */

import { getCliClient } from 'sanity/cli'
import { readFileSync } from 'fs'
import { join } from 'path'

const client = getCliClient()

async function main() {
  const imagePath = join(__dirname, '../../public/LeadClimbingPhoto.jpg')
  const imageAsset = await client.assets.upload('image', readFileSync(imagePath), {
    filename: 'LeadClimbingPhoto.jpg',
  })

  await client
    .patch('homepage')
    .set({
      heroTakeover: {
        enabled: true,
        title: '2026 USA Ice Climbing Team Trials',
        subtitle: 'October 2–4, 2026 · Longmont Climbing Collective',
        image: {
          asset: { _type: 'reference', _ref: imageAsset._id },
        },
        ctaText: 'Learn More',
        ctaLink: '/events/team-tryouts-2026',
        secondaryCtaText: 'Register',
        secondaryCtaLink: '/events/team-tryouts-2026/register',
      },
    })
    .commit()

  console.log('Hero Takeover enabled, pointed at the Team Trials.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
