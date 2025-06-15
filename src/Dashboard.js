import { useEffect, useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import axios from 'axios';

function Dashboard() {
  const [searchParams] = useSearchParams();
  const sessionId = searchParams.get('session_id');
  const [sessionInfo, setSessionInfo] = useState(null);

  useEffect(() => {
    async function fetchSession() {
      try {
        const res = await axios.get(`http://localhost:5000/session-info?session_id=${sessionId}`);
        setSessionInfo(res.data);
      } catch (err) {
        console.error('Error fetching session info:', err);
      }
    }

    if (sessionId) {
      fetchSession();
    }

  }, [sessionId]);

  if (!sessionInfo) {
    return <p>Loading payment details...</p>;
  }

  return (
    <div className="dashboard">
      <h2>Payment Summary</h2>
      <ul>
        <li><strong>Status:</strong> {sessionInfo.payment_status}</li>
        <li><strong>Amount:</strong> {(sessionInfo.amount_total / 100).toFixed(2)} {sessionInfo.currency.toUpperCase()}</li>
        <li><strong>Payment Method:</strong> {sessionInfo.payment_method_types.join(', ')}</li>
      </ul>
    </div>
  )
}

export default Dashboard;