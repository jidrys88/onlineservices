/* ══════════════════════════════════════════════
   Online Services – main.js
   ══════════════════════════════════════════════ */

'use strict';

// ── TRANSLATIONS ─────────────────────────────────────────────────────────────
const translations = {
  de: {
    logo: "Online Services",
    nav_solutions: "Lösungen",
    nav_prices: "Preise",
    nav_about: "Über\u00A0uns",
    nav_contact: "Kontakt",
    nav_cta: "Jetzt Anfragen",
    hero_badge: "Ihr digitaler Partner",
    hero_sub: "Ihr digitaler Partner im Alltag",
    hero_btn1: "Kostenlose Beratung \u00A0›",
    hero_btn2: "Unsere Leistungen",
    stat1: "ab Website komplett",
    stat2: "pro Formular-Ausfüllung",
    stat3: "Zahlung nach Erfolg",
    trust1: "Sichere Remote-Verbindung",
    trust2: "Zahlung erst bei Erfolg",
    trust3: "Schnelle Bearbeitung",
    trust4: "Zuverlässiger Service",
    trust5: "Gratis Erstberatung",
    svc_label: "Unsere Leistungen",
    svc_title: "Kernkompetenzen im Überblick",
    svc_sub: "Vergessen Sie komplizierte Formulare, technische Probleme oder die Suche nach einer bezahlbaren Website. Wir nehmen Ihnen die Arbeit ab.",
    s1_title: "Webdesign & Webentwicklung",
    s1_desc: "Professionelle Website für Ihr Unternehmen – schlüsselfertig mit Domain, Hosting und Optimierung aus einer Hand.",
    s1_price_note: "inkl. Domain & Hosting",
    s1_l1: "Full-Service: Design, Entwicklung & Optimierung",
    s1_l2: "Domain-Registrierung inklusive",
    s1_l3: "Schneller, sicherer Serverspeicher",
    s1_l4: "Mobiloptimiert & SEO-ready",
    s2_title: "Formular- & Antragsservice",
    s2_desc: "Schluss mit bürokratischem Stress und Sprachbarrieren. Wir befüllen Ihre Dokumente fehlerfrei und rechtzeitig.",
    s2_price_note: "pro Antrag",
    s2_l1: "Mindestsicherung & Sozialhilfe",
    s2_l2: "ORF-Beitrag (GIS)",
    s2_l3: "Familienbeihilfe",
    s2_l4: "Viele weitere offizielle Formulare",
    s3_title: "Remote-IT-Support & PC-Service",
    s3_desc: "PC-Probleme gelöst aus der Ferne via AnyDesk – ohne das Haus verlassen zu müssen. Sicher & blitzschnell.",
    s3_price_note: "/ Stunde",
    s3_l1: "Kostenlose Erstberatung & Fehlerdiagnose",
    s3_l2: "Windows Installation & Aktivierung – 40€",
    s3_l3: "Microsoft Office Paket – 20€",
    s3_l4: "Keine Lösung = Keine Kosten!",
    price_label: "Preise & Services",
    price_title: "Transparente Fixpreise",
    price_sub: "Keine versteckten Kosten, keine Überraschungen. Höchste Qualität zu den wettbewerbsfähigsten Preisen .",
    pt_col1: "Dienstleistung",
    pt_col2: "Preis",
    pt_col3: "Details",
    pt_r1c1: "🌐 Webdesign & Homepage-Erstellung",
    pt_r1c3: "Komplettpreis inkl. Domain & Hosting",
    pt_r2c1: "📑 Formular- & Antragsservice",
    pt_r2c3: "Pauschal pro ausgefülltem Antrag",
    pt_r3c1: "🪟 Windows Installation & Aktivierung",
    pt_r3c3: "Original-Lizenz mit lebenslanger Aktivierung",
    pt_r4c1: "📦 Microsoft Office Paket",
    pt_r4c3: "Vollständige Aktivierung der Office-Suite",
    pt_r5c1: "🛠️ IT-Support & Reparatur (Remote)",
    pt_r5c3: "Keine Lösung = Keine Kosten!",
    pt_r6c1: "🎁 Technische Erstberatung",
    pt_r6c2: "Gratis 🎁",
    pt_r6c3: "Unverbindliche Fehlerdiagnose",
    price_note: "✅ Beim IT-Support zahlen Sie erst, wenn Ihr Problem vollständig gelöst ist.",
    why_label: "Warum Wir?",
    why_sub: "Ihr vertrauensvoller Partner für digitale Dienstleistungen – schnell, zuverlässig.",
    w1_title: "Schnelligkeit & Qualität",
    w1_desc: "Wir wissen, dass Ihre Zeit wertvoll ist. Schnelle Bearbeitung ohne Qualitätsverlust ist unser Versprechen.",
    w2_title: "Zahlung nach Erfolg",
    w2_desc: "Beim IT-Support gehen Sie absolut kein Risiko ein. Sie zahlen erst, wenn Ihr Problem gelöst ist.",
    w3_title: "Top-Preise",
    w3_desc: "Höchste Qualität zu den wettbewerbsfähigsten Preisen . Fair und transparent.",
    w4_title: "Digitale Kompetenz",
    w4_desc: "Von der Website bis zum Behördenformular – wir sind Ihr virtuelles Büro für die Hosentasche.",
    cta_title: "Bereit loszulegen?",
    cta_sub: "Kontaktieren Sie uns jetzt – die Erstberatung ist völlig kostenlos!",
    cta_btn: "📧 Jetzt Anfragen – Kostenlos",
    footer_tagline: "Ihr digitaler Partner im Alltag. Behördenwege, Technik-Support & Webdesign – schnell, zuverlässig.",
    footer_services: "Leistungen",
    footer_web: "Webdesign",
    footer_form: "Formular-Service",
    footer_it: "IT-Support",
    footer_prices: "Preise",
    footer_contact: "Kontakt",
    footer_imprint: "Impressum",
    footer_privacy: "Datenschutz",
    langBtn: "DE"
  },

  en: {
    logo: "Online Services",
    nav_solutions: "Solutions",
    nav_prices: "Prices",
    nav_about: "About\u00A0Us",
    nav_contact: "Contact",
    nav_cta: "Get a Quote",
    hero_badge: "Your Digital Partner",
    hero_sub: "Your digital partner in everyday life",
    hero_btn1: "Free Consultation \u00A0›",
    hero_btn2: "Our Services",
    stat1: "from website complete",
    stat2: "per form submission",
    stat3: "Payment after success",
    trust1: "Secure Remote Connection",
    trust2: "Pay only on success",
    trust3: "Fast Processing",
    trust4: "Reliable Service",
    trust5: "Free Initial Consultation",
    svc_label: "Our Services",
    svc_title: "Core Competencies at a Glance",
    svc_sub: "Forget complicated forms, technical problems or the search for an affordable website. We take care of it for you.",
    s1_title: "Web Design & Development",
    s1_desc: "Professional website for your business – turnkey with domain, hosting and optimization from a single source.",
    s1_price_note: "incl. Domain & Hosting",
    s1_l1: "Full-Service: Design, Development & Optimization",
    s1_l2: "Domain registration included",
    s1_l3: "Fast, secure server storage",
    s1_l4: "Mobile-optimized & SEO-ready",
    s2_title: "Form & Application Service",
    s2_desc: "No more bureaucratic stress and language barriers. We fill in your documents correctly and on time.",
    s2_price_note: "per application",
    s2_l1: "Social assistance (Mindestsicherung)",
    s2_l2: "ORF fee (GIS)",
    s2_l3: "Child benefit (Familienbeihilfe)",
    s2_l4: "Many other official forms",
    s3_title: "Remote IT Support & PC Service",
    s3_desc: "PC problems solved remotely via AnyDesk – without leaving your home. Safe & fast.",
    s3_price_note: "/ hour",
    s3_l1: "Free initial consultation & diagnosis",
    s3_l2: "Windows installation & activation – €40",
    s3_l3: "Microsoft Office package – €20",
    s3_l4: "No solution = No charge!",
    price_label: "Prices & Services",
    price_title: "Transparent Fixed Prices",
    price_sub: "No hidden costs, no surprises. Highest quality at the most competitive prices .",
    pt_col1: "Service",
    pt_col2: "Price",
    pt_col3: "Details",
    pt_r1c1: "🌐 Web Design & Homepage Creation",
    pt_r1c3: "Full price incl. domain & hosting",
    pt_r2c1: "📑 Form & Application Service",
    pt_r2c3: "Flat rate per completed application",
    pt_r3c1: "🪟 Windows Installation & Activation",
    pt_r3c3: "Original license with lifetime activation",
    pt_r4c1: "📦 Microsoft Office Package",
    pt_r4c3: "Full activation of the Office suite",
    pt_r5c1: "🛠️ IT Support & Repair (Remote)",
    pt_r5c3: "No solution = No charge!",
    pt_r6c1: "🎁 Technical Initial Consultation",
    pt_r6c2: "Free 🎁",
    pt_r6c3: "Non-binding fault diagnosis",
    price_note: "✅ For IT support you only pay once your problem is fully resolved.",
    why_label: "Why Us?",
    why_sub: "Your trusted partner for digital services – fast, reliable.",
    w1_title: "Speed & Quality",
    w1_desc: "We know your time is valuable. Fast processing without any loss of quality is our promise.",
    w2_title: "Pay After Success",
    w2_desc: "You take absolutely no risk with our IT support. You only pay when your problem is solved.",
    w3_title: "Top Prices",
    w3_desc: "Highest quality at the most competitive prices . Fair and transparent.",
    w4_title: "Digital Expertise",
    w4_desc: "From website to official forms – we are your virtual office in your pocket.",
    cta_title: "Ready to get started?",
    cta_sub: "Contact us now – the initial consultation is completely free!",
    cta_btn: "📧 Request Now – Free",
    footer_tagline: "Your digital partner in everyday life. Official paperwork, tech support & web design – fast, reliable.",
    footer_services: "Services",
    footer_web: "Web Design",
    footer_form: "Form Service",
    footer_it: "IT Support",
    footer_prices: "Prices",
    footer_contact: "Contact",
    footer_imprint: "Legal Notice",
    footer_privacy: "Privacy Policy",
    langBtn: "EN"
  },

  ar: {
    logo: "Online Services",
    nav_solutions: "الخدمات",
    nav_prices: "الأسعار",
    nav_about: "من\u00A0نحن",
    nav_contact: "اتصل بنا",
    nav_cta: "اطلب الآن",
    hero_badge: "شريكك الرقمي",
    hero_sub: "شريكك الرقمي في الحياة اليومية",
    hero_btn1: "استشارة مجانية \u00A0›",
    hero_btn2: "خدماتنا",
    stat1: "ابتداءً من موقع كامل",
    stat2: "لكل طلب نموذج",
    stat3: "الدفع بعد النجاح",
    trust1: "اتصال آمن عن بُعد",
    trust2: "الدفع عند النجاح فقط",
    trust3: "معالجة سريعة",
    trust4: "خدمة موثوقة",
    trust5: "استشارة أولية مجانية",
    svc_label: "خدماتنا",
    svc_title: "كفاءاتنا الأساسية",
    svc_sub: "انسَ النماذج المعقدة والمشاكل التقنية والبحث عن موقع إلكتروني بأسعار معقولة. نحن نتولى الأمر عنك.",
    s1_title: "تصميم وتطوير المواقع",
    s1_desc: "موقع إلكتروني احترافي لشركتك – جاهز للتسليم مع النطاق والاستضافة والتحسين من مصدر واحد.",
    s1_price_note: "شامل النطاق والاستضافة",
    s1_l1: "خدمة كاملة: تصميم، تطوير وتحسين",
    s1_l2: "تسجيل النطاق مشمول",
    s1_l3: "تخزين خادم سريع وآمن",
    s1_l4: "محسّن للجوال وصديق لمحركات البحث",
    s2_title: "خدمة النماذج والطلبات",
    s2_desc: "توقف عن الإجهاد البيروقراطي وحواجز اللغة. نملأ وثائقك بشكل صحيح وفي الوقت المناسب.",
    s2_price_note: "لكل طلب",
    s2_l1: "الحد الأدنى للمعيشة والمساعدة الاجتماعية",
    s2_l2: "رسوم ORF (GIS)",
    s2_l3: "مساعدة الأسرة (Familienbeihilfe)",
    s2_l4: "العديد من النماذج الرسمية الأخرى",
    s3_title: "دعم تقني عن بُعد وخدمة الحاسوب",
    s3_desc: "حل مشاكل الحاسوب عن بُعد عبر AnyDesk – دون مغادرة المنزل. آمن وسريع.",
    s3_price_note: "/ ساعة",
    s3_l1: "استشارة أولية وتشخيص مجاني",
    s3_l2: "تثبيت وتفعيل ويندوز – 40€",
    s3_l3: "حزمة Microsoft Office – 20€",
    s3_l4: "لا حل = لا تكلفة!",
    price_label: "الأسعار والخدمات",
    price_title: "أسعار ثابتة وشفافة",
    price_sub: "لا تكاليف خفية، لا مفاجآت. أعلى جودة بأكثر الأسعار تنافسية .",
    pt_col1: "الخدمة",
    pt_col2: "السعر",
    pt_col3: "التفاصيل",
    pt_r1c1: "🌐 تصميم المواقع وإنشاء الصفحة الرئيسية",
    pt_r1c3: "سعر شامل مع النطاق والاستضافة",
    pt_r2c1: "📑 خدمة النماذج والطلبات",
    pt_r2c3: "سعر ثابت لكل طلب مكتمل",
    pt_r3c1: "🪟 تثبيت وتفعيل ويندوز",
    pt_r3c3: "ترخيص أصلي مدى الحياة",
    pt_r4c1: "📦 حزمة Microsoft Office",
    pt_r4c3: "تفعيل كامل لمجموعة Office",
    pt_r5c1: "🛠️ دعم تقني وإصلاح (عن بُعد)",
    pt_r5c3: "لا حل = لا تكلفة!",
    pt_r6c1: "🎁 استشارة تقنية أولية",
    pt_r6c2: "مجاناً 🎁",
    pt_r6c3: "تشخيص غير ملزم",
    price_note: "✅ في خدمة الدعم التقني، تدفع فقط عند حل مشكلتك بالكامل.",
    why_label: "لماذا نحن؟",
    why_sub: "شريكك الموثوق للخدمات الرقمية – سريع وموثوق.",
    w1_title: "السرعة والجودة",
    w1_desc: "نعلم أن وقتك ثمين. المعالجة السريعة دون فقدان الجودة هو وعدنا لك.",
    w2_title: "الدفع بعد النجاح",
    w2_desc: "لا تتحمل أي مخاطرة في خدمة الدعم التقني. تدفع فقط عند حل مشكلتك.",
    w3_title: "أسعار مميزة",
    w3_desc: "أعلى جودة بأكثر الأسعار تنافسية . عادل وشفاف.",
    w4_title: "كفاءة رقمية",
    w4_desc: "من الموقع الإلكتروني إلى النماذج الرسمية – نحن مكتبك الافتراضي في جيبك.",
    cta_title: "هل أنت مستعد للبدء؟",
    cta_sub: "اتصل بنا الآن – الاستشارة الأولية مجانية تماماً!",
    cta_btn: "📧 اطلب الآن – مجاناً",
    footer_tagline: "شريكك الرقمي في الحياة اليومية. إجراءات رسمية، دعم تقني وتصميم مواقع – سريع وموثوق.",
    footer_services: "الخدمات",
    footer_web: "تصميم مواقع",
    footer_form: "خدمة النماذج",
    footer_it: "دعم تقني",
    footer_prices: "الأسعار",
    footer_contact: "اتصل بنا",
    footer_imprint: "إشعار قانوني",
    footer_privacy: "سياسة الخصوصية",
    langBtn: "AR"
  }
};

// ── PAGE TITLES ───────────────────────────────────────────────────────────────
const pageTitles = {
  de: 'Online Services – Ihr digitaler Partner ',
  en: 'Online Services – Your Digital Partner ',
  ar: 'Online Services – شريكك الرقمي '
};

// ── CURRENT LANGUAGE ──────────────────────────────────────────────────────────
let currentLang = 'de';

// ── SET LANGUAGE ──────────────────────────────────────────────────────────────
function setLang(lang) {
  currentLang = lang;
  const t = translations[lang];
  const html = document.documentElement;

  // Set lang + dir attributes
  html.setAttribute('lang', lang);
  html.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr');

  // Update all elements with data-key attribute
  document.querySelectorAll('[data-key]').forEach(el => {
    const key = el.getAttribute('data-key');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  // Update language button label
  document.getElementById('langBtnLabel').textContent = t.langBtn;

  // Update active state in dropdown
  document.querySelectorAll('.lang-option').forEach(btn => {
    btn.classList.toggle('active', btn.textContent.includes(
      lang === 'de' ? 'Deutsch' : lang === 'en' ? 'English' : 'العربية'
    ));
  });

  // Update page title
  document.title = pageTitles[lang];

  closeLangMenu();
}

// ── LANGUAGE MENU ─────────────────────────────────────────────────────────────
function toggleLangMenu() {
  document.getElementById('langDropdown').classList.toggle('open');
}

function closeLangMenu() {
  document.getElementById('langDropdown').classList.remove('open');
}

// Close lang menu when clicking outside
document.addEventListener('click', e => {
  if (!e.target.closest('.lang-switcher')) closeLangMenu();
});

// ── SCROLL REVEAL ─────────────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), index * 80);
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── SMOOTH SCROLL ─────────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', e => {
    const target = document.querySelector(anchor.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});
