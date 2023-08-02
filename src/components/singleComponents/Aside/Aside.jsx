import React, { useState, useEffect } from 'react';
import './aside.css';

const burgerIcon = <svg width="25" height="25" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
<path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
</svg>

const Aside = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const header = document.getElementById('navbar');

      // Obtenemos la posición del encabezado y de la parte superior del botón
      const headerBottom = header.getBoundingClientRect().bottom;

      // Actualizamos el estado para mostrar u ocultar el botón
      setShowButton(headerBottom <= 0);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return(
    <aside>
      <button id="myButton" className= {showButton ? 'btn btn-primary floating' : 'hidden'} 
        type="button" data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop" aria-controls="staticBackdrop">
          { burgerIcon }
      </button>
      <div className="offcanvas offcanvas-start" data-bs-backdrop="static" tabIndex="-1" id="staticBackdrop" aria-labelledby="staticBackdropLabel">
        <div className="offcanvas-header">
          <button type="button" className="btn-close custom-close-btn" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body">
          <nav className="nav flex-column">
            <a className="nav-link active" href="/">Home</a>
            <a className="nav-link" href="/tienda">Tienda</a>
            <a className="nav-link" href="/contacto">Contacto</a>
            <a className="nav-link" href="/acerca">Acerca de</a>
          </nav>
        </div>
      </div>
    </aside>
  )
};

export default Aside;
