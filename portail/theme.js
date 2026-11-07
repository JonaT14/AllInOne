try {
  const preference = localStorage.getItem('portail-cabinet.theme');
  if (preference === 'dark' || preference === 'light') document.documentElement.dataset.theme = preference;
} catch {
  // The operating system preference remains available through CSS.
}
