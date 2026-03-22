import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'

const nasmCredentials = [
  {
    name: 'Certified Personal Trainer',
    abbr: 'CPT',
    issuer: 'National Academy of Sports Medicine',
    description:
      'The gold-standard certification in personal training, grounded in evidence-based exercise science and applied biomechanics.',
    url: 'https://credentials.nasm.org/311022fe-8daf-4c22-afb3-e5d8b68c9838#acc.KUTLivoH',
    color: 'brand',
  },
  {
    name: 'Senior Fitness Specialist',
    abbr: 'SFS',
    issuer: 'National Academy of Sports Medicine',
    description:
      'Specialized expertise in the physiology of aging, fall prevention, and safe progressive programming for adults 55+.',
    url: 'https://credentials.nasm.org/c4bae13c-f139-4ca2-a52c-fe24798f390d#acc.DHG6LTqo',
    color: 'teal',
  },
  {
    name: 'Certified Nutrition Coach',
    abbr: 'CNC',
    issuer: 'National Academy of Sports Medicine',
    description:
      'Evidence-based nutrition coaching for sustainable behavior change — fueling strength, energy, and healthy aging.',
    url: 'https://credentials.nasm.org/0cc860e6-e769-4ff0-8567-aad01d5ecd94#acc.KRdjcDfQ',
    color: 'purple',
  },
]

const pillars = [
  {
    number: '01',
    title: 'Science-Based Fitness',
    body: 'Safe, effective strength programs built around the physiology of the aging body — not cookie-cutter routines. Every session is designed to reduce fall risk, build functional strength, and match your real health picture.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
      </svg>
    ),
  },
  {
    number: '02',
    title: 'Practical Nutrition',
    body: 'Simple, sustainable strategies to fuel energy, support muscle retention, and build confidence around food — without elimination diets or unrealistic expectations.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
      </svg>
    ),
  },
  {
    number: '03',
    title: 'Mental Wellness Tools',
    body: 'ACT (Acceptance and Commitment) coaching proven to reduce anxiety, break thought loops, and build the psychological flexibility that makes lasting behavior change actually possible.',
    icon: (
      <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
      </svg>
    ),
  },
]

const professionalStandards = [
  '15 Years Behavioral Health Case Management',
  'Fully Insured — Liability & Professional',
  'Arizona Fingerprint Clearance Card',
  'CPR & First Aid Certified',
  'SilverSneakers Certified Instructor',
]

const colorMap = {
  brand: {
    abbr: 'bg-brand text-white',
    border: 'border-brand/20 hover:border-brand/50',
    badge: 'bg-brand/10 text-brand',
    glow: 'group-hover:shadow-brand/10',
  },
  teal: {
    abbr: 'bg-teal-500 text-white',
    border: 'border-teal-500/20 hover:border-teal-400/50',
    badge: 'bg-teal-500/10 text-teal-300',
    glow: 'group-hover:shadow-teal-500/10',
  },
  purple: {
    abbr: 'bg-purple-500 text-white',
    border: 'border-purple-500/20 hover:border-purple-400/50',
    badge: 'bg-purple-500/10 text-purple-300',
    glow: 'group-hover:shadow-purple-500/10',
  },
}

export default function About() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />

      <main>
        {/* ── HERO ── */}
        <section className="relative min-h-screen flex items-end overflow-hidden">
          <div className="absolute inset-0 pointer-events-none">
            <img
              src="https://i0.wp.com/firststepimpact.com/wp-content/uploads/2025/03/IMG_1920.jpeg?fit=791%2C1712&ssl=1"
              alt="Joe Luma, First Step Impact"
              className="w-full h-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-dark/97 via-dark/80 to-dark/30" />
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-dark/50" />
            <div className="absolute inset-0 bg-brand/5" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full pb-20 pt-48">
            <div className="max-w-2xl">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="flex items-center gap-3 mb-7"
              >
                <div className="h-px w-10 bg-brand" />
                <span className="text-brand text-[11px] font-semibold tracking-[0.28em] uppercase">
                  Queen Creek, AZ · Senior Wellness
                </span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
                className="font-serif font-bold text-white leading-[1.04] mb-5"
                style={{ fontSize: 'clamp(2.8rem, 6vw, 5rem)' }}
              >
                Meet{' '}
                <em className="not-italic text-brand">Joe Luma</em>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="text-white/65 text-xl leading-relaxed mb-3"
              >
                Senior Wellness Case Manager
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-white/40 text-base leading-relaxed mb-12 max-w-lg"
              >
                Helping adults 45+ build strength, resilience, and balance through the
                integration of fitness, nutrition, and mental wellness.
              </motion.p>

              {/* Stats row */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="flex flex-wrap gap-10"
              >
                {[
                  { value: '15+', label: 'Years in Behavioral Health' },
                  { value: "M.S.", label: 'Athletic Coaching, WVU' },
                  { value: '3×', label: 'NASM Certified' },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="font-serif font-bold text-brand mb-1" style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}>
                      {stat.value}
                    </div>
                    <div className="text-white/30 text-[10px] tracking-[0.2em] uppercase font-medium">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── BIO ── */}
        <section className="bg-white py-24 lg:py-36">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-[1fr_520px] gap-16 lg:gap-24 items-start">

              {/* Left: copy */}
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              >
                <div className="flex items-center gap-3 mb-7">
                  <div className="h-px w-10 bg-brand" />
                  <span className="text-brand text-[11px] font-semibold tracking-[0.28em] uppercase">
                    My Background
                  </span>
                </div>

                <h2
                  className="font-serif font-bold text-heading leading-[1.08] mb-8 text-balance"
                  style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
                >
                  Where behavioral health meets exercise science
                </h2>

                <div className="space-y-5 text-body text-[15px] leading-relaxed">
                  <p>
                    For 15 years, I worked as a behavioral health case manager — helping the most
                    complex, resistant patients navigate the hardest challenges of their lives.
                    I learned something that changed how I think about health entirely:
                  </p>

                  <div className="border-l-2 border-brand pl-6 py-1 my-8">
                    <p className="font-serif text-heading text-lg lg:text-xl font-semibold italic leading-snug">
                      "Physical health and mental health are inseparable — especially as we age."
                    </p>
                  </div>

                  <p>
                    Falls aren't just about weak legs. They're about confidence and fear. Weight
                    struggles aren't just about food — they're about stress and emotional regulation.
                    And inactivity isn't just about motivation. It's about identity, past failure,
                    and not knowing where to safely start.
                  </p>
                  <p>
                    That's why I earned my Master's in Athletic Coaching from West Virginia
                    University and became a NASM Certified Personal Trainer, Senior Fitness
                    Specialist, and Nutrition Coach. I combined clinical behavioral health
                    with exercise science because seniors need both — and almost no one offers both.
                  </p>
                  <p>
                    I built First Step Impact to be the resource I wish had existed for every
                    patient I ever had who left a doctor's office with a mandate to exercise and
                    no idea how to actually do it safely, sustainably, or with real support.
                  </p>
                </div>

                <div className="mt-10 flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://tidycal.com/1yn5jw3/30-minute-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 bg-heading text-white font-semibold text-sm px-8 py-4 hover:bg-brand transition-all duration-300 group tracking-wide"
                  >
                    Book Your Free Assessment
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

              {/* Right: stacked photos */}
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                {/* Main portrait */}
                <div className="relative mb-4">
                  <div className="absolute -top-3 -left-3 w-14 h-14 border-t-2 border-l-2 border-brand/50 z-10" aria-hidden="true" />
                  <div className="absolute -bottom-3 -right-3 w-14 h-14 border-b-2 border-r-2 border-body/20 z-10" aria-hidden="true" />
                  <div className="overflow-hidden aspect-[4/5]">
                    <img
                      src="/joe-luma.png"
                      alt="Joe Luma — First Step Impact"
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand" aria-hidden="true" />
                  </div>
                </div>

                {/* Second photo — inset */}
                <div className="ml-10 overflow-hidden border-4 border-white shadow-xl">
                  <img
                    src="https://i0.wp.com/firststepimpact.com/wp-content/uploads/2025/03/IMG_1918-2.jpeg?fit=737%2C1598&ssl=1"
                    alt="Joe Luma training session"
                    className="w-full aspect-[3/2] object-cover object-top"
                    loading="lazy"
                  />
                </div>

                {/* Floating identity card */}
                <div className="absolute top-8 -left-6 bg-brand px-5 py-4 shadow-xl hidden lg:block">
                  <p className="font-serif font-bold text-white text-lg leading-none mb-1">Joe Luma</p>
                  <p className="text-white/70 text-[10px] tracking-widest uppercase font-medium">NASM · CPT · SFS · CNC</p>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── HOLISTIC APPROACH ── */}
        <section className="relative bg-dark py-24 lg:py-36 overflow-hidden border-t border-white/5">
          {/* Background image bleed */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              src="https://i0.wp.com/firststepimpact.com/wp-content/uploads/2024/02/IMG_0870-scaled.jpeg?fit=2560%2C1920&ssl=1"
              alt=""
              aria-hidden="true"
              className="w-full h-full object-cover object-center opacity-10"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark/95 to-dark" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-7">
                  <div className="h-px w-10 bg-brand" />
                  <span className="text-brand text-[11px] font-semibold tracking-[0.28em] uppercase">
                    The Approach
                  </span>
                </div>
                <h2
                  className="font-serif font-bold text-white leading-[1.08]"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)' }}
                >
                  A holistic approach to{' '}
                  <span className="text-brand">healthy aging</span>
                </h2>
              </motion.div>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-white/50 text-lg leading-relaxed self-end"
              >
                Lasting change starts with the first step. A personalized, compassionate
                approach that makes health sustainable — helping you build confidence,
                strength, and balance for life.
              </motion.p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.number}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="group relative bg-heading/60 border border-white/5 hover:border-brand/30 p-8 lg:p-10 transition-all duration-500 overflow-hidden"
                >
                  {/* Decorative number */}
                  <span
                    className="absolute -top-4 -right-2 font-serif font-bold text-white/[0.04] select-none leading-none pointer-events-none"
                    style={{ fontSize: '8rem' }}
                    aria-hidden="true"
                  >
                    {p.number}
                  </span>

                  <div className="text-brand mb-6 group-hover:scale-110 transition-transform duration-300 w-fit">
                    {p.icon}
                  </div>
                  <h3 className="font-serif font-semibold text-white text-xl mb-4 group-hover:text-brand transition-colors duration-300">
                    {p.title}
                  </h3>
                  <p className="text-white/45 text-sm leading-relaxed">{p.body}</p>

                  <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-brand/0 via-brand/40 to-brand/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── NASM CREDENTIAL BADGES ── */}
        <section className="bg-heading py-24 lg:py-36 border-t border-white/5">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-10 bg-brand" />
              <span className="text-brand text-[11px] font-semibold tracking-[0.28em] uppercase">
                Verified Credentials
              </span>
            </motion.div>

            <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mb-16">
              <motion.h2
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="font-serif font-bold text-white leading-[1.08]"
                style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
              >
                NASM Certified.{' '}
                <span className="text-brand">Publicly verified.</span>
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-white/45 text-base leading-relaxed self-end"
              >
                Every credential below is digitally verified by the National Academy of Sports
                Medicine. Click any badge to view the live, tamper-proof certificate.
              </motion.p>
            </div>

            {/* Badge cards */}
            <div className="grid md:grid-cols-3 gap-5 mb-16">
              {nasmCredentials.map((cred, i) => {
                const c = colorMap[cred.color]
                return (
                  <motion.a
                    key={cred.abbr}
                    href={cred.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 32 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className={`group relative bg-dark border ${c.border} p-8 transition-all duration-400 overflow-hidden block shadow-lg ${c.glow} hover:shadow-xl`}
                  >
                    {/* NASM logo text mark */}
                    <div className="flex items-start justify-between mb-7">
                      <div className={`${c.abbr} font-serif font-bold text-2xl px-4 py-2 leading-none`}>
                        {cred.abbr}
                      </div>
                      {/* Verified shield */}
                      <div className={`${c.badge} px-2.5 py-1.5 flex items-center gap-1.5`}>
                        <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-[9px] font-bold tracking-widest uppercase">Verified</span>
                      </div>
                    </div>

                    <p className="text-[9px] font-semibold tracking-[0.25em] uppercase text-white/25 mb-2">
                      {cred.issuer}
                    </p>
                    <h3 className="font-serif font-bold text-white text-lg leading-snug mb-4 group-hover:text-brand transition-colors duration-300">
                      {cred.name}
                    </h3>
                    <p className="text-white/40 text-sm leading-relaxed mb-6">
                      {cred.description}
                    </p>

                    <div className="flex items-center gap-2 text-white/30 group-hover:text-brand transition-colors duration-300 text-xs font-semibold tracking-wide">
                      View Certificate
                      <svg className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </div>

                    {/* Bottom accent line */}
                    <div className={`absolute bottom-0 left-0 right-0 h-0.5 ${cred.color === 'brand' ? 'bg-brand' : cred.color === 'teal' ? 'bg-teal-500' : 'bg-purple-500'} opacity-0 group-hover:opacity-100 transition-opacity duration-400`} />
                  </motion.a>
                )
              })}
            </div>

            {/* Education + additional certs */}
            <div className="grid lg:grid-cols-2 gap-6">
              {/* Education */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-dark border border-white/5 p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
                  </svg>
                  <span className="text-white/60 text-[11px] font-semibold tracking-[0.25em] uppercase">Education</span>
                </div>
                <ul className="space-y-4">
                  <li>
                    <p className="text-white font-semibold text-sm mb-0.5">Master of Science — Athletic Coaching</p>
                    <p className="text-white/35 text-xs tracking-wide">West Virginia University</p>
                  </li>
                  <li>
                    <p className="text-white font-semibold text-sm mb-0.5">Bachelor of Science — Psychology</p>
                    <p className="text-white/35 text-xs tracking-wide">Arizona State University</p>
                  </li>
                </ul>
              </motion.div>

              {/* Professional standards */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="bg-dark border border-white/5 p-8"
              >
                <div className="flex items-center gap-3 mb-6">
                  <svg className="w-5 h-5 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                  <span className="text-white/60 text-[11px] font-semibold tracking-[0.25em] uppercase">Professional Standards</span>
                </div>
                <ul className="space-y-3">
                  {professionalStandards.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <svg className="w-4 h-4 text-brand flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      <span className="text-white/55 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── ACTION PHOTO + CLOSING QUOTE ── */}
        <section className="bg-white py-24 lg:py-36 border-t border-gray-100">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid lg:grid-cols-[1fr_480px] gap-16 lg:gap-24 items-center">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <div className="flex items-center gap-3 mb-7">
                  <div className="h-px w-10 bg-brand" />
                  <span className="text-brand text-[11px] font-semibold tracking-[0.28em] uppercase">
                    Why First Step Impact?
                  </span>
                </div>

                <h2
                  className="font-serif font-bold text-heading leading-[1.08] mb-8"
                  style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
                >
                  Because lasting change starts with the{' '}
                  <span className="text-brand">first step</span>.
                </h2>

                <div className="space-y-5 text-body text-[15px] leading-relaxed mb-10">
                  <p>
                    Most fitness programs treat adults 55+ like smaller versions of younger
                    athletes. They don't account for chronic conditions, fear of injury,
                    medication interactions, or the psychological barriers that have kept people
                    from succeeding in the past.
                  </p>
                  <p>
                    First Step Impact was built differently — from the ground up — to provide
                    the clinical-grade guidance, compassionate accountability, and whole-person
                    care that healthy aging actually requires.
                  </p>
                  <p>
                    This is case management for healthy aging. And there's nothing else quite
                    like it in the East Valley.
                  </p>
                </div>

                {/* Service area */}
                <div className="p-5 bg-gray-50 border border-gray-200 mb-10">
                  <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-body/40 mb-2">Serving</p>
                  <p className="text-body text-sm">
                    Queen Creek · San Tan Valley · Encanterra · San Tan Heights · East Valley
                  </p>
                </div>

                <Link
                  to="/group-classes"
                  className="inline-flex items-center gap-2 text-brand text-sm font-semibold tracking-wide group"
                >
                  Explore Group Classes
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </Link>
              </motion.div>

              {/* Action photo */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="relative"
              >
                <div className="overflow-hidden">
                  <img
                    src="https://i0.wp.com/firststepimpact.com/wp-content/uploads/2024/02/IMG_0870-scaled.jpeg?fit=2560%2C1920&ssl=1"
                    alt="Joe Luma in a training session"
                    className="w-full aspect-[4/5] object-cover object-center"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-heading/30 to-transparent" />
                </div>

                {/* Pull quote overlay */}
                <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 shadow-2xl">
                  <div className="text-brand font-serif text-4xl leading-none mb-2">&ldquo;</div>
                  <p className="text-heading text-sm font-medium leading-relaxed">
                    This is case management for healthy aging.
                  </p>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-px w-5 bg-brand/60" />
                    <p className="text-brand text-[10px] tracking-widest uppercase font-semibold">Joe Luma, Founder</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
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
                  Take the First Step
                </span>
                <div className="h-px w-10 bg-brand" />
              </div>
              <h2
                className="font-serif font-bold text-white leading-tight mb-6"
                style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)' }}
              >
                Ready to take your{' '}
                <span className="text-brand">first step</span>?
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Book your free wellness assessment today — no pressure, no commitment.
                Just a real conversation about where you are and where you want to go.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://tidycal.com/1yn5jw3/30-minute-meeting"
                    target="_blank"
                    rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-brand text-white font-semibold text-sm px-10 py-4 hover:bg-blue-500 transition-all duration-300 group tracking-wide"
                >
                  Book Your Free Assessment
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
                <a
                  href="tel:4804424013"
                  className="inline-flex items-center gap-2 text-white/40 hover:text-white text-sm transition-colors duration-200 border border-white/10 px-8 py-4 hover:border-white/30"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                  </svg>
                  (480) 442-4013
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
