# CodeLine — Blog Angular

Projet réalisé dans le cadre du cours **Technologie Web 3** (Licence 1 Informatique).
Site vitrine statique développé avec **Angular** (dernière version stable), sans base de données ni API externe.

## Thème choisi

**CodeLine** est un blog étudiant consacré au développement web, présentant des articles pédagogiques sur Angular et les bonnes pratiques front-end.

## Binôme

| Nom | Rôle |
|---|---|
| Anna Barry | Composants, service et données (navbar, footer, article-card, modèle, service) |
| Nogaye Diouf | Pages et routage (accueil, détail d'article, à propos, contact) |

## Fonctionnalités

- **Page d'accueil** : liste des articles générée dynamiquement à partir d'un tableau de données statiques, avec filtre par catégorie.
- **Page de détail** (`/articles/:id`) : contenu complet d'un article, récupéré via un paramètre d'URL.
- **Page « À propos »** : présentation du site et du binôme.
- **Page « Contact »** : formulaire (non connecté à un serveur) utilisant le binding bidirectionnel (`ngModel`).
- **Barre de navigation** et **pied de page** communs, réutilisés sur toutes les pages via des composants partagés.
- Données statiques définies dans `src/app/data/articles.data.ts`.

## Notions Angular mises en œuvre

- Composants (navbar, footer, article-card, pages)
- Data binding : interpolation, property binding, event binding, binding bidirectionnel (`[(ngModel)]`)
- Directives structurelles : `*ngIf`, `*ngFor`
- Communication entre composants avec `@Input`
- Service injectable (`ArticleService`) et injection de dépendances
- Routage avec `provideRouter`, `routerLink`, `routerLinkActive` et paramètres d'URL (`ActivatedRoute`)

## Lancer le projet en local

```bash
npm install
ng serve
```

Puis ouvrir http://localhost:4200 dans le navigateur.

## Déploiement (bonus)

Lien du site déployé sur Firebase Hosting : *(à compléter après déploiement)*