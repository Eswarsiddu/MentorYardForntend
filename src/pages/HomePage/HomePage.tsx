import React from 'react'
import { Home } from '../../components/Home/Home';
import Testimonial from '../../components/Testimonial/Testimonial';
import { ContactUs } from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';
import OurMentors from '../../components/OurMentors/OurMentors';


function HomePage() {
  return (
    <div>
      <Home />
      <OurMentors />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default HomePage
