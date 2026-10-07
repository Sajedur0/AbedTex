# Abed Textile Processing Mills Ltd.

**আবেদ টেক্সটাইল প্রসেসিং মিলস লিমিটেড**

*Textile Expertise. Digital Progress.*  
An Integrated Textile Processing & High-Speed Digital Printing Enterprise in Bangladesh. Established in the early 1990s.

---

## Overview

Abed Textile Processing Mills Limited operates an integrated manufacturing platform at Ghoradia, Narsingdi, Bangladesh. With over three decades of manufacturing experience and an 18,000 workforce, the enterprise connects weaving, pretreatment, dyeing, conventional screen/serbo printing, high-speed single-pass digital printing, washing, finishing, and biological effluent treatment into one coordinated operation.

### Key Verified Metrics

- **Workforce:** 18,000 employees & skilled technical teams
- **Digital & Total Printing Capacity:** 120,000 metres / day
- **Dyeing Capacity:** 80,000 metres / day (35 jiggers & Cold Pad Batch)
- **Conventional Screen / Serbo Printing:** 80,000 metres / day
- **Continuous Washing Range:** 280,000 metres / day
- **Finishing & Stenters:** 280,000 metres / day (7 Stenters & 4 Heavy Calenders)
- **Effluent Treatment Plant (ETP):** 2,400+ m³/day Biochemical Treatment Facility

---

## Tech Stack

- **Framework:** React 19 + TypeScript
- **Build Tool:** Vite 8
- **Styling:** Tailwind CSS 4
- **Icons:** Lucide React
- **Routing:** React Router 7 (hash router) with route-level code splitting
- **Fonts:** Montserrat (display) + DM Sans (body) — self-hosted variable WOFF2
- **Image Pipeline:** Category-foldered WebP photos with consistent snake_case names and two-digit sequence numbers (the site icon remains PNG)

---

## Categorized Asset Architecture

Photos are WebP files grouped into category folders under `src/assets/images/`. Filenames use lowercase `snake_case` category names with zero-padded sequence numbers, for example `digital_printing_01.webp` and `digital_printing_02.webp`. Gallery images are additionally separated into subfolders that match their displayed category. The responsive landing-page images and PNG site icon are organized under `public/img/`.

```
src/assets/images/
├── affiliates/      # Partner companies
├── csr/             # Workforce & vocational education
├── gallery/         # Factory records, grouped by category
│   ├── compliance/
│   ├── dyeing/
│   ├── facility/
│   ├── finishing/
│   ├── printing/
│   ├── production/
│   ├── products/
│   ├── quality/
│   ├── sustainability/
│   └── weaving/     # Loom shed, warp threading, greige output
├── hero/            # Mills & loom backgrounds
├── leaders/         # Leadership portraits
├── logos/           # Company logo & QR profile code
├── machinery/       # Production equipment
├── products/        # Fabric products & digital-print library
├── sustainability/  # ETP, water, energy & mill site
├── technology/      # Printing systems, color management & lab
└── units/           # Production-wing banners

public/img/
├── hero/            # Responsive hero_01.webp … hero_03.webp
└── logos/           # Site icon
```

---

## Production Wings & Machinery

| No. | Stage | Machine / Category | Quantity | Capability |
|-----|-------|--------------------|----------|------------|
| 01 | **Weaving** | Weaving / Repair Looms | 32 | Greige fabric formation |
| 02 | **Pretreatment** | Singeing Machines | 2 | Gas-fired surface smoothing |
| 03 | **Pretreatment** | Mercerizing Machines | 2 | Clip & roller mercerize |
| 04 | **Dyeing** | Cold Pad Batch (CPB) Machines | 2 | Low liquor ratio coloration |
| 05 | **Dyeing** | Dyeing Jiggers | 35 | Single, double, jumbo & covered |
| 06 | **Printing** | Digital Printing Machines | 8 | Single-pass Atexco, VEGA, BYDI, RBR |
| 07 | **Printing** | Serbo Printing Machines | 5 | Screen & serbo precision lines |
| 08 | **Printing** | Loop Steamers | 2 | High-temperature color fixation |
| 09 | **Finishing** | Stenter Machines | 7 | Bruckner & Babcock heat-setting |
| 10 | **Finishing** | Calender Machines | 4 | Bowl, saree felt & poplin felt |

---

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Production build
npm run build

# Preview production build
npm run preview
```

---

## Leadership

- **Haji Abed Ali Miah** — Founder & Visionary Pioneer
- **Mohammad Monjur Elahi, MP** — Chairman, Abed Textile Processing Mills Ltd. & Nadi Bangla Group
- **Abdullah Al Mamun** — Managing Director / CEO
- **Mahbubur Rahman Monir** — Director

---

## Contact

- **Factory:** Ghoradia, Narsingdi Sadar, Narsingdi, Bangladesh (`01711644582`, `+880 2 9462750-51`)
- **Corporate Office:** House 2 (Flat 5/A), Road 11, Sector 6, Uttara, Dhaka-1230 (`+880 2 8932117`)
- **Email:** `abedtextilebd@yahoo.com`

---

## License

Private - Abed Textile Processing Mills Ltd.
