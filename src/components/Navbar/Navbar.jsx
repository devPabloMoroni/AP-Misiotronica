import navLogo from './NavLogo.png';

const Navbar = () => {
  return(
    <>
      <nav class="navbar navbar-expand-lg bg-body-tertiary mt-2 mb-3">
        <div class="container-fluid">
          <a class="navbar-brand" href="/">
            <img src={ navLogo }  width="30" height="24" alt="..." class="d-inline-block align-text-top" />
            Misiontrónica
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/">Home</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/tienda">Tienda</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/contacto">Contacto</a>
              </li>
              <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="/acerca">Acerca de</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button class="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
    </>
  )
};

export default Navbar;