import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import Button from './Button/Button';
import Modal from './Modal/Modal';

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const [query, setQuery] = useState('');

  const perPage = 12;

  const searchImages = async query => {
    setQuery(query);
    setCurrentPage(1);
  };

  const loadMoreImages = async () => {
    if (currentPage < totalPages) {
      setCurrentPage(prevPage => prevPage + 1);
    }
  };

  const handleSelectImage = image => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  useEffect(() => {
    const fetchData = async () => {
      if (!query) {
        return;
      }

      setLoading(true);

      try {
        const response = await axios.get(
          `https://pixabay.com/api/?key=36237308-42aa754ef31b34db7b4fcf11d&q=${query}&page=${currentPage}&per_page=${perPage}&image_type=photo&pretty=true`
        );

        setImages(prevImages => [...prevImages, ...response.data.hits]);
        setTotalPages(Math.ceil(response.data.totalHits / perPage));
      } catch (error) {
        console.error('Błąd podczas pobierania obrazków:', error);
      }

      setLoading(false);
    };

    fetchData();
  }, [query, currentPage]);

  return (
    <div className="app">
      <Searchbar onSearch={searchImages} />
      <ImageGallery images={images} onSelectImage={handleSelectImage} />
      {loading && <Loader />}
      {!loading && currentPage < totalPages && (
        <Button onClick={loadMoreImages}>Load more</Button>
      )}
      {selectedImage && (
        <Modal image={selectedImage} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default App;
