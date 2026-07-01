"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { products } from "./products-data";
import { slugify } from "./slug";

const featuredProducts = products.slice(0, 4);

type Product = (typeof products)[0];

function ProductCard({ product, index }: { product: Product; index: number }) {
  const handleWhatsApp = () => {
    const text = encodeURIComponent(`Hi! I'm interested in ordering: ${product.name} (${product.price})`);
    window.open(`https://wa.me/60196319373?text=${text}`, "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.85, delay: index * 0.15, ease: [0.22, 1, 0.36, 1] }}
      className="group bg-card rounded-2xl overflow-hidden border border-[#3d1c0a]/10 hover:shadow-xl hover:shadow-[#C8A040]/10 transition-shadow duration-300 flex flex-col"
    >
      <Link href={`/products/${slugify(product.name)}`} className="relative overflow-hidden aspect-square bg-[#ecddc8] block">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-[1.08] transition-transform duration-1000 ease-in-out"
        />
        {product.tag && (
          <span
            className="absolute top-3 left-3 bg-[#C8A040] text-[#fdf6ee] px-2 py-0.5 text-xs uppercase tracking-widest"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            {product.tag}
          </span>
        )}
      </Link>
      <div className="p-3 sm:p-5 flex flex-col flex-1">
        <Link href={`/products/${slugify(product.name)}`}>
          <h3
            className="text-[#2c1810] mb-1 min-h-[2.75rem] hover:text-[#C8A040] transition-colors"
            style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1rem", lineHeight: 1.4 }}
          >
            {product.name}
          </h3>
        </Link>
        <p
          className="text-[#5C3E22] text-sm mb-4 flex-1"
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
            className="btn-btt px-4 py-2 text-[#fdf6ee] text-xs uppercase tracking-wider"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
          >
            Order
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export function Products() {
  return (
    <section id="products" className="py-14" style={{ background: "#F0DEC8" }}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p
            className="text-[#C8A040] text-xs uppercase tracking-widest mb-3"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Choccoladd Range
          </p>
          <h2
            className="text-[#2c1810] mb-4"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}
          >
            Our Products
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A040] mx-auto" />
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-6">
          {featuredProducts.map((product, i) => (
            <ProductCard key={product.id} product={product} index={i} />
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            href="/all-products"
            className="inline-flex items-center justify-center px-8 py-3 bg-[#0A0402] text-[#FAF4EA] text-sm uppercase tracking-widest hover:bg-[#C8A040] hover:text-[#0A0402] transition-colors duration-300"
            style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}
