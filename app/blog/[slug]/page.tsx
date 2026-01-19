import { notFound } from "next/navigation";
import { blogPosts } from "../../data/homepage";

export default function BlogDetail({ params }: { params: { slug: string } }) {
  const post = blogPosts.find((b) => b.slug === params.slug);
  if (!post) return notFound();

  return (
    <section className="mx-auto max-w-3xl px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
      <p>{post.excerpt}</p>
    </section>
  );
}
