// Run this script with: npx ts-node scripts/import-athletes.ts
// Or: npx tsx scripts/import-athletes.ts

import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'g8gl3bgu',
  dataset: 'production',
  apiVersion: '2024-01-01',
  token: process.env.SANITY_WRITE_TOKEN || '',
  useCdn: false,
})

// Athlete data from your spreadsheet
const athletes = [
  {
    name: "Alex Rudow",
    hometown: "Baltimore, MD",
    residence: "Salt Lake City, UT",
    discipline: ["lead", "speed"],
    category: "adult",
    dateOfBirth: "1991-10-21",
    funFacts: "Fun fact: I started ice climbing with my dad on an Earth Treks intro to ice climbing class in Lake Placid, NY.",
    instagram: null,
  },
  {
    name: "Amélie Peccoud",
    hometown: null,
    residence: "Louisville, CO",
    discipline: ["lead"],
    category: "adult",
    dateOfBirth: null,
    funFacts: null,
    instagram: null,
  },
  {
    name: "Angela Limbach",
    hometown: "Brookfield, WI",
    residence: "New Berlin, WI",
    discipline: ["lead", "speed"],
    category: "adult",
    dateOfBirth: "1990-07-18",
    funFacts: "Angela has been an athlete on Team USA since 2018",
    instagram: "https://instagram.com/angelalimbach",
  },
  {
    name: "Carter Schmidt",
    hometown: "Boulder, CO",
    residence: "Longmont, CO",
    discipline: ["lead", "speed"],
    category: "adult",
    dateOfBirth: "2001-10-16",
    funFacts: "This is my first season ice climbing! I come from a climbing background, but after seeing the World Cup at Longmont last year I decided to switch over to climbing on tools. I'm super excited to see what these World Cups are all about.",
    instagram: "https://instagram.com/carterjschmidt",
  },
  {
    name: "Catalina Shirley",
    hometown: "Durango, CO",
    residence: "Ouray, CO",
    discipline: ["lead", "speed"],
    category: "adult",
    dateOfBirth: "2002-09-13",
    funFacts: "Team Captain",
    instagram: "https://instagram.com/the_climber_cat",
  },
  {
    name: "Corey Buhay",
    hometown: null,
    residence: "Boulder, CO",
    discipline: ["lead"],
    category: "adult",
    dateOfBirth: "1993-04-18",
    funFacts: "Corey is a climber and journalist based in Boulder, Colorado. She is a member of the Board of Directors at The Ice Coop and has been a member of the USA Ice Climbing Team for 5 years. She is a former winner of the Ouray Elite Mixed Climbing Competition and has climbed up to D14.",
    instagram: "https://instagram.com/coreybu",
  },
  {
    name: "Dominic Gonzalez-Padron",
    hometown: "Kentwood, MI",
    residence: "Denver, CO",
    discipline: ["speed"],
    category: "adult",
    dateOfBirth: "1989-03-26",
    funFacts: "This is Dominic's third year on Team USA.  He started ice climbing when he first moved to Colorado in 2013, vowing never to do it again after bashing up his face and knees the first time. He loves all types of climbing and moutnaineering, but prefers going up a frozen wall of ice as fast as humanly possible",
    instagram: "https://instagram.com/gonza362",
  },
  {
    name: "Eli Ellis",
    hometown: null,
    residence: "Boulder, CO",
    discipline: ["lead"],
    category: "adult",
    dateOfBirth: "2001-06-28",
    funFacts: null,
    instagram: "https://instagram.com/gmeliellis",
  },
  {
    name: "Emma Dhimitri",
    hometown: "Lansing, NY",
    residence: "Boulder, CO",
    discipline: ["lead", "speed"],
    category: "adult",
    dateOfBirth: "1999-05-04",
    funFacts: "Emma started rock climbing during college, enjoying sport climbing and bouldering in the Northeast. She found her way to ice climbing and dry tooling in 2024 after moving to Boulder, CO. Her first day on ice tools was on a date to the Ice Coop, and she's been hooked ever since!",
    instagram: "https://instagram.com/emmadhimitri",
  },
  {
    name: "Gregory Love",
    hometown: null,
    residence: "Cross River, NY",
    discipline: ["lead"],
    category: "adult",
    dateOfBirth: "1991-05-25",
    funFacts: "Team Captain",
    instagram: "https://instagram.com/greg_mg_love",
  },
  {
    name: "Ian Umstead",
    hometown: null,
    residence: "Arvada, CO",
    discipline: ["lead"],
    category: "adult",
    dateOfBirth: "1994-07-03",
    funFacts: "My name is Ian and this is my second season competing for Team USA Ice climbing. I started competing in 2020 at local gym competitions and the Ouray Ice Fest. In 2022 I got 4th at the North American Championships in Ouray Colorado and in 2023 I traveled to South Korea, France, and Switzerland to compete in my first World Cup competitions. After struggling to compete at those competitions for a multitude of reasons I decided to take a step back from competition ice climbing. After three years of pursuing sport climbing I am now back on the World Cup Competition Circuit and more stoked than ever to compete for Team USA.",
    instagram: "https://instagram.com/ianumstead",
  },
  {
    name: "Ian Wedow",
    hometown: "Fairplay, CO",
    residence: "Arvada, CO",
    discipline: ["lead", "speed"],
    category: "adult",
    dateOfBirth: "1996-11-21",
    funFacts: null,
    instagram: "https://instagram.com/ian_wedow",
  },
  {
    name: "Jessica Perez",
    hometown: null,
    residence: "Golden, CO",
    discipline: ["lead"],
    category: "adult",
    dateOfBirth: null,
    funFacts: null,
    instagram: "https://instagram.com/_jperez83",
  },
  {
    name: "Kami Shupe",
    hometown: null,
    residence: "Ogden, UT",
    discipline: ["lead", "speed"],
    category: "adult",
    dateOfBirth: "1991-03-11",
    funFacts: null,
    instagram: "https://instagram.com/k_shupe_ish",
  },
  {
    name: "Keith Weeks",
    hometown: null,
    residence: "Westminster, CO",
    discipline: ["speed"],
    category: "adult",
    dateOfBirth: "1991-03-31",
    funFacts: "Keith started Ice climbing in 2019 in Ouray Colorado, and has since been very involved with the local drytooling community at The Ice Coop in Boulder, Colorado. He has competed in many US competitions (Ouray Ice Fest, Beast of the East, Milwaukee Turners, Smuggs Ice Bash) as well as the 2024 UK open in Sunderland. Noteworthy Accomplishments: 2nd place Ice Coop Turkey Takeover Nov 2023, 2nd Place Smuggs Ice Bash 2025, 3rd Place Milwaukee Turners 2025, 3rd Place Spot Winterwonderland 2022",
    instagram: "https://instagram.com/keith_jweeks",
  },
  {
    name: "Lex Border",
    hometown: null,
    residence: "Salt Lake City, UT",
    discipline: ["speed"],
    category: "adult",
    dateOfBirth: "1994-08-30",
    funFacts: null,
    instagram: "https://instagram.com/wannabe.mountain.man.lex",
  },
  {
    name: "Matthew Durham",
    hometown: null,
    residence: "Ouray, CO",
    discipline: ["speed"],
    category: "adult",
    dateOfBirth: null,
    funFacts: "Matthew first climbed ice when he was 19, going out on trips in the Midwest to states like Minnesota, Wisconsin, and in his home state of Michigan. Over the last few years, he’s worked as a single pitch instructor in the red river gorge while he pursues a degree in earth science education. In his off seasons from the red, he’s spent his winters climbing ice in Ouray.",
    instagram: "https://instagram.com/mdurham11",
  },
  {
    name: "Matthew Fox",
    hometown: "Boulder, CO",
    residence: "Boulder, CO",
    discipline: ["lead", "speed"],
    category: "adult",
    dateOfBirth: "1997-09-18",
    funFacts: "Matthew has been rock climbing for thirteen years, starting in Colorado Springs, and took up ice climbing and drytooling in 2023 in Ouray and at the Ice Coop in Boulder. He's drawn to crack climbing (especially offwidths), technical movement on tools, and most of all the welcoming, tight-knit drytooling community.",
    instagram: null,
  },
  {
    name: "Wilson Whitley",
    hometown: null,
    residence: "Bozeman, MT",
    discipline: ["lead", "speed"],
    category: "adult",
    dateOfBirth: "2008-08-20",
    funFacts: null,
    instagram: "https://instagram.com/wilsonwhitleyclimbs",
  },
  {
    name: "Zoe Schiffer",
    hometown: null,
    residence: "Ouray, CO",
    discipline: ["lead", "speed"],
    category: "adult",
    dateOfBirth: "2008-05-12",
    funFacts: null,
    instagram: "https://instagram.com/zoe_schiffer_",
  },
  {
    name: "Christian Junkar",
    hometown: null,
    residence: "Seattle, WA",
    discipline: ["lead", "speed"],
    category: "adult",
    dateOfBirth: null,
    funFacts: null,
    instagram: null,
  },
  {
    name: "Lindsay Levine",
    hometown: null,
    residence: "Ouray, CO",
    discipline: ["lead", "speed"],
    category: "adult",
    dateOfBirth: null,
    funFacts: null,
    instagram: null,
  },
  {
    name: "Sam Serra",
    hometown: "Denver, CO",
    residence: "Denver, CO",
    discipline: ["lead", "speed"],
    category: "adult",
    dateOfBirth: null,
    funFacts: "My favorite styles of climbing are ice/mixed, offwidth, and of course competition ice climbing, particularly speed ice climbing. In all forms of climbing I enjoy finding elegance and lightness in movement. 3rd place speed World Cup Longmont, 2025. Fun fact: I sang in a choir in Moscow for a few months.",
    instagram: null,
  },
]

function createSlug(name: string): string {
  return name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Remove accents
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

async function importAthletes() {
  console.log(`Importing ${athletes.length} athletes...`)
  
  for (const athlete of athletes) {
    const doc = {
      _type: 'athlete',
      name: athlete.name,
      slug: {
        _type: 'slug',
        current: createSlug(athlete.name),
      },
      residence: athlete.residence,
      discipline: athlete.discipline,
      category: athlete.category,
      ...(athlete.dateOfBirth && { dateOfBirth: athlete.dateOfBirth }),
      ...(athlete.funFacts && { funFacts: athlete.funFacts }),
      ...(athlete.instagram && {
        socialMedia: {
          instagram: athlete.instagram,
        },
      }),
    }
    
    try {
      const result = await client.create(doc)
      console.log(`✓ Created: ${athlete.name}`)
    } catch (error) {
      console.error(`✗ Failed: ${athlete.name}`, error)
    }
  }
  
  console.log('Done!')
}

importAthletes()