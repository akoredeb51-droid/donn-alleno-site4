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
    name: "Premium Senator", 
    price: 35000, 
    image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?w=400", 
    category: "Senator" 
  },
  { 
    id: 2, 
    name: "Classic Suit", 
    price: 95000, 
    image: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400", 
    category: "Suits" 
  },
  { 
    id: 3, 
    name: "Traditional Agbada", 
    price: 120000, 
    image: "https://images.unsplash.com/photo-1617127369576-0ef4ab18b8be?w=400", 
    category: "Agbada" 
  },
]