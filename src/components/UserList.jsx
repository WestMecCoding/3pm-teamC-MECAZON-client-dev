import styles from "../styles/UserList.module.css";
import React from "react";

export default function UserList() {
  const columns = ["name", "department", "email", "phone number"];
  const data = [
    {
      name: "randy",
      email: "randal@rad.com",
      password: "54321",
      location: "alabama",
    },
  ];

  return (
    <div>
      <h2>User</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Password</th>
            <th>Location</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => {
            return (
              <tr key={index}>
                <td>{row.name}</td>
                <td>{row.email}</td>
                <td>{row.password}</td>
                <td>{row.location}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
