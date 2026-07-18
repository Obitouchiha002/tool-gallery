/* =========================================================================
   PROJECTS DATA  —  Vansh Kashyap · Tool Gallery
   -------------------------------------------------------------------------
   Naya tool add karna? Bas yahan neeche ek { ... } block copy-paste karo.

   Fields:
     name        : Tool ka naam (required)
     category    : "AI" | "Web App" | "Utility" | "Automation"  (filter ke liye)
     description : 1 line — kya karta hai
     tech        : ["React", "Node", ...]  — chip ban jayenge
     thumbnail   : "images/your-image.jpg"  (1600x1000 ideal). Khaali "" = auto placeholder
     link        : "https://..."  — LIVE link. Khaali = "Coming soon".
     year        : "2025"
     featured    : true  → bada dikhega (max 2-3 rakho)
   ========================================================================= */

window.PROJECTS = [
  /* ---------- LIVE ---------- */
  {
    name: "RealtyResolve",
    category: "Web App",
    description: "Legal-tech platform for property disputes — RERA, NRI & tax notices.",
    tech: ["Next.js", "Legal Tech", "SEO"],
    thumbnail: "images/realtyresolve.jpg",
    link: "https://www.realtyresolve.in/",
    year: "2025",
    featured: false,
    seo: true
  },
  {
    name: "Grivaa AI Command Center",
    category: "AI",
    description: "Secure AI workspace for content, SEO & ops across all brands.",
    tech: ["Vite", "AI", "React"],
    thumbnail: "images/grivaa-command-center.jpg",
    link: "https://grivaa-command-center.vercel.app",
    year: "2025",
    featured: true
  },
  {
    name: "AI Stock Research Dashboard",
    category: "AI",
    description: "AI-driven equity research, signals & portfolio insights.",
    tech: ["AI", "Data Viz", "React"],
    thumbnail: "images/stockanalytix.jpg",
    link: "https://stockanalytix.vercel.app",
    year: "2025",
    featured: true
  },
  {
    name: "Creator Tracker",
    category: "Automation",
    description: "AI automation system that tracks & runs creator workflows on autopilot.",
    tech: ["n8n", "AI", "APIs"],
    thumbnail: "images/creator-tracker.jpg",
    link: "https://tracker.grivaacapital.com/",
    year: "2025",
    featured: false
  },
  {
    name: "Vedic Astra",
    category: "AI",
    description: "AI-powered Vedic astrology — charts, dashas & predictions.",
    tech: ["AI", "React", "Node"],
    thumbnail: "images/vedicastra.jpg",
    link: "https://vedicastra.vercel.app",
    year: "2025",
    featured: false
  },
  {
    name: "Safety Circle",
    category: "Web App",
    description: "Personal safety & location-sharing circle for families.",
    tech: ["App", "Realtime", "Maps"],
    thumbnail: "images/safety-circle.jpg",
    link: "https://safety-circle.vercel.app",
    year: "2025",
    featured: false
  },
  {
    name: "Grivaa Capital",
    category: "Web App",
    description: "Investment advisory website — technical SEO & schema.",
    tech: ["Next.js", "SEO", "Schema"],
    thumbnail: "images/grivaa-capital.jpg",
    link: "https://grivaacapital.com/",
    year: "2025",
    featured: false,
    seo: true
  },
  {
    name: "Abhishek Aggarwal",
    category: "Web App",
    description: "Personal authority & finance brand site — SEO build.",
    tech: ["Web", "SEO", "Schema"],
    thumbnail: "images/abhishek-aggarwal.jpg",
    link: "https://abhishekaggarwal.co/",
    year: "2025",
    featured: false,
    seo: true
  },
  {
    name: "VanshLink",
    category: "Web App",
    description: "Link management app with auth & database.",
    tech: ["React", "Auth", "Supabase"],
    thumbnail: "",   // spinner-only in headless; placeholder looks cleaner
    link: "https://vanshlink.vercel.app/",
    year: "2025",
    featured: false
  },

  /* ---------- link add karna baaki ---------- */
  {
    name: "vthumb",
    category: "Utility",
    description: "Download high-resolution YouTube thumbnails in one click.",
    tech: ["JS", "Utility", "Web"],
    thumbnail: "images/vthumb.jpg",
    link: "https://vthumb.vercel.app/",
    year: "2025",
    featured: false
  },
  {
    name: "Aura Music Player",
    category: "Web App",
    description: "Local music player — scan device, focus mode & library.",
    tech: ["React", "Audio", "PWA"],
    thumbnail: "images/aura-player.jpg",
    link: "https://aura-player-nine.vercel.app/",
    year: "2025",
    featured: false
  },
  {
    name: "Aura Shakti",
    category: "AI",
    description: "Timeless AI chat — talk to history's greatest minds for mentorship & big decisions.",
    tech: ["AI", "Chat", "React"],
    thumbnail: "",   // headless me spinner; placeholder use ho raha hai
    link: "https://aurashakti.vercel.app/",
    year: "2025",
    featured: false
  },
];

/* =========================================================================
   FLAGSHIP  —  hero product, apna alag spotlight section milta hai
   ========================================================================= */
window.FLAGSHIP = {
  name: "JanamJyot",
  tagline: "Your Birth Chart. Your Life Direction.",
  category: "Vedic Astrology · Android + Web",
  year: "2025",
  description: "A complete, production-grade Vedic astrology product — Kundli generation, planetary periods, compatibility and personalised AI guidance, delivered through a polished Android app and web experience. Built end-to-end: astrology engine, AI advisors, multi-language content, and a shipped APK.",
  thumbnail: "images/janamjyot.jpg",
  link: "https://janamjyot.vercel.app",
  apk: "https://janamjyot.vercel.app/JanamJyot-v1.0.0.apk",
  stats: [
    { num: "5",   label: "Specialist AI Astrologers" },
    { num: "36",  label: "Point Guna Milan Matching" },
    { num: "3",   label: "Languages — Hindi · Hinglish · English" },
    { num: "₹0",  label: "Free to Start" }
  ],
  features: [
    "Free Janam Kundli", "Kundli Matching", "Daily Panchang",
    "Dasha & Transit", "Muhurat", "Yogas", "Ashtakavarga", "Talk to an Astrologer"
  ],
  advisors: ["Acharya Ved", "Career Acharya", "Prem Saathi", "Dhan Margdarshak", "Upaya Guru"],
  tech: ["React", "AI", "Android", "PWA", "Astrology Engine"]
};

/* =========================================================================
   SKILLS  —  yahan se edit karo
   ========================================================================= */
window.SKILLS = [
  { group: "Frontend",         items: ["React", "Next.js", "TypeScript", "Tailwind", "GSAP"] },
  { group: "Backend & Data",   items: ["Node.js", "Supabase", "Firebase", "PostgreSQL"] },
  { group: "AI & Automation",  items: ["OpenAI", "Gemini", "n8n", "APIs"] },
  { group: "Deploy & Tooling", items: ["Vercel", "Git", "Vite", "SEO"] }
];

/* =========================================================================
   SITE INFO
   ========================================================================= */
window.SITE = {
  name: "Vansh Kashyap",
  role: "React & AI Automation Developer",
  tagline: "I build products that work — and workflows that run without you.",
  email: "vk1234888i@gmail.com",
  portfolios: [
    { label: "Portfolio 01", url: "https://vanshkashyap.vercel.app" },
    { label: "Portfolio 02", url: "https://techbyvansh.vercel.app" }
  ],
  socials: [
    { label: "LinkedIn",  url: "https://www.linkedin.com/in/vansh-kashyap-32a46a2a6" },
    { label: "YouTube",   url: "https://youtube.com/@techbyvansh" },
    { label: "Instagram", url: "https://instagram.com/vanshkashyap70" },
    { label: "WhatsApp",  url: "https://wa.me/918800628376" }
  ]
};
