import { skillDomain } from '../data/mockData';
import LucideIcon from './LucideIcon';
import { motion } from 'motion/react';

const domainMeta = [
  { key: 'frontend', title: 'Frontend Engineering', desc: 'Crafting responsive, low-latency, and fluid web experiences.', color: 'from-blue-500 to-cyan-400', icon: 'Layers' },
  { key: 'backend', title: 'Backend Services', desc: 'High-throughput, clean code architecture & microservices.', color: 'from-emerald-500 to-teal-400', icon: 'Server' },
  { key: 'database', title: 'Database & Storage', desc: 'High-availability query optimization & time-series indices.', color: 'from-amber-500 to-orange-400', icon: 'Database' },
  { key: 'iot', title: 'Internet of Things (IoT)', desc: 'Sensor networking, mesh routing protocols & telemetry.', color: 'from-purple-500 to-indigo-400', icon: 'Wifi' },
  { key: 'cloud', title: 'Cloud Computing', desc: 'Serverless deployment, distributed VPCs, cloud resources.', color: 'from-sky-500 to-indigo-400', icon: 'Cloud' },
  { key: 'devops', title: 'DevOps & Orchestration', desc: 'Continuous deployment, containers, metrics monitoring.', color: 'from-teal-500 to-emerald-400', icon: 'Grid' }
];

export default function Skills() {
  return (
    <section id="skills" className="relative py-20 bg-[#0A0A0B] border-t border-b border-white/5 overflow-hidden">
      
      {/* Visual Accents */}
      <div className="absolute top-1/2 left-3/4 h-80 w-80 rounded-full bg-white/2 blur-[100px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10" id="skills-section-container">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="skills-title-headers">
          <h2 className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A1A1AA]">
            Professional Competencies
          </h2>
          <p className="font-serif text-3xl font-light text-white sm:text-4xl mt-3 tracking-wide">
            Specialized Engineering Domains
          </p>
          <p className="text-white/50 text-sm mt-4 leading-relaxed font-sans max-w-xl mx-auto">
            Architecting end-to-end ecosystems from high-performance telemetry pipelines to ultra-responsive Next.js frontends and bare-metal IoT gateways.
          </p>
        </div>

        {/* 6 Categorical Grid Panels */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-5" id="skills-grid-layout">
          {domainMeta.map((domain, index) => {
            const skillItems = skillDomain[domain.key as keyof typeof skillDomain] || [];
            
            return (
              <motion.div
                key={domain.key}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex flex-col rounded border border-white/5 bg-white/[0.02] p-5 hover:border-white/15 hover:bg-white/[0.04] transition-all duration-300 xl:col-span-1 min-w-[210px]"
                id={`skill-card-${domain.key}`}
              >
                
                {/* Domain Header Accent */}
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-2 rounded bg-white/5 text-white flex-shrink-0">
                    <LucideIcon name={domain.icon} size={14} className="text-white" />
                  </div>
                  <h3 className="font-serif text-[15px] font-normal italic text-white tracking-wide truncate">
                    {domain.title}
                  </h3>
                </div>

                <p className="font-sans text-[11px] text-[#A1A1AA] leading-relaxed mb-5 flex-grow">
                  {domain.desc}
                </p>

                {/* Badges / Flexbox Ecosystem */}
                <div className="flex flex-wrap gap-1.5 pt-3 border-t border-white/5" id={`badges-container-${domain.key}`}>
                  {skillItems.map((skill, si) => (
                    <div 
                      key={si}
                      className="inline-flex items-center space-x-1 bg-white/5 text-white/95 border border-white/5 rounded px-2 py-0.5 text-[9px] font-mono tracking-tight transition-colors hover:bg-white/10 hover:border-white/10"
                      id={`badge-${domain.key}-${si}`}
                    >
                      <LucideIcon name={skill.icon} size={9} className="text-[#A1A1AA] shrink-0" />
                      <span>{skill.name}</span>
                    </div>
                  ))}
                </div>

              </motion.div>
            );
          })}
        </div>

        {/* Footnote */}
        <div className="mt-12 text-center" id="skills-disclaimer">
          <p className="font-serif text-xs italic text-white/30 tracking-wide">
            — Systems Architecture & Embedded Mastery
          </p>
        </div>

      </div>
    </section>
  );
}
