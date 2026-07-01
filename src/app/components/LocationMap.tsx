"use client";

import dynamic from "next/dynamic";
import { useState } from "react";
import { MapPin, Phone, Mail, ExternalLink } from "lucide-react";
import type { MapLocation } from "./LeafletMap";

const LeafletMap = dynamic(() => import("./LeafletMap"), { ssr: false });

const locations: (MapLocation & {
  type: string;
  address: string;
  email: string;
  phone: string;
  hours: string;
  directionsUrl: string;
})[] = [
  {
    id: 1,
    type: "Registered Office",
    name: "Newbox Greens Ventures",
    address: "Blok G2-0-7, Jalan 5/76 D, Desa Pandan, 55100 Kuala Lumpur, Wilayah Persekutuan",
    email: "sufeil.newboxgreens@gmail.com",
    phone: "+60 19-631 9373",
    hours: "Mon – Sat: 10:00 AM – 8:00 PM",
    lat: 3.1355,
    lng: 101.7262,
    directionsUrl: "https://maps.google.com/?q=3.1355,101.7262",
  },
  {
    id: 2,
    type: "Processing Facility",
    name: "Choccoladd Processing Plant",
    address: "Lot PT 12621, Kawasan Perindustrian Nilai, 71900 Nilai, Negeri Sembilan",
    email: "sufeil.newboxgreens@gmail.com",
    phone: "+60 19-631 9373",
    hours: "Mon – Sat: 10:00 AM – 8:00 PM",
    lat: 2.8175,
    lng: 101.7950,
    directionsUrl: "https://maps.google.com/?q=2.8175,101.7950",
  },
];

const mapLocations: MapLocation[] = locations.map(({ id, name, lat, lng }) => ({
  id, name, lat, lng,
}));

export function LocationMap() {
  const [activeId, setActiveId] = useState(1);

  return (
    <section id="location" className="py-14 bg-[#F0DEC8]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-14">
          <p
            className="text-[#C8A040] text-xs uppercase tracking-widest mb-3"
            style={{ fontFamily: "'DM Mono', monospace" }}
          >
            Where to Find Us
          </p>
          <h2
            className="text-[#1C0E06]"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2rem, 4vw, 3rem)", fontWeight: 700 }}
          >
            Our Locations
          </h2>
          <div className="w-16 h-px bg-[#C8A040] mx-auto mt-4" />
        </div>

        {/* Map card */}
        <div className="rounded-3xl overflow-hidden shadow-2xl shadow-[#1C0E06]/10 grid md:grid-cols-5 min-h-[520px]">

          {/* ── Left: location list ── */}
          <div className="md:col-span-2 bg-white flex flex-col">
            <div className="px-7 py-6 border-b border-[#1C0E06]/8">
              <p
                className="text-[#1C0E06]/40 text-[10px] uppercase tracking-widest mb-1"
                style={{ fontFamily: "'DM Mono', monospace" }}
              >
                {locations.length} locations
              </p>
              <p
                className="text-[#1C0E06] font-semibold text-sm"
                style={{ fontFamily: "'Lato', sans-serif" }}
              >
                Click a location to view on map
              </p>
            </div>

            <div className="flex-1 overflow-y-auto divide-y divide-[#1C0E06]/6">
              {locations.map((loc) => {
                const isActive = loc.id === activeId;
                return (
                  <button
                    key={loc.id}
                    onClick={() => setActiveId(loc.id)}
                    className={`w-full text-left px-7 py-6 transition-colors duration-200 ${
                      isActive
                        ? "bg-[#FAF4EA] border-l-4 border-[#C8A040]"
                        : "hover:bg-[#FAF4EA]/60 border-l-4 border-transparent"
                    }`}
                  >
                    {/* Type badge */}
                    <span
                      className="inline-block text-[10px] uppercase tracking-widest px-2 py-0.5 rounded-full mb-3"
                      style={{
                        fontFamily: "'DM Mono', monospace",
                        background: isActive ? "#C8A040" : "#EDD9B0",
                        color: isActive ? "#0A0402" : "#7A5430",
                      }}
                    >
                      {loc.type}
                    </span>

                    <h3
                      className="text-[#1C0E06] mb-3"
                      style={{ fontFamily: "'Playfair Display', serif", fontWeight: 600, fontSize: "1.05rem" }}
                    >
                      {loc.name}
                    </h3>

                    <div className="space-y-2">
                      <div className="flex items-start gap-2.5">
                        <MapPin size={13} className="text-[#C8A040] mt-0.5 flex-shrink-0" />
                        <p
                          className="text-[#5C3E22] text-xs leading-relaxed"
                          style={{ fontFamily: "'Lato', sans-serif", fontWeight: 300 }}
                        >
                          {loc.address}
                        </p>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Mail size={13} className="text-[#C8A040] flex-shrink-0" />
                        <p className="text-[#5C3E22] text-xs" style={{ fontFamily: "'Lato', sans-serif" }}>
                          {loc.email}
                        </p>
                      </div>
                      <div className="flex items-center gap-2.5">
                        <Phone size={13} className="text-[#C8A040] flex-shrink-0" />
                        <p className="text-[#5C3E22] text-xs" style={{ fontFamily: "'Lato', sans-serif" }}>
                          {loc.phone}
                        </p>
                      </div>
                    </div>

                    <a
                      href={loc.directionsUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-1.5 mt-4 text-[#C8A040] text-xs hover:text-[#0A0402] transition-colors"
                      style={{ fontFamily: "'DM Mono', monospace" }}
                    >
                      Get Directions
                      <ExternalLink size={11} />
                    </a>
                  </button>
                );
              })}
            </div>
          </div>

          {/* ── Right: map ── */}
          <div className="md:col-span-3 min-h-[400px] relative z-0 isolate">
            <LeafletMap locations={mapLocations} activeId={activeId} />
          </div>

        </div>
      </div>
    </section>
  );
}
