"use client";

import { motion } from "motion/react";

const exclusiveItems = [
  {
    id: 1,
    name: "Chocolate Shakes",
    image: "/images/InStore/chocolate-shakes.jpg",
    description: "Rich, indulgent chocolate milkshakes blended with our premium house chocolate.",
  },
  {
    id: 2,
    name: "Sandwiches",
    image: "/images/InStore/sandwiches.jpg",
    description: "24pcs / Box. Available in Tuna and Egg Mayo.",
  },
];

export function InStoreExclusive() {
  return (
    <section className="py-8" style={{ background: "#0D0D0D" }}>
      <div className="max-w-5xl mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <h2
            className="text-[#fdf6ee]"
            style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
              fontWeight: 700,
              letterSpacing: "0.08em",
            }}
          >
            Our In-Store Exclusive
          </h2>
          <div className="w-16 h-0.5 bg-[#C8A040] mx-auto mt-4" />
        </motion.div>

        {/* Product Cards */}
        <div className="grid grid-cols-2 gap-6 md:gap-12 max-w-2xl mx-auto">
          {exclusiveItems.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: i * 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-full aspect-square overflow-hidden rounded-xl border border-white/10 group-hover:border-[#C8A040]/60 transition-all duration-300 mb-4" style={{ background: "#1A1A1A" }}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-[1.05] transition-transform duration-1000 ease-in-out"
                />
              </div>

              <h3
                className="text-[#fdf6ee] uppercase tracking-widest text-sm mb-1.5"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
              >
                {item.name}
              </h3>

              <p
                className="text-[#fdf6ee]/65 text-xs leading-relaxed"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
              >
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
