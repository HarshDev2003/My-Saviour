import React, { useEffect } from 'react'
import "./Preloader.css"

import { preLoaderAnim } from '../animation/index'
const Preloader = () => {
  useEffect (()=> {
    preLoaderAnim()
  },[]);


  return (
    <div className="preloader">
        <div className="texts-container space-x-8">
            <span>Developer</span>
            <span>Designer</span>
            <span>Freelancer</span>
        </div>
    </div>
  )
}

export default Preloader