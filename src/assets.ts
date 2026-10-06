/**
 * Categorized WebP image asset registry.
 *
 * Photos are kept in category folders under `src/assets/images/` and named with
 * lowercase snake_case category labels plus two-digit sequence numbers. Gallery
 * images are additionally grouped by their displayed category.
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
  logo: img('logos/logos_01'),
  qrCode: img('logos/logos_02'),

  /** Preloaded full-bleed LCP hero image */
  hero: {
    src: `${heroBase}/hero_03.webp`,
    srcSet: `${heroBase}/hero_01.webp 960w, ${heroBase}/hero_02.webp 1440w, ${heroBase}/hero_03.webp 1920w`,
    full: `${heroBase}/hero_03.webp`,
  } as Img,

  heroCampus: img('hero/hero_01'),
  heroLoom: img('hero/hero_03'),
  about: img('hero/hero_01'),

  leaders: {
    abedAli: img('leaders/leaders_01'),
    monjurElahi: img('leaders/leaders_02'),
    abdullahAlMamun: img('leaders/leaders_03'),
    mahbuburRahman: img('leaders/leaders_04'),
  },

  banners: {
    weaving: img('units/weaving_01'),
    pretreatment: img('units/pretreatment_01'),
    dyeing: img('units/dyeing_01'),
    conventionalPrinting: img('units/conventional_printing_01'),
    flatbed: img('units/conventional_printing_01'),
    digital: img('units/digital_printing_01'),
    washing: img('units/washing_01'),
    finishing: img('units/finishing_01'),
    etp: img('units/etp_01'),
  },

  machinery: {
    digitalSinglePass: img('machinery/digital_printing_01'),
    dyeingJiggers: img('machinery/dyeing_02'),
    stenterFrame: img('machinery/finishing_02'),
    fabricInspection: img('machinery/quality_01'),
    calenderMachine: img('machinery/finishing_01'),
    coldPadBatch: img('machinery/dyeing_01'),
    mercerizingRange: img('machinery/pretreatment_01'),
  },

  products: {
    dyedFabrics: img('products/dyed_fabrics_01'),
    printedFabrics: img('products/printed_fabrics_01'),
    digitalPrint1: img('products/digital_printing_01'),
    digitalPrint2: img('products/digital_printing_02'),
    digitalPrint3: img('products/digital_printing_03'),
    digitalPrint4: img('products/digital_printing_04'),
    digitalPrint5: img('products/digital_printing_05'),
    digitalPrint6: img('products/digital_printing_06'),
  },

  technology: {
    singlePass: img('technology/digital_printing_01'),
    printhead: img('technology/digital_printing_02'),
    colourManagement: img('technology/colour_management_01'),
    rdLab: img('technology/quality_01'),
  },

  sustainability: {
    etpAeration: img('sustainability/etp_01'),
    waterTreatment: img('sustainability/water_treatment_01'),
    energyUtilities: img('sustainability/energy_01'),
    greenCampus: img('sustainability/campus_01'),
  },

  affiliates: {
    rossaInks: img('affiliates/affiliates_07'),
    rbrInnovations: img('affiliates/affiliates_06'),
    a3ColorChem: img('affiliates/affiliates_01'),
    a3ColorCorporation: img('affiliates/affiliates_02'),
    gmTextile: img('affiliates/affiliates_03'),
    nadiBanglaTextile: img('affiliates/affiliates_04'),
    nodiBanglaGroup: img('affiliates/affiliates_05'),
  },

  csr: {
    workforceTeam: img('csr/csr_01'),
    vocationalEducation: img('csr/csr_02'),
  },

  gallery: (
    [
      ['production/production_01', 'High Speed Weaving Floor', 'Production'],
      ['quality/quality_01', 'Fabric Inspection & Roll Quality Check', 'Quality'],
      ['printing/conventional_printing_01', 'Automatic Screen & Rotary Print Line', 'Printing'],
      ['dyeing/dyeing_01', 'High Volume Dyeing Jigger Battery', 'Dyeing'],
      ['finishing/finishing_01', 'Modern Stenter Heat Setting Range', 'Finishing'],
      ['quality/quality_02', 'Color Formulation & Spectrophotometer Lab', 'Quality'],
      ['dyeing/dyeing_02', 'Continuous Open-Width Washing Range', 'Dyeing'],
      ['finishing/finishing_02', 'Heavy Calender Glazing Finishing', 'Finishing'],
      ['dyeing/dyeing_03', 'Roller Mercerizing Tension Range', 'Dyeing'],
      ['printing/digital_printing_01', 'Industrial Digital Textile Printing Suite', 'Printing'],
      ['finishing/finishing_03', 'Export Packaging & Baling Station', 'Finishing'],
      ['facility/facility_01', 'Ghoradia Industrial Campus Infrastructure', 'Facility'],
      ['sustainability/sustainability_01', 'Biological ETP Aeration Tank', 'Sustainability'],
      ['compliance/compliance_01', 'Certified Worker Safety & Hydrant Zone', 'Compliance'],
      ['products/products_01', 'Export Grade Sharee & 3-Pcs Output', 'Products'],
      ['quality/quality_03', 'Laboratory Fastness & Physical Testing', 'Quality'],
      ['production/production_02', 'Spinning & Yarn Preparation Overview', 'Production'],
      ['facility/facility_02', 'Yarn Storage & Conditioning Floor', 'Facility'],
      ['production/production_03', 'Precision High-Speed Warping Range', 'Production'],
      ['production/production_04', 'Industrial Sizing Machine Operation', 'Production'],
      ['production/production_05', 'Automated Loom Shed Operations', 'Production'],
      ['quality/quality_04', 'Greige Fabric Inspection Light Table', 'Quality'],
      ['dyeing/dyeing_04', 'Continuous Desizing & Scouring Line', 'Dyeing'],
      ['dyeing/dyeing_05', 'Continuous Bleaching & Pretreatment', 'Dyeing'],
      ['finishing/finishing_04', 'Mercerizing Chemical Tension Control', 'Finishing'],
      ['quality/quality_05', 'Dyeing Lab Color Matching & Pipetting', 'Quality'],
      ['dyeing/dyeing_06', 'Covered Jigger Batch Dyeing Process', 'Dyeing'],
      ['finishing/finishing_05', 'Pad-Dry-Cure Chemical Finishing', 'Finishing'],
      ['finishing/finishing_06', 'Multi-Chamber Stenter Frame Operation', 'Finishing'],
      ['finishing/finishing_07', 'Sanforizing Fabric Pre-Shrinking Unit', 'Finishing'],
      ['finishing/finishing_08', 'Saree & Poplin Felt Calender Glazing', 'Finishing'],
      ['quality/quality_06', 'Finished Roll Inspection & Metric Station', 'Quality'],
      ['products/products_02', 'Hydraulic Bale Press Packing Unit', 'Products'],
      ['sustainability/sustainability_02', 'Biochemical Effluent Treatment Plant (ETP)', 'Sustainability'],
      ['sustainability/sustainability_03', 'Water Recovery & Filtration Plant', 'Sustainability'],
      ['facility/facility_03', 'Industrial Boiler House & Steam System', 'Facility'],
      ['facility/facility_04', 'Central Compressed Air Utility Station', 'Facility'],
      ['facility/facility_05', 'Electrical Substation & Generator Backup', 'Facility'],
      ['compliance/compliance_02', 'Active Fire Hydrant & Life Safety Network', 'Compliance'],
    ] as const
  ).map(([imagePath, title, cat]): GalleryItem => {
    const thumb = img(`gallery/${imagePath}`);
    return { thumb, src: thumb.src, title, cat };
  }),
};
