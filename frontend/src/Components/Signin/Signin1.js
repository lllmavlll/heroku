import React, { useContext, useState } from 'react'
import './Signin.css'
import logo from '../Assets/logos/logo_white.avif'
import { NavLink, useNavigate } from 'react-router-dom'
import { Toaster, toast } from 'sonner'
import { userContext } from '../../App'
import { UserAuth } from '../../Context/AuthContext'

const Signin = () => {
  const { userLogin, forgotPassword } = UserAuth()


  //----- useContext to hide signin button after sigining in -----//

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const loginUser = async (e) => {
    e.preventDefault();
    try {
      const loadingToast = toast.loading('Loading...')
      await userLogin(email, password)
      toast.dismiss(loadingToast)
    } catch (error) {
      toast.error(String(error.code).split("/")[1].replaceAll("-", " "))
    }

  }

  return (
    <>
      <div className="bgi">
        <div className="div2">
          {/* <img alt='' src={logo}/> */}
          <div className="signInContainer">
            <form onSubmit={e => loginUser(e)}>
              <p className='SHeader'>Sign In</p>
              <input required
                className='signInputs'
                autoComplete='off'
                name='email'
                type='email'
                placeholder='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)} />
              <br />
              <input required
                className='signInputs'
                autoComplete='off'
                name='password'
                type='password'
                placeholder='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)} />
              <br />
              {/* <ul>
                      <li className='fac'><i class="fa-brands fa-facebook"></i></li>
                      <li className='goo'><i class="fa-brands fa-google"></i></li>
                      <li className='app'><i class="fa-brands fa-apple"></i></li>
                      <li className='xbo'><i class="fa-brands fa-xbox"></i></li>
                  </ul> */}
              <input className='cbox' type="checkbox" />
              <label className='cboxLabel'>Stay signed in</label>
              <br />
              <button type='submit' className='SignBtnn'>Sign In</button>
              <br />

              <p className='newP'>new user <NavLink className='signElinks' to='/signup'>signup?</NavLink></p>
            </form>
          </div>
          <Toaster richColors position='bottom-right' />
        </div>
      </div>
    </>
  )
}

export default Signin
