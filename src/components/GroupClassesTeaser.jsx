import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'

const highlights = [
  { label: 'Silver Strength', sub: 'Mon & Wed · 9:00 AM' },
  { label: 'Balance & Beyond', sub: 'Mon, Wed & Fri · 10:15 AM' },
  { label: 'Chair Yoga', sub: 'Wednesday · 9:00 AM' },
  { label: 'Cardio Lite', sub: 'Friday · 9:00 AM' },
]

export default function GroupClassesTeaser() {
  return (
    <section className="bg-dark border-t border-white/5 overflow-hidden" aria-labelledby="group-classes-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-36">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* Left: Image collage */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            {/* Main image */}
            <div className="relative overflow-hidden aspect-[4/3]">
              <img
                src="https://i0.wp.com/firststepimpact.com/wp-content/uploads/2025/12/pexels-photo-7500660-7500660-scaled.jpg?fit=1024%2C683&ssl=1"
                alt="Seniors enjoying a group fitness class"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-dark/60 via-transparent to-transparent" />
            </div>

            {/* Silver Sneakers badge — overlapping */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="absolute -bottom-6 -right-4 lg:-right-8 bg-white p-4 shadow-2xl w-52"
            >
              <img
                src="/silversneakers-logo.jpg"
                alt="Silver Sneakers"
                className="w-full mb-2"
              />
              <p className="text-heading text-[10px] font-semibold text-center tracking-wide">
                FREE with most Medicare plans
              </p>
            </motion.div>

            {/* Floating stat */}
            <motion.div
              initial={{ opacity: 0, y: -16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="absolute -top-4 -left-4 lg:-left-8 bg-brand px-5 py-4 shadow-xl"
            >
              <span className="font-serif font-bold text-white text-3xl block leading-none">7</span>
              <span className="text-white/70 text-[10px] tracking-widest uppercase font-medium">Classes/week</span>
            </motion.div>
          </motion.div>

          {/* Right: Copy */}
          <div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-7"
            >
              <div className="h-px w-10 bg-brand" />
              <span className="text-brand text-[11px] font-semibold tracking-[0.28em] uppercase">
                Group Fitness Classes
              </span>
            </motion.div>

            <motion.h2
              id="group-classes-heading"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-bold text-white leading-[1.08] mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Prefer to move{' '}
              <span className="text-brand">with a group</span>?
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-white/60 text-lg leading-relaxed mb-4"
            >
              Our group fitness classes bring the same expert instruction and senior-focused
              approach to a fun, social setting — with the added bonus that most Medicare
              Advantage members attend at no cost.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-white/35 text-sm leading-relaxed mb-10"
            >
              Silver Sneakers · Silver&Fit · All fitness levels welcome · Modifications always provided
            </motion.p>

            {/* Class list */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="grid grid-cols-2 gap-3 mb-10"
            >
              {highlights.map((h) => (
                <div key={h.label} className="bg-heading/60 border border-white/5 px-4 py-3">
                  <p className="text-white text-sm font-semibold mb-0.5">{h.label}</p>
                  <p className="text-white/35 text-[11px] tracking-wide">{h.sub}</p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                to="/group-classes"
                className="inline-flex items-center gap-3 bg-brand text-white font-semibold text-sm px-8 py-4 hover:bg-blue-500 transition-all duration-300 group tracking-wide"
              >
                Explore Group Classes
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
              </Link>
              <a
                href="tel:4804424013"
                className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors duration-200 border border-white/10 px-6 py-4 hover:border-white/30"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Ask a Question
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
