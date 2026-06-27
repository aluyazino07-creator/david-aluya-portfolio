import { motion } from 'framer-motion'

const Experience = () => {
  const timeline = [
    {
      title: 'Self-Taught Frontend Developer',
      company: 'Personal Projects',
      period: '2024 - Present',
      responsibilities: [
        'Built responsive websites with HTML, CSS, and JavaScript',
        'Created reusable React components and improved component architecture',
        'Implemented accessibility best practices and WCAG compliance',
        'Optimized web performance and page load speeds',
        'Learned React through real-world project applications',
      ],
    },
    {
      title: 'Commercial Student',
      company: 'Education',
      period: '2022 - 2024',
      responsibilities: [
        'Completed commercial studies and business fundamentals',
        'Developed foundational knowledge in technology and business',
        'Initiated journey into web development and frontend technologies',
        'Built first projects to understand core web concepts',
      ],
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
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-light">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-clamp-h2 font-bold text-dark mb-4">Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Timeline Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-blue-600 to-indigo-600"></div>

          {timeline.map((item, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`mb-12 ${index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'} md:w-1/2`}
            >
              {/* Timeline Card */}
              <div className="bg-white p-8 rounded-2xl shadow-soft border-2 border-transparent hover:border-blue-600 transition-all relative">
                {/* Timeline Dot */}
                <div className="hidden md:block absolute top-8 w-6 h-6 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transform -translate-x-1/2 left-1/2 border-4 border-white"></div>

                {/* Content */}
                <div>
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-dark">{item.title}</h3>
                      <p className="text-blue-600 font-semibold mt-1">{item.company}</p>
                    </div>
                    <span className="px-4 py-2 bg-blue-50 text-blue-700 text-sm font-bold rounded-lg border border-blue-200">
                      {item.period}
                    </span>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-3 mt-6">
                    {item.responsibilities.map((responsibility, idx) => (
                      <motion.li
                        key={idx}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: idx * 0.1 }}
                        className="flex items-start gap-3 text-gray-600"
                      >
                        <div className="flex-shrink-0 w-2 h-2 rounded-full bg-blue-600 mt-2"></div>
                        <span>{responsibility}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Experience
