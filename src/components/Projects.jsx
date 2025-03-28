import { motion } from 'framer-motion'

const Projects = () => {
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

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            className="group relative"
          >
            <div className="bg-secondary/50 p-6 rounded-lg hover:bg-secondary/70 transition-all duration-300 transform group-hover:-translate-y-2">
              <h3 className="text-xl font-bold text-accent mb-3">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              
              <div className="mb-4">
                <h4 className="text-sm font-semibold text-gray-400 mb-2">Key Highlights:</h4>
                <ul className="space-y-1">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="text-gray-300 flex items-center">
                      <span className="text-accent mr-2">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-xs bg-primary px-3 py-1 rounded-full text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}

export default Projects 