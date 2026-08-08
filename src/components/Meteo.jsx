import React, { useEffect, useState } from 'react'
import "./Meteo.css"
import search_icon from "../assets/chercher.png"
import brume_icon from "../assets/brume.png"
import drizzle_icon from "../assets/drizzle.png"
import neigeux_icon from "../assets/neigeux.png"
import nuageux_icon from "../assets/nuageux.png"
import pluvieux_icon from "../assets/pluvieux.png"
import soleil_icon from "../assets/soleil.png"
import vent_icon from "../assets/vent.png"
import tempete_icon from "../assets/tempete.png"
import couvert_icon from "../assets/couvert.png"

const Meteo = () => {

 const [meteoData, setMeteoData] = useState(false)
 const allIcons = {
    "01d": soleil_icon,
    "01n": soleil_icon,
    "02d": nuageux_icon,
    "02n": nuageux_icon,
    "03d": couvert_icon,
    "03n": couvert_icon,
    "04d": couvert_icon,
    "04n": couvert_icon,
    "09d": drizzle_icon,
    "09n": drizzle_icon,
    "10d": pluvieux_icon,
    "10n": pluvieux_icon,
    "11d": tempete_icon,
    "11n": tempete_icon,
    "13d": neigeux_icon,
    "13n": neigeux_icon,
 }
 const search = async (city) => {
    try {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${import.meta.env.VITE_APP_ID}`;
    
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
        const icon = allIcons[data.weather[0].icon] || soleil_icon;
        setMeteoData({
            himidity: data.main.himidity,
            windSpeed: data.wind.speed,
            temperature: Math.floor(data.main.temp),
            location: data.name,
            icon: icon
        })

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
        <p className='temperature'>{meteoData.temperature}°C</p>
        <p className='location'>{meteoData.location}</p>
        <div className="meteo-data">
            <div className="col">
                <img src={brume_icon} alt="" />
                <div>
                    <p>{meteoData.humidity} %</p>
                    <span>Humiditer</span>
                </div>
            </div>
            <div className="col">
                <img src={vent_icon} alt="" />
                <div>
                    <p>{meteoData.windSpeed} Km/h</p>
                    <span>Vitesse du vent</span>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Meteo