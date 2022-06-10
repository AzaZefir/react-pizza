import Slider from 'react-slick';
import { sliderCard } from '../../data/db';

const SliderSlick = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
  };
  return (
    <div>
      <Slider {...settings} className="slider__wrapper">
        {sliderCard.map((slide) => (
          <div key={slide.id} className="slider__img">
            <img src={slide.img} alt="" />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderSlick;
