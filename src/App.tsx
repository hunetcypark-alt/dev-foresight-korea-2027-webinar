import { useState } from 'react'
import './style.css'

import GnbTop from './components/GnbTop'
import GnbNav from './components/GnbNav'
import MobDrawer from './components/MobDrawer'
import HomePage from './pages/HomePage'
import WebinarPage from './pages/WebinarPage'

export default function App() {
  const [page, setPage] = useState<'home' | 'webinar'>('home')
  const [drawerOpen, setDrawerOpen] = useState(false)

  return (
    <>
      <GnbTop />
      <GnbNav
        currentPage={page}
        onSwitchPage={setPage}
        onOpenDrawer={() => setDrawerOpen(true)}
      />
      <MobDrawer
        isOpen={drawerOpen}
        currentPage={page}
        onClose={() => setDrawerOpen(false)}
        onSwitchPage={setPage}
      />

      {page === 'home' ? (
        <HomePage onSwitchPage={setPage} />
      ) : (
        <WebinarPage />
      )}
    </>
  )
}
