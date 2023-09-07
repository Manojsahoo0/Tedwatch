import Carousel from 'react-bootstrap/Carousel';
import { useState } from 'react';
import "./Welcome.css"
import { Link } from 'react-router-dom';

function Carousal(props) {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div>
        <Carousel activeIndex={index} onSelect={handleSelect} className="carousel">
            
            {props.imgs.map((e)=>{
                return(
                    
                    <Carousel.Item className='w-100' style={{height: "100vh",background:`linear-gradient(to bottom, rgba(0,0,0,0) 20%, #06050B), url("https://image.tmdb.org/t/p/original${e.backdrop_path}")`,backgroundSize:"cover",backgroundPosition:"center",backgroundRepeat:"no-repeat"}} key={e.id} >
                        <Carousel.Caption style={{color:"white"}}>
                        <Link to={`/welcome/${e.media_type}/${e.id}`} style={{textDecoration:"none", color:"#0096FF"}}>
                            <h3 className='title' >{e.title || e.name}</h3></Link>
                            <p>{e.overview}</p>
                            <p>{e.category}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            })}
        </Carousel>
    </div>
  );

}

export default Carousal;