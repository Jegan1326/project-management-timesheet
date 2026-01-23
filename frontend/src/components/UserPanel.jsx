import React, { useState } from 'react';
import { createSubmission } from '../services/api';

function UserPanel({ setSubmissions, submissions }) {
  const [form, setForm] = useState({
    name: '',
    softwareUsed: '',
    timeTaken: '',
    description: '',
  });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await createSubmission(form);

    // Update parent state so admin panel shows it immediately
    setSubmissions([...submissions, res.data]);

    // Clear form
    setForm({ name: '', softwareUsed: '', timeTaken: '', description: '' });
  };

  return (
    <div>
      <h2>User Submission Panel</h2>
      <form onSubmit={handleSubmit}>
        <input
          name="name"
          placeholder="Name"
          value={form.name}
          onChange={handleChange}
          required
        />
        <input
          name="softwareUsed"
          placeholder="Software Used"
          value={form.softwareUsed}
          onChange={handleChange}
          required
        />
        <input
          name="timeTaken"
          type="number"
          placeholder="Time Taken (hours)"
          value={form.timeTaken}
          onChange={handleChange}
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          required
        ></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default UserPanel;
