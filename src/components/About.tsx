import { personalInfo, skillsMarquee } from '../data/portfolio';

export default function About() {
  const highlights = personalInfo.aboutHighlights;

  // Split description text to highlight specific technologies
  const renderParagraph = () => {
    const text = personalInfo.aboutText;
    let parts: (string | JSX.Element)[] = [text];

    highlights.forEach((h) => {
      const nextParts: (string | JSX.Element)[] = [];
      parts.forEach((p) => {
        if (typeof p === 'string') {
          const split = p.split(h);
          split.forEach((s, i) => {
            nextParts.push(s);
            if (i < split.length - 1) {
              nextParts.push(
                <span key={`${h}-${i}`} className="font-semibold text-white underline decoration-[#CCFF00]/40 decoration-2 underline-offset-4">
                  {h}
                </span>
              );
            }
          });
        } else {
          nextParts.push(p);
        }
      });
      parts = nextParts;
    });

    return parts;
  };

  return (
    <section id="about" className="relative min-h-[100svh] w-full bg-[#050505] text-white py-24 sm:py-32 overflow-hidden flex flex-col justify-between">
      {/* Top Main Section */}
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-12">
        {/* Mobile Intro Heading */}
        <div className="block lg:hidden text-center mb-8">
          <h2 className="font-black uppercase tracking-tighter text-gradient text-6xl sm:text-7xl">
            INTRO
          </h2>
        </div>

        {/* Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Authentic Developer Portrait */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative">
              <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-black shadow-[0_25px_60px_rgba(0,0,0,0.9)] w-[210px] sm:w-[250px] lg:w-[270px] aspect-square">
                <img
                  src="/assets/about-original-half.jpg"
                  alt={personalInfo.fullName}
                  className="h-full w-full object-cover object-top"
                />
                {/* Subtle bottom vignette inside image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-[11px] font-bold tracking-widest uppercase text-white/90">
                  <span className="flex items-center gap-1.5">
                    <span className="h-2 w-2 rounded-full bg-[#CCFF00]" />
                    Available
                  </span>
                  <span className="text-zinc-400">Full Stack</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Giant Heading & Glass Description Card */}
          <div className="lg:col-span-8 flex flex-col justify-center">
            {/* Desktop Intro Heading */}
            <div className="hidden lg:block mb-4">
              <h2 className="font-black uppercase tracking-tighter text-gradient text-7xl xl:text-8xl leading-none">
                INTRO
              </h2>
            </div>

            {/* Glassmorphism Card */}
            <div className="glass-panel rounded-3xl p-6 sm:p-10 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] shadow-2xl">
              <h3 className="font-display font-medium text-xl sm:text-2xl text-white mb-4">
                Hey, I&apos;m <span className="font-bold text-[#CCFF00]">{personalInfo.displayName}</span>.
              </h3>

              <p className="text-sm sm:text-base lg:text-lg text-zinc-300 font-light leading-relaxed mb-6">
                {renderParagraph()}
              </p>

              {/* Quick Resume Badges */}
              <div className="flex flex-wrap gap-2 pt-2 border-t border-white/10">
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                  Sandspace Technologies
                </span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                  35% Query Latency Cut
                </span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-zinc-300">
                  85%+ Test Coverage (JUnit &amp; Mockito)
                </span>
                <span className="text-xs font-semibold px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-[#CCFF00] border-[#CCFF00]/30">
                  B.Sc. Computer Science (7.5 CGPA)
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Static Technical Skills Grid */}
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-12 mt-16 sm:mt-24 pt-12 border-t border-white/10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 gap-4">
          <div>
            <span className="text-xs font-bold uppercase tracking-[0.25em] text-[#CCFF00] mb-2 block">
              Technical Stack
            </span>
            <h3 className="font-display font-bold text-2xl sm:text-3xl text-white">
              Skills &amp; Technologies
            </h3>
          </div>
          <span className="text-xs text-zinc-500 uppercase tracking-widest font-mono">
            4 Core Domains · 35+ Tools &amp; Frameworks
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Category 1: Frontend Development */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <span className="h-2 w-2 rounded-full bg-[#CCFF00]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Frontend Development
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsMarquee.row1.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg px-2.5 py-1 text-xs font-medium text-zinc-300 bg-white/[0.04] border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Category 2: Backend Architecture */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <span className="h-2 w-2 rounded-full bg-[#CCFF00]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Backend Architecture
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsMarquee.row2.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg px-2.5 py-1 text-xs font-medium text-zinc-300 bg-white/[0.04] border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Category 3: Databases & DevOps */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <span className="h-2 w-2 rounded-full bg-[#CCFF00]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Databases &amp; DevOps
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsMarquee.row3.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg px-2.5 py-1 text-xs font-medium text-zinc-300 bg-white/[0.04] border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Category 4: Testing & Core CS */}
          <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
                <span className="h-2 w-2 rounded-full bg-[#CCFF00]" />
                <h4 className="text-xs font-bold uppercase tracking-wider text-white">
                  Testing &amp; Core CS
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {skillsMarquee.row4.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-lg px-2.5 py-1 text-xs font-medium text-zinc-300 bg-white/[0.04] border border-white/10"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

