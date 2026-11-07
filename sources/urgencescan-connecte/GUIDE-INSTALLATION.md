# UrgenceScan — architecture centralisée

## Parcours utilisateur

- La landing page et la démo restent publiques.
- « Créer mon espace » et « Se connecter » ouvrent la connexion hébergée du site.
- Le visiteur peut utiliser les méthodes proposées par son compte ChatGPT, notamment Google, Apple, Microsoft ou son e-mail.
- À la première connexion, UrgenceScan crée automatiquement son cabinet et lui attribue le rôle de propriétaire.
- Aucune URL, clé Supabase ou configuration Cloud n’est demandée.

## Données et sécurité

La version publiée utilise une base D1 liée au Site. Les écritures passent exclusivement par des routes serveur authentifiées. L’identifiant technique fourni par l’hébergeur sert de clé durable ; l’adresse e-mail sert à l’affichage et à vérifier les invitations.

Les tables contiennent uniquement :

- comptes UrgenceScan ;
- cabinets et droits des membres ;
- inventaires et trente versions précédentes ;
- invitations à usage unique valables sept jours ;
- préférences de notification.

UrgenceScan ne doit contenir aucune donnée patient. Les rôles `owner`, `admin`, `editor` et `viewer` sont vérifiés côté serveur. Un lecteur ne peut pas modifier l’inventaire. Une invitation n’est acceptée que si l’adresse du compte connecté correspond à l’adresse invitée.

## Démo et sauvegarde

La démo reste dans le navigateur et ne nécessite pas de compte. Après connexion, l’inventaire partagé est chargé depuis la base centrale et chaque modification est sauvegardée automatiquement. L’import et l’export JSON restent disponibles.

La suppression du compte est proposée dans « Mon espace ». Lorsque le propriétaire est seul, son cabinet est également supprimé. S’il existe d’autres membres, un transfert de propriété doit être réalisé avant la suppression.

## Équipe

Le propriétaire ou un administrateur renseigne le nom, l’adresse e-mail, le métier et les droits, puis transmet le code `US3-…`. Le destinataire se connecte avec l’adresse invitée et saisit ce code dans « J’ai un code équipe ».

## Notifications

Les préférences e-mail et Telegram sont enregistrées avec le compte. L’envoi automatique nécessite encore le raccordement d’un fournisseur d’e-mail, d’un bot Telegram et d’une tâche planifiée. L’interface l’indique explicitement et ne simule aucun envoi.

## Déploiement

La version complète est un Site dynamique : elle utilise l’authentification hébergée, des routes serveur et D1. Le pipeline Sites applique les migrations présentes dans `drizzle/` puis déploie le Worker.

Le fichier `dist/index.html` reste utile comme démonstration autonome ou archive, mais un dépôt purement statique sur Netlify ne peut pas fournir l’authentification, le partage d’équipe ou la synchronisation centrale. Pour Netlify, il faudrait ajouter Netlify Functions et une base distante compatible ; la publication Sites est donc la version de référence.

## Vérifications techniques

```sh
python3 scripts/assemble.py
node --check source/central.js
npx tsc --noEmit
npm run db:generate
npm run build
node --test scripts/import.test.mjs supabase/functions/expiry-alerts/logic.test.mjs
```
