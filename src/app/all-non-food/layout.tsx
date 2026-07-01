import type { Metadata } from "next";
import { nonFoodProducts } from "../components/non-food-data";

export const metadata: Metadata = {
  title: "Cocoa Wellness & Skincare",
  description:
    "Discover Choccoladd's cocoa-based wellness and skincare products — harnessing the natural power of Malaysian cacao for your health and beauty routine.",
  alternates: {
    canonical: "https://www.choccoladd.com/all-non-food",
  },
  openGraph: {
    title: "Cocoa Wellness & Skincare | Choccoladd",
    description:
      "Cocoa-based wellness and skincare products harnessing the natural power of authentic Malaysian cacao.",
    url: "https://www.choccoladd.com/all-non-food",
    images: [
      {
        url: "/images/NonFood/cocoa-skincare-set.jpg",
        alt: "Choccoladd cocoa wellness and skincare products",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cocoa Wellness & Skincare | Choccoladd",
    description:
      "Cocoa-based wellness and skincare products harnessing the natural power of authentic Malaysian cacao.",
    images: ["/images/NonFood/cocoa-skincare-set.jpg"],
  },
};

function parsePriceValue(price: string) {
  const match = price.replace(/[^\d.]/g, "");
  return match || "0";
}

const nonFoodListSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  itemListElement: nonFoodProducts.map((p, i) => ({
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
        url: "https://www.choccoladd.com/all-non-food",
      },
    },
  })),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(nonFoodListSchema) }}
      />
      {children}
    </>
  );
}
