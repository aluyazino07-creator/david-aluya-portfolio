import { motion } from 'framer-motion'

const FloatingCircles = () => {
  const circles = [
    { size: 300, top: '10%', left: '-5%', duration: 20, delay: 0 },
    { size: 200, top: '60%', right: '-2%', duration: 25, delay: 2 },
    { size: 250, bottom: '10%', left: '5%', duration: 30, delay: 4 },
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {circles.map((circle, index) => (
        <motion.div
          key={index}
          className="absolute rounded-full blur-3xl opacity-20"
          style={{
            width: circle.size,
            height: circle.size,
            top: circle.top,
            left: circle.left,
            right: circle.right,
            bottom: circle.bottom,
            background: 'linear-gradient(135deg, #2563EB, #4F46E5)',
          }}
          animate={{
            y: [0, 50, 0],
            x: [0, 30, 0],
          }}
          transition={{
            duration: circle.duration,
            delay: circle.delay,
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        />
      ))}
    </div>
  )
}

export default FloatingCircles
