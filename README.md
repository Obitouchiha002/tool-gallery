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
  category: "AI",              // AI | Web App | Utility | Automation
  description: "1 line kya karta hai",
  tech: ["React", "Node"],
  thumbnail: "images/my-tool.jpg",   // khaali "" = auto placeholder
  link: "https://live-url.com",       // khaali "" = "Coming soon"
  year: "2025",
  featured: false             // true = bada, dono column me
}
```

## Images
- `images/` folder me daalo, filename `projects.js` ke `thumbnail` se match karo.
- Ideal size: **1600 × 1000 px** (16:10). Screenshots best lagte hain.
- Image na ho to naam ke initials ka clean placeholder auto ban jayega.

## Site info edit
`js/projects.js` ke neeche `window.SITE` me: naam, email, 2 portfolio links, socials.

## Deploy
Static hai — Netlify / Vercel / GitHub Pages pe drag-drop / push kar do.

---

### 🔗 Mujhe (Claude ko) ye chahiye — bhej do to bhar dunga:
1. **Har tool ka live link** (jo jo live hain)
2. **2 portfolio links** (Portfolio 01, 02)
3. **Social links** (GitHub / LinkedIn / X)
4. **Screenshots / thumbnails** (optional — na ho to placeholders chal jayenge)
5. Koi tool **naam/description** badalna ho to bata do
