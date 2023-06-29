import React ,{ useContext, useEffect , useState}from 'react'
import { Link} from 'react-router-dom'
import './Header.css'
import logoimg from '../Assets/imgs/LOGO1.png'
import { userContext } from '../../App'
 
const Header = () => {

   //----- useState to get username when logged in
  const [userData , setUserData] = useState('')

  //----- call function to check if user loged in -----//
     const callPage =async()=>{
        try { 
           const res = await fetch ('/getdata',{
              method:"GET",
              headers:{
                 "Content-Type":"application/json"
              },
           });
           const data = await res.json();
         //   console.log(data)
           setUserData(data)
            if(!res.status===200){
              const error = new Error(res.error)
              throw error;
            }
        } catch (error) {
           console.log(error)   
        }
     }
     //----- useEffect to get data of a user through token -----//
     useEffect(()=>{
        callPage()
     },[])


   //----- useContext to hide signin button after sigining in -----//
    const {state, dispatch } = useContext(userContext);

    const RenderMenu = ()=>{
     //----- if user is logged in show this elements on the nav bar -----//
     if(state){
        return(
           <>
              <div className='navSignup'>
                 <i class="fa-solid fa-user"></i>
                 <span className='userName'>{userData.username}</span>
                 <Link to={"logout"}><button className='signButton1' title='Log out?'><i class="fa-solid fa-right-from-bracket"></i></button></Link>
                 {/* <Link to={"logout"}><button className='signButton'><i class="fa-solid fa-right-from-bracket"></i></button></Link> */}
              </div>
           </>
           )

     }else{
     //----- if user is NOT logged in show this elements on the nav bar -----//
        return(
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
        <img className='LogoImg'alt='' src={logoimg}/>
      <Link className='logoLInk' to={""}><h1>av<span>zone</span></h1></Link>
      </div>
      <div className='navLinks'>
          <li><Link className='navLink' to={'maps'}>maps</Link></li>
          <li><Link className='navLink' to={'weapons'}>weapons</Link></li>
          <li><Link className='navLink' to={"agents"}>agents</Link></li>
          <li><Link className='navLink' to={'skins'}>skins</Link></li>
      </div>
      <RenderMenu/>
    </div>
    </>
  )
}

export default Header
