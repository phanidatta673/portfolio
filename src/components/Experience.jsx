import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const Experience = () => {
  const [selectedExp, setSelectedExp] = useState(0)

  const experiences = [
    {
      title: 'Full Stack Developer',
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

      <div className="grid grid-cols-12 gap-8">
        {/* Sidebar Navigation */}
        <div className="col-span-3">
          <div className="sticky top-8 space-y-2 pr-4 border-r border-gray-700">
            {experiences.map((exp, index) => (
              <button
                key={index}
                onClick={() => setSelectedExp(index)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 relative ${
                  selectedExp === index
                    ? 'bg-accent/10 text-accent'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <div className="font-semibold">{exp.title}</div>
                <div className="text-sm opacity-75">{exp.company}</div>
                {selectedExp === index && (
                  <motion.div
                    layoutId="sidebar-active"
                    className="absolute left-0 top-0 w-1 h-full bg-accent rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Experience Details */}
        <div className="col-span-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedExp}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-secondary/50 p-6 rounded-lg"
            >
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-accent">{experiences[selectedExp].title}</h3>
                <div className="text-gray-400">{experiences[selectedExp].company}</div>
                <div className="text-sm text-gray-500">{experiences[selectedExp].period}</div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="text-lg font-semibold text-gray-300 mb-3">Key Achievements</h4>
                  <ul className="space-y-2">
                    {experiences[selectedExp].highlights.map((highlight, i) => (
                      <li key={i} className="flex items-start text-gray-300">
                        <span className="text-accent mr-2">•</span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-300 mb-3">Technologies Used</h4>
                  <div className="flex flex-wrap gap-2">
                    {experiences[selectedExp].techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="text-sm bg-primary/50 px-3 py-1 rounded-full text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-lg font-semibold text-gray-300 mb-3">System Architecture</h4>
                  <div className="bg-primary/30 p-4 rounded-lg">
                    <pre className="whitespace-pre-wrap text-sm text-gray-300">
                      {experiences[selectedExp].diagram.description}
                    </pre>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mt-4">
                    {experiences[selectedExp].diagram.metrics.map((metric, i) => (
                      <div key={i} className="bg-primary/20 p-4 rounded-lg text-center">
                        <div className="text-xl font-bold text-accent mb-1">{metric.value}</div>
                        <div className="text-sm text-gray-400">{metric.label}</div>
                        <div className="text-xs text-gray-500">{metric.detail}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Experience 