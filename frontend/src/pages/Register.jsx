import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css"; // Reusing the same styles as login page

const Register = () => {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  // Handle registration
  const handleRegister = () => {
    if (user.password !== user.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    // Get existing users from localStorage
    const existingUsers = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email is already registered
    const emailExists = existingUsers.some((u) => u.email === user.email);
    if (emailExists) {
      alert("Email is already registered. Try logging in.");
      return;
    }

    // Add new user
    const newUser = {
      username: user.username,
      email: user.email,
      password: user.password, // Note: Password is stored as plain text (Consider hashing in real projects)
    };

    existingUsers.push(newUser);
    localStorage.setItem("users", JSON.stringify(existingUsers));

    alert("Registration Successful! Please login.");
    navigate("/login");
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2>Register</h2>
        <div className="input-group">
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={user.email}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={user.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button onClick={handleRegister}>Register</button>
        <p>
          Already have an account? <Link to="/login">Login</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
