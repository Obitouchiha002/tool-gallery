/* =========================================================================
   PROJECTS DATA  —  Vansh Kashyap · Tool Gallery
   -------------------------------------------------------------------------
   Naya tool add karna? Bas yahan neeche ek { ... } block copy-paste karo.

   Fields:
     name        : Tool ka naam (required)
     category    : "AI" | "Web App" | "Native App" | "Utility" | "Automation"
     description : 1 line — kya karta hai
     tech        : ["React", "Node", ...]  — chip ban jayenge
     platforms   : ["Android", "Windows", "macOS"]  — media pe badge (optional)
     thumbnail   : "images/your-image.jpg"  (1280x800). Khaali "" = auto placeholder
     link        : "https://..."  — LIVE link. Khaali = "Coming soon".
     year        : "2025"
     featured    : true  → bada dikhega (max 2-3 rakho)
     seo         : true  → grid ke bajaye "Shipped for Clients" list me jaayega
   ========================================================================= */

window.PROJECTS = [
  /* ---------- NATIVE APPS (Android · Windows · macOS) ---------- */
  {
    name: "StreamGarden",
    category: "Native App",
    description: "Video & audio downloader for Android, Windows and macOS — real streams up to 4K, merged without re-encoding, plus proper MP3 with cover art.",
    tech: ["Android", "Desktop", "yt-dlp", "ffmpeg"],
    platforms: ["Android", "Windows", "macOS"],
    thumbnail: "images/streamgarden.jpg",
    link: "https://streamgd.lzworth.in",
    year: "2026",
    featured: true
  },
  {
    name: "TrueVault",
    category: "Native App",
    description: "An Android file vault that opens as a working notes app — AES-256-GCM encryption, Argon2id keys, nothing ever leaves the device.",
    tech: ["Android", "Kotlin", "AES-256", "Argon2id"],
    platforms: ["Android"],
    thumbnail: "images/truevault.jpg",
    link: "https://truevault.lzworth.in",
    year: "2026",
    featured: true
  },
  {
    name: "CopyEye",
    category: "Native App",
    description: "A floating eye that makes any on-screen text copyable — Reels, videos, PDFs and apps that block selection. On-device OCR in English & Hindi.",
    tech: ["Android", "On-device OCR", "Kotlin"],
    platforms: ["Android"],
    thumbnail: "images/copyeye.jpg",
    link: "https://copyeye.lzworth.in",
    year: "2026",
    featured: false
  },

  /* ---------- AI ---------- */
  {
    name: "Aura Shakti",
    category: "AI",
    description: "Five AI rooms in one app — a Council that argues with itself, a mentor, a psychologist, a teacher and four Urdu poets. Web, web app and Android.",
    tech: ["AI", "Android", "PWA", "React"],
    platforms: ["Web", "Web App", "Android"],
    thumbnail: "images/aura-shakti.jpg",
    link: "https://aura.lzworth.in",
    year: "2026",
    featured: true
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
    name: "Vedic Astra",
    category: "AI",
    description: "AI-powered Vedic astrology — charts, dashas & predictions.",
    tech: ["AI", "React", "Node"],
    thumbnail: "images/vedicastra.jpg",
    link: "https://vedicastra.vercel.app",
    year: "2025",
    featured: false
  },

  /* ---------- WEB APPS ---------- */
  {
    name: "Explainer Studio",
    category: "Web App",
    description: "A whiteboard studio in the browser — draw, build cards, generate a whole board from a script, then record the explainer.",
    tech: ["Canvas", "PWA", "JavaScript"],
    thumbnail: "images/explainer-studio.jpg",
    link: "https://tech-by-vansh-studio.vercel.app/",
    year: "2026",
    featured: false
  },
  {
    name: "Kali-Cloud",
    category: "Web App",
    description: "The real Kali Linux desktop streamed into a browser tab — full XFCE, nmap, Metasploit, sqlmap and a sealed WiFi lab. No ISO, no VirtualBox.",
    tech: ["Kali Linux", "Containers", "Desktop Streaming"],
    thumbnail: "images/kali.jpg",
    link: "https://kali.lzworth.in",
    year: "2026",
    featured: true
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
    name: "VanshLink",
    category: "Web App",
    description: "Temporary and permanent chat rooms — join with a code, one-to-one or group. Temporary messages disappear when the session ends.",
    tech: ["React", "Realtime", "Supabase"],
    thumbnail: "images/vanshlink.jpg",
    link: "https://vanshlink.vercel.app/",
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

  /* ---------- AUTOMATION ---------- */
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

  /* ---------- UTILITY ---------- */
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

  /* ---------- CLIENT WORK (seo:true → alag list section me jaate hain) ---------- */
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
  link: "https://janamjyot.lzworth.in",
  apk: "https://janamjyot.lzworth.in/JanamJyot-v1.0.0.apk",
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
   VENTURE  —  apni company. Projects grid se bahar, apna alag band milta hai.
   ========================================================================= */
window.VENTURE = {
  name: "LZ Worth",
  role: "Co-founder",
  tagline: "Systems that keep working after launch.",
  url: "https://lzworth.in",
  thumbnail: "images/lzworth.jpg",
  description: "A Delhi studio building three things well — AI automation that handles real work, applications that hold up in production, and social channels that actually stay active. I run the build side: websites, Android apps and web applications, shipped end to end. Clients keep the code, the keys and the accounts.",
  stats: [
    { num: "14", label: "Projects shipped" },
    { num: "9",  label: "Web apps built" },
    { num: "10", label: "Days to a live AI agent" },
    { num: "3",  label: "Co-founders" }
  ],
  divisions: [
    {
      name: "Web & Apps",
      description: "Websites, Android apps and web applications, built end to end.",
      url: "https://web.lzworth.in",
      thumbnail: "images/lzworth-web.jpg"
    },
    {
      name: "AI Automation",
      description: "Custom AI agents for sales, support, content and ops — live in 10 days.",
      url: "https://automation.lzworth.in",
      thumbnail: "images/lzworth-automation.jpg"
    },
    {
      name: "YouTube",
      description: "Managed channels for founders — long-form, Shorts, packaging and SEO.",
      url: "https://youtube.lzworth.in",
      thumbnail: "images/lzworth-youtube.jpg"
    },
    {
      name: "LinkedIn",
      description: "Ghostwriting for founders, CXOs and consultants, in their own voice.",
      url: "https://linkedin.lzworth.in",
      thumbnail: "images/lzworth-linkedin.jpg"
    },
    {
      name: "Instagram",
      description: "Managed pages for brands and founders — reels, carousels and stories.",
      url: "https://instagram.lzworth.in",
      thumbnail: "images/lzworth-instagram.jpg"
    }
  ]
};

/* =========================================================================
   SKILLS  —  yahan se edit karo
   ========================================================================= */
window.SKILLS = [
  { group: "Frontend",         items: ["React", "Next.js", "TypeScript", "Tailwind", "GSAP"] },
  { group: "Mobile & Desktop", items: ["Android", "Kotlin", "Jetpack Compose", "Electron"] },
  { group: "Backend & Data",   items: ["Node.js", "Supabase", "Firebase", "PostgreSQL"] },
  { group: "AI & Automation",  items: ["OpenAI", "Gemini", "n8n", "On-device ML"] },
  { group: "Deploy & Tooling", items: ["Vercel", "Git", "Vite", "SEO"] }
];

/* =========================================================================
   SITE INFO
   ========================================================================= */
window.SITE = {
  name: "Vansh Kashyap",
  role: "Co-founder, LZ Worth · Web, Mobile & AI Automation Developer",
  tagline: "I build products that work — and workflows that run without you.",
  email: "vk1234888i@gmail.com",
  portfolios: [
    { label: "Portfolio 01", url: "https://vanshkashyap.lzworth.in" },
    { label: "Portfolio 02", url: "https://techbyvansh.lzworth.in" },
    { label: "Portfolio 03", url: "https://vanshkashyap.vercel.app" },
    { label: "Portfolio 04", url: "https://techbyvansh.vercel.app" }
  ],
  socials: [
    { label: "LinkedIn",  url: "https://www.linkedin.com/in/vansh-kashyap-32a46a2a6" },
    { label: "YouTube",   url: "https://youtube.com/@techbyvansh" },
    { label: "Instagram", url: "https://instagram.com/vanshkashyap70" },
    { label: "GitHub",    url: "https://github.com/Obitouchiha002" },
    { label: "WhatsApp",  url: "https://wa.me/918800628376" }
  ]
};
