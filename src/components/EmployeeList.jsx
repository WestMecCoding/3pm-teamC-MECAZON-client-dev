import { useState, useEffect } from "react";
import styles from "../styles/EmployeeList.module.css";
import axios from "axios";
// import fetchEmployees from "../pages/Employees";

export default function EmployeeList() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await axios.get("http://localhost:3000/api/employees");

        // set the state of the employee to the response.data
        setEmployees(response.data);
      } catch (err) {
        console.error("something went wrong fetching employees", err);
      }
    }
    fetchEmployees();
  }, []);

  return (
    <div className={styles["employee-wrapper"]}>
      <div className={styles["employee-header"]}>
        <h1>Employees</h1>
        {/* search bar component */}
        <button className={styles["add-employee"]}>Add Employee</button>
      </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Employee ID</th>
            <th>Name</th>
            <th>Picture</th>
            <th>Department</th>
            <th>Email</th>
            <th>Phone Number</th>
            <th>Address</th>
            <th>Hours</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.picture}</td>
                <td>{row.department}</td>
                <td>{row.email}</td>
                <td>{row.phoneNumber}</td>
                <td>{`${row.location.address}, ${row.location.city}, ${row.location.zipcode}`}</td>
                <td>{row.hours}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
