import { motion } from 'framer-motion'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <footer className="bg-dark text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="max-w-6xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8 pb-8 border-b border-gray-700">
          {/* Brand */}
          <motion.div
            whileHover={{ scale: 1.05 }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mb-2">
              David Aluya
            </h3>
            <p className="text-gray-400 text-sm">
              Frontend Developer | Future Tech Entrepreneur
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              {['Home', 'About', 'Skills', 'Projects', 'Contact'].map((link) => (
                <motion.li key={link}>
                  <a
                    href={`#${link.toLowerCase()}`}
                    className="hover:text-white transition-colors"
                  >
                    {link}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Tech Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h4 className="font-semibold mb-4">Built With</h4>
            <div className="flex flex-wrap gap-2">
              {['React', 'Tailwind', 'Framer Motion', 'Vite'].map((tech) => (
                <span key={tech} className="px-3 py-1 bg-gray-800 rounded-full text-xs text-gray-300">
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Copyright */}
        <motion.div
          variants={containerVariants}
          className="text-center"
        >
          <p className="text-gray-400 text-sm">
            © {currentYear} David Aluya. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs mt-2">
            Built with React & Tailwind CSS
          </p>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer
