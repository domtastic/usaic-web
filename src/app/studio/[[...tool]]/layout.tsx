import './studio.css'

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <div className="sanity-studio-wrapper">{children}</div>
}
