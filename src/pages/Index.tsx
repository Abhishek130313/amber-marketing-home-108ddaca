import { SEO } from "@/components/site/SEO";
import { Layout } from "@/components/site/Layout";
import { Hero } from "@/components/site/Hero";
import { StatsBar } from "@/components/site/StatsBar";
import { Services } from "@/components/site/Services";
import { Testimonials } from "@/components/site/Testimonials";
import { PromoBanner } from "@/components/site/PromoBanner";
import { Blog } from "@/components/site/Blog";
import { organizationSchema, websiteSchema } from "@/lib/schemas";

const homeJsonLd = [
  organizationSchema,
  websiteSchema,
  {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": "https://websbond.com/#webpage",
    url: "https://websbond.com/",
    name: "Websbond — #1 Website Design & Digital Marketing Agency in India",
    description: "Websbond is India's best website development and digital marketing agency for small businesses. Affordable websites, SEO, Google Ads, social media. Based in Indore. Free consultation.",
    isPartOf: { "@id": "https://websbond.com/#website" },
    about: { "@id": "https://websbond.com/#organization" },
    breadcrumb: {
      "@type": "BreadcrumbList",
      itemListElement: [{ "@type": "ListItem", position: 1, name: "Home", item: "https://websbond.com/" }],
    },
  },
];

const Index = () => (
  <Layout>
    <SEO
      title="Websbond — #1 Website Design & Digital Marketing Agency in India | Indore"
      description="Websbond is India's best affordable website development & digital marketing agency for small businesses. Websites from ₹7,999 | SEO | Google Ads | Social Media. Based in Indore. Free consultation."
      path="/"
      jsonLd={homeJsonLd}
    />
    <Hero />
    <StatsBar />
    <Services />
    <Testimonials />
    <PromoBanner />
    <Blog />
  </Layout>
);

export default Index;
