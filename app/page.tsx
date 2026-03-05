import { Navbar } from "@/components/navbar";
import { Hero } from "@/components/hero";
import { Services } from "@/components/services";
import { TechStack } from "@/components/tech-stack";
import { Process } from "@/components/process";
import { WhyChoose } from "@/components/why-choose";
import { CTA } from "@/components/cta";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Services />
      <TechStack />
      <Process />
      <WhyChoose />
      <CTA />
      <Footer />
    </main>
  );
}
