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
      <h1>Study Dashboard</h1>

      <h2>Completed Tasks</h2>

      <h1>{count}</h1>

      <button onClick={() => setCount(count - 1)} disabled={count === 0}>
        -
      </button>

      <button onClick={() => setCount(count + 1)}>
        +
      </button>

      <br /><br />

      <button onClick={() => setCount(0)}>
        Reset Progress
      </button>
    </div>
  );
}

export default Dashboard;