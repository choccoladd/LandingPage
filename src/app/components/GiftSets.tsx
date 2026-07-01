"use client";

import { motion, useMotionValue, useTransform, useSpring } from "motion/react";
import { Gift, Heart, Star, Package, Sparkles } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { giftSets } from "./gift-sets-data";
import { slugify } from "./slug";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Gift, Heart, Star, Package, Sparkles };

const PREVIEW_COUNT = 4;

type GiftSet = (typeof giftSets)[0];

function GiftSetCard({ set, index }: { set: GiftSet; index: number }) {
  const Icon = iconMap[set.icon];
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [6, -6]), { stiffness: 200, damping: 25 });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-6, 6]), { stiffness: 200, damping: 25 });

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi! I'm interested in the ${set.name} gift set (${set.price}). Please provide more details.`);
    window.open(`https://wa.me/60196319373?text=${text}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.03, zIndex: 5 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, delay: index * 0.18, ease: [0.22, 1, 0.36, 1] }}
      style={{ transformPerspective: 900, rotateX, rotateY }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mx.set((e.clientX - rect.left) / rect.width - 0.5);
        my.set((e.clientY - rect.top) / rect.height - 0.5);
      }}
      onMouseLeave={() => { mx.set(0); my.set(0); }}
      className="group flex flex-col bg-[#2C1206]/70 rounded-2xl border border-[#C8A040]/20 overflow-hidden hover:border-[#C8A040]/50 hover:shadow-2xl hover:shadow-[#C8A040]/10 transition-all duration-300"
    >
      {/* Image */}
      <Link href={`/gift-sets/${slugify(set.name)}`} className="relative aspect-square overflow-hidden bg-[#2c1810] block">
        <img
          src={set.image}
          alt={set.name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-in-out"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/60 to-transparent" />
        <div
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: set.accent }}
        >
          <Icon size={18} className="text-[#fdf6ee]" />
        </div>
      </Link>

      {/* Content */}
      <div className="p-3 sm:p-6 flex flex-col flex-1">
        {/* Fixed-height title so descriptions all start at the same line */}
        <Link href={`/gift-sets/${slugify(set.name)}`}>
          <h3
            className="text-[#fdf6ee] mb-3 min-h-[3.5rem] hover:text-[#C8A040] transition-colors"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.15rem", lineHeight: 1.4 }}
          >
            {set.name}
          </h3>
        </Link>

        {/* Description fills remaining space, pushing price+button to bottom */}
        <p
          className="text-[#fdf6ee]/75 text-sm flex-1 mb-5"
          style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.7 }}
        >
          {set.description}
        </p>

        {/* Price above button */}
        <div className="flex flex-col gap-2">
          <span
            className="text-[#C8A040]"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem" }}
          >
            {set.price}
          </span>
          <button
            onClick={handleWhatsApp}
            className="btn-glow w-full py-2.5 text-xs uppercase tracking-widest text-[#fdf6ee]"
            style={{ background: set.accent, fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
          >
            Order Gift
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function GiftSets() {
  const router = useRouter();

  return (
    <section id="gift-sets" className="py-14" style={{ background: "#3D1A07", borderRadius: "3rem 3rem 0 0" }}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p
            className="text-[#C8A040] text-xs uppercase tracking-widest mb-3"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Curated with Care
          </p>
          <h2
            className="text-[#fdf6ee] mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}
          >
            Gift Sets
          </h2>
          <p
            className="text-[#fdf6ee]/80 mx-auto text-center max-w-xl"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: "1rem" }}
          >
            The perfect gift for every occasion: birthdays, weddings, corporate events, or simply to show someone you care.
          </p>
          <div className="w-16 h-0.5 bg-[#C8A040] mx-auto mt-4" />
        </div>

        {/* Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-8">
          {giftSets.slice(0, PREVIEW_COUNT).map((set, i) => (
            <GiftSetCard key={set.id} set={set} index={i} />
          ))}
        </div>

        {/* View All */}
        <div className="text-center mt-12">
          <button
            onClick={() => router.push("/all-gift-sets")}
            className="inline-block px-10 py-3.5 border border-[#C8A040] text-[#C8A040] text-xs uppercase tracking-widest hover:bg-[#C8A040] hover:text-[#2c1810] transition-colors duration-300"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
          >
            View All Gift Sets
          </button>
        </div>
      </div>
    </section>
  );
}
