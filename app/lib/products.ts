export type Product = {
  id: number;
  name: string;
  description?: string;
  price: number;
  originalPrice?: number;
  discountPercent?: number;
  badge?: string;
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
    name: 'Pinstripe Executive Senator - White/Blue/Navy 3-Pack',
    category: 'Senator Collection',
    price: 80000,
    originalPrice: 120000,
    discountPercent: 33,
    badge: 'BEST SELLER',
    image: '/images/senator1.jpg',
    description: 'Premium pinstripe senator wear. Tailored fit with luxury chest pocket detail.'
  },
  {
    id: 2,
    name: 'Classic White Pinstripe Senator',
    category: 'Senator Collection',
    price: 80000,
    originalPrice: 110000,
    discountPercent: 27,
    badge: 'NEW',
    image: '/images/senator2.jpg',
    description: 'Clean white pinstripe with contrast buttons. Perfect for formal events.'
  },
  {
    id: 3,
    name: 'Black Pinstripe Luxury Senator',
    category: 'Senator Collection',
    price: 80000,
    originalPrice: 110000,
    discountPercent: 27,
    badge: 'LIMITED',
    image: '/images/senator3.jpg',
    description: 'Black on black pinstripe with Z.A.C badge. Commanding and classy.'
  },
  {
    id: 4,
    name: 'Wine Red Trim Senator',
    category: 'Senator Collection',
    price: 80000,
    originalPrice: 100000,
    discountPercent: 20,
    badge: '',
    image: '/images/senator4.jpg',
    description: 'Rich wine color with white collar and pocket trim. Elegant design.'
  },
  {
    id: 5,
    name: 'Contemporary Cut Senator - Khaki/Grey',
    category: 'Senator Collection',
    price: 80000,
    originalPrice: 105000,
    discountPercent: 24,
    badge: 'HOT',
    image: '/images/senator5.jpg',
    description: 'Modern design with bold contrast panels. KAMM label. Tailored in Nigeria.'
  },
  {
    id: 6,
    name: 'Ash Grey Senator with Blue Accent',
    category: 'Senator Collection',
    price: 80000,
    originalPrice: 100000,
    discountPercent: 20,
    badge: '',
    image: '/images/senator6.jpg',
    description: 'Ash grey with sky blue design detail. Short sleeve, modern fit.'
  },
  {
    id: 7,
    name: 'Mustard Gold Senator Wear',
    category: 'Senator Collection',
    price: 80000,
    originalPrice: 100000,
    discountPercent: 20,
    badge: '',
    image: '/images/senator7.jpg',
    description: 'Luxury mustard fabric with patterned pocket detail. Handcrafted.'
  },
  {
    id: 8,
    name: 'Beige & Brown Contrast Senator',
    category: 'Senator Collection',
    price: 80000,
    originalPrice: 100000,
    discountPercent: 20,
    badge: '',
    image: '/images/senator8.jpg',
    description: 'Beige with brown trim. ALL STAR label. Clean and executive look.'
  },
  {
    id: 9,
    name: 'Burnt Orange Tree Design Senator',
    category: 'Senator Collection',
    price: 80000,
    originalPrice: 115000,
    discountPercent: 30,
    badge: 'TOP PICK',
    image: '/images/senator9.jpg',
    description: 'Burnt orange with tree embroidery design. Worn by executives.'
  },
  {
    id: 10,
    name: '2 Senator Bundle Deal',
    category: 'Bundle Offer',
    price: 95000,
    originalPrice: 160000,
    discountPercent: 40,
    badge: 'SAVE ₦65,000',
    image: '/images/senator1.jpg',
    description: 'Buy any 2 Senator wears and save 40%. Mix and match colors.'
  },
];