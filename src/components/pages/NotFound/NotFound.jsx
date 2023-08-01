import image from './broken-screen.png';

const NotFound = () => {
  return(
    <div class="container col-xxl-8 px-4 py-5 bg-light-subtle">
      <div class="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div class="col-10 col-sm-8 col-lg-6">
          <img src={image} class="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div class="col-lg-6">
          <p class="display-5 fw-bold lh-1 mb-3 text-warning-emphasis">404</p>
          <p class="lead">El recurso no se encuentra disponible :(</p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href='/'>
              <button type="button" class="btn btn-success btn-lg px-4 gap-3">Ir a Home</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default NotFound;