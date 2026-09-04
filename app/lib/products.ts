export type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
  image?: string;
  category?: string;
  stock?: number;
  sizes?: string[];
  colors?: string[];
};

export const money = (amount: number) =>
  new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency: 'NGN',
    maximumFractionDigits: 0,
  }).format(amount);

export const products: Product[] = [
  {
    id: 1,
    name: 'Premium Senator',
    description: 'Tailored with a sharp silhouette, refined drape, and premium hand-finished detailing.',
    price: 35000,
    image: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=800',
    category: 'Senator',
    sizes: ['S', 'M', 'L', 'XL'],
    colors: ['Black', 'Navy', 'Taupe']
  },
  {
    id: 2,
    name: 'Classic Suit',
    description: 'A modern business silhouette cut for effortless structure, confidence, and everyday elegance.',
    price: 95000,
    image: 'https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=800',
    category: 'Suits',
    sizes: ['M', 'L', 'XL', 'XXL'],
    colors: ['Charcoal', 'Ash', 'Midnight']
  },
  {
    id: 3,
    name: 'Traditional Agbada',
    description: 'Statement luxury crafted for ceremonies, occasions, and grand entrance moments.',
    price: 120000,
    image: 'https://images.unsplash.com/photo-1617127369576-0ef4ab18b8be?w=800',
    category: 'Agbada',
    sizes: ['M', 'L', 'XL'],
    colors: ['Ivory', 'Sand', 'Black']
  },
]