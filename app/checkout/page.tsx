'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { money, products } from '@/lib/products';

const CART_KEY = 'da-cart';

export default function Checkout() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(CART_KEY) || '[]');
      setCartItems(stored);
    } catch {
      setCartItems([]);
    }
  }, []);

  const enrichedItems = cartItems
    .map((item) => {
      const product = products.find((p) => p.id === item.productId);
      return product ? { ...item, product } : null;
    })
    .filter(Boolean) as Array<{ productId: number; qty: number; size: string; color: string; product: any }>;

  const subtotal = enrichedItems.reduce((sum, item) => sum + item.product.price * item.qty, 0);
  const shipping = enrichedItems.length ? 3500 : 0;
  const totalPrice = subtotal + shipping;

  const handlePlaceOrder = async () => {
    if (!name || !phone || !address) {
      alert('Please fill all fields');
      return;
    }

    setLoading(true);
    const orderData = {
      customerName: name,
      customerPhone: phone,
      customerAddress: address,
      items: enrichedItems,
      total: totalPrice,
    };

    try {
      const response = await fetch('https://donn-alleno-site4-2.onrender.com/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData),
      });

      if (response.ok) {
        alert('Order placed successfully! We will call you soon.');
        localStorage.removeItem(CART_KEY);
        router.push('/');
      } else {
        alert('Error placing order');
      }
    } catch (error) {
      alert('Cannot connect to admin server. Is python app.py running?');
      console.log(error);
    }

    setLoading(false);
  };

  return (
    <main className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b08c46]">Checkout</p>
      <h1 className="serif mt-4 text-5xl text-[#171412]">Complete your order</h1>

      <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_0.72fr]">
        <div className="rounded-[28px] border border-[#e7dcc9] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.04)] md:p-8">
          <div className="space-y-5">
            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-stone-600">Full name</label>
              <input value={name} onChange={(e) => setName(e.target.value)} className="input rounded-xl" placeholder="Your name" />
            </div>

            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-stone-600">Phone number</label>
              <input value={phone} onChange={(e) => setPhone(e.target.value)} className="input rounded-xl" placeholder="0802 000 0000" />
            </div>

            <div>
              <label className="mb-2 block text-[11px] font-bold uppercase tracking-[0.18em] text-stone-600">Delivery address</label>
              <textarea value={address} onChange={(e) => setAddress(e.target.value)} className="input min-h-[120px] rounded-xl" placeholder="Street, area, city" />
            </div>
          </div>
        </div>

        <aside className="rounded-[28px] border border-[#e7dcc9] bg-[#171412] p-7 text-white shadow-[0_20px_50px_rgba(0,0,0,0.08)]">
          <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-[#d7b66f]">Order summary</p>

          <div className="mt-6 space-y-4 text-sm text-stone-300">
            {enrichedItems.length === 0 ? (
              <p>Your cart is empty.</p>
            ) : (
              enrichedItems.map((item) => (
                <div key={`${item.productId}-${item.size}-${item.color}`} className="flex items-center justify-between gap-3">
                  <span>
                    {item.product.name} × {item.qty}
                  </span>
                  <span>{money(item.product.price * item.qty)}</span>
                </div>
              ))
            )}
          </div>

          <div className="mt-6 space-y-4 border-t border-white/10 pt-5 text-sm text-stone-300">
            <div className="flex justify-between"><span>Subtotal</span><span>{money(subtotal)}</span></div>
            <div className="flex justify-between"><span>Shipping</span><span>{money(shipping)}</span></div>
            <div className="flex justify-between text-base font-semibold text-white"><span>Total</span><span>{money(totalPrice)}</span></div>
          </div>

          <button onClick={handlePlaceOrder} disabled={loading || enrichedItems.length === 0} className="btn btn-light mt-8 w-full !border-white !text-white hover:!bg-white hover:!text-[#171412] disabled:cursor-not-allowed disabled:opacity-50">
            {loading ? 'Placing order...' : 'Place order'}
          </button>
        </aside>
      </div>
    </main>
  );
}