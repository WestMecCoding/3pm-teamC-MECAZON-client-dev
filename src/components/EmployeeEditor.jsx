import { useState } from "react";
import axios from "axios";

export default function EmployeeEditor() {
  const [employees, setEmployees] = useState([]); // Assuming you have a list of employees state here
  const [deleteId, setDeleteId] = useState(""); // To capture the ID of the employee to delete

  const deleteEmployee = async (event) => {
    event.preventDefault(); // Prevent form submission

    if (!deleteId) {
      console.error("No employee ID provided.");
      return;
    }

    try {
      // Make a DELETE request to the backend API
      await axios.delete(`http://localhost:5000/api/employees/${deleteId}`);

      // Update state to reflect deletion
      setEmployees((prevEmployees) =>
        prevEmployees.filter((employee) => employee.id !== parseInt(deleteId))
      );
      setDeleteId(""); // Clear the delete ID input
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
