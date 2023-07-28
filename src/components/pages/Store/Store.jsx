import productos from '../../../data/productos.json';
import ProductCard from '../../singleComponents/ProductCard';

import './style.css';


const Store = () => {
  return(
    <>
      <h2>Productos</h2>
      <div className="card-container">
        {productos.map((producto, index) => (
          <ProductCard key={index} producto={producto} />
        ))}
      </div>
    </>
  )
};

export default Store;