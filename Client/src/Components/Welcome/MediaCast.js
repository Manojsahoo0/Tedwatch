import React,{ useState, useEffect, Fragment } from 'react'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';

export default function MediaCast(props) {
    const[res,setRes]=useState()
    useEffect(()=>{
       
        const options = {
            method: 'GET',
            headers: {
              accept: 'application/json',
              Authorization: `${process.env.REACT_APP_AUTH}`
            }
          };

          async function fetchTrailer(){
            let data = await fetch(`https://api.themoviedb.org/3/${props.media}/${props.id}/credits?language=en-US`, options)
            let parsedData = await data.json()
            setRes(parsedData.cast)

          }
          fetchTrailer()
    },[props.id,props.media])
  return (
    <>
    {res&&res.length>0&&<>
        <h3>Cast</h3>
    <div className='cast-contain'>
        
        {res&&res.map((src,index) => (
                <Fragment key={index}>
                {src.profile_path&&<Card sx={{ maxWidth: 345 }} className='card-cast'>
                    <CardActionArea>
                        <CardMedia
                        component="img"
                        height="200"
                        image={`https://image.tmdb.org/t/p/w500${src.profile_path}`}
                        alt="cast"
                        />
                        {/* <CardContent>
                        <h5>{src.original_name}<br/><span style={{fontSize:"1rem"}}>{src.character}</span></h5>

                        </CardContent> */}
                    </CardActionArea>
                    <h5 style={{paddingLeft:"10px"}}>{src.original_name}<br/><span style={{fontSize:"1rem"}}>{src.character}</span></h5>
                </Card>}
                </Fragment>
               
        ))}
    </div>
    </>}
    </>
  )
}
