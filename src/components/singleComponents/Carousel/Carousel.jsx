import carouselImg1 from './Carrousel-img1.jpg';
import carouselImg2 from './Carrousel-img2.jpg';
import carouselImg3 from './Carrousel-img3.jpg';

import './carouselStyle.css';

const Carousel = () => {
  return(
    <>
      <div id="carouselExampleCaptions" className="carousel slide carousel-fade">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={ carouselImg1 } className="d-block w-100 image" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={ carouselImg2 } className="d-block w-100 image" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={ carouselImg3 } className="d-block w-100 image" alt="..." />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
};

export default Carousel;