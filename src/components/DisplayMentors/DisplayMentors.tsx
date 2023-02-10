import React from 'react'
import './DisplayMentors.css'
import { FlippingCard } from '../FlippingCard/FlippingCard'
// import SlidingDisplayCards from '../SlidingDisplayCard/SlidingDisplayCard'


function DisplayMentors() {
  return (
    <div className='display__mentors__container'>
      {/* <SlidingDisplayCards /> */}
      <FlippingCard />
      <FlippingCard />
      <FlippingCard />
      <FlippingCard />
      <FlippingCard />


      </div>
  )
}

export default DisplayMentors