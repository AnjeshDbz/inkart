export type Location = {
  id: string;
  name: string;
  image: string;
};

export type Product = {
  id: string;
  title: string;
  image: string;
  price: number;
  mrp: number;
  rating: number;
  variant?: string;
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

export const locations: Location[] = [
  { id: "1", name: "Kolhapur", image: "/images/cities/kolhapur.jpg" },
  { id: "2", name: "Pune", image: "/images/cities/pune.jpg" },
  { id: "3", name: "Thane", image: "/images/cities/thane.jpg" },
  { id: "4", name: "Ahilya Nagar", image: "/images/cities/ahilya.jpg" },
];

export const lowestPriceProducts: Product[] = [
  {
    id: "p1",
    title: "Organic Turmeric Powder",
    image: "/images/products/turmeric.jpg",
    price: 199,
    mrp: 249,
    rating: 4.5,
    variant: "500g",
  },
];

export const comboProducts = lowestPriceProducts;
export const homemadeCookies = lowestPriceProducts;
export const refinedOils = lowestPriceProducts;

export const stats: StatItem[] = [
  { id: "1", label: "Districts", value: "35+" },
  { id: "2", label: "Villages", value: "10K+" },
  { id: "3", label: "Sustainable", value: "100%" },
  { id: "4", label: "Organic", value: "Certified" },
];

export const blogPosts: BlogPost[] = [
  {
    slug: "why-organic-food-matters",
    title: "Why Organic Food Matters",
    excerpt: "Discover the benefits of organic and local food.",
    image: "/images/blog/blog1.jpg",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "t1",
    name: "Anita Sharma",
    avatar: "/images/users/user1.jpg",
    rating: 5,
    review: "Amazing quality and authentic taste!",
  },
];
