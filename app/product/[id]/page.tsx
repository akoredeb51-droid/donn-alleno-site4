'use client';

import { Heart, ShoppingBag } from 'lucide-react';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';
import { useState } from 'react';
import { money, products } from '@/lib/products';

export default function Product() {
  const { id } = useParams<{ id: string }>();
  const p = products.find((x) => String(x.id) === id);
  const router = useRouter();
  const [size, setSize] = useState(p?.sizes?.[0] || '');
  const [color, setColor] = useState(p?.colors?.[0] || '');

  if (!p) {
    return (
      <main className="mx-auto max-w-4xl px-5 py-24 text-center">
        <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b08c46]">Product unavailable</p>
        <h1 className="serif mt-5 text-5xl text-[#171412]">This item is no longer available.</h1>
        <Link href="/shop" className="btn btn-dark mt-8">
          Back to shop
        </Link>
      </main>
    );
  }

  function add() {
    if (!p) return;

    const cart = JSON.parse(localStorage.getItem('da-cart') || '[]');
    cart.push({ productId: p.id, size, color, qty: 1 });
    localStorage.setItem('da-cart', JSON.stringify(cart));
    router.push('/cart');
  }

  return (
    <main className="mx-auto max-w-7xl px-5 py-14 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-2">
        <div className="overflow-hidden rounded-[28px] border border-[#e8dfd4] bg-[#f1e8dc]">
          <img src={p.image} alt={p.name} className="h-full min-h-[500px] w-full object-cover" />
        </div>

        <div className="py-2">
          <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#b08c46]">{p.category}</p>
          <h1 className="serif mt-4 text-5xl md:text-6xl text-[#171412]">{p.name}</h1>
          <div className="mt-6 text-3xl font-semibold text-[#171412]">{money(p.price)}</div>

          <p className="mt-8 max-w-xl text-base leading-8 text-stone-600">{p.description}</p>

          <div className="mt-8">
            <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-600">Size</label>
            <div className="mt-3 flex flex-wrap gap-2">
              {(p.sizes ?? []).map((s) => (
                <button
                  key={s}
                  onClick={() => setSize(s)}
                  className={`border px-5 py-3 text-sm font-medium transition ${size === s ? 'border-[#171412] bg-[#171412] text-white' : 'border-[#d8cab5] bg-white text-[#171412]'}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-7">
            <label className="text-[11px] font-bold uppercase tracking-[0.2em] text-stone-600">Colour</label>
            <div className="mt-3 flex flex-wrap gap-2">
              {(p.colors ?? []).map((c) => (
                <button
                  key={c}
                  onClick={() => setColor(c)}
                  className={`border px-5 py-3 text-sm font-medium transition ${color === c ? 'border-[#171412] bg-[#171412] text-white' : 'border-[#d8cab5] bg-white text-[#171412]'}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <button onClick={add} className="btn btn-dark flex-1">
              <ShoppingBag size={17} className="mr-2" />
              Add to cart
            </button>
            <button className="btn btn-light">
              <Heart size={17} className="mr-2" />
              Wishlist
            </button>
          </div>

          <div className="mt-10 border-t border-[#e7dcc9] pt-6 text-sm leading-7 text-stone-600">
            <p>Nationwide Nigeria delivery.</p>
            <p>Delivery fee confirmed according to location via WhatsApp.</p>
            <p>Secure checkout with Paystack, bank transfer or cash on delivery.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
