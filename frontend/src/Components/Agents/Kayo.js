import React from 'react'
import kayo from '../Assets/AgentsPng/kayo.png'


const Kayo = () => {
  return (
    <>
        <div className='A-cardMain'>
            <div className='cMain1'>
                <img src={kayo} alt=''/>
            </div>
            <div className='cMain2'>
                <h1><b>KAY/O</b></h1>
                <h3>ROLE //</h3>
                <h1><b>INITIATOR</b></h1>
                <h3> BIOGRAPHY //</h3>
                <p>KAY/O is a machine of war built for a single purpose: neutralizing radiants. His power to suppress enemy abilities cripples his opponents' capacity to fight back, securing him and his allies the ultimate edge.</p>
            </div>
        </div> 
    </>
  )
}

export default Kayo
