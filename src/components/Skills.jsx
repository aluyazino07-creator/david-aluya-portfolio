import { motion } from 'framer-motion'

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: ['HTML5', 'CSS3', 'JavaScript', 'React', 'Responsive Design', 'Accessibility'],
    },
    {
      title: 'Styling',
      skills: ['Tailwind CSS', 'CSS Animations', 'Flexbox', 'Grid'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'Figma'],
    },
    {
      title: 'Currently Learning',
      skills: ['React Advanced', 'APIs & Fetch', 'TypeScript', 'Node.js'],
    },
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
      transition: { duration: 0.5 },
    },
  }

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-light">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-clamp-h2 font-bold text-dark mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="bg-white p-8 rounded-2xl border-2 border-transparent hover:border-blue-600 shadow-soft hover:shadow-soft-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-dark mb-6">{category.title}</h3>
              <div className="grid grid-cols-2 gap-4">
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{
                      scale: 1.05,
                      boxShadow: '0 10px 30px rgba(37, 99, 235, 0.2)',
                    }}
                    className="px-4 py-3 bg-gradient-to-r from-blue-50 to-indigo-50 text-dark font-semibold rounded-lg border border-blue-200 text-center shadow-soft hover:border-blue-600 transition-all cursor-pointer"
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Proficiency Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-20 bg-white p-12 rounded-2xl shadow-soft"
        >
          <h3 className="text-2xl font-bold text-dark mb-8">Proficiency Levels</h3>
          <div className="space-y-6">
            {[
              { name: 'HTML & CSS', level: 90 },
              { name: 'JavaScript', level: 85 },
              { name: 'React', level: 75 },
              { name: 'Responsive Design', level: 88 },
              { name: 'UI/UX Design', level: 80 },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-dark">{skill.name}</span>
                  <span className="text-blue-600 font-bold">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Skills
