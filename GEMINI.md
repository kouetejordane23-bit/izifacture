---
name: Izi Facture Project Guidelines
description: Documentation complète, architecture et directives pour le projet Izi Facture
---

# 🚀 Izi Facture - Project Documentation & AI Guidelines

Ce fichier sert de point de référence absolu pour tout développeur ou modèle IA (Gemini/Antigravity) travaillant sur le projet **Izi Facture**. Il doit être consulté systématiquement pour comprendre le contexte, l'architecture et les règles de design de l'application.

## 📝 1. Ce que fait l'application (Vision)
**Izi Facture** est un SaaS de facturation full-stack destiné aux entrepreneurs et freelances. L'objectif principal est d'offrir une plateforme ultra-rapide, épurée et très professionnelle pour la création, la gestion et le suivi des factures, ainsi que la gestion du répertoire client.

## ✨ 2. Fonctionnalités implémentées (Phase 2)
- **Tableau de bord (Dashboard)** : Résumé financier (CA, factures en attente, impayés) et aperçu des dernières factures avec des animations fluides.
- **Gestion des Factures** :
  - **Création (`/invoices/new`)** : Formulaire avancé avec Live Preview (aperçu en temps réel façon "document papier"). Calcul automatique des totaux, de la TVA (18%) et des remises.
  - **Liste (`/invoices`)** : Tableau de suivi avec filtres par statut et recherche.
  - **Détails (`/invoices/[id]`)** : Visualisation complète d'une facture spécifique avec barre d'actions.
- **Gestion des Clients (`/customers`)** : Répertoire complet avec formulaire d'ajout/modification sous forme de Modale pop-up.
- **Catalogue de Services (`/services`)** : Gestion des tarifs et prestations de l'entreprise.
- **Rapports & Analyses (`/reports`)** : Tableau de bord analytique (graphiques interactifs et statistiques clés).
- **Paramètres (`/settings`)** : Configuration du profil entreprise et devise.
- **Support (`/support`)** : Accès rapide à la base de connaissances et au contact.

## 📁 3. Structure des fichiers clés
Le projet utilise le routeur App de Next.js 14 (`src/app`).
```text
/src
  /app
    /(app)                # Routes authentifiées avec layout commun (Sidebar + Header global)
      /dashboard          # Page d'accueil (KPIs)
      /invoices           # Pages Factures (Liste, Nouveau, Détails)
      /customers          # Page Clients (Tableau + Modale d'édition)
      /services           # Catalogue de services
      /reports            # Rapports et statistiques
      /settings           # Paramètres de l'entreprise
      /support            # Aide et support
    layout.tsx            # Layout racine
    globals.css           # Styles globaux (Variables HSL Notion-style)
  /components
    /dashboard            # Composants spécifiques au Dashboard
    /layout               # Sidebar, Header global avec barre de recherche, Mobile Nav
    /ui                   # Composants génériques (Card, Table, StatusBadge)
  /lib
    /mock-data            # Données fictives (index.ts) centralisant Invoices, Customers
    /utils                # Fonctions utilitaires (formatage de devises, dates)
/.agents
  /rules                  # Règles Antigravity (ex: design-system.md)
```

## 🛠️ 4. Technologies utilisées
- **Framework** : Next.js 14 (App Router, Server Components & Client Components).
- **Langage** : TypeScript.
- **Styling** : Tailwind CSS, avec des classes utilitaires directes (sans dépendance forte à des librairies UI externes).
- **Icônes** : `lucide-react`.

## 🎨 5. Décisions de Design (Le "Notion Style")
Le design de l'application est soumis à des règles strictes définies également dans `.agents/rules/design-system.md` :
- **Minimalisme et Professionnalisme** : Interface très claire, utilisant beaucoup d'espace blanc.
- **Couleurs** : Fond global très clair (`hsl(210 40% 98%)`), textes en nuances de gris (`gray-900` pour l'important, `gray-500` pour le secondaire). Les couleurs vives sont réservées aux badges de statut (fonds pastel, texte foncé).
- **Bordures et Ombres** : Les cartes utilisent `rounded-2xl`, `border-gray-200` et `shadow-sm`.
- **Animations (Micro-interactions)** : Apparition des éléments en cascade au chargement (`animate-in fade-in slide-in-from-bottom-4 duration-500`), élévation légère au survol des cartes (`hover:-translate-y-1 hover:shadow-md`).
- **Top Header** : Barre de recherche persistante (raccourci `⌘K`) et bouton de notifications en haut à droite avec fond `backdrop-blur`.

## 🤖 6. Instructions pour les futurs modèles IA (Règles Strictes)
Lors de futures interventions sur cette base de code, vous **DEVEZ** respecter les règles suivantes :
1. **Respect absolu du Design System** : Ne jamais introduire de styles lourds, de boutons carrés ou de couleurs criardes. Suivre aveuglément les principes du "Notion Style" définis plus haut. Les formulaires doivent avoir des bordures douces et une légère ombre au focus.
2. **Skeletons (Loaders)** : Tout composant asynchrone (ex: requêtes BDD futures) doit inclure un `<Skeleton />` et être wrappé dans un `<Suspense>`.
3. **Responsivité** : Assurez-vous que les tableaux sont toujours enveloppés dans des `overflow-x-auto` pour éviter de casser l'interface mobile, et que les grilles passent en `grid-cols-1`.
4. **Gestion de Mémoire (Contrainte Environnement)** : Sur cet environnement Windows, évitez l'utilisation répétée de commandes gourmandes comme `npx shadcn-ui@latest add` car cela provoque des erreurs `JavaScript heap out of memory`. Construisez vos composants UI manuellement avec Tailwind.
5. **Composants Client vs Serveur** : Privilégiez les composants serveurs. Utilisez `"use client"` uniquement lorsque cela est strictement nécessaire (interactions de formulaire, états React).
