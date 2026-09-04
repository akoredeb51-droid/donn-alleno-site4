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
    <main className="min-h-screen bg-[#f8f4ef]">
      <section className="hero-glow relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-5 py-16 md:py-24">
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#b08c46]">
                Modern Nigerian Luxury
              </p>
              <h1 className="serif mt-5 text-5xl leading-[1.02] text-[#171412] md:text-7xl">
                Crafted for the <span className="gold">confident man</span>.
              </h1>
              <p className="mt-6 max-w-xl text-lg text-stone-700">
                Elevated senator wear, contemporary suiting, and signature silhouettes built with precision, comfort, and presence.
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link href="/shop" className="btn btn-dark">
                  Shop collection
                </Link>
                <Link href="/about" className="btn btn-light">
                  Our story
                </Link>
              </div>

              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {highlights.map((item) => (
                  <div key={item.label} className="rounded-2xl border border-[#e7dcc9] bg-white/70 p-4 backdrop-blur-sm">
                    <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">{item.label}</div>
                    <div className="mt-2 text-lg font-semibold text-[#171412]">{item.value}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -left-8 top-8 h-32 w-32 rounded-full bg-[#c6a15b]/20 blur-3xl" />
              <div className="absolute -right-8 bottom-10 h-40 w-40 rounded-full bg-[#d6c4a1]/30 blur-3xl" />
              <div className="relative overflow-hidden rounded-[32px] border border-[#eadfce] bg-[#f0e6db] p-4 shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
                <img
                  src="https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=900"
                  alt="Male luxury fashion"
                  className="h-[520px] w-full rounded-[24px] object-cover"
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

      <section className="max-w-7xl mx-auto px-5 py-20">
        <div className="flex items-end justify-between gap-5 border-b border-[#e7dcc9] pb-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b08c46]">Featured</p>
            <h2 className="serif mt-3 text-4xl text-[#171412] md:text-5xl">Curated essentials</h2>
          </div>
          <Link href="/shop" className="hidden text-[11px] font-bold uppercase tracking-[0.18em] text-[#171412] md:inline-block">
            Shop all →
          </Link>
        </div>

        <div className="mt-10 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.slice(0, 3).map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-5 pb-24">
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