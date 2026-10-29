import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { servicesData } from '../data/portfolio';

export default function Services() {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveAccordion((prev) => (prev === index ? null : index));
  };

  const scrollToProjects = (e: React.MouseEvent) => {
    e.stopPropagation();
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="services"
      className="relative min-h-[100svh] w-full bg-[#050505] text-white py-24 sm:py-32 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-12 mb-16 sm:mb-20">
        {/* Giant Top-Right Heading */}
        <div className="flex flex-col items-start lg:items-end text-left lg:text-right">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#CCFF00] mb-2">
            ENGINEERING CAPABILITIES
          </p>
          <h2 className="font-black uppercase tracking-tighter text-gradient text-5xl sm:text-7xl lg:text-8xl leading-none">
            WHAT WE<br className="hidden sm:block" /> CAN DO
          </h2>
        </div>
      </div>

      {/* Full-Width Accordion List */}
      <div className="w-full border-t border-white/15">
        {servicesData.map((service, index) => {
          const isOpen = activeAccordion === index;
          const isHovered = hoveredIndex === index;
          const isHighlight = isHovered;

          return (
            <div
              key={service.number}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              onClick={() => toggleAccordion(index)}
              className={`w-full border-b border-white/15 transition-all duration-300 cursor-pointer select-none ${
                isHighlight ? 'bg-[#CCFF00] text-black' : 'bg-transparent text-white'
              }`}
            >
              <div className="mx-auto w-full max-w-7xl px-6 sm:px-12 py-7 sm:py-9">
                {/* Header Row */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-6 sm:gap-12 min-w-0">
                    <span
                      className={`text-sm sm:text-base font-black tracking-widest transition-colors ${
                        isHighlight ? 'text-black' : 'text-[#CCFF00]'
                      }`}
                    >
                      {service.number}
                    </span>
                    <h3 className="font-display font-bold text-lg sm:text-2xl lg:text-3xl tracking-tight truncate uppercase">
                      {service.title}
                    </h3>
                  </div>

                  {/* Arrow Indicator */}
                  <div
                    className={`flex h-9 w-9 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-full transition-transform duration-300 ${
                      isOpen ? 'rotate-90' : isHovered ? 'rotate-45' : 'rotate-0'
                    } ${isHighlight ? 'text-black border border-black/30' : 'text-[#CCFF00] border border-white/20'}`}
                  >
                    <ArrowUpRight className="h-5 w-5 sm:h-6 sm:w-6" />
                  </div>
                </div>

                {/* Expandable Accordion Body */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? 'max-h-[600px] opacity-100 pt-8 sm:pt-10' : 'max-h-0 opacity-0 pt-0'
                  }`}
                >
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-4 border-t border-current/15">
                    {/* Left Side: Capabilities list with small square bullet */}
                    <div className="lg:col-span-6">
                      <p className="text-xs font-bold uppercase tracking-widest opacity-75 mb-4">
                        CORE CAPABILITIES
                      </p>
                      <ul className="space-y-3">
                        {service.capabilities.map((cap) => (
                          <li key={cap} className="flex items-start gap-3 text-sm sm:text-base font-medium">
                            <span
                              className={`mt-1.5 h-1.5 w-1.5 shrink-0 transition-colors ${
                                isHighlight ? 'bg-black' : 'bg-[#CCFF00]'
                              }`}
                            />
                            <span>{cap}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Right Side: Description and CTA button */}
                    <div className="lg:col-span-6 flex flex-col justify-between">
                      <p className="text-sm sm:text-base leading-relaxed opacity-90 mb-6">
                        {service.description}
                      </p>

                      {service.hasCta && (
                        <div className="pt-2">
                          <button
                            type="button"
                            onClick={scrollToProjects}
                            className={`inline-flex items-center gap-2 rounded-full px-7 py-3 text-xs font-bold uppercase tracking-widest transition-all duration-300 shadow-md ${
                              isHighlight
                                ? 'bg-black text-[#CCFF00] hover:bg-neutral-900 border border-black'
                                : 'bg-[#CCFF00] text-black hover:bg-lime-400'
                            }`}
                          >
                            <span>VIEW PROJECTS</span>
                            <ArrowUpRight className="h-4 w-4" />
                          </button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

