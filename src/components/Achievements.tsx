import { useState, useEffect } from 'react';
import { achievements } from '../data/mockData';
import LucideIcon from './LucideIcon';
import { motion, AnimatePresence } from 'motion/react';

export default function Achievements() {
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [activeLightbox, setActiveLightbox] = useState<{
    achievementId: string;
    imageIndex: number;
  } | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const lightboxKey = activeLightbox ? `${activeLightbox.achievementId}-${activeLightbox.imageIndex}` : null;

  // Keyboard navigation for active lightbox slider
  useEffect(() => {
    if (!activeLightbox) return;

    const activeAch = achievements.find(a => a.id === activeLightbox.achievementId);
    const totalImages = activeAch?.gallery.length || 0;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowLeft' && totalImages > 1) {
        setActiveLightbox(prev => {
          if (!prev) return null;
          const prevIndex = (prev.imageIndex - 1 + totalImages) % totalImages;
          return { ...prev, imageIndex: prevIndex };
        });
      } else if (e.key === 'ArrowRight' && totalImages > 1) {
        setActiveLightbox(prev => {
          if (!prev) return null;
          const nextIndex = (prev.imageIndex + 1) % totalImages;
          return { ...prev, imageIndex: nextIndex };
        });
      } else if (e.key === 'Escape') {
        setActiveLightbox(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [lightboxKey]);

  const activeAch = activeLightbox 
    ? achievements.find(a => a.id === activeLightbox.achievementId) 
    : null;
  const currentImageIndex = activeLightbox ? activeLightbox.imageIndex : 0;
  const currentImageUrl = activeAch ? activeAch.gallery[currentImageIndex] : '';
  const totalImages = activeAch ? activeAch.gallery.length : 0;

  return (
    <section id="achievements" className="relative py-24 bg-[#0A0A0B] border-t border-b border-white/5 overflow-hidden">
      
      {/* Decorative ambient highlight */}
      <div className="absolute top-1/3 left-1/2 h-80 w-80 rounded-full bg-white/2 blur-[120px] pointer-events-none" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10" id="achievements-section-container">
        
        {/* Section Title */}
        <div className="text-center max-w-2xl mx-auto mb-16" id="achievements-title-blocks">
          <h2 className="font-sans text-[10px] uppercase tracking-[0.25em] text-[#A1A1AA]">
            Validated Competence
          </h2>
          <p className="font-serif text-3xl font-light text-white sm:text-4xl mt-3 tracking-wide">
            Awards & Credentials
          </p>
          <p className="text-white/50 text-sm mt-4 font-sans leading-relaxed">
            Tangible peer-recognized career milestones, hardware system prizes, and accredited specialized blueprints.
          </p>
        </div>

        {/* Expandable Rows / Columns layout */}
        <div className="space-y-4 max-w-3xl mx-auto" id="achievements-rows-wrapper">
          {achievements.map((ach) => {
            const isExpanded = expandedId === ach.id;
            return (
              <div 
                key={ach.id}
                className="rounded border border-white/5 bg-white/[0.01] hover:border-white/12 transition-all overflow-hidden"
                id={`achievement-row-card-${ach.id}`}
              >
                {/* Header view (Default state) */}
                <div 
                  onClick={() => toggleExpand(ach.id)}
                  className="p-5 sm:p-6 flex items-center justify-between cursor-pointer select-none group"
                  id={`achievement-trigger-${ach.id}`}
                >
                  <div className="flex items-start space-x-4 pr-4">
                    {/* Badge Icon */}
                    <div className="p-2.5 rounded bg-white/5 text-white/80 shrink-0 mt-0.5 group-hover:bg-white/10 transition-all">
                      <LucideIcon name="Award" size={16} />
                    </div>
                    <div>
                      <h3 className="font-serif text-[17px] font-normal text-white group-hover:text-white/80 transition-colors">
                        {ach.name}
                      </h3>
                      <p className="font-sans text-xs text-[#A1A1AA] mt-1">
                        {ach.shortDesc}
                      </p>
                    </div>
                  </div>

                  {/* Accordion expand indicator */}
                  <div className="p-2 text-white/40 group-hover:text-white transition-colors shrink-0">
                    <LucideIcon 
                      name={isExpanded ? 'ChevronUp' : 'ChevronDown'} 
                      size={16} 
                      className="transition-transform duration-300"
                    />
                  </div>
                </div>

                {/* Body (Interaction expanded state details) */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 border-t border-white/5 bg-transparent" id={`achievement-expanded-details-${ach.id}`}>
                        <div className="space-y-6">
                          
                          {/* Comprehensive Technical Narrative */}
                          <div className="font-sans text-xs sm:text-[13px] text-[#A1A1AA] leading-relaxed max-w-3xl">
                            <h4 className="font-serif text-sm italic font-normal text-white mb-2">
                              Technical Evaluation & Context
                            </h4>
                            <p>{ach.longDesc}</p>
                          </div>

                          {/* Fluid Grid display engine aggregating Cloudinary validation photos */}
                          <div>
                            <h4 className="font-serif text-sm italic font-normal text-white mb-3">
                              Visual Verification Materials ({ach.gallery.length} Exhibits)
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                              {ach.gallery.map((photoUrl, pi) => (
                                <div 
                                  key={pi} 
                                  onClick={() => setActiveLightbox({ achievementId: ach.id, imageIndex: pi })}
                                  className="relative aspect-[4/3] rounded border border-white/5 bg-black group cursor-pointer overflow-hidden"
                                  id={`gallery-photo-${ach.id}-${pi}`}
                                >
                                  <img 
                                    src={photoUrl} 
                                    alt={`${ach.name} validation exhibit ${pi + 1}`} 
                                    className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-[1.04] transition-all duration-500"
                                    referrerPolicy="no-referrer"
                                  />
                                  {/* Hover fullscreen indicator */}
                                  <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                    <div className="p-3 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                                      <LucideIcon name="Maximize" size={15} />
                                    </div>
                                  </div>
                                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent p-3 pt-8">
                                    <span className="font-mono text-[9px] text-white/40 tracking-wider">
                                      EXHIBIT-ID: VERIFY-{ach.id.toUpperCase()}-{pi + 1}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

              </div>
            );
          })}
        </div>

      </div>

      {/* Dynamic Lightbox with Navigation Slide Controls */}
      <AnimatePresence>
        {activeLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-50 flex flex-col items-center justify-between p-4 sm:p-6 bg-black/95 backdrop-blur-md overflow-hidden select-none"
            id="lightbox-overlay"
            onClick={() => setActiveLightbox(null)}
          >
            {/* Header of the Lightbox */}
            <div 
              className="w-full flex items-center justify-between py-2 border-b border-white/5 max-w-5xl" 
              onClick={(e) => e.stopPropagation()}
            >
              <div>
                <span className="font-sans text-[9px] uppercase tracking-[0.2em] text-[#A1A1AA] block">
                  Credential Verification
                </span>
                <h3 className="font-serif text-sm sm:text-base text-white mt-0.5 line-clamp-1">
                  {activeAch?.name}
                </h3>
              </div>
              <div className="flex items-center space-x-4">
                <span className="font-mono text-[10px] text-white/50 bg-white/5 px-2.5 py-1 rounded border border-white/5">
                  Exhibit {currentImageIndex + 1} of {totalImages}
                </span>
                <button
                  onClick={() => setActiveLightbox(null)}
                  className="p-1.5 rounded-full bg-white/5 hover:bg-white/10 text-white/70 hover:text-white transition-colors cursor-pointer border border-white/5"
                  id="lightbox-close-btn"
                  title="Close viewer"
                >
                  <LucideIcon name="X" size={16} />
                </button>
              </div>
            </div>

            {/* Viewport with sliding feature */}
            <div 
              className="relative w-full flex-1 flex items-center justify-center py-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Previous Slide Button */}
              {totalImages > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const prevIndex = (currentImageIndex - 1 + totalImages) % totalImages;
                    setActiveLightbox({ ...activeLightbox, imageIndex: prevIndex });
                  }}
                  className="absolute left-2 sm:left-6 z-10 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/40 hover:bg-white/10 border border-white/5 hover:border-white/15 text-white/80 hover:text-white hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg backdrop-blur"
                  title="Previous image"
                  id="lightbox-prev-btn"
                >
                  <LucideIcon name="ChevronLeft" size={20} />
                </button>
              )}

              {/* Centered Main Image rendering */}
              <div className="relative max-w-full max-h-[55vh] sm:max-h-[62vh] flex items-center justify-center p-2">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.25 }}
                    src={currentImageUrl}
                    alt={`${activeAch?.name} fullscreen view`}
                    className="max-w-full max-h-[55vh] sm:max-h-[62vh] object-contain rounded border border-white/10 shadow-2xl"
                    referrerPolicy="no-referrer"
                    id="lightbox-main-img"
                  />
                </AnimatePresence>
              </div>

              {/* Next Slide Button */}
              {totalImages > 1 && (
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    const nextIndex = (currentImageIndex + 1) % totalImages;
                    setActiveLightbox({ ...activeLightbox, imageIndex: nextIndex });
                  }}
                  className="absolute right-2 sm:right-6 z-10 flex items-center justify-center h-10 w-10 sm:h-12 sm:w-12 rounded-full bg-black/40 hover:bg-white/10 border border-white/5 hover:border-white/15 text-white/80 hover:text-white hover:scale-105 active:scale-95 transition-all cursor-pointer shadow-lg backdrop-blur"
                  title="Next image"
                  id="lightbox-next-btn"
                >
                  <LucideIcon name="ChevronRight" size={20} />
                </button>
              )}
            </div>

            {/* Bottom Section: thumbnails strip & description */}
            <div 
              className="w-full flex flex-col items-center space-y-4 max-w-xl pb-4"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Thumbnail slideshow selection strip */}
              {totalImages > 1 && (
                <div className="flex items-center justify-center space-x-2.5 overflow-x-auto py-2 px-4 max-w-full scrollbar-none" id="lightbox-thumbnails-strip">
                  {activeAch?.gallery.map((thumbUrl, idx) => {
                    const isSelected = idx === currentImageIndex;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveLightbox({ ...activeLightbox, imageIndex: idx })}
                        className={`relative w-12 h-9 sm:w-14 sm:h-10 rounded overflow-hidden aspect-[4/3] border transition-all shrink-0 duration-300 ${
                          isSelected 
                            ? "border-white scale-110 shadow-md shadow-white/5" 
                            : "border-white/15 opacity-40 hover:opacity-100 hover:scale-105"
                        }`}
                        title={`Go to slide ${idx + 1}`}
                      >
                        <img 
                          src={thumbUrl} 
                          alt="Thumbnail preview" 
                          className="w-full h-full object-cover"
                          referrerPolicy="no-referrer"
                        />
                      </button>
                    );
                  })}
                </div>
              )}
              
              <div className="text-center px-4">
                <span className="font-mono text-[8px] text-[#A1A1AA] tracking-[0.25em] block mb-1">
                  EXHIBIT-REPRESENTATION // {activeLightbox.achievementId.toUpperCase()}-{currentImageIndex + 1}
                </span>
                <p className="font-sans text-xs text-white/60 leading-relaxed line-clamp-2 md:line-clamp-none">
                  {activeAch?.shortDesc}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
