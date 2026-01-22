import React, { useState } from "react";
import UserTimesheet from "./components/UserTimesheet";
import AdminApproval from "./components/AdminApproval";

function App() {
  const [newSubmission, setNewSubmission] = useState(0); // triggers refresh

  return (
    <div style={{ padding: "20px" }}>
      <UserTimesheet onSubmit={() => setNewSubmission(prev => prev + 1)} />
      <AdminApproval refreshTrigger={newSubmission} />
    </div>
  );
}

export default App;
