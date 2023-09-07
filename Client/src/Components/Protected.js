import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Protected(props) {
    const navigate = useNavigate()
    useEffect(()=>{
        // let login = localStorage.getItem('login')
        let login = sessionStorage.getItem('login')
        if(!login){
            navigate("/login")
        }
    })
  return (
    <div>{props.Components}</div>
  )
}
