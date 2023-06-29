import React from 'react'
import omen from '../Assets/AgentsPng/omen.png'


const Omen = () => {
  return (
    <>
    <div className='A-cardMain'>
        <div className='cMain1'>
            <img src={omen} alt=''/>
        </div>
        <div className='cMain2'>
            <h1><b>OMEN</b></h1>
            <h3>ROLE //</h3>
            <h1><b>CONTROLLER</b></h1>
            <h3> BIOGRAPHY //</h3>
            <p>A phantom of a memory, Omen hunts in the shadows. He renders enemies blind, teleports across the field, then lets paranoia take hold as his foe scrambles to learn where he might strike next.</p>
        </div>
    </div> 
</>
  )
}

export default Omen
