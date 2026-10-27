"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/data";
import Logo from "./Logo";

export default function Nav({ prefix = "" }: { prefix?: string }) {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-canvas/80 backdrop-blur">
      <nav aria-label="Main" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href={`${prefix}#top`} className="group flex items-center gap-2.5 text-base font-semibold tracking-tight">
          <span className="transition-transform duration-500 group-hover:rotate-[8deg] group-hover:scale-105">
            <Logo size={30} />
          </span>
          {site.name}
        </a>

        <ul className="hidden items-center gap-8 md:flex">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={`${prefix}${n.href}`} className="text-sm text-mute transition-colors hover:text-ink">
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={site.resume}
            download
            className="rounded-full border border-line px-4 py-1.5 text-sm transition-colors hover:bg-ink hover:text-canvas"
          >
            Resume
          </a>
          <button
            type="button"
            className="rounded-full border border-line p-2 md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>

      {open && (
        <ul id="mobile-menu" className="border-t border-line bg-canvas px-5 pb-4 md:hidden">
          {nav.map((n) => (
            <li key={n.href}>
              <a href={`${prefix}${n.href}`} onClick={close} className="block border-b border-line py-3 text-lg">
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
