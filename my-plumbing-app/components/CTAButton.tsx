import Link from 'next/link';

interface CTAButtonProps {
  text: string;
  href: string;
}

const CTAButton: React.FC<CTAButtonProps> = ({ text, href }) => {
  return (
    <Link href={href}>
      <a className="inline-block bg-brass text-gunmetal font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-opacity-90 transition duration-300">
        {text}
      </a>
    </Link>
  );
};

export default CTAButton;