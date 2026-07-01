"use client";

import { Leaf, PackageCheck, MessageCircle } from "lucide-react";

const items = [
  {
    icon: Leaf,
    text: "100% AUTHENTIC MALAYSIAN CACAO",
  },
  {
    icon: PackageCheck,
    text: "FRESHLY PACKED WITH INSULATED FOIL & ICE-PACKS",
  },
  {
    icon: MessageCircle,
    text: "EASY ORDERING VIA WHATSAPP",
  },
];

export function TrustBar() {
  return (
    <div className="bg-[#141414] py-4">
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-row items-center justify-center gap-8 overflow-x-auto">
          {items.map(({ icon: Icon, text }, i) => (
            <div key={i} className="flex items-center gap-3 whitespace-nowrap">
              <Icon size={22} className="text-[#fdf6ee]/70 flex-shrink-0" strokeWidth={1.3} />
              <span
                className="text-[#fdf6ee]/70 text-[11px] tracking-[0.15em] uppercase whitespace-nowrap"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {text}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
