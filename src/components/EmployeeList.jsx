import styles from "../styles/EmployeeList.module.css";
import React from "react";

export default function EmployeeList() {
  const columns = ["name", "department", "email", "phone number"];
  const data = [
    {
      name: "Jose",
      department: "finance",
      email: "jose.jones@finance.com",
      phoneNumber: "818-xxx-xxx7",
      location: {
        address: "3421 Birch Avenue",
        city: "Phoenix",
        zipcode: "35268",
      },
      hours: "full-time",
      picture: "",
      password: "emily2024",
      isAdmin: false,
      adminKey: "",
    },
    {
      name: "David",
      department: "marketing",
      email: "david.brown@marketing.com",
      phoneNumber: "626-xxx-xxx3",
      location: {
        address: "1234 Maple Road",
        city: "Los Angeles",
        zipcode: "90001",
      },
      hours: "part-time",
      picture: "",
      password: "marketing123",
      isAdmin: false,
      adminKey: "",
    },
  ];

  return (
    <div className={styles["employee-wrapper"]}>
      <div className={styles["employee-header"]}>
        <h1>Employees</h1>
        {/* search bar component */}
        {/* <Search></Search> */}
      </div>
      <button className={styles["add-employee"]}>Add Employee</button>
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
          {data.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.id}</td>
                <td>{row.name}</td>
                <td>{row.picture}</td>
                <td>{row.department}</td>
                <td>{row.email}</td>
                <td>{row.phoneNumber}</td>
                <td>{row.address}</td>
                <td>{row.hours}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
