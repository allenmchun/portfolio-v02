'use client'

import { motion } from 'framer-motion'
import LiquidButton from './ui/liquid-glass-button'

export default function ContactSection() {
  return (
    <section id="contact" className="min-h-screen bg-black text-white flex flex-col justify-center items-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <LiquidButton onClick={() => window.location.href = 'mailto:allenchun7@ucla.edu'}>
          Let's Talk
        </LiquidButton>
      </motion.div>
    </section>
  )
}
