/**
 * Import script for 2025-26 USA Ice Climbing Youth National Team
 *
 * Run with: npx tsx scripts/import-youth-athletes.ts
 *
 * Before running:
 * 1. Fill in the photoPath for each athlete (absolute or relative path to image file)
 *    Leave photoPath as '' to skip the photo upload for that athlete.
 * 2. Make sure SANITY_WRITE_TOKEN is set in .env.local
 */

import 'dotenv/config'
import { config } from 'dotenv'
config({ path: '.env.local' })
import { createClient } from '@sanity/client'
import * as fs from 'fs'
import * as path from 'path'

const client = createClient({
  projectId: 'g8gl3bgu',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN || '',
  useCdn: false,
})

// Drop photos in a folder, e.g. scripts/photos/youth/, then set the path here.
// Example: photoPath: 'scripts/photos/youth/conner-bailey.jpg'
const athletes = [
  {
    name: 'Conner Bailey',
    residence: 'UT',
    discipline: ['lead', 'speed'],
    funFacts:
      'Conner finished the UIAA Youth Ice Climbing Lead (U16) season 1st in the world. He started ice climbing at the age of 8 and participated in his first competition at the age of 10. He joined the USAIC National Youth Team at age 11, competing in events across the US before being eligible to compete internationally. He trains at the Scratchpad and Millcreek Commons.\n\n1st Place, 2026 UIAA Ice Climbing Youth World Championships in Lead (U16)\n2nd Place, 2026 UIAA Ice Climbing Youth World Championships in Speed (U16)\n1st Place, 2026 & 2025 UIAA European Youth Continental Cup at Sunderland (U16)\n2nd Place, 2026 & 2025 UIAA European Youth Continental Cup Overall\n1st Place, 2026 Ouray Youth Ice Competition',
    instagram: 'https://instagram.com/i.am.climbing.conner',
    photoPath: 'scripts/Youth Images/Conner.jpeg',
  },
  {
    name: 'Joshua Dziubczynski',
    residence: 'IL',
    discipline: ['lead', 'speed'],
    funFacts:
      'Josh joined the USAIC National Youth Team in 2024. He is based in Chicago but trains in Milwaukee. He began ice climbing with nonprofits in 2024 and placed 3rd in his first local competition in Milwaukee later that year.\n\n3rd Place, 2026 UIAA Ice Climbing Youth World Championships in Speed (U16)\n5th Place, 2025 UIAA Ice Climbing Youth World Championships in Lead (U16)',
    instagram: 'https://instagram.com/Josh_the_climber',
    photoPath: 'scripts/Youth Images/Josh.JPG',
  },
  {
    name: 'McKinley Heywood',
    residence: 'UT',
    discipline: ['lead', 'speed'],
    funFacts:
      'McKinley joined the USAIC National Youth Team in 2025 and participated in her first UIAA Ice Climbing World Championships in 2026. She trains at the Scratchpad and Millcreek Commons.\n\n1st Place, 2026 UIAA European Youth Continental Cup at Oulu, Finland (U16)\n7th Place, 2026 UIAA Ice Climbing Youth World Championships in Speed (U16)',
    instagram: '',
    photoPath: 'scripts/Youth Images/McKinley.JPEG',
  },
  {
    name: 'Soren Hotaling',
    residence: 'UT',
    discipline: ['lead', 'speed'],
    funFacts:
      'Soren started training and competing in 2025 and competed in his first Ice Climbing World Championships in 2026. He trains at the Scratchpad and Millcreek Commons.\n\n6th Place, 2026 UIAA Ice Climbing Youth World Championships in Lead (U16)\n9th Place, 2026 UIAA Ice Climbing Youth World Championships in Speed (U16)',
    instagram: '',
    photoPath: 'scripts/Youth Images/Soren Hotaling.JPG',
  },
  {
    name: 'Alex Mankouski',
    residence: 'UT',
    discipline: ['lead', 'speed'],
    funFacts:
      'Alex can be found looking for ice to climb most of the year. He started competing in 2024 and has competed in two UIAA Ice Climbing Youth World Championships. He trains at the Scratchpad and Millcreek Commons.\n\n5th Place, 2026 UIAA European Youth Continental Cup at Oulu, Finland (U20)\n4th Place, 2025 UIAA Ice Climbing World Youth Championship in Lead (U18)',
    instagram: 'https://instagram.com/alex_mankouski_photo',
    photoPath: 'scripts/Youth Images/Alex image.jpg',
  },
  {
    name: 'Nina Mankouski',
    residence: 'UT',
    discipline: ['lead', 'speed'],
    funFacts:
      'Nina started drytooling in 2025 and has since competed locally and internationally, including in Liechtenstein and Finland. Her favorite hold is some sort of sidepull, maybe a funky wrap. She hopes to win first in every category at the same time including the men\'s while holding everything as a floating stein.\n\n1st Place, 2026 UIAA European Youth Continental Cup at Oulu, Finland (U18)\n7th Place, 2026 UIAA Ice Climbing Youth World Championships in Lead (U18)\n8th Place, 2026 UIAA Ice Climbing Youth World Championships in Speed (U16)\n2nd Place, 2025 UIAA Ice Climbing World Youth Championships (U16)',
    instagram: 'https://instagram.com/phroggings',
    photoPath: 'scripts/Youth Images/Nina.JPG',
  },
  {
    name: 'Mathias Olsen',
    residence: 'UT',
    discipline: ['lead', 'speed'],
    funFacts:
      'Mathias finished the UIAA Youth Speed Ice (U16) season 1st in the world. Mathias started his ice climbing journey at just 11 years old and joined the USAIC youth team. He hones his skills at the Scratch Pad and Millcreek Commons.\n\n1st Place, 2026 UIAA Ice Climbing Youth World Championships in Speed (U16)\n2nd Place, 2026 UIAA Ice Climbing Youth World Championships in Lead (U16)\n1st Place, 2026 UIAA European Youth Continental Cup at Brno (U16)\n2nd Place, 2025 UIAA Ice Climbing Youth World Championships in Speed (U16)',
    instagram: 'https://instagram.com/mathias.olsen.climber',
    photoPath: 'scripts/Youth Images/Mathias Primary Photo.jpg',
  },
  {
    name: 'Pema Reed',
    residence: 'CO',
    discipline: ['lead', 'speed'],
    funFacts:
      'Pema competes and trains in bouldering, ice and drytooling with her coach Marcus Garcia in Durango, CO. She loves drytooling the best for its complexity and strong community. She joined the USAIC National Youth Team in 2025 and participated in her first UIAA World Championship in 2026. When she\'s not climbing you can find her mountain biking, reading, weaving and hanging out with her Bengal cat Bhutan.\n\n3rd Place, 2026 UIAA European Youth Continental Cup at Sunderland (U16)\n9th Place, 2026 UIAA Ice Climbing Youth World Championships in Lead (U16)',
    instagram: 'https://instagram.com/pema.rock.and.ice',
    photoPath: 'scripts/Youth Images/Pema Reed.jpg',
  },
  {
    // Zoe already has an adult team document. This creates a separate youth entry.
    // If you want her to appear in both tabs without a duplicate, a schema change is needed.
    name: 'Zoe Schiffer',
    residence: 'CO',
    discipline: ['lead', 'speed'],
    funFacts:
      'Zoe represents the USA on both the USAIC National Youth and Women\'s Team.\n\n1st Place, 2026 UIAA European Youth Continental Cup at Sunderland (U20)\n8th Place, 2026 UIAA Ice Climbing Youth Championships in Lead (U20)\n8th Place, 2026 UIAA Ice Climbing Youth World Championships in Speed (U20)\n1st Place, 2025 UIAA Ice Climbing World Youth Championship in Lead (U18)',
    instagram: 'https://instagram.com/zoe_schiffer_',
    photoPath: '', // Already on main site — photo already in Sanity
  },
  {
    name: 'Dominic Unnasch',
    residence: 'MN',
    discipline: ['lead', 'speed'],
    funFacts:
      'Dominic joined the USAIC National Youth Team in 2023 and has competed locally, nationally, and internationally. He is based in Minnesota and trains on his home wall.\n\n3rd Place, 2026 Youth World Speed Ice Championships (U18)\n6th Place, 2026 UIAA Ice Climbing Youth World Championships in Lead (U18)\n1st Place, 2025 Ouray Ice Fest Youth Competition\n4th Place, 2025 UIAA Ice Climbing World Youth Championships (U16)\n6th Place, 2024 UIAA Ice Climbing Youth World Championships in Lead (U16)',
    instagram: '',
    photoPath: 'scripts/Youth Images/Dominic Preferred Image .jpeg',
  },
  {
    // Wilson already has an adult team document. This creates a separate youth entry.
    name: 'Wilson Whitley',
    residence: 'MT',
    discipline: ['lead', 'speed'],
    funFacts:
      'Wilson represents the USA on both the USAIC National Youth and Men\'s Team. He is currently ranked 9th in the world for men.\n\n1st Place, 2026 North American Championship (Men) Lead and Speed\n5th Place, 2026 World Cup - Longmont, CO (Men) Lead\n3rd Place, 2026 UIAA European Youth Continental Cup at Sunderland (U20)\n2nd Place, 2024 UIAA Ice Climbing World Youth Championship in Speed (U18)\n2025 Youngest Climber to climb D16+, Téleios, the hardest dry tooling route in the World\nYoungest Climber to climb the grades D13+ (15), D14- (15), D15+ (17) and D16+ (17)',
    instagram: 'https://instagram.com/wilsonwhitleyclimbs',
    photoPath: 'scripts/Youth Images/Wilson Whitley.jpg',
  },
]

function createSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

async function uploadPhoto(photoPath: string, name: string) {
  const resolvedPath = path.resolve(photoPath)
  if (!fs.existsSync(resolvedPath)) {
    console.warn(`  ⚠ Photo not found: ${resolvedPath} — skipping`)
    return undefined
  }
  const asset = await client.assets.upload('image', fs.createReadStream(resolvedPath), {
    filename: path.basename(resolvedPath),
  })
  console.log(`  ↑ Uploaded photo for ${name}`)
  return {
    _type: 'image' as const,
    asset: { _type: 'reference' as const, _ref: asset._id },
  }
}

async function importAthletes() {
  console.log(`Importing ${athletes.length} youth athletes...\n`)

  for (const athlete of athletes) {
    console.log(`Processing: ${athlete.name}`)

    let photo = undefined
    if (athlete.photoPath) {
      photo = await uploadPhoto(athlete.photoPath, athlete.name)
    }

    const slug = createSlug(athlete.name)

    const doc = {
      _type: 'athlete',
      _id: `youth-${slug}`,
      name: athlete.name,
      slug: { _type: 'slug', current: slug },
      residence: athlete.residence,
      discipline: athlete.discipline,
      category: 'youth',
      funFacts: athlete.funFacts,
      ...(photo && { photo }),
      ...(athlete.instagram && {
        socialMedia: { instagram: athlete.instagram },
      }),
    }

    try {
      await client.createOrReplace(doc)
      console.log(`  ✓ Saved: ${athlete.name}\n`)
    } catch (error) {
      console.error(`  ✗ Failed: ${athlete.name}`, error, '\n')
    }
  }

  console.log('Done!')
}

importAthletes()
