import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { StatsBar } from "@/components/site/StatsBar";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { PromoBanner } from "@/components/site/PromoBanner";
import { Blog } from "@/components/site/Blog";
import { Footer } from "@/components/site/Footer";

const Index = () => (
  <div className="min-h-screen bg-background">
    <Navbar />
    <main>
      <Hero />
      <StatsBar />
      <Services />
      <Testimonials />
      <PromoBanner />
      <Blog />
    </main>
    <Footer />
  </div>
);

export default Index;
