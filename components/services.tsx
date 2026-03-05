import { Globe, Smartphone, Server, Cloud, BrainCircuit } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Web Application Development",
    description:
      "Custom web platforms built with modern frameworks, optimized for performance, SEO, and seamless user experiences across all devices.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description:
      "Native and cross-platform mobile applications for Android and iOS, delivering fluid interfaces and reliable offline-first capabilities.",
  },
  {
    icon: Server,
    title: "Backend & API Engineering",
    description:
      "Scalable REST and GraphQL APIs, microservices architectures, and real-time data pipelines built for high throughput and reliability.",
  },
  {
    icon: Cloud,
    title: "Cloud & DevOps",
    description:
      "Infrastructure as code, CI/CD pipelines, container orchestration, and cloud-native deployments on AWS, GCP, and Azure.",
  },
  {
    icon: BrainCircuit,
    title: "AI & Automation",
    description:
      "AI integrations, LLM-powered tools, intelligent assistants, and workflow automation to unlock next-level efficiency for your business.",
  },
];

export function Services() {
  return (
    <section id="services" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            What we do
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Services
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            End-to-end engineering services to bring your product from concept
            to production.
          </p>
        </div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group rounded-xl border border-border/50 bg-card p-7 transition-all duration-200 hover:border-primary/30 hover:-translate-y-1 hover:shadow-lg hover:shadow-primary/5"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary transition-colors group-hover:bg-primary/20">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold text-foreground">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
