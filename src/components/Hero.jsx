import { motion } from 'framer-motion'
import { FiArrowRight, FiDownload, FiMail } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import FloatingCircles from './FloatingCircles'
import { useState, useEffect } from 'react'

const Hero = () => {
  const words = ['Frontend Developer', 'React Developer', 'JavaScript Developer', 'UI Enthusiast']
  const [displayedWord, setDisplayedWord] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setDisplayedWord((prev) => (prev + 1) % words.length)
    }, 3000)
    return () => clearInterval(interval)
  }, [])

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  }

  const handleViewProjects = () => {
    const projectsElement = document.getElementById('projects')
    if (projectsElement) {
      projectsElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleDownloadResume = () => {
    // Create a simple resume download (replace with actual resume URL)
    const resumeContent = `
DAVID ALUYA
Frontend Developer | Nigeria

CONTACT
Email: aluyazino07@gmail.com
GitHub: github.com/aluyazino07-creator
Portfolio: yourdomain.com

SKILLS
- HTML5, CSS3, JavaScript
- React, Responsive Design
- Tailwind CSS, Framer Motion
- Git, GitHub
- Accessibility & SEO

EXPERIENCE
Self-Taught Frontend Developer (2024 - Present)
- Built responsive websites with HTML, CSS, JavaScript
- Created reusable React components
- Implemented accessibility best practices
- Optimized web performance

EDUCATION
Commercial Studies (2022 - 2024)

PROJECTS
1. SaaS Landing Page - React, Tailwind CSS, Framer Motion
2. Analytics Dashboard - React, Tailwind CSS, Chart.js
3. Authentication UI - HTML5, CSS3, JavaScript
4. Weather App - React, API Integration
5. Task Manager - JavaScript, Local Storage
6. Portfolio Website - React, Tailwind CSS, Framer Motion
    `
    const element = document.createElement('a')
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(resumeContent))
    element.setAttribute('download', 'David_Aluya_Resume.txt')
    element.style.display = 'none'
    document.body.appendChild(element)
    element.click()
    document.body.removeChild(element)
  }

  const handleContact = () => {
    const contactElement = document.getElementById('contact')
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const handleSocialClick = (url) => {
    if (url && url !== '#') {
      window.open(url, '_blank')
    }
  }

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <FloatingCircles />

      <div className="max-w-6xl w-full mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Main Heading */}
            <motion.div variants={itemVariants}>
              <h1 className="text-clamp-h1 font-bold text-dark leading-tight">
                Hi, I'm David Aluya
              </h1>
            </motion.div>

            {/* Animated Typing Effect */}
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <div className="h-12 flex items-center">
                <motion.span
                  className="text-2xl sm:text-3xl font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"
                  key={displayedWord}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.5 }}
                >
                  {words[displayedWord]}
                </motion.span>
              </div>
            </motion.div>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed max-w-lg"
            >
              I build fast, responsive, and modern web experiences while creating technology businesses that solve real-world problems. Passionate about clean code, great design, and continuous learning.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <motion.button
                onClick={handleViewProjects}
                whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(37, 99, 235, 0.2)' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-lg shadow-soft transition-all cursor-pointer hover:shadow-lg"
              >
                View Projects <FiArrowRight size={20} />
              </motion.button>
              <motion.button
                onClick={handleDownloadResume}
                whileHover={{ scale: 1.05, backgroundColor: '#F8FAFC' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-dark text-dark font-semibold rounded-lg hover:bg-light transition-all cursor-pointer"
              >
                <FiDownload size={20} /> Resume
              </motion.button>
              <motion.button
                onClick={handleContact}
                whileHover={{ scale: 1.05, backgroundColor: '#F8FAFC' }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center justify-center gap-2 px-8 py-4 border-2 border-dark text-dark font-semibold rounded-lg hover:bg-light transition-all cursor-pointer"
              >
                <FiMail size={20} /> Contact
              </motion.button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              variants={itemVariants}
              className="flex gap-4 pt-8"
            >
              <motion.button
                onClick={() => handleSocialClick('https://github.com/aluyazino07-creator')}
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-3 bg-light rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <FaGithub size={24} className="text-dark" />
              </motion.button>
              <motion.button
                onClick={() => handleSocialClick('https://linkedin.com/in/david-aluya')}
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-3 bg-light rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <FaLinkedin size={24} className="text-blue-600" />
              </motion.button>
              <motion.button
                onClick={() => handleSocialClick('mailto:aluyazino07@gmail.com')}
                whileHover={{ scale: 1.1, y: -5 }}
                className="p-3 bg-light rounded-lg hover:bg-gray-200 transition-colors cursor-pointer"
              >
                <FiMail size={24} className="text-dark" />
              </motion.button>
            </motion.div>
          </motion.div>

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="hidden lg:flex justify-center"
          >
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="w-full max-w-sm"
            >
              <div className="w-80 h-80 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl flex items-center justify-center shadow-soft-lg">
                <div className="text-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white text-5xl font-bold mx-auto mb-4">
                    DA
                  </div>
                  <p className="text-dark font-semibold">Frontend Developer</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Hero
