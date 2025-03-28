import { motion } from 'framer-motion'

const Contact = () => {
  const contactInfo = [
    {
      type: 'Email',
      value: 'phanidatta673@gmail.com',
      link: 'mailto:phanidatta673@gmail.com'
    },
    {
      type: 'Phone',
      value: '447-902-0741',
      link: 'tel:4479020741'
    },
    {
      type: 'LinkedIn',
      value: 'linkedin.com/in/phanidatta673',
      link: 'https://linkedin.com/in/phanidatta673'
    },
    {
      type: 'GitHub',
      value: 'github.com/phanidatta673',
      link: 'https://github.com/phanidatta673'
    }
  ]

  return (
    <section id="contact" className="section-container">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto text-center"
      >
        <h2 className="text-3xl font-bold mb-8">Let's Connect</h2>
        <p className="text-gray-300 mb-12">
          I'm always open to discussing new projects, opportunities, or just having a chat
          about technology and innovation.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {contactInfo.map((info, index) => (
            <motion.a
              key={index}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-secondary/50 p-6 rounded-lg hover:bg-secondary/70 transition-all duration-300 transform hover:-translate-y-1"
            >
              <h3 className="text-accent font-semibold mb-2">{info.type}</h3>
              <p className="text-gray-300">{info.value}</p>
            </motion.a>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Contact 