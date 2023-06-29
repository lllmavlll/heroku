import React from 'react'
import cypher from '../Assets/AgentsPng/cypher.png'


const Cypher = () => {
  return (
    <>
    <div className='A-cardMain'>
        <div className='cMain1'>
            <img src={cypher} alt=''/>
        </div>
        <div className='cMain2'>
            <h1><b>CYPHER </b></h1>
            <h3>ROLE //</h3>
            <h1><b>SENTINEL </b></h1>
            <h3> BIOGRAPHY //</h3>
            <p>The Moroccan information broker, Cypher is a one-man surveillance network who keeps tabs on the enemy's every move. No secret is safe. No maneuver goes unseen. Cypher is always watching.</p>
        </div>
    </div> 
  </>
  )
}

export default Cypher
