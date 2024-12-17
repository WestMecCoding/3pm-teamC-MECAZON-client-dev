import { useState } from "react";

export default function UserEditor({ onClose, onAddUser }) {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    // location: {
    //   country: "",
    //   city: "",
    //   address: "",
    //   zipCode: "",
    // },
    email: "",
    phoneNumber: "",
    password: "",
    orders: "",
    paymentType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  // Submit Logic
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddUser(userData); // Send user data to parent component
  };

  return (
    <div>
      <h1>User Editor</h1>
      <form onSubmit={handleSubmit} className="user-form">
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          name="firstName"
          value={userData.firstName}
          onChange={handleChange}
        />
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={userData.lastName}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          type="text"
          name="email"
          value={userData.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          type="text"
          name="password"
          value={userData.password}
          onChange={handleChange}
        />
        <label htmlFor="location">Location:</label>
        <input
          type="text"
          name="location"
          value={userData.location}
          onChange={handleChange}
        />
        <button type="submit">Add User</button>
        <button type="button" onClick={onClose}>
          Cancel
        </button>
      </form>
    </div>
  );
}