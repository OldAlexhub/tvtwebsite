import React from "react";
import Letter1 from "../assets/Letters1.pdf";
import "../styles/Announcements.css";

const Announcements = () => {
  return (
    <div className="announcements-container">
      <h1>Announcements</h1>
      <div className="pdf-container">
        <iframe
          src={Letter1}
          title="Announcements PDF"
          width="100%"
          height="600px"
        />
      </div>
    </div>
  );
};

export default Announcements;
