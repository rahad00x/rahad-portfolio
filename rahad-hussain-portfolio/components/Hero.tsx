"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowRight, Download } from "lucide-react";
import { hero, site } from "@/lib/data";
import HeroArt from "./HeroArt";

const socials = [
  { label: "GitHub", sub: site.githubHandle, href: site.github, Icon: Github },
  { label: "LinkedIn", sub: site.linkedinHandle, href: site.linkedin, Icon: Linkedin },
  { label: "Email", sub: site.email, href: `mailto:${site.email}`, Icon: Mail },
];

export default function Hero() {
  const reduce = useReducedMotion();
  const item = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 14 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay: i * 0.08, ease: "easeOut" as const },
  });

  return (
    <section aria-labelledby="hero-title" className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-20 pt-14 sm:px-8 md:grid-cols-[1.15fr_0.85fr] md:pt-24">
      <div>
        <motion.ul {...item(0)} className="mb-8 flex flex-wrap gap-2">
          {hero.badges.map((b) => (
            <li key={b} className="rounded-full border border-line px-3 py-1 text-xs text-mute">
              {b}
            </li>
          ))}
        </motion.ul>

        <motion.h1 {...item(1)} id="hero-title" className="text-6xl font-medium leading-[0.92] tracking-tighter sm:text-7xl lg:text-8xl">
          <span className="block">{site.first}</span>
          <span className="block text-mute">{site.last}</span>
        </motion.h1>

        <motion.div {...item(2)} className="mt-8 space-y-1">
          {hero.roles.map((r) => (
            <p key={r} className="text-sm text-mute sm:text-base">
              {r}
            </p>
          ))}
        </motion.div>

        <motion.p {...item(3)} className="mt-6 max-w-md text-lg leading-snug">
          {hero.tagline[0]}
          <br />
          {hero.tagline[1]}
        </motion.p>

        <motion.div {...item(4)} className="mt-8 flex flex-wrap gap-3">
          <a href="#work" className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-canvas transition-opacity hover:opacity-85">
            View Projects <ArrowRight size={16} aria-hidden />
          </a>
          <a href={site.resume} download className="inline-flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm transition-colors hover:bg-white/10">
            Download Resume <Download size={16} aria-hidden />
          </a>
        </motion.div>

        <motion.ul {...item(5)} className="mt-10 grid gap-3 sm:grid-cols-3">
          {socials.map(({ label, sub, href, Icon }) => (
            <li key={label}>
              <a
                href={href}
                {...(href.startsWith("http") ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="flex items-center gap-3 rounded-xl border border-line p-2.5 transition-colors hover:bg-white/5"
              >
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-line">
                  <Icon size={18} aria-hidden />
                </span>
                <span className="min-w-0">
                  <span className="block text-sm font-medium">{label}</span>
                  <span className="block truncate text-xs text-mute">{sub}</span>
                </span>
              </a>
            </li>
          ))}
        </motion.ul>
      </div>

      <div className="hidden justify-center md:flex" aria-hidden={false}>
        <HeroArt />
      </div>
    </section>
  );
}
