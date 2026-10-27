import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Nav from "@/components/Nav";
import { Footer } from "@/components/Sections";
import { posts, readingTime } from "@/lib/posts";
import { site } from "@/lib/data";

type Props = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export const generateStaticParams = () => posts.map((p) => ({ slug: p.slug }));

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: { type: "article", title: post.title, description: post.summary, url: `${site.url}/blog/${post.slug}` },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = posts.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <div id="top" />
      <Nav prefix="/" />
      <main>
        <article className="mx-auto max-w-2xl px-5 py-16 sm:px-8 sm:py-24">
          <Link href="/#blog" className="text-sm text-mute hover:text-ink">
            Back to blog
          </Link>
          <h1 className="mt-6 text-4xl font-medium leading-tight tracking-tight sm:text-5xl">{post.title}</h1>
          <p className="mt-4 text-sm text-mute">
            By {site.name}, {readingTime(post)} min read
            {post.date ? `, ${post.date}` : ""}
          </p>
          <p className="mt-6 text-lg text-ink/90">{post.summary}</p>
          <div className="mt-10 space-y-10">
            {post.body.map((b, i) => (
              <section key={i}>
                {b.h && <h2 className="mb-3 text-2xl font-medium tracking-tight">{b.h}</h2>}
                <div className="space-y-4 leading-relaxed text-ink/85">
                  {b.p.map((t) => (
                    <p key={t}>{t}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
