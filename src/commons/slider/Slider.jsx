import SliderImg from './../../assets/img/Без названия.jpg';
import Slider from 'react-slick';

const SliderSlick = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <div>
      <Slider {...settings} className="slider__wrapper">
        <div className='slider__img'>
          <img src={SliderImg} alt="" />
        </div>
        <div>
          <img src={SliderImg} alt="" />
        </div>
        <div>
          <img src={SliderImg} alt="" />
        </div>
        <div>
          <img src={SliderImg} alt="" />
        </div>
        <div>
          <img src={SliderImg} alt="" />
        </div>
        <div>
          <img src={SliderImg} alt="" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderSlick;
