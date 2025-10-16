import { motion, useInView, useScroll, useTransform } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { Star, Quote } from 'lucide-react'
import './Testimonials.css'

const Testimonials = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [currentIndex, setCurrentIndex] = useState(0)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end start'] })
  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, -40])
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, 40])

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Software Engineer',
      company: 'Tech Innovations Inc.',
      avatar: 'https://i.pravatar.cc/150?img=1',
      content:
        'InsightCV completely transformed my resume! The intelligent analytics helped me land interviews at top tech companies. The skills gap analysis was incredibly accurate.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Product Manager',
      company: 'Innovation Labs',
      avatar: 'https://i.pravatar.cc/150?img=2',
      content:
        'I was skeptical at first, but the interview simulation feature prepared me perfectly. I got my dream job within 3 weeks of using InsightCV!',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'UX Designer',
      company: 'Creative Studios',
      avatar: 'https://i.pravatar.cc/150?img=3',
      content:
        'The job matching suggestions were spot on. InsightCV understood my career goals better than I did! Highly recommend it to anyone job hunting.',
      rating: 5,
    },
    {
      name: 'David Kim',
      role: 'Data Scientist',
      company: 'Analytics Corp',
      avatar: 'https://i.pravatar.cc/150?img=4',
      content:
        'Amazing tool! The AI-powered feedback helped me optimize my resume for ATS systems. My response rate increased by 300%!',
      rating: 5,
    },
    {
      name: 'Lisa Thompson',
      role: 'Marketing Director',
      company: 'Brand Solutions',
      avatar: 'https://i.pravatar.cc/150?img=5',
      content:
        'InsightCV gave me the confidence in my applications. The detailed insights and recommendations were exactly what I needed to stand out.',
      rating: 5,
    },
  ]

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [testimonials.length])

  return (
    <section
      id="testimonials"
      ref={ref}
      className="testimonials"
    >
      {/* Background Decoration */}
      <div className="testimonials-background">
        <motion.div className="bg-orb testimonials-orb-1" style={{ y: orb1Y }} />
        <motion.div className="bg-orb testimonials-orb-2" style={{ y: orb2Y }} />
      </div>

      <div className="container">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="testimonials-header"
        >
          <motion.span
            initial={{ opacity: 0, scale: 0.5 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.5 }}
            className="testimonials-badge"
          >
            Client Reviews
          </motion.span>
          <h2 className="testimonials-title">
            Loved by{' '}
            <span className="gradient-text">Professionals</span>
          </h2>
          <p className="testimonials-subtitle">
            Join thousands of successful job seekers who transformed their careers
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="testimonials-carousel">
          {/* Main Testimonial Display */}
          <div className="testimonials-display">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: currentIndex === index ? 1 : 0,
                  x: currentIndex === index ? 0 : currentIndex < index ? 100 : -100,
                  scale: currentIndex === index ? 1 : 0.8,
                }}
                transition={{ duration: 0.5 }}
                className={`testimonial-card ${
                  currentIndex === index ? 'active' : 'inactive'
                }`}
              >
                <div className="testimonial-content">
                  {/* Quote Icon */}
                  <div className="quote-icon">
                    <Quote className="quote-svg" />
                  </div>

                  {/* Rating */}
                  <div className="testimonial-rating">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          currentIndex === index
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{ delay: i * 0.1 + 0.2, duration: 0.3 }}
                      >
                        <Star className="star-icon" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="testimonial-text">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="testimonial-author">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="author-avatar"
                    >
                      <img
                        src={testimonial.avatar}
                        alt={testimonial.name}
                        className="avatar-image"
                      />
                      <div className="avatar-overlay" />
                    </motion.div>
                    <div className="author-info">
                      <div className="author-name">
                        {testimonial.name}
                      </div>
                      <div className="author-role">
                        {testimonial.role}
                      </div>
                      <div className="author-company">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Dots */}
          <div className="testimonials-dots">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className="dot-button"
                aria-label={`Go to testimonial ${index + 1}`}
              >
                <div
                  className={`dot ${
                    currentIndex === index ? 'active' : 'inactive'
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Side Previews - Desktop Only */}
          <div className="testimonials-previews">
            {/* Previous Card */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 0.3, x: 0 }}
              className="preview-card preview-prev"
            >
              <div className="preview-content">
                <div className="preview-avatar">
                  <img
                    src={
                      testimonials[
                        (currentIndex - 1 + testimonials.length) % testimonials.length
                      ].avatar
                    }
                    alt="Previous"
                    className="preview-image"
                  />
                </div>
                <div className="preview-placeholder" />
              </div>
            </motion.div>

            {/* Next Card */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 0.3, x: 0 }}
              className="preview-card preview-next"
            >
              <div className="preview-content">
                <div className="preview-avatar">
                  <img
                    src={testimonials[(currentIndex + 1) % testimonials.length].avatar}
                    alt="Next"
                    className="preview-image"
                  />
                </div>
                <div className="preview-placeholder" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials
