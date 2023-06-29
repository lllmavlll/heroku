import React from 'react'
import reyna from '../Assets/AgentsPng/reyna.png'


const Reyna = () => {


  return (
    <>
        <div className='A-cardMain'>
            <div className='cMain1'>
                 <img className='reyna' src={reyna} alt=''/>
            </div>
            <div className='cMain2'>
                <h1><b>REYNA </b></h1>
                <h3>ROLE //</h3>
                <h1><b>DUELIST </b></h1>
                <h3> BIOGRAPHY //</h3>
                <p>Forged in the heart of Mexico, Reyna dominates single combat, popping off with each kill she scores. Her capability is only limited by her raw skill, making her highly dependent on performance.</p>
            </div>
        </div> 
    </>
  )
}

export default Reyna
