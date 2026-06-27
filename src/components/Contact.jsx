import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin } from 'react-icons/fi'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData)
      setSubmitted(true)
      setIsSubmitting(false)
      setFormData({ name: '', email: '', subject: '', message: '' })
      
      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitted(false)
      }, 3000)
    }, 1000)
  }

  const handleEmailClick = () => {
    window.location.href = `mailto:aluyazino07@gmail.com`
  }

  const handleSocialClick = (url) => {
    window.open(url, '_blank')
  }

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
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-clamp-h2 font-bold text-dark mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 mb-2">Let's build something amazing together.</p>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8"
          >
            <motion.div
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-2xl font-bold text-dark mb-6">Contact Information</h3>

              {/* Email */}
              <motion.button
                onClick={handleEmailClick}
                whileHover={{ x: 10 }}
                className="flex items-start gap-4 w-full text-left cursor-pointer hover:opacity-80 transition-opacity"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                  <FiMail size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-dark">Email</h4>
                  <p className="text-gray-600 hover:text-blue-600 transition-colors">
                    aluyazino07@gmail.com
                  </p>
                </div>
              </motion.button>

              {/* Location */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                  <FiMapPin size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-dark">Location</h4>
                  <p className="text-gray-600">Nigeria</p>
                </div>
              </motion.div>

              {/* Status */}
              <motion.div
                whileHover={{ x: 10 }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg flex items-center justify-center">
                  <FiPhone size={24} className="text-blue-600" />
                </div>
                <div>
                  <h4 className="font-bold text-dark">Availability</h4>
                  <p className="text-gray-600">Open to Frontend Developer Opportunities</p>
                </div>
              </motion.div>
            </motion.div>

            {/* Social Links */}
            <motion.div variants={itemVariants} className="space-y-4 pt-6">
              <h4 className="font-bold text-dark">Follow Me</h4>
              <div className="flex gap-4">
                <motion.button
                  onClick={() => handleSocialClick('https://github.com/aluyazino07-creator')}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-colors border border-blue-200 cursor-pointer"
                >
                  <FaGithub size={24} className="text-dark" />
                </motion.button>
                <motion.button
                  onClick={() => handleSocialClick('https://linkedin.com/in/david-aluya')}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-colors border border-blue-200 cursor-pointer"
                >
                  <FaLinkedin size={24} className="text-blue-600" />
                </motion.button>
                <motion.button
                  onClick={handleEmailClick}
                  whileHover={{ scale: 1.1, y: -5 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-4 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg hover:from-blue-100 hover:to-indigo-100 transition-colors border border-blue-200 cursor-pointer"
                >
                  <FiMail size={24} className="text-dark" />
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.form
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6 bg-light p-8 rounded-2xl"
          >
            {/* Name */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-dark mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </motion.div>

            {/* Email */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-dark mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                placeholder="your@email.com"
              />
            </motion.div>

            {/* Subject */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-dark mb-2">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors"
                placeholder="Subject"
              />
            </motion.div>

            {/* Message */}
            <motion.div variants={itemVariants}>
              <label className="block text-sm font-semibold text-dark mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 bg-white border-2 border-gray-200 rounded-lg focus:border-blue-600 focus:outline-none transition-colors resize-none"
                placeholder="Your message..."
              />
            </motion.div>

            {/* Submit Button */}
            <motion.button
              variants={itemVariants}
              whileHover={{ scale: 1.05, boxShadow: '0 20px 50px rgba(37, 99, 235, 0.2)' }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full px-6 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-lg shadow-soft hover:shadow-soft-lg transition-all disabled:opacity-70 cursor-pointer"
            >
              {isSubmitting ? 'Sending...' : submitted ? '✓ Message Sent!' : 'Send Message'}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}

export default Contact
