// lib/data.ts

export const services = [
  {
    name: 'Drain Cleaning',
    slug: 'drain-cleaning',
    description: 'We clear clogs fast using snaking and hydro jetting.',
    icon: '/assets/service-drain.webp',
    formId: 'drain123'
  },
  {
    name: 'Slab Leak Repair',
    slug: 'slab-leak-repair',
    description: 'Non-invasive detection and fast slab leak fixes.',
    icon: '/assets/service-slab.webp',
    formId: 'slab456'
  },
  {
    name: 'Toilet Repair & Install',
    slug: 'toilet-repair',
    description: 'From fixes to full installs—fast, clean, and warrantied.',
    icon: '/assets/service-toilet.webp',
    formId: 'toilet789'
  },
];

export const locations = [
 { name: 'Summerlin', slug: 'summerlin', description: 'Premium plumbing service in Summerlin, NV.' },
 { name: 'Henderson', slug: 'henderson', description: 'Trusted plumbing experts serving Henderson homes.' },
 { name: 'Railroad Pass', slug: 'railroad-pass', description: 'Fast leak repair and plumbing in Railroad Pass.' },
];

export const combos = locations.flatMap(location =>
  services.map(service => ({
    title: `${service.name} in ${location.name}`,
    slug: `/${location.slug}/${service.slug}`,
    service,
    location
  }))
);

// Define a type for each breadcrumb item
export type BreadcrumbItem = {
  label: string;
  href?: string;
};
