export type GiftSet = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  icon: "Gift" | "Heart" | "Star" | "Package" | "Sparkles";
  accent: string;
  occasion: string;
};

export const giftSets: GiftSet[] = [
  {
    id: 1,
    name: "Cocoa Products Grand Gifts Set",
    price: "From RM 80.00",
    description: "A grand curated set featuring all types of Choccoladd products. Fully customizable for any occasion or recipient.",
    image: "/images/gift-sets/cocoa-grand-gift-set.jpg",
    icon: "Package",
    accent: "#C8A040",
    occasion: "All Occasions",
  },
  {
    id: 2,
    name: "Gifts For Her / His",
    price: "From RM 50.00",
    description: "A thoughtful gift set for birthdays, anniversaries, and congratulations. Tailored for someone special.",
    image: "/images/gift-sets/gifts-for-her-his.jpg",
    icon: "Heart",
    accent: "#c4504a",
    occasion: "Personal",
  },
  {
    id: 3,
    name: "Corporate / Business Gifts Set",
    price: "From RM 50.00",
    description: "Corporate gift sets ideal for clients, partners, and business events. Bulk orders and branded packaging available.",
    image: "/images/gift-sets/corporate-business-gift-set.jpg",
    icon: "Star",
    accent: "#c4504a",
    occasion: "Corporate",
  },
  {
    id: 4,
    name: "Goodies (Praline Chocolates)",
    price: "RM 2.00 / pcs",
    description: "80% cocoa praline chocolates priced per piece. Perfect as event goodies, door gifts, or add-ons to any gift set.",
    image: "/images/gift-sets/goodies-praline-chocolates.jpg",
    icon: "Gift",
    accent: "#C8A040",
    occasion: "Events",
  },
];
