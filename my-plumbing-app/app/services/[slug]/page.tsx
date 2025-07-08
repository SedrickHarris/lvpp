// app/services/[slug]/page.tsx
import { services } from '@/lib/data';
import Layout from '@/components/Layout';
import CTAButton from '@/components/CTAButton';

import Head from 'next/head'; // Assuming you're using next/head for meta tags
import GHLEmbed from '@/components/GHLEmbed';
import { getLocalBusinessSchema, getServiceSchema, getBreadcrumbSchema } from '@/lib/schema';
import { BreadcrumbItem } from '@/lib/types';

interface ServicePageParams {
  slug: string;
}

export default function ServicePage({ params }: { params: ServicePageParams }) {
  const service = services.find(s => s.slug === params.slug);
  if (!service) return <Layout><p>Service not found.</p></Layout>;

  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: service.name }
  ];


  return (
    <>
      <Head>
        <title>{`${service.name} | Las Vegas Pro Plumbing`}</title>
        <meta name="description" content={`Professional ${service.name.toLowerCase()} services in Las Vegas, NV. Get a free quote today!`} />
      </Head>

    <Layout breadcrumbs={breadcrumbs}>
      <h1 className="text-4xl font-heading text-gunmetal mb-4">{service.name}</h1>
      <p className="text-steel mb-6">{service.description}</p>
      <img
        src={service.icon}
        alt={`${service.name} in Las Vegas`}
        className="rounded-lg mb-6 shadow w-full max-w-lg"
      />
      <CTAButton text="Get a Quote" href={`/contact?service=${service.slug}`} />
      {/* Assuming GHLEmbed is needed here based on previous context, although not in the provided code block */}
    </Layout>
    </>
  );
}