import { useState, useEffect } from 'react'
import './style.css'

import GnbTop from './components/GnbTop'
import GnbNav from './components/GnbNav'
import MobDrawer from './components/MobDrawer'
import HomePage from './pages/HomePage'
import WebinarPage from './pages/WebinarPage'

function useScrollReveal() {
  useEffect(() => {
    let revEls: Element[] = []
    let srEls: Element[] = []

    function init() {
      revEls = Array.from(document.querySelectorAll('.reveal:not(.in)'))
      srEls  = Array.from(document.querySelectorAll('.srise:not(.in)'))
    }

    function check() {
      const vh = window.innerHeight
      for (let k = revEls.length - 1; k >= 0; k--) {
        if (revEls[k].getBoundingClientRect().top < vh * 0.88) {
          revEls[k].classList.add('in')
          revEls.splice(k, 1)
        }
      }
      for (let j = srEls.length - 1; j >= 0; j--) {
        if (srEls[j].getBoundingClientRect().top < vh * 0.88) {
          srEls[j].classList.add('in')
          srEls.splice(j, 1)
        }
      }
    }

    init()
    check()
    setTimeout(check, 100)
    setTimeout(check, 400)
    const timer = setInterval(() => { init(); check() }, 350)
    window.addEventListener('scroll', check, { passive: true })
    window.addEventListener('resize', check, { passive: true })

    return () => {
      clearInterval(timer)
      window.removeEventListener('scroll', check)
      window.removeEventListener('resize', check)
    }
  }, [])
}

export default function App() {
  const [page, setPage] = useState<'home' | 'webinar'>('home')
  const [drawerOpen, setDrawerOpen] = useState(false)

  useScrollReveal()

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
