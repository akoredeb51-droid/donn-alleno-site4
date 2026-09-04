'use client';

import Link from 'next/link';
import type { Product } from '../lib/products';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  const whatsappMessage = encodeURIComponent(`Hello DONN ALLENO, I want to order: ${product.name}`);

  function addToCart() {
    const cart = JSON.parse(localStorage.getItem('da-cart') || '[]');
    cart.push({ productId: product.id, size: '', color: '', qty: 1 });
    localStorage.setItem('da-cart', JSON.stringify(cart));
  }

  return (
    <article className="group rounded-[22px] border border-[#e8dfd4] bg-white p-3 shadow-[0_12px_32px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
      <Link href={`/product/${product.id}`} className="relative block overflow-hidden rounded-[16px] bg-[#efe8df]">
        {product.badge && (
          <span className={`absolute left-3 top-3 z-10 px-3 py-2 text-[10px] font-bold uppercase tracking-[0.16em] text-white ${product.badge.startsWith('SAVE') ? 'bg-red-600' : 'bg-[#171412]'}`}>
            {product.badge}
          </span>
        )}
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-80 items-center justify-center text-sm text-stone-500">Image</div>
        )}
      </Link>

      <div className="px-1 pb-2 pt-4">
        <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">{product.category || 'Signature'}</p>
        <Link href={`/product/${product.id}`}>
          <h2 className="mt-3 text-2xl font-medium text-[#171412]">{product.name}</h2>
        </Link>
        <p className="mt-2 text-sm text-stone-600 line-clamp-2">{product.description || 'Crafted for refined everyday elegance.'}</p>

        <div className="mt-5 border-t border-[#efe7dc] pt-4">
          <div className="flex flex-wrap items-baseline gap-2">
            <span className="text-xl font-semibold text-[#171412]">₦{product.price.toLocaleString('en-NG')}</span>
            {product.originalPrice && <span className="text-sm text-gray-400 line-through">₦{product.originalPrice.toLocaleString('en-NG')}</span>}
            {product.discountPercent && <span className="text-xs font-bold text-green-600">{product.discountPercent}% OFF</span>}
          </div>
          {product.category === 'Bundle Offer' && (
            <>
              <p className="mt-2 text-xs font-bold uppercase tracking-[0.14em] text-red-600">Bundle &amp; Save</p>
              <p className="mt-2 text-xs font-semibold text-stone-600">Was ₦160,000 Now ₦95,000 - Save ₦65,000</p>
            </>
          )}
          <div className="mt-4 grid gap-2 sm:grid-cols-2">
            <button onClick={addToCart} className="bg-black px-3 py-3 text-[10px] font-bold uppercase tracking-[0.14em] text-white transition hover:bg-[#333]">Add to Cart</button>
            <a href={`https://wa.me/2347030614208?text=${whatsappMessage}`} target="_blank" rel="noreferrer" className="border border-[#19a95b] px-3 py-3 text-center text-[10px] font-bold uppercase tracking-[0.1em] text-[#128c4b] transition hover:bg-[#19a95b] hover:text-white">Order on WhatsApp</a>
          </div>
        </div>
      </div>
    </article>
  );
}