import type { Metadata } from "next";
import { products } from "../components/products-data";

export const metadata: Metadata = {
  title: "All Products",
  description:
    "Browse Choccoladd's full collection of handcrafted Malaysian cocoa chocolates — pralines, panning chocolates, keto chocolates, wellness cocoa drinks and more. Order via WhatsApp.",
  alternates: {
    canonical: "https://www.choccoladd.com/all-products",
  },
  openGraph: {
    title: "All Products | Choccoladd",
    description:
      "Browse our full collection of handcrafted Malaysian cocoa chocolates — pralines, keto chocolates, wellness drinks and more.",
    url: "https://www.choccoladd.com/all-products",
    images: [
      {
        url: "/images/products/Praline-chocolate-80.jpg",
        alt: "Choccoladd handcrafted Malaysian cocoa chocolates",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "All Products | Choccoladd",
    description:
      "Browse our full collection of handcrafted Malaysian cocoa chocolates — pralines, keto chocolates, wellness drinks and more.",
    images: ["/images/products/Praline-chocolate-80.jpg"],
  },
};

function parsePriceValue(price: string) {
  const match = price.replace(/[^\d.]/g, "");
  return match || "0";
}

const productListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: products.map((p, i) => ({
    "@type": "ListItem",
    position: i + 1,
    item: {
      "@type": "Product",
      name: p.name,
      description: p.description,
      image: `https://www.choccoladd.com${p.image}`,
      brand: { "@type": "Brand", name: "Choccoladd" },
      offers: {
        "@type": "Offer",
        priceCurrency: "MYR",
        price: parsePriceValue(p.price),
        availability: "https://schema.org/InStock",
        url: "https://www.choccoladd.com/all-products",
      },
    },
  })),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productListSchema) }}
      />
      {children}
    </>
  );
}
