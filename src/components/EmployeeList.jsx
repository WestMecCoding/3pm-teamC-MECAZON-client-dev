import { useState, useEffect } from "react";
import styles from "../styles/EmployeeList.module.css";
import axios from "axios";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]); // State to hold employee data
  const [loading, setLoading] = useState(true); // State for loading indicator
  const [error, setError] = useState(null); // State for error handling

  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await axios.get(
          "http://localhost:3000/find/MECAZONDB/Employees"
        );

        setEmployees(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching employees:", err);
        setError("Something went wrong fetching employees.");
        setLoading(false);
      }
    }

    fetchEmployees();
  }, []); // Fetch employees when the component mounts

  // Display loading or error messages if necessary
  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className={styles["employee-wrapper"]}>
      <div className={styles["employee-header"]}>
        <h1>Employees</h1>
        <button className={styles["add-employee"]}>Add Employee</button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Department</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => {
            return (
              <tr key={index}>
                {/* Display employee data with optional chaining */}
                <td>{employee._id || "N/A"}</td>
                <td>
                  {employee.name?.first_name} {employee.name?.last_name}
                </td>
                <td>{employee.department || "N/A"}</td>
                <td>{employee.contact_info?.email || "N/A"}</td>
                <td>{employee.contact_info?.phone_number || "N/A"}</td>
                <td>{employee.contact_info?.address || "N/A"}</td>
                <td>{employee.date_hired || "N/A"}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
