import {ScrollSmoother} from 'gsap/all'

import React from 'react'

const NavBar = () => {
    const handleLogoClick = () => {
        if(ScrollSmoother.get()){
            ScrollSmoother.get().scrollTo(0 , false ,'top top');
        }else{
            window.scrollTo({top:0, behavior:'smooth'})
        }
    };
    
  return (
    <div className='nav fixed top-0 left-0 z-50  md:p-90 p-3'>
      <img src="/public/images/nav-logo.svg" 
      alt=""
      className='md:w-24 w-20 cursor-pointer'
      onClick={handleLogoClick} />
    </div>
  )
}

export default NavBar
