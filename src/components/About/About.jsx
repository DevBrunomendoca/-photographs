import './About.css'
import { useLayoutEffect, useRef } from 'react';
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const About = () => {
  const el = useRef()
  const tl = useRef()



useLayoutEffect (() => {
      gsap.registerPlugin(ScrollTrigger) 
      const ctx = gsap.context(() => {
        tl.current = gsap.timeline({
          scrollTrigger:{
            trigger:".hidden-left",
            start: "top 900px",

          }
        })
        .fromTo("#hidden-left-1",{
          opacity: 0,
          x: -160,
        },{
          opacity: 1,
          x: 0, 
          duration: 2
        })
        .fromTo("#hidden-left-2",{
          opacity: 0,
          x: -160,
        },{
          opacity: 1,
          x: 0, 
          duration: 2
        })
      },el)
      return () => {
        gsap.killTweensOf(".hidden-leftt")
      }
      
}, [])
useLayoutEffect (() => {
  gsap.registerPlugin(ScrollTrigger) 
  const ctx = gsap.context(() => {
    tl.current = gsap.timeline({
      scrollTrigger:{
        trigger:".hidden-right",
        start: "top 1000px"
      }
    })
    .fromTo("#image-about",{
      opacity: 0,
      x: 160,
    },{
      opacity: 1,
      x: 0, 
      duration: 2
    })
  },el)

  return () => {
    gsap.killTweensOf(".hidden-right")
  }
  
}, [])
useLayoutEffect (() => {
  
  gsap.registerPlugin(ScrollTrigger)
  gsap.to(".about-title", {
    y:0,
    opacity: 1, 
    scrollTrigger: {
      trigger: ".about-title",
      start: "top 1000px",
      }
  })
  return () => {
    gsap.killTweensOf(".about-title")
  }
},[])

  return (
    <section className='about' ref={el}>
      <h2 className='about-title'>ABOUT ME</h2>
      <div className="container-welcome hidden-left" id='hidden-left-1'>
        <h3 className='welcome '>WELCOME</h3>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus molestiae corporis culpa ut ducimus nam consectetur accusantium omnis. Ex, laudantium iusto. Deleniti aperiam incidunt fugiat? Pariatur quasi voluptas aperiam, quidem quos sed tempore sint laborum officiis, veniam, reiciendis nostrum cum.</p>
        <p className=''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo corrupti laborum eum animi? Mollitia consequatur, quo fuga cupiditate laborum reprehenderit.</p>
      </div>
      <div className="social-media hidden-left" id='hidden-left-2'>
        <h3 className=''>FINDE ME ON</h3>
        <div className="social-media-logo hidden-left">
          <a href="#"> <img src="/images/facebook.png" className='hidden-left' alt="image" /></a>
          <a href="#"> <img src="/images/instagram.png" className='hidden-left' alt="image" /></a>
          <a href="#"> <img src="/images/linkedin.png" className='hidden-left' alt="image" /></a>
        </div>
      </div>
      <img className="hidden-right" id="image-about" src="/images/ImageComACamera.jpg" alt="" />
    </section>
  )
}

export default About