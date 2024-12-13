import { useState, useEffect } from "react";
import UserList from "../components/UserList";
import axios from "axios";
import UserEditor from "../components/UserEditor";

export default function Users() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axios.get("/dummy-data/users.json");

        // set the state of the user to the response.data
        setUsers(response.data);
      } catch (err) {
        console.error("something went wrong fetching users", err);
      }
    }
    fetchUsers();
  }, []);

  useEffect(() => {
    // console.log(users);
    sessionStorage.setItem("users", JSON.stringify(users));
    console.log(JSON.parse(sessionStorage.getItem("users")));
  }, [users]);
  return (
    <div>
      <h1>Users</h1>
      <UserEditor />
      <UserList items={users} />
    </div>
  );
}
