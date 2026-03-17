import {Header} from "./components/ui/Header"
import HeroSection from "./components/ui/HeroSection"
import Projects from "./components/ui/Projects"
import Skills from "./components/ui/Skills"

function App() {
  return (
    <div className="bg-base text-primary h-screen" >
      <Header />
      <HeroSection />
      <Skills />
      <Projects/>
    </div>
  )
}

export default App