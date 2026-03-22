import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const benefits = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'FREE with Silver Sneakers',
    body: 'Included at no extra cost with most Medicare Advantage plans through Silver Sneakers and Silver&Fit.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
      </svg>
    ),
    title: 'Social Connection',
    body: 'Build friendships and accountability with peers who share your goals and understand your stage of life.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Modifications for Every Level',
    body: 'Every class includes progressions and regressions so beginners and advanced participants thrive side by side.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
    title: 'Expert Instruction',
    body: 'Led by a certified trainer with 15+ years in behavioral health who understands the aging body inside and out.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
    title: 'Fun & Motivating',
    body: 'Group energy transforms exercise from a chore into something you actually look forward to each week.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
      </svg>
    ),
    title: 'Flexible Schedule',
    body: 'Morning classes throughout the week so you can build a consistent routine that fits your life.',
  },
]

const schedule = [
  { day: 'Monday', time: '9:00 AM', cls: 'Silver Strength', level: 'All Levels', color: 'brand' },
  { day: 'Monday', time: '10:15 AM', cls: 'Balance & Beyond', level: 'All Levels', color: 'teal' },
  { day: 'Wednesday', time: '9:00 AM', cls: 'Chair Yoga', level: 'Beginner-Friendly', color: 'purple' },
  { day: 'Wednesday', time: '10:15 AM', cls: 'Silver Strength', level: 'All Levels', color: 'brand' },
  { day: 'Wednesday', time: '11:00 AM', cls: 'Balance & Beyond', level: 'All Levels', color: 'teal' },
  { day: 'Friday', time: '9:00 AM', cls: 'Cardio Lite', level: 'Intermediate', color: 'orange' },
  { day: 'Friday', time: '10:15 AM', cls: 'Silver Strength', level: 'All Levels', color: 'brand' },
]

const classColors = {
  brand: { dot: 'bg-brand', badge: 'bg-brand/15 text-brand border-brand/20', ring: 'border-brand/30' },
  teal: { dot: 'bg-teal-400', badge: 'bg-teal-400/15 text-teal-300 border-teal-400/20', ring: 'border-teal-400/30' },
  purple: { dot: 'bg-purple-400', badge: 'bg-purple-400/15 text-purple-300 border-purple-400/20', ring: 'border-purple-400/30' },
  orange: { dot: 'bg-orange-400', badge: 'bg-orange-400/15 text-orange-300 border-orange-400/20', ring: 'border-orange-400/30' },
}

const classDetails = [
  {
    name: 'Silver Strength',
    tag: 'Most Popular',
    tagColor: 'bg-brand/20 text-brand',
    description: 'Functional strength training with chairs, resistance bands, and light weights. Build muscle for daily activities, improve bone density, and boost metabolism.',
    activities: ['Chair-based exercises for safety', 'Upper & lower body strength', 'Core stability training', 'Balance integration', 'Proper breathing techniques'],
    image: 'https://i0.wp.com/firststepimpact.com/wp-content/uploads/2025/12/ChatGPT-Image-Dec-6-2025-04_36_12-PM.png?fit=1024%2C1024&ssl=1',
  },
  {
    name: 'Balance & Beyond',
    tag: 'Fall Prevention',
    tagColor: 'bg-teal-400/20 text-teal-300',
    description: 'Targeted balance and coordination training that directly reduces fall risk — one of the top concerns for adults 55+. Builds confidence in everyday movement.',
    activities: ['Standing balance drills', 'Coordination sequences', 'Ankle & hip stability', 'Gait training', 'Spatial awareness'],
    image: 'https://i0.wp.com/firststepimpact.com/wp-content/uploads/2025/12/pexels-photo-7500660-7500660-scaled.jpg?fit=1024%2C683&ssl=1',
  },
  {
    name: 'Chair Yoga',
    tag: 'Beginner Friendly',
    tagColor: 'bg-purple-400/20 text-purple-300',
    description: 'Gentle yoga adapted for seniors using a chair for support. Improves flexibility, reduces stiffness, and calms the nervous system — no mat required.',
    activities: ['Seated stretching', 'Gentle joint mobility', 'Breathwork & relaxation', 'Mindful movement', 'Stress reduction'],
    image: 'https://i0.wp.com/firststepimpact.com/wp-content/uploads/2025/12/pexels-photo-7500660-7500660-scaled.jpg?fit=1024%2C683&ssl=1',
  },
]

const days = ['Monday', 'Wednesday', 'Friday']

export default function GroupClasses() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />

      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-[85vh] flex items-end overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <img
              src="https://i0.wp.com/firststepimpact.com/wp-content/uploads/2025/12/pexels-photo-7500660-7500660-scaled.jpg?fit=1024%2C683&ssl=1"
              alt="Seniors enjoying a group fitness class"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/95 via-dark/75 to-dark/40" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-transparent to-dark/40" />
            <div className="absolute inset-0 bg-brand/8" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full pb-20 pt-48">
            <div className="grid lg:grid-cols-2 gap-16 items-end">
              {/* Left: Copy */}
              <div>
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="flex items-center gap-3 mb-7"
                >
                  <div className="h-px w-10 bg-brand" />
                  <span className="text-brand text-[11px] font-semibold tracking-[0.28em] uppercase">
                    Queen Creek, AZ · Group Fitness
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="font-serif font-bold text-white leading-[1.04] mb-6 text-balance"
                  style={{ fontSize: 'clamp(2.6rem, 6vw, 5rem)' }}
                >
                  Move Together.{' '}
                  <br />
                  <em className="not-italic text-brand">Stronger</em>{' '}
                  Together.
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="text-white/70 text-lg leading-relaxed mb-4 max-w-lg"
                >
                  Stay active, build strength, and connect with peers in fun, supportive
                  group classes designed specifically for adults 55+.
                </motion.p>

                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  className="text-white/40 text-base leading-relaxed mb-10 max-w-lg"
                >
                  All fitness levels welcome. Modifications provided for every class.
                  Most participants attend at no cost through their Medicare plan.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <a
                    href="https://tidycal.com/1yn5jw3/silver-sneakers-fitness-classes"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-brand text-white font-semibold text-sm px-8 py-4 hover:bg-blue-500 transition-all duration-300 group tracking-wide"
                  >
                    See Class Schedule
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="tel:4804424013"
                    className="inline-flex items-center gap-2 text-white/50 hover:text-white text-sm transition-colors duration-200 border border-white/10 px-6 py-4 hover:border-white/30"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5} aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    (480) 442-4013
                  </a>
                </motion.div>
              </div>

              {/* Right: Silver Sneakers badge */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6, ease: [0.16, 1, 0.3, 1] }}
                className="hidden lg:flex justify-end"
              >
                <div className="bg-white/95 backdrop-blur-md p-8 max-w-[280px] shadow-2xl">
                  <img
                    src="/silversneakers-logo.jpg"
                    alt="Silver Sneakers"
                    className="w-full mb-5"
                  />
                  <div className="border-t border-gray-200 pt-5">
                    <p className="text-heading text-sm font-semibold leading-snug mb-1">
                      Covered by your Medicare plan?
                    </p>
                    <p className="text-body text-xs leading-relaxed">
                      Most Medicare Advantage members attend our classes at
                      <span className="text-brand font-bold"> no extra cost</span> through
                      Silver Sneakers or Silver&Fit.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── SILVER SNEAKERS MOBILE BADGE ── */}
        <div className="lg:hidden bg-white px-6 py-8">
          <div className="max-w-sm mx-auto flex items-center gap-5">
            <img src="/silversneakers-logo.jpg" alt="Silver Sneakers" className="w-36 flex-shrink-0" />
            <p className="text-body text-sm leading-relaxed">
              Most Medicare Advantage members attend at{' '}
              <span className="text-brand font-bold">no extra cost</span> through Silver Sneakers or Silver&Fit.
            </p>
          </div>
        </div>

        {/* ── WHY GROUP CLASSES ── */}
        <section className="bg-heading py-24 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-10 bg-brand" />
              <span className="text-brand text-[11px] font-semibold tracking-[0.28em] uppercase">
                Why Group Classes?
              </span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-20 mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif font-bold text-white leading-[1.08]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
              >
                The perfect blend of expert guidance, social connection, and{' '}
                <span className="text-brand">affordable fitness</span>.
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-white/55 text-lg leading-relaxed self-end"
              >
                Group fitness is more than exercise — it's a community. Designed for active
                adults 55+ with all abilities welcome, our classes deliver real results in a
                supportive, encouraging environment.
              </motion.p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {benefits.map((b, i) => (
                <motion.div
                  key={b.title}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.6, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="group bg-dark/50 border border-white/5 hover:border-brand/25 p-7 transition-all duration-400"
                >
                  <div className="text-brand mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
                    {b.icon}
                  </div>
                  <h3 className="font-semibold text-white text-base mb-2 group-hover:text-brand transition-colors duration-300">
                    {b.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">{b.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CLASS SPOTLIGHT ── */}
        <section className="bg-dark py-24 lg:py-36 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-10 bg-brand" />
              <span className="text-brand text-[11px] font-semibold tracking-[0.28em] uppercase">
                Our Classes
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-bold text-white mb-4"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Every class is designed for adults 55+
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-white/45 text-base mb-16 max-w-xl"
            >
              All fitness levels welcome — modifications provided so you can start where you are.
            </motion.p>

            <div className="space-y-6">
              {classDetails.map((cls, i) => (
                <motion.div
                  key={cls.name}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-60px' }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group grid lg:grid-cols-[1fr_380px] overflow-hidden border border-white/5 hover:border-brand/20 transition-all duration-500"
                >
                  {/* Text */}
                  <div className="bg-heading p-8 lg:p-12 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 mb-5">
                        <span className={`text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5 rounded-sm ${cls.tagColor}`}>
                          {cls.tag}
                        </span>
                      </div>
                      <h3 className="font-serif font-bold text-white text-2xl lg:text-3xl mb-4 group-hover:text-brand transition-colors duration-300">
                        {cls.name}
                      </h3>
                      <p className="text-white/55 text-base leading-relaxed mb-8">
                        {cls.description}
                      </p>
                      <ul className="space-y-2.5">
                        {cls.activities.map((a) => (
                          <li key={a} className="flex items-center gap-3 text-white/50 text-sm">
                            <div className="w-1.5 h-1.5 bg-brand flex-shrink-0" />
                            {a}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-8 pt-8 border-t border-white/5">
                      <a
                        href="https://tidycal.com/1yn5jw3/silver-sneakers-fitness-classes"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-brand text-sm font-semibold tracking-wide group/link"
                      >
                        Reserve Your Spot
                        <svg className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </a>
                    </div>
                  </div>

                  {/* Image */}
                  <div className="relative overflow-hidden min-h-[280px] lg:min-h-0">
                    <img
                      src={cls.image}
                      alt={cls.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-heading/60 via-transparent to-transparent lg:bg-gradient-to-l" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── WEEKLY SCHEDULE ── */}
        <section className="bg-heading py-24 lg:py-36 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-8"
            >
              <div className="h-px w-10 bg-brand" />
              <span className="text-brand text-[11px] font-semibold tracking-[0.28em] uppercase">
                Weekly Schedule
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif font-bold text-white mb-16"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Find your time. <span className="text-brand">Show up.</span> Feel the difference.
            </motion.h2>

            {/* Day columns */}
            <div className="grid lg:grid-cols-3 gap-6">
              {days.map((day, di) => {
                const daySessions = schedule.filter((s) => s.day === day)
                return (
                  <motion.div
                    key={day}
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: di * 0.1 }}
                    className="bg-dark border border-white/5 overflow-hidden"
                  >
                    {/* Day header */}
                    <div className="bg-brand/10 border-b border-brand/20 px-6 py-4 flex items-center gap-3">
                      <div className="w-2 h-2 bg-brand" />
                      <span className="text-brand font-semibold text-sm tracking-wide">{day}</span>
                    </div>

                    {/* Sessions */}
                    <div className="divide-y divide-white/5">
                      {daySessions.map((s, si) => {
                        const colors = classColors[s.color]
                        return (
                          <motion.div
                            key={si}
                            initial={{ opacity: 0, x: -12 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: di * 0.1 + si * 0.06 }}
                            className="px-6 py-5 flex items-start gap-4 group hover:bg-white/2 transition-colors duration-200"
                          >
                            <div className={`w-2 h-2 ${colors.dot} mt-1.5 flex-shrink-0`} />
                            <div className="flex-1 min-w-0">
                              <p className="text-white font-semibold text-sm mb-1">{s.cls}</p>
                              <p className="text-white/35 text-xs tracking-wide">{s.time}</p>
                            </div>
                            <span className={`text-[9px] font-semibold tracking-widest uppercase px-2 py-1 border flex-shrink-0 ${colors.badge} ${colors.ring}`}>
                              {s.level}
                            </span>
                          </motion.div>
                        )
                      })}
                    </div>
                  </motion.div>
                )
              })}
            </div>

            {/* Legend */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-8 flex flex-wrap gap-5"
            >
              {[
                { color: 'bg-brand', label: 'Silver Strength' },
                { color: 'bg-teal-400', label: 'Balance & Beyond' },
                { color: 'bg-purple-400', label: 'Chair Yoga' },
                { color: 'bg-orange-400', label: 'Cardio Lite' },
              ].map((l) => (
                <div key={l.label} className="flex items-center gap-2">
                  <div className={`w-2 h-2 ${l.color}`} />
                  <span className="text-white/35 text-xs">{l.label}</span>
                </div>
              ))}
            </motion.div>

            {/* Schedule CTA */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-14 text-center"
            >
              <a
                href="https://tidycal.com/1yn5jw3/silver-sneakers-fitness-classes"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand text-white font-semibold text-sm px-10 py-4 hover:bg-blue-500 transition-all duration-300 group tracking-wide"
              >
                Book a Class Now
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>

        {/* ── SILVER SNEAKERS FULL BLEED ── */}
        <section className="bg-white py-20 lg:py-28 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="h-px w-10 bg-brand" />
                  <span className="text-brand text-[11px] font-semibold tracking-[0.28em] uppercase">
                    Silver Sneakers &amp; Silver&Fit
                  </span>
                </div>
                <h2
                  className="font-serif font-bold text-heading leading-tight mb-6"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
                >
                  Your Medicare plan may already be paying for this.
                </h2>
                <p className="text-body text-lg leading-relaxed mb-5">
                  Millions of Medicare Advantage members have Silver Sneakers or Silver&Fit
                  included in their plan at no additional cost. That means our group classes
                  could be completely free for you.
                </p>
                <p className="text-body text-base leading-relaxed mb-8">
                  Not sure if you qualify? Give us a call or check your plan details — and
                  if you do qualify, all you have to do is show up.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://tidycal.com/1yn5jw3/30-minute-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-heading text-white font-semibold text-sm px-8 py-4 hover:bg-brand transition-all duration-300 group tracking-wide"
                  >
                    Book Free Consultation
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  <a
                    href="tel:4804424013"
                    className="inline-flex items-center gap-2 text-body hover:text-heading text-sm transition-colors duration-200 border border-body/20 px-6 py-4 hover:border-heading/40"
                  >
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                    (480) 442-4013
                  </a>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="flex flex-col items-center gap-8"
              >
                <img
                  src="/silversneakers-logo.jpg"
                  alt="Silver Sneakers — included with most Medicare Advantage plans"
                  className="w-72 max-w-full"
                />
                <div className="grid grid-cols-2 gap-4 w-full max-w-sm">
                  {[
                    { value: 'FREE', label: 'With qualifying plan' },
                    { value: '55+', label: 'Age group focus' },
                    { value: '7', label: 'Classes per week' },
                    { value: '3', label: 'Days available' },
                  ].map((stat) => (
                    <div key={stat.label} className="bg-gray-50 border border-gray-200 p-4 text-center">
                      <div className="font-serif font-bold text-brand text-2xl mb-1">{stat.value}</div>
                      <div className="text-body text-[11px] tracking-widest uppercase font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── BOTTOM CTA ── */}
        <section className="bg-dark py-20 lg:py-28 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <div className="flex items-center justify-center gap-3 mb-6">
                <div className="h-px w-10 bg-brand" />
                <span className="text-brand text-[11px] font-semibold tracking-[0.28em] uppercase">
                  Ready to Start?
                </span>
                <div className="h-px w-10 bg-brand" />
              </div>
              <h2
                className="font-serif font-bold text-white leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Take your first step{' '}
                <span className="text-brand">together</span>.
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Book your free consultation today and start your journey toward
                better health, strength, and community.
              </p>
              <a
                href="https://tidycal.com/1yn5jw3/30-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand text-white font-semibold text-sm px-10 py-4 hover:bg-blue-500 transition-all duration-300 group tracking-wide"
              >
                Book Your Free Consultation
                <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </a>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
