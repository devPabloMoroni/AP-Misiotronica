import React, { useState } from 'react';

const SearchBar = ({ products, onSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleSearch = () => {
    // Filtrar los productos por el término de búsqueda
    const filteredProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Llamar a la función de búsqueda pasando los productos filtrados
    onSearch(filteredProducts);
  };

  return (
    <div>
      <input
        type="search"
        className="form-control me-2"
        value={searchTerm}
        onChange={handleSearchChange}
        placeholder="Buscar por nombre de producto..."
        aria-label="Buscar"
      />
      <button onClick={handleSearch}>Buscar</button>
    </div>
  );
};

export default SearchBar;
