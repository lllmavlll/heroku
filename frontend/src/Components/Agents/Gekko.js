import React from 'react'
import gekko from '../Assets/AgentsPng/gekko.png'


const Gekko = () => {
  return (
    <>
    <div className='A-cardMain'>
        <div className='cMain1'>
            <img src={gekko} alt=''/>
        </div>
        <div className='cMain2'>
            <h1><b>GEKKO</b></h1>
            <h3>ROLE //</h3>
            <h1><b>INITIATOR</b></h1>
            <h3> BIOGRAPHY //</h3>
            <p>Gekko the Angeleno leads a tight-knit crew of calamitous creatures. His buddies bound forward, scattering enemies out of the way, with Gekko chasing them down to regroup and go again.</p>
        </div>
    </div> 
</>
  )
}

export default Gekko
