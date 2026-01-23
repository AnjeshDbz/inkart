import { Location, BlogPost, Testimonial, StatItem } from "../../types";
export { products } from "./products";
import { products } from "./products";


export const locations: Location[] = [
  { id: "1", name: "Kolhapur", image: "/images/cities/kolhapur.jpg" },
  { id: "2", name: "Pune", image: "/images/cities/pune.jpg" },
  { id: "3", name: "Thane", image: "/images/cities/thane.jpg" },
  { id: "4", name: "Ahilya Nagar", image: "/images/cities/ahilya.jpg" },
];

export const lowestPriceProducts = products.slice(0, 4);
export const comboProducts = products.slice(2, 5);
export const homemadeCookies = products.slice(4, 8);
export const refinedOils = products.slice(0, 4);

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
