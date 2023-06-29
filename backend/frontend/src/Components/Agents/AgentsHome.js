import React from 'react'
import agentsHome from '../Assets/AgentsPng/agentsHome.png'


const AgentsHome = () => {
  return (
    <>
    <div className='A-cardMain'>
        <div className='cMain1'>
            <img className='trio' src={agentsHome} alt=''/>
        </div>
        <div className='cMain2'>
            <h3> CHECK THE HEADCOUNT //</h3>
            <p>Find more ways to plant the Spike and style on your enemies with scrappers, strategists, and hunters of every description.</p>
        </div>
    </div> 
</>
  )
}

export default AgentsHome
