import Link from 'next/link';
import ProductCard from './components/ProductCard';
import { products } from './lib/products';

const highlights = [
  { label: 'Premium tailoring', value: 'Hand-finished' },
  { label: 'Delivery', value: 'Nationwide' },
  { label: 'Support', value: '24/7 WhatsApp' },
];

export default function HomePage() {
  return (
    <main className="marketplace-bg min-h-screen">
      <section className="bg-[#171412] px-5 py-3 text-center text-xs font-bold uppercase tracking-[0.18em] text-[#ffd8b7]">
        Free delivery on selected orders nationwide <span className="mx-2 text-[#f58220]">•</span> Shop the new collection
      </section>
      <section className="hero-glow relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-5 py-12 md:py-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#e87520]">
                DONN ALLENO marketplace
              </p>
              <h1 className="serif mt-5 text-5xl leading-[1.02] text-white md:text-7xl">
                Your style. <span className="text-[#e87520]">Your statement.</span>
              </h1>
              <p className="mt-6 max-w-xl text-lg text-[#c1cfe0]">
                Elevated senator wear, contemporary suiting, and signature silhouettes built with precision, comfort, and presence.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/shop" className="btn btn-orange">
                  Shop now
                </Link>
                <Link href="/about" className="btn btn-light !border-[#f58220] !text-white hover:!bg-[#f58220]">
                  Our story
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.label} className="rounded-lg border border-[#426486] bg-[#102b4c]/90 p-4 shadow-sm">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#91a9c4]">{item.label}</div>
                    <div className="mt-2 text-lg font-semibold text-white">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="relative overflow-hidden rounded-[32px] border border-[#eadfce] bg-[#171412] p-3 shadow-[0_30px_60px_rgba(0,0,0,0.14)]">
                <img
                  src="/images/hero-senator.jpg"
                  alt="DONN ALLENO senator look"
                  className="h-[520px] w-full rounded-[24px] object-cover object-center"
                />
                <div className="absolute left-8 bottom-8 rounded-2xl border border-white/40 bg-[#171412]/70 px-5 py-4 text-white backdrop-blur-sm">
                  <p className="text-[10px] uppercase tracking-[0.25em] text-[#d9c399]">Signature</p>
                  <p className="mt-2 text-2xl font-medium">Senator Collection</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 py-16">
        <div className="flex items-end justify-between gap-5 border-b border-[#e7dcc9] pb-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#e87520]">Shop by category</p>
            <h2 className="serif mt-3 text-4xl text-white md:text-5xl">Featured essentials</h2>
          </div>
          <Link href="/shop" className="hidden text-[11px] font-bold uppercase tracking-[0.18em] text-[#f9a15d] md:inline-block">
            Shop all →
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-5 pb-24">
        <div className="grid gap-8 rounded-[32px] border border-[#e7dcc9] bg-[#171412] p-8 text-white md:grid-cols-[1.1fr_0.9fr] md:p-12">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#d7b66f]">The DONN promise</p>
            <h3 className="serif mt-4 text-4xl md:text-5xl">Precision in every stitch.</h3>
          </div>
          <div className="space-y-5 text-stone-300">
            <p>Every piece is designed to balance structure, comfort, and understated confidence.</p>
            <p>From statement senator styles to refined everyday tailoring, we build wardrobes that move with you.</p>
            <Link href="/shop" className="btn btn-light !border-white !text-white hover:!bg-white hover:!text-[#171412]">
              Explore wardrobe
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}