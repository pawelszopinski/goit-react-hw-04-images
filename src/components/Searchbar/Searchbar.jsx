import React, { useState } from 'react';
import './Searchbar.css';
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

export default Searchbar;
