import React from "react";
import One from "../images/1.jpg";
import Two from "../images/2.jpg";
import Three from "../images/3.webp";
import Four from "../images/4.jpg";
import "../styles/Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-header">
        <h1>Welcome to</h1>
        <h1>Trans Voyage Taxi</h1>
      </div>
      <div className="home-image">
        <img src={One} alt="logo" />
      </div>
      <div className="home-content">
        <p>
          Welcome to Trans Voyage Taxi, the premier choice for advanced and
          customer-focused taxi services in the Denver Metro Area. Our full-time
          professional drivers are experts in transportation, prioritizing your
          safety and comfort for all your travel needs.
          <br />
          Whether you're heading to a medical appointment, visiting family, or
          attending a group event, Trans Voyage Taxi has you covered. Our fleet
          of late-model, energy-efficient vehicles reflects our commitment to
          environmental responsibility, ensuring a greener ride for you and our
          community.
          <br />
          Experience the Trans Voyage Taxi difference with our dedication to
          exceptional service and your satisfaction. Your journey is our
          priority.
        </p>
      </div>
      <div className="ride-section">
        <h4>Looking for a Ride?</h4>
        <p>
          Sign up for an account to book your trip. If you already have an
          account, please <Link to="/login">log in</Link> to continue. If you're
          new, please <Link to="/signup">sign up</Link> to get started.
        </p>
      </div>
      <div className="card-container">
        <div className="card">
          <img src={Two} alt="two" className="card-img" />
          <h4>Expert Drivers</h4>
          <p>
            We ensure that we work with the finest professional drivers to
            provide exceptional service to our valued customers.
          </p>
        </div>
        <div className="card">
          <img src={Three} alt="three" className="card-img" />
          <h4>Cutting-Edge Technology</h4>
          <p>
            Our state-of-the-art technology enables us to deliver top-notch
            services to our clients.
          </p>
        </div>
        <div className="card">
          <img src={Four} alt="four" className="card-img" />
          <h4>World-Class Taxi Services</h4>
          <p>
            Trans Voyage Taxi is proud to serve the public in the Denver Metro
            Area with excellence and reliability.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
