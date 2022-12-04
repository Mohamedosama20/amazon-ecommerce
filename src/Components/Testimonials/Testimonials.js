import './Testimonials.css'
import Hero from '../../assets/testimonialHero.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import { TestimonialsData } from '../../data/testimonials'
const Testimonials = () => {
  return (
    <div className='testimonials'>
        <div className='t-wrapper'>
        <div className='t-container'>
            <span>Top Rated</span>
            <span>Seedily say has suitable disposal and boy.<br/>Exercise joy man children rejoiced.</span>
        </div>
        <img src={Hero} alt='hero'/>
        <div className='t-container'>
            <span>100K</span>
            <span>Happy Customers With Us</span>
            </div>
            </div>

            <div className='t-reviews'>
            Reviews
            </div>
            <div className='carousal'>
                <Swiper
                slidesPerView={3}
                spaceBetween={20}
                slidesPerGroup={1}
                className='t-carousal'
                breakpoints={{
                    856: {
                    slidesPerView: 3
                },
                640: {
                    slidesPerView: 2
                },
                0: {
                    slidesPerView: 1
                },
                }}>
                    {
                        TestimonialsData.map((testimonial, i) => (
                            <SwiperSlide>
                                <div className='testimonial'>
                                    <img src={testimonial.image} alt='testimonial'/>
                                    <span>{testimonial.comment}</span>
                                    <hr/>
                                    <span>{testimonial.name}</span>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
                        
    </div>
    )
}

export default Testimonials