import { motion } from 'framer-motion'

const included = [
  'Comprehensive wellness assessment (free)',
  'Personalized fitness + nutrition + behavioral health plan',
  'In-home training sessions (1-3x per week)',
  'Direct text access between sessions',
  'Ongoing plan adjustments as you progress',
  'Behavioral health support and accountability',
  'Nutrition coaching integrated into your plan',
]

export default function Investment() {
  return (
    <section id="investment" className="bg-brand relative overflow-hidden" aria-labelledby="investment-heading">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute -right-48 -top-48 w-[700px] h-[700px] rounded-full border border-white/[0.06]" aria-hidden="true" />
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full border border-white/[0.08]" aria-hidden="true" />
        <div className="absolute left-1/4 bottom-0 w-[400px] h-[400px] bg-white/[0.03] rounded-full blur-[80px]" aria-hidden="true" />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'linear-gradient(white 1px, transparent 1px), linear-gradient(90deg, white 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
          aria-hidden="true"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-40">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-white/30 text-[11px] font-semibold tracking-[0.3em] uppercase">07</span>
          <div className="h-px w-8 bg-white/20" />
          <span className="text-white/30 text-[11px] font-semibold tracking-[0.3em] uppercase">Investment</span>
        </motion.div>

        <div className="grid lg:grid-cols-[1fr_1fr] gap-16 lg:gap-28 items-center">

          {/* Left: Heading + copy */}
          <div>
            <motion.h2
              id="investment-heading"
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-bold text-white leading-[1.08] mb-8 text-balance"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              Your Investment in Independent, Healthy Aging
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {/* Price display */}
              <div className="mb-8 inline-flex items-baseline gap-3 bg-white/10 px-6 py-4 border border-white/15">
                <span className="font-serif text-white font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  $297
                </span>
                <span className="text-white/60 text-sm">–</span>
                <span className="font-serif text-white font-bold" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  $897
                </span>
                <span className="text-white/60 text-base">/month</span>
              </div>

              <p className="text-white/75 leading-relaxed mb-6">
                First Step Impact offers personalized senior wellness programs designed around your specific
                health needs, goals, and the level of support that's right for you.
              </p>
              <p className="text-white/60 text-sm leading-relaxed mb-10">
                The right program for you is determined during your free assessment — not by a menu you choose
                from. Because you deserve a plan designed for your body, your history, and your life.
              </p>

              {/* CTA */}
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="https://tidycal.com/1yn5jw3/30-minute-meeting"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-3 bg-white text-brand font-bold text-sm px-8 py-4 hover:bg-light transition-all duration-300 group tracking-wide"
                >
                  Schedule Your Free Assessment
                  <svg
                    className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="tel:4804424013"
                  className="inline-flex items-center justify-center gap-2 border border-white/30 text-white text-sm font-semibold px-6 py-4 hover:bg-white/10 transition-all duration-200 tracking-wide"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (480) 442-4013
                </a>
              </div>

              <p className="mt-5 text-white/40 text-xs">
                No commitment required. Your free assessment is exactly that — free.
              </p>
            </motion.div>
          </div>

          {/* Right: What's included */}
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="bg-white/10 border border-white/15 p-8 lg:p-10">
              <p className="text-white/50 text-[11px] font-semibold tracking-[0.3em] uppercase mb-6">
                Every Program Includes
              </p>
              <ul className="space-y-4" role="list">
                {included.map((item, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.2 + i * 0.06 }}
                    className="flex items-start gap-3"
                  >
                    <div className="w-1.5 h-1.5 bg-white rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                    <span className="text-white/80 text-sm leading-relaxed">{item}</span>
                  </motion.li>
                ))}
              </ul>

              {/* Trust signals */}
              <div className="mt-8 pt-6 border-t border-white/10 grid grid-cols-2 gap-4">
                {[
                  { label: 'No gym required', sub: 'We come to you' },
                  { label: 'No contracts', sub: 'Month-to-month' },
                  { label: 'Fully insured', sub: 'Liability & professional' },
                  { label: 'Free to start', sub: 'No-risk assessment' },
                ].map((trust) => (
                  <div key={trust.label} className="flex flex-col">
                    <span className="text-white text-xs font-semibold">{trust.label}</span>
                    <span className="text-white/40 text-xs">{trust.sub}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
