/**
 * Abed Textile Processing Mills Limited — Official Profile Data
 * Derived directly from the 19-Page Corporate Profile Document.
 */

export const facts = {
  established: 'Early 1990s',
  tagline: 'Textile Expertise. Digital Progress.',
  experience: '30+ Years',
  founder: 'Haji Abed Ali Miah',
  workforce: '18,000',
  facility: 'Ghoradia, Narsingdi',
  coreBusiness: 'Textile Processing & High-Speed Digital Printing',
  
  // Daily verified operational capacities
  printingCapacity: '120,000 m/day',
  dyeingCapacity: '80,000 m/day',
  conventionalPrintCapacity: '80,000 m/day',
  washingCapacity: '280,000 m/day',
  finishingCapacity: '280,000 m/day',

  totalMachines: '89+',
  totalCategories: '10 Stages',
  etp: 'Biochemical Effluent Treatment Plant',
};

/**
 * 10 Principal Machinery Categories (Page 13 Table)
 * Exactly as verified in the official profile.
 */
export interface MachineryItem {
  id: string;
  stage: 'Weaving' | 'Pretreatment' | 'Dyeing' | 'Printing' | 'Finishing';
  name: string;
  description: string;
  qty: number;
  highlight?: string;
}

export const machineryTable: MachineryItem[] = [
  {
    id: '01',
    stage: 'Weaving',
    name: 'Weaving / Repair Looms',
    description: 'High-speed automated industrial loom shed for precision greige fabric formation.',
    qty: 32,
    highlight: 'Greige production',
  },
  {
    id: '02',
    stage: 'Pretreatment',
    name: 'Singeing Machines',
    description: 'Gas-fired precision singeing machines for smooth fabric surface and lint elimination.',
    qty: 2,
    highlight: 'Surface smoothing',
  },
  {
    id: '03',
    stage: 'Pretreatment',
    name: 'Mercerizing Machines',
    description: 'Clip and roller mercerizing ranges for fabric luster, tensile strength, and dye receptivity.',
    qty: 2,
    highlight: 'Clip & Roller mercerize',
  },
  {
    id: '04',
    stage: 'Dyeing',
    name: 'Cold Pad Batch (CPB) Machines',
    description: 'Energy-efficient pad-batch coloration units for reactive dyeing with low liquor ratio.',
    qty: 2,
    highlight: 'Eco-friendly pad dyeing',
  },
  {
    id: '05',
    stage: 'Dyeing',
    name: 'Dyeing Jiggers',
    description: 'Single, double, jumbo, and covered jiggers for controlled shade uniformity and deep penetration.',
    qty: 35,
    highlight: 'Single, Double, Jumbo & Covered',
  },
  {
    id: '06',
    stage: 'Printing',
    name: 'Digital Printing Machines',
    description: 'High-speed industrial fleet: Single-pass Atexco, Atexco VEGA, BYDI, WILTOP, Hangzhou, and RBR Hybrid.',
    qty: 8,
    highlight: 'Single-pass & Multi-pass high speed',
  },
  {
    id: '07',
    stage: 'Printing',
    name: 'Serbo Printing Machines',
    description: 'Precision screen and serbo printing systems for crisp repetitive patterns.',
    qty: 5,
    highlight: 'Rotary & Screen precision',
  },
  {
    id: '08',
    stage: 'Printing',
    name: 'Loop Steamers',
    description: 'Continuous steam fixation chambers for reactive and disperse dye vibrancy and wash-fastness.',
    qty: 2,
    highlight: 'Color fixation chambers',
  },
  {
    id: '09',
    stage: 'Finishing',
    name: 'Stenter Machines',
    description: 'Multi-chamber Bruckner and Babcock heat-setting stenters for width control and dimensional stability.',
    qty: 7,
    highlight: 'Bruckner & Babcock (6 + 1)',
  },
  {
    id: '10',
    stage: 'Finishing',
    name: 'Calender Machines',
    description: 'Heavy hydraulic bowl calenders, saree felt calenders, and poplin felt finishing units.',
    qty: 4,
    highlight: 'Bowl, Saree & Poplin felt',
  },
];

/**
 * Our Journey Timeline (Page 3)
 */
export const journeyMilestones = [
  {
    era: 'Early 1990s',
    title: 'The Beginning',
    desc: 'Haji Abed Ali Miah establishes the foundation of Abed Textile in Narsingdi, committed to domestic industrial capability.',
  },
  {
    era: 'Base Expansion',
    title: 'Building the Base',
    desc: 'Capabilities expand horizontally across comprehensive textile processing: weaving, dyeing, screen printing and finishing.',
  },
  {
    era: 'Digital Shift',
    title: 'Digital Transition',
    desc: 'Investment begins in modern digital systems for superior design flexibility, rapid turnaround, and higher production efficiency.',
  },
  {
    era: 'Single-Pass Scale',
    title: 'Single-Pass Printing',
    desc: 'High-speed single-pass digital textile printing becomes integrated into industrial production, reaching 120,000 metres daily.',
  },
  {
    era: 'Specialization',
    title: 'Expanding Digital Capability',
    desc: 'Digital printing matures into one of Abed Textile’s defining core strengths with advanced printheads and RIP color workflows.',
  },
  {
    era: 'Tech Integration',
    title: 'Beyond Processing',
    desc: 'Practical digital printing experience leads to strategic ecosystem investments in printing inks (Rossa) and machinery (RBR).',
  },
  {
    era: 'Future Horizon',
    title: 'Looking Ahead',
    desc: 'Cutting-edge technology, technical workforce capability, and responsible environmental stewardship guide sustainable growth.',
  },
];

/**
 * Leadership (Pages 4, 6, 7)
 */
export const leaders = [
  {
    id: 'founder',
    name: 'Haji Abed Ali Miah',
    role: 'Founder & Visionary Pioneer',
    designation: 'Founder',
    philosophy: ['Produce locally.', 'Build capability.', 'Invest for the future.'],
    bio: 'Abed Textile began with the vision of Haji Abed Ali Miah in Narsingdi in the early 1990s. At a time when Bangladesh was developing its domestic textile base, he focused on building local manufacturing capability. That foundation later expanded into a broader textile processing operation and, eventually, advanced digital textile printing.',
    imageKey: 'abedAli',
  },
  {
    id: 'chairman',
    name: 'Mohammad Monjur Elahi, MP',
    role: 'Chairman, Abed Textile & Nadi Bangla Group',
    designation: 'Chairman',
    credentials: 'B.Com, National University, Bangladesh',
    experience: 'Textile · Construction · Hospitality · Property',
    focus: 'Industrial leadership · Business development · Job creation · Innovation · Community engagement',
    bio: 'Mohammad Monjur Elahi MP is the Chairman of Abed Textile Processing Mills Limited and Chairman of Nadi Bangla Group. He holds a B.Com from National University, Bangladesh, and brings entrepreneurial experience across textile, construction, hospitality, property and related businesses. His leadership centres on industrial modernization, community engagement, and regional employment.',
    mobile: '+880 1713-562042',
    email: 'abedtextilebd@yahoo.com',
    imageKey: 'monjurElahi',
  },
  {
    id: 'md',
    name: 'Abdullah Al Mamun',
    role: 'Managing Director / CEO',
    designation: 'Managing Director / CEO',
    experience: 'Over two decades leading Abed Textile Processing Mills Limited',
    responsibility: 'A3 Color Chem, Nodi Bangla Group, Rossa Digital Ink Tech. and BTMA',
    bio: 'He has led Abed Textile Processing Mills Limited for over two decades, growing it into a vertically integrated operation from weaving to digital printing. A pioneering entrepreneur of Narsingdi, he has launched several start-ups and social organizations in the region and plays an active role in national textile policy through BTMA.',
    mobile: '01713-519783',
    email: 'abedmamun@hotmail.com',
    imageKey: 'abdullahAlMamun',
  },
  {
    id: 'director',
    name: 'Mahbubur Rahman Monir',
    role: 'Director',
    designation: 'Director',
    responsibility: 'Director, Abed Textile Processing Mills Limited',
    bio: 'Directs operational plant processes, technical infrastructure modernization, and supply chain integrity across all manufacturing wings at the Ghoradia campus.',
    mobile: '01711-707403',
    email: 'abedmonir@hotmail.com',
    imageKey: 'mahbuburRahman',
  },
];

/**
 * 6 Core Values & Code of Conduct (Page 5)
 */
export const coreValues = [
  {
    title: 'Integrity',
    desc: 'Honour commitments and conduct business responsibly with transparency and honesty.',
  },
  {
    title: 'Quality',
    desc: 'Build uncompromising consistency into development, processing, and bulk production.',
  },
  {
    title: 'Innovation',
    desc: 'Explore better technologies, digital print advancements, and modern manufacturing methods.',
  },
  {
    title: 'Responsibility',
    desc: 'Consider our people, natural resources, and the environment in every operational decision.',
  },
  {
    title: 'Partnership',
    desc: 'Build enduring, win-win relationships grounded in mutual trust and dependable execution.',
  },
  {
    title: 'Learning',
    desc: 'Strengthen workforce capability continuously through technological training and knowledge transfer.',
  },
];

export const codeOfConduct = [
  'Full Regulatory Compliance',
  'Mutual Respect & Fair Treatment',
  'Workplace Safety First',
  'Ethical Business Practices',
  'Environmental Stewardship',
  'Strict Client Confidentiality',
  'Responsible Supply Chain',
];

/**
 * Integrated Manufacturing Workflow (Page 8)
 */
export const workflowSteps = [
  { step: '01', name: 'Fabric Preparation', desc: 'Singeing, desizing, and greige fabric surface optimization.' },
  { step: '02', name: 'Pretreatment', desc: 'Scouring, bleaching, and clip/roller mercerizing for luster.' },
  { step: '03', name: 'Dyeing', desc: 'Controlled jigger & cold pad batch coloration with precise recipe dosing.' },
  { step: '04', name: 'Print Development', desc: 'Digital color separation, RIP profiling, and artwork pre-press.' },
  { step: '05', name: 'Printing', desc: 'High-speed single-pass digital, rotary, and flatbed printing.' },
  { step: '06', name: 'Washing', desc: 'Continuous open-width tension-free washing to strip unfixed dye.' },
  { step: '07', name: 'Finishing', desc: 'Stenter heat-setting, chemical softening, and heavy calender glazing.' },
  { step: '08', name: 'Quality Inspection', desc: 'Multi-parameter fastness testing, GSM validation, and rolling checks.' },
  { step: '09', name: 'Packaging & Delivery', desc: 'Hydraulic baling, moisture-proof wrapping, and on-time dispatch.' },
];

/**
 * Digital Textile Printing Highlights (Page 10 & 14)
 */
export const digitalAdvantages = [
  {
    title: 'Design Flexibility',
    desc: 'Efficient handling of hyper-complex gradients, unlimited color palettes, and rapid design variations.',
  },
  {
    title: 'Faster Changeover',
    desc: 'Elimination of rotary screens and flatbed stencil preparation, enabling instant order transition.',
  },
  {
    title: 'Print Precision',
    desc: 'Micron-accurate droplet placement delivering photographic detail, smooth gradients, and sharp edge registration.',
  },
  {
    title: 'Production Flexibility',
    desc: 'Agile scaling from rapid commercial sampling runs to continuous multi-thousand-meter bulk runs.',
  },
  {
    title: 'Resource Efficiency',
    desc: 'Drastically lower water, dye, and electricity consumption compared to conventional print preparation.',
  },
];

export const digitalTechHighlights = [
  'Single-Pass High-Speed Architecture',
  'Industrial Piezoelectric Printhead Arrays',
  'Integrated Atmosphere & Temperature Control',
  'Advanced Color Management & RIP Engines',
  'High-Purity Reactive & Pigment Ink Chemistry',
];

/**
 * Products & Services (Page 11)
 */
export const productSegments = [
  {
    name: 'Dyed Woven Fabrics',
    desc: 'Uniform shade penetration across 100% cotton poplin, voile, lillian, twill, and premium blends.',
    specs: 'Poplin, Voile, Lillian, Sheeting · 80,000 m/day dyeing capability',
  },
  {
    name: 'Conventionally Printed Fabrics',
    desc: 'Rotary screen and serbo flatbed prints for large-run sarees, dress fabrics, and home textiles.',
    specs: 'Multi-color screen & serbo lines · 80,000 m/day capability',
  },
  {
    name: 'Digitally Printed Fabrics',
    desc: 'Direct-to-fabric single-pass and multi-pass prints featuring vibrant floral, ethnic, and modern motifs.',
    specs: 'Single-Pass Atexco & RBR fleet · 120,000 m/day printing capacity',
  },
  {
    name: 'Finished Woven Fabrics',
    desc: 'Calender glazed, pre-shrunk, soft-handle poplin, voile, and specialty finish fabrics ready for retail or export.',
    specs: 'Bruckner/Babcock stenters & heavy calenders · 280,000 m/day',
  },
  {
    name: 'Custom Print Developments',
    desc: 'Bespoke design prototyping, buyer shade development, strike-offs, and short-lead commercialization.',
    specs: 'Fast-track laboratory sampling & RIP proofing',
  },
];

export const servicesList = [
  {
    title: 'Colour Development',
    desc: 'Shade formulation, lab dips, spectrophotometric tolerance checks, and production dye recipes.',
  },
  {
    title: 'Print Development',
    desc: 'Artwork separation, digital color management, screen engraving, and pre-press prep.',
  },
  {
    title: 'Digital Printing',
    desc: 'Industrial-scale direct digital printing with fast changeovers for diverse market demands.',
  },
  {
    title: 'Dyeing & Processing',
    desc: 'Integrated coloration, cold pad batch, and jigger processing with strict temperature control.',
  },
  {
    title: 'Finishing Range',
    desc: 'Customized hand-feel, dimensional stabilization, resin finishing, and calender glazing.',
  },
  {
    title: 'Technical Support',
    desc: 'Dedicated technical coordination across development, floor production, and buyer QA teams.',
  },
];

/**
 * Research, Development & Quality (Page 12)
 */
export const rdFlow = [
  'Customer Requirement',
  'Fabric Review',
  'Colour / Design Development',
  'Trial Batch',
  'Technical Evaluation',
  'Optimization',
  'Buyer Approval',
  'Bulk Production',
];

export const qaFlow = [
  'Incoming Material Verification',
  'Greige Fabric Inspection',
  'Lab Recipe Development',
  'Process Parameter Control',
  'In-Line Continuous Inspection',
  'Shade & Print Evaluation',
  'Physical & Chemical Testing',
  'Final Roll Inspection',
  'Quality Release & Dispatch',
];

export const testingParameters = [
  { name: 'Colour Fastness to Light & Washing', standard: 'ISO 105-C06 / AATCC 61' },
  { name: 'Rubbing Fastness (Dry & Wet)', standard: 'ISO 105-X12 / Crockmeter' },
  { name: 'Washing Fastness & Staining', standard: 'Multifiber test fabric evaluation' },
  { name: 'GSM & Fabric Density', standard: 'Calibrated analytical circular cutter' },
  { name: 'Dimensional Stability & Shrinkage', standard: 'Pre- & post-wash shrinkage checks' },
  { name: 'Fabric Usable Width', standard: 'Continuous laser/metric width monitoring' },
  { name: 'pH Value of Aqueous Extract', standard: 'ISO 3071 skin-friendly standards' },
  { name: 'Tensile & Tear Strength', standard: 'ASTM D5034 / D1424 grab & tear' },
  { name: 'Computerized Shade Assessment', standard: 'Spectrophotometer Delta-E < 0.5' },
];

/**
 * Affiliated Concerns — Technology Ecosystem (Page 15)
 */
export const affiliatedConcerns = [
  {
    id: 'rossa',
    name: 'Rossa Digital Printing Technology Ltd.',
    tagline: 'Digital Inks & Application Engineering',
    desc: 'Focuses on digital textile printing inks, technical support, colour performance and printing applications. Extends practical printing experience into one of digital printing’s most critical consumables.',
    focus: 'Reactive, pigment, disperse inks & color profiling',
    imageKey: 'rossaInks',
  },
  {
    id: 'rbr',
    name: 'RBR Innovations Ltd.',
    tagline: 'Industrial Digital Textile Machinery',
    desc: 'Focuses on industrial digital textile printing machinery and related technology, including reactive, pigment, disperse, sublimation and acid printing machine systems.',
    focus: 'Next-gen single-pass and hybrid digital printers',
    imageKey: 'rbrInnovations',
  },
  {
    id: 'a3-chem',
    name: 'A3 Color Chem',
    tagline: 'Textile Dyestuff & Chemical Formulation',
    desc: 'Specialized chemical supplier delivering certified dyes, auxiliaries, enzymes, and finishing chemistry compliant with global MRSL guidelines.',
    focus: 'Eco-certified dyestuffs & textile auxiliaries',
    imageKey: 'a3ColorChem',
  },
  {
    id: 'a3-corp',
    name: 'A3 Color Corporation',
    tagline: 'Chemical Distribution & Technical Solutions',
    desc: 'Distributor of specialty processing chemicals, colorants, and pre-treatment auxiliaries ensuring stable bulk processing performance.',
    focus: 'Technical chemical solutions & supply chain',
    imageKey: 'a3ColorCorporation',
  },
  {
    id: 'gm-textile',
    name: 'GM Textile',
    tagline: 'Textile Manufacturing Unit',
    desc: 'Dedicated production arm supporting specialized fabric construction, weaving programs, and custom commercial textile output.',
    focus: 'High-density weave constructions & fabric bases',
    imageKey: 'gmTextile',
  },
  {
    id: 'nodi-bangla',
    name: 'Nadi Bangla Group',
    tagline: 'Diversified Industrial Conglomerate',
    desc: 'The parent group uniting industrial leadership across textile processing, construction, hospitality, property development, and regional philanthropy.',
    focus: 'Industrial leadership & infrastructure investment',
    imageKey: 'nodiBanglaGroup',
  },
];

/**
 * Sustainability 8 Pillars (Page 16)
 */
export const sustainabilityPillars = [
  {
    title: 'Water Stewardship',
    desc: 'Measure, reduce, reuse, and treat every liter through our biological effluent treatment plant.',
  },
  {
    title: 'Chemical Management',
    desc: 'Strict MRSL adherence, approved vendor inventories, SDS documentation, and zero harmful discharge.',
  },
  {
    title: 'Energy Efficiency',
    desc: 'Modern boiler heat recovery, variable-frequency drives, and monitored thermal efficiency.',
  },
  {
    title: 'Waste Reduction',
    desc: 'Prevent waste generation at the source, recover fabric selvedges, and dispose sludge responsibly.',
  },
  {
    title: 'Responsible Production',
    desc: 'Integrate environmental responsibility directly into everyday operational KPI targets.',
  },
  {
    title: 'People & Safety',
    desc: 'Continuous occupational health and safety training, personal protective equipment, and zero-injury targets.',
  },
  {
    title: 'Environmental Compliance',
    desc: 'Exceed national Department of Environment (DoE) standards and international buyer benchmarks.',
  },
  {
    title: 'Continuous Improvement',
    desc: 'Rigorous data logging, internal review cycles, and ongoing technological upgrades.',
  },
];

/**
 * CSR (Corporate Social Responsibility) & Supported Institutions (Page 18)
 */
export const csrInstitutions = [
  { name: 'Narsingdi Kendrio Swechasebi Forum', category: 'Community Service & Voluntary Forum' },
  { name: 'Narsingdi Independent College', category: 'Higher Education' },
  { name: 'Narsingdi Model School', category: 'Primary & Secondary Education' },
  { name: 'Jamia Farukia Sherpur Madrasah, Shibpur', category: 'Religious & Ethical Education' },
  { name: 'Narsingdi Institute of Science and Technology (NIST)', category: 'Technical & Engineering Training' },
  { name: 'Amra Narsingdi Basi', category: 'Regional Civic Welfare Organization' },
  { name: 'Narsingdi Sadar Hospital', category: 'Healthcare Support & Medical Welfare' },
  { name: 'Jamea Quasemia Kamil Madrasah, Narsingdi', category: 'Higher Islamic Academy' },
];

export const financialPartners = [
  { name: 'Islami Bank Bangladesh Limited (IBBL)', desc: 'Leading Islamic banking and industrial trade finance partner.' },
  { name: 'South Bangla Agriculture & Commerce Bank (SBAC)', desc: 'Commercial financing for machinery modernization and working capital.' },
  { name: 'Uttara Bank Limited', desc: 'Long-standing national banking partner facilitating export-import operations.' },
];

/**
 * Factory & Contact Details (Page 19)
 */
export const contactInfo = {
  factory: {
    title: 'Manufacturing Plant & Mill',
    address: 'Ghoradia, Narsingdi Sadar, Narsingdi, Bangladesh',
    country: 'Bangladesh',
    phone: '+880 2 9462750-51',
    mobile: '01711644582',
    email: 'abedtextilebd@yahoo.com',
  },
  corporate: {
    title: 'Corporate Office',
    address: 'House 2 (Flat 5/A), Road 11, Sector 6, Uttara, Dhaka-1230',
    country: 'Bangladesh',
    phone: '+880 2 8932117',
    email: 'abedtextilebd@yahoo.com',
  },
  mapLocation: {
    name: 'Abed Textile Processing Mills Ltd.',
    coords: '23.9430798, 90.7320136',
    plusCode: 'WPVJ+6R Narsingdi',
    directions: 'https://maps.app.goo.gl/rJ6HTNXW71f9uGw79',
    embed: 'https://www.google.com/maps?q=Abed+Textile+Processing+Mills+Ltd.,+Ghoradia,+Narsingdi&hl=en&z=15&output=embed',
  },
};
