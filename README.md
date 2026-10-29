# Zainab's portfolio

Personal portfolio site built with Next.js 16, React 19 and Tailwind CSS 4. All content lives in one file: `src/data/profile.ts`. Edit that file to update your bio, experience, projects, skills or contact details — no need to touch the components.

## Run locally

```bash
npm install
npm run dev        # http://localhost:3000
npm run build      # production build
```

## Deploy to Vercel (recommended)

1. Push this folder to a GitHub repository:
   ```bash
   gh repo create zainab-portfolio --public --source=. --push
   # or create the repo on github.com and:
   git remote add origin https://github.com/<your-username>/zainab-portfolio.git
   git push -u origin main
   ```
2. Go to https://vercel.com/new, sign in with GitHub, and import the `zainab-portfolio` repo.
3. Leave the defaults (Framework: Next.js, build command `next build`) and click **Deploy**. You get a `*.vercel.app` URL in about a minute.
4. Optional: add a custom domain under *Project → Settings → Domains*.

Every later `git push` to `main` redeploys automatically.

Alternative without GitHub: `npm i -g vercel && vercel` from this folder and follow the prompts.

## Before going live

- Set your real LinkedIn and GitHub URLs in `src/data/profile.ts` (marked `TODO`).
- Replace `public/zainab.jpg` if you want a different photo.
- Phone number and email are shown publicly on the contact section — remove them from `profile.ts` if you'd rather not.
