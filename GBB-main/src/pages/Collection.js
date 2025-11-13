import React from "react";
import "./Collection.css";
import { Link } from "react-router-dom";

const Collection = () => {
  const products = [
    {
      id: "1",
      name: "Euphoria Blossom",
      image: "https://via.placeholder.com/200x200?text=Euphoria",
    },
    {
      id: "2",
      name: "Mystic Oud",
      image: "https://via.placeholder.com/200x200?text=Mystic+Oud",
    },
    {
      id: "3",
      name: "Citrus Bloom",
      image: "https://via.placeholder.com/200x200?text=Citrus+Bloom",
    },
    {
      id: "4",
      name: "Royal Musk",
      image: "https://via.placeholder.com/200x200?text=Royal+Musk",
    },
  ];

  return (
    <div className="collection-container">
      <h1>Our Exclusive Collection</h1>
      <p>Explore our range of premium fragrances crafted with elegance.</p>
      <div className="collection-grid">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/product/${product.id}`}
            className="collection-item-link"
          >
            <div className="collection-item">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Collection;
<Link to={`/product/2`}>
  <button className="view-details">View Mystic Oud</button>
</Link>;
