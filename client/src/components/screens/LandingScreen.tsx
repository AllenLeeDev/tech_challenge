import React from 'react'
import {TypeWriter} from "../atoms/TypeWriter"
import "../styles/landingPage.css"



const LandingScreen: React.FC = () => {
    return(
      <div className="container">
      <TypeWriter />
      </div>
    )
}

export default LandingScreen