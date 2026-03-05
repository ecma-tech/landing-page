const categories = [
  {
    label: "Backend",
    items: ["Python", "Ruby on Rails", "Node.js"],
  },
  {
    label: "Frontend",
    items: ["React", "Next.js", "TypeScript"],
  },
  {
    label: "Mobile",
    items: ["React Native"],
  },
  {
    label: "Infrastructure",
    items: ["AWS", "Docker", "PostgreSQL", "Redis"],
  },
  {
    label: "AI / Modern Tools",
    items: ["OpenAI APIs", "Vector DBs", "AI Automation", "LLM Integrations"],
  },
];

export function TechStack() {
  return (
    <section id="tech-stack" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Our tools
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tech Stack
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            We leverage industry-leading technologies to deliver robust,
            production-grade software.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <div
              key={category.label}
              className="rounded-xl border border-border/50 bg-card p-6"
            >
              <h3 className="mb-4 font-mono text-xs font-semibold uppercase tracking-widest text-primary">
                {category.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center gap-2 rounded-lg border border-border/50 bg-secondary/50 px-3 py-1.5 text-sm text-foreground transition-colors hover:border-primary/30"
                  >
                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded bg-primary/10 font-mono text-[10px] font-bold text-primary">
                      {item.slice(0, 2).toUpperCase()}
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
