(() => {
  let portalOrigin;
  try { portalOrigin = new URL(document.referrer).origin; } catch { return; }
  if (window.parent === window || portalOrigin === location.origin) return;

  const legacy = document.currentScript.dataset.legacy === 'true';
  window.addEventListener('message', event => {
    if (event.source !== window.parent || event.origin !== portalOrigin) return;
    const {type, value} = event.data || {};
    if (type !== 'portail:theme' || (value !== 'light' && value !== 'dark')) return;
    document.documentElement.dataset.theme = value;
    if (legacy) document.documentElement.classList.toggle('dark', value === 'dark');
  });
})();
