import carouselImg1 from './Carrousel-img1.jpg';
import carouselImg2 from './Carrousel-img2.jpg';
import carouselImg3 from './Carrousel-img3.jpg';

import './carouselStyle.css';

const Carousel = () => {
  return(
    <>
      <div id="carouselExampleCaptions" class="carousel slide carousel-fade">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src={ carouselImg1 } class="d-block w-100 image" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={ carouselImg2 } class="d-block w-100 image" alt="..." />
          </div>
          <div class="carousel-item">
            <img src={ carouselImg3 } class="d-block w-100 image" alt="..." />
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
};

export default Carousel;