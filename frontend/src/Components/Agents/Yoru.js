import React from 'react'
import yoru from '../Assets/AgentsPng/yoru.png'

const Yoru = () => {
  return (
    <>
        <div className='A-cardMain'>
            <div className='cMain1'>
                 <img src={yoru} alt=''/>
            </div>
            <div className='cMain2'>
                <h1><b>YORU </b></h1>
                <h3>ROLE //</h3>
                <h1><b>DUELIST </b></h1>
                <h3> BIOGRAPHY //</h3>
                <p>Japanese native, Yoru, rips holes straight through reality to infiltrate enemy lines unseen. Using deception and aggression in equal measure, he gets the drop on each target before they know where to look.</p>
            </div>
        </div> 
    </>
  )
}

export default Yoru
