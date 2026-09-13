---
trigger: always_on
---

# Izi Facture - Design System ("Notion Style")

Cette règle définit strictement le design system à appliquer pour tout nouveau composant ou page de l'application `izi facture`. L'objectif est de conserver une interface ultra-propre, légère, minimaliste et très professionnelle, inspirée du style de Notion.

## 1. Principes Fondamentaux
- **Minimalisme** : Beaucoup d'espace blanc, des bordures très fines et douces, pas de couleurs criardes (sauf pour les badges de statut).
- **Cartes et Conteneurs** : Coins très arrondis (`rounded-2xl`), fond blanc (`bg-white`), bordures grises claires (`border-gray-200`), ombres très subtiles (`shadow-sm`).
- **Typographie (Inter)** :
  - Titres principaux : `font-bold tracking-tight text-gray-900`
  - Valeurs/Chiffres importants : `font-semibold text-gray-900`
  - Textes secondaires/Labels : `font-medium text-gray-500`
- **Fond de page** : Gris ultra-clair (défini par `--background` dans `globals.css` : `hsl(210 40% 98%)`).

## 2. Composants Standards (Code Snippets)

### 2.1. Les Cartes (Cards)
Toute carte de donnée ou de formulaire doit suivre cette structure exacte :
```tsx
<Card className="border border-gray-200 shadow-sm rounded-2xl bg-white hover:shadow-md transition-all duration-300 hover:-translate-y-1">
  <div className="p-5 sm:p-6">
    {/* Contenu */}
  </div>
</Card>
```
*Note : Le padding doit toujours être responsive (`p-5 sm:p-6`) pour s'adapter aux mobiles.*

### 2.2. Les Tableaux
Les tableaux doivent être enveloppés pour permettre le défilement horizontal sur mobile sans casser l'interface :
```tsx
<div className="w-full overflow-x-auto">
  <div className="rounded-xl border border-gray-200 overflow-hidden min-w-[600px] shadow-sm">
    <Table>
      <TableHeader className="bg-gray-50/80">
        <TableRow className="hover:bg-transparent border-gray-200">
          <TableHead className="font-semibold text-gray-600 h-11">En-tête</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow className="hover:bg-gray-50/50 border-gray-100 transition-colors">
          <TableCell className="font-medium text-gray-900 py-3.5">Donnée</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </div>
</div>
```

### 2.3. Les Badges de Statut
Utilisez des fonds très clairs (ex: `bg-green-50`) et des textes foncés (`text-green-700`) avec des bordures transparentes ou très légères (`border-green-200/50`). Ne jamais utiliser de couleurs pures saturées.

## 3. Micro-Animations et Interactions

### 3.1. Apparition au chargement (Load)
Chaque bloc ou carte sur une page doit apparaître avec une animation fluide de bas en haut :
Ajoutez les classes suivantes au conteneur :
`animate-in fade-in slide-in-from-bottom-4 fill-mode-both duration-500`
Pour les listes de cartes, utilisez un `animationDelay` calculé : `style={{ animationDelay: \`${index * 150}ms\` }}`.

### 3.2. Survol (Hover)
Les éléments interactifs (cartes, boutons, lignes de tableau) doivent réagir au survol de manière douce :
- **Cartes** : `hover:shadow-md transition-all duration-300 hover:-translate-y-1`
- **Lignes de tableau** : `hover:bg-gray-50/50 transition-colors`
- **Boutons secondaires** : `bg-gray-50 hover:bg-gray-100 transition-colors border border-gray-200`

## 4. Chargement et Skeleton Loaders (Obligatoire)
Chaque composant asynchrone ou affichant de la donnée DOIT posséder un Skeleton Loader associé (ex: `<FactureFormSkeleton />`).
- Utilisez le composant `Skeleton` existant (`animate-pulse bg-muted rounded-md`).
- Enveloppez le composant principal dans un `<Suspense fallback={<MonSkeleton />}>`.
- Si le chargement est synchrone (données mockées temporaires), simulez un délai pour afficher l'animation : `await new Promise(r => setTimeout(r, 800));`.

## 5. Responsivité Mobile
- **Grilles** : Toujours empiler sur mobile (`grid-cols-1`) et étendre sur desktop (`md:grid-cols-2 lg:grid-cols-4`).
- **Paddings** : Privilégiez `p-4 sm:p-6` ou `p-5 sm:p-6`.
- **Textes longs** : Utilisez `truncate` ou `break-words` pour éviter le débordement horizontal.
- **Tableaux** : Toujours utiliser `overflow-x-auto` sur un conteneur parent.

# DIRECTIVE STRICTE
Lors de la création de nouvelles pages (comme `invoices/new` ou le formulaire de facturation), ce design system s'applique obligatoirement. Il ne doit pas y avoir de déviation vers les styles par défaut de Shadcn UI si ceux-ci contredisent ce style Notion (notamment sur les bordures et les ombres).