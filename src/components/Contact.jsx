import { motion } from 'framer-motion'
import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'
import { SiGooglescholar } from 'react-icons/si'

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState('')
  const formRef = useRef()

  const socialLinks = [
    {
      type: 'GitHub',
      link: 'https://github.com/phanidatta673',
      icon: <FaGithub className="text-2xl" />
    },
    {
      type: 'LinkedIn',
      link: 'https://linkedin.com/in/phanidatta673',
      icon: <FaLinkedin className="text-2xl" />
    },
    {
      type: 'Google Scholar',
      link: 'https://scholar.google.com/citations?user=7uknPOYAAAAJ&hl=en',
      icon: <SiGooglescholar className="text-2xl" />
    },
    {
      type: 'Email',
      link: 'mailto:phanidatta673@gmail.com',
      icon: <FaEnvelope className="text-2xl" />
    }
  ]

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus('')

    try {
      await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      setSubmitStatus('success')
      formRef.current.reset()
    } catch (error) {
      console.error('EmailJS error:', error)
      setSubmitStatus('error')
    }
    setIsSubmitting(false)
  }

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-4xl mx-auto"
      >
        <h2 className="text-3xl font-bold mb-8 text-center">Let's Connect</h2>
        <p className="text-gray-300 mb-12 text-center">
          Have a question or want to work together? Leave your details and I'll get back to you as soon as possible.
        </p>

        <div className="bg-secondary/30 p-8 rounded-lg">
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                required
                className="w-full px-4 py-2 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-gray-400"
                placeholder="Your name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                required
                className="w-full px-4 py-2 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-gray-400"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows="4"
                className="w-full px-4 py-2 bg-gray-700/50 rounded-lg focus:outline-none focus:ring-2 focus:ring-accent text-white placeholder-gray-400"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full btn-primary disabled:opacity-50"
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
            {submitStatus === 'success' && (
              <p className="text-green-500 text-sm text-center">Message sent successfully!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-500 text-sm text-center">Failed to send message. Please try again.</p>
            )}
          </form>

          <div className="flex justify-center items-center space-x-6 mt-8 pt-6 border-t border-gray-700">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                className="text-gray-400 hover:text-accent transition-colors duration-300"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Contact 