'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';
import ProductCard from '@/components/ProductCard';
import { products } from '@/lib/products';

const categories = ['All', 'Senator', 'Suits', 'Agbada'];

function ShopContent() {
  const q = useSearchParams().get('category');
  const list = q ? products.filter((p) => p.category === q) : products;

  return (
    <main className="mx-auto max-w-7xl px-5 py-16">
      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b08c46]">Collection</p>
      <h1 className="serif mt-2 text-5xl md:text-6xl">{q || 'Shop All'}</h1>

      <div className="mt-8 flex flex-wrap gap-3">
        {categories.map((x) => (
          <Link
            key={x}
            className={`btn ${((x === 'All' && !q) || x === q) ? 'btn-dark' : 'btn-light'}`}
            href={x === 'All' ? '/shop' : `/shop?category=${x}`}
          >
            {x}
          </Link>
        ))}
      </div>

      <div className="mt-12 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {list.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </div>
    </main>
  );
}

export default function Shop() {
  return (
    <Suspense fallback={<main className="mx-auto max-w-7xl px-5 py-16">Loading collection...</main>}>
      <ShopContent />
    </Suspense>
  );
}
