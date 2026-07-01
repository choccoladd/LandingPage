"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { products, type Product } from "../components/products-data";
import { slugify } from "../components/slug";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

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

function ProductCard({ product }: { product: Product }) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi! I'm interested in ordering: ${product.name} (${product.price})`);
    window.open(`https://wa.me/60196319373?text=${text}`, "_blank");
  };

  return (
    <motion.div
      layout
      className="group bg-card rounded-2xl overflow-hidden border border-[#3d1c0a]/10 hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      <Link href={`/products/${slugify(product.name)}`} className="relative overflow-hidden aspect-square bg-[#ecddc8] block">
        <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-[1.15] transition-transform duration-500" />
        {product.tag && (
          <span className="absolute top-3 left-3 bg-[#C8A040] text-[#fdf6ee] px-2 py-0.5 text-xs uppercase tracking-widest" style={{ fontFamily: "'DM Mono', monospace" }}>
            {product.tag}
          </span>
        )}
      </Link>
      <div className="p-3 sm:p-5 flex flex-col flex-1">
        <Link href={`/products/${slugify(product.name)}`}>
          <h3 className="text-[#2c1810] mb-1 hover:text-[#C8A040] transition-colors" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1rem" }}>
            {product.name}
          </h3>
        </Link>
        <p className="text-[#5C3E22] text-sm mb-4 flex-1" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.6 }}>
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[#C8A040]" style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: "1.1rem" }}>
            {product.price}
          </span>
          <button
            onClick={handleWhatsApp}
            className="px-4 py-2 bg-[#0A0402] text-[#fdf6ee] text-xs uppercase tracking-wider hover:bg-[#C8A040] hover:text-[#0A0402] transition-colors duration-200"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
          >
            Order
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function AllProductsPage() {
  const [search, setSearch] = useState("");
  const [sortBy, setSortBy] = useState<SortValue>("latest");
  const [sortOpen, setSortOpen] = useState(false);

  const displayedProducts = useMemo(() => {
    const filtered = products.filter((p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.description.toLowerCase().includes(search.toLowerCase())
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
      <div className="min-h-screen bg-[#FAF4EA] pt-36 pb-20">

          {/* Header */}
          <div className="text-center mb-12 px-6">
            <p className="text-[#C8A040] text-xs uppercase tracking-widest mb-3" style={{ fontFamily: "'DM Mono', monospace" }}>
              Complete Collection
            </p>
            <h1 className="text-[#1C0E06] mb-4" style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}>
              All Products
            </h1>
            <p className="text-[#5C3E22] max-w-2xl mx-auto" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.75 }}>
              Browse every item in our handcrafted collection and search for your favourite chocolate treat.
            </p>
          </div>

          {/* Sticky Search + Sort */}
          <div className="sticky top-24 sm:top-36 z-20 bg-[#FAF4EA] border-b border-[#1C0E06]/10 pt-2 pb-3 px-6 mb-8" style={{ boxShadow: '0 -20px 0 20px #FAF4EA, 0 2px 6px rgba(0,0,0,0.06)' }}>
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row gap-3">
            {/* Search */}
            <input
              className="flex-1 px-4 py-3 rounded-sm border border-[#1C0E06]/10 bg-white text-[#1C0E06] placeholder-[#7A5430]/50 focus:outline-none focus:border-[#C8A040] transition-colors"
              placeholder="Search products..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ fontFamily: "'Lato', sans-serif" }}
            />

            {/* Sort dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen((v) => !v)}
                className="w-full sm:w-52 flex items-center justify-between gap-2 px-4 py-3 rounded-sm border border-[#1C0E06]/10 bg-white text-[#1C0E06] text-sm hover:border-[#C8A040] transition-colors"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                <span>{currentSort.label}</span>
                <ChevronDown size={15} className={`text-[#C8A040] transition-transform duration-200 ${sortOpen ? "rotate-180" : ""}`} />
              </button>
              {sortOpen && (
                <div className="absolute right-0 mt-1 w-52 bg-white border border-[#1C0E06]/10 shadow-xl z-20 rounded-sm overflow-hidden">
                  {SORT_OPTIONS.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => { setSortBy(opt.value); setSortOpen(false); }}
                      className={`w-full text-left px-4 py-3 text-sm transition-colors duration-150 ${
                        sortBy === opt.value
                          ? "bg-[#0A0402] text-[#FAF4EA]"
                          : "text-[#1C0E06] hover:bg-[#FAF4EA] hover:text-[#C8A040]"
                      }`}
                      style={{ fontFamily: "'Lato', sans-serif" }}
                    >
                      {opt.value === sortBy && <span className="mr-2 text-[#C8A040]">✓</span>}
                      {opt.label}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          </div>

          {/* Grid */}
          <div className="max-w-7xl mx-auto px-6 mt-2">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
              {displayedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {displayedProducts.length === 0 && (
              <p className="mt-10 text-center text-[#5C3E22]" style={{ fontFamily: "'Lato', sans-serif" }}>
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
