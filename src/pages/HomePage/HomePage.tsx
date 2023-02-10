import React from 'react'
import { Home } from '../../components/Home/Home';
import Testimonial from '../../components/Testimonial/Testimonial';
import { ContactUs } from '../../components/ContactUs/ContactUs';
import Footer from '../../components/Footer/Footer';
import OurMentors from '../../components/OurMentors/OurMentors';
import { FlippingCard } from '../../components/FlippingCard/FlippingCard';
import DisplayMentors from '../../components/DisplayMentors/DisplayMentors';
// import SlidingDisplayCard from '../../components/SlidingDisplayCard/SlidingDisplayCard';




function HomePage() {
  return (
    <div>
      <Home />

      {/* <FlippingCard /> */}
      {/* <SlidingDisplayCard /> */}
      {/* <OurMentors /> */}
      <DisplayMentors />

      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default HomePage
