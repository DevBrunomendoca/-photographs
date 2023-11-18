import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { useLayoutEffect } from 'react';
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

import './Main.css'

const Main = ({title}) => {

  useLayoutEffect (() => {
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".hidden-top", {
      y:0,
      opacity: 1, 
      scrollTrigger: {
        trigger: ".hidden-top",
        start: "top 950px",
        }
    })
    return () => {
      gsap.killTweensOf(".hidden-top")
    }
  }, [])


  return (
    
    <div className='main'>
      
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      ><div className='container-title'>
        <h1 className='title hidden-top'>{title}</h1>
        <div className="button hidden-top">
          <div className="border"></div>
          <button>BOOK WITH ME</button>
        </div>
      </div>
      
        <SwiperSlide><img src="./public/images/slider-image-1.jpg" alt="Slider-one" /></SwiperSlide>
        <SwiperSlide><img src="./public/images/slider-image-2.jpg" alt="Slider-one" /></SwiperSlide>
        <SwiperSlide><img src="./public/images/slider-image-3.jpg" alt="Slider-one" /></SwiperSlide>
        <SwiperSlide><img src="./public/images/slider-image-4.jpg" alt="Slider-one" /></SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Main