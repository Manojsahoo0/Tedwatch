import React from 'react'
import Scrolling from './Scrolling';
import { useState, useEffect } from "react";

export default function PopularSeries() {
    const[data,setData] = useState()
    useEffect(()=>{
        async function fetchData(){
            let data = await fetch("https://api.themoviedb.org/3/tv/popular?language=en-US&page=1",{
            headers:{
                Authorization: `${process.env.REACT_APP_AUTH}`
            }
        })
        let parseData = await data.json()
        setData(parseData.results)
        
        }
        fetchData()
    },[])
  return (
    <div>
        <h3>Popular Series</h3>
        <Scrolling details={data} api="tv"/>
    </div>
  )
}
