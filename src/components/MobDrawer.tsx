interface Props {
  isOpen: boolean
  currentPage: 'home' | 'webinar'
  onClose: () => void
  onSwitchPage: (page: 'home' | 'webinar') => void
}

export default function MobDrawer({ isOpen, currentPage, onClose, onSwitchPage }: Props) {
  const handleSwitch = (page: 'home' | 'webinar') => {
    onSwitchPage(page)
    onClose()
  }

  return (
    <>
      <div className={`mob-overlay${isOpen ? ' open' : ''}`} aria-hidden={!isOpen} onClick={onClose} />
      <div className={`mob-drawer${isOpen ? ' open' : ''}`} role="dialog" aria-modal="true" aria-label="내비게이션">
        <div className="mob-drawer-head">
          <span className="mob-drawer-title">FORESIGHT KOREA 2027</span>
          <button className="mob-drawer-close" aria-label="메뉴 닫기" onClick={onClose}>
            <svg viewBox="0 0 20 20" fill="none" width="18" height="18">
              <path d="M4 4l12 12M16 4L4 16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
            </svg>
          </button>
        </div>
        <nav className="mob-drawer-nav">
          <div className="mob-drawer-label">포럼 메뉴</div>
          <a
            href="#"
            data-page="home"
            className={currentPage === 'home' ? 'on' : ''}
            onClick={(e) => { e.preventDefault(); handleSwitch('home') }}
          >Home</a>
          <a href="#">CEO Remarks</a>
          <a href="#">Program &amp; Speakers</a>
          <a href="#">Events</a>
          <a href="#">Register</a>
          <a
            href="#"
            className={currentPage === 'webinar' ? 'on' : ''}
            data-live=""
            onClick={(e) => { e.preventDefault(); handleSwitch('webinar') }}
          >Webinar</a>
          <a href="#">FAQ</a>
          <div className="mob-drawer-divider" />
          <div className="mob-drawer-label">Forum Archive</div>
          <a href="#" style={{ opacity: .55, cursor: 'default' }}>
            2027 <span style={{ fontSize: 11, background: 'rgba(223,7,46,.15)', color: '#df072e', padding: '1px 6px', borderRadius: 4, fontWeight: 600, letterSpacing: '.06em' }}>NOW</span>
          </a>
          <a href="https://ceo.hunet.co.kr/foresight-korea/2026/home" target="_blank" rel="noreferrer">2026</a>
          <a href="https://ceo.hunet.co.kr/foresight-korea/2025/home" target="_blank" rel="noreferrer">2025</a>
        </nav>
      </div>
    </>
  )
}
