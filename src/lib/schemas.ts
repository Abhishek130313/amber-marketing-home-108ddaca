import { SITE_URL, SITE_NAME } from "@/components/site/SEO";

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness", "ProfessionalService"],
  "@id": `${SITE_URL}/#organization`,
  name: SITE_NAME,
  alternateName: "Websbond Digital Agency",
  url: SITE_URL,
  logo: {
    "@type": "ImageObject",
    url: `${SITE_URL}/favicon.ico`,
    width: 512,
    height: 512,
  },
  image: `${SITE_URL}/og-image.jpg`,
  description:
    "Websbond is India's leading affordable website development and digital marketing agency for small businesses, based in Indore, Madhya Pradesh.",
  foundingDate: "2019",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Indore",
    addressLocality: "Indore",
    addressRegion: "Madhya Pradesh",
    postalCode: "452001",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 22.7196,
    longitude: 75.8577,
  },
  telephone: "+919876543210",
  email: "hello@websbond.com",
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "21:00",
    },
  ],
  areaServed: [
    { "@type": "Country", name: "India" },
    { "@type": "State", name: "Madhya Pradesh" },
    { "@type": "City", name: "Indore" },
  ],
  priceRange: "₹₹",
  sameAs: [
    "https://facebook.com/websbond",
    "https://instagram.com/websbond",
    "https://linkedin.com/company/websbond",
    "https://youtube.com/@websbond",
  ],
  knowsAbout: [
    "Website Development",
    "SEO Optimization",
    "Digital Marketing",
    "Social Media Marketing",
    "Brand Identity Design",
    "Google Ads",
    "Facebook Ads",
  ],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  name: SITE_NAME,
  url: SITE_URL,
  description: "Affordable website development, SEO and digital marketing for small businesses in India.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  potentialAction: {
    "@type": "SearchAction",
    target: { "@type": "EntryPoint", urlTemplate: `${SITE_URL}/blog?q={search_term_string}` },
    "query-input": "required name=search_term_string",
  },
  inLanguage: ["en-IN", "hi"],
};

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path}`,
    })),
  };
}

export function serviceSchema(name: string, description: string, url: string) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name,
    description,
    url: `${SITE_URL}${url}`,
    provider: { "@id": `${SITE_URL}/#organization` },
    areaServed: { "@type": "Country", name: "India" },
    availableChannel: {
      "@type": "ServiceChannel",
      serviceUrl: `${SITE_URL}/contact`,
      servicePhone: "+919876543210",
    },
  };
}
