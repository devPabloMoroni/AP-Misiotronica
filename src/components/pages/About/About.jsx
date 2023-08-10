import Aside from '../../singleComponents/Aside/Aside';

const About = () => {
  return(
    <>
      <Aside />
      <div className="bg-dark text-secondary px-4 py-4">
          <h2 className="display-5 fw-bold text-white py-5 text-center">SOBRE NOSOTROS</h2>
          <div className="col-lg-6 mx-auto mb-5">
            <h3 className="fw-bold text-white text-start">Pasión por la Tecnología</h3>
            <p className="fs-5 text-white text-justify">
              En MISOTRONICA, estamos comprometidos a llevar la emoción y la innovación de la tecnología a su alcance. Nuestra historia comenzó con una pasión compartida por los productos electrónicos y su capacidad para transformar nuestras vidas. Desde entonces, nos hemos esforzado por ser más que una tienda en línea; aspiramos a ser su destino confiable para descubrir y adquirir lo último en dispositivos electrónicos. Nuestro equipo está formado por entusiastas de la tecnología que están constantemente investigando y seleccionando productos que no solo cumplen con sus expectativas, sino que también elevan sus experiencias tecnológicas a nuevos niveles.
            </p>
          </div>

          <div className="col-lg-6 mx-auto mb-5">
            <h3 className="fw-bold text-white text-start">Compromiso con la Calidad y la Experiencia del Cliente</h3>
            <p className="fs-5 text-white text-justify">
              En MISIOTRONICA, la calidad es nuestra máxima prioridad. Cada producto en nuestro catálogo es seleccionado cuidadosamente y sometido a rigurosas pruebas de calidad para garantizar su rendimiento y durabilidad. Sabemos que la tecnología es más que solo productos; es la experiencia que ofrecen. Es por eso que nos esforzamos por brindarle un servicio excepcional desde el momento en que explora nuestro sitio hasta que su nuevo dispositivo llega a sus manos. Nuestro equipo de atención al cliente está listo para responder sus preguntas, proporcionar asesoramiento experto y asegurarse de que su compra sea sin complicaciones.
            </p>
          </div>

          <div className="col-lg-6 mx-auto mb-5">
            <h3 className="fw-bold text-white text-start">Visión y Compromiso Futuro</h3>
            <p className="fs-5 text-white text-justify">
              Nuestra visión en MISIOTRONICA se extiende más allá de las ventas de productos electrónicos. Buscamos fomentar una comunidad donde los amantes de la tecnología puedan conectarse, aprender y compartir ideas. A medida que avanzamos hacia el futuro, estamos comprometidos a mantenernos a la vanguardia de las últimas tendencias tecnológicas y a expandir nuestra gama de productos para satisfacer sus necesidades cambiantes. Ya sea que sea un profesional ávido en busca de herramientas de vanguardia o un entusiasta casual que desee explorar nuevas fronteras, estamos aquí para ser su socio confiable en el emocionante mundo de la electrónica.
            </p>
          </div>
          
          <div className="col-lg-6 mx-auto">
            <div className="d-grid gap-2 d-sm-flex">
              <a href="/contacto">
                <button type="button" className="btn btn-outline-info btn-lg px-4 me-sm-3 fw-bold">Contáctenos!</button>
              </a>
            </div>
          </div>
      </div>
    </>
  )
};

export default About;