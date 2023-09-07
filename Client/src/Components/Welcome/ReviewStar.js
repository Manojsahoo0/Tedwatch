import React from 'react'
import GradeIcon from '@mui/icons-material/Grade';

export default function ReviewStar(props) {
    let counts = props.star
    let arr = []
    for(let i=0;i<counts;i++){
        arr.push(i)
    }
  return (
    <>{arr.map((index)=>{
        return(<GradeIcon fontSize='0.5px' key={index} style={{color:"grey"}}/>)
    })}</>
  )
}
