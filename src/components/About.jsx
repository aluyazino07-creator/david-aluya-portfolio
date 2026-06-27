import { motion } from 'framer-motion'
import { FiCode, FiHeart, FiZap } from 'react-icons/fi'

const About = () => {
  const stats = [
    { label: 'Projects Built', value: '15+' },
    { label: 'Technologies', value: '8+' },
    { label: 'Coding Hours', value: '500+' },
    { label: 'Coffee Consumed', value: '∞' },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-clamp-h2 font-bold text-dark mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-6"
          >
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed"
            >
              I'm a passionate frontend developer from Nigeria with a strong foundation in HTML, CSS, and JavaScript. I'm currently learning React and love building interactive, responsive web experiences that users enjoy.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Beyond coding, I'm fascinated by UI/UX design and constantly working on new projects to improve my skills. I believe in clean code, continuous learning, and solving real-world problems through technology.
            </motion.p>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed"
            >
              My vision is to become a skilled frontend developer and eventually build technology businesses that make a positive impact on society.
            </motion.p>

            {/* Features */}
            <motion.div
              variants={containerVariants}
              className="space-y-3 pt-4"
            >
              {[
                'Strong HTML, CSS & JavaScript fundamentals',
                'Building responsive designs with Tailwind CSS',
                'Learning React for modern web development',
                'Passionate about UI/UX and accessibility',
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 flex items-center justify-center mt-1">
                    <span className="text-white text-sm font-bold">✓</span>
                  </div>
                  <p className="text-gray-700">{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Stats */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10, boxShadow: '0 20px 50px rgba(0, 0, 0, 0.12)' }}
                className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-100 text-center shadow-soft transition-all"
              >
                <motion.div
                  className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {stat.value}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Key Traits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
        >
          {[
            {
              icon: <FiCode size={32} />,
              title: 'Clean Code',
              description: 'I write readable, maintainable, and well-structured code that follows best practices.',
            },
            {
              icon: <FiHeart size={32} />,
              title: 'User Focused',
              description: 'I design with users in mind, creating intuitive and accessible web experiences.',
            },
            {
              icon: <FiZap size={32} />,
              title: 'Performance',
              description: 'I optimize applications for speed and efficiency to deliver the best user experience.',
            },
          ].map((trait, index) => (
            <motion.div
              key={index}
              whileHover={{ y: -5 }}
              className="p-8 bg-light rounded-xl border border-gray-200 text-center shadow-soft transition-all"
            >
              <motion.div
                className="text-blue-600 mb-4 flex justify-center"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {trait.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-dark mb-2">{trait.title}</h3>
              <p className="text-gray-600">{trait.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default About
