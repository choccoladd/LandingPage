"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { nonFoodProducts, type NonFoodProduct } from "../components/non-food-data";
import { slugify } from "../components/slug";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const BG = "#0D0D0D";
const CARD_BG = "#1A1A1A";

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

function ProductCard({ product }: { product: NonFoodProduct }) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi! I'm interested in ordering: ${product.name} (${product.price})`);
    window.open(`https://wa.me/60196319373?text=${text}`, "_blank");
  };

  return (
    <motion.div
      layout
      className="group rounded-2xl overflow-hidden border border-white/8 hover:border-[#C8A040]/40 hover:shadow-xl hover:shadow-black/40 transition-all duration-300 flex flex-col"
      style={{ background: CARD_BG }}
    >
      <Link href={`/non-food/${slugify(product.name)}`} className="relative overflow-hidden aspect-square bg-[#111] block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-[1.15] transition-transform duration-500"
        />
        {product.tag && (
          <span
            className="absolute top-3 left-3 bg-[#C8A040] text-[#0D0D0D] px-2 py-0.5 text-xs uppercase tracking-widest"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {product.tag}
          </span>
        )}
      </Link>
      <div className="p-3 sm:p-5 flex flex-col flex-1">
        <p
          className="text-[#C8A040] text-[10px] uppercase tracking-widest mb-1"
          style={{ fontFamily: "'DM Mono', monospace" }}
        >
          {product.category}
        </p>
        <Link href={`/non-food/${slugify(product.name)}`}>
          <h3
            className="text-[#fdf6ee] mb-1 hover:text-[#C8A040] transition-colors"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1rem" }}
          >
            {product.name}
          </h3>
        </Link>
        <p
          className="text-[#fdf6ee]/75 text-sm mb-4 flex-1"
          style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.6 }}
        >
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span
            className="text-[#C8A040]"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem" }}
          >
            {product.price}
          </span>
          <button
            onClick={handleWhatsApp}
            className="px-4 py-2 bg-[#C8A040] text-[#0D0D0D] text-xs uppercase tracking-wider hover:bg-[#fdf6ee] transition-colors duration-200"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
          >
            Order
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function AllNonFoodPage() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortValue>("latest");
  const [sortOpen, setSortOpen] = useState(false);

  const displayedProducts = useMemo(() => {
    const filtered = nonFoodProducts.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase()) ||
      p.category.toLowerCase().includes(search.toLowerCase())
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
        <div className="min-h-screen pt-36 pb-20" style={{ background: BG }}>

          {/* Header */}
          <div className="text-center mb-12 px-6">
            <p
              className="text-[#C8A040] text-xs uppercase tracking-widest mb-3"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Beyond Chocolate
            </p>
            <h1
              className="text-[#fdf6ee] mb-4"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}
            >
              Non-Food Products
            </h1>
            <p
              className="text-[#fdf6ee]/80 mx-auto text-center max-w-xl"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.75 }}
            >
              Discover our cocoa-based skincare and wellness products, harnessing the natural power of Malaysian cacao.
            </p>
            <div className="w-16 h-0.5 bg-[#C8A040] mx-auto mt-4" />
          </div>

          {/* Sticky Search + Sort */}
          <div
            className="sticky top-24 sm:top-36 z-20 border-b border-white/8 pt-2 pb-3 mb-8"
            style={{ background: BG, boxShadow: `0 -20px 0 20px ${BG}, 0 2px 8px rgba(0,0,0,0.4)` }}
          >
            <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row gap-3">
              <input
                className="flex-1 px-4 py-3 border border-white/10 text-[#fdf6ee] placeholder-[#fdf6ee]/30 focus:outline-none focus:border-[#C8A040] transition-colors"
                style={{ background: CARD_BG, fontFamily: "'Lato', sans-serif" }}
                placeholder="Search products..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
              <div className="relative">
                <button
                  onClick={() => setSortOpen((v) => !v)}
                  className="w-full sm:w-52 flex items-center justify-between gap-2 px-4 py-3 border border-white/10 text-[#fdf6ee] text-sm hover:border-[#C8A040] transition-colors"
                  style={{ background: CARD_BG, fontFamily: "'Lato', sans-serif" }}
                >
                  <span>{currentSort.label}</span>
                  <ChevronDown size={15} className={`text-[#C8A040] transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`} />
                </button>
                {sortOpen && (
                  <div
                    className="absolute right-0 mt-1 w-52 border border-white/10 shadow-2xl z-30 overflow-hidden"
                    style={{ background: "#1A1A1A" }}
                  >
                    {SORT_OPTIONS.map((opt) => (
                      <button
                        key={opt.value}
                        onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                        className={`w-full text-left px-4 py-3 text-sm transition-colors duration-150 ${
                          sortBy === opt.value
                            ? "bg-[#C8A040] text-[#0D0D0D]"
                            : "text-[#fdf6ee]/70 hover:bg-white/5 hover:text-[#C8A040]"
                        }`}
                        style={{ fontFamily: "'Lato', sans-serif" }}
                      >
                        {opt.value === sortBy && <span className="mr-2">✓</span>}
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
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {displayedProducts.length === 0 && (
              <p className="mt-10 text-center text-[#fdf6ee]/65" style={{ fontFamily: "'Lato', sans-serif" }}>
                No products found. Try a different search term.
              </p>
            )}
          </div>
        </div>
      </motion.div>
      <Footer />
    </>
  );
}
