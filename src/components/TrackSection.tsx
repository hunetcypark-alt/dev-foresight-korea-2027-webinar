import type { TrackSpeakers } from '../_data/speakers'
import SpeakerCard from './SpeakerCard'

interface Props {
  track: TrackSpeakers
  onScrollTo?: (id: string, btn: HTMLElement) => void
}

export default function TrackSection({ track }: Props) {
  return (
    <div className="trz" id={track.id} style={{ '--acc': track.acc, padding: '80px 0 0' } as React.CSSProperties}>
      <div className="trz-head srise">
        <div className="trz-eyebrow">
          <span className="trz-eyebrow-track">{track.label}</span>
          <span className="trz-eyebrow-cat">{track.category}</span>
        </div>
      </div>
      <div className="trz-row">
        {track.speakers.map((speaker) => (
          <SpeakerCard key={speaker.no} speaker={speaker} />
        ))}
      </div>
    </div>
  )
}
