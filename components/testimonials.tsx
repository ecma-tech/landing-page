import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Mehta",
    role: "Founder",
    company: "FinEdge Technologies",
    location: "India",
    quote:
      "We worked with the ECMATECH team when we needed help stabilizing parts of our backend and improving API performance. They were quick to understand the system and suggested practical changes instead of over-engineering things. The improvements made a noticeable difference for our users.",
  },
  {
    name: "James Walker",
    role: "Co-Founder",
    company: "ElevateNow",
    location: "UK",
    quote:
      "ECMATECH supported us during a phase where our platform was starting to scale and we needed stronger backend architecture. Their engineers jumped in quickly and helped clean up several API and infrastructure issues. It felt more like working with an extension of our own team.",
  },
  {
    name: "Priya Khanna",
    role: "Product Manager",
    company: "Nivaan Healthcare",
    location: "India",
    quote:
      "Our team collaborated with ECMATECH while improving some of our internal dashboards and data workflows. They were easy to work with and very responsive when issues came up. What I appreciated most was that they focused on building something maintainable rather than quick fixes.",
  },
  {
    name: "Oliver Bennett",
    role: "CTO",
    company: "Northbridge Digital",
    location: "UK",
    quote:
      "We brought ECMATECH in to help with backend development on a web platform we were building. They delivered clean, well-structured code and were thoughtful about long-term scalability. Overall the collaboration was smooth and professional.",
  },
  {
    name: "Ananya Sharma",
    role: "Operations Lead",
    company: "HealthTech Collective",
    location: "India",
    quote:
      "ECMATECH helped us build an internal tool for managing some operational workflows that were previously manual. The solution was simple but effective, and our team adopted it quickly. Communication throughout the project was clear and straightforward.",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="px-6 py-24 md:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-medium uppercase tracking-wider text-primary">
            Client feedback
          </p>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            What Our Clients Say
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Real feedback from teams we have collaborated with across India and
            the UK.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="group relative flex flex-col rounded-xl border border-border/50 bg-card p-6 transition-all duration-200 hover:border-primary/30"
            >
              <Quote className="mb-4 h-8 w-8 text-primary/30" />
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {`"${testimonial.quote}"`}
              </p>
              <div className="mt-6 flex items-center gap-3 border-t border-border/50 pt-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                  {testimonial.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-semibold text-foreground">
                    {testimonial.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {testimonial.role}, {testimonial.company}
                  </p>
                </div>
                <span className="ml-auto rounded-full bg-secondary px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-muted-foreground">
                  {testimonial.location}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
