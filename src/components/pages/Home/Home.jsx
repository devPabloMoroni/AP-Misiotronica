import Carousel from '../../singleComponents/Carousel/Carousel';
import FeaturedProducts from '../../singleComponents/FeaturedProducts';
import Information from './Information/Information';
import Aside from '../../singleComponents/Aside/Aside';

const Home = () => {
  return(
    <div className="mb-5">
      <Carousel />
      <Aside />
      <Information />

      <div className="px-4 py-3 my-3 text-center">
        <h3 className="display-7 fw-bold">PRODUCTOS DESTACADOS</h3>
      </div>
      <FeaturedProducts />

     
    </div>
  )
};

export default Home;