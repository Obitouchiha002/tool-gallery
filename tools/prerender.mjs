/* =========================================================================
   PRERENDER  —  index.template.html + js/projects.js  →  index.html
   -------------------------------------------------------------------------
   Kyun: site ka saara content pehle JS se banta tha, isliye crawler (Google,
   ChatGPT, Gemini, Perplexity) ko tool ke naam tak nahi dikhte the. Ab poora
   HTML yahan se static generate hota hai; JS sirf usi HTML ko animate karta hai.

   Data badla?  →   node tools/prerender.mjs
   ========================================================================= */

import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';
import vm from 'node:vm';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SITE_URL = 'https://vansh-tools.vercel.app';

/* ---------- load js/projects.js without a browser ---------- */
const sandbox = { window: {} };
vm.createContext(sandbox);
vm.runInContext(readFileSync(join(ROOT, 'js/projects.js'), 'utf8'), sandbox);
const { PROJECTS, FLAGSHIP, VENTURE, SKILLS, SITE } = sandbox.window;

const TOOLS = PROJECTS.filter(p => !p.seo);
const CLIENTS = PROJECTS.filter(p => p.seo);

/* ---------- helpers ---------- */
const esc = s => String(s)
  .replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;');

const host = url => String(url || '')
  .replace(/^https?:\/\//, '').replace(/\/$/, '').replace(/^www\./, '');

const initialsOf = name => {
  const w = name.trim().split(/\s+/);
  return (w.length > 1 ? w.slice(0, 2).map(x => x[0]).join('') : name.slice(0, 2)).toUpperCase();
};

// Meaningful alt text: the tool plus what it actually is — never keyword soup.
const altOf = p => {
  let what = p.description.split(/ — |\. /)[0].trim().replace(/[.,]$/, '');
  if (what.length > 90) what = what.slice(0, 87).trimEnd() + '…';
  return `${p.name} — ${what}`;
};

// Who built it, stated accurately (Vansh's own product vs. work done for an employer).
const ATTRIBUTION = {
  employer: 'Built by Vansh Kashyap at Grivaa Capital',
  client:   'Built by Vansh Kashyap for the client'
};

/* ---------- marquee (decorative) ---------- */
const MARQUEE_WORDS = ['Android Apps', 'AI Tools', 'Desktop Software', 'Web Apps',
                       'Automation', 'Dashboards', 'Utilities'];
const marqueeItems = MARQUEE_WORDS.map(w => `<span>${esc(w)}</span>`).join('') .repeat(2);

/* ---------- filters ---------- */
const CATS = ['All', ...new Set(TOOLS.map(p => p.category))];
const filters = CATS.map((c, i) =>
  `<button type="button" data-hover${i === 0 ? ' class="active"' : ''}>${esc(c)}</button>`
).join('\n          ');

/* ---------- tool cards ---------- */
function cardHTML(p) {
  const live = Boolean(p.link);
  const ph = `<div class="card__ph"${p.thumbnail ? ' style="display:none"' : ''} aria-hidden="true"><b>${esc(initialsOf(p.name))}</b><small>${esc(p.category)}</small></div>`;
  const media = p.thumbnail
    ? `<img class="card__img" src="${esc(p.thumbnail)}" alt="${esc(altOf(p))}" width="1280" height="800" loading="lazy" decoding="async"
             onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">${ph}`
    : ph;
  const plat = (p.platforms || []).length
    ? `<span class="card__plat">${esc(p.platforms.join(' · '))}</span>` : '';
  const attr = ATTRIBUTION[p.attribution]
    ? `\n        <p class="card__attr">${esc(ATTRIBUTION[p.attribution])}</p>` : '';
  const name = live
    ? `<a class="card__link" href="${esc(p.link)}" target="_blank" rel="noopener">${esc(p.name)}</a>`
    : esc(p.name);

  return `
      <article class="card${live ? '' : ' is-soon'}" data-cat="${esc(p.category)}" data-hover>
        <div class="card__window">
          <div class="card__bar">
            <span class="card__dots" aria-hidden="true"><i></i><i></i><i></i></span>
            <span class="card__url">${esc(live ? host(p.link) : 'preview not available')}</span>
            <span class="card__status">${live ? 'Live' : 'Soon'}</span>
          </div>
          <div class="card__media">
            <span class="card__cat">${esc(p.category)}</span>
            ${plat}
            ${media}
            <div class="card__view" aria-hidden="true"><span>${live ? 'Visit site ↗' : 'Coming soon'}</span></div>
          </div>
        </div>
        <div class="card__foot">
          <h3 class="card__name">${name}</h3>
          <span class="card__year">${esc(p.year || '')}</span>
        </div>
        <p class="card__desc">${esc(p.description || '')}</p>
        <div class="card__tech">${(p.tech || []).map(t => `<span>${esc(t)}</span>`).join('')}</div>${attr}
      </article>`;
}
const grid = TOOLS.map(cardHTML).join('\n');

/* ---------- flagship spotlight ---------- */
const F = FLAGSHIP;
const flagship = `
      <div class="flag__head">
        <h2 class="flag__label"><span aria-hidden="true">◆</span> Flagship product</h2>
        <h3 class="flag__title">${esc(F.name)}</h3>
        <p class="flag__tagline">${esc(F.tagline)}</p>
      </div>

      <div class="flag__stats">
        ${F.stats.map(s => `<div class="flag__stat"><b>${esc(s.num)}</b><span>${esc(s.label)}</span></div>`).join('\n        ')}
      </div>

      <a class="flag__media" href="${esc(F.link)}" target="_blank" rel="noopener"
         aria-label="${esc(F.name)} — open the live site">
        <div class="flag__bar">
          <span class="card__dots" aria-hidden="true"><i></i><i></i><i></i></span>
          <span class="card__url">${esc(host(F.link))}</span>
          <span class="card__status">Live</span>
        </div>
        <div class="flag__shot">
          <img src="${esc(F.thumbnail)}" alt="${esc(F.name)} — ${esc(F.category)} interface"
               width="1280" height="800" fetchpriority="high" />
        </div>
      </a>

      <div class="flag__cols">
        <div class="flag__col">
          <p class="flag__desc">${esc(F.description)}</p>
          <div class="flag__cta">
            <a class="btn btn--solid" href="${esc(F.link)}" target="_blank" rel="noopener">Visit website ↗</a>
            <a class="btn btn--ghost" href="${esc(F.apk)}" target="_blank" rel="noopener">Download APK ↓</a>
          </div>
        </div>
        <div class="flag__col">
          <h3 class="flag__sub">Inside the app</h3>
          <div class="flag__chips">${F.features.map(x => `<span>${esc(x)}</span>`).join('')}</div>
          <h3 class="flag__sub flag__sub--mt">AI Acharyas</h3>
          <div class="flag__chips">${F.advisors.map(x => `<span>${esc(x)}</span>`).join('')}</div>
        </div>
      </div>`;

/* ---------- LZ Worth venture band ---------- */
const V = VENTURE;
const venture = `
      <div class="vent__head">
        <span class="vent__label"><span aria-hidden="true">◆</span> ${esc(V.role)}</span>
        <h2 class="vent__title">${esc(V.name)}</h2>
        <p class="vent__tagline">${esc(V.tagline)}</p>
      </div>

      <div class="flag__stats">
        ${V.stats.map(s => `<div class="flag__stat"><b>${esc(s.num)}</b><span>${esc(s.label)}</span></div>`).join('\n        ')}
      </div>

      <div class="vent__cols">
        <a class="vent__media" href="${esc(V.url)}" target="_blank" rel="noopener"
           aria-label="${esc(V.name)} — open the official website">
          <div class="flag__bar">
            <span class="card__dots" aria-hidden="true"><i></i><i></i><i></i></span>
            <span class="card__url">${esc(host(V.url))}</span>
            <span class="card__status">Live</span>
          </div>
          <div class="vent__shot">
            <img src="${esc(V.thumbnail)}" alt="${esc(V.name)} — ${esc(V.tagline)}"
                 width="1280" height="800" loading="lazy" decoding="async" />
          </div>
        </a>
        <div class="vent__intro">
          <p class="vent__desc">${esc(V.description)}</p>
          <a class="btn btn--solid" href="${esc(V.url)}" target="_blank" rel="noopener">Visit ${esc(host(V.url))} ↗</a>
        </div>
      </div>

      <h3 class="vent__sub">What the studio runs</h3>
      <div class="vent__divs">
${V.divisions.map(d => `        <a class="vdiv" href="${esc(d.url)}" target="_blank" rel="noopener" data-hover
           aria-label="${esc(d.name)} — open ${esc(host(d.url))}">
          <div class="vdiv__shot">
            <img src="${esc(d.thumbnail)}" alt="${esc(V.name)} ${esc(d.name)} — ${esc(d.description)}"
                 width="1280" height="800" loading="lazy" decoding="async">
          </div>
          <div class="vdiv__body">
            <h4 class="vdiv__name">${esc(d.name)} <i aria-hidden="true">↗</i></h4>
            <p class="vdiv__desc">${esc(d.description)}</p>
            <span class="vdiv__url">${esc(host(d.url))}</span>
          </div>
        </a>`).join('\n')}
      </div>`;

/* ---------- client work list ---------- */
const seoList = CLIENTS.map((p, i) => `
        <a class="seo-row" href="${esc(p.link)}" target="_blank" rel="noopener" data-hover
           data-img="${esc(p.thumbnail || '')}"
           aria-label="${esc(p.name)} — ${esc(p.description)} Built and maintained by Vansh Kashyap; opens the live site.">
          <span class="seo-row__idx">0${i + 1}</span>
          <h3 class="seo-row__name">${esc(p.name)}</h3>
          <span class="seo-row__meta">${esc((p.tech || []).join(' · '))}</span>
          <span class="seo-row__arrow" aria-hidden="true">↗</span>
        </a>`).join('');

/* ---------- skills ---------- */
const skills = SKILLS.map(col => `
        <div class="skillcol">
          <h3 class="skillcol__label">${esc(col.group)}</h3>
          <div class="skillcol__list">${col.items.map(i => `<span>${esc(i)}</span>`).join('')}</div>
        </div>`).join('');

/* ---------- links: nav, about, footer, socials ---------- */
const ports = SITE.portfolios;
const navPorts = ports.slice(0, 2).map(p =>
  `<a class="nav__portfolio" href="${esc(p.url)}" target="_blank" rel="noopener" data-hover>${esc(p.label)} ↗</a>`
).join('\n      ');
const aboutPorts = ports.slice(0, 2).map(p =>
  `<a class="about__portfolio" href="${esc(p.url)}" target="_blank" rel="noopener" data-hover>Visit ${esc(p.label)} ↗</a>`
).join('\n        ');
const footerPorts = ports.map(p =>
  `<a href="${esc(p.url)}" target="_blank" rel="noopener" data-hover>${esc(p.label)}</a>`
).join('\n      ');
const socials = SITE.socials.filter(s => s.url).map(s =>
  `<a href="${esc(s.url)}" target="_blank" rel="noopener" data-hover>${esc(s.label)}</a>`
).join('\n        ');

/* =========================================================================
   JSON-LD  —  only facts that are already on the page. No ratings, no
   download counts, no pricing, no awards.
   ========================================================================= */
// Canonical, permanent identifier for Vansh across every site he owns.
// Never mint a second Person node — everything references this @id.
const PERSON_ID = 'https://vanshkashyap.lzworth.in/#person';

const schemaTypeOf = p =>
  (p.platforms || []).some(x => /android|windows|macos/i.test(x))
    ? 'SoftwareApplication' : 'WebApplication';

const osOf = p => {
  const native = (p.platforms || []).filter(x => /android|windows|macos/i.test(x));
  return native.length ? native.join(', ') : 'Web browser';
};

const softwareNodes = TOOLS.filter(p => p.link).map(p => {
  const node = {
    '@type': schemaTypeOf(p),
    '@id': `${SITE_URL}/#tool-${p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')}`,
    name: p.name,
    description: p.description,
    applicationCategory: p.appCategory || 'UtilitiesApplication',
    operatingSystem: osOf(p),
    url: p.link,
    creator: { '@id': PERSON_ID }
  };
  if (schemaTypeOf(p) === 'WebApplication') node.browserRequirements = 'Requires JavaScript';
  if (p.attribution === 'employer') {
    node.publisher = { '@type': 'Organization', name: 'Grivaa Capital', url: 'https://grivaacapital.com/' };
  }
  return node;
});

const flagshipNode = {
  '@type': 'SoftwareApplication',
  '@id': `${SITE_URL}/#tool-janamjyot`,
  name: F.name,
  alternateName: F.tagline,
  description: F.description,
  applicationCategory: 'LifestyleApplication',
  operatingSystem: 'Android, Web browser',
  url: F.link,
  downloadUrl: F.apk,
  creator: { '@id': PERSON_ID }
};

const clientNodes = CLIENTS.map(p => ({
  '@type': 'WebSite',
  '@id': `${SITE_URL}/#client-${p.name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}`,
  name: p.name,
  description: p.description,
  url: p.link,
  // Client sites: Vansh built them, the business owns them. Personal sites: his own.
  [p.attribution === 'client' ? 'contributor' : 'author']: { '@id': PERSON_ID }
}));

const allWorks = [flagshipNode, ...softwareNodes];

const jsonld = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'ProfilePage',
      '@id': `${SITE_URL}/#webpage`,
      url: `${SITE_URL}/`,
      name: 'Tools & Apps by Vansh Kashyap',
      isPartOf: { '@id': `${SITE_URL}/#website` },
      about: { '@id': PERSON_ID },
      mainEntity: { '@id': PERSON_ID },
      inLanguage: 'en'
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'Vansh Kashyap — Tool Gallery',
      publisher: { '@id': PERSON_ID },
      inLanguage: 'en'
    },
    {
      '@type': 'Person',
      '@id': PERSON_ID,
      name: SITE.name,
      jobTitle: 'AI Automation & Full-Stack Developer',
      description: 'Vansh Kashyap is a full-stack developer and AI automation engineer in New Delhi, India. He is a co-founder of LZ Worth and builds Android apps, desktop software, web applications and n8n automation systems.',
      url: 'https://vanshkashyap.lzworth.in/',
      mainEntityOfPage: { '@id': `${SITE_URL}/#webpage` },
      email: `mailto:${SITE.email}`,
      telephone: '+91-8800628376',
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'New Delhi',
        addressRegion: 'Delhi',
        addressCountry: 'IN'
      },
      affiliation: { '@type': 'Organization', name: VENTURE.name, url: VENTURE.url },
      worksFor: [
        { '@type': 'Organization', name: VENTURE.name, url: VENTURE.url },
        { '@type': 'Organization', name: 'Grivaa Capital', url: 'https://grivaacapital.com/' }
      ],
      knowsAbout: [
        'AI Automation', 'n8n', 'Web Development', 'React', 'Next.js',
        'Android Development', 'Kotlin', 'Jetpack Compose', 'APIs',
        'Full-Stack Development', 'Technical SEO'
      ],
      sameAs: [
        'https://vanshkashyap.lzworth.in/',
        'https://techbyvansh.lzworth.in/',
        'https://www.linkedin.com/in/techbyvansh',
        'https://github.com/Obitouchiha002',
        'https://youtube.com/@techbyvansh',
        'https://instagram.com/vanshkashyap70'
      ]
    },
    {
      '@type': 'ItemList',
      '@id': `${SITE_URL}/#tools`,
      name: 'Tools and apps built by Vansh Kashyap',
      numberOfItems: allWorks.length,
      itemListOrder: 'https://schema.org/ItemListUnordered',
      itemListElement: allWorks.map((w, i) => ({
        '@type': 'ListItem', position: i + 1, item: { '@id': w['@id'] }
      }))
    },
    ...allWorks,
    ...clientNodes
  ]
};

/* ---------- render ---------- */
const tpl = readFileSync(join(ROOT, 'index.template.html'), 'utf8');

const values = {
  YEAR: String(new Date().getFullYear()),
  EMAIL: SITE.email,
  PROJECT_COUNT: String(PROJECTS.length + (FLAGSHIP ? 1 : 0)),
  MARQUEE_ITEMS: marqueeItems,
  FILTERS: filters,
  GRID: grid,
  FLAGSHIP: flagship,
  VENTURE: venture,
  SEO_LIST: seoList,
  SKILLS: skills,
  NAV_PORTFOLIOS: navPorts,
  ABOUT_PORTFOLIOS: aboutPorts,
  FOOTER_PORTS: footerPorts,
  SOCIALS: socials,
  JSONLD: JSON.stringify(jsonld, null, 2).split('\n').map((l, i) => i ? '  ' + l : l).join('\n')
};

let out = tpl;
for (const [key, val] of Object.entries(values)) {
  const token = `{{${key}}}`;
  if (!out.includes(token)) throw new Error(`template is missing ${token}`);
  out = out.split(token).join(val);
}
const leftover = out.match(/\{\{[A-Z_]+\}\}/g);
if (leftover) throw new Error(`unresolved placeholders: ${leftover.join(', ')}`);

out = out.replace('<!DOCTYPE html>', `<!DOCTYPE html>
<!-- ==========================================================================
     GENERATED FILE — do not edit by hand.
     Source: index.template.html + js/projects.js
     Rebuild: node tools/prerender.mjs
     ========================================================================== -->`);

writeFileSync(join(ROOT, 'index.html'), out);

console.log(`index.html written`);
console.log(`  tools in grid : ${TOOLS.length}`);
console.log(`  client rows   : ${CLIENTS.length}`);
console.log(`  counter       : ${values.PROJECT_COUNT}`);
console.log(`  schema nodes  : ${jsonld['@graph'].length}`);
