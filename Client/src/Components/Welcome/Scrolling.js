import React from 'react'
import './Welcome.css'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export default function scrolling(props) {
  return (
    <>
      <div className="contain">
      {props.details&&props.details.map(src => (
        <Link to={`/welcome/${props.api}/${src.id}`} key={src.id}>
                  <Card className='card ' style={{position:"relative", width: '18rem', background:`linear-gradient(to bottom, rgba(0,0,0,0) 20%, rgba(0,0,0,1)), url("https://image.tmdb.org/t/p/original${src.backdrop_path}")`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}} >
                    <Card.Body id='card-body' style={{position:"absolute",bottom:"0", margin:"0 auto"}}> 
                        <h6 style={{color:'white'}}>{src.name||src.title}</h6>
                    </Card.Body>
                </Card>
                </Link>
        ))}
        
      </div>
    </>
  )
}

