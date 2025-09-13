import Team from "../components/About/Team";
import Services from "../components/About/Services";
import React from 'react'
import HeroSection from "../components/About/HeroSection";

const About = () => {
  return (
    <div>
      <HeroSection/>  
      <Services/>
      <Team/>
    </div>
  )
}

export default About