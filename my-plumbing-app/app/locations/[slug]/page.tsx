// app/locations/[slug]/page.tsx
import { locations } from '@/lib/data';
import Layout from '@/components/Layout';
import Head from 'next/head';
import { getLocalBusinessSchema, getLocationSchema, getBreadcrumbSchema } from '@/lib/schema';
import { BreadcrumbItem } from '@/lib/types';

interface LocationPageParams {
  slug: string;
}

export default function LocationPage({ params }: { params: LocationPageParams }) {
  const location = locations.find(l => l.slug === params.slug);
  if (!location) return <Layout><p>Location not found.</p></Layout>;

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Areas We Serve', href: '/locations' },
    { label: location.name }
  ];

  const localBusinessSchema = getLocalBusinessSchema();
  const locationSchema = getLocationSchema(location.name, location.description);
  const breadcrumbSchema = getBreadcrumbSchema(breadcrumbs);

  return (
    <Layout breadcrumbs={breadcrumbs as any}>

      <title>{location.name} Plumbing Services | Las Vegas Pro Plumbing</title>
      <meta
        name="description"
        content={`Find trusted plumbing services in ${location.name}, NV. We offer fast and reliable repairs and installations with a satisfaction guarantee.`}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(locationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <h1 className="text-4xl font-heading text-gunmetal mb-4">Plumbing Service in {location.name}</h1>
      <p className="text-steel mb-6">{location.description}</p>
      <img
        src={`/assets/location-${location.slug}.webp`}
        alt={`Plumber working in ${location.name}`}
        className="rounded-lg shadow w-full max-w-lg"
      />
    </Layout>
  );
}
