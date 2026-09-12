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
     attribution : "personal" (default) | "employer" | "client"  — kiska product hai
     appCategory : schema.org applicationCategory (SEO ke liye)
   ========================================================================= */

window.PROJECTS = [
  /* ---------- NATIVE APPS (Android · Windows · macOS) ---------- */
  {
    name: "StreamGarden",
    category: "Native App",
    description: "Video & audio downloader for Android, Windows and macOS — real streams up to 4K, merged without re-encoding, plus proper MP3 with cover art.",
    tech: ["Android", "Desktop", "yt-dlp", "ffmpeg"],
    platforms: ["Android", "Windows", "macOS"],
    appCategory: "MultimediaApplication",
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
    appCategory: "SecurityApplication",
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
    appCategory: "UtilitiesApplication",
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
    appCategory: "LifestyleApplication",
    thumbnail: "images/aura-shakti.jpg",
    link: "https://aura.lzworth.in",
    year: "2026",
    featured: true
  },
  {
    name: "Grivaa AI Command Center",
    category: "AI",
    description: "Internal AI workspace for social content, scheduling and analytics across the firm's brands.",
    tech: ["Next.js", "Supabase", "AI"],
    attribution: "employer",
    appCategory: "BusinessApplication",
    thumbnail: "images/grivaa-command-center.jpg",
    link: "https://grivaa-command-center.vercel.app",
    year: "2025",
    featured: true
  },
  {
    name: "AI Stock Research Dashboard",
    category: "AI",
    description: "AI stock-research terminal spanning US, NSE and BSE markets — screening, alerts and an AI research chat over the data.",
    tech: ["AI", "Data Viz", "React"],
    appCategory: "FinanceApplication",
    thumbnail: "images/stockanalytix.jpg",
    link: "https://stockanalytix.vercel.app",
    year: "2025",
    featured: true
  },
  {
    name: "Vedic Astra",
    category: "AI",
    description: "AI-assisted Vedic astrology on the web — birth charts, planetary periods and interpretation in plain language.",
    tech: ["AI", "React", "Node"],
    appCategory: "LifestyleApplication",
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
    appCategory: "DesignApplication",
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
    appCategory: "DeveloperApplication",
    thumbnail: "images/kali.jpg",
    link: "https://kali.lzworth.in",
    year: "2026",
    featured: true
  },
  {
    name: "Safety Circle",
    category: "Web App",
    description: "Personal safety app for families — a private circle that shares live location and raises an alert when someone needs help.",
    tech: ["Realtime", "Maps", "React"],
    appCategory: "HealthApplication",
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
    appCategory: "CommunicationApplication",
    thumbnail: "images/vanshlink.jpg",
    link: "https://vanshlink.vercel.app/",
    year: "2025",
    featured: false
  },
  {
    name: "Aura Music Player",
    category: "Web App",
    description: "Music player for files already on your device — scans local storage, builds a library and has a distraction-free focus mode.",
    tech: ["React", "Audio", "PWA"],
    appCategory: "MultimediaApplication",
    thumbnail: "images/aura-player.jpg",
    link: "https://aura-player-nine.vercel.app/",
    year: "2025",
    featured: false
  },

  /* ---------- AUTOMATION ---------- */
  {
    name: "Creator Tracker",
    category: "Automation",
    description: "AI research dashboard that tracks creator trends and turns them into data-backed content ideas, on an n8n schedule.",
    tech: ["n8n", "AI", "APIs"],
    attribution: "employer",
    appCategory: "BusinessApplication",
    thumbnail: "images/creator-tracker.jpg",
    link: "https://tracker.grivaacapital.com/",
    year: "2025",
    featured: false
  },

  /* ---------- UTILITY ---------- */
  {
    name: "vthumb",
    category: "Utility",
    description: "Paste a YouTube URL and pull its thumbnail at full resolution, in one click. No sign-up, no watermark.",
    tech: ["JS", "Utility", "Web"],
    appCategory: "UtilitiesApplication",
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
    attribution: "client",
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
    attribution: "client",
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
    attribution: "client",
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
  // Pehle do primary hain — nav + About me yahi dikhte hain. Baaki mirrors footer me.
  portfolios: [
    { label: "Vansh Portfolio", url: "https://vanshkashyap.lzworth.in" },
    { label: "Tech by Vansh",   url: "https://techbyvansh.lzworth.in" },
    { label: "Portfolio (mirror)",     url: "https://vanshkashyap.vercel.app" },
    { label: "Tech by Vansh (mirror)", url: "https://techbyvansh.vercel.app" }
  ],
  socials: [
    { label: "LinkedIn",  url: "https://www.linkedin.com/in/techbyvansh" },
    { label: "YouTube",   url: "https://youtube.com/@techbyvansh" },
    { label: "Instagram", url: "https://instagram.com/vanshkashyap70" },
    { label: "GitHub",    url: "https://github.com/Obitouchiha002" },
    { label: "WhatsApp",  url: "https://wa.me/918800628376" }
  ]
};
