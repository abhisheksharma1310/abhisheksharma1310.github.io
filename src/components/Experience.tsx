import { experiences } from '../data/mockData';
import LucideIcon from './LucideIcon';
import { motion } from 'motion/react';

export default function Experience() {
  return (
    <section id="experience" className="relative py-24 overflow-hidden bg-[#0A0A0B]">
      
      {/* Decorative track blur */}
      <div className="absolute top-1/4 right-3/4 h-96 w-96 rounded-full bg-white/2 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10" id="experience-container">
        
        {/* Section Heading */}
        <div className="text-center max-w-2xl mx-auto mb-20" id="experience-heading-wrapper">
          <h2 className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A1A1AA]">
            Chronology of Service
          </h2>
          <p className="font-serif text-3xl font-light text-white sm:text-4xl mt-3 tracking-wide">
            Professional Experience Timeline
          </p>
          <p className="text-white/55 text-sm mt-4 leading-relaxed font-sans max-w-lg mx-auto">
            A selective chronological mapping of my systems engineering, full-stack design, and hardware-software integration works.
          </p>
        </div>

        {/* Timeline Visualization System */}
        <div className="relative mt-12" id="timeline-v-flow">
          
          {/* Vertical Center Track Line */}
          <div className="absolute left-[19px] md:left-1/2 top-1 bottom-1 h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-white/20 via-white/5 to-transparent" />

          <div className="space-y-12" id="timeline-items-list">
            {experiences.map((exp, index) => {
              const isEven = index % 2 === 0;
              return (
                <div 
                  key={exp.id} 
                  className={`flex flex-col md:flex-row relative items-start md:items-stretch justify-between ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                  id={`experience-timeline-row-${exp.id}`}
                >
                  {/* Timeline bullet handle node */}
                  <div className="absolute left-[19px] md:left-1/2 h-8 w-8 -translate-x-1/2 flex items-center justify-center rounded-full border border-white/10 bg-[#0A0A0B] z-20 transition-transform">
                    <LucideIcon name="Briefcase" size={12} className="text-white/70" />
                  </div>

                  {/* Empty Spacer Column for Desktop Balance */}
                  <div className="hidden md:block md:w-[45%]" />

                  {/* Actual Content Block Card */}
                  <motion.div
                    initial={{ opacity: 0, x: isEven ? -25 : 25 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className="w-full md:w-[45%] pl-12 md:pl-0"
                    id={`experience-card-${exp.id}`}
                  >
                    <div className="relative rounded border border-white/5 bg-white/[0.01] p-6 md:p-8 hover:border-white/12 hover:bg-white/[0.03] transition-all group">
                      
                      {/* Corner Accents */}
                      <div className="absolute top-0 right-0 p-4 flex flex-wrap gap-2 items-center justify-end">
                        <span className="inline-flex items-center rounded bg-white/5 px-2 py-0.5 text-[9px] font-mono tracking-wider font-medium text-white/50 select-none border border-white/5 uppercase">
                          {exp.type}
                        </span>
                      </div>

                      {/* Header Info */}
                      <div className="mb-4">
                        <span className="inline-flex items-center space-x-1.5 text-xs font-mono font-medium text-white/40 tracking-wider">
                          <LucideIcon name="Calendar" size={11} className="text-white/30" />
                          <span>{exp.date}</span>
                        </span>
                        
                        <h3 className="font-serif text-lg sm:text-xl font-normal text-white mt-2 group-hover:text-white/90 transition-colors">
                          {exp.role}
                        </h3>

                        <h4 className="font-sans text-xs uppercase tracking-[0.15em] text-[#A1A1AA] mt-1">
                          {exp.company}
                        </h4>
                      </div>

                      {/* Bullet Description list */}
                      <ul className="space-y-2.5 font-sans text-xs sm:text-[13px] text-[#A1A1AA] list-none pl-0">
                        {exp.description.map((bullet, bi) => (
                          <li key={bi} className="flex items-start">
                            <span className="text-white/40 mr-2.5 mt-1 sm:mt-1.5 font-sans font-normal text-[8px] select-none">
                              ▪
                            </span>
                            <span className="leading-relaxed">
                              {bullet}
                            </span>
                          </li>
                        ))}
                      </ul>

                    </div>
                  </motion.div>

                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
