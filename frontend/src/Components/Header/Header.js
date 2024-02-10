import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Header.css'
import logoimg from '../Assets/imgs/LOGO1.png'
import { userContext } from '../../App'
import { UserAuth } from '../../Context/AuthContext'

const Header = () => {

   const { user } = UserAuth()

   //----- useState to get username when logged in

   const RenderMenu = () => {
      //----- if user is logged in show this elements on the nav bar -----//
      if (user) {
         return (
            <>
               <div className='navSignup'>
                  {/* <i class="fa-solid fa-user"></i> */}
                  <Link to={"logout"}><button className='signButton' title='Log out?'>log out</button></Link>
                  {/* <Link to={"logout"}><button className='signButton'><i class="fa-solid fa-right-from-bracket"></i></button></Link> */}
               </div>
            </>
         )

      } else {
         //----- if user is NOT logged in show this elements on the nav bar -----//
         return (
            <>
               <div className='navSignup'>
                  {/* <i class="fa-solid fa-user"></i>
                 <span className='userName'>{userData.username}</span> */}
                  <Link to={"signin"}><button className='signButton'>Sign in</button></Link>
               </div>

            </>
         )
      }
   }

   return (
      <>
         <div className='NavbarHead'>
            <div className='Logo1'>
               <img className='LogoImg' alt='' src={logoimg} />
               <Link className='logoLInk' to={""}><h1>av<span>zone</span></h1></Link>
            </div>
            <div className='navLinks'>
               <li><Link className='navLink' to={'maps'}>maps</Link></li>
               <li><Link className='navLink' to={'weapons'}>weapons</Link></li>
               <li><Link className='navLink' to={"agents"}>agents</Link></li>
               <li><Link className='navLink' to={'skins'}>skins</Link></li>
            </div>
            {user ?
               (<div className='navSignup'>
                  <Link to={"logout"}><button className='signButton' title='Log out?'>log out</button></Link>
               </div>) :
               (<div className='navSignup'>
                  <Link to={"signin"}><button className='signButton'>Sign in</button></Link>
               </div>
               )
            }
         </div>
      </>
   )
}

export default Header
