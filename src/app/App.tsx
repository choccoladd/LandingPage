"use client";

import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Products } from "./components/Products";
import { GiftSets } from "./components/GiftSets";
import { InStoreExclusive } from "./components/InStoreExclusive";
import { Story } from "./components/Story";
import { CompanyProfile } from "./components/CompanyProfile";
import { Contact } from "./components/Contact";
import { LocationMap } from "./components/LocationMap";
import { Footer } from "./components/Footer";
import { WhatsAppButton } from "./components/WhatsAppButton";

export default function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div
      className="min-h-screen overflow-x-hidden"
      style={{ fontFamily: "'Lato', sans-serif" }}
    >
      <Navbar />
      <Hero />
      <Story />
      <CompanyProfile />
<Products />
      <GiftSets />
      <InStoreExclusive />
      <LocationMap />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
