import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import { blogPosts } from '../data/blogPosts'

function BlogCard({ post, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="group bg-heading border border-white/5 hover:border-brand/30 transition-all duration-500 overflow-hidden flex flex-col"
    >
      {/* Image */}
      <Link to={`/blog/${post.slug}`} className="block overflow-hidden relative aspect-[4/3]">
        <img
          src={post.featuredImage}
          alt={post.featuredImageAlt}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/20 to-transparent" />
        {/* Read time badge */}
        <div className="absolute top-4 left-4 bg-brand/90 backdrop-blur-sm text-white text-[10px] font-semibold tracking-widest uppercase px-3 py-1.5">
          {post.readTime}
        </div>
      </Link>

      {/* Content */}
      <div className="flex flex-col flex-1 p-8">
        {/* Meta */}
        <div className="flex items-center gap-3 mb-5">
          <div className="h-px w-6 bg-brand/60 flex-shrink-0" />
          <span className="text-white/30 text-[10px] tracking-[0.22em] uppercase font-medium">
            {post.date}
          </span>
          <span className="text-white/15 text-[10px]">·</span>
          <span className="text-white/30 text-[10px] tracking-[0.22em] uppercase font-medium">
            {post.author}
          </span>
        </div>

        {/* Title */}
        <Link to={`/blog/${post.slug}`}>
          <h2 className="font-serif font-bold text-white text-xl leading-snug mb-4 group-hover:text-brand transition-colors duration-300">
            {post.title}
          </h2>
        </Link>

        {/* Excerpt */}
        <p className="text-white/50 text-sm leading-relaxed flex-1 mb-8">
          {post.excerpt}
        </p>

        {/* CTA */}
        <Link
          to={`/blog/${post.slug}`}
          className="inline-flex items-center gap-2 text-brand text-sm font-semibold tracking-wide group/link"
        >
          Read Article
          <svg
            className="w-4 h-4 group-hover/link:translate-x-1 transition-transform duration-200"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2.5}
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </Link>
      </div>
    </motion.article>
  )
}

export default function Blog() {
  return (
    <div className="overflow-x-hidden">
      <Navigation />

      <main>
        {/* Hero */}
        <section className="relative min-h-[50vh] bg-dark flex items-end overflow-hidden pt-32 pb-20">
          {/* Background */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-br from-dark via-heading to-dark" />
            {/* Subtle grid */}
            <div
              className="absolute inset-0 opacity-[0.03]"
              style={{
                backgroundImage:
                  'linear-gradient(#0067FF 1px, transparent 1px), linear-gradient(90deg, #0067FF 1px, transparent 1px)',
                backgroundSize: '60px 60px',
              }}
            />
            {/* Blue glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-brand/10 rounded-full blur-3xl" />
            <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-heading to-transparent" />
          </div>

          <div className="relative max-w-7xl mx-auto px-6 lg:px-12 w-full">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-3 mb-7"
            >
              <div className="h-px w-10 bg-brand" />
              <span className="text-brand text-[11px] font-semibold tracking-[0.28em] uppercase">
                Insights &amp; Resources
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-serif font-bold text-white leading-[1.04] mb-6"
              style={{ fontSize: 'clamp(2.8rem, 7vw, 5.5rem)' }}
            >
              The First Step{' '}
              <em className="not-italic text-brand">Blog</em>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 }}
              className="text-white/55 text-lg max-w-xl leading-relaxed"
            >
              Evidence-based articles on mindful fitness, stress management, sleep,
              and ACT coaching — written for adults who are ready to take their first real step.
            </motion.p>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="bg-heading py-20 lg:py-28">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, i) => (
                <BlogCard key={post.slug} post={post} index={i} />
              ))}
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
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
                Put These Insights Into{' '}
                <span className="text-brand">Action</span>
              </h2>
              <p className="text-white/50 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Reading is the first step. A personalized plan is the next.
                Book your free assessment with Joe today.
              </p>
              <a
                href="https://tidycal.com/1yn5jw3/30-minute-meeting"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 bg-brand text-white font-semibold text-sm px-10 py-4 hover:bg-blue-500 transition-all duration-300 group tracking-wide"
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
      </main>

      <Footer />
    </div>
  )
}
