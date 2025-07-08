export default function Footer() {
  return (
    <footer className="bg-slate text-white py-6 mt-12 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Las Vegas Pro Plumbing. All rights reserved.</p>
      <p>Las Vegas, NV 89109<br /><a href="tel:8883083262" className="text-brass">(888) 308-3262</a></p>
    </footer>
  );
}
