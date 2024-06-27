import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import { Pagination } from 'swiper/modules';
import pictures from './data';
import './slider.css';

function Slider() {
  return (
    <section id='slider' className='slider__main'>
      <div className='container slider__container'>
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          breakpoints={{
            300: {slidesPerView: 1},
            601: {slidesPerView: 2},
            1025: {slidesPerView: 3},
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          autoplay={true}
          className="mySwiper"
        >
          {
            pictures.map(picture => (
              <SwiperSlide className='swiper__slide' key={picture.id}>
                <img className='swiper_img' src={picture.image} alt="" />
              </SwiperSlide>
            ))
          }
        </Swiper>
      </div>
    </section>
  );
};

export default Slider;