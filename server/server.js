const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const Stripe = require('stripe');

dotenv.config();
const stripe = Stripe(process.env.STRIPE_SECRET_KEY);
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Create a checkout session
app.post('/create-checkout-session', async (req, res) => {
  const { amount, currency } = req.body;
  try {
    const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    mode: 'payment',
    line_items: [{
      price_data: {
        currency: currency,
        product_data: {
          name: 'Test Product',
        },
        unit_amount: parseInt(amount),
      },
      quantity: 1,
    }],
    success_url: 'http://localhost:3000/dashboard?session_id={CHECKOUT_SESSION_ID}',
    cancel_url: 'http://localhost:3000/',
  });

  res.json({ url: session.url });
  } catch (error) {
    console.error('Error creating session:', error);
    res.status(500).json({ error: 'Unable to create session' });
  }
});

// Retrieve session info
app.get('/session-info', async (req, res) => {
  const { session_id } = req.query;

  try {
    const session = await stripe.checkout.sessions.retrieve(session_id);
    res.json(session);
  } catch (error) {
    console.error('Error retrieving session:', error);
    res.status(500).json({ error: 'Unable to retrieve session info' });
  }
});

// Listener to start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});