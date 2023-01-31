import React from 'react'
import { Home } from '../../components/Home/Home';
import Testimonial from '../../components/Testimonial/Testimonial';
import { ContactUs } from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';


function HomePage() {
  return (
    <div>
    <Home/>
    <Testimonial/>
    <ContactUs/>
    <Footer/>
    </div>
  )
}

export default HomePage
