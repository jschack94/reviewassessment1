import { format } from "date-fns";
import React, { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import { Rating } from "react-simple-star-rating";

function ReviewDetail({ reviewId }) {
  const [responseValue, setResponse] = useState("");
  const [currentReview, setCurrentReview] = useState("");
  const [edit, setEdit] = useState(false);
  const [allReviews, setAllReviews] = useState([]);

  const current = new Date();
  const date = `${current.getMonth()+1}/${current.getDate()}/${current.getFullYear()}`;


  useEffect(() => {
    const allReviewData = JSON.parse(localStorage.getItem("allReviews123"));
    setAllReviews(allReviewData);
    setCurrentReview(allReviewData.find((prod) => prod.id === reviewId));
  }, []);

  const addResponse = () => {
    const author = "Jonathan Schack";
    if (currentReview?.response || responseValue === "") {
      if (edit) {
        const newReview = {
          ...currentReview,
        };
        newReview.response = responseValue;
        newReview.responseAuthor = author;

        const newAlldata = [...allReviews];
        newAlldata.forEach((item) => {
          if (item.id === reviewId) {
            item.response = responseValue;
            item.responseAuthor = author;
          }
        });
        localStorage.setItem("allReviews123", JSON.stringify(newAlldata));

        setCurrentReview(newReview);
        setResponse("");
        setEdit(false);
      } else {
        return;
      }
    } else {
      const newReview = {
        ...currentReview,
      };
      newReview.response = responseValue;
      newReview.responseAuthor = author;

      const newAlldata = [...allReviews];
      newAlldata.forEach((item) => {
        if (item.id === reviewId) {
          item.response = responseValue;
          item.responseAuthor = author;
        }
      });
      localStorage.setItem("allReviews123", JSON.stringify(newAlldata));

      setCurrentReview(newReview);
      setResponse("");
    }
  };

  const editResponse = () => {
    setResponse(currentReview.response);
    setEdit(true);
  };

  return (
    <>
      <div className="review">
        <div className="review-content">
          <div className="review-place">
            <h1>{currentReview.place}</h1>
          </div>
          <div className="review-rating">
            <Rating size={18} initialValue={currentReview.rating} />
          </div>
          <div className="review-text">
            <p>{currentReview.content}</p>
          </div>
          <div className="review-footer">
            <div className="review-author">
              <p>{currentReview.author}</p>
            </div>
            <div className="review-date">
              <p>{format(new Date(), "dd/mm/yyyy")}</p>
            </div>
          </div>
        </div>
      </div>

      {currentReview?.response && (
        <div className="review-response">
          <div className="response-replayIcon">
            <i className="fa fa-reply" aria-hidden="true"></i>
          </div>
          <div className="response-text">
            <h2>{currentReview.response}</h2>
            <div className="review-footer">
              <div className="review-author">
                <p>{currentReview.responseAuthor}</p>
              </div>
              <div className="review-date">
                <p>{date}</p>
              </div>
            </div>
          </div>
          <div className="response-setting">
            <i
              onClick={editResponse}
              className="fa fa-ellipsis-h"
              aria-hidden="true"
            ></i>
          </div>
        </div>
      )}

      <div className="responseInput">
        <input
          type="text"
          placeholder="Add..."
          onChange={(e) => setResponse(e.target.value)}
          value={responseValue}
        />
        <i
          onClick={addResponse}
          className="fa fa-paper-plane"
          aria-hidden="true"
        ></i>
      </div>
    </>
  );
}

export default ReviewDetail;
