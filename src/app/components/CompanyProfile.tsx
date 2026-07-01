"use client";

import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { Eye, Target, Building2 } from "lucide-react";

const pillars = [
  {
    icon: Building2,
    label: "01",
    title: "Company Profile",
    body: "Newbox Greens Ventures (Reg. No. 202403155455) was established on 11th June 2024 in Kuala Lumpur, Malaysia. Operating under the brand Choccoladd, we produce, process, market, and sell cocoa-derived food ingredients and cocoa products such as cocoa cake, butter, powder, liquor, and mass, serving customers in Malaysia and internationally. We are proud to collaborate with Lembaga Koko Malaysia (Malaysian Cocoa Board), upholding the highest standards in cocoa quality and sustainable practices.",
  },
  {
    icon: Target,
    label: "02",
    title: "Our Mission",
    body: "To constantly R&D and innovate cocoa plantation outputs in Malaysia into new derivative end products. To create a sustainable cocoa supply chain from farm to fork. To form strong alliances with local partners, dedicated to serving our customers worldwide and growing together in long-term partnership.",
  },
  {
    icon: Eye,
    label: "03",
    title: "Our Vision",
    body: "To become the preferred cocoa and its derivatives company and partner in the world.",
  },
];

function PillarCard({ pillar, index }: { pillar: typeof pillars[0]; index: number }) {
  const Icon = pillar.icon;
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 25 });

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, zIndex: 5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 900, rotateX, rotateY, background: "rgba(44, 18, 6, 0.7)" }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - rect.left) / rect.width - 0.5);
        my.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      className="relative flex flex-col p-8 rounded-2xl border border-[#C8A040]/20 overflow-hidden hover:border-[#C8A040]/50 hover:shadow-2xl hover:shadow-[#C8A040]/10 transition-all duration-300"
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C8A040]" />
      <div className="flex items-start justify-between mb-6">
        <span className="text-[#C8A040]/30 leading-none" style={{ fontFamily: "'Playfair Display', serif", fontSize: "3.5rem", fontWeight: 700, lineHeight: 1 }}>
          {pillar.label}
        </span>
        <div className="w-11 h-11 rounded-full border border-[#C8A040]/30 flex items-center justify-center flex-shrink-0">
          <Icon size={18} className="text-[#C8A040]" />
        </div>
      </div>
      <h3 className="text-[#fdf6ee] mb-3" style={{ fontFamily: "'Playfair Display', serif", fontSize: "1.25rem", fontWeight: 600 }}>
        {pillar.title}
      </h3>
      <div className="w-10 h-px bg-[#C8A040]/40 mb-5" />
      <p className="text-[#fdf6ee]/75 text-sm flex-1" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.85 }}>
        {pillar.body}
      </p>
    </motion.div>
  );
}

export function CompanyProfile() {
  return (
    <section className="py-14" style={{ background: "#1A0802", borderRadius: "3rem" }}>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p
            className="text-[#C8A040] text-xs uppercase tracking-widest mb-3"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Who We Are
          </p>
          <h2
            className="text-[#fdf6ee] mb-4"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 700,
            }}
          >
            Built on Craft,{" "}
            <em style={{ color: "#C8A040", fontStyle: "italic" }}>Driven by Purpose</em>
          </h2>
          <div className="w-16 h-px bg-[#C8A040] mx-auto mt-4" />
        </motion.div>

        {/* Three pillars */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {pillars.map((pillar, i) => (
            <PillarCard key={pillar.title} pillar={pillar} index={i} />
          ))}
        </div>


      </div>
    </section>
  );
}
