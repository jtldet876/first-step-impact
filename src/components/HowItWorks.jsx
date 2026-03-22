import { motion } from 'framer-motion'

const steps = [
  {
    number: '01',
    title: 'Your Free Wellness Assessment',
    body: 'We start with a comprehensive evaluation of your complete health picture — medical history, movement capacity, chronic conditions, past exercise experiences, nutrition patterns, stress levels, and personal goals. No assumptions. No generic plans. This is where your journey begins.',
    detail: 'Comprehensive intake · Medical history review · Movement screen · Goal alignment',
  },
  {
    number: '02',
    title: 'Your Custom Wellness Plan',
    body: 'Based on your assessment, I design a fully personalized plan integrating senior fitness training, nutrition coaching, and behavioral health support — in the proportions your body and life actually need. I determine the blend. You don\'t have to figure it out. That\'s clinical expertise applied to healthy aging.',
    detail: 'Personalized programming · Nutrition strategy · Behavioral health integration',
  },
  {
    number: '03',
    title: 'In-Home Sessions + Ongoing Support',
    body: 'I come to you. In-home personal training in Queen Creek and San Tan Valley means no gym intimidation, no commute, and exercise in the environment where you actually live. Between sessions, you have direct access for text check-ins and accountability — because transformation happens between sessions, not just during them.',
    detail: 'In-home training · Direct text access · Accountability check-ins',
  },
  {
    number: '04',
    title: 'Managed Progress Over Time',
    body: 'This isn\'t a program you finish and forget. I actively monitor your progress, adjust your plan as you improve, and provide the behavioral health support that keeps you consistent when motivation dips, pain flares, or life gets in the way. This is case management for healthy aging — and there is nothing else like it in the East Valley.',
    detail: 'Ongoing plan adjustments · Progress tracking · Long-term accountability',
  },
]

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="bg-white relative overflow-hidden" aria-labelledby="how-heading">

      {/* ── Floating single dumbbell ── */}
      <motion.div
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="absolute right-0 top-1/2 -translate-y-1/2 w-[340px] lg:w-[480px] xl:w-[560px] pointer-events-none select-none hidden lg:block"
        aria-hidden="true"
      >
        <motion.img
          src="/dumbbell-single.png"
          alt=""
          className="w-full"
          style={{ mixBlendMode: 'multiply', opacity: 0.18 }}
          animate={{
            y: [0, -28, 0],
            rotate: [-6, 6, -6],
          }}
          transition={{
            duration: 4.5,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-40">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-body/30 text-[11px] font-semibold tracking-[0.3em] uppercase">03</span>
          <div className="h-px w-8 bg-body/15" />
          <span className="text-body/30 text-[11px] font-semibold tracking-[0.3em] uppercase">How It Works</span>
        </motion.div>

        {/* Heading block */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-10 lg:gap-20 mb-24 lg:mb-32">
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              id="how-heading"
              className="font-serif font-bold text-heading leading-[1.08] text-balance"
              style={{ fontSize: 'clamp(2rem, 4.5vw, 3.5rem)' }}
            >
              A Different Kind of Senior Fitness Program in Queen Creek
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-end"
          >
            <p className="text-body text-lg leading-relaxed">
              Not a menu of services you pick from. A complete, personalized wellness plan — built around your
              specific health picture and managed with you over time.
            </p>
          </motion.div>
        </div>

        {/* Steps */}
        <div className="space-y-0">
          {steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="group"
            >
              <div className="border-t border-body/10 pt-12 pb-12 grid lg:grid-cols-[140px_1fr_1fr] gap-8 lg:gap-12 items-start hover:border-brand/30 transition-colors duration-300">
                {/* Step number — decorative */}
                <div className="relative">
                  <span
                    className="font-serif font-bold text-body/6 select-none leading-none"
                    style={{ fontSize: 'clamp(5rem, 10vw, 8rem)' }}
                    aria-hidden="true"
                  >
                    {step.number}
                  </span>
                  <div className="absolute top-1 left-0 flex items-center gap-2">
                    <div className="w-2 h-2 bg-brand" />
                    <span className="text-brand text-[11px] font-semibold tracking-[0.25em] uppercase">
                      Step {i + 1}
                    </span>
                  </div>
                </div>

                {/* Title */}
                <div className="lg:pt-1">
                  <h3 className="font-serif font-semibold text-heading text-xl lg:text-2xl leading-snug mb-4 group-hover:text-brand transition-colors duration-300">
                    {step.title}
                  </h3>
                  {/* Detail tags */}
                  <div className="flex flex-wrap gap-2">
                    {step.detail.split(' · ').map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] text-body/50 tracking-widest uppercase border border-body/15 px-2.5 py-1 font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="lg:pt-1">
                  <p className="text-body leading-relaxed text-[15px]">{step.body}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 border-t border-body/10 pt-16 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6"
        >
          <p className="text-heading font-serif text-xl lg:text-2xl font-medium max-w-lg leading-snug">
            Ready to take your first step?
          </p>
          <a
            href="https://tidycal.com/1yn5jw3/30-minute-meeting"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-heading text-white text-sm font-semibold px-8 py-4 hover:bg-brand transition-all duration-300 group tracking-wide whitespace-nowrap"
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
        </motion.div>
      </div>
    </section>
  )
}
