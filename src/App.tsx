import ThemeEngine from "./components/buttons/ThemeEngine"
import {Header} from "./components/ui/Header"
import HeroSection from "./components/ui/HeroSection"
import Projects from "./components/ui/Projects"
import Skills from "./components/ui/Skills"
import Telemetry from "./components/ui/Telemetry"

function App() {
  return (
    <div className="text-primary h-screen scroll-smooth" >
      <Header />
      <div className="bg-[url('../public/nnnoise.svg')]"></div>
      <HeroSection />
      <Skills />
      <Projects/>
      <Telemetry/>
      <ThemeEngine/>
    </div>
  )
}

export default App