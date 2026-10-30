import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="relative min-h-[100svh] w-full bg-black text-white overflow-hidden flex flex-col justify-between pt-20 pb-8">
      {/* 1. Cinematic Background Image at Bottom */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="/assets/footer-bg.jpg"
          alt="Cinematic Horizon"
          className="h-full w-full object-cover object-bottom opacity-40 mix-blend-screen"
        />
        {/* Strong black gradient overlay from the top to smoothly blend the background into black UI */}
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/85 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black via-black/80 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-12 flex-1 flex flex-col justify-between">
        {/* 2. Top Content: Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-8 items-start">
          {/* Left Column: Email & Navigation */}
          <div className="lg:col-span-7 flex flex-col justify-start">
            <span className="text-xs font-semibold uppercase tracking-widest text-zinc-500 mb-2">
              Connect with me
            </span>
            <a
              href={`mailto:${personalInfo.email}`}
              className="font-display font-bold text-2xl sm:text-4xl lg:text-5xl text-white hover:text-[#CCFF00] transition-colors leading-tight mb-8"
            >
              {personalInfo.email}
            </a>

            {/* Navigation Links */}
            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-xs sm:text-sm font-medium tracking-wider uppercase text-zinc-400">
              <button onClick={() => scrollTo('home')} className="hover:text-white transition-colors">
                Home
              </button>
              <span>·</span>
              <button onClick={() => scrollTo('about')} className="hover:text-white transition-colors">
                About
              </button>
              <span>·</span>
              <button onClick={() => scrollTo('services')} className="hover:text-white transition-colors">
                Services
              </button>
              <span>·</span>
              <button onClick={() => scrollTo('projects')} className="hover:text-white transition-colors">
                Projects
              </button>
              <span>·</span>
              <button onClick={() => scrollTo('contact')} className="hover:text-white transition-colors">
                Contact
              </button>
            </div>
          </div>

          {/* Right Column: CTA & Let's Build */}
          <div className="lg:col-span-5 flex flex-col lg:items-end text-left lg:text-right">
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white mb-2">
              Let&apos;s build something
            </h3>
            <p className="text-sm text-zinc-400 font-light mb-6 max-w-sm">
              Open for full-time software engineering roles, enterprise REST APIs, and collaborative web platforms.
            </p>
            <div>
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="inline-flex items-center gap-2 rounded-full bg-white px-7 py-3 text-xs font-bold uppercase tracking-widest text-black transition-all duration-300 hover:bg-[#CCFF00] hover:scale-105 shadow-xl"
              >
                <span>Get in touch</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>
          </div>
        </div>

        {/* 3. Social Navigation Row with Thin Divider */}
        <div className="w-full my-8 pt-6 border-t border-white/10 flex flex-wrap items-center justify-between gap-4 text-xs font-semibold uppercase tracking-widest text-zinc-400">
          <div className="flex items-center gap-8">
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#CCFF00] transition-colors"
            >
              LinkedIn ↗
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#CCFF00] transition-colors"
            >
              GitHub ↗
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-[#CCFF00] transition-colors"
            >
              Email ↗
            </a>
            <a
              href={`tel:${personalInfo.phone}`}
              className="hover:text-[#CCFF00] transition-colors"
            >
              Phone ↗
            </a>
          </div>
          <span className="text-zinc-600 font-normal">
            Java 17 · Spring Boot · React.js · Docker
          </span>
        </div>

        {/* 4. Huge Central Brand Typography - Perfectly fitted to screen width without overflow */}
        <div className="w-full my-4 sm:my-6 flex flex-col items-center justify-center select-none pointer-events-none">
          <h2 className="sr-only">PRABHU KRANTHI</h2>
          <svg
            viewBox="0 0 1350 140"
            className="w-full h-auto select-none overflow-visible max-w-full"
            aria-hidden="true"
          >
            <text
              x="50%"
              y="55%"
              textAnchor="middle"
              dominantBaseline="middle"
              className="fill-white font-black uppercase tracking-tighter"
              style={{
                fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
                fontSize: '118px',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                opacity: 0.95,
              }}
            >
              PRABHU KRANTHI
            </text>
          </svg>
        </div>

        {/* 5. Minimal Bottom Legal & Copyright Bar */}
        <div className="w-full pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-500">
          <p>© {new Date().getFullYear()} Voleti Prabhu Kranthi. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

