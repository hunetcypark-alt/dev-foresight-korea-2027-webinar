import { useRef, useState } from 'react'
import type { Insight } from '../_data/insights'

interface Props { insights: Insight[] }

export default function InsightSection({ insights }: Props) {
  const trackRef = useRef<HTMLDivElement>(null)
  const [idx, setIdx] = useState(0)
  const [modalYtid, setModalYtid] = useState<string | null>(null)

  const slide = (n: number) => {
    const next = Math.max(0, Math.min(insights.length - 1, n))
    setIdx(next)
    if (trackRef.current) {
      trackRef.current.style.transform = `translateX(${-next * 100 / insights.length}%)`
    }
  }

  const closeModal = () => setModalYtid(null)

  return (
    <section className="s" id="insight" style={{ padding: '60px 0' }}>
      <div className="wrap">
        <div className="eyebrow"><span>Insight Preview</span><span className="idx"></span></div>
        <h2 className="s-h" style={{ textAlign: 'center', padding: 0, fontWeight: 700, marginLeft: 'auto', marginRight: 'auto' }}>
          영상으로 먼저 만나보세요
        </h2>
        <p className="s-sub" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
          포럼의 핵심만 담은 트랙별 하이라이트, 지금 바로 미리보기로 확인하세요.
        </p>

        <div className="iv-wrap">
          <button className="iv-arr iv-arr-prev" aria-label="이전" onClick={() => slide(idx - 1)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M12.5 15L7.5 10L12.5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>

          <div className="iv-viewport">
            <div className="iv-track" ref={trackRef}>
              {insights.map((item) => (
                <div className="iv-slide" key={item.ytid}>
                  <a
                    className="iv-card"
                    href="#"
                    onClick={(e) => { e.preventDefault(); setModalYtid(item.ytid) }}
                  >
                    <div className="iv-thumb">
                      <img src={`https://img.youtube.com/vi/${item.ytid}/mqdefault.jpg`} alt="" loading="lazy" />
                      <div className="iv-play">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z" /></svg>
                      </div>
                    </div>
                    <p className="iv-title">{item.title}</p>
                  </a>
                </div>
              ))}
            </div>
          </div>

          <button className="iv-arr iv-arr-next" aria-label="다음" onClick={() => slide(idx + 1)}>
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M7.5 5L12.5 10L7.5 15" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        {modalYtid && (
          <div className="iv-modal" aria-modal="true" role="dialog">
            <div className="iv-modal-bg" onClick={closeModal} />
            <div className="iv-modal-box">
              <button className="iv-modal-close" aria-label="닫기" onClick={closeModal}>
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M4 4L16 16M16 4L4 16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </button>
              <div className="iv-modal-player">
                <iframe
                  src={`https://www.youtube.com/embed/${modalYtid}?autoplay=1`}
                  title="YouTube video player"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
