import React from 'react'
import sova from '../Assets/AgentsPng/sova.png'


const Sova = () => {
  return (
    <>
        <div className='A-cardMain'>
            <div className='cMain1'>
                <img src={sova} alt=''/>
            </div>
            <div className='cMain2'>
                <h1><b>SOVA</b></h1>
                <h3>ROLE //</h3>
                <h1><b>INITIATOR</b></h1>
                <h3> BIOGRAPHY //</h3>
                <p>Born from the eternal winter of Russia's tundra, Sova tracks, finds, and eliminates enemies with ruthless efficiency and precision. His custom bow and incredible scouting abilities ensure that even if you run, you cannot hide.</p>
            </div>
        </div> 
    </>
  )
}

export default Sova
