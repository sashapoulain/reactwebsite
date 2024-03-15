import React from 'react'
import './Hero.css'
import darkArrow from  '../../assets/image/arrr.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className='hero-text'>
        <h1>We ensure better education for a better world</h1>
        <p>Our cutting-edge curriculum is designed to empower students with the knowledge, skills and experiences needed to excel in the dynamic field of education</p>
        <button className='btn'>Explore More <img src={darkArrow}/></button>
      </div>
    </div>
  )
}

export default Hero
