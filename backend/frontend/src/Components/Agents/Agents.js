import React, {useEffect} from 'react'
import './Agents.css'
import { useNavigate ,Routes,Route, Link} from 'react-router-dom'
import Yoru from './Yoru'
import Reyna from './Reyna'
import Sage from './Sage'
import Jett from './Jett'
import Raze from './Raze'
import Astra from './Astra'
import Fade from './Fade'
import Chamber from './Chamber'
import Gekko from './Gekko'
import Killjoy from './Killjoy'
import Skye from './Skye'
import Kayo from './Kayo'
import Viper from './Viper'
import Cypher from './Cypher'
import Breach from './Breach'
import Sova from './Sova'
import Neon from './Neon'
import Harbor from './Harbor'
import Omen from './Omen'
import Phoenix from './Phoenix'
import Brimstone from './Brimstone'
import AgentsHome from './AgentsHome'


const Agents = () => {

  const navigate =useNavigate()
   

  //----- call function to check if user loged in -----//
     const callPage =async()=>{
        try { 
           const res = await fetch ('/getdata',{
              method:"GET",
              headers:{
                 Accept:"application/json",
                 "Content-Type":"application/json"
              },
              credentials:'include'
           });
           const data = await res.json();
           console.log(data)
            if(!res.status===200){
              const error = new Error(res.error)
              throw error;
            }
        } catch (error) {
           console.log(error)   
           navigate('/signin')      
        }
     }
     //----- useState to get data of a user through token -----//
     useEffect(()=>{
        callPage()
     })

 
  return (
    <>
      <div className='agentsMain'>
         <section className='A-sec1'>
            <div className='A-grid1'>
               <Link className='A-link' to={'brimstone'}> <h1><b>BRIMSTONE</b></h1></Link>
               <Link className='A-link' to={'phoenix'}><h1 ><b>PHOENIX</b></h1></Link>
               <Link className='A-link' to={'sage'}><h1 ><b>SAGE</b></h1></Link>
               <Link className='A-link' to={'sova'}><h1 ><b>SOVA</b></h1></Link>
               <Link className='A-link' to={'viper'}><h1><b>VIPER</b></h1></Link>
               <Link className='A-link' to={'cypher'}> <h1><b>CYPHER</b></h1></Link>
               <Link className='A-link' to={'reyna'}> <h1><b>REYNA</b></h1></Link>
               <Link className='A-link' to={'killjoy'}><h1 ><b>KILLJOY</b></h1></Link>
               <Link className='A-link' to={'breach'}><h1 ><b>BREACH</b></h1></Link>
               <Link className='A-link' to={'omen'}><h1><b>OMEN</b></h1></Link>
               <Link className='A-link' to={'jett'}> <h1><b>JETT</b></h1></Link>
               <Link className='A-link' to={'raze'}> <h1><b>RAZE</b></h1></Link>
               <Link className='A-link' to={'skye'}><h1 ><b>SKYE</b></h1></Link>
               <Link className='A-link' to={'yoru'}><h1 ><b>YORU</b></h1></Link>
               <Link className='A-link' to={'astra'}><h1 ><b>ASTRA</b></h1></Link>
               <Link className='A-link' to={'kay-o'}><h1><b>KAY/O</b></h1></Link>
               <Link className='A-link' to={'chamber'}> <h1><b>CHAMBER</b></h1></Link>
               <Link className='A-link' to={'neon'}> <h1><b>NEON</b></h1></Link>
               <Link className='A-link' to={'fade'}><h1 ><b>FADE</b></h1></Link>
               <Link className='A-link' to={'harbor'}><h1 ><b>HARBOR</b></h1></Link>
               <Link className='A-link' to={'gekko'}> <h1><b>GEKKO</b></h1></Link>
               
            </div>
            <div className='A-grid2'>
               <Routes>
                  <Route path='' element={<AgentsHome/>}/>
                  <Route path='brimstone' element={<Brimstone/>}/>
                  <Route path='yoru' element={<Yoru/>}/>
                  <Route path='reyna' element={<Reyna/>}/>
                  <Route path='sage' element={<Sage/>}/>
                  <Route path='jett' element={<Jett/>}/>
                  <Route path='raze' element={<Raze/>}/>
                  <Route path='astra' element={<Astra/>}/>
                  <Route path='fade' element={<Fade/>}/>
                  <Route path='chamber' element={<Chamber/>}/>
                  <Route path='gekko' element={<Gekko/>}/>
                  <Route path='killjoy' element={<Killjoy/>}/>
                  <Route path='skye' element={<Skye/>}/>
                  <Route path='kay-o' element={<Kayo/>}/>
                  <Route path='viper' element={<Viper/>}/>
                  <Route path='cypher' element={<Cypher/>}/>
                  <Route path='breach' element={<Breach/>}/>
                  <Route path='sova' element={<Sova/>}/>
                  <Route path='neon' element={<Neon/>}/>
                  <Route path='harbor' element={<Harbor/>}/>
                  <Route path='omen' element={<Omen/>}/>
                  <Route path='phoenix' element={<Phoenix/>}/>
               </Routes>
               
            </div>
         </section>
      </div>
    </>
  )
}

export default Agents
