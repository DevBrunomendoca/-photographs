import './Service.css'
import { useLayoutEffect} from 'react';
import {gsap} from 'gsap'
import {ScrollTrigger} from 'gsap/ScrollTrigger'


const Service = () => {

  useLayoutEffect (() => {
  
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(".service-img", {
      y:0,
      opacity: 1, 
      scrollTrigger: {
        trigger: ".service-img",
        start: "top 1000px",
        }
    })
    
    
    return () => {
      gsap.killTweensOf(".service-img", "service-title")
    }
  },[])

  return (
    <section className="services">
      <h2 className="service-img" >SOME OF OUR RECENT WORK</h2>
      <img className='service-img' src="/images/service-1.jpg" alt="serviço 1"  id="img-1"/>
      <img className='service-img'  src="/images/service-2.jpg" alt="serviço 2"  id="img-2"/>
      <img className='service-img'  src="/images/service-3.jpg" alt="serviço 3"  id="img-3"/>
      <img className='service-img'  src="/images/service-4.jpg" alt="serviço 4"  id="img-4"/>
      <img className='service-img'  src="/images/service-5.jpg" alt="serviço 5"  id="img-5"/>
      <img className='service-img'  src="/images/service-6.jpg" alt="serviço 6"  id="img-6"/>
      <p className="hidden">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id velit beatae deleniti unde, numquam itaque, maiores veritatis minus exercitationem cum laudantium corporis aut voluptates tempore doloribus accusantium neque?</p>
    </section>
  )
}

export default Service