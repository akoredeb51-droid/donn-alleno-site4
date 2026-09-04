'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { money, products } from '@/lib/products';

const CART_KEY = 'da-cart';

export default function CartPage() {
  const [items, setItems] = useState<any[]>([]);

  useEffect(() => {
    try {
      const raw = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
      setItems(raw);
    } catch {
      setItems([]);
    }
  }, []);

  const cartItems = items
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      return product ? { ...item, product } : null;
    })
    .filter(Boolean) as Array<{ productId: number; qty: number; size: string; color: string; product: any }>;

  const subtotal = cartItems.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const shipping = cartItems.length ? 3500 : 0;
  const total = subtotal + shipping;

  const removeItem = (productId: number) => {
    const updated = items.filter((item) => item.productId !== productId);
    setItems(updated);
    localStorage.setItem(CART_KEY, JSON.stringify(updated));
  };

  return (
    <main className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b08c46]">Your bag</p>
      <h1 className="serif mt-4 text-5xl text-[#171412]">Cart</h1>

      {cartItems.length === 0 ? (
        <div className="mt-10 rounded-[28px] border border-[#e7dcc9] bg-white p-8 shadow-[0_18px_50px_rgba(0,0,0,0.04)]">
          <p className="text-lg text-stone-600">Your cart is empty.</p>
          <p className="mt-3 text-sm text-stone-500">Add a few signature pieces and continue to checkout.</p>

          <div className="mt-8">
            <Link href="/shop" className="btn btn-dark">
              Continue shopping
            </Link>
          </div>
        </div>
      ) : (
        <div className="mt-10 grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="space-y-5">
            {cartItems.map((item) => (
              <div key={`${item.productId}-${item.size}-${item.color}`} className="flex flex-col gap-4 rounded-[24px] border border-[#e7dcc9] bg-white p-4 shadow-[0_14px_40px_rgba(0,0,0,0.03)] sm:flex-row">
                <img src={item.product.image} alt={item.product.name} className="h-28 w-full rounded-[18px] object-cover sm:w-28" />

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">{item.product.category}</p>
                      <h2 className="mt-2 text-2xl text-[#171412]">{item.product.name}</h2>
                    </div>
                    <button onClick={() => removeItem(item.productId)} className="text-sm font-medium text-stone-500 hover:text-[#171412]">
                      Remove
                    </button>
                  </div>

                  <div className="mt-4 flex flex-wrap gap-3 text-sm text-stone-600">
                    <span>Size: {item.size || '—'}</span>
                    <span>Color: {item.color || '—'}</span>
                    <span>Qty: {item.qty}</span>
                  </div>
                </div>

                <div className="text-right text-xl font-semibold text-[#171412] sm:min-w-[120px]">
                  {money(item.product.price * item.qty)}
                </div>
              </div>
            ))}
          </div>

          <aside className="rounded-[28px] border border-[#e7dcc9] bg-[#171412] p-7 text-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
            <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d7b66f]">Summary</p>
            <div className="mt-6 space-y-4 text-sm text-stone-300">
              <div className="flex justify-between"><span>Subtotal</span><span>{money(subtotal)}</span></div>
              <div className="flex justify-between"><span>Shipping</span><span>{money(shipping)}</span></div>
              <div className="flex justify-between border-t border-white/10 pt-4 text-base font-semibold text-white"><span>Total</span><span>{money(total)}</span></div>
            </div>

            <Link href="/checkout" className="btn btn-light mt-8 w-full !border-white !text-white hover:!bg-white hover:!text-[#171412]">
              Proceed to checkout
            </Link>
          </aside>
        </div>
      )}
    </main>
  );
}