import Navbar from './components/Navbar'
import HeroSection from './components/HeroSection'
import ProjectsSection from './components/ProjectsSection'
import AboutSection from './components/AboutSection'
import Footer from './components/Footer'

export default function App() {
  return (
      <div className="min-h-screen bg-zinc-950 text-zinc-50 font-sans">
        <Navbar />
        <main className="max-w-5xl mx-auto px-6">
          <HeroSection />
          <ProjectsSection />
          <AboutSection />
        </main>
        <Footer />
      </div>
  )
}