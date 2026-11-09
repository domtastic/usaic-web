/**
 * Load the 2026-27 World Cup team bios, highlighted results, gyms and
 * sponsors collected after team selection.
 *
 * Only the fields given for each athlete are set. A field an athlete left
 * blank is not touched, so existing content stays. Bios replace last
 * season's bio.
 *
 * Run AFTER `migrate-athletes-to-teams.ts` STEP=prepare, which creates the
 * four new athletes' profiles.
 *
 * Prints what it would do by default. Add APPLY=1 to write the changes.
 *
 * Run with: APPLY=1 npx sanity exec scripts/load-2026-27-bios.ts --with-user-token
 *
 * Make sure you're in the /sanity directory when running this command.
 */

import { getCliClient } from 'sanity/cli'

const client = getCliClient()
const APPLY = process.env.APPLY === '1'

interface Profile {
  bio?: string
  results?: string[]
  gyms?: string[]
  sponsors?: string[]
}

const PROFILES: Record<string, Profile> = {
  'Kelsey Beyerly': {
    bio: 'Kelsey hails from the Ice Coop dojo, originally getting into "real" ice while attending the University of Colorado at Boulder. She has competed in Ouray and Finland, and is thrilled to be training this World Cup season for the USA Speed team. Outside of plywood, Kelsey loves to ski and climb in the Rocky Mountains with the preferred pocket snack of parmesan cheese.',
    gyms: ['The Ice Coop', 'Longmont Climbing Collective'],
  },
  'Molly Denholm': {
    bio: 'Originally from Baltimore, Maryland and started rock climbing in 2019. Moved out to Colorado in December 2022 after falling in love with the state on a trip to the Ouray Ice festival that same January. With loving all things climbing, slowly found ice climbing and drytooling, and joined the ice coop in 2025. Currently a student and set to graduate this upcoming May with a nurse practitioner degree. Excited for the upcoming season and to represent the USA team in my first season.',
    gyms: ['The Ice Coop'],
  },
  'Emma Dhimitri': {
    bio: "This is Emma's second season competing for Team USA. She started rock climbing during college, enjoying sport climbing and bouldering in the Northeast. She found her way to ice climbing and dry tooling in 2024 after moving to Boulder, CO. Her first day on ice tools was on a date to the Ice Coop, and she's been hooked ever since!",
    results: ['3rd Place Speed Climbing for North America in 2026'],
    gyms: ['The Ice Coop'],
  },
  'Eli Ellis': {
    bio: 'Eli began climbing as a competitive boulderer in high school, and after taking time off from competition in college has switched to competitive ice climbing. He is excited to represent the US in his third year competing in World Cups.',
    results: [
      '2nd place 2026 North American Championships',
      '1st at LCC Picks and Pitons 2025',
      '1st at Ice Coop Margaritaville 2025',
    ],
    gyms: ['The Ice Coop'],
    sponsors: ['Kaiut Yoga Boulder'],
  },
  'Matthew Fox': {
    bio: "Matthew has been rock climbing for fourteen years, starting in Colorado Springs, and took up ice climbing and drytooling in 2023 in Ouray and at the Ice Coop in Boulder. He's drawn to crack climbing (especially offwidths), technical movement on tools, and most of all the welcoming, tight-knit drytooling community.",
    gyms: ['The Ice Coop'],
  },
  'Aria Frederickson': {
    bio: 'Aria is a lifelong climber who got her start on the wall at age seven as a member of her local rock climbing team. She discovered ice climbing the summer of 2026 and quickly dedicated herself to the sport, spending countless hours training and developing her skills. Today, Aria proudly represents USA Ice Climbing on the Adult, Youth, and Speed Teams, bringing the same determination, passion, and work ethic that have defined her climbing journey from the very beginning.',
    results: ['Roctoberfest Climb YEG, 4th place'],
    gyms: ['Spire Climbing Center', 'Mountain Project'],
  },
  'Lindsay Levine': {
    bio: 'Lindsay started ice climbing in 2018 when she was 16 years old. The 2027 season will be her 5th season competing for the USA ice climbing team. This season she is hoping to become a more well rounded backcountry ice climber and improve her competition rank from last season.',
    results: [
      '4th place Longmont World Cup 2026',
      '4th place Edmonton World Cup 2026',
      'Ranked 7th overall 2026',
    ],
    gyms: ['Basecamp Ouray'],
    sponsors: ['Grivel'],
  },
  'Nina Mankouski': {
    bio: 'Nina started drytooling February of 2025 during her birthday, and every birthday since has been gifted ice climbing gear. She trains in Utah at The Scratch Pad, and is on the World Cup Speed Team.',
    results: ['2nd Lead and 3rd Speed, Ouray 2025', '1st Lead, Oulu 2026'],
    gyms: ['The Scratch Pad'],
  },
  'Alex Rausch': {
    bio: 'Alex got interested in ice climbing by joining a Deaf Climbing group event at The Ice Coop in Boulder, CO with his friends. He has been climbing for 8 years and dry tooling for 2 years. He worked his way up from the rec team, to the comp team, to the comp + team at The Ice coop.',
    gyms: ['The Ice Coop'],
  },
  'Carter Schmidt': {
    bio: 'Carter Schmidt has been Ice Climbing for one and a half years, and rock climbing for 12 years. This is his second season competing for USA Ice Climbing in World Cups and he is eager to continue pursuing competitive climbing this year.',
    gyms: ['Boulder Rock Club', 'The Ice Coop', 'Longmont Climbing Collective'],
  },
  'Catalina Shirley': {
    bio: 'Catalina grew up climbing in Durango, Colorado exploring rock, ice, and competition disciplines under the backdrop of the beautiful San Juan mountains. In 2024, Catalina became the first US athlete to ever podium in lead at an ice climbing World Cup, winning a historic silver medal in Cheongsong, South Korea. Since then, she has expanded her collection to include 6 UIAA World Cup medals in lead and 7 in speed, including her first gold. These days while continuing her training with sights set on the top of the lead podium, Catalina is loving life in Ouray, CO working as a bartender and mountain guide.',
    results: [
      '1st (Lead), Ouray Ice Festival Elite Mixed Competition, 2022, 2023 & 2024',
      '2nd (Lead), UIAA Ice Climbing World Cup, Cheongsong, South Korea, 2024',
      '1st (Speed), UIAA Ice Climbing World Cup, Cheongsong, South Korea, 2025',
      "2nd (Overall Women's Speed), UIAA Ice Climbing World Tour 2024-2025",
      "3rd (Overall Women's Lead), UIAA Ice Climbing World Tour 2025-2026",
      '1st (Lead), North American Championships, 2025 & 2026',
    ],
    gyms: ['Basecamp Ouray'],
    sponsors: ['Rab', 'Mantis Biotech', 'Brown Chicken Brown Cow Ice Cream'],
  },
  'Cambyr Skade': {
    bio: 'Cambyr is new to the USA Ice Climbing Team this year. Having only picked up tools in early 2026, she found fast success, placing first in Edmonton later that year, and carried that momentum into USA team trials. Until the 26-27 World Cup begins, Cambyr will continue to train in Halfmoon, NY, with other USA team members while also continuing her job as a route setter. Moving into the season, she reports that she is thrilled to experience the World Cup routes and world-class female climbers. "Here\'s to an incredible 26-27 ice season!"',
    gyms: ['The Edge Halfmoon'],
  },
  // Bios already on their profiles; only the gym is new
  'Wilson Whitley': {
    gyms: ['Mountain Project'],
  },
  'Mathias Olsen': {
    gyms: ['The Scratch Pad', 'Millcreek Commons', 'Momentum'],
  },
}

async function main() {
  const athletes: { _id: string; name: string }[] = await client.fetch(
    `*[_type == "athlete" && name in $names && !(_id in path("drafts.**")) && count(coalesce(teams, [])) > 0]{ _id, name }`,
    { names: Object.keys(PROFILES) }
  )

  const missing = Object.keys(PROFILES).filter((name) => !athletes.some((a) => a.name === name))
  if (missing.length) {
    console.log(`No current-team profile for: ${missing.join(', ')}`)
    if (APPLY) throw new Error('Run migrate-athletes-to-teams.ts STEP=prepare first')
  }

  const tx = client.transaction()
  for (const athlete of athletes) {
    const { bio, results, gyms, sponsors } = PROFILES[athlete.name]
    const fields = {
      ...(bio && { funFacts: bio }),
      ...(results && { results }),
      ...(gyms && { gyms }),
      ...(sponsors && { sponsors }),
    }
    tx.patch(athlete._id, (p) => p.set(fields))
    console.log(`${athlete.name}: ${Object.keys(fields).join(', ')}`)
  }

  if (!APPLY) {
    console.log('\nDry run. Nothing was changed. Add APPLY=1 to write these changes.')
    return
  }
  await tx.commit()
  console.log('\nDone.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
