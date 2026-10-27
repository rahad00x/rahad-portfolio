import type { MetadataRoute } from "next";
import { site } from "@/lib/data";
import { posts } from "@/lib/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    ...posts.map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: new Date(), priority: 0.6 })),
  ];
}
