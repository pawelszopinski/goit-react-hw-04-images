import React from 'react';
import './ImageGalleryItem.css';

const ImageGalleryItem = ({ image, onSelectImage }) => {
  const handleClick = () => {
    onSelectImage(image);
  };

  return (
    <li className="gallery-item">
      <img src={image.webformatURL} alt="" onClick={handleClick} />
    </li>
  );
};

export default ImageGalleryItem;
