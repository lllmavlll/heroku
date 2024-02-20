import React, { useState } from 'react'
import './Signup.css'
import '../Signin/Signin.css'
import { NavLink } from 'react-router-dom'
import { UserAuth } from '../../Context/AuthContext'
import { Toaster, toast } from 'sonner'
import { useNavigate } from 'react-router-dom'


const Signup = () => {
  const navigate =useNavigate()
  const { createUser } = UserAuth()

  const [inputValue, setInputValue] = useState({
    username: "",
    email: "",
    password: "",
    cpassword: ""
  })

  const userHandler = (e) => {
    const { name, value } = e.target

    setInputValue({
      ...inputValue,
      [name]: value
    })
  }

  const saveData = async (e) => {
    e.preventDefault();
    const { username, email, password, cpassword } = inputValue
    if (password !== cpassword) {
      toast.warning('password do not match')
    } else {
      try {
        const loadingToast = toast.loading('Loading...')
        await createUser(email, password)
        navigate('/')
        toast.dismiss(loadingToast)
      } catch (error) {
        toast.error(String(error.code).split("/")[1].replaceAll("-", " "))
      }
    }
  }

  return (
    <>
      <div className="signUpBgi">
        <div className="div2">
          {/* <img alt='' src={logo}/> */}
          <div className="signInContainer">
            <p className='SHeader'>Sign up</p>
            <form onSubmit={e=>saveData(e)}>
              <input
                required
                className='signInputs'
                autoComplete='off'
                value={inputValue.username}
                name='username'
                type='text'
                onChange={userHandler}
                placeholder='username ' />
              <br />
              <input
                required
                className='signInputs'
                autoComplete='off'
                value={inputValue.email}
                name='email'
                type='email'
                onChange={userHandler}
                placeholder='email' />
              <br />
              <input
                required
                className='signInputs'
                autoComplete='off'
                value={inputValue.password}
                name='password'
                type='password'
                onChange={userHandler}
                placeholder='password ' />
              <br />
              <input
                required
                className='signInputs'
                autoComplete='off'
                value={inputValue.cpassword}
                name='cpassword'
                type='password'
                onChange={userHandler}
                placeholder='confirm password' />
              <br />
              <input type='submit' className='SignBtnn' value='sign up' />
              <br />
              <p className='newP'> already have an account  <NavLink className='signElinks' to='/signin '> Login?</NavLink></p>
            </form>
          </div>
        </div>
        <Toaster richColors position='bottom-right' />
      </div>
    </>
  )
}

export default Signup
