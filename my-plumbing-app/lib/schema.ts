export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Las Vegas Pro Plumbing",
  "image": "https://lasvegasproplumbing.com/assets/logo.svg",
  "telephone": "+1-888-308-3262",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Las Vegas",
    "addressRegion": "NV",
    "postalCode": "89109"
  },
  "url": "https://lasvegasproplumbing.com",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+1-888-308-3262",
    "contactType": "Customer Service",
    "areaServed": "US"
  }
});

export const getServiceSchema = (serviceName: string, description: string, locationName?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": serviceName,
  "provider": getLocalBusinessSchema(),
  "areaServed": locationName || "Las Vegas",
  "description": description
});

export const getLocationSchema = (locationName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Place",
  "name": locationName,
  "description": description,
  "address": {
    "@type": "PostalAddress",
    "addressLocality": locationName,
    "addressRegion": "NV",
    "postalCode": "89109"
  }
});

export const getBreadcrumbSchema = (items: { label: string; href?: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": items.map((item, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: item.label,
    item: item.href ? `https://lasvegasproplumbing.com${item.href}` : undefined
  }))
});

export const getImageSchema = (url: string, alt: string) => ({
  "@context": "https://schema.org",
  "@type": "ImageObject",
  "contentUrl": url,
  "description": alt
});

export const getFAQSchema = (faq: { question: string; answer: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faq.map(({ question, answer }) => ({
    "@type": "Question",
    "name": question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": answer
    }
  }))
});