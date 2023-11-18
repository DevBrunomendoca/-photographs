import './Packages.css'
import { useLayoutEffect, useRef } from 'react';
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Packages = () => {

useLayoutEffect (() => {
  
  gsap.registerPlugin(ScrollTrigger)
  gsap.to(".pack-title", {
    y:0,
    opacity: 1, 
    scrollTrigger: {
      trigger: ".pack-title",
      start: "top 900px",
      }
  })
  return () => {
    gsap.killTweensOf(".pack-title")
  }
},[])
useLayoutEffect (() => {
  
  gsap.registerPlugin(ScrollTrigger)
  gsap.to(".pack-container", {
    x:0,
    opacity: 1, 
    scrollTrigger: {
      trigger: ".pack-container",
      start: "top 900px",
      }
  })
  return () => {
    gsap.killTweensOf(".pack-container")
  }
},[])







  return (
    <section className="packages" >
      <h2 className='pack-title'>OUR FEATURED PACKAGES</h2>
      <div className="pack">
        <div className='pack-container' id='pack-container-1'>
          <img src="./public/images/collection-1.jpg" alt="" />
          <h3>WEDDING COLLECTION 1</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <span>VIEW MORE</span>
        </div>
        <div className='pack-container'>
          <img src="./public/images/collection-2.jpg" id='pack-container-2' alt="" />
          <h3>WEDDING COLLECTION 2</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <span>VIEW MORE</span>
        </div>
        <div className='pack-container'>
          <img src="./public/images/collection-3.jpg" id='pack-container-3' alt="img" />
          <h3>WEDDING COLLECTION 3</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
          <span>VIEW MORE</span>
        </div>
      </div>
    </section>
  )
}

export default Packages