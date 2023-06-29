import React from 'react'
import sage from '../Assets/AgentsPng/sage.png'

const Sage = () => {
  return (
    <>
      <div className='A-cardMain'>
          <div className='cMain1'>
              <img src={sage} alt=''/>
          </div>
          <div className='cMain2'>
              <h1><b>SAGE </b></h1>
              <h3>ROLE //</h3>
              <h1><b>SENTINEL </b></h1>
              <h3> BIOGRAPHY //</h3>
              <p>The stronghold of China, Sage creates safety for herself and her team wherever she goes. Able to revive fallen friends and stave off aggressive pushes, she provides a calm center to a hellish fight.</p>
          </div>
      </div> 
    </>
  )
}

export default Sage
