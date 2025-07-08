// components/GHLEmbed.tsx
interface GHLEmbedProps {
  formId: string | undefined;
}

export default function GHLEmbed({ formId }: GHLEmbedProps) {
  if (!formId) return null;

  return (
    <div className="my-8">
      <iframe
        src={`https://your-subdomain.gohighlevel.com/form/${formId}`}
        frameBorder="0"
        scrolling="no"
        className="w-full h-[600px] rounded-lg shadow-lg"
        title="Booking Form"
      ></iframe>
    </div>
  );
}