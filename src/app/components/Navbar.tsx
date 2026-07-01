"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Our Products", href: "/all-products", isPage: true },
  { label: "Gift Sets", href: "/all-gift-sets", isPage: true },
  { label: "Our Story", href: "#story" },
  { label: "Non-Food", href: "/all-non-food", isPage: true },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLink = (href: string, isPage?: boolean) => {
    setIsOpen(false);
    if (isPage) {
      router.push(href);
    } else if (isHome) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/" + href);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Black announcement bar */}
      <div className="hidden sm:flex items-center justify-center bg-[#0A0402] py-2 px-4 gap-4">
        <p className="text-[#fdf6ee]/75 text-[9px] tracking-[0.18em] uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>Handcrafted in Malaysia</p>
        <span className="text-[#C8A040]/40 text-[9px]">·</span>
        <p className="text-[#C8A040] text-[10px] tracking-[0.22em] uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>In Collaboration with Lembaga Koko Malaysia</p>
        <span className="text-[#C8A040]/40 text-[9px]">·</span>
        <p className="text-[#fdf6ee]/75 text-[9px] tracking-[0.18em] uppercase" style={{ fontFamily: "'DM Mono', monospace" }}>100% Natural Cacao</p>
      </div>

      {/* Main navbar */}
      <div
        className={`transition-all duration-300 ${
          !isHome || scrolled || isOpen
            ? "bg-[#FAF4EA]/98 backdrop-blur-sm shadow-sm border-b border-black/8"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative">
          {/* Logo */}
          <a
            href="/"
            onClick={(e) => { e.preventDefault(); handleLink("#home"); }}
            className="flex items-center gap-2 group"
          >
            <img
              src="/images/logo/LogoChoccoladd.png"
              alt="Choccoladd"
              className="h-16 w-auto object-contain"
            />
          </a>

          {/* Desktop links — pinned to centre of the bar */}
          <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleLink(link.href, link.isPage); }}
                  className="text-[#1C0E06]/70 hover:text-[#C8A040] transition-colors duration-200 text-sm tracking-wide"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 400, letterSpacing: "0.06em" }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); handleLink("#contact"); }}
            className="hidden md:inline-block px-5 py-2 bg-[#0A0402] text-[#FAF4EA] text-sm rounded-sm hover:bg-[#C8A040] hover:text-[#0A0402] transition-colors duration-200"
            style={{ fontFamily: "'Lato', sans-serif", letterSpacing: "0.08em", fontWeight: 600 }}
          >
            Get in Touch
          </a>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-[#0A0402] p-1"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden overflow-hidden bg-[#FAF4EA] border-t border-black/10 shadow-lg"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.href}
                  href={link.href}
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.35, delay: i * 0.1, ease: "easeOut" }}
                  onClick={(e) => { e.preventDefault(); handleLink(link.href, link.isPage); }}
                  className="text-[#1C0E06] py-2 border-b border-black/8 text-sm tracking-wide"
                  style={{ fontFamily: "'Lato', sans-serif" }}
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href="#contact"
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.35, delay: navLinks.length * 0.1, ease: "easeOut" }}
                onClick={(e) => { e.preventDefault(); handleLink("#contact"); }}
                className="mt-1 px-5 py-3 bg-[#0A0402] text-[#FAF4EA] text-sm text-center uppercase tracking-widest hover:bg-[#C8A040] hover:text-[#0A0402] transition-colors duration-200"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
              >
                Get in Touch
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
