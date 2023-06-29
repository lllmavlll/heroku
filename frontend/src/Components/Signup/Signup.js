import React, { useState } from 'react'
// import {Form, Link} from 'react-router-dom'
import './Signup.css'
import '../Signin/Signin.css'
// import logo from '../Assets/logos/logo_white.avif'
import { NavLink, useNavigate,   } from 'react-router-dom'


const Signup = () => {
  const navigate = useNavigate()
  const [user, setUser]=useState({
      username:"",
      email:"",
      password:"",
      cpassword:""
  })

  let name, value;
  const userHandler=(e)=>{
    console.log(user);
    name = e.target.name;
    value = e.target.value;
    
    setUser({...user, [name]:value})

  }

  const saveData = async(e)=>{
    e.preventDefault();

    const {username, email, password, cpassword} = user

    const res =await fetch('/signup',{
      method:'POST',
      headers:{
        "content-type":"application/json"
      },
      body:JSON.stringify({
        username, email, password, cpassword
      })
    })

    const data = await res.json();
    if(res.status=== 422||!data){
      window.alert("signup failed")
      console.log("signup failed")
    }else{
      window.alert("signup success!")
      console.log("signup success!")
    }
    navigate('/signin')

  }

  return (
    <>
     <div className="signUpBgi">
          <div className="div2">
              {/* <img alt='' src={logo}/> */}
              <div className="signInContainer">
                  <p className='SHeader'>Sign up</p>
                  <form  method='POST'>
                    <input 
                    required 
                    className='signInputs' 
                    autoComplete='off' 
                    value={user.name} 
                    name='username' 
                    type='text' 
                    onChange={userHandler}
                    placeholder='username '/>
                    <br/>
                    <input 
                    required 
                    className='signInputs' 
                    autoComplete='off' 
                    value={user.email} 
                    name='email' 
                    type='email'
                    onChange={userHandler} 
                    placeholder='email'/>
                    <br/>
                    <input 
                    required 
                    className='signInputs' 
                    autoComplete='off' 
                    value={user.password} 
                    name='password' 
                    type='password'
                    onChange={userHandler}
                    placeholder='password '/>
                    <br/>
                    <input 
                    required 
                    className='signInputs' 
                    autoComplete='off' 
                    value={user.cpassword} 
                    name='cpassword' 
                    type='password'
                    onChange={userHandler} 
                    placeholder='confirm password'/>
                    <br/>
                    <input type='submit' onClick={saveData} className='SignBtnn' value='sign up'/>
                    <br/>
                 <p className='newP'> already have an account  <NavLink className='signElinks' to='/signin '> Login?</NavLink></p> 
                 </form>
              </div>
            
          </div>
      </div>
    </>
  )
}

export default Signup
