import { client, urlFor } from '@/lib/sanity'
import BoardGrid from './BoardGrid'

interface BoardMember {
  _id: string
  name: string
  role: string
  bio?: string
  photo?: { asset: { _ref: string } }
  category?: 'executive' | 'board'
}

async function getLeadershipMembers(): Promise<BoardMember[]> {
  return client.fetch(
    `*[_type == "boardMember" && active == true] | order(order asc) {
      _id, name, role, bio, photo, category
    }`
  )
}

function toCards(members: BoardMember[]) {
  return members.map((m) => ({
    _id: m._id,
    name: m.name,
    role: m.role,
    bio: m.bio,
    photoUrl: m.photo
      ? urlFor(m.photo).width(600).height(800).auto('format').quality(80).url()
      : undefined,
  }))
}

export default async function BoardSection() {
  const members = await getLeadershipMembers()

  if (members.length === 0) return null

  // Existing members without a category default to Board of Directors
  const executives = members.filter((m) => m.category === 'executive')
  const boardMembers = members.filter((m) => m.category !== 'executive')

  return (
    <section className="section-padding bg-white">
      <div className="section-container">
        {executives.length > 0 && (
          <div className={boardMembers.length > 0 ? 'mb-20' : ''}>
            <div className="border-l-2 border-usa-red pl-4 mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-usa-red mb-1">
                Leadership
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-usa-navy">
                Executive Leadership
              </h2>
            </div>

            <BoardGrid members={toCards(executives)} />
          </div>
        )}

        {boardMembers.length > 0 && (
          <div>
            <div className="border-l-2 border-usa-red pl-4 mb-12">
              <p className="text-xs font-semibold uppercase tracking-widest text-usa-red mb-1">
                Governance
              </p>
              <h2 className="font-display text-3xl md:text-4xl text-usa-navy">
                Board of Directors
              </h2>
            </div>

            <BoardGrid members={toCards(boardMembers)} />
          </div>
        )}
      </div>
    </section>
  )
}
