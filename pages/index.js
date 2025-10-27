import dynamic from 'next/dynamic'

// Use dynamic import to avoid server pre-rendering. Next js automatically pre-renders all pages.
const TurtleEarnWidget = dynamic(
  () => import('../components/TurtleEarnWidget').then((mod) => mod.TurtleEarnWidget),
  { ssr: false }
)

export default function Home() {
  return (
    <div>
      <TurtleEarnWidget />
    </div>
  )
}
