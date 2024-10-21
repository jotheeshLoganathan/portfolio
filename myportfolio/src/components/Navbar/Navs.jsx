import React, { useRef, useState } from 'react'
import './Navbar.css'
// import Logo from '../../assets/logo.svg'
import underline from '../../assets/nav_underline.svg'
import AnchorLink from 'react-anchor-link-smooth-scroll';
import theme_profile from '../../assets/theme_pattern.svg'
import menu_open from '../../assets/menu_open.svg'
import menu_close from '../../assets/menu_close.svg'


const Navs = () => {

  const [menu,setMenu] = useState('home');
  const menuRef = useRef();

  const openMenu = () =>{
    menuRef.current.style.right="0";
  }
  const closeMenu = () =>{
    menuRef.current.style.right="-350px";
  }


  return (
    <>
    <div className="nav">
      <div className="nav-title">
        <h2>PORTFOLIO</h2>
        <img src={theme_profile} alt="" />
      </div>
      <img className='nav-mob-open' src={menu_open} onClick={openMenu} alt="" />
        <ul ref={menuRef} className="nav-menu">
          <img className='nav-mob-close' onClick={closeMenu} src={menu_close} alt="" />
            <li><AnchorLink className='anchor-link' href='#home'><p onClick={()=>setMenu("home")}>Home</p></AnchorLink>{menu=== "home"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#about'><p onClick={()=>setMenu("about")}>About Me</p></AnchorLink>{menu=== "about"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#services'><p onClick={()=>setMenu("services")}>Services</p></AnchorLink>{menu=== "services"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#work'><p onClick={()=>setMenu("work")}>Project</p></AnchorLink>{menu=== "work"?<img src={underline} alt=''/>:<></>}</li>
            <li><AnchorLink className='anchor-link' offset={50} href='#contact'><p onClick={()=>setMenu("contact")}>Contact</p></AnchorLink>{menu=== "contact"?<img src={underline} alt=''/>:<></>}</li>
        </ul>
        <div className="nav-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect With Me</AnchorLink></div>
        
    </div>
    
    </>
  )
}

export default Navs