import Architecture from './components/Architecture'
import Chatbot from './components/Chatbot'
import Download from './components/Download'
import Faq from './components/Faq'
import Features from './components/Features'
import Footer from './components/Footer'
import Hero from './components/Hero'
import Levels from './components/Levels'
import Navbar from './components/Navbar'
import Privacy from './components/Privacy'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Levels />
        <Architecture />
        <Privacy />
        <Faq />
        <Download />
      </main>
      <Footer />
      <Chatbot />
    </>
  )
}
