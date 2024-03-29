import React, { useState } from 'react';
import initialItems from '../../data/productos.json';

import ProductCard from './ProductCard/ProductCard';

const FilteredProducts = () => {
  const [items] = useState(initialItems);
  const [selectedCategory, setSelectedCategory] = useState('Todos'); // State para el filtro

  // Función para cambiar el filtro
  const handleCategoryChange = (categoria) => {
    setSelectedCategory(categoria);
  };

  // Filtrar los elementos según la categoría seleccionada
  const filteredItems = selectedCategory === 'Todos'
    ? items
    : items.filter(producto => producto.categoria === selectedCategory);

  return (
    <>
      {/* Botones para cambiar el filtro */}
      <div className="container">
        <button className="btn btn-secondary btn-sm mb-4 mx-1" onClick={() => handleCategoryChange('Todos')}>Todos</button>
        <button className="btn btn-secondary btn-sm mb-4" onClick={() => handleCategoryChange('Celulares')}>Celulares</button>
        <button className="btn btn-secondary btn-sm mb-4 mx-1" onClick={() => handleCategoryChange('Computadoras')}>Computadoras</button>
        <button className="btn btn-secondary btn-sm mb-4" onClick={() => handleCategoryChange('Media')}>Media</button>
      </div>
      {/* Mostrar la lista filtrada */}
      <div className="container mx-auto row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 mb-4">
        {filteredItems.map((producto, index) => (
          <ProductCard key={index} producto={producto} />
        ))}
      </div>
    </>
  );
};

export default FilteredProducts;
