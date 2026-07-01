"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Instagram, Facebook } from "lucide-react";

const TikTokIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.22 8.22 0 0 0 4.84 1.56V6.79a4.85 4.85 0 0 1-1.07-.1z"/>
  </svg>
);

const pageLinks = ["/all-products", "/all-gift-sets", "/all-non-food"];

const navItems = [
  { label: "Home",         href: "#home" },
  { label: "Our Story",    href: "#story" },
  { label: "Our Products", href: "/all-products" },
  { label: "Gift Sets",    href: "/all-gift-sets" },
  { label: "Non-Food",     href: "/all-non-food" },
  { label: "Contact Us",   href: "#contact" },
];

export function Footer() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  const handleLink = (href: string) => {
    if (pageLinks.includes(href)) {
      router.push(href);
    } else if (isHome) {
      const el = document.querySelector(href);
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else {
      router.push("/" + href);
    }
  };

  return (
    <footer className="bg-[#0A0402] text-[#fdf6ee]/80 py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_2fr] gap-10 mb-10">

          {/* About Us */}
          <div>
            <p
              className="text-[#C8A040] text-xs uppercase tracking-widest mb-4"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              About Us
            </p>
            <p
              className="text-sm max-w-xs mb-6"
              style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.75 }}
            >
              Premium praline chocolates, panning treats, and herbal cocoa sachet drinks by Newbox Greens Ventures, crafted from the finest Malaysian cacao.
            </p>
            {/* Logo row */}
            <div className="flex flex-wrap items-center gap-3 max-w-full">
              <img src="/images/logo/LogoChoccoladd.png" alt="Choccoladd" className="h-16 w-auto object-contain flex-shrink-0" />
              <div className="h-16 w-16 flex-shrink-0 rounded-full bg-white flex items-center justify-center p-1.5" style={{ minWidth: "4rem" }}>
                <img src="/images/logo/LogoNBG.png" alt="Newbox Greens Ventures — Choccoladd parent company" className="h-full w-full object-contain" />
              </div>
              <div className="h-16 w-16 flex-shrink-0 rounded-full bg-white flex items-center justify-center p-1.5" style={{ minWidth: "4rem" }}>
                <img src="/images/logo/LogoLKM.png" alt="Lembaga Koko Malaysia — in collaboration with Choccoladd" className="h-full w-full object-contain" />
              </div>
            </div>
          </div>

          {/* Choccoladd nav links */}
          <div>
            <p
              className="text-[#C8A040] text-xs uppercase tracking-widest mb-4"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Choccoladd
            </p>
            <ul className="space-y-2.5 text-sm" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
              {navItems.map(({ href, label }) => (
                <li key={href}>
                  <button
                    onClick={() => handleLink(href)}
                    className="hover:text-[#C8A040] transition-colors cursor-pointer text-left"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Store */}
          <div>
            <p
              className="text-[#C8A040] text-xs uppercase tracking-widest mb-4"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Store
            </p>
            <ul className="space-y-2.5 text-sm" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}>
              <li>
                <button
                  onClick={() => {
                    if (isHome) {
                      document.querySelector("#location")?.scrollIntoView({ behavior: "smooth" });
                    } else {
                      router.push("/#location");
                    }
                  }}
                  className="hover:text-[#C8A040] transition-colors cursor-pointer text-left text-sm"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  Location
                </button>
              </li>
              <li>
                <a
                  href="https://wa.me/60196319373?text=Hi!%20I%20would%20like%20to%20place%20an%20order."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#C8A040] transition-colors text-sm"
                  style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                >
                  Online Shop
                </a>
              </li>
            </ul>
          </div>

          {/* Our Updates */}
          <div>
            <p
              className="text-[#C8A040] text-xs uppercase tracking-widest mb-4"
              style={{ fontFamily: "'DM Mono', monospace" }}
            >
              Our Updates
            </p>
            {/* Mailing list */}
            <p className="text-sm mb-3" style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300, lineHeight: 1.6 }}>
              Join our mailing list to receive exclusive offers and news straight to your inbox.
            </p>
            <div className="flex flex-col gap-2 mb-6">
              <input
                type="email"
                placeholder="E-mail"
                className="w-full px-4 py-2.5 bg-white border border-white/20 text-[#1C0E06] placeholder-[#7A5430]/60 text-sm focus:outline-none focus:border-[#C8A040] transition-colors"
                style={{ fontFamily: "'Lato', sans-serif" }}
              />
              <button
                className="w-full py-2.5 bg-[#fdf6ee] border border-[#fdf6ee]/20 text-[#1C0E06] text-xs uppercase tracking-widest hover:bg-[#C8A040] hover:text-[#0A0402] hover:border-[#C8A040] transition-colors duration-200"
                style={{ fontFamily: "'Lato', sans-serif", fontWeight: 700 }}
              >
                Subscribe
              </button>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/chocco_ladd?utm_source=qr&igsh=Yjg0MDAwNnBiYzhs" },
                { icon: Facebook,  href: "https://www.facebook.com/people/Choccoladd/61568651560003/?rdid=JtIatxt8CJ7M41LK&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1Lo4TRrPY4%2F" },
              ].map(({ icon: Icon, href }) => (
                <a
                  key={href}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-[#fdf6ee]/15 border border-[#fdf6ee]/20 flex items-center justify-center text-[#fdf6ee] hover:bg-[#C8A040] hover:border-[#C8A040] hover:text-[#0A0402] transition-colors duration-200"
                >
                  <Icon size={16} />
                </a>
              ))}
              <a
                href="https://www.tiktok.com/@choccoladd?_r=1&_t=ZS-97YoQtSh5b2"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-[#fdf6ee]/15 border border-[#fdf6ee]/20 flex items-center justify-center text-[#fdf6ee] hover:bg-[#C8A040] hover:border-[#C8A040] hover:text-[#0A0402] transition-colors duration-200"
              >
                <TikTokIcon />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-[#fdf6ee]/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>
            Newbox Greens Ventures (SA0615701-A) © Choccoladd
          </p>
          <p className="text-xs" style={{ fontFamily: "'DM Mono', monospace" }}>
            Made with ♥ in Malaysia
          </p>
        </div>
      </div>
    </footer>
  );
}
