import React, { useEffect } from 'react'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import Navbar from './Navbar'
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

export default function ReviewAdd(props) {
    let navigate = useNavigate()
    let params = useParams()
    const[res,setRes]=useState()
    const[movie,setMovie]=useState()
    let store = JSON.parse(localStorage.getItem("user"))
    let token = store.token
    let id = store.id
    let name = store.name
    const[formData,setFormdata]=useState({name:name,userId:id,contentId:params.id})
    
    useEffect(()=>{
        async function fetchBasicApi(){
            let data = await fetch(`https://api.themoviedb.org/3/${params.content}/${params.id}?language=en-US`,{
                headers:{
                    Authorization: `${process.env.REACT_APP_AUTH}`
                }
            })
            let parsedData = await data.json()
            setMovie(parsedData)
        }
        fetchBasicApi()
    },[params.content,params.id])
    
    const submitReview = ()=> {
        fetch("/api/review",{          // http://localhost:8000/api/review
            method:"POST",
            body:JSON.stringify(formData),
            headers:{
                authorization: `Bearer ${token}`,
                "Content-type": "application/json; charset=UTF-8",
              }
        })
        .then(data=>data.json())
        .then(data=>setRes(data))
        formData.review=''
    }
    const cancelReview = ()=>{
        navigate(`/welcome/${params.content}/${params.id}`)
    }
  return (
    <div>
        <Navbar/>
        <div className='media-overview'>
              {
                movie ? (
                    <div className="card media-image" style={{background:`linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url("https://image.tmdb.org/t/p/w500${movie.backdrop_path}")`}}></div>
                ) : (
                    <Skeleton variant="rectangular" width={210} height={118} />
                )
                }
            <div className='container' style={{color: "white"}}>
                <h5>A review by {name}</h5>
                {movie&&<div>
                    <p>Title: {movie.title}</p>
                    <p>Release Date: {movie.release_date}</p>
                </div>}
                <label >Rating
                <select className='review-select' onChange={(e)=>setFormdata({...formData,rating:parseInt(e.target.value)})}>
                    <option >Nothing selected</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                </label><br/>
                
                <label id='text' style={{verticalAlign:"top"}}>Reviews</label>
                <textarea className='review-textarea' cols={30} rows={7} value={formData.review} onChange={(e)=>setFormdata({...formData,review:e.target.value})} placeholder='write something...'/><br/>

                <div className='d-flex justify-content-between'>
                    <button className='btn btn-outline-primary' onClick={submitReview}>Submit</button>
                    <button className='btn btn-outline-warning' onClick={cancelReview}>Go Back</button><br/>
                </div>
                
                </div>
                
            </div>
            {res&&<div style={{ backgroundColor: "#FF5C5C",padding:"10px",marginTop:"10px", color:"black",textAlign:"center"}}>{res.message}</div>}
        </div>
  )
}
