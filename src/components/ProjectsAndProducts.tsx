import { useState, useRef, useEffect } from 'react';
import { products, projects } from '../data/mockData';
import { ProjectProduct } from '../types/portfolio';
import LucideIcon from './LucideIcon';
import { motion, AnimatePresence } from 'motion/react';

export default function ProjectsAndProducts() {
  const [activeFilter, setActiveFilter] = useState<'featured' | 'fullstack' | 'frontend' | 'backend' | 'iot' | 'cloud' | 'embedded'>('featured');
  const [selectedItem, setSelectedItem] = useState<ProjectProduct | null>(null);
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const handleFullscreen = () => {
    if (videoRef.current) {
      const video = videoRef.current;
      if (video.requestFullscreen) {
        video.requestFullscreen();
      } else if ((video as any).webkitRequestFullscreen) {
        (video as any).webkitRequestFullscreen();
      } else if ((video as any).msRequestFullscreen) {
        (video as any).msRequestFullscreen();
      } else if ((video as any).webkitEnterFullscreen) {
        (video as any).webkitEnterFullscreen();
      }
    }
  };

  // Filter the projects based on tab
  const filteredProjects = activeFilter === 'featured' 
    ? projects.filter(item => item.featured === true) 
    : projects.filter(item => item.type === activeFilter);

  // Manage video volumes when muted state changes
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = isVideoMuted;
    }
  }, [isVideoMuted, selectedItem]);

  return (
    <>
      {/* SECTION 4: PRODUCTS SECTION */}
      <section id="products" className="relative py-24 bg-[#0A0A0B] border-t border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10" id="products-container">
          
          <div className="text-center max-w-2xl mx-auto mb-16" id="products-headers">
            <h2 className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A1A1AA]">
              Core IP & Solutions
            </h2>
            <p className="font-serif text-3xl font-light text-white sm:text-4xl mt-3 tracking-wide">
              Featured Products
            </p>
            <p className="text-white/50 text-sm mt-4 font-sans leading-relaxed">
              A showcase of my work where ideas come to life through creativity, code, and problem-solving.
            </p>
          </div>

          {/* Grid Layout of Products */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="products-card-grid">
            {products.map((prod) => (
              <motion.div
                key={prod.id}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3 }}
                onClick={() => setSelectedItem(prod)}
                className="group relative flex flex-col h-full overflow-hidden rounded border border-white/5 bg-white/[0.01] hover:border-white/15 hover:bg-white/[0.03] transition-all shadow-sm cursor-pointer"
                id={`product-card-${prod.id}`}
              >
                {/* Product Thumbnail image box */}
                <div className="aspect-[16/10] w-full overflow-hidden relative bg-gray-950">
                  <img 
                    src={prod.photoUrl} 
                    alt={prod.name} 
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:scale-102 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Subtle video symbol indicator */}
                  {prod.videoUrl && (
                    <div className="absolute top-4 right-4 bg-black/70 text-white rounded-full p-2.5 border border-white/10 backdrop-blur-sm" id={`video-indicator-${prod.id}`}>
                      <LucideIcon name="Play" size={10} className="fill-current text-white" />
                    </div>
                  )}

                  {/* Tech stack category layer */}
                  <div className="absolute bottom-4 left-4">
                    <span className="inline-flex items-center rounded-sm bg-black/80 text-white/80 border border-white/10 px-2.5 py-0.5 text-[9px] font-mono font-medium tracking-wider uppercase">
                      {prod.type?.toUpperCase() || "IP CORE"}
                    </span>
                  </div>
                </div>

                {/* Info details */}
                <div className="p-6 md:p-8 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-white group-hover:text-white/80 transition-colors duration-250">
                      {prod.name}
                    </h3>
                    <p className="font-sans text-xs sm:text-[13px] text-[#A1A1AA] mt-2.5 line-clamp-3 leading-relaxed">
                      {prod.shortDesc}
                    </p>
                  </div>

                  <div className="flex items-center space-x-2 text-[10px] font-mono tracking-wider uppercase text-white/50 mt-6 pt-4 border-t border-white/5 group-hover:text-white transition-colors">
                    <span>Initialize Detail Inspection Sequence</span>
                    <LucideIcon name="ArrowRight" size={11} className="group-hover:translate-x-1 transition-transform text-white/70" />
                  </div>
                </div>

              </motion.div>
            ))}
          </div>

        </div>
      </section>

      {/* SECTION 5: PROJECT SECTION (CATEGORIZED FILTERING LAYOUT) */}
      <section id="projects" className="relative py-24 bg-[#0A0A0B] border-b border-white/5 overflow-hidden">
        
        {/* Visual graphic support */}
        <div className="absolute bottom-1/5 left-1/4 h-80 w-80 rounded-full bg-white/2 blur-[120px] pointer-events-none" />

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10" id="projects-container">
          
          <div className="text-center max-w-2xl mx-auto mb-16" id="projects-headers">
            <h2 className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A1A1AA]">
              Technical Artifacts
            </h2>
            <p className="font-serif text-3xl font-light text-white sm:text-4xl mt-3 tracking-wide">
              My Projects
            </p>
            <p className="text-white/50 text-sm mt-4 font-sans leading-relaxed">
              A showcase of my work where ideas come to life through creativity, code, and problem-solving.
            </p>
          </div>

          {/* Functional Controller: Interactive horizontal navigation filter tab switch */}
          <div className="flex justify-center mb-12" id="projects-categories-controller">
            <div className="flex flex-wrap justify-center gap-1 p-1 bg-white/[0.03] border border-white/5 rounded" id="tabs-rail">
              {(['featured', 'fullstack', 'frontend', 'backend', 'iot', 'cloud', 'embedded'] as const).map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveFilter(tab)}
                  className={`px-4 py-2 text-xs font-sans font-medium uppercase tracking-wider rounded transition-all duration-200 cursor-pointer ${
                    activeFilter === tab 
                      ? 'bg-white text-black font-semibold' 
                      : 'text-white/50 hover:text-white hover:bg-white/5'
                  }`}
                  id={`tab-trigger-${tab}`}
                >
                  <span>{tab}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Filtering Animation wrapper */}
          <motion.div 
            layout 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            id="projects-grid-layout"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((proj) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={proj.id}
                  onClick={() => setSelectedItem(proj)}
                  className="group flex flex-col h-full bg-white/[0.01] border border-white/5 hover:border-white/15 hover:bg-white/[0.03] rounded transition-all cursor-pointer"
                  id={`project-card-${proj.id}`}
                >
                  
                  {/* Photo area with trigger flag */}
                  <div className="aspect-[1.6] overflow-hidden relative bg-gray-950">
                    <img 
                      src={proj.photoUrl} 
                      alt={proj.name} 
                      className="w-full h-full object-cover grayscale opacity-65 group-hover:scale-102 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute bottom-3 left-3 bg-black/80 border border-white/10 text-white/80 uppercase font-mono text-[9px] tracking-wider px-2 py-0.5 rounded-sm">
                      {proj.type}
                    </div>
                  </div>

                  {/* Body textual metrics */}
                  <div className="p-5 flex-grow flex flex-col justify-between">
                    <div>
                      <h3 className="font-serif text-[16px] font-normal italic text-white group-hover:text-white/90 transition-colors">
                        {proj.name}
                      </h3>
                      <p className="font-sans text-xs text-[#A1A1AA] mt-2.5 line-clamp-3 leading-relaxed">
                        {proj.shortDesc}
                      </p>
                    </div>

                    <div className="flex items-center space-x-1.5 text-[9px] font-mono tracking-widest uppercase text-white/45 mt-5 pt-3.5 border-t border-white/5 group-hover:text-white transition-colors">
                      <span>Investigate Code & Media</span>
                      <LucideIcon name="ArrowRight" size={11} className="group-hover:translate-x-1 transition-transform text-white/50" />
                    </div>
                  </div>

                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

        </div>
      </section>

      {/* DYNAMIC DETAIL MODAL SYSTEM (Click Overlay Event Trigger) */}
      <AnimatePresence>
        {selectedItem && (
          <div 
            className="fixed inset-0 z-100 flex items-center justify-center p-4 sm:p-6 md:p-10"
            id="detail-modal-portal"
          >
            {/* Backdrop Blur screen */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedItem(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-md"
              id="detail-modal-backdrop"
            />

            {/* Modal Body container */}
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 15 }}
              transition={{ type: 'spring', duration: 0.4 }}
              className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto rounded border border-white/10 bg-[#0A0A0B] shadow-2xl p-0"
              id="detail-modal-body"
            >
              
              {/* Media presentation layer (Plays HTML5 loop video or falls back dynamically) */}
              <div className="relative aspect-[16/9] w-full bg-black border-b border-white/10">
                {selectedItem.videoUrl ? (
                  <video
                    ref={videoRef}
                    src={selectedItem.videoUrl}
                    autoPlay
                    loop
                    muted={isVideoMuted}
                    playsInline
                    className="w-full h-full object-contain"
                    id="modal-native-player"
                  />
                ) : (
                  <img 
                    src={selectedItem.photoUrl} 
                    alt={selectedItem.name} 
                    className="w-full h-full object-cover"
                    id="modal-fallback-img"
                    referrerPolicy="no-referrer"
                  />
                )}

                {/* Floating Video Controls if video runs */}
                {selectedItem.videoUrl && (
                  <div className="absolute bottom-4 right-4 z-20 flex items-center space-x-2" id="video-controls-container">
                    <button
                      onClick={handleFullscreen}
                      className="flex items-center justify-center bg-black/80 hover:bg-[#121214] border border-white/15 text-white rounded-full h-8 w-8 hover:scale-110 transition-all cursor-pointer"
                      title="View video fullscreen"
                      id="video-fullscreen-toggle"
                    >
                      <LucideIcon name="Maximize" size={13} />
                    </button>
                    <button
                      onClick={() => setIsVideoMuted(!isVideoMuted)}
                      className="flex items-center justify-center bg-black/80 hover:bg-[#121214] border border-white/15 text-white rounded-full h-8 w-8 hover:scale-110 transition-all cursor-pointer"
                      title={isVideoMuted ? "Unmute video player" : "Mute video player"}
                      id="video-volume-toggle"
                    >
                      <LucideIcon name={isVideoMuted ? 'VolumeX' : 'Volume2'} size={13} />
                    </button>
                  </div>
                )}

                {/* Dismiss button trigger */}
                <button
                  onClick={() => setSelectedItem(null)}
                  className="absolute top-4 right-4 z-20 flex items-center justify-center bg-black/80 hover:bg-[#121214] border border-white/15 text-white/80 hover:text-white rounded-full h-8 w-8 hover:scale-105 transition-all cursor-pointer"
                  id="modal-close-btn"
                >
                  <LucideIcon name="X" size={14} />
                </button>

                {/* Dynamic floating title strip */}
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black via-black/40 to-transparent p-6 pt-16 pointer-events-none">
                  <span className="inline-flex items-center rounded-sm bg-white text-black text-[9px] tracking-widest uppercase font-mono px-2 py-0.5 mb-2.5">
                    {selectedItem.type?.toUpperCase() || "IP ARTIFACT"}
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-light text-white tracking-wide">
                    {selectedItem.name}
                  </h2>
                </div>
              </div>

              {/* Textual documentation info */}
              <div className="p-6 sm:p-8" id="modal-documentation">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                  
                  {/* Left Column: long narration documentation */}
                  <div className="lg:col-span-3 space-y-4 font-sans text-sm sm:text-base text-[#A1A1AA] leading-relaxed">
                    <h4 className="font-serif text-sm italic font-normal text-white mb-2">
                      Functional & Architecture Documentation
                    </h4>
                    <p className="border-l border-white/20 pl-3 italic text-[#A1A1AA]/80 text-[13px]">
                      {selectedItem.shortDesc}
                    </p>
                    <div className="pt-2 text-[#A1A1AA] space-y-3 font-sans text-xs sm:text-[14px] leading-relaxed" id="modal-long-desc">
                      {selectedItem.longDesc.split('\n\n').map((para, pi) => (
                        <p key={pi}>{para}</p>
                      ))}
                    </div>
                  </div>

                  {/* Right Column: Execution shortcut links metadata */}
                  <div className="lg:col-span-1 space-y-6 pt-4 lg:pt-0 lg:border-l lg:border-white/10 lg:pl-6">
                    <div>
                      <h5 className="font-sans text-[10px] uppercase text-[#717178] font-bold tracking-wider mb-2">
                        Target System Status
                      </h5>
                      <span className="inline-flex items-center space-x-1.5 font-mono text-[10px] text-white/50">
                        <span className="h-1.5 w-1.5 rounded-full bg-white animate-pulse" />
                        <span>VERIFIED PRODUCTION</span>
                      </span>
                    </div>

                    <div className="space-y-2.5 pt-4 border-t border-white/10">
                      <h5 className="font-sans text-[10px] uppercase text-[#717178] font-bold tracking-wider mb-2">
                        System Shortcuts
                      </h5>
                      
                      {selectedItem.links.live && (
                        <a
                          href={selectedItem.links.live}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-between w-full rounded bg-white hover:bg-white/90 text-black font-sans text-xs font-semibold uppercase tracking-wider px-4 py-2.5 transition-all text-center"
                          id="modal-live-link"
                        >
                          <span>Terminal Live</span>
                          <LucideIcon name="ExternalLink" size={11} className="text-black" />
                        </a>
                      )}

                      {selectedItem.links.github && (
                        <a
                          href={selectedItem.links.github}
                          target="_blank"
                          rel="noreferrer"
                          className="flex items-center justify-between w-full rounded border border-white/10 bg-white/5 hover:bg-white/10 text-white font-sans text-xs font-medium uppercase tracking-wider px-4 py-2.5 transition-all text-center"
                          id="modal-repo-link"
                        >
                          <span>Clone Repo</span>
                          <LucideIcon name="Github" size={11} className="text-white/75" />
                        </a>
                      )}
                    </div>
                  </div>

                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
