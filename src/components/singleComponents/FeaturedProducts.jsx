import React, { useState } from 'react';
import initialItems from '../../data/productos.json';

import ProductCard from './ProductCard/ProductCard';

const FeaturedProducts = () => {
  const [items] = useState(initialItems);

  // Función para filtrar los elementos con la propiedad "destacado" en true
  const getHighlightedItems = () => {
    return items.filter(producto => producto.destacado === true);
  };

  return (
    <div className="mx-auto row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
      {/* Mostrar la lista filtrada */}
        {getHighlightedItems().map((producto,index) => (
          <ProductCard key={index} producto={producto} />
        ))}
    </div>
  );
};

export default FeaturedProducts;
