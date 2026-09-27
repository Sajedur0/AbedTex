export const facts = {
  established: '1993',
  machines: '72',
  workforce: '1,000',
  capacity: '45,00,000',
  utilization: '60%',
  floor: '1,53,372',
  etp: '2,400 m³/day',
  etpArea: '16,000 sq. ft.',
};

export const machinery = [
  ['Folding', 3], ['Fell-Folding', 1], ['Single Folding', 2],
  ['Bowl Loaded Finishing Calendar', 1], ['Sharee Calendar', 1], ['Semi Auto', 3],
  ['Automatic Flat Bed Screen Printing', 1], ['Automatic Flat Bed Rotary Printing', 1],
  ['(CC) Stander', 1], ['Bruckner Stander', 2], ['Thermo Stander', 1],
  ['Clip Mercerize', 1], ['Roller Mercerize', 1], ['Super Wash', 1],
  ['Cylinder Dryer', 1], ['Cover Jigger', 7], ['Mini Jigger', 17],
  ['Jumbo Jigger', 15], ['Pad Batch (CPP)', 1], ['Foot Dyer', 1],
  ['Boiler', 3], ['Generator', 2], ['Batch Mercerize', 4], ['Sun Frizzing', 1],
] as const;

export const products = ['Shari', 'Poplin', 'Voile', 'Lillian', 'All Kinds of Print', 'Ladies Fancy Print'];

export const customers = [
  'Bay Creation Ltd.', 'Knit World Ltd.', 'JKD Knit Print', 'Optimum Fashion',
  'Pacific Export', 'Reliance Denim Industries Ltd.', 'Texline Associates Pvt Ltd.'
];

export const directors = [
  { name: 'Alhaj Md. Abed Ali', role: 'Founder & Visionary Pioneer', mobile: '+880 1713-562042', email: 'info@abed.com', image: 'abedAli' },
  { name: 'Monjur Elahi', role: 'Managing Director', mobile: '01713-562042', email: 'info@abed.com', image: 'manjurElahi' },
  { name: 'Abdullah Al Mamun', role: 'Director', mobile: '01713-519783', email: 'abedmamun@hotmail.com', image: 'abdulMamun' },
  { name: 'Mahbubur Rahman Monir', role: 'Director', mobile: '01711-707403', email: 'abedmonir@hotmail.com', image: 'mahbuburRahman' },
] as const;

export const values = [
  'Customer First', 'Pursuit of Quality', 'Leverage through Teamwork',
  'Innovation & Diversity', 'Efficiency Improvement & Cost Control',
  'Responsible Corporate Citizenship'
];

export const compliance = [
  'No child or forced labor', 'Minimum wages ensured', 'Regulated working hours and voluntary overtime',
  'Weekly holidays, annual leave and festival leave with bonus', 'Maternity protection',
  'Workers’ Welfare Committee', 'Mineral drinking water and sanitary facilities',
  'First aid, canteen and day care centre', 'Health care with 100% employee doctor coverage',
  'Fire extinguishers on every floor and at least 12 fire drills annually', 'No discrimination',
  'Protective clothing, ventilation, filtration and sufficient lighting', 'Total no-smoking area',
  'Free-metal zone in the Finishing Section', 'Training and development procedures',
  'Group insurance and residential facilities', 'Free recreation for staff and workers'
];

/* Google Maps pin for the mill.
   Resolved from the shared Maps link https://maps.app.goo.gl/rJ6HTNXW71f9uGw79
   → "Abed Textile Processing Mills Ltd." (Ghoradia, Narsingdi 1602) at
   23.9430798, 90.7320136. */
const factoryQuery = 'Abed Textile Processing Mills Ltd., Ghoradia, Narsingdi';

export const mapLocation = {
  name: 'Abed Textile Processing Mills Ltd.',
  coords: '23.9430798, 90.7320136',
  plusCode: 'WPVJ+6R Narsingdi',
  /** The link the company shares — opens the Maps app on phones. */
  directions: 'https://maps.app.goo.gl/rJ6HTNXW71f9uGw79',
  /** Keyless embed: no API key, billing account or quota to set up. */
  embed: `https://www.google.com/maps?q=${encodeURIComponent(factoryQuery)}&hl=en&z=15&output=embed`,
};

export const contact = {
  corporate: {
    title: 'Corporate Office',
    address: 'Royal Mir Lodge, Plot # F-5/A, House # 2, Road # 11, Sector-6, Uttara, Dhaka – 1230, Bangladesh.',
    phone: '88028932117', fax: '88028932119', email: 'info@abed.com'
  },
  factory: {
    title: 'Factory',
    address: 'Ghoradia, Narsingdi Sadar - 1602, Dhaka, Bangladesh.',
    phone: '88-02-9462750', fax: '88-02-9464312', email: 'abedmamun@hotmail.com'
  }
};
