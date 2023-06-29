import React from 'react'


const WeaponCard = (props) => {
  return (
    <>
        <div className='MainCaard'>
            <h1 className='cardH1'><b>{props.name}</b></h1>
            <img src={props.src} alt=''/>
            <p>{props.p}</p>
            <div className='overlay'>
                <h2><b>TYPE //</b>{props.h2}</h2>
                <p>{props.title}</p>
            </div>
        </div>
    </>
  )
}

export default WeaponCard
