import { useState, useEffect } from "react";

function Dashboard() {
  const [count, setCount] = useState(
    Number(localStorage.getItem("count")) || 0
  );

  useEffect(() => {
    localStorage.setItem("count", count);
  }, [count]);

  return (
    <div>
      <h1>Dashboard</h1>

      <h2>Study Progress Tracker</h2>

      <p>Completed Tasks: {count}</p>

      <button onClick={() => setCount(count + 1)}>
        Complete Task
      </button>
    </div>
  );
}

export default Dashboard;