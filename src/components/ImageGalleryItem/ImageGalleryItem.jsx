import React from 'react';
import './ImageGalleryItem.css';
import PropTypes from 'prop-types';
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
ImageGalleryItem.propTypes = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string.isRequired,
  }).isRequired,
  onSelectImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
