import React, { useState } from "react";
import "./Modal.css";

export default function Modal({ buttonText = 'Open', modalIcon, modalTitle = 'Welcome to Modal', customContent }) {
  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  if(modal) {
    document.body.classList.add('active-modal')
  } else {
    document.body.classList.remove('active-modal')
  }

  return (
    <>
      <button onClick={toggleModal} className="btn-agenda">
        <strong>{modalIcon}{buttonText}{modalIcon}</strong>
      </button>
      {modal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <br></br>
            <h2>{modalIcon} {modalTitle} {modalIcon}</h2>
            {customContent}
            <button className="close-modal btn-modal" onClick={toggleModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}