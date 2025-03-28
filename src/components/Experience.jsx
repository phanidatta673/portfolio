import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(null)

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
      ],
      techStack: ['React', 'Node.js', 'PostgreSQL', 'Docker', 'RedHat Cirrus'],
      diagram: {
        title: 'System Architecture',
        description: `
          The dashboard implementation utilized a microservices architecture with:
          - Frontend React application with server-side rendering
          - Node.js backend services for API handling
          - PostgreSQL database with optimized schema
          - Docker containers orchestrated on RedHat Cirrus
          - Load balancers for high availability
        `,
        metrics: [
          { label: 'Response Time', value: '70%', detail: 'Reduction in search response time' },
          { label: 'Daily Transactions', value: '100K+', detail: 'Processed with 99.9% uptime' },
          { label: 'Successful Builds', value: '450+', detail: 'With automated CI/CD pipelines' }
        ]
      }
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
      ],
      techStack: ['React.js', 'Django', 'OpenAI API', 'Elasticsearch'],
      diagram: {
        title: 'AI System Architecture',
        description: `
          The analogy generation system architecture includes:
          - React.js frontend for user interaction
          - Django backend for request handling
          - OpenAI API integration for analogy generation
          - Elasticsearch for efficient storage and retrieval
          - Vector embeddings for semantic search
        `,
        metrics: [
          { label: 'Response Time', value: '1.5s', detail: 'Average analogy generation time' },
          { label: 'Accuracy', value: '93%', detail: 'User satisfaction rate' },
          { label: 'Database Size', value: '10K+', detail: 'Stored analogies' }
        ]
      }
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
      ],
      techStack: ['Python', 'Flask', 'PyTorch', 'Docker'],
      diagram: {
        title: 'ML Pipeline Architecture',
        description: `
          The gesture recognition pipeline consists of:
          - Frontend video capture using MediaStream API
          - Flask backend for video processing
          - 3D CNN-LSTM model for gesture recognition
          - Real-time processing pipeline
          - Slack integration for notifications
        `,
        metrics: [
          { label: 'Model Accuracy', value: '95%', detail: 'On gesture recognition' },
          { label: 'F1 Score', value: '0.93', detail: 'Model performance metric' },
          { label: 'Processing Time', value: '200ms', detail: 'Per gesture recognition' }
        ]
      }
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
            <div 
              className={index % 2 === 0 ? 'md:pr-12' : 'md:pl-12 md:col-start-2'}
              onClick={() => setSelectedExp(selectedExp === index ? null : index)}
            >
              <div className="bg-secondary/50 p-6 rounded-lg hover:bg-secondary/70 transition-all duration-300 cursor-pointer">
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
                <div className="mt-4 flex flex-wrap gap-2">
                  {exp.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-accent/10 text-accent px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Timeline dot */}
            <div className="absolute left-0 md:left-1/2 w-4 h-4 bg-accent rounded-full transform -translate-x-1/2 mt-8" />
          </motion.div>
        ))}
      </div>

      {/* Technical Diagram Modal */}
      <AnimatePresence>
        {selectedExp !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedExp(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-secondary p-6 rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto"
              onClick={e => e.stopPropagation()}
            >
              <h3 className="text-2xl font-bold text-accent mb-4">
                {experiences[selectedExp].diagram.title}
              </h3>
              <div className="prose prose-invert max-w-none">
                <pre className="bg-primary/50 p-4 rounded-lg overflow-x-auto whitespace-pre-wrap">
                  {experiences[selectedExp].diagram.description}
                </pre>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                {experiences[selectedExp].diagram.metrics.map((metric, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="bg-primary/50 p-4 rounded-lg text-center"
                  >
                    <div className="text-2xl font-bold text-accent mb-1">
                      {metric.value}
                    </div>
                    <div className="text-sm text-gray-400 mb-1">
                      {metric.label}
                    </div>
                    <div className="text-xs text-gray-500">
                      {metric.detail}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}

export default Experience 