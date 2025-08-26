import Navbar from '@/components/Navbar'
import HomeSection from '@/components/HomeSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navbar />
      <HomeSection />
      <AboutSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </main>
  )
}
