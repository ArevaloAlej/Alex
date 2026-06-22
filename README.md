# Professional Portfolio

A premium, single-page professional portfolio built with Next.js (App Router), TypeScript, and Tailwind CSS.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Filling in your real content

All site content lives in **`src/data/profile.ts`**. Every field is currently a placeholder marked with a `// PLACEHOLDER` comment — replace them with your real resume / LinkedIn data:

- `profile` — name, title, summary, location, LinkedIn URL, etc.
- `skills` — grouped by Technical / Professional / Management / Tools & Platforms
- `experience` — career timeline with responsibilities and achievements
- `projects` — portfolio entries with category, challenge/solution/results
- `education`, `certifications`
- `references` — testimonials (only use real, authorized quotes)

Also replace:

- `public/portrait-placeholder.svg` with a real portrait (update the `src` in `src/components/Hero.tsx`)
- `public/resume.pdf` with your actual resume PDF

## Contact form

The contact form posts to `src/app/api/contact/route.ts`. By default it validates input and logs submissions server-side without sending email. To enable real delivery via [Resend](https://resend.com):

```
RESEND_API_KEY=...
CONTACT_TO_EMAIL=you@example.com
```

## SEO

- `src/app/sitemap.ts` and `src/app/robots.ts` generate `/sitemap.xml` and `/robots.txt`
- Person schema (JSON-LD) is injected in `src/app/layout.tsx`
- Set `NEXT_PUBLIC_SITE_URL` to your production domain for correct canonical/OG URLs

## Deploy

Deploy on [Vercel](https://vercel.com/new) — set the environment variables above in the project settings.
