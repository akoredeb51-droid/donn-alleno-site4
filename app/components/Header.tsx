import Link from 'next/link';

const navigation = [
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#e7e0d4] bg-[#f5f1ea]/90 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-5 py-4 flex items-center justify-between gap-6">
        <Link href="/" className="flex items-center gap-3 whitespace-nowrap text-[#171412]">
          <img src="/images/logo.png" alt="DONN ALLENO Sartorial" className="h-11 w-11 rounded-full object-cover ring-1 ring-[#c6a15b]/50" />
          <span className="serif text-lg tracking-[.16em] md:text-xl">
            DONN <span className="gold">ALLENO</span>
          </span>
        </Link>

        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-7">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="navlink">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/track" className="hidden sm:inline-block navlink">
            Track Order
          </Link>
          <Link href="/cart" className="btn btn-dark !px-4 !py-2">
            Cart
          </Link>
        </div>
      </div>
    </header>
  );
}
