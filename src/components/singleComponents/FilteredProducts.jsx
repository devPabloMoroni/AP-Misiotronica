import React, { useState } from 'react';
import initialItems from '../../data/productos.json';

import ProductCard from './ProductCard';

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
      <button onClick={() => handleCategoryChange('Todos')}>Todos</button>
      <button onClick={() => handleCategoryChange('Celulares')}>Celulares</button>
      <button onClick={() => handleCategoryChange('Computadoras')}>Computadoras</button>
      <button onClick={() => handleCategoryChange('Media')}>Media</button>

      {/* Mostrar la lista filtrada */}
      <div className="card-container">
        {filteredItems.map((producto, index) => (
          <ProductCard key={index} producto={producto} />
        ))}
      </div>
    </>
  );
};

export default FilteredProducts;
