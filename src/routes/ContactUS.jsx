import React, { useState } from "react";
import Logo from "../images/logo.png";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/ContactUS.css";

const ContactUS = () => {
  const name = localStorage.getItem("name");
  const mail = localStorage.getItem("email");
  const phonenumber = localStorage.getItem("phoneNumber");
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: name || "",
    phoneNumber: phonenumber || "",
    email: mail || "",
    request: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      const response = await axios.post(
        process.env.REACT_APP_CONTACT_US,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (response.status === 201) {
        setTimeout(() => {
          navigate("/");
        }, 1000);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="contactus-container">
      <div className="contactus-header">
        <img src={Logo} alt="logo" className="contactus-logo" />
        <h3>Contact Us Form</h3>
      </div>
      <div className="contactus-form">
        <form onSubmit={handleSubmit}>
          <label htmlFor="request">Inquiry</label>
          <select
            id="request"
            name="request"
            value={formData.request}
            onChange={handleChange}
            required
          >
            <option value="" disabled>
              Select One
            </option>
            <option value="complaint">Complaint</option>
            <option value="question">Question</option>
            <option value="receipt request">Receipt Request</option>
            <option value="trip estimate">Trip Estimate</option>
          </select>
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactUS;
