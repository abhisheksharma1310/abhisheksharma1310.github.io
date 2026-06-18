import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import ProjectsAndProducts from './components/ProjectsAndProducts';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0A0A0B] text-[#E2E2E2] flex flex-col justify-between font-sans selection:bg-white selection:text-black" id="portfolio-app-root">
      
      {/* Sticky Navigation Header */}
      <Header />

      {/* Main Sections Assembly */}
      <main className="flex-grow">
        
        {/* Section 1: Hero / About */}
        <Hero />

        {/* Section 2: Skills Grid */}
        <Skills />

        {/* Section 3: Experience Chronology Timeline */}
        <Experience />

        {/* Sections 4 & 5: Products & Categorized Projects Hub */}
        <ProjectsAndProducts />

        {/* Section 6: Achievements Grid */}
        <Achievements />

        {/* Section 7: Enveloped validated contact email form */}
        <Contact />

      </main>

      {/* Footer copyright and final widgets */}
      <Footer />

    </div>
  );
}

