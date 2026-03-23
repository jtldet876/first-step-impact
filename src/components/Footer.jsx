import { motion } from 'framer-motion'

const footerLinks = [
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'About Joe', href: '#about' },
  { label: 'Is This For You?', href: '#right-for-you' },
  { label: 'Investment', href: '#investment' },
]

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-heading" aria-label="Site footer">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-20 pb-12">
        <div className="grid lg:grid-cols-[1fr_1fr_1fr] gap-12 lg:gap-16 mb-16 border-b border-white/[0.06] pb-16">

          {/* Brand column */}
          <div>
            <div className="mb-5">
              <img src="/logo.svg" alt="First Step Impact" className="h-14 w-auto" style={{ filter: 'brightness(0) invert(1)' }} />
            </div>
            <p className="text-white/35 text-sm leading-relaxed mb-6 max-w-xs">
              Behavioral health expertise meets senior fitness coaching. In-home wellness for adults 55+ in
              Queen Creek and the East Valley.
            </p>
            {/* Contact */}
            <div className="space-y-2">
              <a
                href="tel:4804424013"
                className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors duration-200 group"
              >
                <svg className="w-3.5 h-3.5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (480) 442-4013
              </a>
              <a
                href="mailto:joseph@firststepimpact.com"
                className="flex items-center gap-2.5 text-white/50 hover:text-white text-sm transition-colors duration-200"
              >
                <svg className="w-3.5 h-3.5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                joseph@firststepimpact.com
              </a>
              <p className="flex items-center gap-2.5 text-white/35 text-sm">
                <svg className="w-3.5 h-3.5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                Queen Creek, AZ
              </p>
            </div>
          </div>

          {/* Navigation column */}
          <div>
            <p className="text-white/25 text-[11px] font-semibold tracking-[0.3em] uppercase mb-5">Navigate</p>
            <nav aria-label="Footer navigation">
              <ul className="space-y-3" role="list">
                {footerLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-white/45 hover:text-white text-sm transition-colors duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          {/* CTA column */}
          <div>
            <p className="text-white/25 text-[11px] font-semibold tracking-[0.3em] uppercase mb-5">Get Started</p>
            <p className="text-white/40 text-sm leading-relaxed mb-6">
              Your first step costs nothing. Schedule your free wellness assessment and let's build
              a plan that actually works for your body and your life.
            </p>
            <a
              href="https://tidycal.com/1yn5jw3/30-minute-meeting"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-brand text-white text-sm font-semibold px-6 py-3.5 hover:bg-blue-500 transition-all duration-200 tracking-wide group"
            >
              Book Free Assessment
              <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>

            {/* Certifications mini-bar */}
            <div className="mt-8 pt-6 border-t border-white/[0.06]">
              <p className="text-white/20 text-[10px] tracking-wider uppercase mb-3">Certified By</p>
              <div className="flex flex-wrap gap-2">
                {['NASM CPT', 'NASM SFS', 'NASM CNC', 'SilverSneakers'].map((cert) => (
                  <span key={cert} className="text-white/25 text-[10px] border border-white/10 px-2 py-1 tracking-wider">
                    {cert}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Local SEO text block */}
        <div className="mb-8">
          <p className="text-white/[0.12] text-[11px] leading-relaxed">
            First Step Impact | Senior Fitness Coach Queen Creek AZ | In-Home Personal Trainer for Seniors |
            Behavioral Health + Fitness Integration | Nutrition Coaching Adults 55+ | Fall Prevention Exercise
            Queen Creek | Senior Wellness Coach San Tan Valley | Exercise Programs for Seniors with Chronic
            Conditions | Deconditioned Senior Fitness | Healthy Aging Coach East Valley AZ |
            firststepimpact.com | (480) 442-4013
          </p>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            &copy; {year} First Step Impact. All rights reserved.
          </p>
          <p className="text-white/15 text-xs">
            In-home senior fitness coaching in Queen Creek, AZ
          </p>
        </div>
      </div>
    </footer>
  )
}
