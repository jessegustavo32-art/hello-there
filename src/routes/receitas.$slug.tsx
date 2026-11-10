import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ArrowLeft, Clock, Users } from "lucide-react";
import { recipes } from "@/data/recipes";

export const Route = createFileRoute("/receitas/$slug")({
  loader: ({ params }) => {
    const recipe = recipes.find((r) => r.slug === params.slug);
    if (!recipe) throw notFound();
    return { recipe };
  },
  head: ({ loaderData }) => {
    const r = loaderData?.recipe;
    const title = r ? `${r.name} — Receitas da Casa` : "Receita não encontrada — Receitas da Casa";
    const desc = r?.description ?? "Receita não encontrada.";
    return {
      meta: [
        { title }, { name: "description", content: desc },
        { property: "og:title", content: title }, { property: "og:description", content: desc },
        { property: "og:type", content: "article" }, { name: "twitter:card", content: "summary_large_image" },
        ...(r ? [] : [{ name: "robots", content: "noindex" }]),
      ],
    };
  },
  notFoundComponent: () => (
    <div className="mx-auto max-w-xl px-4 py-20 text-center">
      <h1 className="font-display text-3xl font-semibold">Receita não encontrada</h1>
      <Link to="/" className="mt-6 inline-flex rounded-full bg-primary px-5 py-2.5 font-semibold text-primary-foreground">Voltar às receitas</Link>
    </div>
  ),
  component: RecipePage,
});

function RecipePage() {
  const { recipe: r } = Route.useLoaderData();
  return (
    <div className="min-h-screen bg-background">
      <main className="mx-auto max-w-3xl px-4 py-6 md:py-10">
        <Link to="/" className="inline-flex items-center gap-2 rounded-full px-2 py-1 text-sm font-medium text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">
          <ArrowLeft className="h-4 w-4" aria-hidden /> Voltar às receitas
        </Link>
        <img src={r.image} alt={r.name} width={1024} height={1024} className="mt-4 aspect-[16/10] w-full rounded-3xl object-cover shadow-lg" />
        <div className="mt-6 flex flex-wrap gap-2">
          {r.categories.map((c) => (
            <span key={c} className="rounded-full bg-accent px-3 py-1 text-xs font-medium text-accent-foreground">{c}</span>
          ))}
        </div>
        <h1 className="mt-3 font-display text-3xl font-semibold text-foreground md:text-5xl">{r.name}</h1>
        <p className="mt-2 text-lg text-muted-foreground">{r.description}</p>
        <dl className="mt-4 flex flex-wrap gap-6 text-sm text-foreground">
          <div className="flex items-center gap-2"><Clock className="h-4 w-4 text-primary" aria-hidden /><dt className="sr-only">Tempo</dt><dd>{r.time}</dd></div>
          <div className="flex items-center gap-2"><Users className="h-4 w-4 text-primary" aria-hidden /><dt className="sr-only">Rendimento</dt><dd>{r.servings}</dd></div>
        </dl>

        <section className="mt-8 rounded-3xl bg-secondary/60 p-6" aria-labelledby="ing">
          <h2 id="ing" className="font-display text-2xl font-semibold">Ingredientes</h2>
          <ul className="mt-4 space-y-2">
            {r.ingredients.map((i) => (
              <li key={i} className="flex gap-3"><span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-primary" aria-hidden />{i}</li>
            ))}
          </ul>
        </section>

        <section className="mt-8" aria-labelledby="prep">
          <h2 id="prep" className="font-display text-2xl font-semibold">Modo de preparo</h2>
          <ol className="mt-4 space-y-4">
            {r.steps.map((s, idx) => (
              <li key={idx} className="flex gap-4">
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-semibold text-primary-foreground" aria-hidden>{idx + 1}</span>
                <p className="pt-1">{s}</p>
              </li>
            ))}
          </ol>
        </section>
      </main>
    </div>
  );
}
