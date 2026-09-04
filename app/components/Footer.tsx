import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="mt-16 border-t border-white/10 bg-black text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="serif text-2xl tracking-[0.12em]">DONN ALLENO</p>
          <p className="mt-4 max-w-xs text-sm leading-7 text-gray-400">
            Modern Nigerian menswear, refined for the confident man.
          </p>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5b75d]">Explore</h2>
          <nav className="mt-4 flex flex-col space-y-2 text-sm text-gray-300" aria-label="Footer navigation">
            <Link href="/shop" className="transition hover:text-yellow-500">Shop</Link>
            <Link href="/about" className="transition hover:text-yellow-500">About DONN ALLENO</Link>
            <Link href="/track" className="transition hover:text-yellow-500">Track Order</Link>
            <Link href="/contact" className="transition hover:text-yellow-500">Contact</Link>
          </nav>
        </div>

        <div>
          <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#f5b75d]">Connect</h2>
          <div className="mt-4 flex flex-col space-y-2 text-sm text-gray-400">
            <p>WhatsApp: 07030614208</p>
            <a href="https://wa.me/2347030614208" target="_blank" rel="noreferrer" className="text-gray-300 transition hover:text-yellow-500">
              Chat with us directly
            </a>
            <p>@donnalleno_sartorial</p>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 px-5 py-5 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} DONN ALLENO. All rights reserved.
      </div>
    </footer>
  );
}
