import Header from './components/Header';
import ProductCard from './components/ProductCard';
import { products } from './lib/products';

export default function HomePage() {
  return (
    <main className="p-8 bg-white min-h-screen">
      <Header />
      <h1 className="text-3xl font-bold mb-6">Donn Alleno Store</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <a href="/cart" className="block mt-8 underline text-blue-600">
        Go to Cart
      </a>
    </main>
  );
}