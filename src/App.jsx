import Header from './components/Header/Header'
import Main from './components/Main/Main';
import About from './components/About/About';
import Service from './components/Servicess/Service';
import Testimonials from './components/Testimonials/Testimonials';
import Packages from './components/Packagess/Packages';
import Contact from './components/Contact/Contact';
import Carousel from './components/Carousel/Carousel';
import Footer from './components/Footer/Footer';

import './index.css'
import 'swiper/css';
import 'swiper/css/pagination';



function App() {

  return (
    <>
    <Header />
    <Main title="THROUGH THE LENS OF PASSION" />
    <About />
    <Service />
    <Testimonials />
    <Packages />
    <Contact />
    <Carousel /> 
    <Footer />
    </>
  )
}

export default App