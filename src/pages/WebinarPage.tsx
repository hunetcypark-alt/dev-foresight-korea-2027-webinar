import { useState } from 'react'
import { meta } from '../_data/meta'
import { trackInfos } from '../_data/tracks'
import AuthSection from '../sections/AuthSection'
import StreamSection from '../sections/StreamSection'

export default function WebinarPage() {
  const [view, setView] = useState<'auth' | 'stream'>('auth')

  return (
    <div id="page-webinar" className="page active">
      <div className="wb-bg" aria-hidden="true">
        <div className="wb-bg-sphere"></div>
        <div className="wb-bg-fade"></div>
      </div>

      {view === 'auth' ? (
        <AuthSection meta={meta} onAuth={() => setView('stream')} />
      ) : (
        <StreamSection tracks={trackInfos} />
      )}
    </div>
  )
}
