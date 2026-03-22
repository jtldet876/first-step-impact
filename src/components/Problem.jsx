import { motion } from 'framer-motion'

const painPoints = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
      </svg>
    ),
    title: '"I\'m afraid of falling or getting hurt"',
    body: 'Fear of injury holds you back from even trying — even though staying still is making things worse.',
    size: 'large',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: '"My pain makes exercise feel impossible"',
    body: 'Arthritis, joint pain, and chronic conditions have made traditional exercise feel completely out of reach.',
    size: 'normal',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99" />
      </svg>
    ),
    title: '"I\'ve tried before and always quit"',
    body: 'You\'ve started programs that didn\'t stick. Now even thinking about it feels defeating.',
    size: 'normal',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
      </svg>
    ),
    title: '"I don\'t know where to safely start"',
    body: 'Your doctor said exercise, but gave you no roadmap for how to do it with your conditions.',
    size: 'large',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z" />
      </svg>
    ),
    title: '"I\'ve lost my strength and independence"',
    body: 'Stairs feel harder. Getting off the floor is a struggle. You want your body back.',
    size: 'normal',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
    title: '"I\'m exhausted all the time"',
    body: 'Low energy affects every part of your day — and you\'re ready for that to change.',
    size: 'normal',
  },
]

const fadeInUp = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
}

export default function Problem() {
  return (
    <section id="problem" className="bg-light relative overflow-hidden" aria-labelledby="problem-heading">

      {/* ── Rack of dumbbells — dramatic bottom-right reveal ── */}
      <motion.div
        initial={{ opacity: 0, y: 60, rotate: 4 }}
        whileInView={{ opacity: 1, y: 0, rotate: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        className="absolute -top-16 right-0 w-[200px] lg:w-[260px] xl:w-[310px] pointer-events-none select-none"
        aria-hidden="true"
      >
        <motion.img
          src="/dumbbells-rack.jpg"
          alt=""
          className="w-full"
          style={{ mixBlendMode: 'multiply', opacity: 0.22 }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
        />
        {/* Fade out toward the left, top, and bottom so it blends cleanly */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-transparent to-light" />
        <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-light" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-light" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-40">

        {/* Section label */}
        <motion.div {...fadeInUp} className="flex items-center gap-3 mb-10">
          <span className="text-body/40 text-[11px] font-semibold tracking-[0.3em] uppercase font-sans">02</span>
          <div className="h-px w-8 bg-body/20" />
          <span className="text-body/40 text-[11px] font-semibold tracking-[0.3em] uppercase font-sans">The Problem</span>
        </motion.div>

        {/* Headline */}
        <div className="max-w-4xl mb-20">
          <motion.h2
            {...fadeInUp}
            id="problem-heading"
            className="font-serif font-bold text-heading leading-[1.08] mb-6 text-balance"
            style={{ fontSize: 'clamp(2.2rem, 5vw, 4rem)' }}
          >
            Does Any of This Sound Familiar?
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-body text-lg lg:text-xl leading-relaxed"
          >
            You know you need to move more. But something keeps getting in the way.
          </motion.p>
        </div>

        {/* Pain point grid — asymmetric magazine layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-body/10">
          {painPoints.map((point, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
              className={`bg-light p-8 lg:p-10 group hover:bg-white transition-colors duration-300 ${
                point.size === 'large' ? 'lg:col-span-1' : ''
              }`}
            >
              {/* Icon */}
              <div className="w-10 h-10 border border-brand/25 flex items-center justify-center text-brand mb-6 group-hover:bg-brand group-hover:border-brand group-hover:text-white transition-all duration-300">
                {point.icon}
              </div>
              {/* Title */}
              <h3 className="font-serif text-heading font-semibold text-lg lg:text-xl leading-snug mb-3 text-balance">
                {point.title}
              </h3>
              {/* Body */}
              <p className="text-body text-sm leading-relaxed">{point.body}</p>
            </motion.div>
          ))}
        </div>

        {/* Bridge paragraph */}
        <motion.div
          {...fadeInUp}
          className="mt-20 lg:mt-28 grid lg:grid-cols-[1fr_2fr] gap-10 lg:gap-20 items-start border-t border-body/15 pt-16"
        >
          <div>
            <div className="h-px w-10 bg-brand mb-4" />
            <p className="text-body/50 text-sm font-semibold tracking-widest uppercase">The insight</p>
          </div>
          <div>
            <p className="text-heading font-serif text-xl lg:text-2xl leading-relaxed mb-6 font-medium">
              These aren't just physical problems. They're psychological, behavioral, and deeply personal.
            </p>
            <p className="text-body leading-relaxed">
              And that's exactly why most generic senior fitness programs don't work — they treat the body but
              ignore everything else. After 15 years as a behavioral health case manager, I know that the biggest
              barriers to healthy aging are almost never physical. I built First Step Impact to address all of
              them — in Queen Creek and across the East Valley.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
