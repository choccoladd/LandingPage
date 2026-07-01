import { MetadataRoute } from "next";
import { products } from "./components/products-data";
import { giftSets } from "./components/gift-sets-data";
import { nonFoodProducts } from "./components/non-food-data";
import { slugify } from "./components/slug";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://www.choccoladd.com";
  const now = new Date();

  return [
    {
      url: base,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${base}/all-products`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/all-gift-sets`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${base}/all-non-food`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...products.map((p) => ({
      url: `${base}/products/${slugify(p.name)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...giftSets.map((s) => ({
      url: `${base}/gift-sets/${slugify(s.name)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
    ...nonFoodProducts.map((p) => ({
      url: `${base}/non-food/${slugify(p.name)}`,
      lastModified: now,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
