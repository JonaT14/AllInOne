import {modules, future} from './modules.js';

const paths = {
  cross: 'M12 5v14M5 12h14',
  home: 'm3 10 9-7 9 7v10H3z M9 20v-6h6v6',
  clipboard: 'M9 5H6a2 2 0 0 0-2 2v13a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V7a2 2 0 0 0-2-2h-3 M9 3h6v4H9z M8 12h8 M8 16h5',
  kit: 'M8 7V5a1 1 0 0 1 1-1h6a1 1 0 0 1 1 1v2 M3 7h18v13H3z M12 10v7m-3.5-3.5h7',
  pulse: 'M3 12h4l3-6 4 12 3-6h4',
  lock: 'M5 10h14v11H5z M8 10V7a4 4 0 1 1 8 0v3 M12 14v3',
  menu: 'M4 6h16M4 12h16M4 18h16',
  moon: 'M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11Z',
  sun: 'M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M19 5l-1.5 1.5m-11 11L5 19',
  building: 'M4 21h16M6 21V5h12v16M9 9h1m4 0h1m-6 4h1m4 0h1m-4 8v-4h2v4',
  shield: 'M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z m-3-10 2 2 4-4',
  arrow: 'M4 12h15m-6-6 6 6-6 6',
  external: 'M13 4h7v7m0-7-9 9 M10 5H5v14h14v-5',
};
const icon = name => `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="${paths[name]}"/></svg>`;
const el = id => document.getElementById(id);

for (const node of document.querySelectorAll('[data-icon]')) node.innerHTML = icon(node.dataset.icon);
el('module-count').textContent = `${modules.length} modules`;
el('module-nav').innerHTML = modules.map(app => `<a class="nav-link ${app.accent}" href="#${app.id}" data-route="${app.id}">${icon(app.icon)}${app.name}</a>`).join('');
el('future-nav').previousElementSibling.hidden = !future.length;
el('future-nav').innerHTML = future.map(app => `<div class="future-link">${icon(app.icon)}<span>${app.name}</span><span class="future-dot" aria-label="À venir"></span></div>`).join('');
el('module-cards').innerHTML = modules.map(app => `
  <article class="app-card ${app.accent}">
    <div class="card-header"><span class="app-icon">${icon(app.icon)}</span><span class="card-category">${app.category}</span></div>
    <h3>${app.name}</h3><p>${app.description}</p>
    <ul class="features">${app.features.map(item => `<li>${item}</li>`).join('')}</ul>
    <a class="open-app" href="#${app.id}">Ouvrir ${app.name}${icon('arrow')}</a>
  </article>`).join('');

const media = matchMedia('(prefers-color-scheme: dark)');
const mobile = matchMedia('(max-width: 760px)');
const frames = new Map();
let currentRoute = 'accueil';

function mode() {
  return document.documentElement.dataset.theme || (media.matches ? 'dark' : 'light');
}

function sendTheme(record) {
  record.frame.contentWindow?.postMessage({type: 'portail:theme', value: mode()}, record.origin);
}

function applyTheme() {
  const dark = mode() === 'dark';
  el('theme').innerHTML = icon(dark ? 'sun' : 'moon');
  el('theme').title = dark ? 'Activer le mode clair' : 'Activer le mode sombre';
  el('theme').setAttribute('aria-pressed', String(dark));
  for (const record of frames.values()) sendTheme(record);
}

function mount(app) {
  const url = new URL(app.preview);
  const origin = url.origin;
  const loopback = url.protocol === 'http:' && url.hostname === '127.0.0.1';
  const conflict = origin === location.origin || modules.some(other =>
    other !== app && new URL(other.preview).origin === origin);
  const section = document.createElement('section');
  section.className = `module-view ${app.accent}`;
  section.id = `view-${app.id}`;
  section.setAttribute('aria-labelledby', `title-${app.id}`);
  section.innerHTML = `<div class="module-bar">
    <div class="module-identity"><span class="module-icon">${icon(app.icon)}</span><div><h1 id="title-${app.id}">${app.name}</h1><p>${app.detail}</p></div></div>
    <a class="original-link" href="${app.original || app.preview}" target="_blank" rel="noopener noreferrer">${icon('external')}<span>${app.original ? "Ouvrir la source" : "Ouvrir séparément"}</span><span class="sr-only"> dans un nouvel onglet</span></a>
  </div>`;
  el('module-views').append(section);
  if ((url.protocol !== 'https:' && !loopback) || conflict || url.username || url.password) {
    section.insertAdjacentHTML('beforeend', '<p class="unavailable" role="status">L’aperçu nécessite une adresse dédiée à cette application. Le site d’origine reste accessible.</p>');
    return;
  }
  const frame = document.createElement('iframe');
  frame.title = `${app.name} · Application intégrée`;
  frame.setAttribute('sandbox', 'allow-same-origin allow-scripts allow-forms allow-downloads allow-modals allow-popups allow-popups-to-escape-sandbox');
  frame.setAttribute('allow', 'clipboard-write');
  frame.referrerPolicy = 'origin';
  const record = {frame, origin};
  frames.set(app.id, record);
  frame.addEventListener('load', () => sendTheme(record));
  frame.src = url.href;
  section.append(frame);
}

function setMenu(open, restoreFocus = false) {
  el('layout').classList.toggle('menu-open', open);
  el('menu').setAttribute('aria-expanded', String(open));
  el('menu').setAttribute('aria-label', open ? 'Fermer le menu' : 'Ouvrir le menu');
  el('scrim').hidden = !open;
  el('sidebar').inert = mobile.matches && !open;
  if (open) el('sidebar').querySelector('[aria-current="page"]')?.focus();
  if (restoreFocus) el('menu').focus();
}

function navigate({moveFocus = false} = {}) {
  const app = modules.find(item => location.hash === `#${item.id}`);
  currentRoute = app?.id || 'accueil';
  if (app && !el(`view-${app.id}`)) mount(app);
  el('accueil').hidden = Boolean(app);
  for (const view of el('module-views').children) view.hidden = view.id !== `view-${currentRoute}`;
  el('breadcrumb').textContent = app?.name || 'Accueil';
  document.title = app ? `${app.name} · Portail du cabinet` : 'Portail du cabinet';
  for (const link of document.querySelectorAll('[data-route]')) {
    if (link.dataset.route === currentRoute) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  }
  setMenu(false);
  if (moveFocus) el('contenu').focus({preventScroll: true});
}

el('menu').addEventListener('click', () => setMenu(el('menu').getAttribute('aria-expanded') !== 'true'));
el('scrim').addEventListener('click', () => setMenu(false, true));
el('sidebar').addEventListener('click', event => {
  const link = event.target.closest('a');
  if (mobile.matches && link?.hash === location.hash) setMenu(false, true);
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && el('menu').getAttribute('aria-expanded') === 'true') setMenu(false, true);
});
el('theme').addEventListener('click', () => {
  const next = mode() === 'dark' ? 'light' : 'dark';
  document.documentElement.dataset.theme = next;
  try { localStorage.setItem('portail-cabinet.theme', next); } catch {}
  applyTheme();
});
media.addEventListener('change', applyTheme);
mobile.addEventListener('change', () => setMenu(false));
document.querySelector('.skip').addEventListener('click', event => {
  event.preventDefault();
  el('contenu').focus({preventScroll: true});
});
window.addEventListener('hashchange', () => navigate({moveFocus: true}));
applyTheme();
navigate();
