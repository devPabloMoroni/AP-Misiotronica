import Aside from '../../singleComponents/Aside/Aside';

const About = () => {
  return(
    <>
      <Aside />
      <div className="bg-dark text-secondary px-4 py-5 text-center">
        <div className="py-5">
          <h1 className="display-5 fw-bold text-white">SOBRE NOSOTROS</h1>
          <div className="col-lg-6 mx-auto">
            <p className="fs-5">En MISIOTRONICA buscamos destacar por nuestro conocimiento y 
            trabajamos constanstemente para establecernos como la opción ideal para sus compras de tecnología. 
            Todos nuestros vendedores se encuentran altamente capacitados para asesorarlo y ofrecerle exactamente
             lo que necesita.
            </p>
            <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
              <a href="/contacto">
                <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Contáctenos!</button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
};

export default About;