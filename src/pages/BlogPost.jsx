import { useParams, Link, Navigate } from 'react-router-dom'
import { motion } from 'framer-motion'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { blogPosts } from '../data/blogPosts'

function renderBody(text) {
  // Render **bold** markdown and newlines
  return text.split('\n\n').map((para, i) => {
    const parts = para.split(/(\*\*[^*]+\*\*)/)
    return (
      <p key={i} className="text-white/60 text-base lg:text-lg leading-relaxed mb-6">
        {parts.map((part, j) =>
          part.startsWith('**') && part.endsWith('**') ? (
            <strong key={j} className="text-white/90 font-semibold">
              {part.slice(2, -2)}
            </strong>
          ) : (
            part
          )
        )}
      </p>
    )
  })
}

export default function BlogPost() {
  const { slug } = useParams()
  const post = blogPosts.find((p) => p.slug === slug)

  if (!post) return <Navigate to="/blog" replace />

  const currentIndex = blogPosts.findIndex((p) => p.slug === slug)
  const prevPost = blogPosts[currentIndex + 1] || null
  const nextPost = blogPosts[currentIndex - 1] || null

  return (
    <div className="overflow-x-hidden">
      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative min-h-[70vh] flex items-end overflow-hidden">
          {/* Full-bleed image */}
          <div className="absolute inset-0 pointer-events-none">
            <img
              src={post.featuredImage}
              alt={post.featuredImageAlt}
              className="w-full h-full object-cover object-center"
            />
            {/* Heavy dark overlay for readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/70 to-dark/30" />
            <div className="absolute inset-0 bg-brand/5" />
          </div>

          <div className="relative max-w-4xl mx-auto px-6 lg:px-12 w-full pb-16 pt-48">
            {/* Back link */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-10"
            >
              <Link
                to="/blog"
                className="inline-flex items-center gap-2 text-white/40 hover:text-brand text-xs tracking-[0.2em] uppercase font-medium transition-colors duration-200"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                All Articles
              </Link>
            </motion.div>

            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-6"
            >
              <div className="h-px w-10 bg-brand" />
              <span className="text-brand text-[11px] font-semibold tracking-[0.28em] uppercase">
                {post.date}&nbsp;&nbsp;·&nbsp;&nbsp;{post.readTime}
              </span>
            </motion.div>

            {/* Title */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-bold text-white leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(2rem, 5vw, 3.8rem)' }}
            >
              {post.title}
            </motion.h1>

            {/* Author */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex items-center gap-3"
            >
              <div className="w-8 h-8 rounded-full bg-brand/20 border border-brand/40 flex items-center justify-center">
                <span className="text-brand text-xs font-bold">JL</span>
              </div>
              <span className="text-white/50 text-sm">
                By <span className="text-white/80 font-medium">{post.author}</span>
              </span>
            </motion.div>
          </div>
        </section>

        {/* Article Body */}
        <section className="bg-heading py-16 lg:py-24">
          <div className="max-w-4xl mx-auto px-6 lg:px-12">

            {/* Excerpt / Lead */}
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="border-l-2 border-brand pl-6 mb-14"
            >
              <p className="text-white/70 text-lg lg:text-xl leading-relaxed font-medium italic">
                {post.excerpt}
              </p>
            </motion.div>

            {/* Inline image (if applicable) */}
            {post.inlineImage && (
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
                className="mb-14 overflow-hidden"
              >
                <img
                  src={post.inlineImage}
                  alt="Supporting visual"
                  className="w-full object-cover max-h-[480px]"
                  loading="lazy"
                />
                <div className="h-px w-full bg-gradient-to-r from-brand/40 via-transparent to-transparent mt-4" />
              </motion.div>
            )}

            {/* Sections */}
            {post.sections.map((section, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.6, delay: i * 0.05 }}
                className="mb-12"
              >
                <div className="flex items-start gap-4 mb-5">
                  <div className="h-px w-6 bg-brand mt-4 flex-shrink-0" />
                  <h2 className="font-serif font-bold text-white text-xl lg:text-2xl leading-snug">
                    {section.heading}
                  </h2>
                </div>
                <div className="pl-10">{renderBody(section.body)}</div>
              </motion.div>
            ))}

            {/* Divider */}
            <div className="border-t border-white/5 my-16" />

            {/* CTA Block */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="bg-dark border border-white/8 p-10 lg:p-14 text-center"
            >
              <div className="flex items-center justify-center gap-3 mb-5">
                <div className="h-px w-8 bg-brand" />
                <span className="text-brand text-[10px] font-semibold tracking-[0.28em] uppercase">
                  Take the Next Step
                </span>
                <div className="h-px w-8 bg-brand" />
              </div>
              <h3
                className="font-serif font-bold text-white leading-tight mb-4"
                style={{ fontSize: 'clamp(1.6rem, 3vw, 2.4rem)' }}
              >
                Ready to Put This Into Practice?
              </h3>
              <p className="text-white/50 text-base max-w-md mx-auto mb-8 leading-relaxed">
                Joe works one-on-one with adults 55+ in Queen Creek and San Tan Valley.
                Your free assessment is the first real step.
              </p>
              <a
                href="https://tidycal.com/1yn5jw3/30-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand text-white font-semibold text-sm px-8 py-4 hover:bg-blue-500 transition-all duration-300 group tracking-wide"
              >
                Book Your Free Assessment
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

        {/* Prev / Next navigation */}
        {(prevPost || nextPost) && (
          <section className="bg-dark border-t border-white/5 py-16">
            <div className="max-w-4xl mx-auto px-6 lg:px-12">
              <div className="grid sm:grid-cols-2 gap-6">
                {prevPost ? (
                  <Link
                    to={`/blog/${prevPost.slug}`}
                    className="group border border-white/8 hover:border-brand/30 p-6 transition-all duration-300 text-left"
                  >
                    <span className="text-white/25 text-[10px] tracking-[0.25em] uppercase font-medium block mb-3">
                      ← Previous
                    </span>
                    <p className="text-white/70 group-hover:text-white text-sm font-medium leading-snug transition-colors duration-200">
                      {prevPost.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
                {nextPost ? (
                  <Link
                    to={`/blog/${nextPost.slug}`}
                    className="group border border-white/8 hover:border-brand/30 p-6 transition-all duration-300 text-right"
                  >
                    <span className="text-white/25 text-[10px] tracking-[0.25em] uppercase font-medium block mb-3">
                      Next →
                    </span>
                    <p className="text-white/70 group-hover:text-white text-sm font-medium leading-snug transition-colors duration-200">
                      {nextPost.title}
                    </p>
                  </Link>
                ) : (
                  <div />
                )}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  )
}
