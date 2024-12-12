import { useState, useEffect } from "react";
import EmployeeList from "../components/EmployeeList";
import axios from "axios";
import EmployeeEditor from "../components/EmployeeEditor";

export default function Employees() {
  const [employees, setEmployees] = useState([]);
  useEffect(() => {
    async function fetchEmployees() {
      try {
        const response = await axios.get("/dummy-data/employees.json");

        // set the state of the employee to the response.data
        setEmployees(response.data);
      } catch (err) {
        console.error("something went wrong fetching employees", err);
      }
    }
    fetchEmployees();
  }, []);

  useEffect(() => {
    // console.log(employees);
    sessionStorage.setItem("employees", JSON.stringify(employees));
    console.log(JSON.parse(sessionStorage.getItem("employees")));
  }, [employees]);
  return (
    <div>
      <h1>Employees</h1>
      <EmployeeEditor />
      <EmployeeList items={employees} />
    </div>
  );
}
