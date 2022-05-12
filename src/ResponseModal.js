import React from "react";
import Modal from "react-modal";
import ReviewDetail from "./ReviewDetail";

const customStyles = {
  content: {
    top: "0",
    left: "0",
    right: "0",
    bottom: "0",
    backgroundColor: "transparent",
    border: "none",
    display: "block",
    zIndex: "5000",
  },
  overlay: {
    backgroundColor: "#808080",
  },
};
Modal.setAppElement("#root");

export default function ResponseModal({ modalIsOpen, closeModal, id }) {
  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <button className="modalCloseButton" onClick={closeModal}>
          <i class="fa fa-times" aria-hidden="true"></i>
        </button>
        <ReviewDetail reviewId={id} />
      </Modal>
    </div>
  );
}
