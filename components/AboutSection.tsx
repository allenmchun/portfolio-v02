'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { Download } from 'lucide-react'

export default function AboutSection() {
  const education = [
    { 
      institution: 'UCLA', 
      degree: 'MS in Data Science', 
      logo: '/images/logo-ucla.jpeg',
      logoBg: 'bg-blue-600'
    },
    { 
      institution: 'UCLA', 
      degree: 'BS in Statistics', 
      logo: '/images/logo-ucla.jpeg',
      logoBg: 'bg-blue-600'
    }
  ]

  const experience = [
    { 
      company: 'Latham & Watkins LLP', 
      position: 'Business Intelligence Analyst', 
      logo: '/images/logo-lw.jpg',
      logoBg: 'bg-red-600'
    },
    { 
      company: 'UCLA Women\'s Basketball', 
      position: 'Data Science Intern', 
      logo: '/images/logo-ucla.jpeg',
      logoBg: 'bg-blue-600'
    },
    { 
      company: 'UCLA Football', 
      position: 'Recruiting Analyst Intern', 
      logo: '/images/logo-ucla.jpeg',
      logoBg: 'bg-blue-600'
    }
  ]

  return (
    <section id="about" className="min-h-screen bg-black text-white py-20">
      <div className="container-max px-8 lg:px-16">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - About Me Title */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="sticky top-32"
          >
            <h2 className="text-3xl sm:text-3xl lg:text-4xl font-normal leading-tight">
              About Me
            </h2>
          </motion.div>

          {/* Right Column - Education & Experience */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-16"
          >
            {/* Education Section */}
            <div>
              <h3 className="text-3xl font-normal mb-8">Education</h3>
              <div className="space-y-6">
                {education.map((item, index) => (
                  <motion.div
                    key={`${item.institution}-${item.degree}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className={`w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 relative`} style={{ backgroundColor: item.logoBg.includes('blue') ? '#2563eb' : '#dc2626' }}>
                      <Image
                        src={item.logo}
                        alt={item.institution}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-xl font-normal">{item.institution}</div>
                      <div className="text-lg text-gray-300">{item.degree}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Experience Section */}
            <div>
              <h3 className="text-3xl font-normal mb-8">Experience</h3>
              <div className="space-y-6">
                {experience.map((item, index) => (
                  <motion.div
                    key={`${item.company}-${item.position}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 + (index * 0.1) }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-4"
                  >
                    <div className={`w-12 h-12 rounded-lg overflow-hidden flex-shrink-0 relative`} style={{ backgroundColor: item.logoBg.includes('blue') ? '#2563eb' : '#dc2626' }}>
                      <Image
                        src={item.logo}
                        alt={item.company}
                        fill
                        className="object-contain"
                      />
                    </div>
                    <div>
                      <div className="text-xl font-normal">{item.company}</div>
                      <div className="text-lg text-gray-300">{item.position}</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Resume Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-normal mb-8">Resume</h3>
              <a 
                href="https://drive.google.com/file/d/1hl-8TEpNfcVBknBBOd-vQSFSQcLvTBBj/view?usp=share_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 text-xl text-gray-300 hover:text-white transition-colors duration-200 group"
              >
                <Download className="w-6 h-6 group-hover:scale-110 transition-transform duration-200" />
                <span>Download Resume</span>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
