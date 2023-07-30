//TODO - Optimizar el manejo de imagenes agregando toda la carpeta o buscando otra alternativa.
const images = {
  image1: require('../../../assets/img/products/Samsung-Galaxy S21-Celulares.jpg'),
  image2: require('../../../assets/img/products/Dell-Inspiron 15-Computadoras.jpg'),
  image3: require('../../../assets/img/products/Sony-Bravia 4K-Media.jpg'),
};


const ProductCard = ({ producto }) => {
  return (
    <div class="card-group">
      <div class="card">
        <img src={images.image1} class="card-img-top" alt="..." />
        <div class="card-body">
          <h5 class="card-title"> {producto.nombre}</h5>
          <p class="card-text">Marca: {producto.marca}</p>
          <p class="card-text">Modelo:  {producto.modelo}</p>
          <p class="card-text">Precio: ${producto.precio}</p>
          <p class="card-text"><small class="text-muted">Stock: {producto.stock}</small></p>
        </div>
      </div>
    </div>

/*     <div className="card">
      <h2>{producto.nombre}</h2>
      <p>Marca: {producto.marca}</p>
      <p>Modelo: {producto.modelo}</p>
      <p>Precio: ${producto.precio}</p>
      <p>Stock: {producto.stock}</p>
    </div> */

  );
};

export default ProductCard;