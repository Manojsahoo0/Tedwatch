import React, { Fragment } from 'react'
import { useState,useEffect } from 'react'
import ReviewStar from './ReviewStar'

export default function ReviewNRating(props) {
    const[review,setReview] = useState()
    let store = JSON.parse(localStorage.getItem("user"))
  let token = store.token

    useEffect(()=>{
        fetch(`/api/review/${props.id}`,{      // http://localhost:8000/api/review/${props.id}
          headers:{
            authorization: `Bearer ${token}`,
            "Content-type": "application/json; charset=UTF-8",
        },})
        .then(data=>data.json())
        .then(data=>setReview(data.slice(data.length-2,data.length)))
    },[props.id,token])
    
  return (
    <div>
        <h3>Reviews</h3>
        <div className='review-contain'>
        {review&&review.map((e,index)=>{
            return (
                <Fragment key={index}>
                    <h5 style={{fontStyle:"italic"}}>A review by {e.name}</h5>
                    <p style={{color:"grey",marginLeft:"1rem", marginBottom:0}}><ReviewStar star={e.rating}/> Written by {e.name} on {e.date}</p>
                    <p>{e.review}</p>
                </Fragment>
            )
        })}
        </div>
    </div>
  )
}
