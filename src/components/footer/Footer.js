import React from "react";
import "./Footer.css";

export const Footer = () => {
  return (
    <footer className="footer">
      <div className="f-grid">
        <div className="f-column">
          <h4>Social Media</h4>
          <div>Facebook</div>
          <div>Instagram</div>
          <div>Telegram</div>
          <div>LinkedIn</div>
        </div>

        <div className="f-column">
          <h4>About</h4>
          <div>Contact us</div>
          <div>Careers</div>
        </div>

        <div className="f-column">
          <h4>Location</h4>
          <div>Auckland</div>
          <div>New-York</div>
        </div>
      </div>
    </footer>
  );
};
