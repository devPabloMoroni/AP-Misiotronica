import navLogo from './NavLogo.png';

import SearchBar from '../singleComponents/SearchBar/SearchBar';
import ShopCart from '../singleComponents/ShopCart/ShopCart';

const Navbar = () => {
  return(
    <>
      <nav id="navbar" className="navbar navbar-expand-lg bg-body-tertiary mt-2 mb-3">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src={ navLogo }  width="60" height="50" alt="Logo" className="d-inline-block align-middle" />
            MISIOTRONICA
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" 
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/tienda">Tienda</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/contacto">Contacto</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/acerca">Acerca de</a>
              </li>
            </ul>
            <ShopCart/>
            <SearchBar />
          </div>
        </div>
      </nav>
    </>
  )
};

export default Navbar;