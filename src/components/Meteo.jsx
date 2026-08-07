import React from 'react'
import "./Meteo.css"
import search from "../assets/chercher.png"

const Meteo = () => {
  return (
    <div className='meteo'>
        <div className="search-bar">
            <input type="text" placeholder='Search'/>
            <img src={search} alt=""/>
        </div>
    </div>
  )
}

export default Meteo