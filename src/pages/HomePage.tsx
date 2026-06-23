import { meta } from '../_data/meta'
import { stats } from '../_data/stats'
import { speakerTracks } from '../_data/speakers'
import { insights } from '../_data/insights'
import { archiveItems } from '../_data/archive'

import HeroSection from '../sections/HeroSection'
import ConceptSection from '../sections/ConceptSection'
import StatsSection from '../sections/StatsSection'
import SpeakersSection from '../sections/SpeakersSection'
import InsightSection from '../sections/InsightSection'
import ArchiveSection from '../sections/ArchiveSection'
import Footer from '../components/Footer'

interface Props {
  onSwitchPage: (page: 'home' | 'webinar' | 'ceo' | 'program') => void
}

export default function HomePage({ onSwitchPage }: Props) {
  return (
    <div id="page-home" className="page active">
      <HeroSection meta={meta} onLiveClick={() => onSwitchPage('webinar')} />
      <ConceptSection />
      <StatsSection stats={stats} />
      <div className="insight-archive-wrap">
        <div className="reg-archive-wrap">
          <SpeakersSection keynote={meta.keynote} tracks={speakerTracks} />
          <InsightSection insights={insights} />
          <ArchiveSection items={archiveItems} />
        </div>
      </div>
      <Footer />
    </div>
  )
}
