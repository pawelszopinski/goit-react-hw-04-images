import './Modal.css';
import React, { useEffect } from 'react';

const Modal = ({ image, onClose }) => {
  const handleCloseModal = () => {
    onClose();
  };

  const handleKeyDown = event => {
    if (event.keyCode === 27) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  });

  return (
    <div className="overlay" onClick={handleCloseModal}>
      <div className="modal">
        <img src={image.largeImageURL} alt="" />
      </div>
    </div>
  );
};

export default Modal;
