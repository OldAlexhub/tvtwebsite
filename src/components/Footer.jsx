import React from "react";
import "../styles/Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section about">
          <h4>About Us</h4>
          <p>
            Trans Voyage Taxi is dedicated to providing top-notch transportation
            services in the Denver Metro Area. Our focus is on safety, comfort,
            and environmental responsibility.
          </p>
        </div>

        <div className="footer-section contact">
          <h4>Contact Us</h4>
          <p>Email: info@transvoyagetaxi.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 1450 S. Havana St, STE 712, Aurora, Colorado 80012</p>
        </div>
      </div>
      <div className="footer-bottom">
        &copy; {new Date().getFullYear()} Trans Voyage Taxi | Designed by Old
        Alex Hub, LLC
      </div>
    </footer>
  );
};

export default Footer;
