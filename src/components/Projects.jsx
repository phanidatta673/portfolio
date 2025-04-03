import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(0)

  const projects = [
    {
      title: 'vLLM-Powered Text Summarization',
      description: 'Developed a text summarization tool using vLLM for efficient processing of long-form content.',
      tech: ['Python', 'vLLM', 'OpenAI API'],
      highlights: [
        'Processed 3000+ news articles',
        'Optimized for performance',
        'Implemented streaming responses'
      ]
    },
    {
      title: 'AWS Distance Query Bot',
      description: 'Interactive chatbot for querying distances between cities using graph algorithms.',
      tech: ['AWS Lex', 'Lambda', 'DynamoDB', 'React'],
      highlights: [
        'Implemented BFS algorithm',
        'Reduced query time by 60%',
        'Built responsive UI'
      ]
    }
  ]

  return (
    <section id="projects" className="section-container">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-12 text-center"
      >
        Featured Projects
      </motion.h2>

      <div className="grid grid-cols-12 gap-8">
        {/* Sidebar Navigation */}
        <div className="col-span-3">
          <div className="sticky top-8 space-y-2 pr-4 border-r border-gray-700">
            {projects.map((project, index) => (
              <button
                key={index}
                onClick={() => setSelectedProject(index)}
                className={`w-full text-left p-4 rounded-lg transition-all duration-300 relative ${
                  selectedProject === index
                    ? 'bg-accent/10 text-accent'
                    : 'text-gray-400 hover:text-gray-200'
                }`}
              >
                <div className="font-semibold">{project.title}</div>
                <div className="text-sm opacity-75 line-clamp-2">{project.description}</div>
                {selectedProject === index && (
                  <motion.div
                    layoutId="sidebar-active-project"
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

        {/* Project Details */}
        <div className="col-span-9">
          <AnimatePresence mode="wait">
            <motion.div
              key={selectedProject}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-secondary/50 p-6 rounded-lg hover:bg-secondary/70 transition-all duration-300 group"
            >
              <h3 className="text-2xl font-bold text-accent mb-4 group-hover:text-accent/90">
                {projects[selectedProject].title}
              </h3>
              <p className="text-gray-300 mb-6 group-hover:text-white">
                {projects[selectedProject].description}
              </p>

              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-300 mb-3 group-hover:text-gray-200">
                  Key Highlights
                </h4>
                <ul className="space-y-2">
                  {projects[selectedProject].highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-300 flex items-center group-hover:text-white">
                      <span className="text-accent mr-2 group-hover:scale-110 transition-transform">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-300 mb-3 group-hover:text-gray-200">
                  Technologies Used
                </h4>
                <div className="flex flex-wrap gap-2">
                  {projects[selectedProject].tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm bg-primary/50 px-3 py-1 rounded-full text-gray-300 group-hover:bg-primary/70 group-hover:text-white transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}

export default Projects 