import React, { useState, useEffect } from 'react';
import planet from "../images/hoth.jpeg"
import Axios from 'axios'
import '../App.css'

export default function ResultsPage(props) {
  
  const [weatherData, setWeatherData] = useState([])

  useEffect(async() => {
    const fetchData = () => {
      console.log(props.city)
    }
    fetchData()
  }, [])

  return (
      <div className="results-page">
            <img src={planet} className='planet'/>
        <div className="top">
          <h2> Brrrr. -3 c. Snow Shower?</h2>
        </div>
            <div className="middle">
              <h4>IT'S LIKE</h4>
              <h1>HOTH</h1>
              <h4>OUT THERE</h4>
            </div>
      <div className="bottom">
          <h4>Cold. Ice</h4>
          <h4>Freezing</h4>
      </div>

      </div>
  )
}
