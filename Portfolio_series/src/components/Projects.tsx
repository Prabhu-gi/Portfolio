import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';
import { projectsData, personalInfo } from '../data/portfolio';

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative min-h-[100svh] w-full bg-[#050505] text-white py-24 sm:py-32 overflow-hidden"
    >
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-12">
        {/* Header: Two Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end mb-24 sm:mb-32">
          {/* Left: Giant Title */}
          <div className="lg:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#CCFF00] mb-3">
              PRODUCTION ARCHITECTURE
            </p>
            <h2 className="font-black tracking-tighter uppercase text-gradient text-5xl sm:text-7xl lg:text-8xl leading-none">
              SELECTED <span className="font-serif italic font-light lowercase text-zinc-400">work</span>
            </h2>
          </div>

          {/* Right: Editorial Description & Pill CTA */}
          <div className="lg:col-span-5 flex flex-col justify-end">
            <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-6 max-w-md">
              Verified full-stack applications engineered with Spring Boot REST microservices, MongoDB and MySQL data layers, and accessible React interfaces.
            </p>
            <div>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-lime-400 shadow-lg shadow-[#CCFF00]/10"
              >
                <span>GitHub Repositories</span>
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </div>
        </div>

        {/* Large Alternating Editorial Project List (No Traditional Cards) */}
        <div className="space-y-32 sm:space-y-40">
          {projectsData.map((project, index) => {
            const isEven = index % 2 === 1;

            return (
              <div
                key={project.number}
                className="group relative grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
              >
                {/* Visual Image Column (Alternates on desktop, 16:10 aspect ratio) */}
                <div
                  className={`w-full lg:col-span-7 ${
                    isEven ? 'lg:order-2' : 'lg:order-1'
                  }`}
                >
                  <div className="relative aspect-[16/10] overflow-hidden rounded-xl bg-neutral-900 border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.8)]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="h-full w-full object-cover object-center opacity-90 transition-all duration-700 ease-out group-hover:scale-105 group-hover:opacity-100"
                    />
                    {/* Subtle hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500" />
                    
                    {/* Tag badge on image */}
                    <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                      <span className="rounded-full bg-black/70 backdrop-blur-md px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-[#CCFF00] border border-[#CCFF00]/30">
                        {project.category}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Text Content Column */}
                <div
                  className={`w-full lg:col-span-5 flex flex-col justify-center ${
                    isEven ? 'lg:order-1' : 'lg:order-2'
                  }`}
                >
                  {/* Number */}
                  <span className="text-xs sm:text-sm font-bold uppercase tracking-[0.3em] text-[#CCFF00] mb-2">
                    {project.number}
                  </span>

                  {/* Title */}
                  <h3 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl uppercase tracking-tight text-white mb-4 leading-tight">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-6">
                    {project.description}
                  </p>

                  {/* Verified Metrics Grid */}
                  <div className="grid grid-cols-2 gap-3 mb-6 p-4 rounded-xl bg-white/[0.03] border border-white/10">
                    {project.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-lg sm:text-xl font-black text-white font-mono text-gradient">
                          {m.value}
                        </div>
                        <div className="text-[11px] text-zinc-400 uppercase tracking-wider font-medium">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {project.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-full px-3 py-1 text-[11px] font-medium text-zinc-300 bg-white/5 border border-white/10"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Project Buttons (Live Demo + GitHub) */}
                  <div className="flex flex-wrap items-center gap-3">
                    {project.liveDemoUrl && (
                      <a
                        href={project.liveDemoUrl}
                        target={project.liveDemoUrl.startsWith('http') ? '_blank' : undefined}
                        rel={project.liveDemoUrl.startsWith('http') ? 'noreferrer' : undefined}
                        className="inline-flex items-center gap-2 rounded-full bg-[#CCFF00] px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-lime-400 shadow-md font-semibold"
                      >
                        <span>Live Demo</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}

                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-transparent border border-white/30 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:bg-white hover:text-black"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>GitHub</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

