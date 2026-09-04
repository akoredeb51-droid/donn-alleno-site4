import Link from 'next/link';
import type { Product } from '../lib/products';

type ProductCardProps = {
  product: Product;
};

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.id}`} className="group block rounded-[22px] border border-[#e8dfd4] bg-white p-3 shadow-[0_12px_32px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)]">
      <div className="overflow-hidden rounded-[16px] bg-[#efe8df]">
        {product.image ? (
          <img
            src={product.image}
            alt={product.name}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex h-72 items-center justify-center text-sm text-stone-500">Image</div>
        )}
      </div>

      <div className="px-1 pb-2 pt-4">
        <div className="flex items-center justify-between gap-3">
          <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500">
            {product.category || 'Signature'}
          </p>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-[#b08c46]">
            New
          </span>
        </div>

        <h2 className="mt-3 text-2xl font-medium text-[#171412]">{product.name}</h2>
        <p className="mt-2 text-sm text-stone-600 line-clamp-2">{product.description || 'Crafted for refined everyday elegance.'}</p>

        <div className="mt-5 flex items-center justify-between border-t border-[#efe7dc] pt-4">
          <span className="text-xl font-semibold text-[#171412]">
            ₦{product.price.toLocaleString('en-NG')}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#171412]">
            View
          </span>
        </div>
      </div>
    </Link>
  );
}