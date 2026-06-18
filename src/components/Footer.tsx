import { socialLinks } from '../data/mockData';
import LucideIcon from './LucideIcon';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-white/5 bg-[#0A0A0B] py-12" id="footer-section">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" id="footer-container">
        <div className="flex flex-col items-center justify-center space-y-6">
          
          {/* Centered Semantic Row displaying social icons */}
          <div className="flex items-center space-x-6" id="footer-socials-row">
            <a 
              href={socialLinks.github} 
              target="_blank" 
              rel="noreferrer"
              className="text-white/50 hover:text-white transition-all text-center p-2 rounded bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10"
              title="GitHub Profile"
              id="footer-github-link"
            >
              <span className="sr-only">GitHub</span>
              <LucideIcon name="Github" size={16} />
            </a>

            <a 
              href={socialLinks.linkedin} 
              target="_blank" 
              rel="noreferrer"
              className="text-white/50 hover:text-white transition-all text-center p-2 rounded bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10"
              title="LinkedIn Profile"
              id="footer-linkedin-link"
            >
              <span className="sr-only">LinkedIn</span>
              <LucideIcon name="Linkedin" size={16} />
            </a>

            <a 
              href={`mailto:${socialLinks.email}`}
              className="text-white/50 hover:text-white transition-all text-center p-2 rounded bg-white/5 border border-white/5 hover:border-white/10 hover:bg-white/10"
              title="Direct Mail"
              id="footer-email-link"
            >
              <span className="sr-only">Email</span>
              <LucideIcon name="Mail" size={16} />
            </a>
          </div>

          {/* Copyright description lines */}
          <div className="text-center space-y-20 pt-2" id="footer-copyright">
            <p className="font-sans text-[11px] text-[#A1A1AA] tracking-widest uppercase">
              &copy; {currentYear} Abhishek Sharma
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}
