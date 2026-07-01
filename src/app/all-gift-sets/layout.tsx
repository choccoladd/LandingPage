import type { Metadata } from "next";
import { giftSets } from "../components/gift-sets-data";

export const metadata: Metadata = {
  title: "Gift Sets",
  description:
    "Shop Choccoladd's curated chocolate gift sets — perfect for birthdays, weddings, corporate events and celebrations. Handcrafted from premium Malaysian cacao. Order via WhatsApp.",
  alternates: {
    canonical: "https://www.choccoladd.com/all-gift-sets",
  },
  openGraph: {
    title: "Chocolate Gift Sets | Choccoladd",
    description:
      "Curated chocolate gift sets for every occasion — birthdays, weddings, corporate events. Handcrafted from premium Malaysian cacao.",
    url: "https://www.choccoladd.com/all-gift-sets",
    images: [
      {
        url: "/images/gift-sets/cocoa-grand-gift-set.jpg",
        alt: "Choccoladd curated chocolate gift sets",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Chocolate Gift Sets | Choccoladd",
    description:
      "Curated chocolate gift sets for every occasion — birthdays, weddings, corporate events. Handcrafted from premium Malaysian cacao.",
    images: ["/images/gift-sets/cocoa-grand-gift-set.jpg"],
  },
};

function parsePriceValue(price: string) {
  const match = price.replace(/[^\d.]/g, "");
  return match || "0";
}

const giftSetListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: giftSets.map((set, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: set.name,
      description: set.description,
      image: `https://www.choccoladd.com${set.image}`,
      brand: { "@type": "Brand", name: "Choccoladd" },
      offers: {
        "@type": "Offer",
        priceCurrency: "MYR",
        price: parsePriceValue(set.price),
        availability: "https://schema.org/InStock",
        url: "https://www.choccoladd.com/all-gift-sets",
      },
    },
  })),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(giftSetListSchema) }}
      />
      {children}
    </>
  );
}
