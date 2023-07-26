import productos from '../../../data/productos.json';
import './style.css';

const ProductCard = ({ producto }) => {
  return (
    <div className="card">
      <h2>{producto.nombre}</h2>
      <p>Marca: {producto.marca}</p>
      <p>Modelo: {producto.modelo}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
    </div>
  );
};

const Store = () => {
  return(
    <div className="store">
      <h2>Productos</h2>
      <div className="card-container">
        {productos.map((producto, index) => (
          <ProductCard key={index} producto={producto} />
        ))}
      </div>
    </div>
  )
};

export default Store;