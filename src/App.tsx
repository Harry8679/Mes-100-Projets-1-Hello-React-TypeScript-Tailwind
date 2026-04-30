// ============================================================================
// PROJET 01 — HELLO REACT
// Concepts clés : JSX, composant fonctionnel, props, typage TypeScript, Tailwind
// ============================================================================


// ┌──────────────────────────────────────────────────────────────────────────┐
// │  COMPOSANT 1 — Header                                                    │
// │  Affiche la barre supérieure avec le logo à gauche et un texte à droite. │
// └──────────────────────────────────────────────────────────────────────────┘

// Déclaration d'un composant fonctionnel : c'est juste une fonction JS/TS.
// RÈGLE ABSOLUE React : la première lettre du nom DOIT être en majuscule,
// sinon React le confond avec une balise HTML native (ex: <header>).
function Header() {
  // Tout composant React DOIT retourner du JSX (ou null).
  // Les parenthèses après `return` permettent d'écrire le JSX sur plusieurs lignes.
  // ⚠️ Sans elles, JavaScript insère un `;` après return → retour à undefined (bug silencieux).
  return (
    // <header> = balise sémantique HTML5 (bon pour SEO et accessibilité).
    // En JSX on écrit `className` et PAS `class` car `class` est un mot-clé réservé en JS.
    // Classes Tailwind :
    //   bg-slate-900       → fond gris très foncé (presque noir)
    //   text-white         → couleur du texte blanche
    //   px-8               → padding horizontal de 2rem (32px)
    //   py-6               → padding vertical de 1.5rem (24px)
    //   flex               → active CSS Flexbox
    //   items-center       → aligne verticalement les enfants au centre
    //   justify-between    → premier enfant à gauche, dernier à droite
    <header className="bg-slate-900 text-white px-8 py-6 flex items-center justify-between">
      {/* Premier enfant flex : "logo" à gauche.
          text-xl = 1.25rem (20px) | font-bold = poids 700 | tracking-tight = lettres resserrées */}
      <span className="text-xl font-bold tracking-tight">React TS</span>

      {/* Deuxième enfant flex : texte secondaire à droite.
          text-slate-400 = gris clair (moins visible) | text-sm = 0.875rem (14px) */}
      <span className="text-slate-400 text-sm">Projet 01</span>
    </header>
    // ⚠️ En JSX, toute balise ouverte DOIT être fermée (même <img> → <img />).
  );
}


// ┌──────────────────────────────────────────────────────────────────────────┐
// │  COMPOSANT 2 — Hero                                                      │
// │  Section principale d'accroche avec un badge, un titre et un sous-titre. │
// └──────────────────────────────────────────────────────────────────────────┘

function Hero() {
  return (
    // <section> = balise sémantique HTML5 pour regrouper du contenu thématique.
    // flex flex-col       → flexbox vertical (les enfants s'empilent en colonne)
    // items-center        → centre les enfants horizontalement (axe transverse en flex-col)
    // justify-center      → centre les enfants verticalement (axe principal en flex-col)
    // min-h-[60vh]        → hauteur minimum = 60% du viewport. Les crochets [...]
    //                       permettent une "arbitrary value" (valeur arbitraire Tailwind).
    // gap-6               → espace de 1.5rem entre chaque enfant flex
    // px-4                → padding horizontal de 1rem
    // text-center         → texte aligné au centre
    <section className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4 text-center">

      {/* Badge décoratif "pilule" au-dessus du titre.
          inline-block       → comportement bloc tout en restant aligné au flux
          bg-emerald-100     → fond vert très pâle
          text-emerald-700   → texte vert foncé (bon contraste avec le fond clair)
          text-xs            → 0.75rem (12px), très petit
          font-semibold      → poids 600
          px-3 py-1          → padding compact
          rounded-full       → coins arrondis à fond → forme de pilule
          uppercase          → texte en MAJUSCULES
          tracking-widest    → letter-spacing très large (style "tagline") */}
      <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
        Hello React
      </div>

      {/* Titre principal h1 (un seul h1 par page idéalement, pour le SEO).
          text-5xl         → 3rem (48px), très gros titre
          font-black       → poids 900 (le plus gras possible)
          text-slate-900   → quasi noir
          leading-tight    → line-height resserrée (1.25)
          max-w-xl         → largeur max de 36rem (limite la longueur des lignes) */}
      <h1 className="text-5xl font-black text-slate-900 leading-tight max-w-xl">
        Bienvenue dans ton premier{' '}
        {/*  ↑ {' '}
            JSX compresse les espaces entre balises. Pour FORCER un espace
            entre "premier" et le <span> qui suit, on insère une expression JS
            contenant un espace littéral : `{' '}`.
            Sans ça, on lirait : "ton premiercomposant" (collé). */}

        {/* <span> avec une couleur différente pour mettre le mot en valeur.
            text-emerald-500 = vert vif (couleur d'accent du design) */}
        <span className="text-emerald-500">composant</span>
      </h1>

      {/* Paragraphe descriptif sous le titre.
          text-slate-500 → gris moyen (texte secondaire)
          text-lg        → 1.125rem (18px), légèrement plus grand qu'un texte normal
          max-w-md       → largeur max de 28rem (lisibilité optimale ~ 60-70 caractères) */}
      <p className="text-slate-500 text-lg max-w-md">
        JSX · Composant fonctionnel · TypeScript · Tailwind v4
      </p>
    </section>
  );
}


// ┌──────────────────────────────────────────────────────────────────────────┐
// │  TYPAGE TYPESCRIPT — CardProps                                           │
// │  On définit la "forme" des props que le composant Card doit recevoir.    │
// └──────────────────────────────────────────────────────────────────────────┘

// `type` = alias de type TypeScript. On définit un objet avec 3 propriétés
// obligatoires, toutes de type string.
// On pourrait aussi écrire `interface CardProps { ... }` — les deux fonctionnent.
// Convention : on suffixe par "Props" pour les props d'un composant.
type CardProps = {
  emoji: string;        // L'emoji affiché en haut de la carte (ex: "⚛️")
  title: string;        // Le titre de la carte (ex: "JSX")
  description: string;  // La description sous le titre
};


// ┌──────────────────────────────────────────────────────────────────────────┐
// │  COMPOSANT 3 — Card (RÉUTILISABLE)                                       │
// │  Carte qui affiche un emoji, un titre et une description.                │
// │  Premier composant qui reçoit des PROPS → premier composant générique.   │
// └──────────────────────────────────────────────────────────────────────────┘

// Deux choses se passent dans la signature :
//   1) DESTRUCTURATION : on extrait directement `emoji`, `title`, `description`
//      de l'objet props passé en argument. Équivalent long :
//          function Card(props: CardProps) {
//            const { emoji, title, description } = props;
//            ...
//          }
//   2) ANNOTATION DE TYPE : `: CardProps` indique à TypeScript que les props
//      DOIVENT respecter la forme définie plus haut. Si tu oublies une prop
//      ou que tu la mets au mauvais type, TS te crie dessus à la compilation.
function Card({ emoji, title, description }: CardProps) {
  return (
    // Conteneur de la carte :
    //   bg-white                  → fond blanc
    //   rounded-2xl               → coins arrondis (1rem)
    //   border border-slate-200   → bordure 1px gris très clair
    //   p-6                       → padding intérieur de 1.5rem partout
    //   flex flex-col gap-3       → flexbox vertical avec 0.75rem entre les enfants
    //   shadow-sm                 → légère ombre portée
    //   hover:shadow-md           → au SURVOL (état :hover en CSS), ombre plus marquée
    //   transition-shadow         → animation CSS douce sur le changement d'ombre
    <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">

      {/* On AFFICHE la valeur de la prop `emoji` en l'interpolant entre {}.
          Les accolades en JSX = "expression JavaScript". Tu peux y mettre
          n'importe quelle expression : variable, calcul, ternaire, fonction...
          text-3xl = 1.875rem (30px), pour un emoji bien visible */}
      <span className="text-3xl">{emoji}</span>

      {/* Affichage du titre via la prop `title`.
          h2 = niveau 2 hiérarchique (sous le h1 du Hero) */}
      <h2 className="font-bold text-slate-900">{title}</h2>

      {/* Affichage de la description via la prop `description`.
          leading-relaxed = line-height de 1.625 → meilleure lisibilité */}
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}


// ┌──────────────────────────────────────────────────────────────────────────┐
// │  COMPOSANT 4 — ConceptsGrid                                              │
// │  Grille qui affiche 3 cartes Card avec des props différentes.            │
// │  Démontre la RÉUTILISATION d'un composant.                               │
// └──────────────────────────────────────────────────────────────────────────┘

function ConceptsGrid() {
  return (
    // max-w-4xl mx-auto    → largeur max de 56rem, centré horizontalement (mx-auto)
    // px-6                 → padding horizontal de 1.5rem
    // pb-20                → padding bottom de 5rem (espace en bas de page)
    // grid grid-cols-1     → CSS Grid, 1 colonne par défaut (mobile-first)
    // sm:grid-cols-2       → à partir de 640px, on passe à 2 colonnes
    // lg:grid-cols-3       → à partir de 1024px, on passe à 3 colonnes
    // gap-4                → espace de 1rem entre les éléments de la grille
    //
    // 💡 Pattern MOBILE-FIRST de Tailwind : on écrit le style mobile sans préfixe,
    //    puis on ajoute des préfixes (sm:, md:, lg:, xl:) pour les écrans plus larges.
    <section className="max-w-4xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">

      {/* Première instance du composant Card.
          On passe 3 props comme des "attributs HTML", mais ce sont en réalité
          des arguments de fonction. TypeScript vérifie qu'elles correspondent
          au type CardProps : si tu oublies "description" ou tu écris "descrption"
          (faute de frappe), TS te crie dessus à la COMPILATION (pas en prod). */}
      <Card
        emoji="⚛️"
        title="JSX"
        description="Syntaxe qui ressemble à HTML mais qui est compilée en React.createElement()."
      />

      {/* Deuxième instance du MÊME composant Card avec d'autres props.
          C'est ça la magie de React : un composant = un moule que tu peux
          réutiliser à l'infini. Si demain tu modifies Card, les 3 cartes sont
          mises à jour automatiquement. */}
      <Card
        emoji="🧩"
        title="Composant"
        description="Une fonction qui retourne du JSX. La première lettre doit être en majuscule."
      />

      {/* Troisième instance. */}
      <Card
        emoji="🛡️"
        title="TypeScript"
        description="On type les props avec type ou interface — jamais de any."
      />
    </section>
  );
}


// ┌──────────────────────────────────────────────────────────────────────────┐
// │  COMPOSANT 5 — App (composant racine)                                    │
// │  Assemble tous les autres composants. C'est le point d'entrée de l'UI.   │
// └──────────────────────────────────────────────────────────────────────────┘

// Par convention, le composant racine d'une app React s'appelle TOUJOURS `App`.
// C'est lui qu'on importe dans `main.tsx` pour le monter dans le DOM.
function App() {
  return (
    // Wrapper global de l'application.
    //   min-h-screen   → hauteur minimum = 100% du viewport (toujours plein écran)
    //   bg-slate-50    → fond gris très clair, presque blanc (cohérent avec le design)
    <div className="min-h-screen bg-slate-50">
      {/* On UTILISE les composants définis plus haut comme des "balises perso".
          Syntaxe auto-fermante <Header /> car ils ne reçoivent pas de children.
          C'est la COMPOSITION : un composant en contient d'autres
          (comme des poupées russes, ou des LEGO qui s'emboîtent). */}
      <Header />
      <Hero />
      <ConceptsGrid />
    </div>
  );
}


// ┌──────────────────────────────────────────────────────────────────────────┐
// │  EXPORT                                                                  │
// └──────────────────────────────────────────────────────────────────────────┘

// `export default` = export par défaut du module.
// Permet de l'importer SANS accolades dans main.tsx :
//     import App from './App';        ✅ (default export)
// Si on avait fait `export { App }`, il faudrait écrire :
//     import { App } from './App';    (named export, avec accolades)
// Convention React : un fichier de composant utilise toujours `export default`
// pour le composant principal.
export default App;