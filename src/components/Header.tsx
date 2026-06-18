import { useState, useEffect } from 'react';
import { personalInfo } from '../data/mockData';
import LucideIcon from './LucideIcon';
import { motion, AnimatePresence } from 'motion/react';

const navItems = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Products', href: '#products' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
  { label: 'Contact', href: '#contact' }
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');

  useEffect(() => {
    const stored = localStorage.getItem('theme');
    if (stored === 'light' || stored === 'dark') {
      setTheme(stored);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'light') {
      root.classList.add('light');
    } else {
      root.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;

      for (const item of navItems) {
        const sectionId = item.href.substring(1);
        const section = document.getElementById(sectionId);
        if (section) {
          const top = section.offsetTop;
          const height = section.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#0A0A0B]/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Left: Avatar & Name */}
        <a 
          href="#about" 
          onClick={(e) => { e.preventDefault(); handleNavClick('#about'); }} 
          className="flex items-center space-x-3 group"
          id="header-brand-link"
        >
          <img 
            src={personalInfo.avatarUrl} 
            alt={personalInfo.name} 
            className="h-8 w-8 rounded-full object-cover ring-1 ring-white/10 group-hover:ring-white/30 transition-transform duration-300 group-hover:scale-105"
            id="header-avatar"
            referrerPolicy="no-referrer"
          />
          <span 
            className="hidden xs:block font-serif text-lg tracking-wide text-white group-hover:text-white/80 transition-colors duration-250"
            id="header-name-text"
          >
            {personalInfo.name}
          </span>
        </a>

        {/* Right area wrapping layout */}
        <div className="flex items-center space-x-6">
          {/* Right: Desktop Nav Items */}
          <nav className="hidden lg:flex space-x-8" id="desktop-navbar">
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className={`relative font-sans text-[11px] uppercase tracking-[0.2em] font-medium transition-colors duration-200 py-1 ${
                    isActive ? 'text-white font-semibold' : 'text-white/50 hover:text-white'
                  }`}
                  id={`nav-${sectionId}`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div 
                      layoutId="activeNavIndicator"
                      className="absolute bottom-0 left-0 h-[1.5px] w-full bg-white"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </a>
              );
            })}
          </nav>

          {/* Theme Toggle Button */}
          <motion.button
            whileTap={{ scale: 0.9 }}
            onClick={toggleTheme}
            className="p-2 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 text-white/80 hover:text-white transition-all cursor-pointer h-8 w-8 flex items-center justify-center"
            aria-label="Toggle theme"
            id="theme-toggler"
          >
            <LucideIcon name={theme === 'dark' ? 'Moon' : 'Sun'} size={14} />
          </motion.button>

          {/* Mobile controls (Hamburger Menu) */}
          <div className="flex lg:hidden" id="mobile-nav-toggle-container">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-lg p-2 text-white/60 hover:text-white focus:outline-none"
              aria-expanded={isOpen}
              id="mobile-menu-btn"
            >
              <span className="sr-only">Open main menu</span>
              <LucideIcon name={isOpen ? 'X' : 'Menu'} size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Links Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden border-t border-white/5 bg-[#0D0D0E] px-4 py-3 space-y-1 shadow-xl"
            id="mobile-nav-drawer"
          >
            {navItems.map((item) => {
              const sectionId = item.href.substring(1);
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => { e.preventDefault(); handleNavClick(item.href); }}
                  className={`flex items-center justify-between rounded px-4 py-2.5 text-xs uppercase tracking-[0.15em] font-medium transition-colors ${
                    isActive 
                      ? 'bg-white/5 text-white border-l border-white pl-3' 
                      : 'text-white/50 hover:bg-white/5 hover:text-white'
                  }`}
                  id={`mobile-nav-${sectionId}`}
                >
                  <span>{item.label}</span>
                  <LucideIcon name="ArrowRight" size={14} className={`opacity-40 ${isActive ? 'text-white opacity-100' : ''}`} />
                </a>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
