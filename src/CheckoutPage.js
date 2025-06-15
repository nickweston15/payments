import { useState } from 'react';
import axios from 'axios';

function CheckoutPage() {
  const [amount, setAmount] = useState(1000);
  const [currency, setCurrency] = useState('usd');
  
  const handleCheckout = async () => {
    try {
      const res = await axios.post('http://localhost:5000/create-checkout-session', { amount, currency });
      window.location = res.data.url;
    } catch (err) {
      console.error('Checkout error:', err);
    }
  };

  return (
    <div className="checkout-form">
      <label>Amount:</label>
      <input 
        type="number" 
        value={amount} 
        onChange={(e) => setAmount(e.target.value)} 
        placeholder="Enter amount in cents"
      />

      <label>Currency:</label>
      <select 
        value={currency} 
        onChange={(e) => setCurrency(e.target.value)}
      >
        <option value="usd">USD</option>
        <option value="eur">EUR</option>
        <option value="gbp">GBP</option>
      </select>

      <button onClick={handleCheckout}>
        Pay Now
      </button>
    </div>
  );
}

export default CheckoutPage;