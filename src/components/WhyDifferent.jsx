import { motion } from 'framer-motion'

const comparisons = [
  { typical: 'Gives you exercises', fsi: 'Finds out why you stopped exercising' },
  { typical: 'Session ends — you\'re on your own', fsi: 'Ongoing support between every session' },
  { typical: 'Physical focus only', fsi: 'Physical + psychological + nutritional' },
  { typical: 'Reactive to what you ask for', fsi: 'Proactive — anticipates what you need' },
  { typical: 'Treats the body', fsi: 'Treats the whole person' },
  { typical: 'Exercise science background', fsi: '15 years behavioral health expertise' },
  { typical: 'Generic program for all ages', fsi: 'Specialized senior fitness for 55+' },
  { typical: 'You figure out the plan', fsi: 'I design and manage your complete plan' },
]

export default function WhyDifferent() {
  return (
    <section id="why-different" className="bg-dark overflow-hidden" aria-labelledby="why-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-40">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-white/20 text-[11px] font-semibold tracking-[0.3em] uppercase">04</span>
          <div className="h-px w-8 bg-white/15" />
          <span className="text-white/20 text-[11px] font-semibold tracking-[0.3em] uppercase">Why Different</span>
        </motion.div>

        {/* Heading */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 mb-20 lg:mb-28">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              id="why-heading"
              className="font-serif font-bold text-white leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(1.8rem, 4vw, 3.2rem)' }}
            >
              This Is Not Personal Training.{' '}
              <span className="text-brand">
                This Is Case Management for Healthy Aging.
              </span>
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-end"
          >
            <p className="text-white/50 leading-relaxed">
              There is a fundamental difference between someone who knows exercise science and someone who
              understands why people fail to exercise — and how to change that. Here's what makes First Step
              Impact different from every other option you'll find.
            </p>
          </motion.div>
        </div>

        {/* Comparison table */}
        <div className="mb-20 lg:mb-28">
          {/* Column headers */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-2 gap-4 mb-0"
          >
            <div className="bg-white/[0.04] border-b border-white/10 pb-4 px-4 pt-3">
              <span className="text-white/60 text-[11px] font-semibold tracking-[0.25em] uppercase">
                A Typical Personal Trainer
              </span>
            </div>
            <div className="border-b border-brand/30 pb-4 px-4 pt-3">
              <span className="text-brand text-[11px] font-semibold tracking-[0.25em] uppercase">
                First Step Impact
              </span>
            </div>
          </motion.div>

          {/* Rows */}
          {comparisons.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-2 gap-4 border-b border-white/[0.06] hover:border-white/15 transition-colors duration-300 group"
            >
              {/* Typical trainer */}
              <div className="py-5 px-4 bg-white/[0.03] group-hover:bg-white/[0.05] transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <svg className="w-3.5 h-3.5 text-white/30 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <p className="text-white/65 text-sm leading-relaxed">
                    {row.typical}
                  </p>
                </div>
              </div>
              {/* FSI */}
              <div className="py-5 pl-4 border-l border-brand/20 group-hover:border-brand/40 transition-colors duration-300">
                <div className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-brand rounded-full mt-1.5 flex-shrink-0" aria-hidden="true" />
                  <p className="text-white text-sm leading-relaxed font-medium">{row.fsi}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pull quote */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          {/* Background accent */}
          <div className="absolute -left-12 top-0 bottom-0 w-1 bg-brand" aria-hidden="true" />

          <div className="pl-0 lg:pl-16">
            <div
              className="font-serif text-white/10 leading-none select-none mb-4"
              style={{ fontSize: 'clamp(4rem, 10vw, 8rem)' }}
              aria-hidden="true"
            >
              &ldquo;
            </div>
            <blockquote>
              <p
                className="font-serif font-semibold text-white leading-[1.2] text-balance"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 3rem)' }}
              >
                Most trainers know exercise science.{' '}
                <em className="text-brand not-italic">I know people.</em>
              </p>
              <footer className="mt-8 flex items-center gap-4">
                <div className="h-px w-10 bg-white/20" />
                <cite className="text-white/40 text-sm tracking-widest uppercase not-italic font-semibold">
                  Joe Luma, Founder
                </cite>
              </footer>
            </blockquote>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
