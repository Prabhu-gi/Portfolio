import { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    setMobileMenuOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#050505]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 sm:px-12">
        {/* Brand Logo */}
        <button
          onClick={() => scrollTo('home')}
          className="group flex items-center gap-3 text-left focus:outline-none"
        >
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-white/10 border border-white/15 text-white font-black text-sm tracking-tight transition-transform duration-300 group-hover:bg-[#CCFF00] group-hover:text-black group-hover:scale-105">
            P
          </div>
          <div className="flex flex-col">
            <span className="font-display font-black text-sm uppercase tracking-wider text-white">
              {personalInfo.displayName}
            </span>
            <span className="text-[10px] uppercase tracking-widest text-[#CCFF00]">
              Full Stack
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-xs font-semibold uppercase tracking-widest text-zinc-400">
          <button
            onClick={() => scrollTo('home')}
            className="hover:text-white transition-colors focus:outline-none"
          >
            Home
          </button>
          <button
            onClick={() => scrollTo('about')}
            className="hover:text-white transition-colors focus:outline-none"
          >
            About
          </button>
          <button
            onClick={() => scrollTo('services')}
            className="hover:text-white transition-colors focus:outline-none"
          >
            Services
          </button>
          <button
            onClick={() => scrollTo('projects')}
            className="hover:text-white transition-colors focus:outline-none"
          >
            Projects
          </button>
          <button
            onClick={() => scrollTo('contact')}
            className="hover:text-white transition-colors focus:outline-none"
          >
            Contact
          </button>
        </nav>

        {/* Right CTA */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={() => scrollTo('contact')}
            className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-5 py-2 text-xs font-bold uppercase tracking-wider text-white transition-all duration-300 hover:border-[#CCFF00] hover:text-[#CCFF00] hover:bg-white/10"
          >
            <span>Let&apos;s Build</span>
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:rotate-45" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex md:hidden">
          <button
            onClick={() => setMobileMenuOpen((prev) => !prev)}
            aria-label="Toggle Navigation Menu"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 bg-white/5 text-white"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0a0a0a]/95 backdrop-blur-xl border-b border-white/10 px-6 py-6 animate-in slide-in-from-top-4 duration-300">
          <nav className="flex flex-col gap-4 text-sm font-bold uppercase tracking-widest text-zinc-300">
            <button
              onClick={() => scrollTo('home')}
              className="text-left py-2 hover:text-[#CCFF00] transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollTo('about')}
              className="text-left py-2 hover:text-[#CCFF00] transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollTo('services')}
              className="text-left py-2 hover:text-[#CCFF00] transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollTo('projects')}
              className="text-left py-2 hover:text-[#CCFF00] transition-colors"
            >
              Projects
            </button>
            <button
              onClick={() => scrollTo('contact')}
              className="text-left py-2 hover:text-[#CCFF00] transition-colors"
            >
              Contact
            </button>
            <div className="pt-2">
              <button
                onClick={() => scrollTo('contact')}
                className="w-full rounded-xl bg-[#CCFF00] py-3 text-center text-xs font-bold uppercase tracking-widest text-black"
              >
                Let&apos;s Build
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}

