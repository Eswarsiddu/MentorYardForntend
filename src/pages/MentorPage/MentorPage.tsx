import React from 'react'
import MentorDashboard from '../../components/MentorDashboard/MentorDashboard'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer';


function MentorPage() {
  return (
    <div>
      <NavBar/>
      <MentorDashboard/>
      <Footer/>
    </div>
  )
}

export default MentorPage