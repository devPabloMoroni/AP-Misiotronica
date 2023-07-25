import BannerImage from './assets/BannerImage.jpg';

const Banner = () => {
  return(
    <div className="banner">
      <img src={ BannerImage } alt="Logo" width="30" height="24" />
    </div>
  )
};

export default Banner;