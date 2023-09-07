import React from 'react'
import { useState, useEffect } from "react";
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function Similar(props) {

    const[data,setData] = useState()

    useEffect(()=>{
        async function fetchData(){
            let data = await fetch(`https://api.themoviedb.org/3/${props.media}/${props.id}/similar?language=en-US&page=1`,{
            headers:{
                Authorization: `${process.env.REACT_APP_AUTH}`
            }
        })
        let parseData = await data.json()
        setData(parseData.results)
        
        }
        fetchData()
    },[props.media,props.id])

    const handleClick = (sid) => {
        window.open(`/welcome/${props.media}/${sid}`)
    }
  return (
    <>
    <h3>Similar</h3>
    <div className="contain">
      {data&&data.map(src => (
                  <Link onClick={()=>handleClick(src.id)} key={src.id}>
                  {src.backdrop_path&&<div className='d-flex flex-column' style={{marginLeft: "10px",textAlign:"center",color:"white"}}><Card className='card ' style={{position:"relative", width: '18rem', background:`linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url("https://image.tmdb.org/t/p/original${src.backdrop_path}")`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
                  <Card.Body id='card-body' style={{position:"absolute",bottom:"0", margin:"0 auto"}}> 
                      <p>{src.name||src.title}</p>
                  </Card.Body>
              </Card>
              </div>}
                  </Link>
               
        ))}
        
      </div></>
  )
}
