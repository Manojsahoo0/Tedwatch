import * as React from "react";
import { useState } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const navigate = useNavigate();
  const [errorE, setErrorE] = useState();
  const [errorP, setErrorP] = useState();
  const [logindata, setLogindata] = useState({});
  const [res, setRes] = useState();

  const handleLogin = () => {
    if (!(logindata.email && logindata.password)) {
      setRes("Please Enter all fields");
    } else {
      if (!(errorE || errorP)) {
        fetch("/api/users/login", {      // http://localhost:8000/api/users/login  
          method: "POST",
          body: JSON.stringify(logindata),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((data) => data.json())
          .then((data) => {
            setRes(data.message);
            if (data.token) {
              async function watchApi() {
                if (data.id) {
                  let response = await fetch(
                    `/api/watchlist/${data.id}`,   // http://localhost:8000/api/watchlist/${data.id}
                    {                     
                      headers: {
                        authorization: `Bearer ${data.token}`,
                        "Content-type": "application/json; charset=UTF-8",
                      },
                    }
                  );
                  let parsedData = await response.json();
                  if (!parsedData.message) {
                    parsedData.forEach((e) => {
                      localStorage.setItem(`${e.movieId}`, true);
                    });
                  }
                } else {
                  setRes("Some Error Occured");
                }
              }
              watchApi();
              localStorage.setItem("login", true);
              localStorage.setItem("user", JSON.stringify(data));

              sessionStorage.setItem("login", true);
              // sessionStorage.setItem("user", JSON.stringify(data));

              navigate("/welcome");
            }
          });
      } else {
        setRes("Validation Error");
      }
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    if (!emailRegex.test(email)) {
      setErrorE("Please enter a valid email address");
    } else {
      setErrorE("");
    }
  };
  const validatePassword = (password) => {
    if (password.length < 4) {
      setErrorP("Password must be more than 4 characters");
    } else if (password.length > 16) {
      setErrorP("Password cannot be more than 16 characters");
    } else {
      setErrorP("");
    }
  };
  const handleReload = () => {
    window.location.reload()
  }
  return (
    <>
    {res && (
        <div
          style={{
            backgroundColor: "#FF5C5C",
            color: "black",
            textAlign: "center",
            padding: "10px",
            cursor:"pointer"
          }}
          onClick={handleReload}
        >
          {res}
        </div>
      )}
      <section>
        <div className="signin">
          <div className="content">
            <h2>Sign In</h2>

            <div className="form">
              <div className="inputBox">
                <input
                  type="text"
                  onChange={(e) => {
                    validateEmail(e.target.value);
                    setLogindata({ ...logindata, email: e.target.value });
                  }}
                  required
                />
                <i>Username</i>
                <br />
                {errorE && <>{errorE}</>}
              </div>

              <div className="inputBox">
                <input
                  type="password"
                  onChange={(e) => {
                    validatePassword(e.target.value);
                    setLogindata({ ...logindata, password: e.target.value });
                  }}
                  required
                />
                <i>Password</i>
                <br />
                {errorP && <>{errorP}</>}
              </div>

              <div className="links">
                <a href="/"></a> <Link to="/signup">Sign Up</Link>
              </div>

              <div className="inputBox">
                <input type="submit" value="Login" onClick={handleLogin} />
              </div>
            </div>
          </div>
        </div>
      </section>
      
    </>
  );
}
