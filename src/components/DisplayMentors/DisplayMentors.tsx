import React from 'react'
import './DisplayMentors.css'
import { FlippingCard } from '../FlippingCard/FlippingCard'
import SlidingDisplayCards from '../SlidingDisplayCard/SlidingDisplayCard'
import ScreenHeading from '../../utilities/ScreenHeading/ScreenHeading';


function DisplayMentors() {


  return (
    <div className='display__mentors__container' id='display-mentors-container'>
      <ScreenHeading subHeading={"Meet The Stars"} title={"Our Mentors"} />

      <div className="mentors__rows">
        <FlippingCard />
        <FlippingCard />
        <FlippingCard />
        <FlippingCard />
        <FlippingCard />
      </div>

      <div className="mentors__rows">
        <FlippingCard />
        <FlippingCard />
        <FlippingCard />
        <FlippingCard />
        <FlippingCard />
      </div>
      

    </div>

  )
}

export default DisplayMentors