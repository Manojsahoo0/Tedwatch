import React, { Fragment, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import "./Home.css"

export const ContactUs = () => {
  const form = useRef();
  const refN = useRef(null)
  const refE = useRef(null)
  const refM = useRef(null)
  const[res,setRes] = useState()
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(`${process.env.REACT_APP_EMAILJS_SERVICE_ID}`, `${process.env.REACT_APP_EMAILJS_TEMPLATE_ID}`, form.current, `${process.env.REACT_APP_EMAILJS_PUBLIC_KEY}`)
      .then((result) => {
          setRes(result.text);
      }, (error) => {
          setRes(error.text);
      });
      e.target.reset()
  };

  const handleReload = () => {
    window.location.reload()
  }
  return (
    <div style={{marginBottom:"50px"}}>
    {res && (
        <div
          style={{
            backgroundColor: "#32CD32",
            color: "black",
            textAlign: "center",
            padding: "10px",
            cursor:"pointer"
          }}
          onClick={handleReload}
        >
          Message sent successfully
        </div>
      )}
    <form ref={form} onSubmit={sendEmail}>
<section>
        <div className="signin">
          <div className="content">
            <h2>Contact Us</h2>

            <div className="form">
            <div className="inputBox">
                <input
                  ref={refN}
                  name="user_name"
                  type="text"
                  id="name"
                  required
                />
                <i>Name</i>
                
              </div>
              <div className="inputBox">
                <input
                  ref={refE}
                  name="user_email"
                  type="email"
                  id="email"
                  required
                />
                <i>Username</i>
              </div>

              <div className="inputBox">
                <input
                  ref={refM}
                  type="text"
                  name="message" 
                  id='message'
                  required
                />
                <i>Message</i>
                
              </div>
              <div className="inputBox">
                <input type="submit" value="Send" style={{backgroundColor: '#0096FF',color:"black"}}/>
              </div>
            </div>
          </div>
        </div>
      </section>
    </form></div>

    
  );
};