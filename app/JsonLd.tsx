/* ============================================================
   app/JsonLd.tsx — Server Component. Emite 5 bloques JSON-LD
   en el HTML inicial (Organization, LocalBusiness, Service[],
   Offer/AggregateOffer, FAQPage). Lee TODO de lib/seo.ts.
   Sin "use client": se renderiza en el servidor y va en el
   HTML de build (SSG).
   ============================================================ */

import {
  SITE_URL,
  BUSINESS,
  AREAS,
  SERVICIOS,
  PLANES,
  PAQUETE,
  FAQS,
  PRICE_SINGLE,
  PRICE_BUNDLE,
  CURRENCY,
} from "@/lib/seo";

const ORG_ID = `${SITE_URL}/#organization`;
const BIZ_ID = `${SITE_URL}/#localbusiness`;

const areaServed = AREAS.map((name) => ({
  "@type": "City",
  name,
  containedInPlace: {
    "@type": "AdministrativeArea",
    name: "Carchi",
    address: { "@type": "PostalAddress", addressCountry: BUSINESS.country },
  },
}));

const postalAddress = {
  "@type": "PostalAddress",
  streetAddress: BUSINESS.street,
  addressLocality: BUSINESS.city,
  addressRegion: BUSINESS.region,
  postalCode: BUSINESS.postalCode,
  addressCountry: BUSINESS.country,
};

/* 1 · Organization */
const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: BUSINESS.name,
  legalName: BUSINESS.legalName,
  url: `${SITE_URL}/`,
  slogan: BUSINESS.slogan,
  email: BUSINESS.email,
  telephone: BUSINESS.phoneE164,
  areaServed: areaServed,
  address: postalAddress,
  founder: { "@type": "Person", name: BUSINESS.founder },
  sameAs: [`https://wa.me/${BUSINESS.whatsapp}`],
};

/* 2 · LocalBusiness (ProfessionalService) */
const localBusiness = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "@id": BIZ_ID,
  name: BUSINESS.name,
  image: `${SITE_URL}/opengraph-image`,
  url: `${SITE_URL}/`,
  telephone: BUSINESS.phoneE164,
  email: BUSINESS.email,
  priceRange: "$",
  currenciesAccepted: CURRENCY,
  address: postalAddress,
  geo: {
    "@type": "GeoCoordinates",
    latitude: BUSINESS.latitude,
    longitude: BUSINESS.longitude,
  },
  areaServed: areaServed,
  parentOrganization: { "@id": ORG_ID },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    opens: "08:00",
    closes: "20:00",
  },
};

/* 3 · Service[] (uno por servicio) con su Offer */
const services = SERVICIOS.map((s) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "@id": `${SITE_URL}/#${s.id}`,
  name: s.title,
  description: s.desc,
  serviceType: s.title,
  provider: { "@id": ORG_ID },
  areaServed: areaServed,
  offers: {
    "@type": "Offer",
    price: s.price,
    priceCurrency: CURRENCY,
    availability: "https://schema.org/InStock",
    url: `${SITE_URL}/#precios`,
  },
}));

/* 4 · AggregateOffer con precios $39 y $99 */
const offerCatalog = {
  "@context": "https://schema.org",
  "@type": "AggregateOffer",
  "@id": `${SITE_URL}/#ofertas`,
  name: "Precios de páginas web, sistemas y bots en el Carchi",
  priceCurrency: CURRENCY,
  lowPrice: PRICE_SINGLE,
  highPrice: PRICE_BUNDLE,
  offerCount: PLANES.length + 1,
  offers: [
    ...PLANES.map((p) => ({
      "@type": "Offer",
      name: p.nombre,
      price: p.price,
      priceCurrency: CURRENCY,
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/#precios`,
    })),
    {
      "@type": "Offer",
      name: PAQUETE.nombre,
      description: PAQUETE.lapso,
      price: PAQUETE.price,
      priceCurrency: CURRENCY,
      availability: "https://schema.org/InStock",
      url: `${SITE_URL}/#precios`,
    },
  ],
  seller: { "@id": ORG_ID },
};

/* 5 · FAQPage — 1:1 con el FAQ visible */
const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "@id": `${SITE_URL}/#faq`,
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

const blocks = [organization, localBusiness, ...services, offerCatalog, faqPage];

export default function JsonLd() {
  return (
    <>
      {blocks.map((block, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(block) }}
        />
      ))}
    </>
  );
}
