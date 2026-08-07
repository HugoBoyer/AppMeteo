import React from 'react'
import "./Meteo.css"
import search from "../assets/chercher.png"
import brume_icon from "../assets/brume.png"
import drizzle_icon from "../assets/drizzle.png"
import neigeux_icon from "../assets/neigeux.png"
import nuageux_icon from "../assets/nuageux.png"
import pluvieux_icon from "../assets/pluvieux.png"
import soleil_icon from "../assets/soleil.png"
import temps_icon from "../assets/temps.png"
import vent_icon from "../assets/vent.png"


const Meteo = () => {
  return (
    <div className='meteo'>
        <div className="search-bar">
            <input type="text" placeholder='Search'/>
            <img src={search} alt=""/>
        </div>
        <img src={brume_icon} alt="" className='meteo-icon'/>
        <p className='temperature'>16°C</p>
        <p className='location'>Londre</p>
    </div>
  )
}

export default Meteo