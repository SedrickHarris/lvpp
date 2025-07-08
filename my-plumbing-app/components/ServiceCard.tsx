import Link from 'next/link';

interface ServiceCardProps {
  title: string;
  description: string;
  link: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, link }) => {
  return (
    <div className="bg-ash rounded-lg shadow p-6 hover:shadow-lg transition">
      <h3 className="text-xl font-bold text-gunmetal mb-2">{title}</h3>
      <p className="text-steel text-sm mb-4">{description}</p>
      <Link href={link}>
        <span className="text-steel hover:text-brass text-sm font-medium">
          View Service →
        </span>
      </Link>
    </div>
  );
};

export default ServiceCard;