import './Contact.css'
import { useLayoutEffect, useRef } from 'react';
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'

const Contact = () => {
  const el = useRef()
  const tl = useRef()
  
  useLayoutEffect (() => {
    gsap.registerPlugin(ScrollTrigger) 
    const ctx = gsap.context(() => {
      tl.current = gsap.timeline({
        scrollTrigger:{
          trigger:".contact-containerr",
          start: "top 900px",
        }
      })
      .fromTo("#contact-container1",{
        opacity: 0,
        x: -160,
      },{
        opacity: 1,
        x: 0, 
        duration: 1
      })
      .fromTo("#contact-input1",{
        opacity: 0,
        x: -160,
      },{
        opacity: 1,
        x: 0, 
        duration: 1
      })
    },el)
    return () => {
      gsap.killTweensOf(".contact-containerr")
    }
    
}, [])
useLayoutEffect (() => {
gsap.registerPlugin(ScrollTrigger) 
const ctx = gsap.context(() => {
  tl.current = gsap.timeline({
    scrollTrigger:{
      trigger:".contact-image",
      start: "top 900px"
    }
  })
  .fromTo("#image-contact",{
    opacity: 0,
    x: 160,
  },{
    opacity: 1,
    x: 0, 
    duration: 2
  })
},el)
return () => {
  gsap.killTweensOf(".contact-image")
}
}, [])
  
  return (
    <section className="contact" ref={el}>
      <img className='contact-image' id='image-contact' src="/images/Imagen-contact.jpg" alt="" />
      <div className='contact-containerr '>
        <div className="contact-container" id='contact-container1'>
          <h2>GET IN TOUCH</h2>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio, fugiat similique ut rerum illo minus.</p>
        </div>
        <div className="contact-intput" id='contact-input1'>
          <input type="text"  name="name" placeholder="NAME"/>
          <input type="text"  name="email" placeholder="EMAIL ADRESS"/>
          <textarea name="contact-me" id="contact-me" cols="30" rows="10"   placeholder="GET IN TOUCH"></textarea>
          <button type="submit">SUBMIT</button>
        </div>
      </div>
      
    </section >
  )
}

export default Contact