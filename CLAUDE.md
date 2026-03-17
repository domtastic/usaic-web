# USAIC Web — Claude Code Instructions

## Project Overview
USA Ice Climbing (USAIC) public website built with Next.js 16 (App Router), Sanity CMS, Tailwind CSS, and deployed on Vercel. Domain: `usaiceclimbing.org`.

## Stack
- **Framework:** Next.js 16 (App Router) + TypeScript
- **CMS:** Sanity (project ID: `g8gl3bgu`, dataset: `production`)
- **Styling:** Tailwind CSS
- **Email:** Resend (API route at `src/app/api/contact/route.ts`)
- **Bot protection:** Cloudflare Turnstile v3
- **Analytics:** Vercel Analytics + Google Analytics GA4 (`G-EY1RQHRMTN`)
- **Deployment:** Vercel (auto-deploys on push to `main`)

---

## Change Management

### Always use feature branches
Never commit directly to `main`. Create a branch for every change:
```bash
git checkout main && git pull
git checkout -b feature/your-feature-name
```

### Branch naming
- `feature/` — new functionality
- `fix/` — bug fixes
- `chore/` — dependency updates, config changes

### Pull requests
- Open a PR from the feature branch into `main`
- Include a summary of what changed and a test plan
- Merge via GitHub, not via `git merge` locally
- Delete the branch after merging (on GitHub and locally)

### Commit messages
Write clear, descriptive commit messages. Focus on the "why", not just the "what". Always add:
```
Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>
```

---

## Security

### Environment variables
- **Never commit secrets** — `.env.local` is in `.gitignore`, keep it that way
- All sensitive keys live in `.env.local` locally and in Vercel → Settings → Environment Variables in production
- `NEXT_PUBLIC_` prefix is for client-side vars only — never put secrets there
- Required env vars:
  - `RESEND_API_KEY` — Resend email service
  - `CONTACT_EMAIL` — Primary recipient for contact form
  - `CONTACT_EMAIL_CC` — CC recipient for contact form
  - `NEXT_PUBLIC_TURNSTILE_SITE_KEY` — Cloudflare Turnstile (public)
  - `TURNSTILE_SECRET_KEY` — Cloudflare Turnstile (server-side only)

### Security headers
Applied in `next.config.ts` to all routes except `/studio`:
- `X-Frame-Options: DENY` — prevents clickjacking
- `X-Content-Type-Options: nosniff` — prevents MIME sniffing
- `Strict-Transport-Security` — enforces HTTPS
- `Referrer-Policy` — limits referrer data leakage
- `Permissions-Policy` — disables unused browser features

### API routes
- Always validate input server-side before processing
- Always verify Cloudflare Turnstile token before sending emails
- Never expose email addresses in client-side code or API responses
- Catch all errors and return generic messages to the client — log specifics server-side only

### Dependencies
- Avoid adding unnecessary packages — check if existing tools can do the job first
- After installing packages, review for known vulnerabilities (`npm audit`)
- Don't use `npm audit fix --force` without reviewing what it changes

---

## Networking & Infrastructure

### DNS (managed via Squarespace)
- Domain: `usaiceclimbing.org`
- Vercel handles SSL automatically once DNS is connected
- DNS changes can take up to 48 hours to propagate

### Vercel deployment
- Production deploys automatically on every push/merge to `main`
- Preview deployments are created for every PR
- Environment variables must be set in Vercel separately from `.env.local`
- After adding new `NEXT_PUBLIC_` env vars, a redeploy is required for them to take effect

### External services
- **Sanity CDN:** `cdn.sanity.io` — preconnect set in `layout.tsx`
- **Resend:** Used for transactional email only, domain `usaiceclimbing.org` verified
- **Cloudflare Turnstile:** Protects the contact form — both `localhost` and `usaiceclimbing.org` registered as allowed domains
- **Google Search Console:** Sitemap submitted at `https://usaiceclimbing.org/sitemap.xml`

---

## Code Patterns

### Sanity data fetching
- All pages with Sanity data use `export const revalidate = 60`
- Use `urlFor(image).auto('format').quality(80)` for all Sanity images
- Sanity default arrays need `as` type assertions for `_key` (e.g. `as { _key?: string; title: string }[]`)

### Layout
- Body has `pt-[120px] md:pt-[132px]` to account for the fixed header
- Use `btn-primary` class for primary CTA buttons
- Border accent style: `border-l-2` (no icons)

### Client components
- Only use `'use client'` when necessary (interactivity, hooks, browser APIs)
- Prefer server components for data fetching and static content

### Next.js env vars
- `NEXT_PUBLIC_` vars are baked in at build time — restart the dev server after adding them locally, and redeploy on Vercel after adding them there

---

## Development Workflow

```bash
# Start dev server
npm run dev

# Build (requires Node >= 20 — Vercel handles this in CI)
npm run build
```

Local Node version is 19.x — builds must be verified via Vercel CI, not locally.

---

## What NOT to do
- Don't commit directly to `main`
- Don't expose `usaiceclimbing@gmail.com` or any email address in public-facing code — use `/contact` page instead
- Don't add `NEXT_PUBLIC_` prefix to secret keys
- Don't skip Turnstile verification in the contact API route
- Don't use `npm audit fix --force` blindly
- Don't delete branches before merging
