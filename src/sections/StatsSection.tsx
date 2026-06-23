import { useEffect, useRef } from 'react'
import type { Stat } from '../_data/stats'
import StatCard from '../components/StatCard'

interface Props { stats: Stat[] }

export default function StatsSection({ stats }: Props) {
  const gridRef = useRef<HTMLUListElement>(null)

  useEffect(() => {
    const grid = gridRef.current
    if (!grid) return
    const cards = Array.from(grid.querySelectorAll<HTMLElement>('.stat-card'))
    if (!cards.length) return
    const spreads = [
      'translateX(-300px) translateY(80px) rotateZ(-16deg) scale(0.82)',
      'translateX(-110px) translateY(36px) rotateZ(-7deg)  scale(0.92)',
      'translateX( 110px) translateY(36px) rotateZ( 7deg)  scale(0.92)',
      'translateX( 300px) translateY(80px) rotateZ( 16deg) scale(0.82)',
    ]
    cards.forEach((card, i) => {
      card.style.transition = 'none'
      card.style.transform = spreads[i] || ''
      card.style.opacity = '0'
    })
    let triggered = false
    const observer = new IntersectionObserver((entries) => {
      if (triggered || !entries[0].isIntersecting) return
      triggered = true
      observer.disconnect()
      cards.forEach((card, i) => {
        setTimeout(() => {
          card.style.transition = 'transform 0.92s cubic-bezier(0.22,1,0.36,1),opacity 0.65s ease'
          card.style.transform = 'none'
          card.style.opacity = '1'
          setTimeout(() => {
            card.style.transition = ''
            card.style.transform = ''
            card.style.opacity = ''
            card.classList.add('is-floating')
          }, 960)
        }, i * 85)
      })
    }, { threshold: 0.28 })
    observer.observe(grid)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="s s-stats" id="stats">
      <div className="st-bg" aria-hidden="true">
        <div className="st-bloom"></div>
      </div>
      <div className="stats-bg-title" aria-hidden="true">FORESIGHT</div>
      <div className="wrap">
        <h2 className="s-h reveal">숫자로 증명하는<br /><em>포럼의 가치</em></h2>
        <ul className="stats-grid" ref={gridRef}>
          {stats.map((stat) => (
            <StatCard key={stat.label} stat={stat} />
          ))}
        </ul>
      </div>
    </section>
  )
}
