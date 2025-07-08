import Link from 'next/link';

import { BreadcrumbItem } from '@/lib/types';

export default function Breadcrumbs({ items }: { items: BreadcrumbItem[] }) {
  return (
    <nav aria-label="Breadcrumb" className="mb-4 text-sm text-steel">
      <ol className="flex gap-2 flex-wrap">
        {items.map((item, i) => (
          <li key={i}>
            {item.href ? (
              <>
                <Link href={item.href} className="hover:text-brass">
                  {item.label}
                </Link>
                <span className="px-1 text-gunmetal">/</span>
              </>
            ) : (
              <span className="text-gunmetal font-semibold">{item.label}</span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
}