import React from 'react'
import jett from '../Assets/AgentsPng/jett1.png'

const Jett = () => {
  return (
    <>
    <div className='A-cardMain'>
        <div className='cMain1'>
             <img src={jett} alt=''/>
        </div>
        <div className='cMain2'>
            <h1><b>JETT </b></h1>
            <h3>ROLE //</h3>
            <h1><b>DUELIST </b></h1>
            <h3> BIOGRAPHY //</h3>
            <p>Representing her home country of South Korea, Jett's agile and evasive fighting style lets her take risks no one else can. She runs circles around every skirmish, cutting enemies before they even know what hit them.</p>
        </div>
    </div> 
    </>
  )
}

export default Jett
