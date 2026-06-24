import { useState, useRef, useLayoutEffect } from 'react'
import type { TrackInfo, Session } from '../_data/tracks'

interface Props { tracks: TrackInfo[] }

const TABS = [
  { key: 'keynote', label: 'KEYNOTE' },
  { key: 'a', label: 'TRACK A' },
  { key: 'b', label: 'TRACK B' },
  { key: 'c', label: 'TRACK C' },
  { key: 'd', label: 'TRACK D' },
  { key: 'e', label: 'TRACK E' },
]

function SessionItem({ s }: { s: Session }) {
  const cls = s.live ? 'wb-sess wb-sess--live' : s.ended ? 'wb-sess wb-sess--ended' : 'wb-sess wb-sess--upcoming'
  return (
    <li className={cls}>
      <div className="wb-sess-thumb">
        <img
          src={s.img}
          alt={s.name}
          className={s.tbd ? 'wb-sess-tbd' : undefined}
        />
      </div>
      <div className="wb-sess-info">
        <p className="wb-sess-time">
          {s.live && (
            <span className="wb-live-badge">
              <span className="wb-live-dot"></span>LIVE
            </span>
          )}
          {s.ended && <span className="wb-ended-badge">종료</span>}
          {s.time}
        </p>
        <h4 className="wb-sess-title">{s.title}</h4>
        <div className="wb-sess-speaker">
          {s.tbd ? (
            <><strong>TBD</strong><span className="wb-sess-sep">·</span><span>섭외 진행 중</span></>
          ) : (
            <><strong>{s.name}</strong>{s.org && <><span className="wb-sess-sep">·</span><span>{s.org}</span></>}</>
          )}
        </div>
      </div>
    </li>
  )
}

export default function StreamSection({ tracks }: Props) {
  const [activeKey, setActiveKey] = useState('a')
  const layoutRef = useRef<HTMLDivElement>(null)
  const tabsRef = useRef<HTMLDivElement>(null)

  const info = tracks.find((t) => t.key === activeKey) ?? tracks[1]
  const liveSession = info.sessions.find((s) => s.live) ?? info.sessions[0]

  useLayoutEffect(() => {
    const sync = () => {
      if (!layoutRef.current || !tabsRef.current) return
      const offset = tabsRef.current.getBoundingClientRect().top - layoutRef.current.getBoundingClientRect().top
      layoutRef.current.style.setProperty('--wb-lhdr-h', `${Math.max(0, offset)}px`)
    }
    sync()
    const ro = new ResizeObserver(sync)
    if (layoutRef.current) ro.observe(layoutRef.current)
    if (tabsRef.current) ro.observe(tabsRef.current)
    return () => ro.disconnect()
  }, [])

  const switchTrack = (key: string) => {
    setActiveKey(key)
  }

  return (
    <div
      id="wb-stream"
      className="wb-state"
      style={{ '--wb-acc': info.acc } as React.CSSProperties}
    >
      <div className="wb-stream-bg"></div>
      <div className="wb-stream-ai"></div>
      <div className="wb-stream">
        <div className="wb-content">
          <div className="wb-layout" ref={layoutRef}>

            <div className="wb-left">
              <div className="wb-lhdr">
                <div className="wb-logo">
                  <img src="./assets/img/fk-symbol.svg" alt="FORESIGHT KOREA 2027" />
                </div>
                <div className="wb-tabs-col">
                  <p className="wb-hint">아래 탭을 선택하고 실시간 스트리밍을 시청하세요.</p>
                  <div className="wb-tabs" role="tablist" ref={tabsRef}>
                    {TABS.map((tab) => (
                      <button
                        key={tab.key}
                        className={`wb-tab${activeKey === tab.key ? ' on' : ''}`}
                        data-track={tab.key}
                        role="tab"
                        aria-selected={activeKey === tab.key}
                        onClick={() => switchTrack(tab.key)}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="wb-player">
                <div className="wb-player-ph">
                  <img
                    src={info.thumb}
                    alt="스트리밍 대기"
                    style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center top' }}
                  />
                </div>
              </div>

              <div className="wb-now">
                <div className="wb-now-info">
                  <span style={{ display: 'none' }}>{info.label}</span>
                  <h3 className="wb-now-title">{liveSession.title}</h3>
                  <div className="wb-now-speaker">
                    <strong className="wb-now-name">{liveSession.name}</strong>
                    <span className="wb-now-sep">·</span>
                    <span className="wb-now-org">{liveSession.org ?? ''}</span>
                  </div>
                </div>
                <button className="wb-dl-btn">
                  <svg viewBox="0 0 20 20" fill="none" width="14" height="14" aria-hidden="true">
                    <path d="M10 3v10M6 9.5l4 4 4-4M4 16h12" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{info.label} 교안 받기</span>
                </button>
              </div>
            </div>

            <div className="wb-section-divider"></div>

            <div className="wb-right">
              <div className="wb-list-head">
                <span className="wb-list-track">{info.listTrack}</span>
              </div>
              <ul className="wb-sessions">
                {info.sessions.map((s, i) => (
                  <SessionItem key={i} s={s} />
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
