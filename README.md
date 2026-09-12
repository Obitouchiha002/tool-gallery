# VK · Tool Gallery

Ek premium, dark minimal-mono portfolio jaisi tool gallery — saare apps, tools & automations ek jagah.

## Chalao (Run)
Bas `index.html` ko browser me open karo. Koi build step nahi.
(Ya VS Code me **Live Server** extension se — better, kyunki thumbnails/images load hote hain.)

## Naya tool add karna
`js/projects.js` kholo aur ek block copy-paste karo:

```js
{
  name: "Tool ka naam",
  category: "AI",              // AI | Web App | Native App | Utility | Automation
  description: "1 line kya karta hai",
  tech: ["React", "Node"],
  platforms: ["Android", "Windows"],  // optional — card pe OS badge
  thumbnail: "images/my-tool.jpg",   // khaali "" = auto placeholder
  link: "https://live-url.com",       // khaali "" = "Coming soon"
  year: "2025",
  featured: false             // true = bada, dono column me
}
```

## Images
- `images/` folder me daalo, filename `projects.js` ke `thumbnail` se match karo.
- Ideal size: **1280 × 800 px** (16:10). Real screenshots best lagte hain.
- Image na ho to naam ke initials ka clean placeholder auto ban jayega.

## LZ Worth (venture band)
`js/projects.js` me `window.VENTURE` — company ka naam, tagline, stats aur `divisions[]`
(web / automation / youtube / linkedin / instagram). Naya division add karna ho to bas
ek object `divisions` array me daal do, screenshot `images/` me rakh do.

## Site info edit
`js/projects.js` ke neeche `window.SITE` me: naam, email, portfolio links, socials.

## Deploy
Static hai — Netlify / Vercel / GitHub Pages pe drag-drop / push kar do.

## Résumé
`assets/Vansh_Kashyap_Resume.pdf`. Source: HTML → Chrome print-to-PDF (A4, ek page).

---

Saare 18 projects live hain, har card pe real screenshot laga hua hai.
