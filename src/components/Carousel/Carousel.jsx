import './Carousel.css'
import { useLayoutEffect, useRef } from 'react';
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Carousel = () => {
  
  const el = useRef()
  const tl = useRef()
  
  useLayoutEffect (() => {
    gsap.registerPlugin(ScrollTrigger) 
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger:{
          trigger:".carousel",
          start: "top 900px",
        }
      })
      .fromTo("#img-carousel-1",{
        opacity: 0,
        x: -100,
      },{
        opacity: 1,
        x: 0, 
        duration: 1
      })
      .fromTo("#img-carousel-2",{
        opacity: 0,
        x: -100,
      },{
        opacity: 1,
        x: 0, 
        duration: 1
      })
      .fromTo("#img-carousel-3",{
        opacity: 0,
        x: -100,
      },{
        opacity: 1,
        x: 0, 
        duration: 1
      })
      .fromTo("#img-carousel-4",{
        opacity: 0,
        x: -100,
      },{
        opacity: 1,
        x: 0, 
        duration: 1
      })
      .fromTo("#img-carousel-5",{
        opacity: 0,
        x: -100,
      },{
        opacity: 1,
        x: 0, 
        duration: 1
      })
      .fromTo("#img-carousel-6",{
        opacity: 0,
        x: -100,
      },{
        opacity: 1,
        x: 0, 
        duration: 1
      })
    },el)
    return () => {
      gsap.killTweensOf(".carousel")
    }
    
}, [])
  
  return (
    <div className="carousel" ref={el}>
      <img src="/images/carrosel-1.jpg" id='img-carousel-1' alt="" />
      <img src="/images/carrosel-2.jpg" id='img-carousel-2' alt="" />
      <img src="/images/carrosel-3.jpg" id='img-carousel-3' alt="" />
      <img src="/images/carrosel-4.jpg" id='img-carousel-4' alt="" />
      <img src="/images/carrosel-5.jpg" id='img-carousel-5' alt="" />
      <img src="/images/carrosel-6.jpg" id='img-carousel-6' alt="" />
    </div>
  )
}

export default Carousel