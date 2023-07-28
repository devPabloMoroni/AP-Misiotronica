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

export default ProductCard;