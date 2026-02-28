import { useEffect, useMemo, useRef, useState } from 'react'
import { Link, NavLink, Outlet, useLocation, useNavigate, useRoutes } from 'react-router-dom'
import Container from './Container'
import clsx from './clsx'
import { HighlightedButton } from './Button'

const navbuttons = [
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
  const buttonRef = useRef<HTMLButtonElement | null>(null)
  const navigate = useNavigate();
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
      const button = buttonRef.current
      const target = e.target as Node
      if (!panel || !button) return
      if (panel.contains(target) || button.contains(target)) return
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
    <div className="min-h-dvh bg-background text-slate-900">


      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-xl focus:bg-white focus:px-4 focus:py-2 focus:shadow"
      >
        Skip to content
      </a>

      <header className="sticky top-0 z-40 border-b border-slate-200/30 bg-background/90 backdrop-blur">
        <Container className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center gap-2">
            <img src="/assets/img/logo.png" alt="REVO" className="w-auto h-8" />
          </Link>
        {/* scroll progress */}
        <div className="fixed left-0 z-50 w-full h-1 bg-transparent top-16">
          <div className="h-full bg-gradient-to-r from-[var(--accent)] to-[var(--accent2)]" style={{ width: `${progress}%` }} />
        </div>
          <nav className="items-center hidden gap-6 md:flex">
            {navbuttons.map((i) => (
              <NavLink
                key={i.to}
                to={i.to}
                className={({ isActive }) =>
                  clsx(
                    'text-sm text-white hover:text-slate-600',
                    isActive && activeClass,
                  )
                }
              >
                {i.label}
              </NavLink>
            ))}
              <HighlightedButton onClick={() => navigate('/contact')}>Book a call</HighlightedButton>
          </nav>

          <button
            ref={buttonRef}
            className="inline-flex items-center justify-center shadow-sm rounded-xl text-slate-700 md:hidden"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <img src="/assets/img/burger-icon.png" alt="" className={`h-7 w-7 transition duration-200 ease-in-out ${open ? "rotate-[360deg]" : "rotate-0"}`} />
          </button>
        </Container>

        {/* mobile */}
        {open && (
          <div className="md:hidden">
            <Container>
              <div ref={panelRef} className="p-4 my-3 bg-white border shadow-sm rounded-2xl border-slate-200">
                <div className="flex flex-col gap-2">
                  {navbuttons.map((i) => (
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
                 <HighlightedButton onClick={() => navigate('/contact')} >
                    Book a call
                  </HighlightedButton>
                </div>
              </div>
            </Container>
          </div>
        )}
      </header>

      <main id="main" className="pb-16">
        <Outlet />
      </main>

      <footer className="border-t border-slate-200 bg-gradient-to-bl from-background to-primary-600 ">
        <Container className="py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-3">
              <img src="/assets/img/logo-footer.png" alt="REVO" className="w-auto h-8" />
              <div>
                <div className="text-sm font-semibold text-white">REVO</div>
                <div className="text-xs text-[#B9C3E6]">Real Estate Virtual Ops</div>
              </div>
            </div>

            <div className="flex flex-wrap items-center text-sm gap-x-6 gap-y-2 text-white/75">
              <Link to="/privacy" className="hover:text-white">Privacy</Link>
              <Link to="/terms" className="hover:text-white">Terms</Link>
              <a href="mailto:info@revoeg.com" className="hover:text-white">info@revoeg.com</a>
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
