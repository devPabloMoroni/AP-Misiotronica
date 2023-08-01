import image from './broken-screen.png';

const NotFound = () => {
  return(
    <div className="container col-xxl-8 px-4 py-5 bg-light-subtle">
      <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
        <div className="col-10 col-sm-8 col-lg-6">
          <img src={image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width="700" height="500" loading="lazy" />
        </div>
        <div className="col-lg-6">
          <p className="display-5 fw-bold lh-1 mb-3 text-warning-emphasis">ERROR 404</p>
          <p className="lead">El recurso no se encuentra disponible :(</p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href='/'>
              <button type="button" className="btn btn-success btn-lg px-4 gap-3">Ir a Home</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
};

export default NotFound;