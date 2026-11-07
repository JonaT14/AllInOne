// Each app runs on its own origin. Use distinct HTTPS origins for hosted previews.
export const modules = [
  {
    id: 'questionnaires',
    name: 'Questionnaires',
    category: 'PRÉPARATION DE CONSULTATION',
    icon: 'clipboard',
    accent: 'blue',
    description: 'Retrouvez les questionnaires, les scores et les parcours de consultation, avec une synthèse à la fin du bilan.',
    features: ['Questionnaires et scores', 'Parcours patients', 'Synthèse'],
    detail: 'Réponses en mémoire dans cet onglet',
    preview: 'http://127.0.0.1:8741/',
    original: 'https://questionnaires-consultation-jonathan.jonathan-tanguy.chatgpt.site/',
  },
  {
    id: 'urgencescan',
    name: 'UrgenceScan',
    category: 'GESTION DE LA TROUSSE',
    icon: 'kit',
    accent: 'green',
    description: 'Suivez les lots et les dates de péremption de la trousse. Ajoutez des produits par scan et explorez les accès d’équipe.',
    features: ['Inventaire', 'Scan DataMatrix', 'Péremptions'],
    detail: 'Trousse fictive · Stockage local séparé',
    preview: 'http://127.0.0.1:8742/',
    original: 'https://urgencescan-studio.jonathan-tanguy.chatgpt.site/app',
  },
  {'id': 'medonym', 'name': 'MedOnym Studio', 'category': 'PSEUDONYMISATION', 'icon': 'lock', 'accent': 'green', 'description': 'Préparez un texte ou un PDF et restaurez les balises lors du retour IA.', 'features': ['Import PDF / TXT', 'Pseudonymisation', 'Retour IA'], 'detail': 'Texte et correspondances en mémoire', 'preview': 'http://127.0.0.1:8743/', 'original': 'https://github.com/JonaT14/medonym-studio'},
  {'id': 'saos', 'name': 'OverMed SAOS', 'category': 'ESPACE PRATICIEN', 'icon': 'pulse', 'accent': 'blue', 'description': 'Conduisez la consultation, récupérez les réponses patient et préparez le compte rendu.', 'features': ['Dossier de consultation', 'Import du code patient', 'Polygraphie'], 'detail': 'Brouillon conservé dans le navigateur', 'preview': 'http://127.0.0.1:8744/'},
  {'id': 'sommeil', 'name': 'Questionnaire sommeil', 'category': 'ESPACE PATIENT', 'icon': 'clipboard', 'accent': 'green', 'description': 'Remplissez le questionnaire de sommeil et remettez le code de réponses au praticien.', 'features': ['Sommeil', 'Epworth', 'Code patient'], 'detail': 'Formulaire patient séparé', 'preview': 'http://127.0.0.1:8745/'},
];

export const future = [];
