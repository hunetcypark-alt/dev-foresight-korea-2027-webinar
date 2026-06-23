import { useState } from 'react'

type Page = 'home' | 'webinar' | 'ceo' | 'program'

interface Props {
  currentPage: Page
  onSwitchPage: (page: Page) => void
  onOpenDrawer: () => void
}

export default function GnbNav({ currentPage, onSwitchPage, onOpenDrawer }: Props) {
  const [archiveOpen, setArchiveOpen] = useState(false)

  return (
    <div id="gnb-nav" style={{ backgroundColor: 'rgb(255,255,255)' }}>
      <button
        className="gn-hamburger"
        id="gn-hamburger"
        aria-label="메뉴 열기"
        aria-expanded="false"
        onClick={onOpenDrawer}
      >
        <svg viewBox="0 0 22 22" fill="none" aria-hidden="true">
          <path d="M3 6h16M3 11h16M3 16h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" />
        </svg>
      </button>

      <span className="gn-title" style={{ fontFamily: "'PT Serif',serif", fontWeight: 700, fontSize: 20, letterSpacing: '-.5px' }}>
        FORESIGHT KOREA 2027
      </span>

      <div className="gn-items">
        <a
          href="#"
          data-page="home"
          className={currentPage === 'home' ? 'on' : ''}
          onClick={(e) => { e.preventDefault(); onSwitchPage('home') }}
          style={{ fontSize: 16 }}
        >Home</a>
        <a
          href="#"
          data-page="ceo"
          className={currentPage === 'ceo' ? 'on' : ''}
          onClick={(e) => { e.preventDefault(); onSwitchPage('ceo') }}
          style={{ fontSize: 16 }}
        >CEO Remarks</a>
        <a
          href="#"
          data-page="program"
          className={currentPage === 'program' ? 'on' : ''}
          onClick={(e) => { e.preventDefault(); onSwitchPage('program') }}
          style={{ fontSize: 16 }}
        >Program &amp; Speakers</a>
        <a
          href="#"
          data-page="vod"
          id="gnb-vod"
          className={currentPage === 'webinar' ? 'on' : ''}
          onClick={(e) => { e.preventDefault(); onSwitchPage('webinar') }}
          style={{ fontSize: 16 }}
        >VOD</a>
        <a href="#" style={{ fontSize: 16 }}>FAQ</a>
      </div>

      <div className="gn-archive-wrap">
        <button
          type="button"
          className="gn-archive"
          aria-haspopup="true"
          aria-expanded={archiveOpen ? 'true' : 'false'}
          style={{ color: 'rgb(0,0,0)', fontSize: 16, padding: '0px' }}
          onClick={() => setArchiveOpen(!archiveOpen)}
        >
          Forum Archive
          <svg className="gn-archive-chev" viewBox="0 0 14 14" fill="none">
            <path d="M3 5l4 4 4-4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
        <div className={`gn-archive-menu${archiveOpen ? ' open' : ''}`} role="menu">
          <a href="#" role="menuitem" className="on">2027 <span className="now">NOW</span></a>
          <a href="https://ceo.hunet.co.kr/foresight-korea/2026/home" role="menuitem" target="_blank" rel="noreferrer">2026</a>
          <a href="https://ceo.hunet.co.kr/foresight-korea/2025/home" role="menuitem" target="_blank" rel="noreferrer">2025</a>
        </div>
      </div>

      <div className="gn-mob-user">
        <svg viewBox="0 0 24 24" fill="none" width="22" height="22" aria-hidden="true">
          <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.6" />
          <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </div>
    </div>
  )
}
