import logo from './assets/logos/logo.png';
import homeBg from './assets/images/about/home_page.jpg';
import aboutBg from './assets/images/about-bg.jpg';

import abedAli from './assets/images/leaders/abed-ali.jpg';
import manjurElahi from './assets/images/leaders/manjur-elahi.jpg';
import abdulMamun from './assets/images/leaders/abdul-manun.jpg';
import mahbuburRahman from './assets/images/leaders/mahbubur-rahman.jpg';

import weavingBanner from './assets/images/sections/weaving-banner.jpg';
import flatbedBanner from './assets/images/sections/flat-bed-banner.jpg';
import digitalBanner from './assets/images/sections/digital-banner.jpg';
import dyeingBanner from './assets/images/sections/dyeing-banner.jpg';
import finishingBanner from './assets/images/sections/finishing-banner.jpg';

import weaving1 from './assets/images/weaving/weaving-1.jpg';
import weaving2 from './assets/images/weaving/weaving-2.JPG';
import weaving3 from './assets/images/weaving/weaving-3.JPG';
import weaving4 from './assets/images/weaving/weaving-4.JPG';
import weaving5 from './assets/images/weaving/weaving-5.JPG';
import weaving6 from './assets/images/weaving/weaving-6.jpg';
import weaving7 from './assets/images/weaving/weaving-7.JPG';
import weaving8 from './assets/images/weaving/weaving-8.JPG';
import weaving9 from './assets/images/weaving/weaving-9.JPG';

import flatbed1 from './assets/images/flat-bed/flatbed-1.jpg';
import flatbed2 from './assets/images/flat-bed/flatbed-2.jpg';
import flatbed3 from './assets/images/flat-bed/flatbed-3.jpg';
import flatbed4 from './assets/images/flat-bed/flatbed-4.jpg';
import flatbed5 from './assets/images/flat-bed/flatbed-5.jpg';
import flatbed6 from './assets/images/flat-bed/flatbed-6.jpg';

import digital1 from './assets/images/digital/digital-1.JPG';
import digital2 from './assets/images/digital/digital-2.JPG';
import digital3 from './assets/images/digital/digital-3.jpg';

import gal1 from './assets/images/company-gallery/gallery-01.jpg';
import gal2 from './assets/images/company-gallery/gallery-02.jpg';
import gal3 from './assets/images/company-gallery/gallery-03.jpg';
import gal4 from './assets/images/company-gallery/gallery-04.jpg';
import gal5 from './assets/images/company-gallery/gallery-05.jpg';
import gal6 from './assets/images/company-gallery/gallery-06.jpg';
import gal7 from './assets/images/company-gallery/gallery-07.jpg';
import gal8 from './assets/images/company-gallery/gallery-08.jpg';
import gal9 from './assets/images/company-gallery/gallery-09.jpg';
import gal10 from './assets/images/company-gallery/gallery-10.jpg';
import gal11 from './assets/images/company-gallery/gallery-11.jpg';
import gal12 from './assets/images/company-gallery/gallery-12.jpg';
import gal13 from './assets/images/company-gallery/gallery-13.jpg';
import gal14 from './assets/images/company-gallery/gallery-14.jpg';
import gal15 from './assets/images/company-gallery/gallery-15.jpg';
import gal16 from './assets/images/company-gallery/gallery-16.jpg';

export interface GalleryItem {
  src: string;
  titleEn: string;
  titleBn: string;
  cat: string;
}

export const assets = {
  logo,
  homeBg,
  aboutBg,
  leaders: {
    abedAli,
    manjurElahi,
    abdulMamun,
    mahbuburRahman,
  },
  banners: {
    weaving: weavingBanner,
    flatbed: flatbedBanner,
    digital: digitalBanner,
    dyeing: dyeingBanner,
    finishing: finishingBanner,
  },
  weaving: [weaving1, weaving2, weaving3, weaving4, weaving5, weaving6, weaving7, weaving8, weaving9],
  flatbed: [flatbed1, flatbed2, flatbed3, flatbed4, flatbed5, flatbed6],
  digital: [digital1, digital2, digital3],
  gallery: [
    { src: gal1, titleEn: 'High Speed Weaving Floor', titleBn: 'উচ্চগতির উইভিং ফ্লোর', cat: 'Production' },
    { src: gal2, titleEn: 'Fabric Inspection & Roll Check', titleBn: 'ফ্যাব্রিক কোয়ালিটি ইন্সপেকশন', cat: 'Quality' },
    { src: gal3, titleEn: 'Automatic Flatbed Print Line', titleBn: 'অটোমেটিক ফ্ল্যাটবেড লাইন', cat: 'Printing' },
    { src: gal4, titleEn: 'High Volume Dyeing Jiggers', titleBn: 'উচ্চ ক্ষমতার ডাইং জিগার', cat: 'Dyeing' },
    { src: gal5, titleEn: 'Modern Stenter Heat Setting', titleBn: 'স্টেন্টার হিট সেটিং ইউনিট', cat: 'Finishing' },
    { src: gal6, titleEn: 'Color Formulation Lab', titleBn: 'কালার কিচেন ল্যাব', cat: 'Quality' },
    { src: gal7, titleEn: 'Continuous Washing Line', titleBn: 'কন্টিনিউয়াস ওয়াশিং রেঞ্জ', cat: 'Dyeing' },
    { src: gal8, titleEn: 'Calendar Glazing Machine', titleBn: 'ক্যালেন্ডার গ্লেজিং সিস্টেম', cat: 'Finishing' },
    { src: gal9, titleEn: 'Roller Mercerizing Setup', titleBn: 'রোলার মার্সারাইজিং লাইন', cat: 'Dyeing' },
    { src: gal10, titleEn: 'Digital Textile Suite', titleBn: 'ডিজিটাল প্রিন্টিং স্যুট', cat: 'Printing' },
    { src: gal11, titleEn: 'Export Packaging & Baling', titleBn: 'রপ্তানি প্যাকেজিং ও বেলিং', cat: 'Finishing' },
    { src: gal12, titleEn: 'Factory Infrastructure', titleBn: 'ফ্যাক্টরি পরিকাঠামো দৃশ্য', cat: 'Facility' },
    { src: gal13, titleEn: '2400 m³/day ETP Aeration Tank', titleBn: 'বায়োকেমিক্যাল ইটিপি প্ল্যান্ট', cat: 'Facility' },
    { src: gal14, titleEn: 'Worker Safety Zone', titleBn: 'শ্রমিক নিরাপত্তা ও প্রশিক্ষণ এলাকা', cat: 'Compliance' },
    { src: gal15, titleEn: 'Sharee & 3-Pcs Output', titleBn: 'শাড়ি ও থ্রি-পিস প্রিন্ট আউটপুট', cat: 'Products' },
    { src: gal16, titleEn: 'Laboratory Testing Unit', titleBn: 'ল্যাবরেটরি টেস্টিং ও মান নিয়ন্ত্রণ', cat: 'Quality' },
  ] as GalleryItem[],
};
