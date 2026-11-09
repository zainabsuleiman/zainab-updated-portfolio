# zainab.dev — portfolio of Nyinawumuntu Zainab Suleiman

Personal portfolio for a full stack engineer based in Kigali, Rwanda. One page, statically generated, dark theme. The site presents my profile, four years of production work at Irembo, Rwanda Revenue Authority and Hexakomb, selected projects (the AI-facilitated QA platform, the MCP service generator, Single Trade Platform integrations, the Rwanda FDA inspection system), a skills matrix, education and contact details.

Repository: https://github.com/zainabsuleiman/zainab-updated-portfolio

## Stack

| Layer | Choice | Why |
|---|---|---|
| Framework | Next.js 16 (App Router) | Static prerender of the single route, image optimisation via `next/image`, zero-config on Vercel |
| UI | React 19, Tailwind CSS 4 | Utility classes only, no component library; theme tokens declared in `globals.css` via `@theme` |
| Fonts | `geist` package (Geist Sans + Geist Mono) | Self-hosted, so the build never calls Google Fonts and works offline or behind a proxy |
| Language | TypeScript | Content is a typed data module, so a missing field fails the build rather than rendering blank |
| Hosting | Vercel | Git-push deploys from `main` |

## Project layout

```
src/
  app/
    layout.tsx      # <html>/<body>, fonts, metadata + Open Graph (uses the portrait as OG image)
    page.tsx        # the whole page: nav, hero, highlights, about, experience, projects, skills, education, contact, footer
    globals.css     # Tailwind import, colour tokens (--background, --foreground, --accent teal), selection colour
  data/
    profile.ts      # ALL site content lives here
public/
  zainab.jpg        # hero portrait, rendered with next/image (fill, object-top)
```

There are deliberately no components folder, no CMS and no client-side JavaScript beyond what Next ships. Everything in `page.tsx` is a server component; the page is prerendered to static HTML at build time (`○ (Static)` in `next build` output).

## Editing content

Open `src/data/profile.ts`. It exports:

- `profile` — name, title, tagline, location, phone, email, LinkedIn, GitHub, summary paragraph
- `highlights` — the four stat tiles under the hero (`4+ years`, `2 AI agents`, `<10 min`, `4 agencies`)
- `experience` — array of roles; each role has one or more `projects`, each with a `stack` list and `bullets`
- `projects` — the "Selected projects" cards
- `skills` — grouped tag lists (Full stack, AI-native engineering, Performance & reliability, Data, Infrastructure & CI/CD, Testing, Security & auth)
- `education`, `languages`

Adding a job is appending an object to `experience`; the page maps over the arrays so no JSX changes are needed. Keep bullets in past tense for finished roles and present tense for the current one, matching the CV.

**Still TODO:** `profile.linkedin` and `profile.github` point at the bare domains. Replace them with the real profile URLs.

To swap the photo, overwrite `public/zainab.jpg` (portrait orientation works best; it is cropped to a square with `object-top`).

To change the accent colour, edit `--accent` in `src/app/globals.css`. Tailwind classes like `text-accent` and `bg-accent` pick it up automatically.

## Running locally

```bash
npm install
npm run dev      # http://localhost:3000, hot reload
npm run build    # production build, must finish with "○ / (Static)"
npm start        # serve the production build
npm run lint
```

Node 18+ required (built and tested on Node 22).

## Deploying

The site is deployed on Vercel from the `main` branch of this repo. Every push to `main` triggers a production deploy; pushes to other branches get preview URLs.

First-time setup, if you ever need to redo it: vercel.com/new → import `zainabsuleiman/zainab-updated-portfolio` → leave every default (framework Next.js, build `next build`, output `.next`) → Deploy. No environment variables are needed; the site reads nothing at runtime.

Custom domain: Project → Settings → Domains on Vercel, then add the CNAME/A records Vercel shows at the registrar.

## Decisions worth knowing about

- **Footer year is a constant (`YEAR = 2026` in `page.tsx`)**, not `new Date()`. Next 16's static prerender rejects non-deterministic values in server components; bump it manually each January or convert the footer to a client component.
- **Phone number and email are public** on the contact section and in the `tel:`/`mailto:` links, by choice. Remove them from `profile.ts` to take them down.
- **Open Graph image is the portrait**, so link previews on LinkedIn/WhatsApp show the photo with the name and title.
- **No analytics, no cookies, no forms.** Contact is a `mailto:` link.

## Git hygiene

Commit messages are plain descriptions of the change. No generated-by or co-author trailers.