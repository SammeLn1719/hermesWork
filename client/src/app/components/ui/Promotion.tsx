import React, { Component } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import style from './../../assets/styles/standard.module.scss';


import 'swiper/css';




const Promotion:React.FunctionComponent = () => {
  return<>
    <section className={style.wrapperPromotion}>
      <div className={style.wrapperPromotionBorder}>
            <Swiper
            
            spaceBetween={50}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            scrollbar={{ draggable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log('slide change')}
            >
            <SwiperSlide>
              <div className={style.PromotionItemSlider}>
                1
              </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={style.PromotionItemSlider}>
                2
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className={style.PromotionItemSlider}>
                3
            </div>
            </SwiperSlide>
            ...
          </Swiper>
          </div>
    </section>
  </>
}

export default Promotion;