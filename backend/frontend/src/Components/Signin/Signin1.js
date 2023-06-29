import React, { useContext, useState } from 'react'
import './Signin.css'
// import logo from '../Assets/logos/logo_white.avif'
import { NavLink, useNavigate } from 'react-router-dom'

import { userContext } from '../../App'

const Signin = () => {

  //----- useContext to hide signin button after sigining in -----//
  const {state, dispatch} = useContext(userContext);
  
  const navigate = useNavigate()
  const [email, setEmail]= useState('')
  const [password, setPassword]= useState('')

  const loginUser= async(e)=>{
    e.preventDefault();

    const res = await fetch('/signin',{
      method:'POST',
      headers:{
        "Content-Type":" application/json"
      },
      body:JSON.stringify({
        email,password
      })
    })
    const  data=res.json()
    if(res.status===400 || !data){
       window.alert(`invalid cresential`)
       console.log(`invalid cresential`)
      }else{
      dispatch({type:'USER', payload:true})//----- from useContetxt -----//
      window.alert(`login succesfull!`)
      navigate('/')
    }

  }

  return (
    <>
    <div className="bgi">
          <div className="div2">
              {/* <img alt='' src={logo}/> */}
              <div className="signInContainer">
                <form  method='POST'>
                  <p className='SHeader'>Sign In</p>
                  <input required
                   className='signInputs'
                   autoComplete='off'
                   name='email' 
                   type='email' 
                   placeholder='email'
                   value={email}
                   onChange={(e)=> setEmail(e.target.value)}/>
                  <br/>
                  <input required
                   className='signInputs'
                   autoComplete='off'
                   name='password' 
                   type='password' 
                   placeholder='password'
                   value={password}
                   onChange={(e)=> setPassword(e.target.value)}/>
                  <br/>
                  {/* <ul>
                      <li className='fac'><i class="fa-brands fa-facebook"></i></li>
                      <li className='goo'><i class="fa-brands fa-google"></i></li>
                      <li className='app'><i class="fa-brands fa-apple"></i></li>
                      <li className='xbo'><i class="fa-brands fa-xbox"></i></li>
                  </ul> */}
                  <input className='cbox' type="checkbox"/>
                  <label className='cboxLabel'>Stay signed in</label>
                  <br/>   
                  <button type='submit' onClick={loginUser} className='SignBtnn'>Login</button>
                  <br/>  
                 
                 <p className='newP'>new user <NavLink className='signElinks' to='/signup'>signup?</NavLink></p>
                </form>
              </div>
            
          </div>
      </div>
  </>
  )
}

export default Signin
