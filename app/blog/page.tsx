import Link from "next/link";
import { blogPosts } from "../data/homepage";

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">Our Blogs</h1>
      <div className="grid md:grid-cols-3 gap-6">
        {blogPosts.map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`} className="shadow-card p-4 rounded-card">
            <h3 className="font-semibold">{post.title}</h3>
            <p className="text-sm text-gray-600">{post.excerpt}</p>
          </Link>
        ))}
      </div>
    </section>
  );
}
