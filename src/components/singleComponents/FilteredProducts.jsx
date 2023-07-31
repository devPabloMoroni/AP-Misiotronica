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
      <div class="container">
        <button class="btn btn-info mb-4 mx-1" onClick={() => handleCategoryChange('Todos')}>Todos</button>
        <button class="btn btn-info mb-4 mx-1" onClick={() => handleCategoryChange('Celulares')}>Celulares</button>
        <button class="btn btn-info mb-4 mx-1" onClick={() => handleCategoryChange('Computadoras')}>Computadoras</button>
        <button class="btn btn-info mb-4 mx-1" onClick={() => handleCategoryChange('Media')}>Media</button>
      </div>
      
      {/* Mostrar la lista filtrada */}
      <div class="container mx-auto row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
        {filteredItems.map((producto, index) => (
          <ProductCard key={index} producto={producto} />
        ))}
      </div>
    </>
  );
};

export default FilteredProducts;
