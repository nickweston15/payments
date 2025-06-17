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
    <div className="checkout-form" style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      gap: '15px', 
      maxWidth: '400px', 
      margin: '0 auto', 
      padding: '20px' 
    }}>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label>Amount:</label>
        <input 
          type="number" 
          value={amount} 
          onChange={(e) => setAmount(e.target.value)} 
          placeholder="Enter amount in cents"
          style={{ padding: '8px', fontSize: '16px' }}
        />
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
        <label>Currency:</label>
        <select 
          value={currency} 
          onChange={(e) => setCurrency(e.target.value)}
          style={{ padding: '8px', fontSize: '16px' }}
        >
          <option value="usd">USD</option>
          <option value="eur">EUR</option>
          <option value="gbp">GBP</option>
        </select>
      </div>

      <button 
        onClick={handleCheckout}
        style={{ 
          padding: '12px', 
          fontSize: '16px', 
          backgroundColor: '#007bff', 
          color: 'white', 
          border: 'none', 
          borderRadius: '4px', 
          cursor: 'pointer',
          marginTop: '10px'
        }}
      >
        Pay Now
      </button>
    </div>
  );
}

export default CheckoutPage;