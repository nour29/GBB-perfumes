import React, { useState } from "react";
import { useParams } from "react-router-dom";
import euphoria from "../assets/euphoria.jpg";
import mystic from "../assets/mystic.jpg";
import citrus from "../assets/citrus.jpg";
import musk from "../assets/musk.jpg";
import perfume from "../assets/perfume.jpg";

import "./ProductDetails.css";

const productData = [
  {
    id: 1,
    name: "Euphoria",
    description:
      "A refreshing floral scent with hints of jasmine and rose. Perfect for daily wear.",
    price: "₹1,299",
    sizes: ["30ml", "50ml", "100ml"],
    images: [euphoria],
    reviews: [
      { id: 1, user: "Asha", comment: "Lovely fragrance! Lasts all day." },
      { id: 2, user: "Raj", comment: "Fresh and subtle, perfect for office." },
    ],
  },

  {
    id: "2",
    name: "Mystic Oud",
    description: "A bold and spicy fragrance for special occasions.",
    price: "₹2,499",
    sizes: ["50ml", "100ml"],
    images: [mystic],
    reviews: [{ user: "Charlie", text: "Smells luxurious and deep." }],
  },

  {
    id: "3",
    name: "Citrus Bloom",
    description: "A refreshing and zesty citrus blend for daily wear.",
    price: "₹1,599",
    sizes: ["30ml", "50ml", "100ml"],
    images: [citrus],
    reviews: [
      { user: "Aisha", text: "So fresh and energizing!" },
      { user: "Jay", text: "Love it for summer days." },
    ],
  },

  {
    id: "4",
    name: "Royal Musk",
    description: "A rich and elegant musk with timeless appeal.",
    price: "₹2,799",
    sizes: ["30ml", "50ml", "100ml"],
    images: [musk],
    reviews: [
      { user: "Simran", text: "Very elegant and long-lasting." },
      { user: "Arjun", text: "My go-to for special events." },
    ],
  },
];

function ProductDetails() {
  const { id } = useParams();
  const productId = parseInt(id);
  const product = productData.find((p) => p.id === productId);

  const [reviews, setReviews] = useState(product ? product.reviews : []);
  const [newReview, setNewReview] = useState("");

  if (!product) {
    return <h2>Product Not Found</h2>;
  }

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (newReview.trim() === "") return;
    const newRevObj = {
      id: reviews.length + 1,
      user: "Anonymous",
      comment: newReview.trim(),
    };
    setReviews([...reviews, newRevObj]);
    setNewReview("");
  };

  return (
    <div className="product-detail-container">
      <h2>{product.name}</h2>
      <div className="product-detail-main">
        <div className="images-gallery">
          {product.images.map((assets, index) => (
            <img
              key={index}
              src={assets}
              alt={`${product.name} ${index + 1}`}
            />
          ))}
        </div>
        <div className="product-info">
          <p>{product.description}</p>
          <p>
            <strong>Price: </strong>
            {product.price}
          </p>
          <p>
            <strong>Available Sizes: </strong>
            {product.sizes.join(", ")}
          </p>

          {/* Share Button */}
          <button
            onClick={() => {
              navigator.share
                ? navigator.share({
                    title: product.name,
                    text: product.description,
                    url: window.location.href,
                  })
                : alert("Share not supported in this browser");
            }}
          >
            Share this product
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="reviews-section">
        <h3>Reviews</h3>
        {reviews.length === 0 && <p>No reviews yet. Be the first to review!</p>}
        <ul>
          {reviews.map((review) => (
            <li key={review.id}>
              <strong>{review.user}:</strong> {review.comment}
            </li>
          ))}
        </ul>

        <form onSubmit={handleReviewSubmit}>
          <textarea
            value={newReview}
            onChange={(e) => setNewReview(e.target.value)}
            placeholder="Write your review here"
            rows="3"
          />
          <br />
          <button type="submit">Add Review</button>
        </form>
      </div>
    </div>
  );
}

export default ProductDetails;
