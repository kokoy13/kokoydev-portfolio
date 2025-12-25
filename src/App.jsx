import { useEffect, useState } from "react"
import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import About from "./components/About"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import AOS from "aos";

export default function Home() {

  useEffect(() => {
    AOS.init({
      duration: 800,
      easing: "ease-in-out",
    });
  }, []);

  const [activeSection, setActiveSection] = useState("home")

  return (
    <div className="bg-background text-foreground">
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      <Hero />
      <About />
      <Projects />
      <Footer activeSection={activeSection} setActiveSection={setActiveSection}/>
    </div>
  )
}
