import React from "react";
import "./Home.css"
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

export default function Footer(props) {
  let date = new Date().getFullYear();
  return (
    <div className="footer" style={{marginTop:"10px",display:"flex",justifyContent:"space-around"}}>
      {props.name&&<div style={{display:"flex", alignItems:"center"}}>
        <h3>Welcome <span style={{color:"#0096FF"}}>{props.name}</span></h3>
      </div>}
      <div className="left">
        <h1 style={{color:"#0096FF"}}>Tedwatch</h1>
        <p>Copyright&copy; {date} Tedwatch, Inc.</p>
        <ul>
          <li>
            <a href="https://www.facebook.com/">
              <FacebookIcon />
            </a>
          </li>
          <li>
            <a href="https://www.instagram.com/">
              <InstagramIcon />
            </a>
          </li>
          <li>
            <a href="https://twitter.com/i/flow/login">
              <TwitterIcon />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/">
              <YouTubeIcon />
            </a>
          </li>
        </ul>
      </div>
      
    </div>
  );
}
