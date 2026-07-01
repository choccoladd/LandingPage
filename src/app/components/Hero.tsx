"use client";

import { motion } from "motion/react";
const heroIcon = "/images/general/HeroIcon.webp";

export function Hero() {
  const handleScroll = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
      style={{
        backgroundImage: "url('/images/general/HeroBG.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        borderBottomLeftRadius: "3rem",
        borderBottomRightRadius: "3rem",
      }}
    >
      {/* Gradient overlay — darker at top, lighter towards bottom */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(to bottom, rgba(26,8,2,0.88) 0%, rgba(26,8,2,0.75) 50%, rgba(26,8,2,0.6) 100%)" }} />
      {/* Decorative glow circles — slow pulse */}
      <motion.div animate={{ scale: [1, 1.18, 1], opacity: [0.15, 0.07, 0.15] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute top-20 right-10 w-80 h-80 rounded-full bg-[#C8A040]/15 blur-3xl pointer-events-none" />
      <motion.div animate={{ scale: [1, 1.22, 1], opacity: [0.10, 0.04, 0.10] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }} className="absolute bottom-20 left-1/4 w-64 h-64 rounded-full bg-[#C8A040]/10 blur-2xl pointer-events-none" />
      <motion.div animate={{ scale: [1, 1.15, 1], opacity: [0.05, 0.02, 0.05] }} transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 1 }} className="absolute top-1/2 left-10 w-48 h-48 rounded-full bg-[#3D1C0A]/5 blur-2xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-16 grid md:grid-cols-2 gap-12 items-center">
        {/* Left: Text */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="text-[#C8A040] mb-4 tracking-widest text-xs uppercase drop-shadow"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            By Newbox Greens Ventures
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.15 }}
            className="text-[#fdf6ee] mb-6 leading-tight drop-shadow-lg"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2.4rem, 5vw, 4.2rem)",
              fontWeight: 700,
              lineHeight: 1.15,
            }}
          >
            Pure Cacao,{" "}
            <em style={{ color: "#C8A040", fontStyle: "italic" }}>Extraordinary</em>{" "}
            Flavour
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.3 }}
            className="text-[#fdf6ee]/95 mb-10 max-w-md drop-shadow-md"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: "1.1rem", lineHeight: 1.75 }}
          >
            From handcrafted praline chocolates to nourishing herbal cocoa sachet drinks, every Choccoladd product brings the goodness of Malaysian cacao from farm to your hands.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.0, delay: 0.45 }}
            className="flex flex-wrap gap-4"
          >
            <button
              onClick={() => handleScroll("#products")}
              className="btn-ltr px-8 py-3 text-[#FAF4EA] text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
            >
              Shop Now
            </button>
            <button
              onClick={() => handleScroll("#story")}
              className="btn-border-ltr px-8 py-3 border border-[#fdf6ee]/40 text-[#fdf6ee] text-sm tracking-widest uppercase"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400 }}
            >
              Our Story
            </button>
          </motion.div>
        </div>

        {/* Right: Feature image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.3 }}
          className="hidden md:block relative"
        >
          <div className="relative w-full aspect-square max-w-md mx-auto">
            {/* Outer pulsing glow ring */}
            <motion.div
              animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.15, 0.4] }}
              transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
              className="absolute inset-0 rounded-full"
              style={{ boxShadow: "0 0 40px 12px rgba(200,160,64,0.35)" }}
            />
            {/* Rotating gradient border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full"
              style={{
                background: "conic-gradient(from 0deg, transparent 60%, #C8A040 80%, #fdf6ee 90%, #C8A040 100%, transparent 110%)",
                padding: "2px",
                borderRadius: "9999px",
                WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                WebkitMaskComposite: "xor",
                maskComposite: "exclude",
              }}
            />
            {/* Static subtle inner ring */}
            <div className="absolute inset-3 rounded-full border border-[#C8A040]/20" />
            {/* Image */}
            <img
              src={heroIcon}
              alt="Choccoladd handcrafted Malaysian cocoa chocolate"
              className="absolute inset-5 rounded-full object-cover"
              style={{ width: "calc(100% - 2.5rem)", height: "calc(100% - 2.5rem)" }}
            />
          </div>
          {/* Badge */}
          <div className="absolute -bottom-4 left-8 bg-[#C8A040] text-[#1C0E06] px-4 py-2 rounded-sm shadow-lg">
            <p className="text-xs uppercase tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>Premium Grade</p>
            <p className="text-lg" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}>Single Origin</p>
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span className="text-[#fdf6ee]/60 text-xs tracking-widest uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>scroll</span>
        <div className="w-px h-10 bg-[#fdf6ee]/30" />
      </div>
    </section>
  );
}
