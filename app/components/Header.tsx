import Link from 'next/link';

const navigation = [
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="border-b border-[#e7e0d4] bg-[#f4f0e8]">
      <div className="max-w-7xl mx-auto px-5 py-5 flex items-center justify-between gap-6">
        <Link href="/" className="serif text-xl tracking-[.14em] whitespace-nowrap">
          DONN <span className="gold">ALLENO</span>
        </Link>
        <nav className="flex items-center gap-6" aria-label="Main navigation">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="navlink">
              {item.label}
            </Link>
          ))}
          <Link href="/cart" className="btn btn-dark !px-4 !py-2">
            Cart
          </Link>
        </nav>
      </div>
    </header>
  );
}
