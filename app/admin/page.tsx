'use client';

import { money, products } from '@/lib/products';
import { useEffect, useState } from 'react';

export default function Admin() {
	const [orders, setOrders] = useState<any[]>([]);

	useEffect(() => {
		const loadOrders = async () => {
			try {
				const response = await fetch('http://127.0.0.1:5000/api/orders');
				if (!response.ok) throw new Error('Unable to load orders');
				setOrders(await response.json());
			} catch {
				const savedOrder = JSON.parse(localStorage.getItem('da-last-order') || 'null');
				if (savedOrder) setOrders([savedOrder]);
			}
		};

		loadOrders();
	}, []);

	return (
		<main className="mx-auto max-w-7xl px-5 py-16 md:py-20">
			<p className="text-[11px] font-bold uppercase tracking-[0.25em] text-[#b08c46]">Private dashboard</p>
			<h1 className="serif mt-3 text-5xl text-[#171412] md:text-6xl">DONN ALLENO Admin</h1>

			<div className="mt-10 grid gap-4 md:grid-cols-4">
				{[
					['Products', products.length],
					['Orders', orders.length],
					['Low stock', products.filter((p) => (p.stock ?? 0) < 5).length],
					['Customers', '—'],
				].map(([label, value]) => (
					<div key={String(label)} className="rounded-[24px] border border-[#e7dcc9] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.04)]">
						<div className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">{label}</div>
						<div className="serif mt-3 text-4xl text-[#171412]">{value}</div>
					</div>
				))}
			</div>

			<section className="mt-12 rounded-[28px] border border-[#e7dcc9] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.04)] md:p-8">
				<div className="flex items-center justify-between gap-4">
					<h2 className="serif text-3xl text-[#171412]">Latest order</h2>
					<span className="rounded-full border border-[#eadfca] bg-[#f9f5f0] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-stone-600">
						Live
					</span>
				</div>

				{orders.length > 0 ? (
					<div className="mt-6 grid gap-5 md:grid-cols-3">
						<div className="rounded-[22px] bg-[#f8f3ee] p-5">
							<p className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-500">Customer</p>
							<p className="mt-3 text-xl text-[#171412]">{orders[0].customerName || 'Guest customer'}</p>
						</div>
						<div className="rounded-[22px] bg-[#f8f3ee] p-5">
							<p className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-500">Order total</p>
							<p className="mt-3 text-xl text-[#171412]">{money(orders[0].total || 0)}</p>
						</div>
						<div className="rounded-[22px] bg-[#f8f3ee] p-5">
							<p className="text-[10px] font-bold uppercase tracking-[0.18em] text-stone-500">Status</p>
							<p className="mt-3 text-xl text-[#171412]">Pending</p>
						</div>
					</div>
				) : (
					<div className="mt-6 rounded-[22px] border border-dashed border-[#d9ccb2] bg-[#faf7f2] p-8 text-center text-stone-600">
						No orders yet. Purchases will appear here once a customer completes checkout.
					</div>
				)}
			</section>

			<section className="mt-12 rounded-[28px] border border-[#e7dcc9] bg-white p-6 shadow-[0_18px_50px_rgba(0,0,0,0.04)] md:p-8">
				<h2 className="serif text-3xl text-[#171412]">Products</h2>
				<div className="mt-5 overflow-x-auto">
					<table className="w-full bg-white">
						<thead>
							<tr className="border-b border-[#eee5d8] text-left text-[10px] uppercase tracking-[0.18em] text-stone-500">
								<th className="p-4">Product</th>
								<th className="p-4">Category</th>
								<th className="p-4">Price</th>
								<th className="p-4">Stock</th>
							</tr>
						</thead>
						<tbody>
							{products.map((p) => (
								<tr key={p.id} className="border-b border-[#f2ece4]">
									<td className="p-4 text-[#171412]">{p.name}</td>
									<td className="p-4 text-stone-600">{p.category}</td>
									<td className="p-4 text-stone-600">{money(p.price)}</td>
									<td className="p-4 text-stone-600">{p.stock ?? 0}</td>
								</tr>
							))}
						</tbody>
					</table>
				</div>
			</section>
		</main>
	);
}
