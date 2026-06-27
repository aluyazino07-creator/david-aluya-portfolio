import { motion } from 'framer-motion'

const LoadingScreen = () => {
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
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  }

  return (
    <motion.div
      className="fixed inset-0 bg-white flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-center"
      >
        <motion.div
          variants={itemVariants}
          className="w-20 h-20 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-8"
        >
          <span className="text-4xl font-bold text-white">DA</span>
        </motion.div>

        <motion.h1
          variants={itemVariants}
          className="text-3xl font-bold text-dark mb-2"
        >
          David Aluya
        </motion.h1>

        <motion.p
          variants={itemVariants}
          className="text-gray-600 mb-8"
        >
          Frontend Developer Portfolio
        </motion.p>

        {/* Loading Animation */}
        <motion.div
          className="flex gap-2 justify-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 1,
                delay: i * 0.1,
                repeat: Infinity,
              }}
            />
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  )
}

export default LoadingScreen
