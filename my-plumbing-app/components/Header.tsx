import Link from 'next/link';
import React from 'react';

const Header: React.FC = () => { // Added a comment to trigger TypeScript re-evaluation
  return (
    <header className="bg-slate text-white py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <img src="/logo.svg" alt="Las Vegas Pro Plumbing logo" className="h-8" />
          <span className="text-xl font-bold text-brass">Las Vegas Pro Plumbing</span>
        </Link>
        <nav className="hidden md:flex gap-6 text-sm font-medium">
          <Link href="/services" className="hover:text-brass">Services</Link>
          <Link href="/locations" className="hover:text-brass">Areas We Serve</Link>
          <Link href="/contact" className="hover:text-brass">Contact</Link>
        </nav>
        <Link href="/contact" className="md:hidden bg-rust px-3 py-2 rounded text-sm font-semibold hover:bg-brass">
          Book Now
        </Link>
      </div>
    </header>
  );
};

export default Header;