import { personalInfo, socialLinks } from '../data/mockData';
import LucideIcon from './LucideIcon';
import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section id="about" className="relative overflow-hidden pt-12 pb-20 md:py-28 lg:py-36 glow-accent">
      
      {/* Decorative ambient background glows */}
      <div className="absolute top-1/4 left-1/10 h-72 w-72 rounded-full bg-white/3 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/5 right-1/10 h-96 w-96 rounded-full bg-white/2 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10" id="hero-container">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:items-center">
          
          {/* Left Column: Profile Media Frame */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
            id="hero-profile-column"
          >
            <div className="relative group w-full max-w-[340px] xs:max-w-[380px] sm:max-w-[420px] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-white/5 bg-white/5 p-3">
              
              {/* Modern minimalist border overlays */}
              <div className="absolute inset-0 border border-white/10 rounded-xl pointer-events-none group-hover:border-white/20 transition-colors duration-500" />
              <div className="absolute top-0 left-0 w-8 h-8 border-t border-l border-white/20 rounded-tl-lg" />
              <div className="absolute top-0 right-0 w-8 h-8 border-t border-r border-white/20 rounded-tr-lg" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b border-l border-white/20 rounded-bl-lg" />
              <div className="absolute bottom-0 right-0 w-8 h-8 border-b border-r border-white/20 rounded-br-lg" />

              {/* Centered Image */}
              <div className="relative w-full h-full rounded-lg overflow-hidden bg-gray-950">
                <img 
                  src={personalInfo.profilePic} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:scale-102 transition-all duration-700"
                  id="hero-profile-img"
                  referrerPolicy="no-referrer"
                />
                
                {/* Minimalist overlay details */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black via-black/40 to-transparent p-5 pt-16">
                  <span className="font-mono text-[9px] text-white/50 tracking-widest uppercase block mb-1">
                    System Operator // Active
                  </span>
                  <p className="font-serif text-lg text-white italic">
                    {personalInfo.name}
                  </p>
                  <p className="font-mono text-[10px] text-white/30 mt-0.5">
                    HOST ID: 813-SHARMA
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Bio Narrative Description */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7 flex flex-col justify-center"
            id="hero-narrative-column"
          >
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 bg-white/5 border border-white/10 text-[#A1A1AA] px-3.5 py-1 rounded-full text-[10px] uppercase tracking-widest mb-6 w-fit select-none">
              <span className="flex h-1.5 w-1.5 rounded-full bg-white/80 animate-pulse" />
              <span>Full Stack Engineer & IoT Architect</span>
            </div>

            <h1 className="font-serif text-5xl font-light leading-[1.1] text-white sm:text-6xl lg:text-7xl mb-6">
              Building the <span className="italic text-gradient">digital-physical</span> bridge.
            </h1>
            
            <h2 className="font-mono text-xs uppercase tracking-[0.2em] text-white/60 mb-6 leading-relaxed">
              {personalInfo.title}
            </h2>

            <p className="font-sans text-base text-gray-400 mb-6 leading-relaxed border-l border-white/15 pl-4 py-1 italic">
              "{personalInfo.tagline}"
            </p>

            <div className="space-y-4 font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed mb-8" id="hero-bio-container">
              {personalInfo.bioParagraphs.map((par, i) => (
                <p key={i}>{par}</p>
              ))}
            </div>

            {/* Action Row: Large Social Shortcut Buttons */}
            <div className="flex flex-wrap gap-4 items-center" id="hero-links-row">
              <a 
                href="#contact" 
                className="inline-flex items-center space-x-2 bg-white text-black font-sans text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-sm hover:bg-white/90 shadow transition-all duration-200 cursor-pointer"
                id="hero-contact-cta"
              >
                <span>Get in Touch</span>
                <LucideIcon name="ArrowRight" size={12} />
              </a>

              <a 
                href="#projects" 
                className="inline-flex items-center space-x-2 border border-white/20 hover:bg-white/5 text-white font-sans text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-sm shadow transition-all duration-200 cursor-pointer"
                id="hero-projects-cta"
              >
                <span>View Projects</span>
              </a>

              <div className="flex items-center space-x-3.5 ml-2" id="hero-socials-group">
                <a 
                  href={socialLinks.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs uppercase tracking-widest text-[#717178] hover:text-white border-b border-white/10 pb-0.5 transition-all"
                  title="Abhishek Github Profile"
                  id="hero-github"
                >
                  GitHub
                </a>

                <a 
                  href={socialLinks.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs uppercase tracking-widest text-[#717178] hover:text-white border-b border-white/10 pb-0.5 transition-all"
                  title="Abhishek LinkedIn Profile"
                  id="hero-linkedin"
                >
                  LinkedIn
                </a>

                {socialLinks.twitter && (
                  <a 
                    href={socialLinks.twitter} 
                    target="_blank" 
                    rel="noreferrer"
                    className="text-xs uppercase tracking-widest text-[#717178] hover:text-white border-b border-white/10 pb-0.5 transition-all"
                    title="Abhishek Twitter Profile"
                    id="hero-twitter"
                  >
                    Twitter
                  </a>
                )}
              </div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
