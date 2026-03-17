import {Header} from "./components/ui/Header"
import HeroSection from "./components/ui/HeroSection"
import Projects from "./components/ui/Projects"
import Skills from "./components/ui/Skills"
import Telemetry from "./components/ui/Telemetry"

function App() {
  return (
    <div className="bg-base text-primary h-screen scroll-smooth" >
      <Header />
      <HeroSection />
      <Skills />
      <Projects/>
      <Telemetry/>
    </div>
  )
}

export default App