import React from 'react'
import neon from '../Assets/AgentsPng/neon.png'

const Neon = () => {
  return (
    <>
        <div className='A-cardMain'>
            <div className='cMain1'>
                 <img src={neon} alt=''/>
            </div>
            <div className='cMain2'>
                <h3>ROLE //</h3>
                <h1><b>DUELIST </b></h1>
                <h3> BIOGRAPHY //</h3>
                <p>Filipino Agent Neon surges forward at shocking speeds, discharging bursts of bioelectric radiance as fast as her body generates it. She races ahead to catch enemies off guard, then strikes them down quicker than lightning.</p>
            </div>
        </div> 
    </>
  )
}

export default Neon