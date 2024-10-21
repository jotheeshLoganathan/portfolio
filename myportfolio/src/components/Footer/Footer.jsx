import React from 'react'
import './Footer.css'
import theme_profile from '../../assets/theme_pattern.svg'
import user_icon from '../../assets/user_icon.svg'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-top">
          <div className="footer-top-left">
            <div className="footer-title">
              <h1>PORTFOLIO</h1>
              <img src={theme_profile} alt="" />
            </div>
            <p>I am a frontend developer from Coimbatore</p>
          </div>
          <div className="footer-top-right">
            <div className="footer-email-input">
              <img src={user_icon} alt="" />
              <input type="email" placeholder='Enter your email' />
            </div>
            <div className="footer-subscribe">Subscribe</div>
          </div>
        </div>
        <hr />
        <div className="footer-bottom">
          <p className="footer-bottom-left">&#169;2024 Jotheesh.All rights reserved.</p>
          <div className="footer-bottom-right">
            <p>Term of Services</p>
            <p>Privacy Policy</p>
            <p>Connect with me</p>
          </div>
        </div>
    </div>
  )
}

export default Footer