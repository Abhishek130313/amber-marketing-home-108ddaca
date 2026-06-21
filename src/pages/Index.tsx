import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { StatsBar } from "@/components/site/StatsBar";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { PromoBanner } from "@/components/site/PromoBanner";
import { Blog } from "@/components/site/Blog";

const Index = () => (
  <Layout>
    <Hero />
    <StatsBar />
    <Services />
    <Testimonials />
    <PromoBanner />
    <Blog />
  </Layout>
);

export default Index;
