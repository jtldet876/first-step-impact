import { motion } from 'framer-motion'

const stats = [
  { value: '15+', label: 'Years Behavioral Health' },
  { value: '55+', label: 'Age Specialization' },
  { value: '100%', label: 'In-Home Service' },
  { value: 'Free', label: 'Initial Assessment' },
]

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen bg-dark flex flex-col overflow-hidden"
      aria-label="Hero"
    >
      {/* Full-bleed hero background image */}
      <div className="absolute inset-0 pointer-events-none">
        <img
          src="/hero-stairs.png"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover object-center"
        />
        {/* Dark overlay for readability — gradient from left (dark) to right (transparent) */}
        <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/80 to-dark/50" />
        {/* Bottom fade */}
        <div className="absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-dark to-transparent" />
        {/* Subtle brand-blue tint overlay */}
        <div className="absolute inset-0 bg-brand/10" />
      </div>

      {/* Main content */}
      <div className="relative flex-1 flex items-center max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16 w-full">
        <div className="grid lg:grid-cols-[1fr_400px] gap-16 xl:gap-28 items-center w-full">

          {/* Left: Copy */}
          <div>
            {/* Eyebrow label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-10 bg-brand" />
              <span className="text-brand text-[11px] font-semibold tracking-[0.28em] uppercase">
                Queen Creek, AZ&nbsp;&nbsp;·&nbsp;&nbsp;Senior Fitness
              </span>
            </motion.div>

            {/* H1 */}
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-bold text-white leading-[1.04] mb-8 text-balance"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 6rem)' }}
            >
              Your Doctor<br />
              Said{' '}
              <em className="not-italic text-brand" style={{ fontStyle: 'normal' }}>
                Exercise.
              </em>
              <br />
              <span className="text-white/60 font-normal italic">Now What?</span>
            </motion.h1>

            {/* Sub-headline */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/70 text-lg lg:text-xl leading-relaxed mb-5 max-w-lg"
            >
              If you're 55+ in Queen Creek or San Tan Valley and don't know
              where to safely start — this practice was built for you.
            </motion.p>

            {/* Body copy */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-white/40 text-base leading-relaxed mb-10 max-w-lg"
            >
              Most seniors leave their doctor's office with one instruction: "You need to
              exercise." No guidance. No plan. No one who understands your health history,
              your fears, or why you've struggled to stay consistent before.
            </motion.p>

            {/* CTA group */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 items-start"
            >
              <a
                href="https://tidycal.com/1yn5jw3/30-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand text-white font-semibold text-sm px-8 py-4 hover:bg-blue-500 transition-all duration-300 group tracking-wide"
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
                className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200 group border border-white/10 px-6 py-4 hover:border-white/30"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (480) 442-4013
              </a>
            </motion.div>

            {/* Service area */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.7 }}
              className="mt-6 text-white/25 text-xs tracking-wider"
            >
              Serving Queen Creek · San Tan Valley · Encanterra · San Tan Heights · East Valley
            </motion.p>
          </div>

          {/* Right: Floating quote card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="hidden lg:flex flex-col items-end gap-6 self-center"
          >
            <div className="bg-dark/80 backdrop-blur-md border border-white/10 p-7 max-w-[260px] shadow-2xl">
              <div className="text-brand font-serif text-5xl leading-none mb-3">&ldquo;</div>
              <p className="text-white/80 text-sm leading-relaxed font-medium">
                This is case management for healthy aging.
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-px w-6 bg-brand/60" />
                <p className="text-brand text-[10px] tracking-widest uppercase font-semibold">Joe Luma, Founder</p>
              </div>
            </div>
            <div className="w-px h-20 bg-gradient-to-b from-brand/60 to-transparent mr-6" aria-hidden="true" />
          </motion.div>
        </div>
      </div>

      {/* Stats strip */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 pb-16 w-full">
        <div className="border-t border-white/[0.07] pt-12">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.9 }}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {stats.map((item) => (
              <div key={item.value} className="flex flex-col">
                <span className="font-serif text-brand font-bold mb-1" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
                  {item.value}
                </span>
                <span className="text-white/35 text-xs tracking-[0.2em] uppercase font-medium">{item.label}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3"
        aria-hidden="true"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
          className="w-5 h-8 border border-white/15 rounded-full flex items-start justify-center pt-1.5"
        >
          <div className="w-0.5 h-2 bg-white/30 rounded-full" />
        </motion.div>
        <span className="text-white/20 text-[9px] tracking-[0.35em] uppercase font-medium">Scroll</span>
      </motion.div>
    </section>
  )
}
