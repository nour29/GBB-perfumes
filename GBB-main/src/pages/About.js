import React from "react";
import "./About.css";
import ee from "../assets/ee.jpg";
const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p>
        Welcome to our Perfume Shop – where luxury meets passion. Our mission is
        to bring you the finest fragrances, crafted with the purest ingredients
        and timeless elegance.
      </p>
      <div className="about-section">
        <img src={ee} alt="Perfume Bottles" />
        <div>
          <h2>Why Choose Us?</h2>
          <ul>
            <li>Premium long-lasting fragrances</li>
            <li>Elegant and eco-friendly packaging</li>
            <li>Curated by professional perfumers</li>
            <li>Fast and safe shipping</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
