import React from "react";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <div>
        <div className="content">
          <div id="home-content" className="container1 d-flex">
            <div className="text">
              <h1 style={{ color: "#0096FF" }}>Enjoy on your TV.</h1>
              <p data-testid='para1'>
                Watch on Smart TVs, Playstation, Xbox, <br/>
                Chromecast, Apple TV, Blu-ray players, and
                <br/>
                more.
              </p>
            </div>
            <div className="image">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png"
                alt=""
              />
            </div>
          </div>

          <div id="home-content" className="container1">
            <div className="text">
              <h1 style={{ color: "#0096FF" }}>Watch everywhere.</h1>
              <p data-testid='para2'>
                Stream unlimited movies and TV shows on <br/>
                your phone, tablet, laptop, and TV without paying more.
              </p>
            </div>
            <div className="image">
              <img
                src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile.png"
                alt=""
              />
            </div>
          </div>         
        </div>
      </div>
    </div>
  );
}
