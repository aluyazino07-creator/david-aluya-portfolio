import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'SaaS Landing Page',
      description: 'A modern, responsive landing page for a SaaS product with smooth animations and engaging interactions.',
      image: 'https://via.placeholder.com/500x300/2563EB/ffffff?text=SaaS+Landing',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/aluyazino07-creator',
      demo: '#',
    },
    {
      id: 2,
      title: 'Analytics Dashboard',
      description: 'A fully responsive analytics dashboard with sidebar navigation, charts, and data visualization.',
      image: 'https://via.placeholder.com/500x300/4F46E5/ffffff?text=Dashboard+UI',
      tech: ['React', 'Tailwind CSS', 'Chart.js'],
      github: 'https://github.com/aluyazino07-creator',
      demo: '#',
    },
    {
      id: 3,
      title: 'Authentication UI',
      description: 'Modern login and signup interfaces with form validation, smooth transitions, and accessible design.',
      image: 'https://via.placeholder.com/500x300/2563EB/ffffff?text=Auth+UI',
      tech: ['HTML5', 'CSS3', 'JavaScript'],
      github: 'https://github.com/aluyazino07-creator',
      demo: '#',
    },
    {
      id: 4,
      title: 'Weather App',
      description: 'Real-time weather application that fetches data from an API and displays weather information beautifully.',
      image: 'https://via.placeholder.com/500x300/4F46E5/ffffff?text=Weather+App',
      tech: ['React', 'API Integration', 'Tailwind CSS'],
      github: 'https://github.com/aluyazino07-creator',
      demo: '#',
    },
    {
      id: 5,
      title: 'Task Manager',
      description: 'A CRUD application with local storage integration for managing tasks, complete with delete and edit features.',
      image: 'https://via.placeholder.com/500x300/2563EB/ffffff?text=Task+Manager',
      tech: ['JavaScript', 'Local Storage', 'CSS3'],
      github: 'https://github.com/aluyazino07-creator',
      demo: '#',
    },
    {
      id: 6,
      title: 'Portfolio Website',
      description: 'A premium, responsive portfolio website showcasing projects and skills with smooth animations.',
      image: 'https://via.placeholder.com/500x300/4F46E5/ffffff?text=Portfolio',
      tech: ['React', 'Tailwind CSS', 'Framer Motion'],
      github: 'https://github.com/aluyazino07-creator/david-aluya-portfolio',
      demo: '#',
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  const handleGitHubClick = (url) => {
    window.open(url, '_blank')
  }

  const handleDemoClick = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank')
    } else {
      alert('Demo link coming soon!')
    }
  }

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-clamp-h2 font-bold text-dark mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -15, boxShadow: '0 20px 50px rgba(0, 0, 0, 0.15)' }}
              className="bg-white rounded-2xl overflow-hidden shadow-soft hover:shadow-soft-xl transition-all duration-300 border border-gray-100"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden bg-gradient-to-br from-blue-100 to-indigo-100 h-56">
                <motion.img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Title */}
                <h3 className="text-xl font-bold text-dark mb-2">{project.title}</h3>

                {/* Description */}
                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <motion.span
                      key={index}
                      className="inline-block px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded-full border border-blue-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex gap-3">
                  <motion.button
                    onClick={() => handleGitHubClick(project.github)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-dark text-white font-semibold rounded-lg hover:bg-gray-800 transition-colors cursor-pointer"
                  >
                    <FiGithub size={18} /> Code
                  </motion.button>
                  <motion.button
                    onClick={() => handleDemoClick(project.demo)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 border-2 border-dark text-dark font-semibold rounded-lg hover:bg-light transition-colors cursor-pointer"
                  >
                    <FiExternalLink size={18} /> Demo
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
