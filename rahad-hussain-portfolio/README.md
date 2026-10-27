# Rahad Hussain - Portfolio

Personal portfolio for Rahad Hussain (CSE graduate, Uttara University). Built with Next.js, TypeScript, Tailwind CSS, Framer Motion and Lucide icons.

## Run locally

Requires Node.js 20.9 or newer.

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run lint
npm run build && npm start
```

## Edit content

Everything lives in `lib/data.ts` (skills, projects, experience, education, blog posts, links).
Replace `public/Rahad_Hussain_CV.pdf` to update the resume.

- When the thesis scanner is published on GitHub, set `repo` in the project entry to its URL.
- Add screenshots to `public/` and reference them in the project entry.
- Add articles to `posts` and the Blog section fills in automatically.

## Publish to GitHub

```bash
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/rahad00x/rahad-hussain-portfolio.git   # create this empty repo on GitHub first
git push -u origin main
```

## Deploy on Vercel

1. Sign in at vercel.com with GitHub, choose Add New > Project, import the repository.
2. Keep the detected Next.js settings and click Deploy. Every later `git push` to `main` redeploys automatically.

## Connect rahad.bond (read before changing DNS)

The domain currently points to another server. Do not delete any DNS record until you know what it serves.

1. In Vercel: Project > Settings > Domains > add `rahad.bond` (and `www.rahad.bond`). Vercel shows the exact records it needs.
2. At your registrar's DNS panel, change only the apex A record and the `www` record to the values Vercel shows. Leave MX, TXT and other records alone, especially anything used for email.
3. Wait for DNS to propagate, then confirm Vercel shows the domain as valid and HTTPS is issued.

## Notes

- `next` is set to `^16.4.1`. Run `npm audit` after install and keep Next.js on a patched release.
- No contact form is included on purpose: it would need a configured and tested backend service.
