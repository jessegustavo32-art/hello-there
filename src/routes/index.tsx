import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { Clock, Search } from "lucide-react";
import hero from "@/assets/hero.jpg";
import { CATEGORIES, filterRecipes, recipes } from "@/data/recipes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Receitas da Casa — Receitas fáceis, feitas com carinho" },
      { name: "description", content: "Receitas caseiras brasileiras com ingredientes, medidas e modo de preparo completo." },
      { property: "og:title", content: "Receitas da Casa" },
      { property: "og:description", content: "Receitas fáceis, feitas com carinho." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState<string>("Todas");
  const list = filterRecipes(recipes, query, category);

  return (
    <div className="min-h-screen bg-background">
      <header className="mx-auto flex max-w-6xl items-center px-4 py-5">
        <span className="font-display text-2xl font-semibold text-primary">Receitas da Casa</span>
      </header>

      <main>
        <section className="mx-auto grid max-w-6xl items-center gap-8 px-4 pb-12 pt-4 md:grid-cols-2 md:pb-20">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-primary">Cozinha de casa</p>
            <h1 className="font-display text-4xl font-semibold leading-tight text-foreground md:text-6xl">
              Receitas fáceis, feitas com carinho
            </h1>
            <p className="mt-4 max-w-md text-lg text-muted-foreground">
              Pratos do dia a dia com medidas certinhas e passo a passo completo.
            </p>
            <a href="#receitas" className="mt-6 inline-flex rounded-full bg-primary px-6 py-3 font-semibold text-primary-foreground transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              Ver receitas
            </a>
          </div>
          <img src={hero} alt="Mesa posta com arroz, feijão, couve e laranjas" width={1600} height={1008}
            className="aspect-[4/3] w-full rounded-3xl object-cover shadow-xl" />
        </section>

        <section id="receitas" className="bg-secondary/60 py-12 md:py-16" aria-labelledby="titulo-receitas">
          <div className="mx-auto max-w-6xl px-4">
            <h2 id="titulo-receitas" className="font-display text-3xl font-semibold text-foreground">Nossas receitas</h2>

            <div className="mt-6 flex flex-col gap-4">
              <label className="relative block max-w-md">
                <span className="sr-only">Buscar receita por nome</span>
                <Search className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" aria-hidden />
                <input type="search" value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar por nome…"
                  className="w-full rounded-full border border-input bg-card py-3 pl-12 pr-4 text-foreground outline-none focus:ring-2 focus:ring-ring" />
              </label>
              <div className="flex flex-wrap gap-2" role="group" aria-label="Filtrar por categoria">
                {CATEGORIES.map((c) => (
                  <button key={c} type="button" onClick={() => setCategory(c)} aria-pressed={category === c}
                    className={`rounded-full border px-4 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring ${category === c ? "border-primary bg-primary text-primary-foreground" : "border-border bg-card text-foreground hover:bg-accent"}`}>
                    {c}
                  </button>
                ))}
              </div>
            </div>

            <p className="mt-6 text-sm text-muted-foreground" aria-live="polite">
              {list.length} {list.length === 1 ? "receita encontrada" : "receitas encontradas"}
            </p>

            {list.length === 0 ? (
              <p className="mt-8 rounded-2xl bg-card p-8 text-center text-muted-foreground">Nenhuma receita encontrada. Tente outra busca ou categoria.</p>
            ) : (
              <ul className="mt-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((r) => (
                  <li key={r.slug} className="flex flex-col overflow-hidden rounded-3xl bg-card shadow-sm transition hover:shadow-lg">
                    <img src={r.image} alt={r.name} loading="lazy" width={1024} height={1024} className="aspect-[4/3] w-full object-cover" />
                    <div className="flex flex-1 flex-col p-5">
                      <div className="flex flex-wrap gap-2">
                        {r.categories.map((c) => (
                          <span key={c} className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">{c}</span>
                        ))}
                      </div>
                      <h3 className="mt-3 font-display text-xl font-semibold text-foreground">{r.name}</h3>
                      <p className="mt-1 text-sm text-muted-foreground">{r.description}</p>
                      <p className="mt-3 flex items-center gap-1.5 text-sm text-muted-foreground">
                        <Clock className="h-4 w-4" aria-hidden /> {r.time}
                      </p>
                      <Link to="/receitas/$slug" params={{ slug: r.slug }} aria-label={`Ver receita: ${r.name}`}
                        className="mt-5 inline-flex justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                        Ver receita
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      </main>

      <footer className="py-8 text-center text-sm text-muted-foreground">Receitas da Casa · feito com carinho</footer>
    </div>
  );
}
