'use client';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Checkout() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    setCartItems(JSON.parse(localStorage.getItem('cart') || '[]'));
  }, []);

  const totalPrice = cartItems.reduce((sum: number, item: any) => sum + item.price * item.qty, 0);

  const handlePlaceOrder = async () => {
    if(!name || !phone || !address){
      alert("Please fill all fields");
      return;
    }

    setLoading(true);
    const orderData = {
      customerName: name,
      customerPhone: phone,
      customerAddress: address,
      items: cartItems,
      total: totalPrice
    };

    try {
      const response = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(orderData)
      });

      if(response.ok){
        alert("Order placed successfully! We will call you soon.");
        localStorage.removeItem('cart'); // clear cart
        router.push('/'); // go back to homepage
      } else {
        alert("Error placing order");
      }

    } catch (error) {
      alert("Cannot connect to admin server. Is python app.py running?");
      console.log(error);
    }
    setLoading(false);
  }

  return (
    <div className="max-w-md mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Donn Alleno Checkout</h1>
      
      <input 
        type="text" 
        placeholder="Your Name" 
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border p-2 mb-3"
      />
      
      <input 
        type="tel" 
        placeholder="Phone Number" 
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full border p-2 mb-3"
      />
      
      <input 
        type="text" 
        placeholder="Delivery Address" 
        value={address}
        onChange={(e) => setAddress(e.target.value)}
        className="w-full border p-2 mb-3"
      />

      <p className="mb-3">Total: ₦{totalPrice}</p>
      
      <button 
        onClick={handlePlaceOrder}
        disabled={loading}
        className="w-full bg-black text-white p-3 rounded"
      >
        {loading ? 'Placing Order...' : 'Place Order'}
      </button>
    </div>
  );
}