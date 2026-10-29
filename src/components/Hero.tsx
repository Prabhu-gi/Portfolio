import React, { useEffect, useState, useRef } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

const TARGET_TEXT = "PORTFOLIO";
const CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%&*";

export default function Hero() {
  const [displayText, setDisplayText] = useState("PRABHU");
  const [isLoaded, setIsLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);


  // Scramble animation effect from initial word into PORTFOLIO
  useEffect(() => {
    let iteration = 0;
    let interval: ReturnType<typeof setInterval>;

    const timer = setTimeout(() => {
      interval = setInterval(() => {
        setDisplayText(() => {
          return TARGET_TEXT
            .split("")
            .map((_, index) => {
              if (index < iteration) {
                return TARGET_TEXT[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join("");
        });

        if (iteration >= TARGET_TEXT.length) {
          clearInterval(interval);
        }

        iteration += 1 / 3;
      }, 40);
    }, 600);

    const loadTimer = setTimeout(() => setIsLoaded(true), 200);

    return () => {
      clearTimeout(timer);
      clearTimeout(loadTimer);
      if (interval) clearInterval(interval);
    };
  }, []);

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative min-h-[100svh] w-full overflow-hidden bg-[#050505] flex flex-col justify-between pt-24 pb-8 sm:pb-12"
    >
      {/* 1. Subtle Radial Background Gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_40%,rgba(40,40,40,0.5),transparent_75%)]"
      />

      {/* Subtle atmospheric glow accent at bottom */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[85vw] max-w-4xl h-48 bg-[radial-gradient(ellipse_at_bottom,rgba(204,255,0,0.08),transparent_70%)] blur-2xl"
      />

      {/* 2. Main Typography (Positioned BEHIND the person) */}
      <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none select-none">
        <h1
          className="font-black text-center tracking-tighter uppercase whitespace-nowrap text-gradient drop-shadow-[0_20px_50px_rgba(0,0,0,0.9)] transition-all duration-1000 ease-out"
          style={{
            fontSize: 'clamp(4.2rem, 16vw, 15rem)',
            lineHeight: 0.85,
            opacity: isLoaded ? 0.95 : 0,
            transform: isLoaded ? 'translateY(-4%)' : 'translateY(8%)',
          }}
        >
          {displayText}
        </h1>
      </div>

      {/* 3. Hero Person Image - Single Half Photo Blended to Background */}
      <div className="relative z-20 mx-auto flex h-[62svh] sm:h-[68svh] lg:h-[76vh] w-full max-w-[620px] items-end justify-center pointer-events-none select-none">
        <div
          className="relative h-full w-full flex items-end justify-center"
          style={{
            opacity: isLoaded ? 1 : 0,
            transition: 'opacity 0.8s ease-out',
          }}
        >
          <img
            src="/assets/hero-intro-photo.png"
            alt={personalInfo.fullName}
            className="h-full w-auto max-w-none object-contain object-bottom drop-shadow-[0_25px_50px_rgba(0,0,0,0.95)]"
          />
        </div>
      </div>

      {/* 4. Subtitle and Contact CTA Controls (Layered on top) */}
      <div className="relative z-30 mx-auto w-full max-w-7xl px-6 sm:px-12 flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Editorial Subtitle */}
        <div
          className="flex items-baseline gap-2 text-center sm:text-left transition-all duration-1000 delay-300"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <span className="font-bold tracking-tight text-white text-xl sm:text-3xl lg:text-4xl">
            Software
          </span>
          <span className="font-serif italic font-light text-zinc-400 text-xl sm:text-3xl lg:text-4xl">
            Developer
          </span>
          <span className="hidden md:inline-block ml-3 text-xs font-semibold uppercase tracking-[0.25em] text-[#CCFF00] bg-[#CCFF00]/10 px-2.5 py-1 rounded-full border border-[#CCFF00]/25">
            Java &amp; React
          </span>
        </div>

        {/* Minimalist Contact CTA */}
        <div
          className="flex items-center gap-2.5 transition-all duration-1000 delay-400"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(20px)',
          }}
        >
          <a
            href="#contact"
            onClick={scrollToContact}
            className="group flex items-center gap-3 rounded-full bg-black/60 backdrop-blur-md border border-white/20 px-6 py-3.5 text-xs font-bold uppercase tracking-[0.18em] text-white transition-all duration-300 hover:bg-[#CCFF00] hover:text-black hover:border-[#CCFF00] shadow-lg shadow-black/40"
          >
            <span>Contact</span>
            <div className="flex h-6 w-6 items-center justify-center rounded-full border border-current transition-transform duration-300 group-hover:rotate-45">
              <ArrowUpRight className="h-3.5 w-3.5" />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
