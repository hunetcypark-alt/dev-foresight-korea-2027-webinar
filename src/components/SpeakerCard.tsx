import type { Speaker } from '../_data/speakers'

function VideoIcon() {
  return (
    <svg width="13" height="13" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <rect x="1" y="3.5" width="9.5" height="9" rx="1.8" fill="currentColor" />
      <path d="M10.5 7.1L14.5 5V11L10.5 8.9V7.1Z" fill="currentColor" />
    </svg>
  )
}

interface Props { speaker: Speaker }

export default function SpeakerCard({ speaker }: Props) {
  const isManSvg = speaker.imgSrc.includes('man.svg')
  const imgStyle: React.CSSProperties = isManSvg
    ? { width: '100%', height: '100%', objectFit: 'contain', objectPosition: 'bottom center', transform: 'scale(1.2) translateY(25%)', transformOrigin: 'bottom center', opacity: 0.4 }
    : { width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top center' }

  return (
    <article className={`sc srise${speaker.isTbd ? ' is-tbd' : ''}`} style={{ fontSize: 16 }}>
      <div className="sc-photo">
        <img src={speaker.imgSrc} alt={speaker.isTbd ? '' : speaker.name} style={imgStyle} />
      </div>
      <div className="sc-no">{speaker.no}</div>
      <div className="sc-title">
        {speaker.hasVideo && (
          <span className="sc-vid-ic" title="영상 강연"><VideoIcon /></span>
        )}
        {speaker.title}
      </div>
      <div className="sc-foot">
        {!speaker.isTbd && speaker.company && <div className="sc-co">{speaker.company}</div>}
        <div className="sc-name">{speaker.name}</div>
      </div>
    </article>
  )
}
