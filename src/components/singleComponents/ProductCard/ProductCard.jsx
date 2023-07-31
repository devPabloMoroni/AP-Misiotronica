import './Card.css';

//TODO - Optimizar el manejo de imagenes agregando toda la carpeta o buscando otra alternativa.
/* const images = {
  image1: require('../../../assets/img/products/Samsung-Galaxy S21-Celulares.jpg'),
  image2: require('../../../assets/img/products/Dell-Inspiron 15-Computadoras.jpg'),
  image3: require('../../../assets/img/products/Sony-Bravia 4K-Media.jpg'),
}; */

/* const images = require.context('../../../assets/img/products', true);
const imageList = images.keys().map(image => images(image));
console.log(imageList); */

const ProductCard = ({ producto }) => {
  return (
      <>
        <div class="col">
          <div class="card">
            <img src={require("../../../assets/img/products/" + producto.imagen)} class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title"> {producto.nombre}</h5>
              <p class="card-text">Marca: {producto.marca}</p>
              <p class="card-text">Modelo:  {producto.modelo}</p>
              <p class="card-text">Precio: ${producto.precio}</p>
              <p class="card-text"><small class="text-muted">Stock: {producto.stock}</small></p>
            </div>
          </div>
        </div>
      </>    
  );
};

export default ProductCard;