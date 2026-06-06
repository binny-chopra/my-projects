import { Navbar } from './components/layout/Navbar/Navbar';
import { Footer } from './components/layout/Footer/Footer';
import { ScrollProgress } from './components/layout/ScrollProgress/ScrollProgress';
import { Hero } from './components/sections/Hero/Hero';
import { About } from './components/sections/About/About';
import { Skills } from './components/sections/Skills/Skills';
import { Experience } from './components/sections/Experience/Experience';
import { Projects } from './components/sections/Projects/Projects';
import { Education } from './components/sections/Education/Education';
import { Contact } from './components/sections/Contact/Contact';

export default function App() {
  return (
    <>
      <ScrollProgress />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
