import { motion } from 'framer-motion'

const About = () => {
  const skills = [
    { category: 'Languages', items: ['Python', 'Java', 'C++', 'JavaScript', 'TypeScript'] },
    { category: 'Cloud & DevOps', items: ['AWS', 'Docker', 'Jenkins', 'Terraform'] },
    { category: 'Frameworks', items: ['React', 'Spring', 'FastAPI', 'PyTorch', 'TensorFlow'] },
    { category: 'Databases', items: ['PostgreSQL', 'DynamoDB', 'ElasticSearch'] }
  ]

  return (
    <section id="about" className="section-container">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-12"
      >
        <div>
          <h2 className="text-3xl font-bold mb-6">About Me</h2>
          <div className="space-y-4 text-gray-300">
            <p>
              I'm a Software Engineer with a Master's in Computer Science from UIUC,
              passionate about building scalable distributed systems and creating
              impactful user experiences.
            </p>
            <p>
              My journey in tech has led me through various roles at IBM and research
              positions at UIUC, where I've worked on everything from AI-powered tools
              to enterprise-scale dashboards.
            </p>
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold mb-6">Technical Arsenal</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-secondary/50 p-4 rounded-lg"
              >
                <h4 className="text-accent font-semibold mb-2">{skillGroup.category}</h4>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm bg-primary px-3 py-1 rounded-full text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default About 