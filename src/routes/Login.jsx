import React, { useContext, useState } from "react";
import Logo from "../images/logo.png";
import { Link, useNavigate } from "react-router-dom";
import "../styles/Login.css";
import axios from "axios";
import AuthContext from "../components/AuthContext";

const Login = () => {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState(null);
  const [messageType, setMessageType] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        process.env.REACT_APP_CUSTOMER_LOGIN,
        formData
      );

      if (response.status === 200) {
        const { name, phone, token, mail } = response.data;
        localStorage.setItem("name", name);
        localStorage.setItem("phoneNumber", phone);
        localStorage.setItem("token", token);
        localStorage.setItem("email", mail);
        login();
        setMessage("Login successful! Redirecting to book a trip...");
        setMessageType("success");

        setTimeout(() => {
          navigate("/bookatrip");
        }, 1000);
      }
    } catch (error) {
      setMessage("Login failed. Please check your email and password.");
      setMessageType("error");
    }
  };

  return (
    <div className="login-container">
      <img src={Logo} alt="logo" className="logo" />
      <form className="login-form" onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          name="email"
          required
          placeholder="Enter your email"
          value={formData.email}
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          required
          placeholder="Enter your Password"
          value={formData.password}
          onChange={handleChange}
        />
        <button className="login-button">Login</button>
        <p>
          Don't have an account?{" "}
          <Link to="/signup" className="signup-link">
            Signup
          </Link>
        </p>
      </form>
      {message && <p className={`message ${messageType}`}>{message}</p>}
    </div>
  );
};

export default Login;
