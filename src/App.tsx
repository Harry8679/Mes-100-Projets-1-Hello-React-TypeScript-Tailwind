function Header() {
  return (
    <header className="bg-slate-900 text-white px-8 py-6 flex items-center justify-between">
      <span className="text-xl font-bold tracking-tight">React TS</span>
      <span className="text-slate-400 text-sm">Projet 01</span>
    </header>
  );
}

function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[60vh] gap-6 px-4 text-center">
      <div className="inline-block bg-emerald-100 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full uppercase tracking-widest">
        Hello React
      </div>
      <h1 className="text-5xl font-black text-slate-900 leading-tight max-w-xl">
        Bienvenue dans ton premier{' '}
        <span className="text-emerald-500">composant</span>
      </h1>
      <p className="text-slate-500 text-lg max-w-md">
        JSX · Composant fonctionnel · TypeScript · Tailwind v4
      </p>
    </section>
  );
}

type CardProps = {
  emoji: string;
  title: string;
  description: string;
};

function Card({ emoji, title, description }: CardProps) {
  return (
    <div className="bg-white rounded-2xl border border-slate-200 p-6 flex flex-col gap-3 shadow-sm hover:shadow-md transition-shadow">
      <span className="text-3xl">{emoji}</span>
      <h2 className="font-bold text-slate-900">{title}</h2>
      <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

function ConceptsGrid() {
  return (
    <section className="max-w-4xl mx-auto px-6 pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <Card
        emoji="⚛️"
        title="JSX"
        description="Syntaxe qui ressemble à HTML mais qui est compilée en React.createElement()."
      />
      <Card
        emoji="🧩"
        title="Composant"
        description="Une fonction qui retourne du JSX. La première lettre doit être en majuscule."
      />
      <Card
        emoji="🛡️"
        title="TypeScript"
        description="On type les props avec type ou interface — jamais de any."
      />
    </section>
  );
}

function App() {
  return (
    <div className="min-h-screen bg-slate-50">
      <Header />
      <Hero />
      <ConceptsGrid />
    </div>
  );
}

export default App;