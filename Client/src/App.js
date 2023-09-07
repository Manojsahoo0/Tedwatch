import './App.css';
import Home from './Components/Home/Home.js';
import React from "react";
import Navbar from "./Components/Home/Navbar.js";
import Footer from "./Components/Home/Footer.js";
import { Route, Routes } from 'react-router-dom';
import Login from "./Components/Home/Login.js";
import Welcome from "./Components/Welcome/Welcome.js"
import Protected from "./Components/Protected.js";
import SearchRes from "./Components/Welcome/SearchRes.js";
import Signup from "./Components/Home/Signup.js";
import MovieDetails from "./Components/Welcome/MovieDetails.js";
import Watchlist from "./Components/Welcome/Watchlist.js";
import Profile from "./Components/Welcome/Profile.js";
import TvDetails from "./Components/Welcome/TvDetails.js";
import Movies from "./Components/Welcome/Movies.js";
import Series from "./Components/Welcome/Series.js";
import ReviewAdd from "./Components/Welcome/ReviewAdd.js";
import About from "./Components/Home/About.js";
import { ContactUs } from "./Components/Home/ContactUs.js";
import Pricing from './Components/Welcome/Pricing';
import CheckoutPage from './Components/Welcome/CheckoutPage';

function App() {
  return (
    <div className="App">
      <div>   
      <Routes>
        <Route path="/" element={
          <div>
            <div className="content">
              <Navbar loginShow={true} logoutShow={false} />
              <Home/>
            </div>
            <Footer />
          </div>
        }></Route>
        <Route path="/about" element={
          <div>
            <div className="content">
              <Navbar loginShow={true} logoutShow={false}/>
              <About/>
            </div>
            <Footer/>
          </div>
        }></Route>
        <Route path="/contact" element={
          <div>
            <div className="content">
              <Navbar loginShow={true} logoutShow={false}/>
              <ContactUs/>
            </div>
            <Footer/>
          </div>
        }></Route>
        <Route path="/login" element={
          <div style={{ height:"100vh"}} className="content">
            <Navbar loginShow={false} logoutShow={false}/>
            <Login/>           
          </div>
        }></Route>
        <Route path="/signup" element={
          <div style={{ height:"100vh"}} className="content">
            <Navbar loginShow={false} logoutShow={false}/>
            <Signup/>     
          </div>
        }></Route>
        <Route path="/welcome" element={
          <Protected Components={
            <div style={{ height:"100vh"}} className="content">
              <Welcome/>  
            </div>}/>
        }></Route>
        <Route path="/search" element={
          <Protected Components={
            <div style={{ height:"100vh"}} className="content">
              <SearchRes/>  
            </div>}/>
        }></Route>
        <Route path="/discover/movies" element={
          <Protected Components={
            <div style={{ height:"100vh"}} className="content">
              <Movies/>             
            </div>}/>
        }></Route>
        <Route path="/addreview/:content/:id" element={
          <Protected Components={
            <div style={{ height:"100vh"}} className="content">
              <ReviewAdd/>             
            </div>}/>
        }></Route>
        <Route path="/discover/tv" element={
          <Protected Components={
            <div style={{ height:"100vh"}} className="content">
              <Series/>
            </div>}/>
        }></Route>
        <Route path="/welcome/movie/:id" element={   
          <Protected Components={    
            <div style={{ height:"100vh"}} className="content">
              <MovieDetails/> 
            </div>}/>
        }></Route>
        <Route path="/welcome/tv/:id" element={
          <Protected Components={ 
          <div style={{ height:"100vh"}} className="content">
            <TvDetails/>
          </div>}/>
      }></Route>
        <Route path="/welcome/watchlist" element={
          <Protected Components={ 
          <div style={{ height:"100vh"}} className="content">
            <Watchlist/> 
          </div>}/>
      }></Route>
      <Route path="/welcome/profile" element={
          <Protected Components={ 
          <div style={{ height:"100vh"}} className="content">
            <Profile/>
          </div>}/>
      }></Route>
      <Route path="/welcome/pricing" element={
          <Protected Components={ 
          <div style={{ height:"100vh"}} className="content">
            <Pricing/>
          </div>}/>
      }></Route>
      <Route path="/welcome/pricing/checkout/:plan" element={
          <Protected Components={ 
          <div style={{ height:"100vh"}} className="content">
            <CheckoutPage/>
          </div>}/>
      }></Route>
      </Routes>
    </div>
    </div>
  );
}

export default App;
