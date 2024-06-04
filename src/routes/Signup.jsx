import React, { useState } from "react";
import Logo from "../images/logo.png";
import "../styles/Signup.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fname: "",
    lname: "",
    phoneNumber: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        process.env.REACT_APP_CUSTOMER_SIGNUP,
        formData
      );
      if (response.status === 201) {
        setMessage("Signup successful! Redirecting to login page...");
        setMessageType("success");
        setTimeout(() => {
          navigate("/login");
        }, 1000);
      }
    } catch (error) {
      setMessage("Signup failed. Please try again.");
      setMessageType("error");
    }
  };

  return (
    <div className="signup-container">
      <img src={Logo} alt="logo" className="logo" />
      {message && <p className={`message ${messageType}`}>{message}</p>}
      <form className="signup-form" onSubmit={handleSignup}>
        <label>First Name</label>
        <input
          type="text"
          name="fname"
          required
          placeholder="First Name"
          value={formData.fname}
          onChange={handleChange}
        />
        <label>Last Name</label>
        <input
          type="text"
          name="lname"
          required
          placeholder="Last Name"
          value={formData.lname}
          onChange={handleChange}
        />
        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          required
          placeholder="Phone Number"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <label>Email Address</label>
        <input
          type="email"
          name="email"
          required
          placeholder="Email Address"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
        <label>Confirm Password</label>
        <input
          type="password"
          name="confirmPassword"
          required
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={handleChange}
        />
        <button className="signup-button">Signup</button>
      </form>
    </div>
  );
};

export default Signup;
