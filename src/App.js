import './assets/App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CheckoutPage from './CheckoutPage'
import Dashboard from './Dashboard'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Stripe Payments Simulator</h1>
      </header>
      <main className="App-main">
        <Router>
          <Routes>
            <Route path="/" element={<CheckoutPage />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
        </Router>
      </main>
      <footer className="App-footer">
        <p>Built by Nick Weston, 2025 &reg;</p>
      </footer>
    </div>
  );
}

export default App;