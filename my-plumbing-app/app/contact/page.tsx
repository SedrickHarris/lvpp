// app/contact/page.tsx
import Layout from '@/components/Layout';
import Script from 'next/script';

// Redefine BreadcrumbItem as export from Layout is not recognized
interface BreadcrumbItem {
 label: string;
 href?: string;
}

export default function ContactPage() {
  const breadcrumbs: BreadcrumbItem[] = [
    { label: 'Home', href: '/' },
    { label: 'Contact' }
  ];
  
  return (
    <Layout breadcrumbs={breadcrumbs as any}>
      <h1 className="text-4xl font-heading text-gunmetal mb-4">Contact Us</h1>
      <p className="text-steel mb-6">Please fill out the form below to get in touch with us.</p>
      <p className="text-steel mb-6">Las Vegas, NV 89109</p>
      <div className="w-full max-w-lg mx-auto">
        <iframe
          src="https://link.lasvegasproplumbing.com/widget/form/e7FdTz5nERfPFLKZHaxq"
          style={{ width: '100%', height: '1084px', border: 'none', borderRadius: '3px' }}
          id="inline-e7FdTz5nERfPFLKZHaxq"
          data-layout={'{ "id":"INLINE" }'}
          data-trigger-type="alwaysShow"
          data-trigger-value=""
          data-activation-type="alwaysActivated"
          data-activation-value=""
          data-deactivation-type="neverDeactivate"
          data-deactivation-value=""
          data-form-name="Plumbing Lead Gen | Website Contact Form"
          data-height="1084"
          data-layout-iframe-id="inline-e7FdTz5nERfPFLKZHaxq"
          data-form-id="e7FdTz5nERfPFLKZHaxq"
          title="Plumbing Lead Gen | Website Contact Form"
        >
        </iframe>
        <Script src="https://link.lasvegasproplumbing.com/js/form_embed.js" strategy="lazyOnload" />
      </div>
    </Layout>
  );
}