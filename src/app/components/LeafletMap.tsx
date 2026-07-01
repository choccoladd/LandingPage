"use client";

import { useEffect, useRef } from "react";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

export type MapLocation = {
  id: number;
  name: string;
  lat: number;
  lng: number;
};

function goldIcon(active: boolean) {
  return L.divIcon({
    className: "",
    iconSize: [28, 36],
    iconAnchor: [14, 36],
    popupAnchor: [0, -36],
    html: `
      <div style="display:flex;flex-direction:column;align-items:center;">
        <div style="
          width:22px;height:22px;
          background:${active ? "#FAF4EA" : "#C8A040"};
          border:3px solid ${active ? "#C8A040" : "#0A0402"};
          border-radius:50% 50% 50% 0;
          transform:rotate(-45deg);
          box-shadow:0 3px 10px rgba(0,0,0,0.5);
        "></div>
      </div>
    `,
  });
}

export default function LeafletMap({
  locations,
  activeId,
}: {
  locations: MapLocation[];
  activeId: number;
}) {
  const containerRef  = useRef<HTMLDivElement>(null);
  const mapRef        = useRef<L.Map | null>(null);
  const markersRef    = useRef<Record<number, L.Marker>>({});

  /* Mount map once */
  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      zoomControl: false,
      scrollWheelZoom: false,
    });
    mapRef.current = map;

    L.control.zoom({ position: "topright" }).addTo(map);

    L.tileLayer(
      "https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png",
      {
        attribution:
          '© <a href="https://openstreetmap.org">OpenStreetMap</a> © <a href="https://carto.com">CARTO</a>',
        subdomains: "abcd",
        maxZoom: 20,
      }
    ).addTo(map);

    locations.forEach((loc) => {
      const marker = L.marker([loc.lat, loc.lng], {
        icon: goldIcon(loc.id === activeId),
      })
        .addTo(map)
        .bindPopup(
          `<b style="font-family:'Playfair Display',serif;color:#1C0E06">${loc.name}</b>`,
          { className: "leaflet-popup-cocoa" }
        );
      markersRef.current[loc.id] = marker;
    });

    // Fit map to show all markers with padding
    const bounds = L.latLngBounds(locations.map((loc) => [loc.lat, loc.lng]));
    map.fitBounds(bounds, { padding: [60, 60] });

    /* Ctrl+scroll / pinch → zoom; plain scroll → pass through to page */
    const handleWheel = (e: WheelEvent) => {
      if (e.ctrlKey) {
        e.preventDefault();
        e.deltaY < 0 ? map.zoomIn(1) : map.zoomOut(1);
      }
      // no preventDefault on plain scroll — page scrolls normally
    };

    containerRef.current.addEventListener("wheel", handleWheel, { passive: false });

    return () => {
      containerRef.current?.removeEventListener("wheel", handleWheel);
      map.remove();
      mapRef.current = null;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  /* Pan + update markers when active changes */
  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    locations.forEach((loc) => {
      markersRef.current[loc.id]?.setIcon(goldIcon(loc.id === activeId));
    });

    const active = locations.find((l) => l.id === activeId);
    if (active) {
      map.flyTo([active.lat, active.lng], 14, { duration: 1.2 });
      markersRef.current[active.id]?.openPopup();
    }
  }, [activeId, locations]);

  return (
    <div className="relative z-0 isolate w-full h-full min-h-[400px]">
      <div ref={containerRef} className="w-full h-full" />
    </div>
  );
}
