# VK · Tool Gallery

Ek premium, dark minimal-mono portfolio jaisi tool gallery — saare apps, tools & automations ek jagah.

## ⚠️ Sabse pehle ye samjho — index.html ab GENERATED hai
`index.html` ko **haath se mat edit karo**. Wo banta hai:

```
index.template.html  +  js/projects.js   →   node tools/prerender.mjs   →   index.html
```

Kyun: pehle saara content JS se banta tha, isliye Google / ChatGPT / Gemini /
Perplexity ko tool ke naam tak nahi dikhte the. Ab poora HTML pehle se static hota
hai aur JS sirf usi ko animate karta hai.

- **Layout / section badalna hai?** → `index.template.html`
- **Tool ya data badalna hai?** → `js/projects.js`
- **Dono me se kuch bhi badla?** → `node tools/prerender.mjs` chalao, phir deploy

## Chalao (Run)
`node tools/prerender.mjs` chalao, phir `index.html` browser me kholo.
(Ya VS Code me **Live Server** extension se — better, kyunki images load hote hain.)

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

## Crawler check
Kuch bhi badalne ke baad ye zaroor dekho — JS off karke bhi sab dikhna chahiye:

```
node tools/prerender.mjs
grep -c 'class="card"' index.html      # 14 tool cards
grep -o '18' index.html | head -1      # counter static hai, "00" nahi
```

Browser me DevTools → Settings → Debugger → *Disable JavaScript* karke reload karo.
Saare tool naam, description aur LZ Worth section tab bhi dikhne chahiye.

## Résumé
`assets/Vansh_Kashyap_Resume.pdf`. Source: HTML → Chrome print-to-PDF (A4, ek page).

---

Saare 18 projects live hain, har card pe real screenshot laga hua hai.
