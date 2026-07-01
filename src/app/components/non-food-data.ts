export type NonFoodProduct = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  tag: string | null;
  category: string;
};

export const nonFoodProducts: NonFoodProduct[] = [
  // SKINCARE
  {
    id: 1,
    name: "Facial Foam",
    price: "RM 55.00",
    description: "A gentle daily facial foam infused with natural cocoa extracts. Deeply cleanses while nourishing the skin for a soft, radiant complexion.",
    image: "/images/NonFood/facial-foam.jpg",
    tag: null,
    category: "Skincare",
  },
  {
    id: 2,
    name: "Facial Serum",
    price: "RM 52.00",
    description: "A lightweight cocoa-based facial serum packed with antioxidants to brighten, firm, and revitalise the skin with every drop.",
    image: "/images/NonFood/facial-serum.jpg",
    tag: null,
    category: "Skincare",
  },
  {
    id: 3,
    name: "Day Cream",
    price: "RM 45.00",
    description: "A hydrating day cream enriched with cocoa butter to protect and moisturise the skin throughout the day.",
    image: "/images/NonFood/day-cream.jpg",
    tag: null,
    category: "Skincare",
  },
  {
    id: 4,
    name: "Night Cream",
    price: "RM 45.00",
    description: "A nourishing overnight cream with cocoa extracts that works while you sleep to restore and rejuvenate your skin.",
    image: "/images/NonFood/night-cream.jpg",
    tag: null,
    category: "Skincare",
  },
  {
    id: 5,
    name: "Cocoa Skincare Set",
    price: "RM 250.00",
    description: "The complete Choccoladd skincare routine. Includes Facial Foam, Day Cream, Night Cream, and Facial Serum bundled at a special set price.",
    image: "/images/NonFood/cocoa-skincare-set.jpg",
    tag: "Bundle",
    category: "Skincare",
  },

  // ORAL CARE
  {
    id: 6,
    name: "Mismis Cocoa Toothpaste",
    price: "RM 12.90",
    description: "A natural cocoa-infused toothpaste that gently whitens and freshens breath while keeping your enamel strong and healthy.",
    image: "/images/NonFood/mismis-cocoa-toothpaste.jpg",
    tag: null,
    category: "Oral Care",
  },
];
