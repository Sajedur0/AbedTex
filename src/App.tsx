import { useState, useEffect, useRef } from 'react';

    import { assets } from './assets';

    type LightboxItem = { src: string; title?: string };

// Canvas Background Component
    const TextileCanvas = () => {
      const canvasRef = useRef<HTMLCanvasElement>(null);

      useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d')!;
        let animationFrameId = 0;
        let width = (canvas.width = window.innerWidth);
        let height = (canvas.height = window.innerHeight);

        const handleResize = () => {
          width = canvas.width = window.innerWidth;
          height = canvas.height = window.innerHeight;
        };
        window.addEventListener('resize', handleResize);

        let step = 0;
        const lines = 16;

        const render = () => {
          ctx.clearRect(0, 0, width, height);
          step += 0.012;

          for (let i = 0; i < lines; i++) {
            ctx.beginPath();
            const yOffset = (height / lines) * i;
            const alpha = 0.06 + (Math.sin(step + i * 0.4) + 1) * 0.03;
            ctx.strokeStyle = i % 2 === 0 ? `rgba(56, 189, 248, ${alpha})` : `rgba(245, 158, 11, ${alpha * 0.8})`;
            ctx.lineWidth = 1.2;

            for (let x = 0; x < width; x += 20) {
              const wave1 = Math.sin(x * 0.003 + step + i * 0.2) * 25;
              const wave2 = Math.cos(x * 0.006 - step * 0.8 + i) * 12;
              const y = yOffset + wave1 + wave2;
              if (x === 0) ctx.moveTo(x, y);
              else ctx.lineTo(x, y);
            }
            ctx.stroke();
          }
          animationFrameId = requestAnimationFrame(render);
        };
        render();

        return () => {
          window.removeEventListener('resize', handleResize);
          cancelAnimationFrame(animationFrameId);
        };
      }, []);

      return <canvas ref={canvasRef} className="fixed inset-0 pointer-events-none z-0 opacity-60" />;
    };

    // Main App Component
    function App() {
      const [lang, setLang] = useState('en');
      const [lightbox, setLightbox] = useState<{ open: boolean; index: number; items: LightboxItem[] }>({ open: false, index: 0, items: [] });
      const [activeUnit, setActiveUnit] = useState('weaving');
      const [aboutTab, setAboutTab] = useState('about');
      const [machineSearch, setMachineSearch] = useState('');
      const [machineCategory, setMachineCategory] = useState('All');
      const [viewMode, setViewMode] = useState('card');
      const [selectedProduct, setSelectedProduct] = useState(0);
      const [complianceIdx, setComplianceIdx] = useState(0);
      const [galleryCategory, setGalleryCategory] = useState('All');

      // RFQ State
      const [rfq, setRfq] = useState({
        name: '',
        company: '',
        email: '',
        phone: '',
        fabric: 'Poplin',
        quantity: 25000,
        type: 'fresh',
        notes: ''
      });
      const [rfqSubmitted, setRfqSubmitted] = useState(false);
      const [contactSubmitted, setContactSubmitted] = useState(false);

      // Trigger lucide icon refresh
      useEffect(() => {
        if ((window as any).lucide) {
          (window as any).lucide.createIcons();
        }
      });

      // 3D Scroll Effect
      useEffect(() => {
        const sections = document.querySelectorAll<HTMLElement>('.section-3d');
        const cards = document.querySelectorAll<HTMLElement>('.tilt-card');
        let ticking = false;

        const onScroll = () => {
          if (!ticking) {
            requestAnimationFrame(() => {
              const vh = window.innerHeight;

              sections.forEach((section) => {
                const rect = section.getBoundingClientRect();
                const centerY = rect.top + rect.height / 2;
                const progress = (vh / 2 - centerY) / vh;

                const clampedProgress = Math.max(-1, Math.min(1, progress));
                const rotateX = clampedProgress * -6;
                const translateZ = Math.abs(clampedProgress) * -30;
                const opacity = 1 - Math.abs(clampedProgress) * 0.15;

                section.style.transform = `perspective(1200px) rotateX(${rotateX}deg) translateZ(${translateZ}px)`;
                section.style.opacity = String(Math.max(0.7, opacity));
              });

              ticking = false;
            });
            ticking = true;
          }
        };

        const handleMouseMove = (e: MouseEvent) => {
          cards.forEach((card) => {
            const rect = card.getBoundingClientRect();
            if (
              e.clientX >= rect.left &&
              e.clientX <= rect.right &&
              e.clientY >= rect.top &&
              e.clientY <= rect.bottom
            ) {
              const x = (e.clientX - rect.left) / rect.width - 0.5;
              const y = (e.clientY - rect.top) / rect.height - 0.5;
              card.style.transform = `perspective(800px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale3d(1.02, 1.02, 1.02)`;
            }
          });
        };

        const handleMouseLeave = () => {
          cards.forEach((card) => {
            card.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg) scale3d(1, 1, 1)';
          });
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('mousemove', handleMouseMove, { passive: true });
        cards.forEach((card) => card.addEventListener('mouseleave', handleMouseLeave));

        return () => {
          window.removeEventListener('scroll', onScroll);
          window.removeEventListener('mousemove', handleMouseMove);
          cards.forEach((card) => card.removeEventListener('mouseleave', handleMouseLeave));
        };
      }, []);

      // Scroll reveal for [data-reveal] text elements
      useEffect(() => {
        const els = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
        if (!('IntersectionObserver' in window)) {
          els.forEach((el) => el.classList.add('reveal-visible'));
          return;
        }
        const io = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                entry.target.classList.add('reveal-visible');
                io.unobserve(entry.target);
              }
            });
          },
          { threshold: 0.15, rootMargin: '0px 0px -40px 0px' }
        );
        els.forEach((el) => io.observe(el));
        return () => io.disconnect();
      }, []);

      // Machineries database (72 units)
      const machineries = [
        { id: 1, nameEn: 'Mini Jigger', nameBn: 'মিনি জিগার', count: 17, cat: 'Dyeing', origin: 'Taiwan / India', descEn: 'Precision batch dyeing for sample and medium run fabrics with uniform liquor ratio.', descBn: 'স্যাম্পল ও মাঝারি পরিমাণের কাপড়ে সুষম রঙের জন্য যথার্থ ব্যাচ ডাইং।' },
        { id: 2, nameEn: 'Jumbo Jigger', nameBn: 'জাম্বো জিগার', count: 15, cat: 'Dyeing', origin: 'India / China', descEn: 'High capacity automated jigger dyeing for heavy volumes and deep shade consistency.', descBn: 'বৃহৎ উৎপাদন ও গভীর রঙের সামঞ্জস্যের জন্য উচ্চ ক্ষমতার অটোমেটিক জিগার।' },
        { id: 3, nameEn: 'Cover Jigger', nameBn: 'কভার জিগার', count: 7, cat: 'Dyeing', origin: 'India', descEn: 'Enclosed pressurized dyeing environment preventing thermal loss and fabric oxidation.', descBn: 'তাপমাত্রার অপচয় ও কাপড়ের অক্সিডেশন রোধে এনক্লোজড প্রেশারাইজড ডাইং।' },
        { id: 4, nameEn: 'Batch Mercerize', nameBn: 'ব্যাচ মার্সারাইজ', count: 4, cat: 'Pre-Treatment', origin: 'India', descEn: 'Caustic soda impregnation for improving luster, strength, and dye affinity.', descBn: 'তুলা ফাইবারগুলোর উজ্জ্বলতা, শক্তি ও রঙ গ্রহণের ক্ষমতা বাড়াতে মার্সারাইজেশন।' },
        { id: 5, nameEn: 'Folding', nameBn: 'ফোল্ডিং মেশিন', count: 3, cat: 'Finishing', origin: 'Japan', descEn: 'Automated fabric inspection and length precision folding.', descBn: 'স্বয়ংক্রিয় ফ্যাব্রিক পরিদর্শন ও সঠিক দৈর্ঘ্যের ফোল্ডিং ব্যবস্থা।' },
        { id: 6, nameEn: 'Semi Auto', nameBn: 'সেমি অটো মেশিন', count: 3, cat: 'Utilities', origin: 'China', descEn: 'Semi-automated handling for intermediate processing steps.', descBn: 'মধ্যবর্তী প্রক্রিয়াকরণ পদক্ষেপের জন্য সেমি-স্বয়ংক্রিয় হ্যান্ডলিং।' },
        { id: 7, nameEn: 'Boiler Unit', nameBn: 'বয়লার ইউনিট', count: 3, cat: 'Utilities', origin: 'Japan / India', descEn: 'High-pressure clean steam generation for dyeing and finishing lines.', descBn: 'ডাইং ও ফিনিশিং লাইনের জন্য উচ্চ চাপের পরিষ্কার বাষ্প উৎপাদন।' },
        { id: 8, nameEn: 'Bruckner Stander (Stenter)', nameBn: 'ব্রুকনার স্ট্যান্ডার (স্টেন্টার)', count: 2, cat: 'Finishing', origin: 'Germany / Japan', descEn: 'World renowned stenter for heat setting, width equalization, and moisture drying.', descBn: 'হিট সেটিং, প্রস্থ নিয়ন্ত্রণ ও আর্দ্রতা শুকানোর জন্য বিশ্বমানের স্টেন্টার।' },
        { id: 9, nameEn: 'Single Folding', nameBn: 'সিঙ্গেল ফোল্ডিং', count: 2, cat: 'Finishing', origin: 'Japan', descEn: 'Single sheet fabric rolling and measuring system.', descBn: 'একক শিট ফ্যাব্রিক রোলিং ও সঠিক পরিমাপ ব্যবস্থা।' },
        { id: 10, nameEn: 'Heavy Generator', nameBn: 'হেভি জেনারেটর', count: 2, cat: 'Utilities', origin: 'Japan / Europe', descEn: 'Uninterrupted 24/7 dedicated heavy-duty power backup.', descBn: 'নিরবচ্ছিন্ন ২৪/৭ নিরবচ্ছিন্ন বিদ্যুৎ ব্যাকআপ নিশ্চিতকারী ইউনিট।' },
        { id: 11, nameEn: 'Automatic Flat Bed Screen Printing', nameBn: 'অটোমেটিক ফ্ল্যাট বেড স্ক্রিন প্রিন্টিং', count: 1, cat: 'Printing', origin: 'Taiwan', descEn: 'High precision multi-color automatic screen printing with digital repeats.', descBn: 'ডিজিটাল রিপিট সারিবদ্ধকরণ সহ উচ্চ নির্ভুলতার অটোমেটিক স্ক্রিন প্রিন্টিং।' },
        { id: 12, nameEn: 'Automatic Flat Bed Rotary Printing', nameBn: 'অটোমেটিক ফ্ল্যাট বেড রোটারি প্রিন্টিং', count: 1, cat: 'Printing', origin: 'Japan', descEn: 'Continuous high speed rotary printing for fine motifs and saree borders.', descBn: 'মাইক্রো-মোটিফ ও শাড়ির পারের জন্য ধারাবাহিক উচ্চগতির রোটারি প্রিন্টিং।' },
        { id: 13, nameEn: 'Thermo Stander', nameBn: 'থার্মো স্ট্যান্ডার', count: 1, cat: 'Finishing', origin: 'Japan', descEn: 'Thermostatic drying and curing for reactive and pigment print fixations.', descBn: 'উচ্চ ঘনত্বের রিয়্যাক্টিভ ও পিগমেন্ট প্রিন্ট ফিক্সেশনের জন্য থার্মোস্ট্যাটিক ড্রাইং।' },
        { id: 14, nameEn: '(CC) Stander', nameBn: '(সিসি) স্ট্যান্ডার', count: 1, cat: 'Finishing', origin: 'China', descEn: 'Auxiliary stenter unit for specialized width stretching and finishing.', descBn: 'বিশেষায়িত প্রস্থ প্রসারিত ও ফিনিশিংয়ের জন্য সহায়ক স্টেন্টার।' },
        { id: 15, nameEn: 'Clip Mercerize', nameBn: 'ক্লিপ মার্সারাইজ', count: 1, cat: 'Pre-Treatment', origin: 'India', descEn: 'Continuous clip chain mercerization for high tensile stability.', descBn: 'সর্বোচ্চ টেনসিল ও ডাইমেনশনাল স্থিতিশীলতার জন্য ক্লিপ চেইন মার্সারাইজেশন।' },
        { id: 16, nameEn: 'Roller Mercerize', nameBn: 'রোলার মার্সারাইজ', count: 1, cat: 'Pre-Treatment', origin: 'India', descEn: 'Roller tensioned yarn/fabric mercerizer for silk-like gleam.', descBn: 'সিল্কি উজ্জ্বলতা ও গভীর রঙের আকর্ষণের জন্য রোলার টেনশন মার্সারাইজার।' },
        { id: 17, nameEn: 'Bowl Loaded Finishing Calendar', nameBn: 'বোল লোডেড ফিনিশিং ক্যালেন্ডার', count: 1, cat: 'Finishing', origin: 'Japan', descEn: 'Hydraulic heavy-pressure rolling for high sheen and smooth surface glaze.', descBn: 'উচ্চ চকচকে ভাব, মসৃণ উপরিভাগ ও কোমলতার জন্য হাইড্রোলিক ক্যালেন্ডার।' },
        { id: 18, nameEn: 'Sharee Calendar', nameBn: 'শাড়ি ক্যালেন্ডার', count: 1, cat: 'Finishing', origin: 'Japan', descEn: 'Specially engineered calender for sarees to give graceful drape and fall.', descBn: 'শাড়ির জন্য বিশেষায়িত ক্যালেন্ডার যা চমৎকার ড্র্যাপ ও সিল্কি কোমলতা দেয়।' },
        { id: 19, nameEn: 'Pad Batch (CPP)', nameBn: 'প্যাড ব্যাচ (সিপিপি)', count: 1, cat: 'Dyeing', origin: 'Taiwan', descEn: 'Cold pad-batch reactive dyeing providing energy efficiency and salt-free dye fixing.', descBn: 'কোল্ড প্যাড-ব্যাচ রিয়্যাক্টিভ ডাইং যা বিদ্যুৎ সাশ্রয়ী ও নিখুঁত ডাই ফিক্সিং দেয়।' },
        { id: 20, nameEn: 'Super Wash', nameBn: 'সুপার ওয়াশ', count: 1, cat: 'Finishing', origin: 'Taiwan', descEn: 'Continuous post-dyeing rapid chemical neutralizing and washing.', descBn: 'ডাইং ও প্রিন্টিং পরবর্তী রাসায়নিক অপসারণ ও দ্রুত ওয়াশিং ব্যবস্থা।' },
        { id: 21, nameEn: 'Cylinder Dryer', nameBn: 'সিলিন্ডার ড্রায়ার', count: 1, cat: 'Finishing', origin: 'China', descEn: 'Steam heated multi-cylinder fast drying system preserving fabric elasticity.', descBn: 'ফ্যাব্রিকের স্থিতিস্থাপকতা বজায় রেখে বাষ্প উত্তপ্ত মাল্টি-সিলিন্ডার ড্রাইং।' },
        { id: 22, nameEn: 'Fell-Folding', nameBn: 'ফেল-ফোল্ডিং', count: 1, cat: 'Finishing', origin: 'Japan', descEn: 'Specialized fabric packaging fold machine for export standard bales.', descBn: 'রপ্তানি মানদণ্ডের বেল তৈরির জন্য বিশেষায়িত ফ্যাব্রিক প্যাকেজিং ফোল্ড মেশিন।' },
        { id: 23, nameEn: 'Foot Dyer', nameBn: 'ফুট ডায়ার', count: 1, cat: 'Dyeing', origin: 'India', descEn: 'Auxiliary dyeing station for edge and trim precise coloration.', descBn: 'প্রান্ত ও বিশেষ অংশের নিখুঁত রঙের জন্য সহায়ক ডাইং স্টেশন।' },
        { id: 24, nameEn: 'Sun Frizzing', nameBn: 'সান ফ্রিজিং', count: 1, cat: 'Finishing', origin: 'China', descEn: 'Surface texturing and crinkle aesthetic stabilization system.', descBn: 'সারফেস টেক্সচারিং ও বিশেষ ক্রাঙ্কল ক্রিয়েশনের ফিনিশিং ব্যবস্থা।' }
      ];

      const filteredMachines = machineries.filter(m => {
        const matchesSearch = m.nameEn.toLowerCase().includes(machineSearch.toLowerCase()) ||
                              m.nameBn.toLowerCase().includes(machineSearch.toLowerCase()) ||
                              m.origin.toLowerCase().includes(machineSearch.toLowerCase());
        const matchesCat = machineCategory === 'All' || m.cat === machineCategory;
        return matchesSearch && matchesCat;
      });

      // Products data
      const products = [
        {
          nameEn: 'Exclusive Shari (Sharee)',
          nameBn: 'এক্সক্লুসিভ শাড়ি কালেকশন',
          catEn: 'Ethnic & Traditional Wear',
          catBn: 'ঐতিহ্যবাহী ও আধুনিক পোশাক',
          descEn: 'Renowned nationwide and globally for exquisite print repeats, buttery soft fall, vibrant colorfast hues, and fine cotton & silk blends.',
          descBn: 'নিখুঁত প্রিন্ট রিপিট, মাখনের মতো মসৃণ ড্র্যাপ, টেকসই উজ্জ্বল রঙ এবং প্রিমিয়াম কটন ও সিল্ক ব্লেন্ডের জন্য দেশ-বিদেশে সমাদৃত।',
          badgeEn: 'Best Seller',
          badgeBn: 'সর্বাধিক জনপ্রিয়',
          specsEn: ['100% Cotton, Voile, Silk Blend', 'Flatbed & Digital High Density Print', '12 - 14 Haath standard length', 'Shrinkage controlled & calendar glazed'],
          specsBn: ['১০০% কটন, ভয়েল ও সিল্ক ব্লেন্ড', 'ফ্ল্যাটবেড ও ডিজিটাল হাই ডেনসিটি প্রিন্ট', '১২ - ১৪ হাত স্ট্যান্ডার্ড দৈর্ঘ্য', 'শ্রিনকেজ মুক্ত ও ক্যালেন্ডার গ্লেজড']
        },
        {
          nameEn: 'Three-Piece (3 Pcs) Suits',
          nameBn: 'লেডিস থ্রি-পিস ফেব্রিক্স সেট',
          catEn: 'Ladies Fashion Ensemble',
          catBn: 'লেডিস ফ্যাশন স্যুটস',
          descEn: 'Full matching sets comprising Kameez, Salwar, and Dupatta in digital, flatbed screen prints, poplin, and voile with rich handfeel.',
          descBn: 'কামিজ, সালোয়ার ও ওড়নার সম্পূর্ণ ম্যাচিং সেট যা ডিজিটাল, ফ্ল্যাটবেড প্রিন্ট, পপলিন ও ভয়েল ফ্যাব্রিকে তৈরি।',
          badgeEn: 'Trending',
          badgeBn: 'ট্রেন্ডিং',
          specsEn: ['Matching Kamiz, Salwar, Dupatta set', 'Fine yarn count: 60s - 80s', 'Anti-fading chemical wash', 'Ultra-breathable feel'],
          specsBn: ['ম্যাচিং কামিজ, সালোয়ার ও ওড়না সেট', 'ফাইন কাউন্ট সুতা: ৬০s - ৮০s', 'অ্যান্টি-ফেডিং কেমিক্যাল ওয়াশ', 'অসাধারণ আরামদায়ক ও নরম']
        },
        {
          nameEn: 'Premium Poplin Fabric',
          nameBn: 'প্রিমিয়াম পপলিন ফেব্রিক',
          catEn: 'Apparel & Shirting',
          catBn: 'পোশাক ও শার্টিন ফেব্রিক',
          descEn: 'Crisp, tightly woven plain weave cotton fabric with fine rib texture, suitable for premium shirts, blouses, dresses, and linings.',
          descBn: 'উচ্চ ঘনত্বের বুননযুক্ত পপলিন ফ্যাব্রিক যা শার্ট, ব্লাউজ, ড্রেস ও আস্তরণের জন্য আদর্শ। নিখুঁত উজ্জ্বলতা ও দীর্ঘস্থায়ী স্থায়িত্ব।',
          badgeEn: 'Export Standard',
          badgeBn: 'রপ্তানি মানদণ্ড',
          specsEn: ['100% Combed Cotton / TC Blends', 'GSM: 100 - 140 GSM', 'Mercerized with deep dye affinity', 'Zero skew & bowing'],
          specsBn: ['১০০% কম্বড কটন / টিসি ব্লেন্ড', 'জিএসএম: ১০০ - ১৪০ GSM', 'মার্সারাইজড ও উন্নত রঙ শোষণ ক্ষমতা', 'নিখুঁত সমানুপাতিক বুনন']
        },
        {
          nameEn: 'Soft Voile (Boil) Fabric',
          nameBn: 'নরম ভয়েল (বয়েল) ফেব্রিক',
          catEn: 'Lightweight Textiles',
          catBn: 'হালকা ও আরামদায়ক টেক্সটাইল',
          descEn: 'Feather-light, semi-sheer plain weave with silky hand feel. Engineered for tropical wear, soft dupattas, and airy dresses.',
          descBn: 'পালকের মতো হালকা, নরম এবং সিল্কি স্পর্শযুক্ত ভয়েল ফ্যাব্রিক। গ্রীষ্মকালীন পোশাক, ওড়না ও কুর্তির জন্য অত্যন্ত উপযোগী।',
          badgeEn: 'Signature',
          badgeBn: 'সিগনেচার',
          specsEn: ['High-twist fine cotton yarn', 'GSM: 65 - 85 GSM', 'Exceptional drapability', 'Breathable & quick-drying'],
          specsBn: ['হাই-টুইস্ট ফাইন কটন সুতা', 'জিএসএম: ৬৫ - ৮৫ GSM', 'চমৎকার ড্র্যাপ ও নমনীয়তা', 'বাতাস চলাচল উপযোগী ও আরামদায়ক']
        },
        {
          nameEn: 'Lillian Fabric',
          nameBn: 'লিলিয়ান ফেব্রিক',
          catEn: 'Fashion & Draped Wear',
          catBn: 'ফ্যাশন ও আধুনিক পোশাক',
          descEn: 'High-tenacity blended drape fabric offering lustrous flow, rich fall, and resistance to wrinkles for ladies designer collections.',
          descBn: 'উচ্চ শক্তির ব্লেন্ডেড ড্র্যাপ ফ্যাব্রিক যা চমৎকার উজ্জ্বলতা, দারুণ ফল এবং কুঁচকে না যাওয়ার নিশ্চয়তা দেয়।',
          badgeEn: 'High Demand',
          badgeBn: 'ব্যাপক চাহিদাসম্পন্ন',
          specsEn: ['Polyester-Viscose / Cotton Rayon blends', 'Rich reactive printed motifs', 'Silky wash finish', 'High color vibrancy'],
          specsBn: ['পলিয়েস্টার-ভিসকোস / কটন রেয়ন ব্লেন্ড', 'উজ্জ্বল রিয়্যাক্টিভ প্রিন্টেড ডিজাইন', 'সিল্কি ওয়াশ ফিনিশ', 'উচ্চ কালার ভাইব্রেন্সি']
        },
        {
          nameEn: 'Knit Fabrics & Ladies Fancy Print',
          nameBn: 'নিট ফেব্রিক্স ও লেডিস ফ্যান্সি প্রিন্ট',
          catEn: 'Knitwear & Fancy Prints',
          catBn: 'আধুনিক নিটওয়্যার ও ফ্যান্সি প্রিন্ট',
          descEn: 'Single jersey, rib, interlock, and fancy printed knits with supreme elasticity, ultra-soft bio-polishing, and color integrity.',
          descBn: 'সিঙ্গেল জার্সি, রিব, ইন্টারলক এবং ফ্যান্সি প্রিন্টেড নিট যা অসাধারণ স্থিতিস্থাপকতা, নরম বায়ো-পলিশ এবং উজ্জ্বল রঙ নিশ্চিত করে।',
          badgeEn: 'Eco-Friendly',
          badgeBn: 'পরিবেশবান্ধব',
          specsEn: ['Single Jersey, Rib, Interlock', 'Reactive all-over print & placement', 'Enzyme & silicone soft wash', 'Anti-pilling (Grade 4)'],
          specsBn: ['সিঙ্গেল জার্সি, রিব, ইন্টারলক', 'রিয়্যাক্টিভ অল-ওভার প্রিন্ট ও প্লেসমেন্ট', 'এনজাইম ও সিলিকন সফট ওয়াশ', 'পিলিং মুক্ত ফিনিশিং (গ্রেড ৪)']
        }
      ];

      // Production units data
      const units = {
        weaving: {
          titleEn: 'Weaving Section',
          titleBn: 'উইভিং (বুনন) সেকশন',
          banner: assets.banners.weaving,
          shortEn: 'High-speed automated loom infrastructure producing premium greige fabric with pinpoint structural integrity.',
          shortBn: 'উচ্চগতির স্বয়ংক্রিয় লুম পরিকাঠামো যা নিখুঁত কাঠামোগত স্থিতিশীলতার সাথে প্রিমিয়াম গ্রেজ ফ্যাব্রিক তৈরি করে।',
          fullEn: 'Our weaving division utilizes advanced high-speed looms with automated tension control and precision yarn alignment. We weave premium poplin, voile, twill, fine cotton, and blends tailored for sensitive printing and dyeing.',
          fullBn: 'আমাদের উইভিং বিভাগ স্বয়ংক্রিয় টেনশন কন্ট্রোল এবং সুনির্দিষ্ট সুতা সারিবদ্ধকরণ সহ উন্নত হাই-স্পিড লুম ব্যবহার করে। আমরা সংবেদনশীল প্রিন্টিং এবং ডাইংয়ের জন্য উপযোগী প্রিমিয়াম পপলিন, ভয়েল, টুইল ও ফাইন কটন তৈরি করি।',
          stats: [{ val: '20s - 100s', labelEn: 'Yarn Count', labelBn: 'সুতার কাউন্ট রেঞ্জ' }, { val: 'Plain, Twill, Dobby', labelEn: 'Weave Types', labelBn: 'বুননের ধরন' }],
          gallery: assets.weaving
        },
        flatbed: {
          titleEn: 'Flat Bed Screen & Rotary Printing',
          titleBn: 'ফ্ল্যাট বেড স্ক্রিন ও রোটারি প্রিন্টিং',
          banner: assets.banners.flatbed,
          shortEn: 'Industrial heavy-duty flatbed and rotary screen printing lines delivering vibrant colors and sharp multi-color repeats.',
          shortBn: 'শিল্পমানের হেভি-ডিউটি ফ্ল্যাটবেড ও রোটারি স্ক্রিন প্রিন্টিং লাইন যা উজ্জ্বল রঙ ও নিখুঁত মাল্টি-কালার রিপিট সরবরাহ করে।',
          fullEn: 'Engineered for high-volume execution of Sarees, 3-Piece ladies wear, and boutique ethnic prints. Imported from Japan and Taiwan, producing rich pigments and reactive prints with flawless registration.',
          fullBn: 'শাড়ি, থ্রি-পিস লেডিস পোশাক এবং বুটিক এথনিক প্রিন্টের বিশাল পরিমাণের জন্য প্রস্তুত। জাপান ও তাইওয়ান থেকে আমদানিকৃত অটোমেটিক ফ্ল্যাটবেড ও রোটারি মেশিন নিখুঁত রঙের সমন্বয়ে রিয়্যাক্টিভ ও পিগমেন্ট প্রিন্ট প্রদান করে।',
          stats: [{ val: 'Up to 12 Colors', labelEn: 'Color Stations', labelBn: 'রঙের সক্ষমতা' }, { val: '80,000+ Yds', labelEn: 'Daily Output', labelBn: 'দৈনিক প্রিন্ট ক্ষমতা' }],
          gallery: assets.flatbed
        },
        digital: {
          titleEn: 'Digital Textile Printing',
          titleBn: 'ডিজিタル টেক্সটাইল প্রিন্টিং',
          banner: assets.banners.digital,
          shortEn: 'Ultra high-definition direct-to-fabric digital printing technology for intricate motifs, photorealistic gradients, and rapid sampling.',
          shortBn: 'জটিল মোটিফ, ফটোরিয়ালিস্টিক গ্রেডিয়েন্ট এবং দ্রুত প্রোটোটাইপিংয়ের জন্য আল্ট্রা হাই-ডেফিনিশন ডিজিটাল টেক্সটাইল প্রিন্টিং।',
          fullEn: 'Our digital printing wing offers unlimited color spectrums, photo-grade resolution (up to 2400 DPI), and zero screen setup time. Perfect for exquisite designer Sharis and luxury 3-piece ensembles.',
          fullBn: 'আমাদের ডিজিটাল প্রিন্টিং উইং সীমাহীন কালার স্পেকট্রাম, ২৪০০ ডিপিআই পর্যন্ত রেজোলিউশন এবং কোনো স্ক্রিন সেটআপ সময় ছাড়াই দ্রুত ডেলিভারি দেয়। বিলাসবহুল শাড়ি ও আধুনিক ফ্যাশন কালেকশনের জন্য আদর্শ।',
          stats: [{ val: '2400 DPI', labelEn: 'Resolution', labelBn: 'সর্বোচ্চ রেজোলিউশন' }, { val: '16.7M Colors', labelEn: 'Color Depth', labelBn: 'কালার ডেপথ' }],
          gallery: assets.digital
        },
        dyeing: {
          titleEn: 'Dyeing & Pre-Treatment Section',
          titleBn: 'ডাইং ও প্রি-ট্রিটমেন্ট সেকশন',
          banner: assets.banners.dyeing,
          shortEn: 'Comprehensive Jigger (Mini, Cover, Jumbo), Pad Batch (CPP), and Mercerizing units for deep color penetration and luster.',
          shortBn: 'গভীর রঙ প্রবেশ এবং উজ্জ্বল চকচকে ভাবের জন্য জিগার (মিনি, কভার, জাম্বো), প্যাড ব্যাচ এবং মার্সারাইজিং ইউনিট।',
          fullEn: 'Equipped with 39+ specialized jiggers, Pad Batch CPP, Clip Mercerize, and Roller Mercerize machines. We achieve uniform shade consistency, top-grade color fastness (Grade 4-5), and high tensile strength.',
          fullBn: '৩৯টিরও বেশি বিশেষায়িত জিগার, প্যাড ব্যাচ সিপিপি, ক্লিপ ও রোলার মার্সারাইজ মেশিনে সজ্জিত। আমরা প্রতিটি কাপড়ে অভিন্ন শেড এবং ৪-৫ গ্রেডের চমৎকার কালার ফাস্টনেস নিশ্চিত করি।',
          stats: [{ val: '39 Units', labelEn: 'Total Jiggers', labelBn: 'মোট জিগার মেশিন' }, { val: 'Grade 4 - 5', labelEn: 'Color Fastness', labelBn: 'কালার ফাস্টনেস গ্রেড' }],
          gallery: [assets.banners.dyeing, assets.gallery[3].src, assets.gallery[6].src, assets.gallery[8].src]
        },
        finishing: {
          titleEn: 'Finishing & Stenter Section',
          titleBn: 'ফিনিশিং ও স্টেন্টার সেকশন',
          banner: assets.banners.finishing,
          shortEn: 'Bruckner Stenters, Thermo Stenters, Calendar Machines, and Super Wash units for premium touch and dimensional stability.',
          shortBn: 'প্রিমিয়াম স্পর্শ, কোমলতা ও সঠিক কাঠামোগত স্থিতিশীলতার জন্য ব্রুকনার স্টেন্টার, থার্মো স্টেন্টার ও ক্যালেন্ডার মেশিন।',
          fullEn: 'German-engineered Bruckner Stenters, Thermo Stenters, Bowl Loaded Finishing Calendars, Sharee Calendars, and Cylinder Dryers. We provide peach-skin finishes, silicon soft feels, and zero shrinkage control.',
          fullBn: 'জার্মান প্রযুক্তির ব্রুকনার স্টেন্টার, থার্মো স্টেন্টার, বোল লোডেড ফিনিশিং ক্যালেন্ডার ও শাড়ি ক্যালেন্ডার। আমরা কাপড়ে সিল্কি সফট হ্যান্ডফিল এবং মসৃণ ফিনিশ প্রদান করি।',
          stats: [{ val: '4 Lines', labelEn: 'Stenter Lines', labelBn: 'স্টেন্টার লাইন' }, { val: '< 2%', labelEn: 'Shrinkage Control', labelBn: 'শ্রিনকেজ নিয়ন্ত্রণ' }],
          gallery: [assets.banners.finishing, assets.gallery[4].src, assets.gallery[7].src, assets.gallery[10].src]
        },
        etp: {
          titleEn: 'Effluent Treatment Plant (ETP)',
          titleBn: 'বর্জ্য পরিশোধনাগার (ইটিপি)',
          banner: assets.aboutBg,
          shortEn: 'Large-scale 2,400 m³/day biochemical effluent treatment plant using modern technology from Ecotex Pte Ltd., Singapore.',
          shortBn: 'সিঙ্গাপুরের ইকোটেক্স পিটিই লিমিটেড থেকে আমদানিকৃত আধুনিক বায়োকেমিক্যাল প্রযুক্তির দৈনিক ২৪০০ ঘনমিটার ইটিপি প্ল্যান্ট।',
          fullEn: 'Our commitment to environmental sustainability is powered by a massive 16,000 square feet Biochemical ETP facility with a capacity of 2,400 m³ per day. The plant purifies and neutralizes industrial water to comply with global environmental discharge norms.',
          fullBn: 'পরিবেশগত স্থায়িত্বের প্রতি আমাদের অঙ্গীকার ১৬,০০০ বর্গফুটের বিশাল বায়োকেমিক্যাল ইটিপি দ্বারা পরিচালিত যার দৈনিক ধারণক্ষমতা ২৪০০ ঘনমিটার। এই প্ল্যান্টটি শিল্প বর্জ্য পানিকে সম্পূর্ণরূপে বিশুদ্ধ করে।',
          stats: [{ val: '2,400 m³/day', labelEn: 'Daily Capacity', labelBn: 'দৈনিক পরিশোধন ক্ষমতা' }, { val: '16,000 Sq.Ft.', labelEn: 'Facility Area', labelBn: 'প্রকল্পের আয়তন' }],
          gallery: [assets.aboutBg, assets.gallery[12].src, assets.gallery[11].src]
        }
      };

      // Compliance categories
      const complianceData = [
        {
          titleEn: 'Labor Standards & Human Rights',
          titleBn: 'শ্রম মানদণ্ড ও মানবাধিকার',
          itemsEn: [
            'Strict No Child Labor policy with age verification at recruitment',
            'Strict No Forced or Involuntary Labor under any circumstance',
            'Guaranteed Minimum Wages adhering to Bangladesh Gazetted Pay Scale',
            'Standard 8-hour workday policy with documented overtime tracking',
            '100% Voluntary Overtime with extra allowance payments',
            'Compulsory interval of rest between operational shifts',
            'Paid Weekly Holidays & statutory Annual Leave entitlement',
            'Festival Holidays, Eid Leave with Guaranteed Festive Bonuses',
            'Comprehensive Maternity Protection with paid maternity leave'
          ],
          itemsBn: [
            'নিয়োগের সময় বয়স যাচাইসহ কঠোর শিশুশ্রম বিরোধী নীতি',
            'কোনো অবস্থাতেই কোনো প্রকার বাধ্যতামূলক বা জোরপূর্বক শ্রম নয়',
            'বাংলাদেশ গেজেটেড বেতন কাঠামো অনুযায়ী ন্যূনতম মজুরি নিশ্চিতকরণ',
            'ওভারটাইম ট্র্যাকিং সহ স্ট্যান্ডার্ড ৮ ঘণ্টার কর্মঘণ্টা নীতি',
            'অতিরিক্ত ভাতা প্রদানসহ ১০০% স্বেচ্ছাসেবী ওভারটাইম',
            'শিফটের মাঝে বাধ্যতামূলক বিশ্রামের বিরতি প্রদান',
            'পেইড সাপ্তাহিক ছুটি এবং নির্ধারিত বার্ষিক ছুটি ভোগ',
            'উৎসব ছুটি, ঈদ ছুটি এবং নিশ্চিত উৎসব বোনাস প্রদান',
            'পেইড মাতৃত্বকালীন ছুটি সহ পূর্ণাঙ্গ মাতৃত্ব সুরক্ষা'
          ]
        },
        {
          titleEn: 'Health, Safety & Environment (HSE)',
          titleBn: 'স্বাস্থ্য, নিরাপত্তা ও পরিবেশ',
          itemsEn: [
            'Dedicated 100% full-time doctor and employee health clinic',
            'Fully equipped First Aid Boxes across all factory zones',
            'Hygienic Pure Drinking Mineral Water dispensers on every floor',
            'Modern, hygienic sanitation facilities with regular disinfection',
            'Workers Welfare Committee with elected labor representatives',
            'Subsidized clean in-house Canteen Service for all employees',
            'Full-time Day Care Centre for working mothers with trained staff',
            'Free recreational activities & annual sports festivals',
            'Residential worker dormitory and transport facilities (In-Progress)'
          ],
          itemsBn: [
            'কারখানায় ১০০% ফুল-টাইম ডাক্তার এবং কর্মী স্বাস্থ্য ক্লিনিক',
            'সকল ফ্লোরে সুসজ্জিত প্রাথমিক চিকিৎসা ফার্স্ট এইড বক্স',
            'প্রতিটি তলায় স্বাস্থ্যকর বিশুদ্ধ পানীয় মিনারেল ওয়াটার ব্যবস্থা',
            'নিয়মিত জীবাণুমুক্তকরণ সহ আধুনিক স্বাস্থ্যকর স্যানিটারি সুবিধা',
            'নির্বাচিত শ্রমিক প্রতিনিধিদের নিয়ে শ্রমিক কল্যাণ কমিটি',
            'সকল কর্মীর জন্য স্বাস্থ্যসম্মত ও ভর্তুকিযুক্ত ক্যাফেটেরিয়া/ক্যান্টিন সেবা',
            'কর্মজীবী মায়েদের জন্য প্রশিক্ষিত কর্মী সহ ডে কেয়ার সেন্টার',
            'সকল স্টাফ ও কর্মীদের জন্য বিনামূল্যে বার্ষিক খেলাধুলা ও বিনোদন',
            'শ্রমিকদের জন্য আবাসন ও নিরাপদ পরিবহন সুবিধা (প্রক্রিয়াধীন)'
          ]
        },
        {
          titleEn: 'Fire Prevention, Safety & Zero Metal',
          titleBn: 'অগ্নি প্রতিরোধ, নিরাপত্তা ও মেটাল মুক্ত ফিনিশিং',
          itemsEn: [
            'Fire extinguishers on each floor with multi-zone emergency hydrants',
            'Fire drills conducted at least 12 times a year with local Fire Service',
            'Clear emergency exit doors, glow-in-the-dark evacuation signages',
            'Personal Protective Equipment (PPE), gloves, masks & safety boots',
            'Sufficient industrial ventilation & high-capacity air filtration units',
            'Adequate lux-level industrial LED illumination for eye health',
            '100% Total No-Smoking Zone across entire factory premises',
            'Free Metal Zone & 9-point needle detector security in Finishing',
            'Group Insurance coverage for 100% of workforce'
          ],
          itemsBn: [
            'প্রতিটি ফ্লোরে ফায়ার এক্সটিংগুইশার ও ফায়ার হাইড্রেন্ট ব্যবস্থা',
            'স্থানীয় ফায়ার সার্ভিসের সাথে বছরে অন্তত ১২ বার ফায়ার ড্রিল পরিচালনা',
            'প্রশস্ত জরুরি নির্গমন পথ এবং অন্ধকারে দৃশ্যমান ইভাকুয়েশন সাইন',
            'সুরক্ষামূলক পোশাক (পিপিই), গ্লাভস, মাস্ক ও সেফটি বুট সরবরাহ',
            'অতিরিক্ত তাপ ও ধুলা নিয়ন্ত্রণে পর্যাপ্ত বায়ু চলাচল ও এয়ার ফিল্ট্রেশন',
            'চোখের সুরক্ষায় নির্দেশিকা অনুযায়ী পর্যাপ্ত বৈজ্ঞানিক আলোর ব্যবস্থা',
            'কারখানার সমগ্র এলাকায় সম্পূর্ণ ধূমপানমুক্ত পরিবেশ',
            'ফিনিশিং সেকশনে ফ্রি মেটাল জোন ও সুই ডিটেক্টর সুরক্ষা',
            'সকল কর্মীর জন্য শতভাগ গ্রুপ জীবন বীমা কভারেজ'
          ]
        }
      ];

      // Leaders data
      const leaders = [
        {
          nameEn: 'Alhaj Md. Abed Ali',
          nameBn: 'আলহাজ্ব মোঃ আবেদ আলী',
          roleEn: 'Founder & Visionary Pioneer',
          roleBn: 'প্রতিষ্ঠাতা ও স্বপ্নদ্রষ্টা',
          img: assets.leaders.abedAli,
          mobile: '+880 1713-562042',
          email: 'info@nodibanglagroup.com',
          bioEn: 'The visionary foundation of Abed Textile Processing Mills Ltd. whose ethics and entrepreneurial spirit inspire the group.',
          bioBn: 'আবেদ টেক্সটাইল প্রোসেসিং মিলস লিমিটেডের প্রতিষ্ঠাতা যার সততা, নৈতিকতা ও উদ্যোগ সমগ্র গ্রুপকে অনুপ্রাণিত করে।'
        },
        {
          nameEn: 'Monjur Elahi',
          nameBn: 'মনজুর এলাহী',
          roleEn: 'Managing Director',
          roleBn: 'ব্যবস্থাপনা পরিচালক',
          img: assets.leaders.manjurElahi,
          mobile: '01713-562042',
          email: 'info@nodibanglagroup.com',
          bioEn: 'Dynamic leader steering Nodi Bangla Group towards international excellence and cutting-edge textile processing.',
          bioBn: 'নোদী বাংলা গ্রুপকে আন্তর্জাতিক উৎকর্ষ এবং সর্বাধুনিক টেক্সটাইল প্রসেসিংয়ের শীর্ষে নিয়ে যাওয়ার দূরদর্শী কর্ণধার।'
        },
        {
          nameEn: 'Abdullah Al Mamun',
          nameBn: 'আব্দুল্লাহ আল মামুন',
          roleEn: 'Director',
          roleBn: 'পরিচালক',
          img: assets.leaders.abdulMamun,
          mobile: '01713-519783',
          email: 'abedmamun@hotmail.com',
          bioEn: 'Overseeing global operations, supply chain logistics, high-volume manufacturing, and modern compliance standards.',
          bioBn: 'আন্তর্জাতিক কার্যক্রম, সাপ্লাই চেইন লজিস্টিকস, বৃহৎ উৎপাদন এবং আধুনিক কমপ্লায়েন্স স্ট্যান্ডার্ড পরিচালনায় অভিজ্ঞ।'
        },
        {
          nameEn: 'Mahbubur Rahman (Monir)',
          nameBn: 'মাহবুবুর রহমান (মনির)',
          roleEn: 'Director',
          roleBn: 'পরিচালক',
          img: assets.leaders.mahbuburRahman,
          mobile: '01711-707403',
          email: 'abedmonir@hotmail.com',
          bioEn: 'Leading technical innovations, plant maintenance, machinery modernization, and client relationship expansion.',
          bioBn: 'প্রযুক্তিগত উদ্ভাবন, প্ল্যান্ট আধুনিকায়ন, যন্ত্রপাতি উন্নয়ন এবং ক্লায়েন্ট রিলেশন সম্প্রসারণে অগ্রণী ভূমিকা পালনকারী।'
        }
      ];

      // Concerns data
      const concerns = [
        { nameEn: 'Abed Textile Processing Mills Ltd.', nameBn: 'আবেদ টেক্সটাইল প্রোসেসিং মিলস লিমিটেড', unitEn: 'Textile Unit (Flagship)', unitBn: 'টেক্সটাইল ইউনিট (প্রধান)', descEn: 'Flagship processing plant in Narsingdi handling dyeing, printing, weaving, and finishing.', descBn: 'নরসিংদীতে অবস্থিত প্রধান প্রসেসিং প্ল্যান্ট যা ডাইং, প্রিন্টিং, উইভিং ও ফিনিশিং পরিচালনা করে।' },
        { nameEn: 'A3 Color Chem Ltd.', nameBn: 'এ৩ কালার কেম লিমিটেড', unitEn: 'Chemical Unit', unitBn: 'কেমিক্যাল ইউনিট', descEn: 'Specialized importer and formulator of high-grade textile dyes, reactive pigments, and auxiliaries.', descBn: 'উচ্চমানের টেক্সটাইল ডাই, রিয়্যাক্টিভ পিগমেন্ট ও সাইজিং এজেন্টের বিশেষায়িত আমদানিকারক।' },
        { nameEn: 'Nodi Bangla Textile Mills Ltd.', nameBn: 'নোদী বাংলা টেক্সটাইল মিলস লিমিটেড', unitEn: 'Textile Unit', unitBn: 'টেক্সটাইল ইউনিট', descEn: 'Dedicated spinning, weaving, and fabric processing facility for high-volume garments.', descBn: 'বৃহৎ পরিমাণের পোশাকের জন্য নিবেদিত স্পিনিং, উইভিং এবং বিশেষায়িত ফেব্রিক প্রসেসিং।' },
        { nameEn: 'Nodi Bangla Construction Ltd.', nameBn: 'নোদী বাংলা কনস্ট্রাকশন লিমিটেড', unitEn: 'Heavy Infrastructure', unitBn: 'ভারী অবকাঠামো', descEn: 'Civil engineering, industrial factory fabrication, deep foundation, and commercial projects.', descBn: 'দেশব্যাপী সিভিল ইঞ্জিনিয়ারিং, শিল্প কারখানার স্ট্রাকচারাল ফেব্রিকেশন ও নির্মাণ।' },
        { nameEn: 'Nodi Bangla Developers Ltd.', nameBn: 'নোদী বাংলা ডেভেলপারস লিমিটেড', unitEn: 'Real Estate & Urban', unitBn: 'রিয়েল এস্টেট ও নগর উন্নয়ন', descEn: 'Premium residential apartments, commercial complexes, and industrial parks.', descBn: 'প্রিমিয়াম আবাসিক অ্যাপার্টমেন্ট, বাণিজ্যিক কমপ্লেক্স এবং ইন্ডাস্ট্রিয়াল পার্ক নির্মাণ।' },
        { nameEn: 'Sher-e-Bangla Textile Dyeing & Printing', nameBn: 'শের-ই-বাংলা টেক্সটাইল ডাইং অ্যান্ড প্রিন্টিং', unitEn: 'Specialized Processing', unitBn: 'বিশেষায়িত প্রসেসিং', descEn: 'Specialized yarn dyeing, traditional textile processing, and wholesale supply.', descBn: 'বিশেষায়িত ইয়ার্ন ডাইং, ঐতিহ্যবাহী টেক্সটাইল প্রসেসিং এবং পাইকারি সরবরাহ।' }
      ];

      const currentUnitData = units[activeUnit as keyof typeof units] || units.weaving;

      const filteredGallery = galleryCategory === 'All'
        ? assets.gallery
        : assets.gallery.filter(g => g.cat === galleryCategory);

      const openLightbox = (items: LightboxItem[], index: number) => {
        setLightbox({ open: true, index, items });
      };

      return (
        <div className="relative min-h-screen text-slate-900 bg-white font-sans">

          {/* Textile Flowing Thread Canvas */}
          <TextileCanvas />

          {/* Glowing Ambient Orbs */}
          <div className="glow-orb w-96 h-96 bg-sky-500/20 top-20 -left-20" />
          <div className="glow-orb w-96 h-96 bg-amber-500/15 top-[1200px] -right-20" />
          <div className="glow-orb w-96 h-96 bg-emerald-500/15 top-[2800px] left-10" />

          {/* Sticky Navbar */}
          <header className="fixed top-0 left-0 right-0 z-40 glass-panel py-3 shadow-2xl border-b border-sky-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

              {/* Brand Logo */}
              <a href="#" className="flex items-center gap-3 group">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-amber-400 p-0.5 shadow-lg group-hover:scale-105 transition-transform">
                  <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center p-1">
                    <img src={assets.logo} alt="Logo" className="w-full h-full object-contain" />
                  </div>
                </div>
                <div>
                  <span className="font-black text-lg tracking-tight bg-gradient-to-r from-slate-900 via-slate-800 to-sky-600 bg-clip-text text-transparent block leading-tight">
                    {lang === 'bn' ? 'আবেদ টেক্সটাইল' : 'ABED TEXTILE'}
                  </span>
                  <span className="text-[10px] font-bold tracking-widest text-amber-600 uppercase block -mt-0.5">
                    {lang === 'bn' ? 'নোদী বাংলা গ্রুপ' : 'Processing Mills Ltd.'}
                  </span>
                </div>
              </a>

              {/* Desktop Nav */}
              <nav className="hidden xl:flex items-center space-x-1 text-xs lg:text-sm font-medium text-slate-900">
                <a href="#about" className="px-3 py-1.5 rounded-lg hover:text-sky-600 hover:bg-slate-900/5 transition-colors">{lang === 'bn' ? 'কোম্পানি' : 'About'}</a>
                <a href="#units" className="px-3 py-1.5 rounded-lg hover:text-sky-600 hover:bg-slate-900/5 transition-colors">{lang === 'bn' ? 'প্রোডাকশন' : 'Units'}</a>
                <a href="#machinery" className="px-3 py-1.5 rounded-lg hover:text-sky-600 hover:bg-slate-900/5 transition-colors">{lang === 'bn' ? 'মেশিনারি (৭২)' : 'Machinery'}</a>
                <a href="#products" className="px-3 py-1.5 rounded-lg hover:text-sky-600 hover:bg-slate-900/5 transition-colors">{lang === 'bn' ? 'পণ্যসমূহ' : 'Products'}</a>
                <a href="#compliance" className="px-3 py-1.5 rounded-lg hover:text-sky-600 hover:bg-slate-900/5 transition-colors">{lang === 'bn' ? 'কমপ্লায়েন্স' : 'Compliance'}</a>
                <a href="#leadership" className="px-3 py-1.5 rounded-lg hover:text-sky-600 hover:bg-slate-900/5 transition-colors">{lang === 'bn' ? 'পরিচালনা পর্ষদ' : 'Leadership'}</a>
                <a href="#gallery" className="px-3 py-1.5 rounded-lg hover:text-sky-600 hover:bg-slate-900/5 transition-colors">{lang === 'bn' ? 'গ্যালারি' : 'Gallery'}</a>
                <a href="#rfq" className="px-3 py-1.5 rounded-lg hover:text-sky-600 hover:bg-slate-900/5 transition-colors">{lang === 'bn' ? 'কোটেশন' : 'RFQ'}</a>
                <a href="#contact" className="px-3 py-1.5 rounded-lg hover:text-sky-600 hover:bg-slate-900/5 transition-colors">{lang === 'bn' ? 'যোগাযোগ' : 'Contact'}</a>
              </nav>

              {/* Action Buttons */}
              <div className="flex items-center gap-3">
                {/* Language Switcher Button */}
                <button
                  onClick={() => setLang(lang === 'en' ? 'bn' : 'en')}
                  className="px-3 py-1.5 rounded-lg bg-white border border-sky-500/40 text-xs font-bold text-sky-600 hover:bg-sky-500/10 transition-all flex items-center gap-1.5 cursor-pointer shadow-md"
                >
                  <span className="text-sm">🌐</span>
                  <span>{lang === 'en' ? 'বাংলা' : 'English'}</span>
                </button>

                <a
                  href="#rfq"
                  className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white text-xs font-bold shadow-lg shadow-sky-500/25 transition-all"
                >
                  <span>{lang === 'bn' ? 'কোটেশন রিকোয়েস্ট' : 'Request RFQ'}</span>
                </a>
              </div>

            </div>
          </header>

          {/* Hero Section */}
          <section className="relative min-h-[92vh] flex items-center justify-center pt-28 pb-16 overflow-hidden">
            <div className="absolute inset-0 z-0">
              <img
                src={assets.homeBg}
                alt="Abed Textile Plant"
                className="w-full h-full object-cover scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/25 to-transparent" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

                <div className="lg:col-span-12 space-y-6">
                  {/* Headline */}
                  <h1 className="hero-animate text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.2]" style={{ animationDelay: '0.1s' }}>
                    {lang === 'bn' ? (
                      'আবেদ টেক্সটাইল প্রোসেসিং মিলস লিমিটেড'
                    ) : (
                      'Abed Textile Processing Mills Ltd.'
                    )}
                  </h1>

                  {/* Description */}
                  <p className="hero-animate text-slate-200 text-base sm:text-lg max-w-2xl leading-relaxed" style={{ animationDelay: '0.25s' }}>
                    {lang === 'bn' ? (
                      <>
                        ১৯৯৩ সাল থেকে বাংলাদেশের টেক্সটাইল শিল্পে আস্থার প্রতীক। ৭২টি আধুনিক মেশিনারি,
                        ১০০০+ দক্ষ কর্মী এবং প্রতি মাসে ৪৫ লক্ষ গজ উৎপাদন ক্ষমতাসম্পন্ন সর্বাধুনিক ডাইং, প্রিন্টিং ও ফিনিশিং প্ল্যান্ট।
                      </>
                    ) : (
                      <>
                        A trusted name in Bangladesh textile processing since 1993. Empowered by 72 modern imported
                        machineries, 1,000+ skilled workforce, and 4.5M yards monthly capacity for world-class Shari, 3-Pcs, Poplin & Fancy Fabrics.
                      </>
                    )}
                  </p>

                  {/* Buttons */}
                  <div className="hero-animate flex flex-wrap gap-4 pt-2" style={{ animationDelay: '0.4s' }}>
                    <a
                      href="#units"
                      className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-sky-500/30 transition-all flex items-center gap-2"
                    >
                      <span>{lang === 'bn' ? 'উৎপাদন ইউনিটসমূহ দেখুন' : 'Explore Production Units'}</span>
                      <span>→</span>
                    </a>
                    <a
                      href="#rfq"
                      className="px-6 py-3.5 rounded-xl glass-panel border border-slate-300 hover:border-amber-400/60 text-slate-900 hover:text-amber-600 font-semibold text-sm transition-all"
                    >
                      <span>{lang === 'bn' ? 'কোটেশন রিকোয়েস্ট করুন' : 'Request RFQ (Quotation)'}</span>
                    </a>
                    <a
                      href="#contact"
                      className="px-5 py-3.5 rounded-xl bg-white/80 hover:bg-slate-200 border border-slate-200 text-slate-700 hover:text-slate-900 font-medium text-sm transition-all"
                    >
                      <span>{lang === 'bn' ? 'ফ্যাক্টরি ও অফিস' : 'Factory & Offices'}</span>
                    </a>
                  </div>
                </div>

              </div>
            </div>
          </section>

          {/* About Section */}
          <section id="about" className="py-20 relative bg-slate-50 textile-grid border-t border-slate-100 section-3d">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center max-w-3xl mx-auto mb-14" data-reveal>
                <span className="px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                  {lang === 'bn' ? 'আমাদের ইতিহাস ও পরিচিতি' : 'Corporate Identity & Legacy'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  {lang === 'bn' ? 'তিন দশকের ধারাবাহিক উৎকর্ষ ও বিশ্বাস' : 'Three Decades of Continuous Excellence & Trust'}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600">
                  {lang === 'bn'
                    ? '১৯৯৩ সাল থেকে আন্তর্জাতিক মানে টেক্সটাইল প্রসেসিংয়ে নেতৃত্ব দিয়ে আসছে আবেদ টেক্সটাইল।'
                    : 'Leading the textile processing landscape with high compliance, modern machinery, and sustainable values.'}
                </p>
              </div>

              {/* Tabs */}
              <div className="flex justify-center mb-10">
                <div className="glass-panel p-1.5 rounded-xl inline-flex space-x-1 border border-slate-200">
                  <button
                    onClick={() => setAboutTab('about')}
                    className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                      aboutTab === 'about' ? 'bg-sky-500 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {lang === 'bn' ? 'কোম্পানি সম্পর্কে' : 'About Company'}
                  </button>
                  <button
                    onClick={() => setAboutTab('vision')}
                    className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                      aboutTab === 'vision' ? 'bg-sky-500 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {lang === 'bn' ? 'আমাদের ভিশন (লক্ষ্য)' : 'Our Vision'}
                  </button>
                  <button
                    onClick={() => setAboutTab('mission')}
                    className={`px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold transition-all ${
                      aboutTab === 'mission' ? 'bg-sky-500 text-white shadow-md' : 'text-slate-600 hover:text-slate-900'
                    }`}
                  >
                    {lang === 'bn' ? 'আমাদের মিশন (উদ্দেশ্য)' : 'Our Mission'}
                  </button>
                </div>
              </div>

              {/* Tab Details */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-16">
                <div className="lg:col-span-7">
                  <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-4">
                    {aboutTab === 'about' && (
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                          {lang === 'bn' ? 'ব্যবসায়িক মডেল ও পটভূমি' : 'Business Model & Inception'}
                        </h3>
                        <p className="text-slate-700 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                          {lang === 'bn'
                            ? "আমাদের ব্যবসায়িক মডেল মূলত গুণগত মানের মার্চেন্ডাইজিং ও পণ্যের গুণগত মান, সময়মতো ডেলিভারি, উচ্চমানের কমপ্লায়েন্স এবং নিবেদিত গ্রাহকসেবার উপর কেন্দ্রীভূত। বিশ্বব্যাপী আমাদের ব্যবসা সম্প্রসারণের দিকে তাকিয়ে থাকলেও, আমরা নিশ্চিত করি যে আমরা আমাদের বর্তমান গ্রাহকদের প্রতি সম্পূর্ণরূপে প্রতিশ্রুতিবদ্ধ। আমরা ক্রমাগত দীর্ঘমেয়াদী পারস্পরিক লাভজনক ব্যবসায়িক সম্পর্ক গড়ে তোলার এবং আমাদের সকল সেবার দক্ষতা ও স্থায়িত্ব বৃদ্ধির সুযোগ খুঁজে চলেছি।\n\nকোম্পানিটি প্রতিষ্ঠিত হয় এবং বাণিজ্যিক উৎপাদন শুরু হয় ১৯৯৩ সালে। কোম্পানিগুলো দেশের সবচেয়ে সম্ভাবনাময় শিল্প এলাকায় অবস্থিত এবং কর্পোরেট অফিসটি রাজধানী ঢাকা শহরের কেন্দ্রস্থলে অবস্থিত।\n\nবর্তমানে আমাদের মোট ৭২টি উৎপাদন মেশিনারি এবং ১০০০ জন কর্মীর একটি কর্মীবাহিনী রয়েছে। আমাদের মাসিক মোট সমন্বিত উৎপাদন ক্ষমতা ৪৫,০০,০০০ গজ, যা বর্তমানে মাত্র ৬০% ক্ষমতা ব্যবহার করে অর্জিত হচ্ছে।"
                            : "Our business model focuses on Quality Merchandising and Product Quality, Timed Delivery, a High Standard of Compliance and Dedicated Customer Service. Whilst looking forward to expanding our business globally, we ensure that we are fully committed to our current clients.\n\nThe company was established and Commercial Production commenced in 1993. The companies are situated at the country's most exciting industrial area and the Corporate Office is located at the heart of Dhaka.\n\nCurrently we hold a total of 72 production machineries and a workforce of 1000 employees. Our Total Consolidated Production Capacity per month is 4,500,000 yards, which is achieved only 60% capacity from utilization."}
                        </p>
                      </div>
                    )}
                    {aboutTab === 'vision' && (
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                          {lang === 'bn' ? 'আমাদের দীর্ঘমেয়াদী ভিশন' : 'Our Long-Term Vision'}
                        </h3>
                        <p className="text-slate-700 text-base leading-relaxed">
                          {lang === 'bn'
                            ? "সর্বোচ্চ সমন্বিত সুবিধা অর্জন করা এবং উচ্চ উৎপাদনশীলতা, উন্নত প্রযুক্তিগত উদ্ভাবন এবং সম্পূর্ণ গ্রাহক সন্তুষ্টির অনুসরণের মাধ্যমে একটি বাজার নেতা হয়ে ওঠা — আমাদের মূল ব্যবসার শক্তিমত্তাকে কাজে লাগিয়ে — অর্থাৎ শাড়ি, থ্রি-পিস, পপলিন, বয়েল, নিট ফেব্রিক্স, লেডিস প্রিন্ট সরবরাহের ক্ষেত্রে সেরা সাপ্লাই হাউজ এবং বাজার নেতা হওয়া।"
                            : "To maximize synergistic benefits, and become a market leader through the pursuit of high productivity, advanced technological innovation & absolute customer satisfaction — by leveraging on the strengths of our core business — in other words, best on Shari, 3 pcs, Poplin, Boil, Knit Fabrics, Ladies Print supply house and a market leader."}
                        </p>
                      </div>
                    )}
                    {aboutTab === 'mission' && (
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-3">
                          {lang === 'bn' ? 'আমাদের মিশন ও পরিচালনা লক্ষ্য' : 'Our Mission & Strategic Purpose'}
                        </h3>
                        <p className="text-slate-700 text-base leading-relaxed whitespace-pre-line">
                          {lang === 'bn'
                            ? "উচ্চমানের শাড়ি, থ্রি-পিস, পপলিন, ভয়েল, নিট ফেব্রিক্স, লেডিস প্রিন্ট উৎপাদনের জন্য গ্রাহকদের চাহিদার উপর ক্রমাগত মনোযোগ দেওয়া। আন্তর্জাতিক স্পেশালিটি রিটেইলারদের সেবাদানে একটি শীর্ষস্থানীয় সরবরাহকারী হিসেবে নিজেদের প্রতিষ্ঠিত করা।\n\nব্যবসায়িক অংশীদারদের সাথে ঘনিষ্ঠ কর্মসম্পর্ক, উদ্ভাবনী উৎপাদন প্রক্রিয়া এবং মানসম্পন্ন গ্রাহকসেবা বজায় রাখার মাধ্যমে চ্যালেঞ্জিং বাজারের চাহিদা পূরণে সচেষ্ট থাকা।"
                            : "To continuously focus on customer needs to manufacture quality Shari, 3 pcs, Poplin, Voile, Knit Fabrics, Ladies Print of high standard. To establish ourselves as the leading provider serving international specialty retailers.\n\nTo strive to meet challenging market needs through a closer working relationship with business partners, innovative manufacturing processes and maintaining standard customer service."}
                        </p>
                      </div>
                    )}

                    <div className="grid grid-cols-3 gap-3 pt-4 border-t border-slate-200">
                      <div className="p-3 rounded-lg bg-white/80 border border-slate-200 text-center">
                        <div className="text-sky-600 font-bold text-base sm:text-lg">1,53,372</div>
                        <div className="text-[11px] text-slate-600">{lang === 'bn' ? 'বর্গফুট কারখানা' : 'Sq.Ft. Floor'}</div>
                      </div>
                      <div className="p-3 rounded-lg bg-white/80 border border-slate-200 text-center">
                        <div className="text-amber-600 font-bold text-base sm:text-lg">60%</div>
                        <div className="text-[11px] text-slate-600">{lang === 'bn' ? 'ব্যবহার হার' : 'Utilization'}</div>
                      </div>
                      <div className="p-3 rounded-lg bg-white/80 border border-slate-200 text-center">
                        <div className="text-emerald-600 font-bold text-base sm:text-lg">45,00,000</div>
                        <div className="text-[11px] text-slate-600">{lang === 'bn' ? 'গজ মাসিক ক্ষমতা' : 'Yards/Month'}</div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 relative">
                  <div className="rounded-2xl overflow-hidden border border-sky-500/30 shadow-2xl relative">
                    <img src={assets.aboutBg} alt="Factory Site" className="w-full h-80 sm:h-96 object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/80 via-transparent to-transparent" />
                  </div>
                </div>
              </div>

              {/* 6 Core Values */}
              <div className="text-center mb-8" data-reveal>
                <h3 className="text-2xl font-bold text-slate-900">{lang === 'bn' ? 'আমাদের মৌলিক মূল্যবোধ' : 'Our Core Values'}</h3>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  { titleEn: 'Customer First', titleBn: 'গ্রাহকই সর্বাগ্রে', descEn: 'We place customer satisfaction and requirements at the core of all operations.', descBn: 'আমরা আমাদের সকল কার্যক্রমের কেন্দ্রে গ্রাহক সন্তুষ্টি ও চাহিদাকে অগ্রাধিকার দিই।' },
                  { titleEn: 'Pursuit of Quality', titleBn: 'গুণগত মানের অনুসরণ', descEn: 'Relentless commitment to flawless processing, texture perfection, and durability.', descBn: 'ত্রুটিমুক্ত প্রসেসিং, নিখুঁত টেক্সচার ও দীর্ঘস্থায়িত্বের প্রতি অবিচল অঙ্গীকার।' },
                  { titleEn: 'Teamwork & People', titleBn: 'টিমওয়ার্ক ও মূল্যবান মানবসম্পদ', descEn: 'People are our greatest assets; we foster growth and mutual respect.', descBn: 'মানুষই আমাদের সবচেয়ে বড় সম্পদ; আমরা প্রবৃদ্ধি ও পারস্পরিক শ্রদ্ধার পরিবেশ গড়ে তুলি।' },
                  { titleEn: 'Innovation & Diversity', titleBn: 'উদ্ভাবন ও বৈচিত্র্য', descEn: 'Adopting state-of-the-art global machinery and creative dyeing/print techniques.', descBn: 'অত্যাধুনিক বৈশ্বিক যন্ত্রপাতি এবং সৃজনশীল ডাইং ও প্রিন্ট প্রযুক্তির সংযোজন।' },
                  { titleEn: 'Efficiency & Cost Control', titleBn: 'দক্ষতা বৃদ্ধি ও ব্যয় নিয়ন্ত্রণ', descEn: 'Optimizing supply chains, lean production, and green energy utilization.', descBn: 'সাপ্লাই চেইন অপটিমাইজেশন, অপচয়হীন উৎপাদন এবং সবুজ শক্তির সদ্ব্যবহার।' },
                  { titleEn: 'Responsible Corporate Citizen', titleBn: 'দায়িত্বশীল কর্পোরেট নাগরিক', descEn: 'Strict adherence to SA-8000, zero environmental contamination, and worker welfare.', descBn: 'SA-8000 কঠোর অনুসরণ, শূন্য পরিবেশ দূষণ এবং শ্রমিকদের কল্যাণ নিশ্চিতকরণ।' }
                ].map((val, i) => (
                  <div key={i} className="glass-card p-6 rounded-2xl border border-slate-200 group">
                    <div className="w-10 h-10 rounded-xl bg-sky-500/10 text-sky-600 flex items-center justify-center font-bold mb-3 group-hover:scale-110 transition-transform">
                      0{i+1}
                    </div>
                    <h4 className="text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                      {lang === 'bn' ? val.titleBn : val.titleEn}
                    </h4>
                    <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                      {lang === 'bn' ? val.descBn : val.descEn}
                    </p>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* Production Units Section */}
          <section id="units" className="py-20 relative bg-white section-3d">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center max-w-3xl mx-auto mb-12" data-reveal>
                <span className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                  {lang === 'bn' ? 'উৎপাদন ও প্রসেসিং বিভাগ' : 'Full-Scale Manufacturing Wings'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  {lang === 'bn' ? 'আমাদের সমন্বিত প্রোডাকশন সুবিধাসমূহ' : 'Integrated Industrial Production Infrastructure'}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600">
                  {lang === 'bn'
                    ? 'বুনন থেকে শুরু করে ডাইং, ডিজিটাল ও ফ্ল্যাটবেড প্রিন্টিং, ফিনিশিং ও ইটিপি—প্রতিটি ধাপে শতভাগ নিয়ন্ত্রিত কোয়ালিটি।'
                    : 'From high-speed weaving to dyeing, digital/flatbed printing, finishing, and biological wastewater recycling.'}
                </p>
              </div>

              {/* Unit Pills */}
              <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
                {Object.keys(units).map((key) => {
                  const u = units[key as keyof typeof units];
                  const isSelected = activeUnit === key;
                  return (
                    <button
                      key={key}
                      onClick={() => setActiveUnit(key)}
                      className={`px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                        isSelected
                          ? 'bg-gradient-to-r from-sky-500 to-blue-600 text-white border-sky-400 shadow-lg shadow-sky-500/25 scale-105'
                          : 'bg-white/80 text-slate-700 border-slate-200 hover:border-slate-300 hover:text-slate-900'
                      }`}
                    >
                      <span>{lang === 'bn' ? u.titleBn : u.titleEn}</span>
                    </button>
                  );
                })}
              </div>

              {/* Active Unit Card */}
              <div className="glass-card rounded-2xl border border-slate-200 overflow-hidden shadow-2xl">
                <div className="relative h-64 sm:h-80 md:h-96 w-full overflow-hidden">
                  <img src={currentUnitData.banner} alt="Banner" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-white via-white/60 to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                    <div>
                      <span className="text-xs font-bold text-amber-600 uppercase tracking-widest">
                        {lang === 'bn' ? 'বিভাগীয় পরিকাঠামো' : 'Specialized Facility Unit'}
                      </span>
                      <h3 className="text-2xl sm:text-4xl font-extrabold text-slate-900 mt-1">
                        {lang === 'bn' ? currentUnitData.titleBn : currentUnitData.titleEn}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 max-w-xl mt-1">
                        {lang === 'bn' ? currentUnitData.shortBn : currentUnitData.shortEn}
                      </p>
                    </div>
                    <div className="flex gap-2">
                      {currentUnitData.stats.map((st, i) => (
                        <div key={i} className="px-3.5 py-2 rounded-xl glass-panel border border-sky-500/30 text-center">
                          <div className="text-xs sm:text-sm font-bold text-sky-600">{st.val}</div>
                          <div className="text-[10px] text-slate-600">{lang === 'bn' ? st.labelBn : st.labelEn}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8">
                  <div className="lg:col-span-6 space-y-4">
                    <h4 className="text-lg font-bold text-slate-900">
                      {lang === 'bn' ? 'কার্যক্রম ও প্রযুক্তিগত সক্ষমতা' : 'Operations & Technical Capacity'}
                    </h4>
                    <p className="text-slate-700 text-sm leading-relaxed">
                      {lang === 'bn' ? currentUnitData.fullBn : currentUnitData.fullEn}
                    </p>
                  </div>

                  <div className="lg:col-span-6 space-y-3">
                    <div className="flex items-center justify-between">
                      <h4 className="text-sm font-bold text-slate-900">{lang === 'bn' ? 'ইউনিটের ছবি' : 'Unit Gallery'}</h4>
                      <span className="text-xs text-slate-600">{lang === 'bn' ? 'বড় করে দেখতে ক্লিক করুন' : 'Click to enlarge'}</span>
                    </div>
                    <div className="grid grid-cols-3 gap-2.5">
                      {currentUnitData.gallery.map((img, idx) => (
                        <div
                          key={idx}
                          onClick={() => openLightbox(currentUnitData.gallery.map(g => ({ src: g, title: `${currentUnitData.titleEn} #${idx+1}` })), idx)}
                          className="relative aspect-video rounded-lg overflow-hidden border border-slate-200 hover:border-sky-400 cursor-pointer group shadow-md"
                        >
                          <img src={img} alt="Thumb" className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Machinery Section (72 Units) */}
          <section id="machinery" className="py-20 relative bg-slate-50 textile-grid border-t border-slate-100 section-3d">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center max-w-3xl mx-auto mb-12" data-reveal>
                <span className="px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                  {lang === 'bn' ? 'মেশিনারি ও প্রযুক্তি বহর' : 'State-of-the-Art Machineries'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  {lang === 'bn' ? 'মোট ৭২টি আমদানিকৃত আধুনিক মেশিনারি সেটআপ' : '72 Heavy-Duty Units of World-Class Machinery'}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600">
                  {lang === 'bn'
                    ? 'জাপান, জার্মানি, ভারত, চীন ও তাইওয়ান থেকে শতভাগ নতুন অবস্থায় আমদানিকৃত অত্যাধুনিক টেক্সটাইল মেশিনারি।'
                    : 'Imported in brand-new condition from Japan, Germany, India, China, and Taiwan for high-precision operations.'}
                </p>
              </div>

              {/* Controls Bar */}
              <div className="glass-panel p-4 rounded-2xl border border-slate-200 mb-8 space-y-4 shadow-xl">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">

                  {/* Search */}
                  <div className="w-full md:w-80">
                    <input
                      type="text"
                      placeholder={lang === 'bn' ? 'মেশিনের নাম বা দেশ খুঁজুন...' : 'Search machine name, origin...'}
                      value={machineSearch}
                      onChange={(e) => setMachineSearch(e.target.value)}
                      className="w-full px-4 py-2 rounded-xl bg-white/80 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-sky-400 transition-colors"
                    />
                  </div>

                  <div className="flex items-center justify-between w-full md:w-auto gap-4">
                    <div className="text-xs text-slate-700 font-medium">
                      {lang === 'bn' ? 'প্রদর্শিত ইউনিট:' : 'Showing Units:'}{' '}
                      <span className="font-bold text-amber-600 text-sm">
                        {filteredMachines.reduce((a,b) => a + b.count, 0)}
                      </span> / 72
                    </div>

                    <div className="flex items-center p-1 rounded-xl bg-white border border-slate-200">
                      <button
                        onClick={() => setViewMode('card')}
                        className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                          viewMode === 'card' ? 'bg-sky-500 text-white' : 'text-slate-600'
                        }`}
                      >
                        Card
                      </button>
                      <button
                        onClick={() => setViewMode('table')}
                        className={`px-3 py-1 text-xs font-semibold rounded-lg transition-colors ${
                          viewMode === 'table' ? 'bg-sky-500 text-white' : 'text-slate-600'
                        }`}
                      >
                        Table
                      </button>
                    </div>
                  </div>
                </div>

                {/* Category filters */}
                <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200/80">
                  {['All', 'Dyeing', 'Printing', 'Finishing', 'Pre-Treatment', 'Utilities'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setMachineCategory(cat)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-semibold transition-all border cursor-pointer ${
                        machineCategory === cat
                          ? 'bg-sky-500 text-white border-sky-400'
                          : 'bg-white/60 text-slate-600 border-slate-200 hover:text-slate-800'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>
              </div>

              {/* Machinery Display */}
              {viewMode === 'card' ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
                  {filteredMachines.map((m) => (
                    <div key={m.id} className="glass-card p-5 rounded-xl border border-slate-200 hover:border-sky-500/40 flex flex-col justify-between group tilt-card">
                      <div>
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded bg-sky-500/10 text-sky-600 border border-sky-500/20">
                            {m.cat}
                          </span>
                          <span className="text-sm font-black px-2 py-0.5 rounded-full bg-amber-500/20 text-amber-700 border border-amber-500/30">
                            {m.count} {lang === 'bn' ? 'টি' : 'Pcs'}
                          </span>
                        </div>
                        <h4 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                          {lang === 'bn' ? m.nameBn : m.nameEn}
                        </h4>
                        <div className="text-xs text-slate-600 font-medium mt-0.5">{lang === 'bn' ? m.nameEn : m.nameBn}</div>
                        <p className="text-xs text-slate-700 mt-2 leading-relaxed line-clamp-3">
                          {lang === 'bn' ? m.descBn : m.descEn}
                        </p>
                      </div>
                      <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-[11px] text-slate-600">
                        <span>🌐 {m.origin}</span>
                        <span className="text-emerald-600 font-semibold">✓ 100% Brand-New</span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="glass-panel rounded-2xl border border-slate-200 overflow-x-auto shadow-xl">
                  <table className="w-full text-left text-xs sm:text-sm text-slate-700">
                    <thead className="bg-white/90 text-xs font-bold uppercase text-slate-600 border-b border-slate-200">
                      <tr>
                        <th className="px-5 py-3.5">#</th>
                        <th className="px-5 py-3.5">{lang === 'bn' ? 'মেশিনের নাম' : 'Machine Name'}</th>
                        <th className="px-5 py-3.5">{lang === 'bn' ? 'ক্যাটাগরি' : 'Category'}</th>
                        <th className="px-5 py-3.5">{lang === 'bn' ? 'উৎপত্তির দেশ' : 'Origin'}</th>
                        <th className="px-5 py-3.5 text-right">{lang === 'bn' ? 'সংখ্যা (পরিমাণ)' : 'Quantity'}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-200">
                      {filteredMachines.map((m, i) => (
                        <tr key={m.id} className="hover:bg-sky-500/5 transition-colors">
                          <td className="px-5 py-3.5 text-slate-500">{i+1}</td>
                          <td className="px-5 py-3.5 font-semibold text-slate-900">
                            <div>{lang === 'bn' ? m.nameBn : m.nameEn}</div>
                            <div className="text-[11px] text-slate-600 font-normal">{lang === 'bn' ? m.nameEn : m.nameBn}</div>
                          </td>
                          <td className="px-5 py-3.5"><span className="px-2 py-0.5 rounded text-[11px] bg-white border border-slate-200 text-sky-600">{m.cat}</span></td>
                          <td className="px-5 py-3.5">{m.origin}</td>
                          <td className="px-5 py-3.5 text-right font-bold text-amber-600">{m.count} Pcs</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}

            </div>
          </section>

          {/* Products Section */}
          <section id="products" className="py-20 relative bg-white section-3d">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center max-w-3xl mx-auto mb-14" data-reveal>
                <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                  {lang === 'bn' ? 'পণ্য ও টেক্সটাইল সম্ভার' : 'Premium Textile Portfolio'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  {lang === 'bn' ? 'আমাদের প্রস্তুতকৃত প্রিমিয়াম ফেব্রিক্স ও পোশাক' : 'Our Manufactured Fabrics & Apparel Products'}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600">
                  {lang === 'bn'
                    ? 'শাড়ি, থ্রি-পিস, পপলিন, ভয়েল, লিলিয়ান এবং আধুনিক লেডিস ফ্যান্সি প্রিন্ট—আন্তর্জাতিক মানদণ্ডে তৈরি।'
                    : 'Export-grade Sharee, 3-Piece suits, Poplin, Voile, Lillian, and Knit Fancy Prints.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {products.map((p, idx) => (
                  <div
                    key={idx}
                    onClick={() => setSelectedProduct(idx)}
                    className={`glass-card p-6 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between tilt-card ${
                      selectedProduct === idx ? 'border-sky-400 shadow-xl shadow-sky-500/20 bg-white/90' : 'border-slate-200'
                    }`}
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-3">
                        <span className="text-[11px] font-bold text-sky-600 uppercase tracking-wider">
                          {lang === 'bn' ? p.catBn : p.catEn}
                        </span>
                        <span className="px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-amber-500/20 text-amber-700 border border-amber-500/30">
                          {lang === 'bn' ? p.badgeBn : p.badgeEn}
                        </span>
                      </div>

                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2">
                        {lang === 'bn' ? p.nameBn : p.nameEn}
                      </h3>

                      <p className="text-xs sm:text-sm text-slate-700 line-clamp-3 leading-relaxed mb-4">
                        {lang === 'bn' ? p.descBn : p.descEn}
                      </p>
                    </div>

                    <div className="pt-4 border-t border-slate-200 space-y-1.5">
                      {(lang === 'bn' ? p.specsBn : p.specsEn).slice(0, 2).map((sp, i) => (
                        <div key={i} className="text-xs text-slate-700 flex items-center gap-1.5">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span className="truncate">{sp}</span>
                        </div>
                      ))}
                      <div className="pt-3 text-xs font-semibold text-sky-600 flex items-center justify-between">
                        <span>{lang === 'bn' ? 'বিস্তারিত দেখুন' : 'View Full Details'}</span>
                        <span>→</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Selected Product Banner */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-sky-500/30 shadow-2xl">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                  <div className="lg:col-span-8 space-y-3">
                    <span className="px-3 py-1 rounded bg-sky-500/20 text-sky-700 text-xs font-bold uppercase">
                      {lang === 'bn' ? products[selectedProduct].catBn : products[selectedProduct].catEn}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                      {lang === 'bn' ? products[selectedProduct].nameBn : products[selectedProduct].nameEn}
                    </h3>
                    <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {lang === 'bn' ? products[selectedProduct].descBn : products[selectedProduct].descEn}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2">
                      {(lang === 'bn' ? products[selectedProduct].specsBn : products[selectedProduct].specsEn).map((sp, i) => (
                        <div key={i} className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-800 flex items-center gap-2">
                          <span className="text-emerald-600 font-bold">✓</span>
                          <span>{sp}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="lg:col-span-4 p-6 rounded-xl bg-white border border-slate-200 text-center space-y-3">
                    <div className="text-xs font-semibold text-slate-600 uppercase">{lang === 'bn' ? 'বাল্ক অর্ডার ও স্যাম্পল' : 'Bulk Order & Sampling'}</div>
                    <div className="text-base font-bold text-slate-900">{lang === 'bn' ? 'কাস্টমাইজড ফ্যাব্রিক কোটেশন চান?' : 'Need Custom Specifications?'}</div>
                    <p className="text-xs text-slate-600">{lang === 'bn' ? 'আপনার প্রয়োজনীয় ইয়ার্ন কাউন্ট ও ডিজাইনে দ্রুত মূল্য প্রস্তাবনা গ্রহণ করুন।' : 'Get rapid strike-offs & custom quotations.'}</p>
                    <a href="#rfq" className="w-full py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs uppercase block">
                      {lang === 'bn' ? 'কোটেশন রিকোয়েস্ট পাঠান' : 'Inquire This Fabric'}
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </section>

          {/* Compliance & HSE Section */}
          <section id="compliance" className="py-20 relative bg-slate-50 textile-grid border-t border-slate-100 section-3d">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center max-w-3xl mx-auto mb-14" data-reveal>
                <span className="px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                  {lang === 'bn' ? 'কমপ্লায়েন্স ও শ্রমিক কল্যাণ' : 'Compliance & Social Responsibility'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  {lang === 'bn' ? 'আন্তর্জাতিক মানদণ্ড ও SA-8000 কমপ্লায়েন্স পলিসি' : 'Global Standards & SA-8000 Compliance'}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600">
                  {lang === 'bn'
                    ? 'আইএলও (ILO) এবং বাংলাদেশ শ্রম আইন অনুসারে শিশুশ্রম মুক্ত, শতভাগ নিরাপদ কর্মপরিবেশ ও পরিবেশবান্ধব প্রক্রিয়াকরণ।'
                    : 'Strict adherence to ILO, SA-8000 and local labor laws ensuring worker safety, fair compensation, and zero ecological harm.'}
                </p>
              </div>

              {/* Certifications Row */}
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-12">
                {[
                  { code: 'OEKO-TEX 100', title: 'Confidence in Textiles' },
                  { code: 'ISO Certified', title: 'Quality Management' },
                  { code: 'ATPML Certified', title: 'Abed Textile Processing' },
                  { code: 'BTMEA Registered', title: 'Bangladesh Textile Exporters' },
                  { code: 'NCCI Member', title: 'Narsingdi Chamber of Commerce' }
                ].map((cert, i) => (
                  <div key={i} className="glass-card p-4 rounded-xl border border-slate-200 text-center flex flex-col items-center justify-center">
                    <span className="text-xl mb-1">🏅</span>
                    <div className="font-extrabold text-sm text-slate-900">{cert.code}</div>
                    <div className="text-[11px] text-slate-600 mt-0.5">{cert.title}</div>
                  </div>
                ))}
              </div>

              {/* Compliance Tabs */}
              <div className="flex flex-wrap justify-center gap-3 mb-10">
                {complianceData.map((c, idx) => (
                  <button
                    key={idx}
                    onClick={() => setComplianceIdx(idx)}
                    className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                      complianceIdx === idx
                        ? 'bg-emerald-600 text-white border-emerald-400 shadow-lg shadow-emerald-600/25 scale-105'
                        : 'bg-white/80 text-slate-700 border-slate-200 hover:text-slate-900'
                    }`}
                  >
                    <span>{lang === 'bn' ? c.titleBn : c.titleEn}</span>
                  </button>
                ))}
              </div>

              {/* Compliance Checklist Grid */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200 shadow-2xl">
                <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-200">
                  <div>
                    <h3 className="text-xl font-bold text-slate-900">
                      {lang === 'bn' ? complianceData[complianceIdx].titleBn : complianceData[complianceIdx].titleEn}
                    </h3>
                    <p className="text-xs text-slate-600 mt-0.5">
                      {lang === 'bn' ? 'ফ্যাক্টরিতে শতভাগ কার্যকর ও নিয়মিত মনিটরিংকৃত' : '100% Implemented & audited on site'}
                    </p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 text-xs font-semibold">
                    {(lang === 'bn' ? complianceData[complianceIdx].itemsBn : complianceData[complianceIdx].itemsEn).length} {lang === 'bn' ? 'টি মূল ধারা' : 'Audit Points'}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(lang === 'bn' ? complianceData[complianceIdx].itemsBn : complianceData[complianceIdx].itemsEn).map((item, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-white/80 border border-slate-200/80 flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-600 flex items-center justify-center flex-shrink-0 text-xs font-bold mt-0.5">✓</span>
                      <span className="text-xs sm:text-sm text-slate-800">{item}</span>
                    </div>
                  ))}
                </div>

                {/* ETP Bar */}
                <div className="mt-8 p-5 rounded-xl bg-gradient-to-r from-emerald-50 via-slate-50 to-sky-50 border border-emerald-500/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">💧</span>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900">{lang === 'bn' ? 'পরিবেশ সুরক্ষা ও ইটিপি (ETP)' : 'Environmental Protection & ETP'}</h4>
                      <p className="text-xs text-slate-700">
                        {lang === 'bn'
                          ? 'দৈনিক ২৪০০ ঘনমিটার বায়োকেমিক্যাল বর্জ্য পরিশোধনাগার (ইকোটেক্স পিটিই লিমিটেড, সিঙ্গাপুর)'
                          : '2,400 m³/day capacity Biochemical Effluent Treatment Plant (Ecotex Pte Ltd., Singapore)'}
                      </p>
                    </div>
                  </div>
                  <span className="px-3.5 py-1.5 rounded-lg bg-emerald-100 text-emerald-700 text-xs font-bold border border-emerald-300">16,000 Sq.Ft.</span>
                </div>
              </div>

            </div>
          </section>

          {/* Leadership Section */}
          <section id="leadership" className="py-20 relative bg-white section-3d">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center max-w-3xl mx-auto mb-16" data-reveal>
                <span className="px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                  {lang === 'bn' ? 'পরিচালনা পর্ষদ ও নেতৃত্ব' : 'Board of Directors & Visionaries'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  {lang === 'bn' ? '২৬ বছরেরও বেশি অভিজ্ঞতা ও দক্ষ দিকনির্দেশনা' : 'Guided by 26+ Years of Leadership Excellence'}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600">
                  {lang === 'bn'
                    ? 'কোম্পানির পরিচালকদের সুদূরপ্রসারী জ্ঞান, উদ্ভাবন ও নেতৃত্বের মাধ্যমে আবেদ টেক্সটাইল আজ অনন্য উচ্চতায়।'
                    : 'Our visionary board steers Abed Textile with strategic foresight, uncompromised quality, and global partnerships.'}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {leaders.map((leader, index) => (
                  <div key={index} className="glass-card rounded-2xl border border-slate-200 overflow-hidden hover:border-sky-500/50 flex flex-col justify-between group shadow-xl tilt-card">
                    <div>
                      <div className="relative h-64 w-full overflow-hidden bg-white">
                        <img src={leader.img} alt={leader.nameEn} className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" />
                        <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent" />
                        {index === 0 && (
                          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-amber-500/90 text-slate-950 text-[10px] font-extrabold uppercase shadow-md">
                            {lang === 'bn' ? 'প্রতিষ্ঠাতা' : 'Founder'}
                          </span>
                        )}
                      </div>

                      <div className="p-5">
                        <h3 className="text-lg font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                          {lang === 'bn' ? leader.nameBn : leader.nameEn}
                        </h3>
                        <div className="text-xs font-semibold text-amber-600 mt-0.5">
                          {lang === 'bn' ? leader.roleBn : leader.roleEn}
                        </div>
                        <p className="text-xs text-slate-600 mt-2.5 leading-relaxed line-clamp-3">
                          {lang === 'bn' ? leader.bioBn : leader.bioEn}
                        </p>
                      </div>
                    </div>

                    <div className="p-5 pt-0 border-t border-slate-200/80 mt-2 space-y-1.5 text-xs text-slate-700">
                      <a href={`tel:${leader.mobile}`} className="flex items-center gap-2 py-1 text-slate-700 hover:text-sky-600 transition-colors">
                        <span>📱</span>
                        <span className="font-medium">{leader.mobile}</span>
                      </a>
                      <a href={`mailto:${leader.email}`} className="flex items-center gap-2 py-1 text-slate-700 hover:text-amber-600 transition-colors truncate">
                        <span>✉️</span>
                        <span className="truncate">{leader.email}</span>
                      </a>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* Group Sister Concerns & Clients */}
          <section className="py-20 relative bg-slate-50 textile-grid border-t border-slate-100 section-3d">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center max-w-3xl mx-auto mb-12" data-reveal>
                <span className="px-3.5 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                  {lang === 'bn' ? 'নোদী বাংলা গ্রুপ' : 'Group Sister Concerns'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  {lang === 'bn' ? 'আমাদের অঙ্গপ্রতিষ্ঠানসমূহ' : 'Operating Concerns Under Nodi Bangla Group'}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600">
                  {lang === 'bn'
                    ? 'টেক্সটাইল, কেমিক্যাল, আবাসন ও নির্মাণ খাতের শক্তিশালী নেটওয়ার্ক।'
                    : 'A diversified industrial conglomerate powering textiles, chemical formulation, and modern construction.'}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
                {concerns.map((concern, idx) => (
                  <div key={idx} className="glass-card p-6 rounded-2xl border border-slate-200 hover:border-amber-500/40 flex flex-col justify-between group tilt-card">
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-[11px] font-bold px-2.5 py-0.5 rounded-full bg-amber-500/15 text-amber-700 border border-amber-500/30">
                          {lang === 'bn' ? concern.unitBn : concern.unitEn}
                        </span>
                        <span className="text-xs font-mono text-slate-500">0{idx + 1}</span>
                      </div>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                        {lang === 'bn' ? concern.nameBn : concern.nameEn}
                      </h3>
                      <p className="text-xs sm:text-sm text-slate-700 mt-2.5 leading-relaxed">
                        {lang === 'bn' ? concern.descBn : concern.descEn}
                      </p>
                    </div>
                    <div className="mt-4 pt-3 border-t border-slate-200/80 flex items-center justify-between text-xs text-slate-600">
                      <span className="text-emerald-600 font-semibold">✓ Active Enterprise</span>
                      <span className="text-slate-500 group-hover:text-amber-600">→</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Prestigious Clients */}
              <div className="pt-10 border-t border-slate-200/80">
                <div className="text-center max-w-3xl mx-auto mb-8" data-reveal>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {lang === 'bn' ? 'যাদের আস্থায় আমরা গর্বিত' : 'Trusted by Leading Fashion & Garment Exporters'}
                  </h3>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                  {[
                    { name: 'Bay Creation Ltd.', type: 'Apparel Export' },
                    { name: 'Knit World Ltd.', type: 'Knitwear Specialist' },
                    { name: 'JKD Knit Print', type: 'Fashion & Printing' },
                    { name: 'Optimum Fashion', type: 'Ready-Made Garments' },
                    { name: 'Pacific Export', type: 'Export House' },
                    { name: 'Reliance Denim Industries Ltd.', type: 'Denim & Woven' },
                    { name: 'Texline Associates Pvt Ltd.', type: 'Global Sourcing' }
                  ].map((cust, idx) => (
                    <div key={idx} className="glass-card p-4 rounded-xl border border-slate-200 text-center hover:border-sky-400/50">
                      <div className="font-bold text-sm text-slate-900">{cust.name}</div>
                      <div className="text-[11px] text-slate-600 mt-0.5">{cust.type}</div>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </section>

          {/* Visual Gallery Section */}
          <section id="gallery" className="py-20 relative bg-white section-3d">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center max-w-3xl mx-auto mb-12" data-reveal>
                <span className="px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                  {lang === 'bn' ? 'ফ্যাক্টরি ও কার্যক্রমের ছবি' : 'Visual Facility Tour & Gallery'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  {lang === 'bn' ? 'আমাদের কারখানা ও কর্মকাণ্ডের বাস্তব চিত্রশালা' : 'Inside Our Factory & Real Operations'}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600">
                  {lang === 'bn'
                    ? 'নরসিংদীর ঘোড়াদিয়া প্ল্যান্টে স্থাপিত আধুনিক মেশিনারি, কর্মপরিবেশ ও উৎপাদন লাইনের সরাসরি ছবি।'
                    : 'Direct photo impressions from our Ghoradia, Narsingdi factory floor and high-tech installations.'}
                </p>
              </div>

              {/* Gallery Filters */}
              <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
                {['All', 'Production', 'Printing', 'Dyeing', 'Finishing', 'Facility', 'Quality'].map((cat) => (
                  <button
                    key={cat}
                    onClick={() => setGalleryCategory(cat)}
                    className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all border cursor-pointer ${
                      galleryCategory === cat
                        ? 'bg-sky-500 text-white border-sky-400 shadow-md shadow-sky-500/25 scale-105'
                        : 'bg-white/80 text-slate-700 border-slate-200 hover:text-slate-900'
                    }`}
                  >
                    {cat}
                  </button>
                ))}
              </div>

              {/* Gallery Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {filteredGallery.map((img, idx) => (
                  <div
                    key={idx}
                    onClick={() => openLightbox(filteredGallery, idx)}
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-slate-200 bg-white group cursor-pointer shadow-lg hover:border-sky-400/60 transition-all tilt-card"
                  >
                    <img src={img.src} alt="Gallery" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-white/95 via-white/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity p-4 flex flex-col justify-between">
                      <span className="self-end text-xs text-slate-900 p-1 rounded bg-white/80">🔍</span>
                      <div>
                        <span className="text-[10px] font-bold uppercase text-amber-600 px-2 py-0.5 rounded bg-white/90 border border-slate-300">
                          {img.cat}
                        </span>
                        <h4 className="text-sm font-bold text-slate-900 mt-1">
                          {lang === 'bn' ? img.titleBn : img.titleEn}
                        </h4>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

            </div>
          </section>

          {/* Lead Time & RFQ Calculator */}
          <section id="rfq" className="py-20 relative bg-slate-50 textile-grid border-t border-slate-100 section-3d">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center max-w-3xl mx-auto mb-14" data-reveal>
                <span className="px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                  {lang === 'bn' ? 'উৎপাদন সময় ও কোটেশন রিকোয়েস্ট' : 'Production Lead Time & RFQ'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  {lang === 'bn' ? 'নির্ভুল সময়সীমা ও কোটেশন ক্যালকুলেটর' : 'Guaranteed Timelines & Instant Quotation Request'}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600">
                  {lang === 'bn'
                    ? 'নতুন অর্ডারের জন্য ৬০-৯০ দিন এবং পুনরাবৃত্ত অর্ডারের জন্য মাত্র ৩০-৪৫ দিনের নির্ভরযোগ্য ডেলিভারি সাইকেল।'
                    : 'Predictable 60-90 days lead time for fresh developments, and rapid 30-45 days for repeat orders.'}
                </p>
              </div>

              {/* Lead Time Cards */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
                <div className="glass-card p-6 rounded-2xl border border-slate-200 text-center">
                  <div className="text-xs font-bold uppercase text-slate-600 tracking-wider">
                    {lang === 'bn' ? 'সর্বনিম্ন উৎপাদন সময়' : 'Minimum Lead Time'}
                  </div>
                  <div className="text-3xl font-black text-sky-600 mt-2">
                    {lang === 'bn' ? '৬০ দিন' : '60 Days'}
                  </div>
                  <p className="text-xs text-slate-600 mt-2">
                    {lang === 'bn' ? 'স্ট্যান্ডার্ড গ্রেজ ও রানিং শেডের জন্য' : 'Standard greige & running shades'}
                  </p>
                </div>

                <div className="glass-card p-6 rounded-2xl border border-slate-200 text-center">
                  <div className="text-xs font-bold uppercase text-slate-600 tracking-wider">
                    {lang === 'bn' ? 'সর্বোচ্চ উৎপাদন সময়' : 'Maximum Lead Time'}
                  </div>
                  <div className="text-3xl font-black text-amber-600 mt-2">
                    {lang === 'bn' ? '৯০ দিন' : '90 Days'}
                  </div>
                  <p className="text-xs text-slate-600 mt-2">
                    {lang === 'bn' ? 'জটিল মাল্টি-কালার প্রিন্ট ও নতুন স্যাম্পলিং' : 'Complex rotary/flatbed developments'}
                  </p>
                </div>

                <div className="glass-card p-6 rounded-2xl border border-slate-200 text-center">
                  <div className="text-xs font-bold uppercase text-slate-600 tracking-wider">
                    {lang === 'bn' ? 'পুনরাবৃত্ত অর্ডারের সময়' : 'Repeat Orders'}
                  </div>
                  <div className="text-3xl font-black text-emerald-600 mt-2">
                    {lang === 'bn' ? '৩০ – ৪৫ দিন' : '30 – 45 Days'}
                  </div>
                  <p className="text-xs text-slate-600 mt-2">
                    {lang === 'bn' ? 'পূর্বে অনুমোদিত স্ট্রাইক-অফ ও ডাইং ফর্মুলা' : 'Fast-tracked with pre-approved screens'}
                  </p>
                </div>
              </div>

              {/* RFQ Form */}
              <div className="glass-panel p-6 sm:p-10 rounded-2xl border border-sky-500/30 shadow-2xl">
                {rfqSubmitted ? (
                  <div className="text-center py-10 space-y-4">
                    <span className="text-5xl">🎉</span>
                    <h3 className="text-2xl font-bold text-slate-900">
                      {lang === 'bn' ? 'আপনার কোটেশন রিকোয়েস্ট সফলভাবে গৃহীত হয়েছে!' : 'Quotation Request Submitted Successfully!'}
                    </h3>
                    <p className="text-slate-700 text-sm max-w-lg mx-auto">
                      {lang === 'bn'
                        ? 'আমাদের মার্চেন্ডাইজিং টিম দ্রুত আপনার সাথে যোগাযোগ করে বিশদ মূল্য প্রস্তাবনা প্রদান করবে।'
                        : 'Our merchandising team will review your fabric requirements and contact you promptly.'}
                    </p>
                    <button
                      onClick={() => setRfqSubmitted(false)}
                      className="px-6 py-2.5 rounded-xl bg-sky-500 text-white font-bold text-xs uppercase"
                    >
                      {lang === 'bn' ? 'আরেকটি রিকোয়েস্ট পাঠান' : 'Submit Another Request'}
                    </button>
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setRfqSubmitted(true); }} className="space-y-6">
                    <div className="border-b border-slate-200 pb-4">
                      <h3 className="text-xl font-bold text-slate-900 flex items-center gap-2">
                        <span>📝</span>
                        <span>{lang === 'bn' ? 'অনলাইন ফ্যাব্রিক কোটেশন ফর্ম' : 'Fabric Quotation & Sample Inquiry Form'}</span>
                      </h3>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">{lang === 'bn' ? 'আপনার নাম *' : 'Contact Name *'}</label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={rfq.name}
                          onChange={(e) => setRfq({ ...rfq, name: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">{lang === 'bn' ? 'কোম্পানি / বায়িং হাউজ *' : 'Company / Brand *'}</label>
                        <input
                          type="text"
                          required
                          placeholder="Global Sourcing Ltd."
                          value={rfq.company}
                          onChange={(e) => setRfq({ ...rfq, company: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">{lang === 'bn' ? 'ইমেইল অ্যাড্রেস *' : 'Email Address *'}</label>
                        <input
                          type="email"
                          required
                          placeholder="sourcing@company.com"
                          value={rfq.email}
                          onChange={(e) => setRfq({ ...rfq, email: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">{lang === 'bn' ? 'মোবাইল / WhatsApp *' : 'Mobile / WhatsApp *'}</label>
                        <input
                          type="tel"
                          required
                          placeholder="+880 17XX-XXXXXX"
                          value={rfq.phone}
                          onChange={(e) => setRfq({ ...rfq, phone: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-400"
                        />
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">{lang === 'bn' ? 'ফ্যাব্রিকের ধরন *' : 'Fabric Type *'}</label>
                        <select
                          value={rfq.fabric}
                          onChange={(e) => setRfq({ ...rfq, fabric: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-sm text-slate-900 focus:outline-none focus:border-sky-400"
                        >
                          <option value="Shari">Shari / শাড়ি (All Over Print & Digital)</option>
                          <option value="ThreePiece">Three-Piece (3 Pcs) / থ্রি-পিস ফেব্রিক্স</option>
                          <option value="Poplin">Poplin / পপলিন ফেব্রিক</option>
                          <option value="Voile">Voile (Boil) / ভয়েল ফেব্রিক</option>
                          <option value="Lillian">Lillian / লিলিয়ান ফেব্রিক</option>
                          <option value="KnitFancy">Knit Fabrics & Ladies Fancy Print</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-slate-700 mb-1.5">{lang === 'bn' ? 'অর্ডারের ধরন' : 'Order Type'}</label>
                        <div className="grid grid-cols-2 gap-3">
                          <button
                            type="button"
                            onClick={() => setRfq({ ...rfq, type: 'fresh' })}
                            className={`py-2 rounded-xl text-xs font-bold border ${rfq.type === 'fresh' ? 'bg-sky-500 text-white border-sky-400' : 'bg-white text-slate-600 border-slate-200'}`}
                          >
                            {lang === 'bn' ? 'নতুন (Fresh 60-90d)' : 'Fresh (60-90d)'}
                          </button>
                          <button
                            type="button"
                            onClick={() => setRfq({ ...rfq, type: 'repeat' })}
                            className={`py-2 rounded-xl text-xs font-bold border ${rfq.type === 'repeat' ? 'bg-emerald-600 text-white border-emerald-400' : 'bg-white text-slate-600 border-slate-200'}`}
                          >
                            {lang === 'bn' ? 'পুনরাবৃত্ত (Repeat 30-45d)' : 'Repeat (30-45d)'}
                          </button>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-white border border-slate-200">
                      <div className="flex items-center justify-between mb-2">
                        <label className="text-xs font-semibold text-slate-700">{lang === 'bn' ? 'অর্ডারের পরিমাণ (গজ):' : 'Volume (Yards):'}</label>
                        <span className="text-base font-extrabold text-amber-600">{rfq.quantity.toLocaleString()} {lang === 'bn' ? 'গজ' : 'Yards'}</span>
                      </div>
                      <input
                        type="range"
                        min="5000"
                        max="250000"
                        step="1000"
                        value={rfq.quantity}
                        onChange={(e) => setRfq({ ...rfq, quantity: Number(e.target.value) })}
                        className="w-full accent-sky-500 h-2 bg-slate-200 rounded-lg cursor-pointer"
                      />
                    </div>

                    <button
                      type="submit"
                      className="px-8 py-3.5 rounded-xl bg-gradient-to-r from-sky-500 to-blue-600 hover:from-sky-400 hover:to-blue-500 text-white font-bold text-sm shadow-xl shadow-sky-500/25 flex items-center gap-2 cursor-pointer"
                    >
                      <span>{lang === 'bn' ? 'কোটেশন রিকোয়েস্ট পাঠান' : 'Submit RFQ Request'}</span>
                      <span>→</span>
                    </button>
                  </form>
                )}
              </div>

            </div>
          </section>

          {/* Contact Section */}
          <section id="contact" className="py-20 relative bg-white section-3d">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

              <div className="text-center max-w-3xl mx-auto mb-14" data-reveal>
                <span className="px-3.5 py-1 rounded-full bg-sky-500/10 border border-sky-500/20 text-sky-600 text-xs font-bold uppercase tracking-wider mb-3 inline-block">
                  {lang === 'bn' ? 'যোগাযোগ ও অবস্থান' : 'Contact & Locations'}
                </span>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
                  {lang === 'bn' ? 'আমাদের সাথে সরাসরি যোগাযোগ করুন' : 'Get in Touch with Corporate & Plant Offices'}
                </h2>
                <p className="mt-3 text-sm sm:text-base text-slate-600">
                  {lang === 'bn'
                    ? 'উত্তরা কর্পোরেট অফিস বা নরসিংদী ফ্যাক্টরিতে সরাসরি ভিজিট করুন অথবা বার্তা পাঠান।'
                    : 'Visit our corporate office in Uttara, Dhaka or industrial processing facility in Narsingdi.'}
                </p>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">

                {/* Factory */}
                <div className="glass-card p-6 sm:p-8 rounded-2xl border border-sky-500/30 flex flex-col justify-between">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-amber-500/20 text-amber-700 text-xs font-bold border border-amber-500/30 uppercase">
                      {lang === 'bn' ? 'প্রধান কারখানা ও প্ল্যান্ট' : 'Main Factory & Plant'}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-3 mb-1">Abed Textile Processing Mills Ltd.</h3>
                    <p className="text-xs text-slate-600 mb-4">{lang === 'bn' ? 'আবেদ টেক্সটাইল প্রোসেসিং মিলস লিমিটেড' : 'Ghoradia, Narsingdi Plant'}</p>

                    <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                      <div>📍 {lang === 'bn' ? 'ঘোড়াদিয়া, নরসিংদী সদর, নরসিংদী-১৬০২, বাংলাদেশ।' : 'Ghoradia, Narsingdi Sador, Narsingdi-1602, Bangladesh.'}</div>
                      <div>📞 Phone: 88-02-9462750 | Fax: 88-02-9464312</div>
                      <div>✉️ abedmamun@hotmail.com; abedmonir@hotmail.com</div>
                      <div>🌐 www.abedtex.com</div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                    <a href="https://maps.google.com/?q=Ghoradia,Narsingdi,Bangladesh" target="_blank" className="text-sky-600 font-bold hover:underline">
                      {lang === 'bn' ? 'গুগল ম্যাপে দেখুন' : 'Open in Google Maps'} ↗
                    </a>
                    <span className="text-emerald-600">● 24/7 Operations</span>
                  </div>
                </div>

                {/* Head Office */}
                <div className="glass-card p-6 sm:p-8 rounded-2xl border border-slate-200 flex flex-col justify-between">
                  <div>
                    <span className="px-3 py-1 rounded-full bg-sky-500/20 text-sky-700 text-xs font-bold border border-sky-500/30 uppercase">
                      {lang === 'bn' ? 'কর্পোরেট প্রধান কার্যালয়' : 'Corporate Head Office'}
                    </span>
                    <h3 className="text-xl font-bold text-slate-900 mt-3 mb-1">Nodi Bangla Group Headquarters</h3>
                    <p className="text-xs text-slate-600 mb-4">Uttara, Dhaka, Bangladesh</p>

                    <div className="space-y-2.5 text-xs sm:text-sm text-slate-700">
                      <div>📍 {lang === 'bn' ? 'রয়েল মীর লজ, প্লট # এফ-৫/এ, বাড়ি # ২, রোড # ১১, সেক্টর-৬, উত্তরা, ঢাকা – ১২৩০।' : 'Royal Mir Lodge, Plot # F-5/A, House # 2, Road # 11, Sector-6, Uttara, Dhaka – 1230.'}</div>
                      <div>📞 Phone: 88028932117 | Fax: 88028932119</div>
                      <div>✉️ info@nodibanglagroup.com</div>
                      <div>🌐 www.abedtex.com</div>
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-200 flex items-center justify-between text-xs">
                    <a href="https://maps.google.com/?q=Sector-6,Uttara,Dhaka,Bangladesh" target="_blank" className="text-sky-600 font-bold hover:underline">
                      {lang === 'bn' ? 'গুগল ম্যাপে দেখুন' : 'Open in Google Maps'} ↗
                    </a>
                    <span className="text-slate-600">Sat – Thu: 9AM – 6PM</span>
                  </div>
                </div>

              </div>

              {/* Instant Message Box */}
              <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-slate-200">
                <h3 className="text-lg font-bold text-slate-900 mb-2">{lang === 'bn' ? 'বার্তা পাঠান' : 'Send an Instant Message'}</h3>
                {contactSubmitted ? (
                  <div className="py-6 text-center text-emerald-600 font-bold text-sm">
                    {lang === 'bn' ? 'আপনার বার্তা সফলভাবে পাঠানো হয়েছে! ধন্যবাদ।' : 'Your message has been sent successfully! Thank you.'}
                  </div>
                ) : (
                  <form onSubmit={(e) => { e.preventDefault(); setContactSubmitted(true); }} className="space-y-4">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input type="text" required placeholder={lang === 'bn' ? 'আপনার নাম' : 'Your Name'} className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-400" />
                      <input type="email" required placeholder={lang === 'bn' ? 'আপনার ইমেইল' : 'Your Email'} className="px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-400" />
                    </div>
                    <textarea rows={3} required placeholder={lang === 'bn' ? 'বার্তা লিখুন...' : 'Write your message...'} className="w-full px-4 py-2.5 rounded-xl bg-white border border-slate-200 text-xs sm:text-sm text-slate-900 focus:outline-none focus:border-sky-400" />
                    <button type="submit" className="px-6 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-400 text-white font-bold text-xs uppercase cursor-pointer">
                      {lang === 'bn' ? 'বার্তা পাঠান' : 'Send Message'}
                    </button>
                  </form>
                )}
              </div>

            </div>
          </section>

          {/* Footer */}
          <footer className="relative bg-white border-t border-slate-200 text-slate-600 text-xs">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">

                <div className="lg:col-span-4 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-sky-500 to-amber-400 p-0.5 shadow-md">
                      <div className="w-full h-full bg-white rounded-[10px] flex items-center justify-center p-1">
                        <img src={assets.logo} alt="Logo" className="w-full h-full object-contain" />
                      </div>
                    </div>
                    <div>
                      <h3 className="font-bold text-base text-slate-900">
                        {lang === 'bn' ? 'আবেদ টেক্সটাইল প্রোসেসিং মিলস লিঃ' : 'Abed Textile Processing Mills Ltd.'}
                      </h3>
                      <p className="text-[11px] text-amber-600 font-medium">Nodi Bangla Group</p>
                    </div>
                  </div>
                  <p className="text-slate-600 text-xs leading-relaxed">
                    {lang === 'bn'
                      ? '১৯৯৩ সাল থেকে Oeko-Tex সার্টিফাইড ১০০% রপ্তানিমুখী আধুনিক টেক্সটাইল প্রসেসিং মিলস।'
                      : 'An Oeko-Tex Certified 100% Export Oriented Manufacturer of Quality Processing Mills since 1993.'}
                  </p>
                </div>

                <div className="lg:col-span-2 space-y-2">
                  <h4 className="font-bold text-sm text-slate-900 uppercase">{lang === 'bn' ? 'ন্যাভিগেশন' : 'Navigation'}</h4>
                  <ul className="space-y-1.5">
                    <li><a href="#about" className="hover:text-sky-600">{lang === 'bn' ? 'পরিচিতি' : 'About'}</a></li>
                    <li><a href="#units" className="hover:text-sky-600">{lang === 'bn' ? 'ইউনিটসমূহ' : 'Units'}</a></li>
                    <li><a href="#machinery" className="hover:text-sky-600">{lang === 'bn' ? 'মেশিনারি' : 'Machinery'}</a></li>
                    <li><a href="#products" className="hover:text-sky-600">{lang === 'bn' ? 'পণ্যসমূহ' : 'Products'}</a></li>
                    <li><a href="#compliance" className="hover:text-sky-600">{lang === 'bn' ? 'কমপ্লায়েন্স' : 'Compliance'}</a></li>
                  </ul>
                </div>

                <div className="lg:col-span-3 space-y-2">
                  <h4 className="font-bold text-sm text-slate-900 uppercase">{lang === 'bn' ? 'প্রধান পণ্যসমূহ' : 'Fabrics'}</h4>
                  <ul className="space-y-1.5">
                    <li>Exclusive Shari (Sharee)</li>
                    <li>Three-Piece (3 Pcs) Suits</li>
                    <li>Poplin & Voile (Boil)</li>
                    <li>Lillian & Knit Fancy Prints</li>
                    <li>Flatbed Screen & Digital Prints</li>
                  </ul>
                </div>

                <div className="lg:col-span-3 space-y-2">
                  <h4 className="font-bold text-sm text-slate-900 uppercase">{lang === 'bn' ? 'যোগাযোগ' : 'Contact'}</h4>
                  <div className="text-slate-700">Ghoradia, Narsingdi Sador, Bangladesh</div>
                  <div>Ph: 88-02-9462750</div>
                  <div>Email: info@nodibanglagroup.com</div>
                </div>

              </div>

              <div className="mt-12 pt-8 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div>© {new Date().getFullYear()} Abed Textile Processing Mills Ltd. All rights reserved.</div>
                <button
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="px-3 py-1.5 rounded-lg bg-white border border-slate-200 text-slate-700 hover:text-slate-900"
                >
                  ↑ {lang === 'bn' ? 'উপরে যান' : 'Back to Top'}
                </button>
              </div>
            </div>
          </footer>

          {/* Fullscreen Lightbox Modal */}
          {lightbox.open && (
            <div
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4"
              onClick={() => setLightbox({ ...lightbox, open: false })}
            >
              <button
                onClick={() => setLightbox({ ...lightbox, open: false })}
                className="absolute top-5 right-5 z-10 p-3 rounded-full bg-white/10 text-white text-lg"
              >
                ✕
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox({
                    ...lightbox,
                    index: lightbox.index > 0 ? lightbox.index - 1 : lightbox.items.length - 1
                  });
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 text-white text-xl"
              >
                ‹
              </button>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setLightbox({
                    ...lightbox,
                    index: lightbox.index < lightbox.items.length - 1 ? lightbox.index + 1 : 0
                  });
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 rounded-full bg-white/10 text-white text-xl"
              >
                ›
              </button>

              <div className="max-w-5xl max-h-[85vh] flex flex-col items-center" onClick={(e) => e.stopPropagation()}>
                <img
                  src={lightbox.items[lightbox.index].src}
                  alt="Enlarged"
                  className="max-h-[75vh] w-auto max-w-full rounded-xl border border-white/20 shadow-2xl object-contain"
                />
                <div className="mt-3 text-center text-white">
                  <h4 className="font-bold">{lightbox.items[lightbox.index].title || ''}</h4>
                  <span className="text-xs text-slate-400">{lightbox.index + 1} / {lightbox.items.length}</span>
                </div>
              </div>
            </div>
          )}

        </div>
      );
    }

export default App;
