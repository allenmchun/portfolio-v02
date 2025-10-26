'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function HomeSection() {
  const [isChrome, setIsChrome] = useState(false)

  useEffect(() => {
    // Check if browser is Chrome
    const isChromeBrowser = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor)
    setIsChrome(isChromeBrowser)
  }, [])
  const portfolioImages = [
    { src: '/images/portfolio-airlines.jpg', alt: 'Airplane in blue sky', link: 'https://ucladatares.medium.com/analyzing-domestic-airlines-and-flights-4ea21f31d932' },
    { src: '/images/portfolio-rockets.jpg', alt: 'Rockets basketball players', link: 'https://www.bruinsportsanalytics.com/post/why-the-houston-rockets-small-ball-experiment-failed' },
    { src: '/images/portfolio-knicks.jpeg', alt: 'Julius Randle basketball', link: 'https://www.bruinsportsanalytics.com/post/knicks_success' },
    { src: '/images/portfolio-nba.jpg', alt: 'Michael Jordan NBA', link: 'https://fcpanalytics.wordpress.com/wp-content/uploads/2022/04/predicting_nba_salaries-1.pdf' },
    { src: '/images/portfolio-indeed.jpg', alt: 'Modern interior space', link: 'https://fcpanalytics.wordpress.com/wp-content/uploads/2022/03/140xp_final_report.pdf' },
    { src: '/images/portfolio-mufc.jpg', alt: 'Soccer player celebration', link: 'https://public.tableau.com/app/profile/allen8597/viz/ManchesterUnited2022-2023/ManchesterUnited' },
    { src: '/images/portfolio-nba-k.jpg', alt: 'International basketball players', link: 'https://medium.com/@allenmchun/using-k-means-clustering-to-identify-nba-player-similarity-2b33f11e3aa7' }
  ]

  return (
    <section id="home" className="min-h-screen bg-black text-white flex flex-col">
            {/* Main Content */}
      <div className="flex-1 flex flex-col justify-end pb-16">
        <div className="max-w-7xl px-8 lg:px-16">
          {/* 
            This div sets a maximum width for its content and adjusts its left margin depending on whether the user's browser is Chrome.
            - If the browser is Chrome (isChrome is true), marginLeft is set to '48px'.
            - For all other browsers, marginLeft is set to '16px'.

            The numeric values 48 and 16 represent the space in pixels to the left of the div. This can help align content due to Chrome-specific rendering quirks or design preferences.
          */}
          <div className="max-w-6xl" style={{ marginLeft: isChrome ? '78px' : '16px' }}>
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mb-16"
            >
              <h1 className="text-[2.025rem] sm:text-[2.7rem] lg:text-[3.375rem] font-normal leading-tight">
                <div>Solving Problems</div>
                <div>with Data-Driven Insights</div>
              </h1>
            </motion.div>

            {/* Portfolio Preview Grid */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-7 gap-4 max-w-5xl"
            >
              {portfolioImages.map((image, index) => (
                <motion.a
                  key={image.alt}
                  href={image.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                  className="relative aspect-[3/4] rounded-lg overflow-hidden bg-gray-800 border border-gray-700 cursor-pointer"
                >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 768px) 33vw, (max-width: 1024px) 25vw, 14vw"
                  className="object-cover hover:scale-105 transition-transform duration-300"
                  priority={index < 3} // Prioritize first 3 images
                />
              </motion.a>
            ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
