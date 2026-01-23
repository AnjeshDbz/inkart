import { Product } from "../../types";

/* -----------------------------------
   PRODUCTS (using your existing images)
------------------------------------ */

export const products: Product[] = [
  {
    id: "p1",
    slug: "asus-rog-laptop",
    title: "Asus ROG Gaming Laptop",
    image: "/images/products/asus-rog.png",
    price: 72999,
    mrp: 85999,
    rating: 4.6,
    stock: 12,
    brand: "Asus",
    category: "Electronics",
    description:
      "Powerful gaming laptop with high performance graphics and ultra-smooth experience.",
    highlights: [
      "Intel i7 Processor",
      "RTX Graphics",
      "144Hz Display",
      "RGB Keyboard",
    ],
  },

  {
    id: "p2",
    slug: "stylish-bag",
    title: "Stylish Travel Bag",
    image: "/images/products/bag.webp",
    price: 1299,
    mrp: 1999,
    rating: 4.3,
    stock: 25,
    brand: "Wildcraft",
    category: "Accessories",
    description:
      "Durable travel bag perfect for daily use and weekend trips.",
    highlights: ["Water resistant", "Lightweight", "Large capacity"],
  },

  {
    id: "p3",
    slug: "glass-set",
    title: "Premium Glass Set",
    image: "/images/products/glass.webp",
    price: 499,
    mrp: 799,
    rating: 4.1,
    stock: 40,
    brand: "Milton",
    category: "Home Decor",
    description:
      "Premium quality glass set for daily kitchen use.",
    highlights: ["Crystal finish", "Dishwasher safe", "Strong build"],
  },

  {
    id: "p4",
    slug: "mechanical-keyboard",
    title: "Mechanical Keyboard",
    image: "/images/products/keyboard.png",
    price: 2499,
    mrp: 3499,
    rating: 4.7,
    stock: 18,
    brand: "Redgear",
    category: "Electronics",
    description:
      "RGB mechanical keyboard ideal for gaming and productivity.",
    highlights: ["RGB Lighting", "Blue switches", "Durable keys"],
  },

  {
    id: "p5",
    slug: "wireless-mouse",
    title: "Wireless Mouse",
    image: "/images/products/mouse.png",
    price: 599,
    mrp: 999,
    rating: 4.4,
    stock: 30,
    brand: "Logitech",
    category: "Electronics",
    description:
      "Ergonomic wireless mouse for smooth experience.",
    highlights: ["Fast response", "Rechargeable", "Silent click"],
  },

  {
    id: "p6",
    slug: "nokia-phone",
    title: "Nokia Feature Phone",
    image: "/images/products/nokia.png",
    price: 1799,
    mrp: 2199,
    rating: 4.0,
    stock: 50,
    brand: "Nokia",
    category: "Electronics",
    description:
      "Classic Nokia phone with long battery backup.",
    highlights: ["Strong battery", "Durable body", "FM Radio"],
  },

  // 👉 Reusing same images for more products (as you requested)
  {
    id: "p7",
    slug: "office-keyboard",
    title: "Office Keyboard",
    image: "/images/products/keyboard.png",
    price: 999,
    mrp: 1499,
    rating: 4.2,
    stock: 20,
    brand: "Dell",
    category: "Electronics",
    description: "Comfortable keyboard for office work.",
    highlights: ["Soft keys", "Slim design", "USB support"],
  },

  {
    id: "p8",
    slug: "travel-bag-pro",
    title: "Travel Bag Pro",
    image: "/images/products/bag.webp",
    price: 1899,
    mrp: 2499,
    rating: 4.5,
    stock: 15,
    brand: "Skybags",
    category: "Accessories",
    description: "Spacious travel backpack for long journeys.",
    highlights: ["Laptop sleeve", "Waterproof", "Extra compartments"],
  },
];
