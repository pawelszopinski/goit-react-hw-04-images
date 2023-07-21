import React, { useState } from 'react';
import './Searchbar.css';
import PropTypes from 'prop-types'
const Searchbar = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    onSearch(query);
  };

  return (
    <header className="searchbar">
      <form className="form" onSubmit={handleSubmit}>
        <button type="submit" className="button">
          <span className="button-label">Szukaj</span>
        </button>

        <input
          className="input"
          pattern="^[A-Za-z.'\- ]+$"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Wyszukaj obrazy i zdjęcia"
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </form>
    </header>
  );
};
Searchbar.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default Searchbar;
