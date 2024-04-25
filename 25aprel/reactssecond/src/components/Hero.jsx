import React from 'react'
import HeroInp from "./HeroInp";

import backImage from "../assets/image/bg-masthead.jpg"

const Hero = () => {
  return (
    <div className='heros' style={{backgroundImage:`url(${backImage})`, width:"1903px", height:"611px"}}>
        
        <h1 className='herotext'>Generate more leads with a professional landing page!</h1>
        <HeroInp/>
    </div>
  )
}

export default Hero