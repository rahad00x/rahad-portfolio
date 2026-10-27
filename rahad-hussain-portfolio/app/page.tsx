import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import { About, Blog, Contact, Experience, Footer, Work } from "@/components/Sections";
import { site } from "@/lib/data";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.url,
  email: site.email,
  sameAs: [site.github, site.linkedin, site.facebook, site.instagram],
  alumniOf: { "@type": "CollegeOrUniversity", name: "Uttara University" },
  jobTitle: "Software Developer",
};

export default function Home() {
  return (
    <>
      <a href="#about" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-ink focus:px-3 focus:py-2 focus:text-canvas">
        Skip to content
      </a>
      <div id="top" />
      <Nav />
      <main>
        <Hero />
        <About />
        <Work />
        <Experience />
        <Blog />
        <Contact />
      </main>
      <Footer />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
