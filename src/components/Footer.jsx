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
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-white/20 text-xs">
            &copy; {year} First Step Impact. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3">
            {/* Facebook — linked */}
            <a
              href="https://www.facebook.com/firststepimpact/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="First Step Impact on Facebook"
              className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/35 hover:text-white hover:border-brand hover:bg-brand/10 transition-all duration-200"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>

            {/* Instagram — no link yet */}
            <span
              aria-label="Instagram (coming soon)"
              className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/35 cursor-default"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
              </svg>
            </span>

            {/* LinkedIn — no link yet */}
            <span
              aria-label="LinkedIn (coming soon)"
              className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/35 cursor-default"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
              </svg>
            </span>

            {/* YouTube — no link yet */}
            <span
              aria-label="YouTube (coming soon)"
              className="w-8 h-8 border border-white/10 flex items-center justify-center text-white/35 cursor-default"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </span>
          </div>

          <p className="text-white/15 text-xs">
            In-home senior fitness coaching in Queen Creek, AZ
          </p>
        </div>
      </div>
    </footer>
  )
}
