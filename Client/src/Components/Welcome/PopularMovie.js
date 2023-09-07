import React from 'react'
import Scrolling from './Scrolling';
import { useState, useEffect } from "react";

export default function PopularMovie() {
    const[data,setData] = useState()
    useEffect(()=>{
        async function fetchData(){
            let data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",{
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
        <h3>Popular Movie</h3>
        <Scrolling details={data} api="movie"/>
    </div>
  )
}
