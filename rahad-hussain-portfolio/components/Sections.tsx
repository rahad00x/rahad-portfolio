import Image from "next/image";
import Link from "next/link";
import { ArrowUp, ExternalLink, Facebook, Github, Instagram, Linkedin, Mail } from "lucide-react";
import type { ReactNode } from "react";
import { about, education, experience, projects, site, skills } from "@/lib/data";
import { posts, readingTime } from "@/lib/posts";
import Reveal from "./Reveal";

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section id={id} aria-labelledby={`${id}-h`} className="border-t border-line">
      <Reveal className="mx-auto grid max-w-6xl gap-8 px-5 py-20 sm:px-8 md:grid-cols-[0.8fr_2fr] md:gap-16">
        <h2 id={`${id}-h`} className="text-3xl font-medium tracking-tight sm:text-4xl">
          {title}
        </h2>
        <div>{children}</div>
      </Reveal>
    </section>
  );
}

const chip = "rounded-full border border-line px-3 py-1 text-sm text-ink/90";

export function About() {
  return (
    <Section id="about" title="About">
      <div className="grid items-start gap-10 lg:grid-cols-[1fr_280px]">
        <div className="max-w-xl space-y-4 text-lg leading-relaxed text-ink/90">
          {about.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
        <figure className="w-full max-w-[280px] overflow-hidden rounded-2xl border border-line">
          <Image
            src="/rahad-hussain.webp"
            alt="Portrait of Rahad Hussain seated in window light"
            width={800}
            height={1200}
            sizes="(min-width: 1024px) 280px, 70vw"
            className="aspect-[2/3] w-full object-cover transition-transform duration-700 hover:scale-[1.03]"
          />
        </figure>
      </div>
      <h3 className="mb-5 mt-14 text-xl font-medium">Technical skills</h3>
      <dl className="space-y-6">
        {skills.map((s) => (
          <div key={s.group}>
            <dt className="mb-2 text-sm text-mute">{s.group}</dt>
            <dd>
              <ul className="flex flex-wrap gap-2">
                {s.items.map((i) => (
                  <li key={i} className={chip}>
                    {i}
                  </li>
                ))}
              </ul>
            </dd>
          </div>
        ))}
      </dl>
    </Section>
  );
}

export function Work() {
  return (
    <Section id="work" title="Featured work">
      <div className="space-y-8">
        {projects.map((p) => (
          <article key={p.title} className="rounded-2xl border border-line p-6 transition-colors duration-300 hover:border-white/30 sm:p-8">
            <h3 className="text-2xl font-medium leading-tight tracking-tight">{p.title}</h3>
            <p className="mt-3 max-w-xl text-ink/90">{p.summary}</p>

            <div className="mt-6 grid aspect-[16/7] place-items-center rounded-xl border border-dashed border-line px-4 text-center text-sm text-mute">
              {p.screenshot ? p.screenshot : "Screenshots will be added when the project is published."}
            </div>

            <div className="mt-8 grid gap-8 md:grid-cols-2">
              <div>
                <h4 className="mb-2 font-medium">Problem</h4>
                <p className="text-mute">{p.problem}</p>
              </div>
              <div>
                <h4 className="mb-2 font-medium">Key features</h4>
                <ul className="list-disc space-y-1 pl-5 text-mute">
                  {p.features.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              </div>
            </div>

            <ul className="mt-6 flex flex-wrap gap-2" aria-label="Technology stack">
              {p.stack.map((t) => (
                <li key={t} className={chip}>
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3 text-sm">
              {p.repo ? (
                <a href={p.repo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 hover:bg-white/10">
                  <Github size={16} aria-hidden /> Source code
                </a>
              ) : (
                <span className="rounded-full border border-line px-4 py-2 text-mute">Source code not public yet</span>
              )}
              {p.demo ? (
                <a href={p.demo} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 hover:bg-white/10">
                  <ExternalLink size={16} aria-hidden /> Live demo
                </a>
              ) : (
                <span className="rounded-full border border-line px-4 py-2 text-mute">No live demo</span>
              )}
            </div>

            <details className="group mt-6 border-t border-line pt-4">
              <summary className="cursor-pointer text-sm font-medium">Read the case study</summary>
              <ul className="mt-3 space-y-2 text-mute">
                {p.caseStudy.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </details>
          </article>
        ))}
      </div>
    </Section>
  );
}

export function Experience() {
  return (
    <Section id="experience" title="Experience & education">
      <div className="space-y-10">
        {experience.map((e) => (
          <div key={e.role}>
            <p className="text-sm text-mute">{e.period}</p>
            <h3 className="mt-1 text-xl font-medium">{e.role}</h3>
            <p className="text-mute">{e.org}</p>
            <ul className="mt-3 max-w-xl list-disc space-y-1 pl-5 text-ink/90">
              {e.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>
        ))}
        <div className="border-t border-line pt-10">
          <p className="text-sm text-mute">{education.status}</p>
          <h3 className="mt-1 text-xl font-medium">{education.degree}</h3>
          <p className="text-mute">
            {education.school}, {education.place}
          </p>
        </div>
      </div>
    </Section>
  );
}

export function Blog() {
  return (
    <Section id="blog" title="Blog">
      {posts.length === 0 ? (
        <p className="max-w-md text-mute">No articles yet. Technical write-ups will appear here once they are published.</p>
      ) : (
        <ul className="space-y-4">
          {posts.map((p) => (
            <li key={p.slug}>
              <Link href={`/blog/${p.slug}`} className="group block rounded-2xl border border-line p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/[0.03] sm:p-6">
                <p className="text-sm text-mute">
                  {p.tags.join(", ")}, {readingTime(p)} min read
                </p>
                <h3 className="mt-2 text-xl font-medium tracking-tight">{p.title}</h3>
                <p className="mt-2 max-w-xl text-mute">{p.summary}</p>
                <span className="mt-4 inline-block text-sm underline decoration-line underline-offset-4 group-hover:decoration-ink">Read article</span>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </Section>
  );
}

export function Contact() {
  const links = [
    { label: "Email", value: site.email, href: `mailto:${site.email}`, Icon: Mail },
    { label: "GitHub", value: site.githubHandle, href: site.github, Icon: Github },
    { label: "LinkedIn", value: site.linkedinHandle, href: site.linkedin, Icon: Linkedin },
    { label: "Facebook", value: site.socialHandle, href: site.facebook, Icon: Facebook },
    { label: "Instagram", value: `@${site.socialHandle}`, href: site.instagram, Icon: Instagram },
  ];
  return (
    <Section id="contact" title="Contact">
      <p className="max-w-md text-lg text-ink/90">I am open to entry-level software and IT roles. The fastest way to reach me is email.</p>
      <a href={`mailto:${site.email}`} className="mt-6 inline-block break-all text-3xl font-medium tracking-tight underline decoration-line underline-offset-8 hover:decoration-ink sm:text-4xl">
        {site.email}
      </a>
      <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {links.map(({ label, value, href, Icon }) => (
          <li key={label}>
            <a href={href} {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})} className="flex items-center gap-3 rounded-xl border border-line p-3 transition-all duration-300 hover:-translate-y-0.5 hover:border-white/30 hover:bg-white/5">
              <Icon size={18} aria-hidden />
              <span className="min-w-0">
                <span className="block text-sm font-medium">{label}</span>
                <span className="block truncate text-xs text-mute">{value}</span>
              </span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-5 py-8 text-sm text-mute sm:px-8">
        <p>&copy; {new Date().getFullYear()} {site.name}</p>
        <ul className="flex flex-wrap gap-x-5 gap-y-2">
          <li><a className="hover:text-ink" href={site.github} target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a className="hover:text-ink" href={site.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
          <li><a className="hover:text-ink" href={site.facebook} target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a className="hover:text-ink" href={site.instagram} target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a className="hover:text-ink" href={`mailto:${site.email}`}>Email</a></li>
        </ul>
        <a href="#top" className="inline-flex items-center gap-2 hover:text-ink">
          Back to top <ArrowUp size={14} aria-hidden />
        </a>
      </div>
    </footer>
  );
}
