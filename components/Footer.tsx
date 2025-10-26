'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ]

  return (
    <footer className="bg-black text-white py-32">
      <div className="container-max px-8 lg:px-16">
        <div className="text-center mt-32">
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-xs sm:text-sm text-gray-300 italic">"If I am worth anything later, I am worth something now. For wheat is wheat, even if people think it is a grass in the beginning."<br />— Vincent van Gogh</p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
