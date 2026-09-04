import Link from 'next/link';
import type { Product } from '../lib/products';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="block border rounded-lg p-4 shadow-sm transition hover:shadow-md">
      <div className="bg-gray-100 h-40 rounded mb-3 flex items-center justify-center overflow-hidden">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover rounded"
          />
        ) : (
          <span className="text-gray-500">Image</span>
        )}
      </div>

      <h2 className="text-xl font-semibold">{product.name}</h2>
      <p className="text-sm text-gray-600 mt-2">{product.description}</p>
      <p className="mt-3 font-bold">${product.price.toFixed(2)}</p>
    </Link>
  );
}