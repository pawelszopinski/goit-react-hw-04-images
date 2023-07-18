import React from 'react';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';
import './ImageGallery.css';

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

export default ImageGallery;
