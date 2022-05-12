import { format } from "date-fns";
import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Rating } from "react-simple-star-rating";
import ResponseModal from "./ResponseModal";

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [reviewId, setReviewId] = useState("");

  function openModal(id) {
    setReviewId(id);
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
    setReviews(JSON.parse(localStorage.getItem("allReviews123")));
  }

  useEffect(() => {
    setReviews(JSON.parse(localStorage.getItem("allReviews123")));
  }, []);

  const items = reviews.map((review, index) => {
    return (
      <Col lg={4} md={6} key={index}>
        <div className="review-card" onClick={() => openModal(review.id)}>
          <div>
            <div className="card-title">
              <h2>{review.place}</h2>
            </div>
            <div className="rating">
              <Rating size={18} initialValue={review.rating} />
            </div>
            <p>{review.content}</p>
            <div className="footer">
              <div className="card-author">
                <p>{review.author}</p>
              </div>
              <div className="card-date">
                <p>{format(new Date(), "dd/mm/yyyy")}</p>
              </div>
              <div className="commentIcon">
                {review.response && (
                  <i className="fa fa-comments" aria-hidden="true"></i>
                )}
              </div>
            </div>
          </div>
        </div>
      </Col>
    );
  });

  return (
    <div className="card">
      <Container>
        <ResponseModal
          modalIsOpen={modalIsOpen}
          closeModal={closeModal}
          id={reviewId}
        />
        <Row className="show-grid ">{items}</Row>
      </Container>
    </div>
  );
};

export default Reviews;
