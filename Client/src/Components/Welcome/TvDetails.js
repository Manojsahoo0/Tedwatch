import React from 'react'
import './Welcome.css'
import { useState,useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from './Navbar'
import BookmarkAddIcon from '@mui/icons-material/BookmarkAdd';
import BookmarkAddedIcon from '@mui/icons-material/BookmarkAdded';
import MediaVideo from './MediaVideo'
import MediaCast from './MediaCast'
import ReviewNRating from './ReviewNRating'
import StarOutlineIcon from '@mui/icons-material/StarOutline';
import { useNavigate } from 'react-router-dom';
import Similar from './Similar'
import Footer from '../Home/Footer.js'

export default function TvDetails() {
    const navigate = useNavigate()
    const[res,setRes]=useState()
    const[director,setDir]=useState()
    const[writer,setWriter]=useState()
    const[watchflag,setWatchflag]=useState(false)
    let name = JSON.parse(localStorage.getItem("user")).name
    let params = useParams()

    useEffect(()=>{
        async function fetchBasicApi(){
            let data = await fetch(`https://api.themoviedb.org/3/tv/${params.id}?language=en-US`,{
                headers:{
                    Authorization: `${process.env.REACT_APP_AUTH}`
                }
            })
            let parsedData = await data.json()
            setRes(parsedData)
            res&&localStorage.setItem(`${res.id}`,false)
        }
        fetchBasicApi()
        async function fetchDir(){
            let data = await fetch(`https://api.themoviedb.org/3/tv/${params.id}/credits?language=en-US`,{
                headers:{
                    Authorization: `${process.env.REACT_APP_AUTH}`
                }
            })
            let parsedData = await data.json()
            setDir(parsedData.crew.filter(({job})=>job==='Director'))
            setWriter(parsedData.crew.filter(({job})=>job==='Writer'))
        }
        fetchDir()
    },[params.id])
    
    const handleWatchlist = () => {
        // var dataSend = {movieId:res.id,title:res.title,poster_path:res.poster_path}
        let store = JSON.parse(localStorage.getItem("user"))
        let name = store.name
        let id = store.id
        var dataSend = {name:name,userId:id,movieId:res.id,title:res.original_name,poster_path:res.poster_path,media:"tv"}
        let token = store.token
        async function fetchWatchlistApi(){
            try{
                let data = await fetch("/api/watchlist",{     // http://localhost:8000/api/watchlist
                method:"POST",
                body:JSON.stringify(dataSend),
                headers:{
                    authorization: `Bearer ${token}`,
                    "Content-type": "application/json; charset=UTF-8",
                },
                
            })
            if(!data.ok){
                throw new Error()
                
            }
            let parsedData = await data.json()
            console.log(parsedData)
            
            watchflag?setWatchflag(false):setWatchflag(true)
            localStorage.setItem(`${res.id}`,true)
            }
            catch(error){
                watchflag?setWatchflag(false):setWatchflag(true)
                localStorage.removeItem(`${res.id}`)
                
            }
        }
        fetchWatchlistApi()
    }
    const addRating = ()=>{
        navigate(`/addreview/tv/${res.id}`)
    }
  return (
    <>
    <Navbar/>
    {res&&<div className='w-100' style={{color:"white"}}>
        <div className='media-overview'>
            <div className="card media-image" style={{backgroundImage:`url("https://image.tmdb.org/t/p/original${res.backdrop_path}")`}}> 
            </div>
            <div className='card-content container'>
                <h3>{`${res.original_name}(${res.first_air_date.substring(0,4)})`}</h3>
                <p className='fst-italic' style={{color:"grey"}}>{res.tagline}</p>
                <div className='d-flex genre-contain'>
                {res.genres&&res.genres.map((e)=>{
                        return <div className='genre-tag'  key={e.id}> {e.name} </div>
                    })}
                </div>
                <div className='d-flex '>
                    <p >{res.first_air_date}</p>|
                    
                </div>
                <h5>Overview</h5>
                <p>{(res.overview)}</p>
                    <div className='d-flex'>
                    <div>
                        <button  type='button' className='button' onClick={handleWatchlist}>
                            {!localStorage.getItem(`${res.id}`)?<BookmarkAddIcon fontSize='large'/>:<BookmarkAddedIcon fontSize='large' color='primary'/>}
                        </button>
                    </div>
                    <div style={{marginLeft:"15px"}}>
                        <button  type='button' className='button' onClick={addRating}>
                           <StarOutlineIcon fontSize='large'/>
                        </button>
                    </div>
                    </div>
                <div className='d-flex justify-content-between flex-wrap '>
                    {director&&director.map((e)=>{
                                    return <div className='p-3' key={e.id}><span className='fw-bold'>{e.name}</span><br/>{e.job}</div>
                                })}
                                {writer&&writer.map((e)=>{
                            return <div className='p-3' key={e.id}><span className='fw-bold'>{e.name}</span><br/>{e.job}</div>
                        })}
                </div>
            </div>
        </div>
        <div>
           
            <MediaCast id={res.id} media="tv"/>
        </div>
        <div>    
            <MediaVideo id={res.id}  media="tv"/>
        </div>
        <div>
            <ReviewNRating id={res.id}/>
        </div>
        <div>
            <Similar id={res.id} media="tv"/>
        </div>
        <div>
            <Footer name={name}/>
        </div>
    </div>}</>
  )
}
