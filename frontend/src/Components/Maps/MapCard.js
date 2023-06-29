import React from 'react'
import './Maps.css'

const MapCard = (mapCard) => {
  return (
    <div className='mapCard'>
        <h1><b>{mapCard.title}</b></h1>
        <div className='sliderImg'>
            <img src={mapCard.src} alt=''/>
        </div>
    </div>
  )
}

export default MapCard
