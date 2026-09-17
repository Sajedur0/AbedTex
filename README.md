# Abed Textile Processing Mills Ltd.

**আবেদ টেক্সটাইল প্রোসেসিং মিলস লিমিটেড**

An Oeko-Tex Certified 100% Export Oriented Manufacturer of Quality Processing Mills in Bangladesh. Since 1993.

---

## Tech Stack

- **Framework:** React 18 + TypeScript
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS 3
- **Icons:** Lucide React
- **Fonts:** Outfit, Inter, Hind Siliguri (Bengali)

## Features

- Bilingual support (English / Bengali)
- Animated canvas background with wave patterns
- 3D scroll perspective effects
- Tilt-hover interactive cards
- Scroll reveal animations
- Fullscreen image lightbox
- 72+ machinery database with search & filter
- 6 product categories with detailed specs
- 5 production unit showcases with gallery
- Compliance & labor standards section
- Company leadership profiles
- RFQ (Request for Quotation) form
- Company gallery with category filter
- Responsive design (Mobile + Desktop)
- Glassmorphism UI components

## Getting Started

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## Deployment (Cloudflare — Workers with static assets)

The project is configured for **Cloudflare's unified Workers & Pages platform** (a Worker serving the Vite build as static assets):

- `wrangler.toml` — Worker config: `[assets] directory = "./dist"` + `not_found_handling = "single-page-application"` (SPA fallback)
- `public/_headers` — asset caching & security headers
- `.node-version` + `engines.node` — pins **Node 22** (required by wrangler 4.x) on Cloudflare's build system
- `package.json` scripts:
  - `npm run deploy` — build + `wrangler deploy`
  - `npm run cf:dev` — build + local Worker runtime preview

> **Important:** the `name` in `wrangler.toml` must match your app's name in the Cloudflare dashboard. If your Worker has a different name, update it there.

### Option 1 — Git integration (auto-deploy on push)

If you already connected the repo in the dashboard, make sure the build settings are:

| Setting | Value |
|---|---|
| **Build command** | `npm run build` |
| **Deploy command** | `npx wrangler deploy` |
| **Branch control / Production branch** | `main` (or your preferred branch) |

Cloudflare automatically runs `npx wrangler versions upload` for non-production branches (preview builds) and `npx wrangler deploy` for the production branch. Non-production branches also need **Node 22** — already handled by `.node-version` in this repo.

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
├── assets/
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
# Start the production server
node server.js
```

Server runs at `http://localhost:3000`

## License

Private - Abed Textile Processing Mills Ltd.
