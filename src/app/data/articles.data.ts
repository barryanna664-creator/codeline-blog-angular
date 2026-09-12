import { Article } from '../models/article.model';

export const ARTICLES: Article[] = [
  {
    id: 1,
    titre: 'Comprendre le Data Binding dans Angular',
    categorie: 'Angular',
    auteur: 'Anna Barry',
    dateDeParution: '2026-01-12',
    image: 'https://picsum.photos/seed/angular1/600/400',
    resume: `Interpolation, property binding, event binding et binding bidirectionnel : le tour complet du data binding sous Angular.`,
    contenu: `Le data binding est l'un des piliers d'Angular. Il permet de synchroniser automatiquement les données entre le composant (TypeScript) et la vue (HTML), sans manipulation manuelle du DOM.

On distingue quatre formes principales : l'interpolation avec les doubles accolades pour afficher une valeur, le property binding avec des crochets pour lier une propriété HTML à une donnée du composant, l'event binding avec des parenthèses pour réagir à une action de l'utilisateur, et enfin le binding bidirectionnel avec la syntaxe bananes-dans-une-boîte qui combine les deux sens à la fois, très utile dans les formulaires.

Maîtriser ces mécanismes est essentiel avant d'aborder des notions plus avancées comme les services ou le routage, car ils forment la base de toute interaction entre l'utilisateur et l'application.`
  },
  {
    id: 2,
    titre: 'Les directives structurelles : ngIf, ngFor et ngSwitch',
    categorie: 'Angular',
    auteur: 'Anna Barry',
    dateDeParution: '2026-01-20',
    image: 'https://picsum.photos/seed/angular2/600/400',
    resume: `Comment afficher, masquer ou répéter des éléments du DOM grâce aux directives structurelles.`,
    contenu: `Les directives structurelles modifient la structure du DOM en ajoutant, supprimant ou répétant des éléments. Les trois plus utilisées sont *ngIf, *ngFor et *ngSwitch.

*ngIf permet d'afficher un élément uniquement si une condition est vraie, ce qui est très pratique pour des affichages conditionnels comme un message d'erreur ou un état de chargement.

*ngFor permet d'itérer sur une collection, par exemple un tableau d'articles, afin de générer dynamiquement une liste de cartes à partir des données.

*ngSwitch, moins courant mais tout aussi utile, permet de choisir parmi plusieurs templates selon la valeur d'une expression, un peu comme un switch en programmation classique.`
  },
  {
    id: 3,
    titre: 'Créer une communication parent-enfant avec @Input et @Output',
    categorie: 'Angular',
    auteur: 'Nogaye Diouf',
    dateDeParution: '2026-02-02',
    image: 'https://picsum.photos/seed/angular3/600/400',
    resume: `Le décorateur @Input pour transmettre des données, @Output et EventEmitter pour remonter des événements.`,
    contenu: `Dans une architecture Angular basée sur des composants, il est indispensable de faire communiquer un composant parent avec ses enfants.

Le décorateur @Input permet à un composant parent de transmettre une donnée à un composant enfant, comme un objet article passé à une carte d'affichage.

À l'inverse, le décorateur @Output associé à un EventEmitter permet à un composant enfant de notifier son parent qu'un événement s'est produit, par exemple un clic sur un bouton "lire la suite".

Cette communication à double sens est ce qui permet de construire des interfaces modulaires, où chaque composant reste responsable d'une seule partie de l'affichage tout en restant connecté au reste de l'application.`
  },
  {
    id: 4,
    titre: `Les services et l'injection de dépendances`,
    categorie: 'Architecture',
    auteur: 'Nogaye Diouf',
    dateDeParution: '2026-02-15',
    image: 'https://picsum.photos/seed/angular4/600/400',
    resume: `Pourquoi séparer la logique métier de l'affichage grâce aux services injectables.`,
    contenu: `Un service Angular est une classe dédiée à une tâche précise, comme la récupération ou le traitement de données, indépendamment de l'affichage.

Grâce à l'injection de dépendances, un même service peut être partagé entre plusieurs composants sans qu'il soit nécessaire de le recréer à chaque fois. Il suffit de le déclarer dans le constructeur du composant qui en a besoin.

Cette séparation des responsabilités rend le code plus lisible, plus testable et plus facile à faire évoluer, par exemple en remplaçant plus tard une source de données statique par un appel à une API réelle sans toucher aux composants.`
  },
  {
    id: 5,
    titre: `Le routage Angular : naviguer sans recharger la page`,
    categorie: 'Angular',
    auteur: 'Anna Barry',
    dateDeParution: '2026-02-28',
    image: 'https://picsum.photos/seed/angular5/600/400',
    resume: `Configurer des routes, des paramètres d'URL et naviguer entre les vues avec le RouterModule.`,
    contenu: `Angular est conçu pour construire des Single Page Applications, où la navigation entre les pages se fait sans rechargement complet du navigateur.

Le RouterModule permet de définir un tableau de routes associant une URL à un composant. Il est également possible de définir des routes avec des paramètres, comme /articles/3, afin d'afficher dynamiquement le contenu correspondant à l'identifiant passé dans l'URL.

La directive routerLink dans le template et le service Router dans le code TypeScript permettent respectivement de créer des liens de navigation et de naviguer de façon programmatique, par exemple après la validation d'un formulaire.`
  },
  {
    id: 6,
    titre: 'Formulaires réactifs vs Template-driven : que choisir ?',
    categorie: 'Bonnes pratiques',
    auteur: 'Nogaye Diouf',
    dateDeParution: '2026-03-10',
    image: 'https://picsum.photos/seed/angular6/600/400',
    resume: `Comparaison des deux approches de gestion de formulaires proposées par Angular.`,
    contenu: `Angular propose deux approches pour gérer les formulaires : les formulaires pilotés par le template et les formulaires réactifs.

L'approche template-driven repose principalement sur le binding bidirectionnel avec ngModel directement dans le HTML. Elle convient bien aux formulaires simples, comme un formulaire de contact basique.

L'approche réactive, construite avec FormGroup et FormControl dans le composant TypeScript, offre davantage de contrôle, de validation et de flexibilité, ce qui la rend préférable pour des formulaires complexes ou nécessitant une logique de validation avancée.

Le choix entre les deux dépend donc essentiellement de la complexité du formulaire et du niveau de contrôle souhaité sur les données saisies.`
  }
];
