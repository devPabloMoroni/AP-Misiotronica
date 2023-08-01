import Carousel from '../../singleComponents/Carousel/Carousel';
import FeaturedProducts from '../../singleComponents/FeaturedProducts';
import Information from './Information/Information';

const Home = () => {
  return(
    <div class="mb-5">
      <Carousel />

      <Information />

      <div class="px-4 py-3 my-3 text-center">
        <h3 class="display-7 fw-bold">PRODUCTOS DESTACADOS</h3>
      </div>
      <FeaturedProducts />

     
    </div>
  )
};

export default Home;