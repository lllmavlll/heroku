import React from 'react'
import './Maps.css'
import Carousel from 'react-elastic-carousel';
import MapCard from './MapCard';
import yoru from '../Assets/AgentsPng/yoru.png'
import Lotus from '../Assets/MapsPng/lotus.webp'
import Pearl from '../Assets/MapsPng/pearl_v1.jpg'
import Fracture from '../Assets/MapsPng/fracture.png'
import Breeze from '../Assets/MapsPng/breeze.jpg'
import Icebox from '../Assets/MapsPng/icebox.webp'
import Ascent from '../Assets/MapsPng/ascent.webp'
import Split from '../Assets/MapsPng/split.png'
import Haven from '../Assets/MapsPng/haven.png'
import Bind from '../Assets/MapsPng/bind.png'



const Maps = () => {

  return (
    <>
      <section className='MapSec-1' >
          <div className='mapGrid'>
            <div className='pDiv'>
              <h1><b>Maps</b></h1>
              <p>Each match of VALORANT takes place on a map. Maps feature a spawn area for each team, barriers that limit accessible areas during the Buy Phase, and objective sites where the spike is to be planted.</p>
              <p>Four maps were available at launch, and a six-month cycle is expected for the release of new maps</p>
              <p>There are currently nine playable maps in VALORANT, with an additional one for practice and training new players.</p>
            </div>
            
            <div className='pDiv2'>
              <img src={yoru} alt=''/>
            </div>
          </div>
      </section>

      <section className='MapSec-2'>
       <div className='mapSlider'>
        <Carousel className='caros'>
          <MapCard src={Lotus} title='Lotus'/>
          <MapCard src={Pearl} title='Pearl'/>
          <MapCard src={Fracture} title='Fracture'/>
          <MapCard src={Breeze} title='Breeze'/>
          <MapCard src={Icebox} title='Icebox'/>
          <MapCard src={Ascent} title='Ascent'/>
          <MapCard src={Split} title='Split'/>
          <MapCard src={Haven} title='Haven'/>
          <MapCard src={Bind} title='Bind'/>
        </Carousel>
       </div>
      </section>
    </>
  )
}

export default Maps
