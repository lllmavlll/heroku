import React from 'react'
import './About.css'
import AboutImg from '../Assets/imgs/About-bgi.jpg'

const About = () => {
  return (
    <>
      <div className='AboutMain'>
        <div className='AboutCentre'>
          <div className='AboutH1'>
            <h1>
              ABOUT
            </h1>
          </div>
          <div className='GridMain'>
            <div className='AboutNote'>
                <h4>
                What is Mavzone?
                </h4>
                <p>
                This is the place where Valorant players get the data and insights they need to better understand the game we all love. We are committed to building the best Valorant stats and analytics site on the internet.
                </p>
                
                <h4>
                Objective
                </h4>
                <p>
                with a mission to provide gamers with the tools they need to measure and improve their gameplay. We love Valorant as much as you and pride ourselves on developing Valorbuff in a way that supports and improves the community.
                </p>
                
                <h4>
                I Need Support
                </h4>
                <p>
                Please consult our Frequently Asked Questions, it has answers to many common questions. If you still can’t find what you need, please contact us on Twitter 
                </p>

                <h4>
                COPYRIGHT NOTICE
                </h4>
                <p>
                Copyright 2023 All Rights reserved. VALORANT is a registered trademark of Riot Games.
                </p>
            </div>
            <div className='GridImg'>
                <img src={AboutImg} alt='about-img'></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
