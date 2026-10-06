/**
 * Categorized WebP Image Asset Registry.
 *
 * All images are categorized in subfolders under `src/assets/images/` and encoded
 * in WebP format:
 *   - hero/
 *   - leaders/
 *   - units/
 *   - machinery/
 *   - products/
 *   - technology/
 *   - sustainability/
 *   - affiliates/
 *   - csr/
 *   - logos/
 *   - gallery/
 */

export interface Img {
  src: string;
  srcSet?: string;
  lqip?: string;
  full?: string;
}

export interface GalleryItem {
  thumb: Img;
  src: string;
  title: string;
  cat: string;
}

const images = import.meta.glob('./assets/images/**/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
}) as Record<string, string>;

function img(path: string): Img {
  const resolved = images[`./assets/images/${path}.webp`];
  if (!resolved && import.meta.env.DEV) {
    console.warn(`[assets] missing image: src/assets/images/${path}.webp`);
  }
  return {
    src: resolved ?? '',
    full: resolved ?? '',
  };
}

const heroBase = '/img/hero';

export const assets = {
  logo: img('logos/abed-logo'),
  qrCode: img('logos/qr-code'),

  /** Preloaded full-bleed LCP hero image */
  hero: {
    src: `${heroBase}-1920.webp`,
    srcSet: `${heroBase}-960.webp 960w, ${heroBase}-1440.webp 1440w, ${heroBase}-1920.webp 1920w`,
    full: `${heroBase}-1920.webp`,
  } as Img,

  heroCampus: img('hero/campus-exterior'),
  heroLoom: img('hero/hero-loom'),
  about: img('hero/campus-exterior'),

  leaders: {
    abedAli: img('leaders/abed-ali'),
    monjurElahi: img('leaders/monjur-elahi'),
    abdullahAlMamun: img('leaders/abdullah-al-mamun'),
    mahbuburRahman: img('leaders/mahbubur-rahman'),
  },

  banners: {
    weaving: img('units/weaving'),
    pretreatment: img('units/pretreatment'),
    dyeing: img('units/dyeing'),
    conventionalPrinting: img('units/conventional-printing'),
    flatbed: img('units/conventional-printing'),
    digital: img('units/digital-printing'),
    washing: img('units/washing'),
    finishing: img('units/finishing'),
    etp: img('units/etp'),
  },

  machinery: {
    digitalSinglePass: img('machinery/digital-single-pass'),
    dyeingJiggers: img('machinery/dyeing-jiggers'),
    stenterFrame: img('machinery/stenter-frame'),
    fabricInspection: img('machinery/fabric-inspection'),
    calenderMachine: img('machinery/calender-machine'),
    coldPadBatch: img('machinery/cold-pad-batch'),
    mercerizingRange: img('machinery/mercerizing-range'),
  },

  products: {
    dyedFabrics: img('products/dyed-fabrics'),
    printedFabrics: img('products/printed-fabrics'),
    digitalPrint1: img('products/digital-print-1'),
    digitalPrint2: img('products/digital-print-2'),
    digitalPrint3: img('products/digital-print-3'),
    digitalPrint4: img('products/digital-print-4'),
    digitalPrint5: img('products/digital-print-5'),
    digitalPrint6: img('products/digital-print-6'),
    finishedFabrics: img('products/finished-fabrics'),
  },

  technology: {
    singlePass: img('technology/single-pass-technology'),
    printhead: img('technology/printhead-systems'),
    colourManagement: img('technology/colour-management'),
    rdLab: img('technology/rd-testing-lab'),
  },

  sustainability: {
    etpAeration: img('sustainability/etp-aeration'),
    waterTreatment: img('sustainability/water-treatment'),
    energyUtilities: img('sustainability/energy-utilities'),
    greenCampus: img('sustainability/green-campus'),
  },

  affiliates: {
    rossaInks: img('affiliates/rossa-digital-inks'),
    rbrInnovations: img('affiliates/rbr-innovations'),
    a3ColorChem: img('affiliates/a3-color-chem'),
    a3ColorCorporation: img('affiliates/a3-color-corporation'),
    gmTextile: img('affiliates/gm-textile'),
    nadiBanglaTextile: img('affiliates/nadi-bangla-textile'),
    nodiBanglaGroup: img('affiliates/nodi-bangla-group'),
  },

  csr: {
    workforceTeam: img('csr/workforce-team'),
    vocationalEducation: img('csr/vocational-education'),
  },

  gallery: (
    [
      ['01', 'High Speed Weaving Floor', 'Production'],
      ['02', 'Fabric Inspection & Roll Quality Check', 'Quality'],
      ['03', 'Automatic Screen & Rotary Print Line', 'Printing'],
      ['04', 'High Volume Dyeing Jigger Battery', 'Dyeing'],
      ['05', 'Modern Stenter Heat Setting Range', 'Finishing'],
      ['06', 'Color Formulation & Spectrophotometer Lab', 'Quality'],
      ['07', 'Continuous Open-Width Washing Range', 'Dyeing'],
      ['08', 'Heavy Calender Glazing Finishing', 'Finishing'],
      ['09', 'Roller Mercerizing Tension Range', 'Dyeing'],
      ['10', 'Industrial Digital Textile Printing Suite', 'Printing'],
      ['11', 'Export Packaging & Baling Station', 'Finishing'],
      ['12', 'Ghoradia Industrial Campus Infrastructure', 'Facility'],
      ['13', 'Biological ETP Aeration Tank', 'Sustainability'],
      ['14', 'Certified Worker Safety & Hydrant Zone', 'Compliance'],
      ['15', 'Export Grade Sharee & 3-Pcs Output', 'Products'],
      ['16', 'Laboratory Fastness & Physical Testing', 'Quality'],
      ['17', 'Spinning & Yarn Preparation Overview', 'Production'],
      ['18', 'Yarn Storage & Conditioning Floor', 'Facility'],
      ['19', 'Precision High-Speed Warping Range', 'Production'],
      ['20', 'Industrial Sizing Machine Operation', 'Production'],
      ['21', 'Automated Loom Shed Operations', 'Production'],
      ['22', 'Greige Fabric Inspection Light Table', 'Quality'],
      ['23', 'Continuous Desizing & Scouring Line', 'Dyeing'],
      ['24', 'Continuous Bleaching & Pretreatment', 'Dyeing'],
      ['25', 'Mercerizing Chemical Tension Control', 'Finishing'],
      ['26', 'Dyeing Lab Color Matching & Pipetting', 'Quality'],
      ['27', 'Covered Jigger Batch Dyeing Process', 'Dyeing'],
      ['28', 'Pad-Dry-Cure Chemical Finishing', 'Finishing'],
      ['29', 'Multi-Chamber Stenter Frame Operation', 'Finishing'],
      ['30', 'Sanforizing Fabric Pre-Shrinking Unit', 'Finishing'],
      ['31', 'Saree & Poplin Felt Calender Glazing', 'Finishing'],
      ['32', 'Finished Roll Inspection & Metric Station', 'Quality'],
      ['33', 'Hydraulic Bale Press Packing Unit', 'Products'],
      ['34', 'Biochemical Effluent Treatment Plant (ETP)', 'Sustainability'],
      ['35', 'Water Recovery & Filtration Plant', 'Sustainability'],
      ['36', 'Industrial Boiler House & Steam System', 'Facility'],
      ['37', 'Central Compressed Air Utility Station', 'Facility'],
      ['38', 'Electrical Substation & Generator Backup', 'Facility'],
      ['39', 'Active Fire Hydrant & Life Safety Network', 'Compliance'],
    ] as const
  ).map(([id, title, cat]): GalleryItem => {
    const thumb = img(`gallery/gallery-${id}`);
    return { thumb, src: thumb.src, title, cat };
  }),
};
