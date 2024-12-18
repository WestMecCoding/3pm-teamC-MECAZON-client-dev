import { useState } from "react";
import axios from "axios";

export default function EmployeeEditor() {
  const [deleteId, setDeleteId] = useState(""); // To capture the ID of the employee to delete

  const deleteEmployee = async (event) => {
    event.preventDefault();

    if (!deleteId) {
      console.error("No employee ID provided.");
      return;
    }

    console.log("Attempting to delete employee with ID:", deleteId); // Log deleteId

    try {
      const response = await axios.delete(
        `http://localhost:5000/delete/MECAZONDB/Employees/${deleteId}`
      );

      console.log("Employee deleted:", response.data); // Log the response from backend

      // Optionally, update your employee list state here (if necessary)
      // Example: setEmployees((prevEmployees) => prevEmployees.filter(employee => employee._id !== deleteId));

      setDeleteId(""); // Clear input
    } catch (err) {
      console.error("Error deleting employee:", err);
    }
  };

  return (
    <>
      <h1>Employee Editor</h1>
      <form id="deleteEmployee">
        <label htmlFor="delete-id">Employee ID: </label>
        <input
          type="text"
          name="delete-id"
          value={deleteId}
          onChange={(e) => setDeleteId(e.target.value)} // Update deleteId state
        />
        <button onClick={deleteEmployee}>Delete Employee</button>
      </form>
    </>
  );
}