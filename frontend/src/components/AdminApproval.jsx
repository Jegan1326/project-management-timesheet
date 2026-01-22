import React, { useEffect, useState } from "react";
import { API } from "../services/api";

function AdminApproval({ refreshTrigger }) {
  const [data, setData] = useState([]);

  // Fetch all submissions whenever refreshTrigger changes
  const fetchData = async () => {
    try {
      const res = await API.get("/");
      setData(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  }, [refreshTrigger]);

  const approve = async (id) => {
    try {
      await API.put(`/approve/${id}`, { action: "approve" });
      fetchData(); // refresh after action
    } catch (err) {
      console.error(err);
    }
  };

  const reject = async (id) => {
    try {
      await API.put(`/approve/${id}`, { action: "reject" });
      fetchData(); // refresh after action
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div style={{ border: "2px solid black", padding: "20px" }}>
      <h2>Admin Panel</h2>

      {data.length === 0 && <p>No submissions yet</p>}

      {data.map(item => (
        <div key={item._id} style={{ marginBottom: "15px", borderBottom: "1px solid #ccc", paddingBottom: "10px" }}>
          <p>
            <b>{item.userName}</b> | {item.softwareUsed} | {item.hoursWorked} hrs | Status: {item.status}
          </p>
          <button onClick={() => approve(item._id)} style={{ marginRight: "10px" }}>Approve</button>
          <button onClick={() => reject(item._id)}>Reject</button>
        </div>
      ))}
    </div>
  );
}

export default AdminApproval;
