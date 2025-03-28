import { motion } from 'framer-motion'

const Experience = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'IBM',
      period: 'Sep 2020 - Aug 2023',
      highlights: [
        'Developed full-stack dashboard tracking millions of orders',
        'Built RESTful APIs with Node.js for invoice reconciliation',
        'Designed PostgreSQL schema handling 100,000+ daily transactions',
        'Containerized microservices with Docker on RedHat Cirrus'
      ]
    },
    {
      title: 'Research Assistant',
      company: 'UIUC',
      period: 'Sep 2023 - Dec 2024',
      highlights: [
        'Developed AI-powered analogy generation tool',
        'Integrated OpenAI API for contextual explanations',
        'Implemented Elasticsearch for optimized retrieval',
        'Co-authored research paper on AI educational tools'
      ]
    },
    {
      title: 'Software Engineering Intern',
      company: 'IBM',
      period: 'Jan 2020 - Sep 2020',
      highlights: [
        'Engineered hand gesture recognition tool',
        'Developed Flask backend for video processing',
        'Implemented 3D CNN-LSTM model with 95% accuracy',
        'Led project from design to deployment'
      ]
    }
  ]

  return (
    <section id="experience" className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-12 text-center"
      >
        Professional Journey
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 h-full w-0.5 bg-accent/30 transform -translate-x-1/2" />

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className={`relative grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 ${
              index % 2 === 0 ? 'md:text-right' : 'md:flex-row-reverse'
            }`}
          >
            <div className={index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}>
              <div className="bg-secondary/50 p-6 rounded-lg hover:bg-secondary/70 transition-colors">
                <h3 className="text-xl font-bold text-accent mb-1">{exp.title}</h3>
                <div className="text-gray-400 mb-2">{exp.company}</div>
                <div className="text-sm text-gray-500 mb-4">{exp.period}</div>
                <ul className="space-y-2 text-gray-300">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start">
                      <span className="text-accent mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 mt-8" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Experience 