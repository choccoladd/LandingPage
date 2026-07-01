"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { Gift, Heart, Star, Package, Sparkles, ChevronDown } from "lucide-react";
import { motion } from "motion/react";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { giftSets, type GiftSet } from "../components/gift-sets-data";
import { slugify } from "../components/slug";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = { Gift, Heart, Star, Package, Sparkles };

const SORT_OPTIONS = [
  { label: "Latest",              value: "latest" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "Name: A – Z",        value: "name-asc" },
] as const;

type SortValue = (typeof SORT_OPTIONS)[number]["value"];

function parsePrice(price: string) {
  return parseFloat(price.replace(/[^\d.]/g, ""));
}

function GiftCard({ set }: { set: GiftSet }) {
  const Icon = iconMap[set.icon];

  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi! I'm interested in the ${set.name} gift set (${set.price}). Please provide more details.`);
    window.open(`https://wa.me/60196319373?text=${text}`, "_blank");
  };

  return (
    <motion.div
      layout
      className="group flex flex-col bg-[#2C1206]/70 rounded-2xl border border-[#C8A040]/20 overflow-hidden hover:border-[#C8A040]/50 transition-all duration-300"
    >
      <Link href={`/gift-sets/${slugify(set.name)}`} className="relative aspect-square overflow-hidden bg-[#2c1810] block">
        <img
          src={set.image}
          alt={set.name}
          className="w-full h-full object-cover group-hover:scale-[1.15] transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c1810]/60 to-transparent" />
        <div
          className="absolute top-4 right-4 w-10 h-10 rounded-full flex items-center justify-center"
          style={{ background: set.accent }}
        >
          <Icon size={18} className="text-[#fdf6ee]" />
        </div>
        <span
          className="absolute top-4 left-4 text-[10px] uppercase tracking-widest px-2 py-1 bg-[#2c1810]/70 text-[#C8A040]"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          {set.occasion}
        </span>
      </Link>

      <div className="p-3 sm:p-6 flex flex-col flex-1">
        <Link href={`/gift-sets/${slugify(set.name)}`}>
          <h3
            className="text-[#fdf6ee] mb-2 hover:text-[#C8A040] transition-colors"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.15rem" }}
          >
            {set.name}
          </h3>
        </Link>
        <p
          className="text-[#fdf6ee]/75 text-sm mb-5 flex-1"
          style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.7 }}
        >
          {set.description}
        </p>

        <div className="flex flex-col gap-2">
          <span
            className="text-[#C8A040]"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.2rem" }}
          >
            {set.price}
          </span>
          <button
            onClick={handleWhatsApp}
            className="w-full py-2.5 text-xs uppercase tracking-widest text-[#fdf6ee] hover:opacity-85 transition-opacity"
            style={{ background: set.accent, fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
          >
            Order Gift
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function AllGiftSetsPage() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortValue>("latest");
  const [sortOpen, setSortOpen] = useState(false);

  const displayed = useMemo(() => {
    const filtered = giftSets.filter((set) =>
      set.name.toLowerCase().includes(search.toLowerCase()) ||
      set.description.toLowerCase().includes(search.toLowerCase())
    );
    return [...filtered].sort((a, b) => {
      if (sortBy === "price-asc")  return parsePrice(a.price) - parsePrice(b.price);
      if (sortBy === "price-desc") return parsePrice(b.price) - parsePrice(a.price);
      if (sortBy === "name-asc")   return a.name.localeCompare(b.name);
      return 0;
    });
  }, [search, sortBy]);

  const currentSort = SORT_OPTIONS.find((o) => o.value === sortBy)!;

  return (
    <>
      <Navbar />
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      >
      <div className="min-h-screen pt-36 pb-20" style={{ background: "#1A0802" }}>

          {/* Header */}
          <div className="text-center mb-12 px-6">
            <p
              className="text-[#C8A040] text-xs uppercase tracking-widest mb-3"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Curated with Care
            </p>
            <h1
              className="text-[#fdf6ee] mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}
            >
              All Gift Sets
            </h1>
            <p
              className="text-[#fdf6ee]/80 max-w-2xl mx-auto"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.75 }}
            >
              The perfect gift for every occasion. Browse our complete collection of handcrafted gift sets.
            </p>
            <div className="w-16 h-0.5 bg-[#C8A040] mx-auto mt-4" />
          </div>

          {/* Sticky Search + Sort */}
          <div className="sticky top-24 sm:top-36 z-20 border-b border-[#C8A040]/10 pt-2 pb-3 mb-8" style={{ background: "#1A0802", boxShadow: '0 -20px 0 20px #1A0802, 0 2px 6px rgba(0,0,0,0.2)' }}>
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row gap-3">
              <input
                className="flex-1 px-4 py-3 border border-[#C8A040]/30 bg-[#2C1206]/50 text-[#fdf6ee] placeholder-[#fdf6ee]/30 focus:outline-none focus:border-[#C8A040] transition-colors"
                placeholder="Search gift sets..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                style={{ fontFamily: "'Lato', sans-serif" }}
              />
              <div className="relative">
                <button
                  onClick={() => setSortOpen((v) => !v)}
                  className="w-full sm:w-52 flex items-center justify-between gap-2 px-4 py-3 border border-[#C8A040]/30 bg-[#2C1206]/50 text-[#fdf6ee] text-sm hover:border-[#C8A040] transition-colors"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  <span>{currentSort.label}</span>
                  <ChevronDown size={15} className={`text-[#C8A040] transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`} />
                </button>
                {sortOpen && (
                  <div className="absolute right-0 mt-1 w-52 bg-[#1A0802] border border-[#C8A040]/20 shadow-2xl z-30 overflow-hidden">
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors duration-150 ${
                          sortBy === opt.value
                            ? "bg-[#C8A040] text-[#1A0802]"
                            : "text-[#fdf6ee]/70 hover:bg-[#2C1206] hover:text-[#C8A040]"
                        }`}
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        {sortBy === opt.value && <span className="mr-2">✓</span>}
                        {opt.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Grid */}
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-8">
              {displayed.map((set) => (
                <GiftCard key={set.id} set={set} />
              ))}
            </div>

            {displayed.length === 0 && (
              <p
                className="mt-10 text-center text-[#fdf6ee]/65"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                No gift sets found. Try a different search term.
              </p>
            )}
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
