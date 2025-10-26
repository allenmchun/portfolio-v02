'use client'

import { motion } from 'framer-motion'
import SkillsCarousel from './SkillsCarousel'

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen bg-black text-white flex flex-col justify-center">
      <div className="container-max px-8 lg:px-16 text-center">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-3xl lg:text-4xl font-normal leading-tight">
            Technical Skills
          </h2>
        </motion.div>
        
        {/* Skills Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <SkillsCarousel />
        </motion.div>
      </div>
    </section>
  )
}
