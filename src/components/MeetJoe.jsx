import { motion } from 'framer-motion'

const credentials = [
  { label: 'Education', items: ['Master of Science, Athletic Coaching', 'Bachelor of Science, Psychology'] },
  {
    label: 'Certifications',
    items: [
      'NASM Certified Personal Trainer',
      'NASM Senior Fitness Specialist',
      'NASM Certified Nutrition Coach',
      'ACT (Acceptance & Commitment Therapy) Coach',
      'SilverSneakers Certified Instructor',
    ],
  },
]

const professionalStandards = [
  '15 Years Behavioral Health Case Management',
  'Fully Insured (Liability & Professional)',
  'Arizona Fingerprint Clearance Card',
  'CPR & First Aid Certified',
]

export default function MeetJoe() {
  return (
    <section id="about" className="bg-muted" aria-labelledby="joe-heading">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-28 lg:py-40">

        {/* Section label */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex items-center gap-3 mb-10"
        >
          <span className="text-body/35 text-[11px] font-semibold tracking-[0.3em] uppercase">05</span>
          <div className="h-px w-8 bg-body/20" />
          <span className="text-body/35 text-[11px] font-semibold tracking-[0.3em] uppercase">About Joe</span>
        </motion.div>

        <div className="grid lg:grid-cols-[400px_1fr] gap-16 xl:gap-28 items-start">

          {/* Left: Photo + identity */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            {/* Photo area */}
            <div className="relative mb-8">
              {/* Corner accents */}
              <div className="absolute -top-3 -left-3 w-16 h-16 border-t-2 border-l-2 border-brand/40 z-10" aria-hidden="true" />
              <div className="absolute -bottom-3 -right-3 w-16 h-16 border-b-2 border-r-2 border-body/20 z-10" aria-hidden="true" />

              <div className="aspect-[4/5] relative overflow-hidden">
                <img
                  src="/joe-luma.png"
                  alt="Joe Luma, Senior Wellness Case Manager and Certified Fitness Coach"
                  className="w-full h-full object-cover object-center"
                />
                {/* Bottom brand bar */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-brand" aria-hidden="true" />
              </div>
            </div>

            {/* Name + title */}
            <div className="mb-6">
              <h3 className="font-serif font-bold text-heading text-2xl mb-1">Joe Luma</h3>
              <p className="text-brand text-sm font-semibold tracking-wider uppercase">
                Senior Wellness Case Manager
              </p>
              <p className="text-body/60 text-sm mt-1">Queen Creek, AZ</p>
            </div>

            {/* Professional standards */}
            <div className="bg-white/60 p-5 border border-body/10">
              <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-body/50 mb-4">
                Professional Standards
              </p>
              <ul className="space-y-2" role="list">
                {professionalStandards.map((item) => (
                  <li key={item} className="flex items-start gap-2.5">
                    <svg className="w-3.5 h-3.5 text-brand flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-body text-xs leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>

          {/* Right: Bio + credentials */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              id="joe-heading"
              className="font-serif font-bold text-heading leading-[1.1] mb-8 text-balance"
              style={{ fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)' }}
            >
              Meet Joe Luma —{' '}
              <span className="text-brand">
                Queen Creek's Senior Wellness Case Manager
              </span>
            </h2>

            {/* Bio paragraphs */}
            <div className="space-y-5 text-body leading-relaxed mb-10 text-[15px]">
              <p>
                For 15 years, I worked as a behavioral health case manager — helping the most complex,
                resistant patients navigate the hardest challenges of their lives. I learned something
                that changed how I think about health entirely:
              </p>

              {/* Pull insight */}
              <div className="border-l-2 border-brand pl-5 py-1 my-8">
                <p className="font-serif text-heading text-lg font-semibold italic">
                  "Physical health and mental health are inseparable — especially as we age."
                </p>
              </div>

              <p>
                Falls aren't just about weak legs. They're about confidence and fear. Weight struggles aren't
                just about food. They're about stress and emotional regulation. And inactivity isn't just about
                motivation. It's about identity, past failure, and not knowing where to safely start.
              </p>
              <p>
                That's why I earned my Master's in Athletic Coaching and became a NASM Certified Personal
                Trainer, Senior Fitness Specialist, and Nutrition Coach. I combined clinical behavioral health
                with exercise science because seniors need both — and almost no one offers both.
              </p>
              <p>
                I built First Step Impact to be the resource I wish had existed for every patient I ever
                had who left a doctor's office with a mandate to exercise and no idea how to actually do it.
              </p>
            </div>

            {/* Credentials grid */}
            <div className="border-t border-body/15 pt-10">
              <p className="text-[10px] font-semibold tracking-[0.3em] uppercase text-body/40 mb-6">
                Education &amp; Certifications
              </p>
              <div className="grid md:grid-cols-2 gap-8">
                {credentials.map((group) => (
                  <div key={group.label}>
                    <p className="text-[11px] font-semibold tracking-wider uppercase text-brand mb-3">
                      {group.label}
                    </p>
                    <ul className="space-y-2" role="list">
                      {group.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <div className="w-1 h-1 bg-brand/60 rounded-full mt-2 flex-shrink-0" aria-hidden="true" />
                          <span className="text-body text-sm leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>

              {/* Service area */}
              <div className="mt-8 p-4 bg-white/50 border border-body/10">
                <p className="text-[10px] font-semibold tracking-[0.25em] uppercase text-body/40 mb-2">Service Area</p>
                <p className="text-body text-sm">
                  Queen Creek · San Tan Valley · Encanterra · San Tan Heights · East Valley
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
