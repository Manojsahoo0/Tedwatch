import React, { useEffect } from 'react'
import { useState } from "react";
import Navbar from './Navbar';
import Carousal from './Carousal';
import PopularMovie from './PopularMovie';
import Loading from '../Loading';
import PopularSeries from './PopularSeries';
import Footer from '../Home/Footer.js'

export default function Welcome() {
  const[spinner,setSpinner] = useState(false)
  const[trend,setTrend] = useState()
  let name = JSON.parse(localStorage.getItem("user")).name

  useEffect(()=>{
    
    setSpinner(true)
    async function fetchApi(){
      let data = await fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",{
        headers:{
          Authorization: `${process.env.REACT_APP_AUTH}`
        }
      })
      let parseData = await data.json()
      setTrend(parseData.results.slice(0,5))
      setSpinner(false)
    }
    fetchApi()
  },[])
  return (
    <div >
      {spinner && <Loading/>}
      <div>
        <Navbar/>
        
        {!spinner &&trend && <Carousal imgs={trend}/>}
      </div>
      <div className='container' style={{backgroundColor:"#06050B"}}>
        <PopularMovie/>
      </div>
      <div className='container' style={{backgroundColor:"#06050B"}}>
        <PopularSeries/>
      </div>
      <div>
        <Footer name={name}/>
      </div>
    </div>
    
  )
}
