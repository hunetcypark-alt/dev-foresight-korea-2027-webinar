import { useRef } from 'react'
import type { TrackSpeakers } from '../_data/speakers'
import type { KeynoteData } from '../_data/meta'
import KeynoteBanner from './KeynoteBanner'
import TrackSection from '../components/TrackSection'

interface Props {
  keynote: KeynoteData
  tracks: TrackSpeakers[]
}

const trackBtns = [
  { id: 'sp-trz-a', label: 'TRACK A', sub: '거시환경',     acc: '#3cc6ff' },
  { id: 'sp-trz-b', label: 'TRACK B', sub: '경영전략',     acc: '#4aa6ff' },
  { id: 'sp-trz-c', label: 'TRACK C', sub: 'AX · Tech',   acc: '#5a8dff' },
  { id: 'sp-trz-d', label: 'TRACK D', sub: '마케팅',       acc: '#6f7bf0' },
  { id: 'sp-trz-e', label: 'TRACK E', sub: '조직·리더십', acc: '#8b5cf6' },
]

export default function SpeakersSection({ keynote, tracks }: Props) {
  const navRef = useRef<HTMLElement>(null)

  const scrollTo = (id: string, btn: HTMLButtonElement) => {
    const el = document.getElementById(id)
    if (!el) return
    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    navRef.current?.querySelectorAll('.sp-track-btn').forEach((b) => b.classList.remove('on'))
    btn.classList.add('on')
  }

  return (
    <section className="s" id="speakers" style={{ padding: '0 0 100px' }}>
      <div className="sp-bg" aria-hidden="true">
        <div className="sp-arcs"></div>
        <div className="sp-arcs sp-arcs-hi"></div>
      </div>
      <div className="sp-portal" aria-hidden="true"></div>

      <KeynoteBanner keynote={keynote} />

      <div className="wrap">
        <nav className="sp-track-nav" id="sp-track-nav" ref={navRef} aria-label="트랙 바로가기">
          <div className="sp-track-nav-inner">
            {trackBtns.map((t, i) => (
              <button
                key={t.id}
                className={`sp-track-btn${i === 0 ? ' on' : ''}`}
                style={{ '--t-acc': t.acc } as React.CSSProperties}
                onClick={(e) => scrollTo(t.id, e.currentTarget)}
              >
                {t.label}<br />
                <span style={{ fontSize: 10, fontWeight: 500, opacity: .65, letterSpacing: '.02em' }}>{t.sub}</span>
              </button>
            ))}
          </div>
        </nav>

        <div className="sp-list">
          {tracks.map((track) => (
            <TrackSection key={track.id} track={track} />
          ))}
        </div>

        <div className="sp-more-wrap">
          <a href="#" onClick={(e) => e.preventDefault()} className="sp-more-btn">
            Program &amp; Speakers 전체 보기
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <path d="M4 9h10M10 5l4 4-4 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}
