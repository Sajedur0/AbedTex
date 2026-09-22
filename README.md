# Abed Textile Processing Mills Ltd.

**আবেদ টেক্সটাইল প্রোসেসিং মিলস লিমিটেড**

An Oeko-Tex Certified 100% Export Oriented Manufacturer of Quality Processing Mills in Bangladesh. Since 1993.

---

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **Routing:** React Router (hash router) with route-level code splitting
- **Fonts:** Bodoni Moda + DM Sans — self-hosted variable WOFF2 subsets

## Features

- Fullscreen image lightbox with keyboard + swipe-free paging and neighbour preloading
- 24 machinery types (72 units) with instant search
- 6 product categories with lead-time specs
- Printing / dyeing / finishing production showcases
- Compliance, worker welfare and ETP sections
- Leadership profiles with direct contact links
- Scroll reveal animations and blur-up image loading
- Responsive design (mobile → ultra-wide)

## Performance

The site is deliberately tuned for slow mobile connections and repeat visits:

| Area | What we do |
|---|---|
| **Images** | Every photo is shipped as WebP in 2–3 responsive sizes (600/900/1500px …) with `srcSet` + `sizes`, `loading="lazy"` and a ~500 byte LQIP blur-up placeholder. 343 MB of source photos → **8 MB** of WebP derivatives; a typical page transfers a few hundred KB. |
| **Hero (LCP)** | `/img/hero-*.webp` uses stable URLs so `index.html` can `<link rel="preload" imagesrcset ... fetchpriority="high">` it while the JS bundle is still downloading. |
| **Fonts** | Self-hosted variable subsets (83 KB total) served from our own origin and preloaded — no third-party DNS/TLS handshake, no render-blocking Google Fonts request. |
| **JS** | Route-level `React.lazy` chunks, idle-time prefetch of the likely next pages, and hover prefetch on nav links. Entry bundle ≈ 78 kB gzip. |
| **CSS** | One 25 kB (5.5 kB gzip) Tailwind stylesheet, animations limited to `opacity`/`transform` so they stay on the compositor. |
| **Caching** | Content-hashed assets are immutable for a year (`public/_headers`), fonts for a year, hero images 30 days + `stale-while-revalidate`, HTML always revalidated. |
| **Smoothness** | A single shared `IntersectionObserver` for all reveal animations, instant scroll-reset on route change (instead of animated), no `backdrop-filter` on the sticky header, `useDeferredValue` for the machinery search. |

### Regenerating images

Source photographs live in `src/assets/images/**` and are never bundled. Whenever a photo
is added or replaced, regenerate the derivatives:

```bash
npm run images     # requires ImageMagick (`convert`) on PATH
```

This writes `src/assets/opt/**` (build assets) and `public/img/**` (preloaded hero) and
prints a before/after size report.

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview the production build (http://localhost:4173) — use this to check real
# bundle sizes, code splitting and caching behaviour
npm run preview

# Regenerate optimized WebP derivatives after adding photos
npm run images
```

## Deployment (Cloudflare — Workers with static assets)

The project is configured for **Cloudflare's unified Workers & Pages platform** (a Worker serving the Vite build as static assets):

- `wrangler.toml` — Worker config: `[assets] directory = "./dist"` + `not_found_handling = "single-page-application"` (SPA fallback)
- `public/_headers` — asset caching & security headers
- `.node-version` + `engines.node` — pins **Node 22** (required by wrangler 4.x) on Cloudflare's build system
- `package.json` scripts:
  - `prepare` — **auto-builds on every `npm install`/`npm ci`**, so `dist/` always exists before the deploy command runs (this is what makes Cloudflare's build pipeline work even without a separate build command)
  - `npm run deploy` — build + `wrangler deploy`
  - `npm run cf:dev` — build + local Worker runtime preview

> **Important:** the `name` in `wrangler.toml` must match your app's name in the Cloudflare dashboard. If your Worker has a different name, update it there.

### Option 1 — Git integration (auto-deploy on push)

Cloudflare's build pipeline (`npm clean-install` → deploy command) works out of the box because the `prepare` script builds `dist/` during dependency install. Still, the recommended dashboard settings (Workers & Pages → your app → Settings → Build) are:

| Setting | Value |
|---|---|
| **Build command** | `npm run build` (optional — `prepare` covers it) |
| **Deploy command** | `npx wrangler deploy` for production branch / `npx wrangler versions upload` for preview branches (Cloudflare defaults) |
| **Production branch** | `main` |

Preview (non-production) branches get a preview version URL via `versions upload`; pushing to the production branch runs `wrangler deploy`. Both need **Node 22** — already handled by `.node-version` in this repo.

### Option 2 — Deploy via Wrangler CLI

```bash
# One-time: login to Cloudflare
npx wrangler login

# Build + deploy
npm run deploy
```

### Option 3 — GitHub Actions

A ready-made workflow template is included at `docs/deploy-cloudflare.yml.example`. Copy it into place and add the secrets to your repository (**Settings → Secrets and variables → Actions**):

```bash
mkdir -p .github/workflows
cp docs/deploy-cloudflare.yml.example .github/workflows/deploy-cloudflare.yml
```

Required secrets:

- `CLOUDFLARE_API_TOKEN` — API token with permission to edit Workers (and Deployments)
- `CLOUDFLARE_ACCOUNT_ID` — your Cloudflare account ID

Once added, every push to `main` deploys automatically.

### Local Cloudflare preview

```bash
# Serves the production build through Wrangler's local Worker runtime
npm run cf:dev
```

### Classic Cloudflare Pages (alternative)

Prefer the classic Pages product instead? Skip `wrangler.toml` entirely — in the dashboard create a **Pages** project (Connect to Git) with framework preset **Vite**, build command `npm run build`, output directory `dist`, or from your machine run:

```bash
npx wrangler login
npm run deploy:pages   # build + wrangler pages deploy dist
```

## Project Structure

```
src/
├── App.tsx              # Main application component
├── main.tsx             # Entry point
├── index.css            # Global styles & Tailwind config
├── assets.ts            # Image & asset imports
├── routes.ts            # Lazy route chunks + prefetch helpers
├── hooks/useReveal.ts   # Shared IntersectionObserver reveal hook
├── components/SmartImg.tsx  # Responsive WebP + LQIP image component
├── assets/
│   ├── opt/             # Generated WebP derivatives (used by the app)
│   ├── logos/           # Company logo
│   └── images/
│       ├── about/       # About section images
│       ├── leaders/     # Management team photos
│       ├── sections/    # Production unit banners
│       ├── weaving/     # Weaving unit gallery
│       ├── flat-bed/    # Flatbed printing gallery
│       ├── digital/     # Digital printing gallery
│       └── company-gallery/  # General factory gallery
```

## Production Units

| Unit | Description |
|------|-------------|
| Weaving | High-speed automated loom infrastructure |
| Flat Bed & Rotary Printing | Industrial screen printing lines |
| Digital Printing | Ultra high-definition direct-to-fabric |
| Dyeing & Pre-Treatment | Jiggers, Pad Batch, Mercerizing |
| Finishing & Stenter | Bruckner Stenters, Calendars, Super Wash |
| ETP | 2,400 m³/day Biochemical Effluent Treatment |

## Run with Server

```bash
# Lightweight Node static file server for the source tree (http://localhost:3000)
node server.js

# To serve the *optimized* production build instead, use:
npm run preview
```

## License

Private - Abed Textile Processing Mills Ltd.
