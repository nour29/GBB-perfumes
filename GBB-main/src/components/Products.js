import React from "react";
import "./Products.css";
import { useNavigate } from "react-router-dom";
import euphoria from "../assets/euphoria.jpg";
import mystic from "../assets/mystic.jpg";
import citrus from "../assets/citrus.jpg";
import musk from "../assets/musk.jpg";

const productData = [
  {
    id: 1,
    name: "Euphoria",
    description: "A refreshing floral scent.",
    price: "₹1,299",
    image: [euphoria],
  },
  {
    id: 2,
    name: "Mystic Oud",
    description: "Strong woody aroma with spice.",
    price: "₹1,899",
    image: [mystic],
  },
  {
    id: 3,
    name: "Citrus Bloom",
    description: "A light citrus fragrance.",
    price: "₹999",
    image: [citrus],
  },
  {
    id: 4,
    name: "Royal Musk",
    description: "Rich musky essence for evenings.",
    price: "₹1,499",
    image: [musk],
  },
];

function Products() {
  const navigate = useNavigate();

  const handleCardClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="products-container">
      <h2>Featured Perfumes</h2>
      <div className="product-grid">
        {productData.map((product) => (
          <div
            key={productData.id}
            className="product-card"
            onClick={() => handleCardClick(productData.id)}
          >
            <img src={assets} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <span>{product.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;
