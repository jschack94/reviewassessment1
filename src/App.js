import React from "react";
import Reviews from "./Reviews";
import reviewsData from "./reviewsData";

function App() {
  localStorage.setItem("allReviews123", JSON.stringify(reviewsData));
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-text">Reviews</div>
      </nav>
      <Reviews />
    </div>
  );
}

export default App;
