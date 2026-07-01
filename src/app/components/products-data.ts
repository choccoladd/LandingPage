export type Product = {
  id: number;
  name: string;
  price: string;
  description: string;
  image: string;
  tag: string | null;
  category: string;
};

export const products: Product[] = [
  // ── CHOCOLATE ───────────────────────────────────────────────────────────
  {
    id: 1,
    name: "80% Cocoa Chocolate Praline",
    price: "RM 10.00",
    description: "Handcrafted pralines from premium 80% Malaysian cocoa. Rich and velvety in every bite. 4 units per box, 40g each.",
    image: "/images/products/Praline-chocolate-80.jpg",
    tag: "Bestseller",
    category: "Chocolate",
  },
  {
    id: 2,
    name: "Panning Chocolates Almond",
    price: "RM 9.50",
    description: "Roasted almonds enrobed in smooth panning chocolate. A satisfying crunch with rich cocoa flavour. 8 units per pack, 40g each.",
    image: "/images/products/panning-almond-chocolates.jpg",
    tag: "Popular",
    category: "Chocolate",
  },
  {
    id: 3,
    name: "Keto Coffee Chocolates",
    price: "RM 18.00",
    description: "Dark 80% cocoa chocolates infused with real coffee. A keto-friendly treat for coffee and chocolate lovers.",
    image: "/images/products/keto-coffee-chocolates.jpg",
    tag: "Keto",
    category: "Chocolate",
  },
  {
    id: 4,
    name: "Keto Chocolates Seasalt",
    price: "RM 18.00",
    description: "Dark 80% cocoa chocolates with a delicate touch of sea salt. Keto-friendly and intensely satisfying.",
    image: "/images/products/keto-seasalt-chocolates.jpg",
    tag: "Keto",
    category: "Chocolate",
  },
  {
    id: 5,
    name: "Keto Prebiotic Chocolates",
    price: "RM 18.00",
    description: "Dark chocolates enriched with prebiotic fibre. Good for gut health without compromising on rich cocoa flavour.",
    image: "/images/products/keto-prebiotic-chocolates.jpg",
    tag: "Keto",
    category: "Chocolate",
  },

  // ── BEVERAGES ────────────────────────────────────────────────────────────
  {
    id: 6,
    name: "Cocoa Milk Chocolate Drink",
    price: "RM 30.00",
    description: "A creamy cocoa milk drink made from real Malaysian cocoa. Simply add hot water and enjoy. 8 sachets per pack, 50g each.",
    image: "/images/products/cocoa-milk-chocolate-drink.jpg",
    tag: null,
    category: "Beverages",
  },
  {
    id: 7,
    name: "Nafiyya Cocoa Leaf Tea",
    price: "RM 18.90",
    description: "A tea crafted from sun-dried Malaysian cocoa leaves. Light, earthy and smooth with natural antioxidants. 12 sachets per pack, 38g each.",
    image: "/images/products/nafiyya-cocoa-leaf-tea.jpg",
    tag: "New",
    category: "Beverages",
  },
  {
    id: 8,
    name: "Cocoa With Coconut Sugar Drinks Powder",
    price: "RM 35.00",
    description: "Cocoa drink sweetened with coconut sugar for a wholesome, lower-GI indulgence. 8 sachets per pack, 50g each.",
    image: "/images/products/cocoa-coconut-sugar-drink.jpg",
    tag: null,
    category: "Beverages",
  },
  {
    id: 9,
    name: "Cocoa With Tongkat Ali Drinks Powder",
    price: "RM 35.00",
    description: "Cocoa drink enriched with Tongkat Ali, known for natural energy and vitality. 8 sachets per pack, 50g each.",
    image: "/images/products/cocoa-tongkat-ali-drink.jpg",
    tag: "Wellness",
    category: "Beverages",
  },
  {
    id: 10,
    name: "Cocoa With Kacip Fatimah Drinks Powder",
    price: "RM 35.00",
    description: "Cocoa drink blended with Kacip Fatimah, a traditional herb prized for women's wellness. 8 sachets per pack, 50g each.",
    image: "/images/products/cocoa-kacip-fatimah-drink.jpg",
    tag: "Wellness",
    category: "Beverages",
  },
];
