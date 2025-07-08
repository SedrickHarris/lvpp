// app/[location]/[service]/page.tsx
'use client';

import { services, locations } from '@/lib/data';
import Layout from '@/components/Layout';
import GHLEmbed from '@/components/GHLEmbed';
import Head from 'next/head';
 
interface ComboPageParams {
  location: string;
 service: string;
}

export default function DynamicPage({ params }: { params: ComboPageParams }) {
  const service = services.find(s => s.slug === params.service);
  const location = locations.find(l => l.slug === params.location);

  const title = service && location
    ? `${service.name} in ${location.name} | Las Vegas Pro Plumbing`
    : service
    ? `${service.name} | Las Vegas Pro Plumbing`
    : location
    ? `Plumbing Services in ${location.name} | Las Vegas Pro Plumbing`
    : `Las Vegas Pro Plumbing`;

  const description = service && location
    ? `Affordable ${service.name.toLowerCase()} available now in ${location.name}, NV. Call (888) 308-3262 for same-day service.`
    : service
    ? `Trusted provider of ${service.name.toLowerCase()} services in Las Vegas. Licensed & insured.`
    : location
    ? `Professional plumbing services offered in ${location.name}, NV with satisfaction guarantee.`
    : `24/7 plumbing repair and installation in Las Vegas, NV.`
  
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    ...(location ? [{ label: location.name, href: `/locations/${location.slug}` }] : []),
    ...(service ? [{ label: service.name }] : []),
  ];

  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: service?.name ?? 'Plumbing Service',
    provider: {
      '@type': 'LocalBusiness',
      name: 'Las Vegas Pro Plumbing',
      telephone: '+1-888-308-3262', // Ensure this matches your desired format
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Las Vegas',
        addressRegion: 'NV',
        postalCode: '89109',
      },
    },
    areaServed: location?.name ?? 'Las Vegas',
    description,
  };

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      </Head>

      <h1 className="text-4xl font-heading text-gunmetal mb-4">
        {service?.name ?? 'Plumbing Services'} {location ? `in ${location.name}` : ''}
      </h1>

      <p className="text-steel text-lg mb-6">{description}</p>

      <img
        src={service?.icon ?? `/assets/location-${location?.slug}.webp`}
        alt={`${title} photo`}
        className="rounded-lg shadow mb-6 w-full max-w-lg"
      />

      <GHLEmbed formId={service?.formId} />
    </Layout>
  );
}