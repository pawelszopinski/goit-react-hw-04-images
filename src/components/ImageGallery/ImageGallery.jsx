import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';
import PropTypes from 'prop-types'
const ImageGallery = ({ images, onSelectImage }) => {
  return (
    <ul className="gallery">
      {images.map(image => (
        <ImageGalleryItem
          key={image.id}
          image={image}
          onSelectImage={onSelectImage}
        />
      ))}
    </ul>
  );
};
ImageGallery.propTypes = {
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      webformatURL: PropTypes.string.isRequired,
      largeImageURL: PropTypes.string.isRequired,
    })
  ).isRequired,
  onSelectImage: PropTypes.func.isRequired,
};
export default ImageGallery;
