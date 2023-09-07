import React from 'react'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import { useState } from "react";
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'white',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '20ch',
      '&:focus': {
        width: '30ch',
      },
    },
  },
}));
const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));


export default function SearchTab() {


  const navigate = useNavigate()
  const[res,setRes] = useState()
  return (
        <>
        <Search style={{marginRight:"15px"}}>
        
            <StyledInputBase
              placeholder="Movies, TV shows"
              inputProps={{ 'aria-label': 'search' }}
              onChange={(e)=>setRes(e.target.value)}
            />
            <button style={{background:"transparent",border:"none"}} onClick={()=>{
              if(res){
                navigate(`/search?query=${res}`)
              }
            }}>
            <SearchOutlinedIcon fontSize='large' color='primary'/>
          </button>
          </Search>
        

        </>
  )
}
