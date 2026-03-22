import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { href: '#how-it-works', label: 'How It Works', external: false },
  { href: '/about', label: 'About Joe', external: true },
  { href: '/group-classes', label: 'Group Classes', external: true },
  { href: '/blog', label: 'Blog', external: true },
]

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()
  const isHome = location.pathname === '/'

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-heading/95 backdrop-blur-md border-b border-white/5 shadow-2xl'
          : 'bg-transparent'
      }`}
      role="navigation"
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center" aria-label="First Step Impact home">
            <img
              src="/logo.svg"
              alt="First Step Impact"
              className="h-14 w-auto"
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Link>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.external ? (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-white/60 hover:text-white text-sm tracking-wide transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand group-hover:w-full transition-all duration-300" />
                </Link>
              ) : (
                <a
                  key={link.href}
                  href={isHome ? link.href : `/${link.href}`}
                  className="text-white/60 hover:text-white text-sm tracking-wide transition-colors duration-200 relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-brand group-hover:w-full transition-all duration-300" />
                </a>
              )
            )}
          </div>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:4804424013"
              className="text-white/50 hover:text-white text-sm transition-colors duration-200"
            >
              (480) 442-4013
            </a>
            <a
              href="https://tidycal.com/1yn5jw3/30-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand text-white text-sm font-semibold px-6 py-2.5 hover:bg-blue-500 transition-all duration-200 tracking-wide"
            >
              Book Free Assessment
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8 p-1"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={mobileOpen}
          >
            <span
              className={`block h-[1.5px] bg-white origin-center transition-all duration-300 ${
                mobileOpen ? 'rotate-45 translate-y-[7px]' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] bg-white transition-all duration-300 ${
                mobileOpen ? 'opacity-0 scale-x-0' : ''
              }`}
            />
            <span
              className={`block h-[1.5px] bg-white origin-center transition-all duration-300 ${
                mobileOpen ? '-rotate-45 -translate-y-[7px]' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="lg:hidden bg-heading/98 backdrop-blur-xl border-t border-white/10 overflow-hidden"
          >
            <div className="px-6 py-8 flex flex-col gap-1">
              {navLinks.map((link) =>
                link.external ? (
                  <Link
                    key={link.href}
                    to={link.href}
                    className="text-white/70 hover:text-white py-3 text-base tracking-wide border-b border-white/5 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.href}
                    href={isHome ? link.href : `/${link.href}`}
                    className="text-white/70 hover:text-white py-3 text-base tracking-wide border-b border-white/5 transition-colors"
                    onClick={() => setMobileOpen(false)}
                  >
                    {link.label}
                  </a>
                )
              )}
              <div className="pt-4 flex flex-col gap-3">
                <a href="tel:4804424013" className="text-white/50 text-sm text-center">
                  (480) 442-4013
                </a>
                <a
                  href="https://tidycal.com/1yn5jw3/30-minute-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-brand text-white text-sm font-semibold px-6 py-3.5 text-center hover:bg-blue-500 transition-colors tracking-wide"
                  onClick={() => setMobileOpen(false)}
                >
                  Book Free Assessment
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  )
}
