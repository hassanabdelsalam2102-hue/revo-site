import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation } from 'react-router-dom'
import Container from './Container'
import clsx from './clsx'

const nav = [
  { to: '/', label: 'Home' },        // ✅ ADDED
  { to: '/services', label: 'Services' },
  { to: '/how-it-works', label: 'How it works' },
  { to: '/results', label: 'Results' },
  { to: '/contact', label: 'Contact' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [showTop, setShowTop] = useState(false)
  const [progress, setProgress] = useState(0)
  const location = useLocation()
  const panelRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    setOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [location.pathname])

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY || 0
      setShowTop(y > 500)

      const doc = document.documentElement
      const scrollTop = doc.scrollTop || document.body.scrollTop
      const scrollHeight = doc.scrollHeight - doc.clientHeight
      const p = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0
      setProgress(Math.max(0, Math.min(100, p)))
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onClick = (e: MouseEvent) => {
      if (!open) return
      const panel = panelRef.current
      if (!panel) return
      if (panel.contains(e.target as Node)) return
      setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    window.addEventListener('mousedown', onClick)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('mousedown', onClick)
    }
  }, [open])

  const activeClass = useMemo(
    () => 'text-slate-900 font-semibold',
    [],
  )

  return (
    <div className="min-h-dvh bg-slate-50 text-slate-900">
      {/* scroll progress */}
      <div className="fixed left-0 top-0 z-50 h-1 w-full bg-transparent">
        <div className="h-full bg-slate-900/80" style={{ width: `${progress}%` }} />
      </div>

      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:shadow"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/80 backdrop-blur">
        <Container className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2">
            <img src="/assets/img/logo.png" alt="REVO" className="h-8 w-auto" />
          </Link>

          <nav className="hidden items-center gap-6 md:flex">
            {nav.map((i) => (
              <NavLink
                key={i.to}
                to={i.to}
                className={({ isActive }) =>
                  clsx(
                    'text-sm text-slate-600 hover:text-slate-900',
                    isActive && activeClass,
                  )
                }
              >
                {i.label}
              </NavLink>
            ))}
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                clsx(
                  'rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white hover:bg-slate-800',
                  isActive && 'ring-2 ring-slate-400/50',
                )
              }
            >
              Book a call
            </NavLink>
          </nav>

          <button
            className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white p-2 text-slate-700 shadow-sm hover:bg-slate-50 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label="Open menu"
            aria-expanded={open}
          >
            <img src="/assets/img/burger-icon.png" alt="" className="h-5 w-5" />
          </button>
        </Container>

        {/* mobile */}
        {open && (
          <div className="md:hidden">
            <Container>
              <div ref={panelRef} className="my-3 rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                <div className="flex flex-col gap-2">
                  {nav.map((i) => (
                    <NavLink
                      key={i.to}
                      to={i.to}
                      className={({ isActive }) =>
                        clsx(
                          'rounded-xl px-3 py-2 text-sm text-slate-700 hover:bg-slate-50',
                          isActive && 'bg-slate-50 text-slate-900 font-semibold',
                        )
                      }
                    >
                      {i.label}
                    </NavLink>
                  ))}
                  <NavLink
                    to="/contact"
                    className="mt-2 rounded-xl bg-slate-900 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-slate-800"
                  >
                    Book a call
                  </NavLink>
                </div>
              </div>
            </Container>
          </div>
        )}
      </header>

      <main id="main" className="pb-16">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-white">
        <Container className="py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <img src="/assets/img/logo-footer.png" alt="REVO" className="h-8 w-auto" />
              <div>
                <div className="text-sm font-semibold">REVO</div>
                <div className="text-xs text-slate-600">Real Estate Virtual Ops</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-600">
              <Link to="/privacy" className="hover:text-slate-900">Privacy</Link>
              <Link to="/terms" className="hover:text-slate-900">Terms</Link>
              <a href="mailto:ops@revo.example" className="hover:text-slate-900">ops@revo.example</a>
            </div>
          </div>

          <div className="mt-6 text-xs text-slate-500">
            © {new Date().getFullYear()} REVO. All rights reserved.
          </div>
        </Container>
      </footer>

      {/* back to top */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={clsx(
          'fixed bottom-5 right-5 z-40 rounded-2xl border border-slate-200 bg-white px-3 py-2 text-sm font-semibold text-slate-800 shadow-sm transition',
          showTop ? 'opacity-100' : 'pointer-events-none opacity-0',
        )}
        aria-label="Back to top"
      >
        ↑ Top
      </button>
    </div>
  )
}
