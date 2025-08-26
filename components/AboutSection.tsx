'use client'

import { motion } from 'framer-motion'

export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Passionate about creating exceptional user experiences and building scalable web applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8">
              <div className="bg-gray-200 rounded-xl w-full h-80 flex items-center justify-center">
                <span className="text-gray-500 text-lg">Profile Image</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div>
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                Frontend Developer & UI/UX Enthusiast
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                I'm a dedicated frontend developer with a passion for creating beautiful, 
                functional, and user-friendly web applications. With expertise in modern 
                JavaScript frameworks and a keen eye for design, I transform ideas into 
                engaging digital experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                My journey in web development started with a curiosity about how things 
                work on the internet, and it has evolved into a career focused on 
                building accessible, responsive, and performant web solutions.
              </p>
            </div>

            {/* Key Points */}
            <div className="grid sm:grid-cols-2 gap-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700">5+ Years Experience</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700">50+ Projects Completed</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700">Modern Tech Stack</span>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                viewport={{ once: true }}
                className="flex items-center space-x-3"
              >
                <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                <span className="text-gray-700">User-Focused Design</span>
              </motion.div>
            </div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => document.querySelector('#skills')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                View My Skills
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
