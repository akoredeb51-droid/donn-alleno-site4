import Link from 'next/link';

export default function CartPage() {
  return (
    <main className="p-8">
      <h1 className="text-3xl font-bold mb-6">Your Cart</h1>
      <p className="mb-4">Your cart is empty.</p>
      <Link href="/" className="underline text-blue-600">
        Back to Home
      </Link>
    </main>
  );
}