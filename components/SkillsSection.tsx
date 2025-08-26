'use client'

import { motion } from 'framer-motion'

const skillCategories = [
  {
    title: 'Frontend Technologies',
    skills: [
      { name: 'React', level: 95, color: 'bg-blue-500' },
      { name: 'Next.js', level: 90, color: 'bg-black' },
      { name: 'TypeScript', level: 88, color: 'bg-blue-600' },
      { name: 'JavaScript', level: 92, color: 'bg-yellow-400' },
      { name: 'HTML/CSS', level: 95, color: 'bg-orange-500' },
    ]
  },
  {
    title: 'Styling & Design',
    skills: [
      { name: 'Tailwind CSS', level: 90, color: 'bg-cyan-500' },
      { name: 'CSS Modules', level: 85, color: 'bg-pink-500' },
      { name: 'Styled Components', level: 80, color: 'bg-purple-500' },
      { name: 'Figma', level: 75, color: 'bg-red-500' },
      { name: 'Responsive Design', level: 92, color: 'bg-green-500' },
    ]
  },
  {
    title: 'Tools & Libraries',
    skills: [
      { name: 'Git', level: 88, color: 'bg-orange-600' },
      { name: 'Webpack', level: 75, color: 'bg-blue-700' },
      { name: 'Jest', level: 80, color: 'bg-red-600' },
      { name: 'Framer Motion', level: 85, color: 'bg-purple-600' },
      { name: 'Storybook', level: 70, color: 'bg-pink-600' },
    ]
  }
]

export default function SkillsSection() {
  return (
    <section id="skills" className="section-padding bg-gray-50">
      <div className="container-max">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Skills & Expertise
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.2 }}
              viewport={{ once: true }}
              className="card"
            >
              <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
                {category.title}
              </h3>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500">
                        {skill.level}%
                      </span>
                    </div>
                    
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1, delay: (categoryIndex * 0.2) + (skillIndex * 0.1) + 0.3 }}
                        viewport={{ once: true }}
                        className={`h-2 rounded-full ${skill.color}`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-16"
        >
          <h3 className="text-2xl font-semibold text-gray-900 mb-8 text-center">
            Additional Skills
          </h3>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-4">
            {[
              'Node.js', 'MongoDB', 'PostgreSQL', 'Docker', 'AWS', 'CI/CD',
              'REST APIs', 'GraphQL', 'PWA', 'SEO', 'Accessibility', 'Performance'
            ].map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.8 + (index * 0.05) }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
                className="bg-white rounded-lg p-4 text-center shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-200"
              >
                <span className="text-sm font-medium text-gray-700">{skill}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.2 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="btn-primary"
          >
            Let's Work Together
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
