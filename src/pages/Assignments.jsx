import { useState, useEffect } from "react";

function Assignments() {
  const [assignment, setAssignment] = useState("");
  const [assignments, setAssignments] = useState([]);

  useEffect(() => {
    const savedAssignments =
      JSON.parse(localStorage.getItem("assignments")) || [];

    setAssignments(savedAssignments);
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "assignments",
      JSON.stringify(assignments)
    );
  }, [assignments]);

  const addAssignment = () => {
    if (assignment.trim() === "") return;

    setAssignments([...assignments, assignment]);
    setAssignment("");
  };

  const deleteAssignment = (index) => {
    const updatedAssignments =
      assignments.filter((_, i) => i !== index);

    setAssignments(updatedAssignments);
  };

  return (
    <div>
      <h1>Assignments</h1>

      <input
        type="text"
        placeholder="Enter Assignment"
        value={assignment}
        onChange={(e) => setAssignment(e.target.value)}
      />

      <button onClick={addAssignment}>
        Add Assignment
      </button>

      <ul>
        {assignments.map((item, index) => (
          <li key={index}>
            {item}
            <button
              onClick={() => deleteAssignment(index)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Assignments;