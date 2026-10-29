import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Github, Send, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/portfolio';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    }, 1200);
  };

  return (
    <section
      id="contact"
      className="relative min-h-[100svh] w-full bg-[#050505] text-white py-24 sm:py-32 overflow-hidden flex items-center"
    >
      {/* Subtle Diffused Neon-Green Atmospheric Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 left-1/2 -translate-x-1/2 w-[90vw] max-w-5xl h-96 bg-[radial-gradient(ellipse_at_bottom,rgba(204,255,0,0.09),transparent_70%)] blur-3xl"
      />

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-20 items-start">
          {/* Left Column: Heading & Contact Details (~40%) */}
          <div className="lg:col-span-5 flex flex-col justify-between">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#CCFF00] mb-3">
                LET&apos;S CONNECT
              </p>
              <h2 className="font-black tracking-tighter uppercase text-gradient text-5xl sm:text-7xl leading-none mb-8">
                GET IN TOUCH
              </h2>

              <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed mb-12 max-w-sm">
                Open for full-stack engineering roles, software development opportunities, and scalable microservice collaborations.
              </p>

              {/* Direct Info List */}
              <div className="space-y-6">
                <div>
                  <span className="block text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1">
                    Email
                  </span>
                  <a
                    href={`mailto:${personalInfo.email}`}
                    className="text-base sm:text-lg font-medium text-white hover:text-[#CCFF00] transition-colors"
                  >
                    {personalInfo.email}
                  </a>
                </div>

                <div>
                  <span className="block text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1">
                    Phone
                  </span>
                  <a
                    href={`tel:${personalInfo.phone}`}
                    className="text-base sm:text-lg font-medium text-white hover:text-[#CCFF00] transition-colors"
                  >
                    {personalInfo.phone}
                  </a>
                </div>

                <div>
                  <span className="block text-xs font-medium uppercase tracking-wider text-zinc-500 mb-1">
                    Location
                  </span>
                  <span className="text-base sm:text-lg font-medium text-zinc-300">
                    {personalInfo.location}
                  </span>
                </div>
              </div>
            </div>

            {/* Social Media Circular Buttons */}
            <div className="mt-12 pt-8 border-t border-white/10">
              <span className="block text-xs font-medium uppercase tracking-wider text-zinc-500 mb-4">
                Follow &amp; Connect
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/15 text-white transition-all duration-300 hover:bg-[#CCFF00] hover:text-black hover:scale-110 hover:border-[#CCFF00]"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/15 text-white transition-all duration-300 hover:bg-[#CCFF00] hover:text-black hover:scale-110 hover:border-[#CCFF00]"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={`mailto:${personalInfo.email}`}
                  aria-label="Email Direct"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/15 text-white transition-all duration-300 hover:bg-[#CCFF00] hover:text-black hover:scale-110 hover:border-[#CCFF00]"
                >
                  <Mail className="h-4 w-4" />
                </a>
                <a
                  href={`tel:${personalInfo.phone}`}
                  aria-label="Phone Call"
                  className="flex h-11 w-11 items-center justify-center rounded-full bg-white/5 border border-white/15 text-white transition-all duration-300 hover:bg-[#CCFF00] hover:text-black hover:scale-110 hover:border-[#CCFF00]"
                >
                  <Phone className="h-4 w-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Premium Contact Form (~60%) */}
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-white/10 bg-[#0d0d0d]/80 backdrop-blur-xl p-8 sm:p-12 shadow-2xl">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Row 1: Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                      Your Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      placeholder="Voleti Prabhu Kranthi"
                      value={formData.name}
                      onChange={handleChange}
                      className="glass-input w-full rounded-xl px-4 py-3.5 text-sm placeholder:text-zinc-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Prabhukranthi02@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      className="glass-input w-full rounded-xl px-4 py-3.5 text-sm placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                {/* Row 2: Phone & Subject */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+91 9392247355"
                      value={formData.phone}
                      onChange={handleChange}
                      className="glass-input w-full rounded-xl px-4 py-3.5 text-sm placeholder:text-zinc-600"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      name="subject"
                      required
                      placeholder="Opportunity / Project Inquiry"
                      value={formData.subject}
                      onChange={handleChange}
                      className="glass-input w-full rounded-xl px-4 py-3.5 text-sm placeholder:text-zinc-600"
                    />
                  </div>
                </div>

                {/* Row 3: Message (5 lines tall) */}
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-zinc-400 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    placeholder="Hello Prabhu, we would love to discuss a developer role..."
                    value={formData.message}
                    onChange={handleChange}
                    className="glass-input w-full rounded-xl px-4 py-3.5 text-sm placeholder:text-zinc-600 resize-none"
                  />
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    className="w-full rounded-xl bg-white px-8 py-4 text-sm font-bold uppercase tracking-wider text-black transition-all duration-300 hover:bg-neutral-200 active:scale-[0.99] disabled:opacity-50 shadow-lg flex items-center justify-center gap-2"
                  >
                    {status === 'submitting' ? (
                      <>
                        <div className="h-4 w-4 animate-spin rounded-full border-2 border-black border-t-transparent" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send className="h-4 w-4" />
                      </>
                    )}
                  </button>
                </div>

                {/* Success feedback */}
                {status === 'success' && (
                  <div className="flex items-center gap-2 p-3.5 rounded-xl bg-[#CCFF00]/10 border border-[#CCFF00]/30 text-[#CCFF00] text-sm font-medium">
                    <CheckCircle2 className="h-4 w-4" />
                    <span>Message sent successfully! Prabhu will get back to you shortly.</span>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
