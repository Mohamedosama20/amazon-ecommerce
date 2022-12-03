import './Slider.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination} from 'swiper';
import {SliderProducts} from '../../data/products'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
const Slider = () => {
  return (
    <div className='s-container'>
      <Swiper
        modules={[Navigation, Pagination]}
        className='mySwiper'
        navigation={true}
        loopFillGroupWithBlank={true}
      slidesPerView={3}
      spaceBetween={40}
      slidesPerGroup={1}
      loop={true}
      >
      {SliderProducts.map((slide, i) => (
      <SwiperSlide>
      <div className='left-s'>
        <div className='name'>
          <span>{slide.name}</span>
          <span>{slide.detail}</span>
        </div>
        <span>{slide.price}$</span>
        <div>Shop Now</div>
        </div>
        <img src={slide.img} alt='prodcut' className='s-image' />
      </SwiperSlide>
      ))}
      </Swiper>
    </div>
  )
}

export default Slider