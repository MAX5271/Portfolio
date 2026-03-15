import {Header} from "./components/ui/Header"
import HeroSection from "./components/ui/HeroSection"
import Skills from "./components/ui/Skills"

function App() {
  return (
    <div className="bg-base text-primary h-screen" >
      <Header />
      <HeroSection />
      <Skills />
    </div>
  )
}

export default App