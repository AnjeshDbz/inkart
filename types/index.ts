export type Product = {
  id: string;
  slug: string;
  title: string;
  image: string;
  price: number;
  mrp: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  description: string;
  highlights: string[];
  variant?: string;
};

export type ProductSummary = Pick<Product, "id" | "title" | "image" | "price" | "mrp" | "rating" | "variant">;

export type Location = {
  id: string;
  name: string;
  image: string;
};

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
};

export type Testimonial = {
  id: string;
  name: string;
  avatar: string;
  rating: number;
  review: string;
};

export type StatItem = {
  id: string;
  label: string;
  value: string;
};
