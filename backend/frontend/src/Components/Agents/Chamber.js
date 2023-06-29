import React from 'react'
import chamber from '../Assets/AgentsPng/chamber.png'


const Chamber = () => {
  return (
    <>
      <div className='A-cardMain'>
          <div className='cMain1'>
              <img src={chamber} alt=''/>
          </div>
          <div className='cMain2'>
              <h1><b>CHAMBER </b></h1>
              <h3>ROLE //</h3>
              <h1><b>SENTINEL </b></h1>
              <h3> BIOGRAPHY //</h3>
              <p>Well dressed and well armed, French weapons designer Chamber expels aggressors with deadly precision. He leverages his custom arsenal to hold the line and pick off enemies from afar, with a contingency built for every plan.</p>
          </div>
      </div> 
    </>
  )
}

export default Chamber
