import React, { useState } from "react";
import { API } from "../services/api";

function UserTimesheet({ onSubmit }) {
  const [form, setForm] = useState({
    userName: "",
    projectName: "Project Management",
    softwareUsed: "",
    hoursWorked: "",
    description: ""
  });

  const submitWork = async () => {
    try {
      await API.post("/submit", form);
      alert("Work submitted successfully");
      setForm({ userName: "", softwareUsed: "", hoursWorked: "", description: "" });

      if (onSubmit) onSubmit(); // trigger admin refresh
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="user-box" style={{ marginBottom: "30px" }}>
      <h2>User Timesheet</h2>

      <input
        placeholder="Name"
        value={form.userName}
        onChange={e => setForm({ ...form, userName: e.target.value })}
      />
      <input
        placeholder="Software Used"
        value={form.softwareUsed}
        onChange={e => setForm({ ...form, softwareUsed: e.target.value })}
      />
      <input
        type="number"
        placeholder="Hours Worked"
        value={form.hoursWorked}
        onChange={e => setForm({ ...form, hoursWorked: Number(e.target.value) })}
      />
      <textarea
        placeholder="Description"
        value={form.description}
        onChange={e => setForm({ ...form, description: e.target.value })}
      />
      <button className="submit-btn" onClick={submitWork}>Submit Work</button>
    </div>
  );
}

export default UserTimesheet;
