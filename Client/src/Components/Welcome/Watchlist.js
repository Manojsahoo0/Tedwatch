import React from "react";
import { useState, useEffect } from "react";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import "./Welcome.css"

export default function Watchlist() {
  const [res, setRes] = useState();
  const[flag,setFlag]=useState(true)
  const [op, setOp] = useState(false);
  let id = JSON.parse(localStorage.getItem("user")).id
  let store = JSON.parse(localStorage.getItem("user"))
  let token = store.token

  useEffect(() => {
    async function watchApi() {
        let data = await fetch(`/api/watchlist/${id}`,{     // http://localhost:8000/api/watchlist/${id}
          headers:{
            authorization: `Bearer ${token}`,
            "Content-type": "application/json; charset=UTF-8",
        },
        });
      let parsedData = await data.json();
      if(!parsedData.message){
        setRes(parsedData);
      }
      else{
        setOp(true)
      }
      
    }
    watchApi();
  }, [flag,id]);

  const handleRemove = (id)=>{
    var dataSend={movieId:id}
    async function deleteWatch(){
    let data = await fetch("/api/watchlist",{     // http://localhost:8000/api/watchlist
      method:"DELETE",
      body:JSON.stringify(dataSend),
      headers:{
        authorization: `Bearer ${token}`,
        "Content-type": "application/json; charset=UTF-8",
    },
    })
    let parsedData = await data.json()
    flag?setFlag(false):setFlag(true)
    localStorage.removeItem(`${id}`)
  }
  deleteWatch()
  }
  return (
    <>
    <Navbar/>
    
    {op?<h3 style={{color:"white", textAlign:"center"}}>No Movie or Series Added</h3>:<div className="watchlist">
      
       {res&&res.map((e,index)=>{
            return (
                <div className="watchlist-content"  key={e.movieId}>

                {e.poster_path&&<Card className='card' style={{ width: '18rem', background:`linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url("https://image.tmdb.org/t/p/original${e.poster_path}")`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}}>
                    <Card.Body id='card-body' style={{position:"absolute",bottom:"0", margin:"0 auto"}}>                       
                        <Link to={`/welcome/${e.media}/${e.movieId}`} style={{color:'white',textDecoration:"none",marginBottom:"5px"}}><h6>{e.title}</h6></Link>
                        <button className="btn btn-danger" onClick={()=>handleRemove(e.movieId)}>Remove</button>
                    </Card.Body>
                </Card>}
                </div>
                
            )
        })}
    </div>}
    </>
  );
}
