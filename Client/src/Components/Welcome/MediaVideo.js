import React,{ useState, useEffect } from 'react'
import Loading from '../Loading';

export default function MediaVideo(props) {
    const[spinner,setSpinner] = useState(false)
    const[res,setRes]=useState()
    useEffect(()=>{
        setSpinner(true)
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `${process.env.REACT_APP_AUTH}`
            }
          };

          async function fetchTrailer(){
            let data = await fetch(`https://api.themoviedb.org/3/${props.media}/${props.id}/videos?language=en-US`, options)
            let parsedData = await data.json()
            setRes(parsedData)
            setSpinner(false)
          }
          fetchTrailer()
    },[])
  return (
    <>
    {res&&res.results.length>0&&<>
        <h3>Media</h3> 
    <div className="contain">
        
    {spinner && <Loading/>}
        {!spinner && res&&res.results.map((src,index) => (
                <div className='bgy' key={index}>
                    {/* <YouTube videoId={src.key} opts={opts} /> */}
                    <iframe width="640" height="360" src={`https://www.youtube.com/embed/${src.key}`} title="Game that made Magnus Carlsen the New World Cup Champion | Pragg vs Carlsen Tiebreaks Game 2"  ></iframe>
                </div>
        ))}
    </div>
    </>}
    </>
  )
}
