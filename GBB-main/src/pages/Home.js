import React from "react";
import "./Home.css";
import euphoria from "../assets/euphoria.jpg";
import mystic from "../assets/mystic.jpg";
import citrus from "../assets/citrus.jpg";
import musk from "../assets/musk.jpg";
import perfume from "../assets/perfume.jpg";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      <section className="hero">
        <div className="hero-text">
          <h1>Discover Your Signature Scent</h1>
          <p>Luxury perfumes crafted for elegance and allure.</p>
          <Link to="/collection">
            <button className="explore-btn">Explore Collection</button>
          </Link>
        </div>
        <img className="hero-image" src={perfume} alt="Perfume" />
      </section>

      <section className="featured">
        <h2>Featured Scents</h2>
        <div className="featured-cards">
          <div className="card">
            <img src={euphoria} alt="Euphoria" />
            <p>Euphoria Blossom</p>
          </div>
          <div className="card">
            <img src={mystic} alt="Mystic Oud" />
            <p>Mystic Oud</p>
          </div>
          <div className="card">
            <img src={musk} alt="Royal Musk" />
            <p>Royal Musk</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
