import { Search, Layers, Code2, TestTubeDiagonal, Rocket } from "lucide-react";

const steps = [
  {
    icon: Search,
    step: "01",
    title: "Discovery",
    description:
      "We dive deep into your business goals, user needs, and technical constraints to define a clear product roadmap.",
  },
  {
    icon: Layers,
    step: "02",
    title: "Architecture",
    description:
      "System design, database modeling, and technology selection tailored to your product's scale and requirements.",
  },
  {
    icon: Code2,
    step: "03",
    title: "Development",
    description:
      "Iterative, sprint-based development with continuous code reviews, documentation, and stakeholder demos.",
  },
  {
    icon: TestTubeDiagonal,
    step: "04",
    title: "Testing",
    description:
      "Comprehensive QA with unit, integration, and end-to-end testing to ensure reliability and performance.",
  },
  {
    icon: Rocket,
    step: "05",
    title: "Deployment",
    description:
      "Zero-downtime deployments with monitoring, logging, and automated rollback capabilities.",
  },
];

export function Process() {
  return (
    <section id="process" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            How we work
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Development Process
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            A proven, transparent process that delivers results on time and on
            budget.
          </p>
        </div>

        <div className="relative mt-16">
          {/* Horizontal connector line (desktop) */}
          <div className="absolute top-6 left-[10%] right-[10%] hidden h-px lg:block">
            <div className="h-full w-full bg-border/60" />
          </div>

          {/* Vertical connector line (mobile/tablet) */}
          <div className="absolute top-0 bottom-0 left-6 w-px bg-border/60 sm:left-6 lg:hidden" />

          {/* Desktop: horizontal layout */}
          <div className="hidden lg:grid lg:grid-cols-5 lg:gap-6">
            {steps.map((item, index) => (
              <div key={item.step} className="relative flex flex-col items-center text-center">
                <div className="relative z-10 mb-5 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/40 bg-background text-primary shadow-[0_0_12px_rgba(0,200,180,0.15)]">
                  <item.icon className="h-5 w-5" />
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute top-6 left-[calc(50%+28px)] h-px w-[calc(100%-56px)] bg-primary/20" />
                )}
                <p className="mb-1 font-mono text-xs font-semibold text-primary">
                  Step {item.step}
                </p>
                <h3 className="text-base font-semibold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          {/* Mobile/Tablet: vertical timeline */}
          <div className="flex flex-col gap-10 lg:hidden">
            {steps.map((item) => (
              <div key={item.step} className="relative flex gap-5 pl-14 sm:pl-14">
                <div className="absolute left-0 z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/40 bg-background text-primary shadow-[0_0_12px_rgba(0,200,180,0.15)] sm:left-0">
                  <item.icon className="h-5 w-5" />
                </div>
                <div>
                  <p className="mb-1 font-mono text-xs font-semibold text-primary">
                    Step {item.step}
                  </p>
                  <h3 className="text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
