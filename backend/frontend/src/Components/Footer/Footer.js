import React from 'react'
import './Footer.css'
import { Link } from 'react-router-dom'
import logoimg from '../Assets/imgs/LOGO1.png'



const Footer = () => {
  return (
    <>
    <div className='FooterMain'>
      <div className='Logo2'>
        <img className='LogoImg'alt='' src={logoimg}/>
      <Link className='logoLInk' to={""}><h1>av<span>zone</span></h1></Link>
      </div>
      <div className='navLinks1'>
          <li><Link className='navLink1' to={"about"}>About </Link></li>
          <li><Link className='navLink1' to={'support'}>support</Link></li>
          {/* <li><Link className='navLink' to={'weapons'}>polices</Link></li> */}
          {/* <li><Link className='navLink' to={'skins'}>skins</Link></li> */}
      </div>
      <div className='socials'>
        <p>follow us</p>
        <li><a target='blank' href='https://www.linkedin.com/in/mahesh-k-n-732121251/'><i class="fa-brands fa-linkedin-in"></i></a></li>
        <li><a target='blank' href='https://github.com/lllmavlll?tab=repositories'><i class="fa-brands fa-github"></i></a></li>
        <li><a target='blank' href='https://twitter.com/riotgames'><i class="fa-brands fa-twitter"></i></a></li>
        <li><a target='blank' href='https://www.youtube.com/RiotGames/'><i class="fa-brands fa-youtube"></i></a></li>
      </div>
    </div>
    <div className='copyWrite'>
      <p>Copyright 2023 all rights reserved.</p>
    </div>
    </>
  )
}

export default Footer
