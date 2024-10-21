import React from 'react'
import './Hero.css'
import Profile_image from '../../assets/download.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => {
  return (
    <div id='home' className='hero'>
        <img src={Profile_image} alt="" />
        <h1><span>I'm Jotheesh,</span> frontend developer based in INDIA.</h1>
        <p>I am a frontend developer from TamilNadu, INDIA with Fresher Profile.</p>
        <div className="hero-action">
            <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
            <div className="hero-resume">My Resume</div>
        </div>
    </div>
  )
}

export default Hero