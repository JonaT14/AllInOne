# Portail du cabinet

Prototype local en français. L’aperçu rassemble les interfaces des deux applications publiées, avec un menu commun, un mode clair/sombre.

## Ouvrir sur Mac

Décompresser l’archive, puis ouvrir `ouvrir.command` avec Python 3 installé. Le portail s’ouvre dans le navigateur. Fermer la fenêtre de lancement ou appuyer sur Ctrl+C pour arrêter l’aperçu. Autre possibilité, depuis le dossier décompressé, lancer `python3 apercu.py --ouvrir`.

L’aperçu utilise six adresses privées sur cet ordinateur, sur les ports 8740 à 8745. Utiliser des données fictives pour les essais. La douchette DataMatrix peut fonctionner en mode clavier. « Tester un scan » permet d’explorer le flux sans matériel.

## Périmètre

| Partie | Dans l’aperçu |
| --- | --- |
| Questionnaires | La version web publiée, avec ses 26 questionnaires, parcours et certificats, les calculs, les synthèses et le certificat APA. Les réponses restent en mémoire dans l’onglet et sont effacées au rechargement. Les exports, l’impression et la copie sont des actions explicites. |
| UrgenceScan | L’interface d’origine en mode démo, avec l’inventaire, les échéances, le scan GS1 DataMatrix, les références, l’import/export et les réglages locaux. Les essais de l’équipe et des notifications restent fictifs. |
| UrgenceScan connecté | Le bouton « Ouvrir le site d’origine » mène à l’instance actuelle, avec son authentification et sa propre trousse. Le code serveur et ses migrations sont dans `sources/urgencescan-connecte/`. Le lancement local utilise exclusivement la démo. |

Le module Questionnaires correspond au site publié et à son usage en consultation. Le prototype ne fournit ni lien de collecte patient à distance, ni rattachement automatique à un dossier, ni intégration Odaiji. Les notices d’origine sur la validation des questionnaires sont conservées.

## Structure et hébergement ultérieur

- `portail/` contient la navigation, les cartes, le thème et le registre `modules.js`. Une entrée dans le registre suffit pour déclarer un module doté d’une adresse dédiée. Une application intégrée reste montée lorsqu’on change de rubrique, ce qui conserve la consultation en cours.
- `questionnaires/` et `urgencescan/` sont deux sites statiques autonomes. Ils reprennent les fichiers du site publié ou du dépôt d’origine. Les adaptations portent sur l’intégration visuelle et le mode démo d’UrgenceScan.
- Les dossiers web doivent être servis sur trois origines distinctes. En hébergement, utiliser trois origines HTTPS et reporter leurs adresses dans `portail/modules.js`. Les règles d’encadrement et de permissions sont illustrées dans `apercu.py`. Configurer notamment `frame-src` côté portail et `frame-ancestors` côté modules avec les nouvelles origines. Garder `connect-src 'none'` pour les deux démos et servir les types de fichiers adaptés aux scripts, styles et workers PDF.
- Chaque origine dispose de son propre stockage navigateur. Le portail enregistre uniquement la préférence d’apparence. Le seul message entre le portail et les modules transmet le thème, avec vérification de l’origine et de la fenêtre. Le service local ne propose aucune API de sauvegarde.
- `sources/urgencescan-connecte/` contient le projet Sites d’origine au commit `f09f16ba81c99c55926f5f10105e3bc5ab4b08bf`, avec le guide d’installation, la connexion hébergée, l’API, le schéma et les migrations D1. L’identité de publication de l’original a été retirée de cette copie. Pour remettre l’espace connecté en service ailleurs, prévoir une nouvelle identité de publication, une base indépendante et la configuration de connexion du nouvel environnement. Les notifications nécessitent le raccordement décrit dans le guide source. Aucun compte, inventaire réel, réglage distant ou fichier utilisateur n’est inclus.

Sources d’interface
- [Questionnaires de consultation](https://questionnaires-consultation-jonathan.jonathan-tanguy.chatgpt.site/)
- [UrgenceScan](https://urgencescan-studio.jonathan-tanguy.chatgpt.site/app)


## Modules ajoutés

MedOnym Studio reprend le dépôt JonaT14/medonym-studio au commit f991ac8. OverMed SAOS reprend le fichier praticien fourni. Ces modules servent PDF.js depuis leurs propres fichiers. Le brouillon OverMed et les préférences praticien restent dans le navigateur. Les dossiers JSON existants peuvent être ouverts depuis OverMed.

Le questionnaire sommeil est une adaptation des champs et du codec v1 d’OverMed. Le patient génère un code à remettre au praticien. Ce code encode les réponses et reste lisible par un logiciel compatible, il doit être traité comme une donnée sensible. Il n’y a pas de soumission serveur.

Pour une mise en ligne du questionnaire seul, le dossier `sommeil/` peut être servi comme site statique HTTPS. L’hébergement du portail complet nécessite les origines des modules dans `portail/modules.js` et les règles d’encadrement correspondantes. Prévoir une authentification et une architecture adaptée avant un usage réel en équipe. L’aperçu local est réservé aux données fictives.
