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
        <div className="card-group col mb-2">
          <div className="card">
            <img src={require("../../../assets/img/products/" + producto.imagen)} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-center"> {producto.nombre}</h5>
              <p className="card-text">Marca: {producto.marca}</p>
              <p className="card-text">Modelo:  {producto.modelo}</p>
              <p className="card-text text-end fw-bold">Precio: ${producto.precio}</p>
              <p className="card-text"><small className="text-muted">Stock: {producto.stock}</small></p>
            </div>
          </div>
        </div>
      </>    
  );
};

export default ProductCard;