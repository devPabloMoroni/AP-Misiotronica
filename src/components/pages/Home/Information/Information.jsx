import logo from '../../../Navbar/NavLogo.png'

const Information = () => {
  return(
    <>
      <div className="px-4 py-2 my-5 text-center">
        <img className="d-block mx-auto mb-4" src={logo} alt="" width="72" height="57" />
        <h1 className="display-5 fw-bold">MISIOTRÓNICA</h1>
        <div className="col-lg-6 mx-auto">
          <p className="lead mb-4">Nos comprometemos a brindarle la mejor atención y garantizar que 
          la calidad de nuestros productos son los mejores.</p>
          <p className="lead mb-4">Estamos siempre trabajando para mejorar nuestro servicio y ofrecer productos tecnológicos de 
            ultima generación.
          </p>
          <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <a href='/tienda'><button type="button" className="btn btn-primary btn-lg px-4 gap-3">Ir a la Tienda</button></a>
            <a href='/contacto'><button type="button" className="btn btn-outline-secondary btn-lg px-4">Contáctenos!</button></a>
          </div>
        </div>
      </div>
    </>
  )
};

export default Information;