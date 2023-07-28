import React, { useState } from 'react';
import initialItems from '../../data/productos.json';

const ItemList = () => {
  const [items, setItems] = useState(initialItems);
  const [selectedCategory, setSelectedCategory] = useState('All'); // State para el filtro

  // Función para cambiar el filtro
  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  // Filtrar los elementos según la categoría seleccionada
  const filteredItems = selectedCategory === 'All'
    ? items
    : items.filter(item => item.category === selectedCategory);

  return (
    <div>
      {/* Botones para cambiar el filtro */}
      <button onClick={() => handleCategoryChange('All')}>All</button>
      <button onClick={() => handleCategoryChange('Category A')}>Category A</button>
      <button onClick={() => handleCategoryChange('Category B')}>Category B</button>
      <button onClick={() => handleCategoryChange('Category C')}>Category C</button>

      {/* Mostrar la lista filtrada */}
      <ul>
        {filteredItems.map(item => (
          <li key={item.id}>{item.name} - {item.category}</li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
