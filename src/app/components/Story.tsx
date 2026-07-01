"use client";

import { motion } from "motion/react";

const milestones = [
  { year: "2010", event: "Sufeil and Harun met as work colleagues, bonding over technology ideas and entrepreneurial dreams in KL cafés." },
  { year: "2024", event: "Harun began exploring his mother's land for a commercial venture. Together they visited a high-end chocolate gallery and discovered the magic of single-origin cocoa." },
  { year: "Jun 2024", event: "Founded Newbox Greens Ventures (Reg. No. 202403155455), producing and marketing cocoa-derived products under the brand Choccoladd." },
  { year: "Today", event: "Building a sustainable cocoa supply chain from farm to fork, with processing operations in Nilai, Negeri Sembilan, in collaboration with Lembaga Koko Malaysia." },
];

export function Story() {
  return (
    <section id="story" className="py-14 bg-[#fdf6ee] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Images */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="relative pb-14 md:pb-8 pr-4 md:pr-0"
          >
            {/* Big frame */}
            <div className="relative rounded-sm overflow-hidden aspect-[4/5]">
              <img
                src="/images/general/OurStorybg3.png"
                alt="Choccoladd story — handcrafting premium chocolates from authentic Malaysian cacao"
                className="w-full h-full object-cover object-center"
              />
            </div>
            {/* Floating inset — LKMLogo */}
            <div className="absolute -bottom-8 right-0 md:-right-6 w-36 h-36 md:w-48 md:h-48 border-4 border-[#fdf6ee] rounded-sm overflow-hidden shadow-2xl bg-white flex items-center justify-center p-3">
              <img
                src="/images/general/LKMLogo.png"
                alt="Lembaga Koko Malaysia"
                className="w-full h-full object-contain"
              />
            </div>
            {/* Stat badge */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute top-6 right-0 md:-right-4 bg-[#C8A040] text-[#2c1810] p-4 shadow-xl"
            >
              <p
                className="text-3xl leading-none"
                style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700 }}
              >
                2024
              </p>
              <p className="text-xs uppercase tracking-wider mt-1" style={{ fontFamily: "'DM Mono', monospace" }}>
                Est. 2024
              </p>
            </motion.div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.0 }}
            className="pb-8"
          >
            <p
              className="text-[#C8A040] text-xs uppercase tracking-widest mb-3"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Who We Are
            </p>
            <h2
              className="text-[#2c1810] mb-6"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}
            >
              Our Story
            </h2>
            <p
              className="text-[#5C3E22] mb-5"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: "1rem", lineHeight: 1.85 }}
            >
              Choccoladd began with a friendship. In 2010, Sufeil and Harun crossed paths as work colleagues, spending countless hours in cafés brainstorming ideas, from cloud storage platforms to the next big thing in tech. Though life took them on different paths, their bond and shared ambition never faded.
            </p>
            <p
              className="text-[#5C3E22] mb-10"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, fontSize: "1rem", lineHeight: 1.85 }}
            >
              In 2024, when Harun began exploring his mother's land for a commercial venture, Sufeil pitched idea after idea. One visit to a high-end chocolate gallery sparked everything. The discovery of single-origin cocoa showed them how a humble bean could carry both social impact and business potential. That moment became the seed of Newbox Greens Ventures and its brand, Choccoladd.
            </p>

            {/* Timeline */}
            <div className="space-y-5">
              {milestones.map((m, i) => (
                <motion.div
                  key={m.year}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.15 }}
                  className="flex items-start gap-4"
                >
                  <span
                    className="text-[#C8A040] flex-shrink-0 w-12"
                    style={{ fontFamily: "'DM Mono', monospace", fontSize: "0.8rem", fontWeight: 500 }}
                  >
                    {m.year}
                  </span>
                  <div className="flex items-start gap-3 flex-1">
                    <div className="w-px h-full min-h-[24px] bg-[#C8A040]/30 flex-shrink-0 mt-1.5" />
                    <p
                      className="text-[#2c1810] text-sm"
                      style={{ fontFamily: "'Lato', sans-serif", lineHeight: 1.65 }}
                    >
                      {m.event}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
