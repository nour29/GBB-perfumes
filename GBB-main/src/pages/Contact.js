import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Feel free to reach out anytime.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message..." rows="5" required />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;
