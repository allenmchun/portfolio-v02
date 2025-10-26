'use client'

import AutoScroll from "embla-carousel-auto-scroll"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"

interface Logo {
  id: string
  description: string
  image: string
  className?: string
}

const skills: Logo[] = [
  {
    id: "python",
    description: "Python",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg",
    className: "h-12 w-auto",
  },
  {
    id: "r",
    description: "R",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/r/r-original.svg",
    className: "h-12 w-auto",
  },
  {
    id: "sql",
    description: "SQL",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original-wordmark.svg",
    className: "h-12 w-auto",
  },
  {
    id: "javascript",
    description: "JavaScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
    className: "h-12 w-auto",
  },
  {
    id: "typescript",
    description: "TypeScript",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    className: "h-12 w-auto",
  },
  {
    id: "html",
    description: "HTML",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg",
    className: "h-12 w-auto",
  },
  {
    id: "css",
    description: "CSS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg",
    className: "h-12 w-auto",
  },
  {
    id: "tailwind",
    description: "Tailwind CSS",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original-wordmark.svg",
    className: "h-12 w-auto",
  },
  {
    id: "c",
    description: "C",
    image: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg",
    className: "h-12 w-auto",
  },
  {
    id: "tableau",
    description: "Tableau",
    image: "/images/tableau-software.svg",
    className: "h-12 w-auto",
  },
  {
    id: "powerbi",
    description: "Power BI",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/New_Power_BI_Logo.svg/768px-New_Power_BI_Logo.svg.png",
    className: "h-12 w-auto",
  },
  {
    id: "excel",
    description: "Excel",
    image: "https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/Microsoft_Excel_2013-2019_logo.svg/616px-Microsoft_Excel_2013-2019_logo.svg.png",
    className: "h-12 w-auto",
  },
  {
    id: "google-analytics",
    description: "Google Analytics",
    image: "/images/google-analytics.svg",
    className: "h-12 w-auto",
  },
]

export default function SkillsCarousel() {
  return (
    <div className="py-10 md:py-16 lg:py-20">
      <div className="relative mx-auto flex items-center justify-center lg:max-w-5xl">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ speed: 1, stopOnInteraction: false, stopOnMouseEnter: false })]}
        >
          <CarouselContent className="ml-0">
            {skills.map((skill) => (
              <CarouselItem
                key={skill.id}
                className="flex basis-1/3 justify-center pl-0 sm:basis-1/4 md:basis-1/5 lg:basis-1/6"
              >
                <div className="mx-10 flex shrink-0 items-center justify-center">
                  <div className="filter hover:brightness-110 transition-all duration-300">
                    <img
                      src={skill.image}
                      alt={skill.description}
                      className={skill.className}
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-y-0 left-0 w-12 bg-gradient-to-r from-black to-transparent pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-black to-transparent pointer-events-none"></div>
      </div>
    </div>
  )
}
