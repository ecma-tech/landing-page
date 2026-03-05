import { Wrench, BrainCircuit, CloudCog, PackageCheck } from "lucide-react";

const reasons = [
  {
    icon: Wrench,
    title: "Engineering-First Mindset",
    description:
      "Every decision is driven by engineering best practices. Clean code, robust architecture, and thorough documentation are non-negotiable standards we uphold across every project.",
  },
  {
    icon: BrainCircuit,
    title: "AI-Ready Systems",
    description:
      "We build with AI from the ground up -- integrating LLMs, vector databases, and intelligent automation so your product stays ahead of the curve.",
  },
  {
    icon: CloudCog,
    title: "Scalable Cloud Architecture",
    description:
      "From containerized microservices to serverless functions, we architect cloud-native systems designed to scale effortlessly from your first hundred users to millions.",
  },
  {
    icon: PackageCheck,
    title: "End-to-End Product Delivery",
    description:
      "From discovery and design through development, deployment, and post-launch support, we own the full lifecycle of your product with complete accountability.",
  },
];

export function WhyChoose() {
  return (
    <section className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Why us
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Why Choose ECMATECH
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            We combine deep technical expertise with a passion for building
            products that matter.
          </p>
        </div>

        <div className="mt-16 grid gap-8 sm:grid-cols-2">
          {reasons.map((reason) => (
            <div
              key={reason.title}
              className="flex gap-5 rounded-xl border border-border/50 bg-card p-6 transition-all hover:border-primary/30"
            >
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <reason.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-foreground">
                  {reason.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {reason.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
