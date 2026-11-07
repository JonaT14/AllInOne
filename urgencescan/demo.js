(() => {
  const source = 'https://urgencescan-studio.jonathan-tanguy.chatgpt.site/app';
  const accessText = '<p class="formhelp">La connexion et la synchronisation d’équipe sont disponibles sur le site d’origine. Cet aperçu utilise une trousse fictive propre à ce navigateur.</p>';
  const link = `<a class="btn primary live-link" href="${source}" target="_blank" rel="noopener noreferrer">Ouvrir UrgenceScan ↗</a>`;
  const live = () => modal('Espace connecté', accessText + '<div class="dialogactions">' + link + '</div>');
  window.accountDialog = live;
  window.joinDialog = live;
  window.connectionDialog = live;
  window.home = window.exploreDemo;

  document.querySelector('.topright button[onclick="theme()"]')?.remove();
  const cloudNav = document.querySelector('[data-page="cloud"]');
  if (cloudNav) {
    cloudNav.childNodes[cloudNav.childNodes.length - 1].textContent = 'Espace connecté';
    cloudNav.onclick = live;
  }
  window.exploreDemo();
  const note = document.querySelector('.localnote');
  if (note) note.innerHTML = '<strong><span class="dot"></span>Démo locale</strong><br>Trousse fictive indépendante du cabinet.';
})();
