import React, { useState } from 'react';
import initialItems from '../../data/productos.json';

import ProductCard from './ProductCard';

const FeaturedProducts = () => {
  const [items] = useState(initialItems);

  // Función para filtrar los elementos con la propiedad "destacado" en true
  const getHighlightedItems = () => {
    return items.filter(producto => producto.destacado === true);
  };

  return (
    <>
      {/* Mostrar la lista filtrada */}
      <div className="card-container">
        {getHighlightedItems().map((producto,index) => (
          <ProductCard key={index} producto={producto} />
        ))}
      </div>
    </>
  );
};

export default FeaturedProducts;
