import { useSearchParams } from 'react-router-dom'
import Card from 'react-bootstrap/Card';
import * as React from 'react';
import { useState, useEffect } from 'react';
import "./Welcome.css"
import Navbar from './Navbar';
import Button from 'react-bootstrap/Button';
import Loading from '../Loading';
import { Link } from 'react-router-dom';

export default function SearchRes() {
    const [searchParams, setSearchParams] = useSearchParams()
    let value = searchParams.get('query')
    const[res,setRes] = useState({})
    const[page,setPage] = useState(1)
    const[spinner,setSpinner] = useState(false)
    useEffect(()=>{
        setSpinner(true)
        async function fetchMyApi(){
            let data = await  fetch(`https://api.themoviedb.org/3/search/multi?query=${value}&include_adult=false&language=en-US&page=${page}`,{
                                    headers:{
                                        Authorization: `${process.env.REACT_APP_AUTH}`
                                    }
                                })
            let parsedData = await data.json();
            setRes(parsedData)
            setSpinner(false)
        }
        fetchMyApi()
    },[page,value])
    const handlePrevious = () => {
        setPage(page-1)
    }
    const handleNext = () => {
        setPage(page+1)
    }
  return (
    <div style={{color:"white"}}>
        <Navbar/>
        {spinner && <Loading/>}
       {!spinner && <div>
        <div className='text-center'><h1>Results "{value}"</h1></div><br/>
        <div className=' searchCard'>
        {res.results&&res.results.map((e)=>{
            return (
                <Link to={`/welcome/${e.media_type}/${e.id}`} key={e.id}>
                {e.backdrop_path&&<Card className='card' style={{ width: '18rem', background:`linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url("https://image.tmdb.org/t/p/original${e.backdrop_path}")`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}} >
                    
                    <Card.Body id='card-body' style={{position:"absolute",bottom:"0", margin:"0 auto"}}>
                        <h6 style={{color:'white'}}>{e.name||e.title}</h6>
                    </Card.Body>
                    
                </Card>}
                </Link>
                
            )
        })}
        <div className='container d-flex justify-content-evenly'>
            <Button variant="primary" onClick={handlePrevious} disabled={page<2}>&larr; Previous</Button>
            <Button variant="primary" onClick={handleNext} disabled={page===res.total_pages}>Next &rarr;</Button>
        </div>
        
    </div>
        </div>}
    </div>
  );
}