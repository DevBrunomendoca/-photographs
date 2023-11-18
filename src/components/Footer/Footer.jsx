import './Footer.css'
import { useLayoutEffect} from 'react';
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Footer = () => {
  
  useLayoutEffect (() => {
  
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".footer", {
      y:0,
      opacity: 1, 
      scrollTrigger: {
        trigger: ".footer",
        start: "top 1000px",
        }
    })
    return () => {
      gsap.killTweensOf(".footer")
    }
  },[])

  return (
    <footer className='footer'>
      <h3>BRUNO MENDONÇA</h3>
      <div className="line"></div>
      <div className='social-medias'>
        <a href="#">HOME</a>
        <a href="#">ABOUT</a>
        <a href="#">SERVICES</a>
        <a href="#">TESTIMONIALS</a>
        <a href="#">CONTACT</a>
        <a href="#">SEARCH</a>
      </div>
      <div className="line"></div>
      <div className="developed">
      <p>© Copyright | Developed By BRUNO MENDONÇA</p>
      <div>
        <a href="#"><img src="./public/images/facebook.png" alt="Logo facebook"/></a>
        <a href="#"><img src="./public/images/instagram.png" alt="Logo intagram"/></a>
        <a href="#"><img src="./public/images/linkedin.png" alt="Logo linkedin"/></a>
      </div>
      </div>
    </footer>
  )
}

export default Footer