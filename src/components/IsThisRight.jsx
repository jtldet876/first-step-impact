import { motion } from 'framer-motion'

const perfectFor = [
  'Your doctor told you to exercise but you don\'t know how to safely start',
  'You\'re managing arthritis, diabetes, heart disease, obesity, or chronic pain',
  'You\'re 55+ and want to maintain or regain your independence',
  'You\'ve tried exercise programs before and quit',
  'You worry about balance or have had a fall',
  'You finished physical therapy and need ongoing support',
  'You want someone to manage the whole picture — fitness, nutrition, and mindset',
  'You prefer in-home training in Queen Creek or San Tan Valley',
]

const notFor = [
  'You want a quick fix without commitment',
  'You\'re not willing to attend 1-3 sessions per week',
  'You\'re looking for the cheapest option available',
  'You live outside the East Valley service area',
]

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-brand flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2.5}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  )
}

function CrossIcon() {
  return (
    <svg
      className="w-4 h-4 text-body/40 flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={2}
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  )
}

export default function IsThisRight() {
  return (
    <section id="right-for-you" className="bg-white" aria-labelledby="right-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-40">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-body/30 text-[11px] font-semibold tracking-[0.3em] uppercase">06</span>
          <div className="h-px w-8 bg-body/15" />
          <span className="text-body/30 text-[11px] font-semibold tracking-[0.3em] uppercase">Is This Right For You?</span>
        </motion.div>

        {/* Heading */}
        <div className="grid lg:grid-cols-[2fr_1fr] gap-10 lg:gap-20 mb-16 lg:mb-20">
          <motion.h2
            id="right-heading"
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="font-serif font-bold text-heading leading-[1.08] text-balance"
            style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
          >
            Let's Make Sure We're the Right Fit for Each Other
          </motion.h2>
        </div>

        {/* Two column layout */}
        <div className="grid lg:grid-cols-[3fr_2fr] gap-0">
          {/* Perfect For */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="bg-light p-10 lg:p-14"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 bg-brand flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-heading text-xl">This is Perfect For You If...</h3>
            </div>
            <ul className="space-y-4" role="list">
              {perfectFor.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="flex items-start gap-3 group"
                >
                  <CheckIcon />
                  <span className="text-body text-sm leading-relaxed group-hover:text-heading transition-colors duration-200">
                    {item}
                  </span>
                </motion.li>
              ))}
            </ul>

            {/* CTA inside the section */}
            <div className="mt-10 pt-8 border-t border-body/10">
              <a
                href="https://tidycal.com/1yn5jw3/30-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand text-white text-sm font-semibold px-7 py-4 hover:bg-blue-500 transition-all duration-300 group tracking-wide"
              >
                This Sounds Like Me — Book My Free Assessment
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </div>
          </motion.div>

          {/* Not For */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="bg-heading p-10 lg:p-14"
          >
            <div className="flex items-center gap-3 mb-8">
              <div className="w-8 h-8 border border-white/20 flex items-center justify-center flex-shrink-0">
                <svg className="w-4 h-4 text-white/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </div>
              <h3 className="font-serif font-semibold text-white text-xl">This Might NOT Be For You If...</h3>
            </div>
            <ul className="space-y-4" role="list">
              {notFor.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -16 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 + i * 0.06 }}
                  className="flex items-start gap-3"
                >
                  <CrossIcon />
                  <span className="text-white/50 text-sm leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Honesty note */}
            <div className="mt-10 pt-8 border-t border-white/10">
              <p className="text-white/30 text-xs leading-relaxed italic">
                I'm selective about who I work with because I'm committed to delivering transformative results —
                not just selling sessions.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
