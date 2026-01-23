"use client";

import Image from "next/image";

const blogs = [
  {
    id: 1,
    title: "5 Benefits of Using Organic Turmeric Powder in Your Everyday Life",
    description:
      "Turmeric is a golden-yellow spice traditionally rooted in South Asian and Middle Eastern cultures which has taken the world by storm for its wide array of health benefits and culinary uses. Often referred to as the 'golden spice' turmeric is celebrated not only for it...",
    image: "/images/blogs/blog1.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "Multi-Grain Bread Usefulness",
    image: "/images/blogs/blog2.jpg",
  },
  {
    id: 3,
    title: "The Healthful qualities of Tea",
    image: "/images/blogs/blog3.jpg",
  },
];

export default function OurBlogs() {
  return (
    <section className="bg-[#efeeff] py-12">
      <div className="mx-auto max-w-10xl px-4">
        {/* Heading */}
        <h2 className="text-center text-xl md:text-4xl font-semibold text-primary mb-10">
          Our Blogs
        </h2>

        {/* Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* LEFT FEATURED BLOG */}
          <div className="lg:col-span-2">
            <div className="relative h-[420px] rounded-2xl overflow-hidden group">
              <Image
                src={blogs[0].image}
                alt={blogs[0].title}
                fill
                className="object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/50" />

              {/* Content */}
              <div className="absolute bottom-0 p-6 text-white">
                <h3 className="text-lg md:text-xl font-semibold mb-3 max-w-lg">
                  {blogs[0].title}
                </h3>

                <p className="text-sm text-white/90 mb-4 max-w-xl line-clamp-3">
                  {blogs[0].description}
                </p>

                <button className="bg-white text-black px-6 py-2 rounded-full text-sm font-medium hover:bg-secondary hover:text-white transition">
                  Read More
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT SMALL BLOGS */}
          <div className="flex flex-col gap-6">
            {blogs.slice(1).map((blog) => (
              <div
                key={blog.id}
                className="relative h-[200px] rounded-2xl overflow-hidden group"
              >
                <Image
                  src={blog.image}
                  alt={blog.title}
                  fill
                  className="object-cover"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Title */}
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h4 className="font-medium text-base leading-snug">
                    {blog.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
