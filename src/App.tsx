import ThemeEngine from "./components/ThemeEngine";
import Footer from "./components/ui/Footer";
import { Header } from "./components/ui/Header";
import HeroSection from "./components/ui/HeroSection";
import Projects from "./components/ui/Projects";
import Skills from "./components/ui/Skills";
import Telemetry from "./components/ui/Telemetry";

function App() {
  return (
    <div className="text-primary h-screen scroll-smooth">
      {/* Header */}
      <Header />

      {/* Main section of the portfolio */}
      <main>
        <HeroSection />
        <Skills />
        <Projects />
        <Telemetry />
      </main>

      {/* Engine to change themes */}
      <ThemeEngine />

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
