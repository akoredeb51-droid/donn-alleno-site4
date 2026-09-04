import Link from 'next/link';

const navigation = [
  { href: '/shop', label: 'Shop' },
  { href: '/about', label: 'Our Story' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black text-white shadow-lg">
      <div className="mx-auto flex flex-wrap items-center justify-between gap-4 px-5 py-4">
        <Link href="/" className="flex items-center gap-3 whitespace-nowrap text-[#171412]">
          <img src="/images/logo.png" alt="DONN ALLENO Sartorial" className="h-16 w-16 rounded-full object-cover ring-2 ring-[#f5b75d]/80" />
          <span className="serif text-lg tracking-[.16em] text-white md:text-xl">
            DONN <span className="text-[#ffe0bd]">ALLENO</span>
          </span>
        </Link>

        <form action="/shop" className="order-3 hidden min-w-0 flex-1 md:flex md:max-w-xl lg:order-none">
          <label className="sr-only" htmlFor="site-search">Search products</label>
          <input id="site-search" name="search" placeholder="Search senator wear, suits and agbada" className="h-11 w-full rounded-l-md border-0 bg-white px-4 text-sm text-[#171412] outline-none" />
          <button type="submit" className="h-11 rounded-r-md bg-[#171412] px-6 text-xs font-bold uppercase tracking-[0.12em] text-white">Search</button>
        </form>

        <nav aria-label="Main navigation" className="hidden items-center gap-5 lg:flex">
          {navigation.map((item) => (
            <Link key={item.href} href={item.href} className="navlink !text-white">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/account" className="hidden sm:inline-block navlink !text-white">
            Account
          </Link>
          <Link href="/cart" className="rounded-md bg-[#171412] px-4 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
            Cart
          </Link>
        </div>
      </div>
      <nav className="border-t border-white/10 bg-[#0d0d0d] px-5 py-3 md:hidden" aria-label="Mobile navigation">
        <div className="mx-auto flex max-w-7xl items-center justify-center gap-6 text-[10px] font-bold uppercase tracking-[0.16em]">
          {navigation.map((item) => <Link key={item.href} href={item.href} className="transition hover:text-yellow-500">{item.label}</Link>)}
        </div>
      </nav>
      <div className="border-t border-white/10 bg-[#101010] px-5 py-2 md:hidden">
        <form action="/shop" className="flex">
          <label className="sr-only" htmlFor="mobile-search">Search products</label>
          <input id="mobile-search" name="search" placeholder="Search products" className="h-10 min-w-0 flex-1 rounded-l-md border-0 bg-white px-3 text-sm text-[#171412] outline-none" />
          <button type="submit" className="rounded-r-md bg-[#171412] px-4 text-[10px] font-bold uppercase text-white">Go</button>
        </form>
      </div>
    </header>
  );
}
