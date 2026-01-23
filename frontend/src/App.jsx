import React, { useState, useEffect } from 'react';
import UserPanel from './components/UserPanel';
import AdminPanel from './components/AdminPanel';
import { getPendingSubmissions } from './services/api';

function App() {
  const [submissions, setSubmissions] = useState([]);

  // Fetch pending submissions on mount
  useEffect(() => {
    fetchSubmissions();
  }, []);

  const fetchSubmissions = async () => {
    const res = await getPendingSubmissions();
    setSubmissions(res.data);
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1>Project Management Timesheet</h1>
      
      {/* User Panel */}
      <UserPanel setSubmissions={setSubmissions} submissions={submissions} />

      <hr />

      {/* Admin Panel */}
      <AdminPanel submissions={submissions} setSubmissions={setSubmissions} />
    </div>
  );
}

export default App;
