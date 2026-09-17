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

## Deployment (Cloudflare Pages)

The project is configured to deploy to **Cloudflare Pages** out of the box:

- `wrangler.toml` — Cloudflare Pages project config (`pages_build_output_dir = "dist"`)
- `public/_redirects` — SPA fallback (`/* → /index.html 200`)
- `public/_headers` — asset caching & security headers
- `.node-version` — pins Node 20 for Cloudflare's build system

### Option 1 — Deploy via Wrangler CLI (recommended)

```bash
# One-time: login to Cloudflare
npx wrangler login

# Build + deploy to Cloudflare Pages
npm run deploy
```

The first `npm run deploy` will ask you to create a Pages project (name it `abedtex` or accept the default from `wrangler.toml`). After that, each run creates a new deployment and prints a `*.pages.dev` URL.

### Option 2 — Connect the Git repository (auto-deploy on push)

1. In the Cloudflare dashboard go to **Workers & Pages → Create → Pages → Connect to Git**.
2. Select this repository.
3. Build settings:
   - **Framework preset:** Vite (or None)
   - **Build command:** `npm run build`
   - **Build output directory:** `dist`
4. Save & Deploy. Every push to `main` now deploys automatically.

### Option 3 — GitHub Actions

A ready-made workflow template is included at `docs/deploy-cloudflare.yml.example`. Copy it into place and add the secrets to your repository (**Settings → Secrets and variables → Actions**):

```bash
mkdir -p .github/workflows
cp docs/deploy-cloudflare.yml.example .github/workflows/deploy-cloudflare.yml
```

Required secrets:

- `CLOUDFLARE_API_TOKEN` — API token with **Cloudflare Pages: Edit** permission
- `CLOUDFLARE_ACCOUNT_ID` — your Cloudflare account ID

Once added, every push to `main` deploys automatically.

### Local Cloudflare preview

```bash
# Serves the production build through Wrangler's local Pages runtime
npm run pages:dev
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
