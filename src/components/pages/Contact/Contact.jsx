import Aside from '../../singleComponents/Aside/Aside';

const telefono = <svg width="2em" height="2em" fill="currentColor" className="bi p-2" viewBox="0 0 16 16">
<path d="M8 1a5 5 0 0 0-5 5v1h1a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a6 6 0 1 1 12 0v6a2.5 2.5 0 0 1-2.5 2.5H9.366a1 1 0 0 1-.866.5h-1a1 1 0 1 1 0-2h1a1 1 0 0 1 .866.5H11.5A1.5 1.5 0 0 0 13 12h-1a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1h1V6a5 5 0 0 0-5-5z"/>
</svg>;

const email = <svg width="2em" height="2em" fill="currentColor" className="bi p-2" viewBox="0 0 16 16">
<path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2H2Zm3.708 6.208L1 11.105V5.383l4.708 2.825ZM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2-7-4.2Z"/>
<path d="M14.247 14.269c1.01 0 1.587-.857 1.587-2.025v-.21C15.834 10.43 14.64 9 12.52 9h-.035C10.42 9 9 10.36 9 12.432v.214C9 14.82 10.438 16 12.358 16h.044c.594 0 1.018-.074 1.237-.175v-.73c-.245.11-.673.18-1.18.18h-.044c-1.334 0-2.571-.788-2.571-2.655v-.157c0-1.657 1.058-2.724 2.64-2.724h.04c1.535 0 2.484 1.05 2.484 2.326v.118c0 .975-.324 1.39-.639 1.39-.232 0-.41-.148-.41-.42v-2.19h-.906v.569h-.03c-.084-.298-.368-.63-.954-.63-.778 0-1.259.555-1.259 1.4v.528c0 .892.49 1.434 1.26 1.434.471 0 .896-.227 1.014-.643h.043c.118.42.617.648 1.12.648Zm-2.453-1.588v-.227c0-.546.227-.791.573-.791.297 0 .572.192.572.708v.367c0 .573-.253.744-.564.744-.354 0-.581-.215-.581-.8Z"/>
</svg>;

const chat = <svg width="2em" height="2em" fill="currentColor" className="bi p-2" viewBox="0 0 16 16">
<path d="M5 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
<path d="m2.165 15.803.02-.004c1.83-.363 2.948-.842 3.468-1.105A9.06 9.06 0 0 0 8 15c4.418 0 8-3.134 8-7s-3.582-7-8-7-8 3.134-8 7c0 1.76.743 3.37 1.97 4.6a10.437 10.437 0 0 1-.524 2.318l-.003.011a10.722 10.722 0 0 1-.244.637c-.079.186.074.394.273.362a21.673 21.673 0 0 0 .693-.125zm.8-3.108a1 1 0 0 0-.287-.801C1.618 10.83 1 9.468 1 8c0-3.192 3.004-6 7-6s7 2.808 7 6c0 3.193-3.004 6-7 6a8.06 8.06 0 0 1-2.088-.272 1 1 0 0 0-.711.074c-.387.196-1.24.57-2.634.893a10.97 10.97 0 0 0 .398-2z"/>
</svg>;



const Contact = () => {
  return(
    <div className="container">
      <Aside />
      <div className="px-4 py-3 my-3 text-center">
        <h2 className="display-6 fw-bold">CONTACTO</h2>
      </div>

      <div className="row align-items-md-stretch">
        <div className="col-md-6 col-lg-4 mb-3">
          <div className="h-100 p-5 bg-body-tertiary border rounded-3 text-center">
            <div className="feature-icon d-inline-flex align-items-center 
                justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                  {telefono}
              </div>
              <h3 className="fs-2">Teléfonos</h3>
              <p>+549 3758 336699</p>
              <p>+549 3751 224488</p>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-3">
          <div className="h-100 p-5 bg-body-tertiary border rounded-3 text-center">
            <div className="feature-icon d-inline-flex align-items-center 
                justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                  {email}
              </div>
              <h3 className="fs-2">Email</h3>
              <p>contacto@misiotronica.com.ar</p>
              <p>soporte@misiotronica.com.ar</p>
              <p>ventas@misiotronica.com.ar</p>
              <a href="mailto:contacto@misiotronica.com.ar">
                <button type="button" className="btn btn-primary">Enviar Correo</button>
              </a>
            </div>
        </div>
        <div className="col-md-12 col-lg-4 mb-3">
          <div className="h-100 p-5 bg-body-tertiary border rounded-3 text-center">
            <div className="feature-icon d-inline-flex align-items-center 
                justify-content-center text-bg-primary bg-gradient fs-2 mb-3">
                  {chat}
              </div>
              <h3 className="fs-2">Chat</h3>
              <p>Chatea con nosotros!</p>
              <a href="https://wa.me/543758336699/?text=Hola! Estoy mirando la Web de Misiotronica y tengo una consulta..." 
              target="_blank" rel="noreferrer">
                <button type="button" className="btn btn-primary">Ir al Chat</button>
              </a>
            </div>
        </div>
      </div>

      <div>
        <div className="col-md-12 mb-3">
          <div className="h-100 p-5 bg-body-tertiary border rounded-3 text-center">
            <h3 className="fs-2">Ninguna de las anteriores?</h3>
            <h3 className="fs-5">Dejanos un mensaje y nos contactámos nosotros!</h3>
            <form className="form-inline">
              <div className="form-group form-floating mb-3">
                <input type="name" className="form-control" id="floatingName" placeholder="Juan Perez" required />
                <label htmlFor="floatingName">Nombre</label>
              </div>
              <div className="form-group form-floating mb-3">
                <input type="phone" className="form-control" id="floatingPhone" placeholder="2964 549941" />
                <label htmlFor="floatingPhone">Teléfono</label>
              </div>
              <div className="form-group form-floating mb-3">
                <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" required />
                <label htmlFor="floatingInput">Correo electrónico</label>
              </div>
              <div className="form-group form-floating">
                <input type="text" className="form-control" id="floatingMessage" placeholder="Mensaje" required />
                <label htmlFor="floatingMessage">Mensaje</label>
              </div>
              <button type="submit" className="btn btn-primary mt-3">Enviar</button>
            </form>   
          </div>
        </div>
      </div>
    </div>
  )
};

export default Contact;