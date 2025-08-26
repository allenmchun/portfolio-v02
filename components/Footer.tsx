'use client'

import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container-max section-padding">
        <div className="text-center">
          {/* Quote */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <blockquote className="text-xl sm:text-2xl font-light text-gray-300 italic mb-4">
              "The best way to predict the future is to invent it."
            </blockquote>
            <p className="text-gray-400">- Alan Kay</p>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <p className="text-lg text-gray-300 mb-4">
              Ready to start your next project?
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Let's Talk
            </motion.button>
          </motion.div>

          {/* Footer Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-wrap justify-center gap-6 mb-8"
          >
            {[
              { name: 'Home', href: '#home' },
              { name: 'About', href: '#about' },
              { name: 'Skills', href: '#skills' },
              { name: 'Contact', href: '#contact' }
            ].map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={(e) => {
                  e.preventDefault()
                  document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="text-gray-400 hover:text-white transition-colors duration-200"
              >
                {link.name}
              </motion.a>
            ))}
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            viewport={{ once: true }}
            className="border-t border-gray-800 pt-8"
          >
            <p className="text-gray-400 text-sm">
              © 2024 Portfolio. Built with Next.js, TypeScript, and Tailwind CSS.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  )
}
