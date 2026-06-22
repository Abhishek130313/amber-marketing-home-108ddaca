import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { StatsBar } from "@/components/site/StatsBar";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { PromoBanner } from "@/components/site/PromoBanner";
import { Blog } from "@/components/site/Blog";

const Index = () => (
  <Layout>
    <SEO title="Websbond — Affordable Websites, SEO & Digital Marketing in India" description="Websbond builds affordable websites and runs SEO & digital marketing for small businesses in India. Free pilot program — limited seats. Get a free consultation today." path="/" />
      <Hero />
    <StatsBar />
    <Services />
    <Testimonials />
    <PromoBanner />
    <Blog />
  </Layout>
);

export default Index;
