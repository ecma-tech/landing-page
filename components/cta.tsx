import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section id="contact" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-2xl border border-border/50 bg-card p-10 text-center sm:p-16">
          {/* Background glow */}
          <div className="pointer-events-none absolute top-0 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/15 blur-[80px]" />

          <div className="relative z-10">
            <p className="text-sm font-medium uppercase tracking-wider text-primary">
              Ready to build?
            </p>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              {"Let's engineer your next product"}
            </h2>
            <p className="mx-auto mt-4 max-w-lg text-pretty text-muted-foreground">
              Whether you have a detailed spec or just an idea, our team is
              ready to turn it into a scalable, production-grade application.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <a href="mailto:hello@ecmatech.io" className="gap-2">
                  Start a Project
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="mailto:hello@ecmatech.io">Schedule a Call</a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
