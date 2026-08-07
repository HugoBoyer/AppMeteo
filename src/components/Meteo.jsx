import React, { useEffect } from 'react'
import "./Meteo.css"
import search_icon from "../assets/chercher.png"
import brume_icon from "../assets/brume.png"
import drizzle_icon from "../assets/drizzle.png"
import neigeux_icon from "../assets/neigeux.png"
import nuageux_icon from "../assets/nuageux.png"
import pluvieux_icon from "../assets/pluvieux.png"
import soleil_icon from "../assets/soleil.png"
import temps_icon from "../assets/temps.png"
import vent_icon from "../assets/vent.png"


const Meteo = () => {

 const search = async (city) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${import.meta.env.VITE_APP_ID}`;
    
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);

    } catch (error) {

    }
 }

 useEffect(() => {
    search("London")
 }, [])

  return (
    <div className='meteo'>
        <div className="search-bar">
            <input type="text" placeholder='Search'/>
            <img src={search_icon} alt=""/>
        </div>
        <img src={soleil_icon} alt="" className='meteo-icon'/>
        <p className='temperature'>16°C</p>
        <p className='location'>Londre</p>
        <div className="meteo-data">
            <div className="col">
                <img src={brume_icon} alt="" />
                <div>
                    <p>91 %</p>
                    <span>Humiditer</span>
                </div>
            </div>
            <div className="col">
                <img src={vent_icon} alt="" />
                <div>
                    <p>3.6 Km/h</p>
                    <span>Vitesse du vent</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Meteo