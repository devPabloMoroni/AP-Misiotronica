import image from './broken-screen.png';

const NotFound = () => {
  return(
    <div className="notFound">
      <h2>404</h2>
      <img src={image} alt='broken-screen'/>
      <p>El recurso solicitado no existe</p>
    </div>
  )
};

export default NotFound;