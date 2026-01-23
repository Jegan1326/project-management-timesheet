import React from 'react';
import { updateSubmissionStatus } from '../services/api';

function AdminPanel({ submissions, setSubmissions }) {
  const handleDecision = async (id, status) => {
    await updateSubmissionStatus(id, status);

    // Remove submission from state so it disappears
    setSubmissions(submissions.filter((sub) => sub._id !== id));
  };

  if (submissions.length === 0) return <h3>No pending submissions</h3>;

  return (
    <div>
      <h2>Admin Panel</h2>
      {submissions.map((sub) => (
        <div
          key={sub._id}
          style={{
            border: '1px solid gray',
            margin: '10px',
            padding: '10px',
            borderRadius: '5px',
          }}
        >
          <p><strong>Name:</strong> {sub.name}</p>
          <p><strong>Software Used:</strong> {sub.softwareUsed}</p>
          <p><strong>Time Taken:</strong> {sub.timeTaken} hours</p>
          <p><strong>Description:</strong> {sub.description}</p>
          <button
            onClick={() => handleDecision(sub._id, 'Approved')}
            style={{ marginRight: '10px', backgroundColor: 'green', color: 'white' }}
          >
            Approve
          </button>
          <button
            onClick={() => handleDecision(sub._id, 'Rejected')}
            style={{ backgroundColor: 'red', color: 'white' }}
          >
            Reject
          </button>
        </div>
      ))}
    </div>
  );
}

export default AdminPanel;
