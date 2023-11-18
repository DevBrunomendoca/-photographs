import './Testimonials.css'
import { useLayoutEffect} from 'react';
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Testimonials = () => {
  
  useLayoutEffect (() => {
  
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".container", {
      y:0,
      opacity: 1, 
      scrollTrigger: {
        trigger: ".container",
        start: "top 1000px",
        }
    })
    
    
    return () => {
      gsap.killTweensOf(".container")
    }
  },[])
  
  return (
    <section className="testimonials">
      <div className="container">
        <img src="./public/images/aspas-duplas.png" id="aspas" alt="imagens-aspas"/>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod minus culpa ab a provident excepturi!</p>
        <p>LORENA + ROBERTO</p>
        <img src="./public/images/foto-casal.jpg" alt="" id="foto-casal"></img>
      </div>
    </section>
  )
}

export default Testimonials