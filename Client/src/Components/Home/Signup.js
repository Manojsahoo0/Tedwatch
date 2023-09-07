import React, { useState } from "react";
import "./Home.css";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const [errorE, setErrorE] = useState();
  const [errorP, setErrorP] = useState();
  const [errorM, setErrorM] = useState();

  const [formData, setFormdata] = useState({});
  const [res, setRes] = useState();
  const navigate = useNavigate();
  const handleSubmit = () => {
    if (
      !(formData.name && formData.email && formData.password && formData.phone)
    ) {
      setRes("Please Enter all fields");
    } else {
      if (!(errorE || errorP || errorM)) {
        fetch("/api/users", {   // http://localhost:8000/api/users
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        })
          .then((data) => data.json())
          .then((data) => {
            alert("user created successfully");
            navigate("/login");
            // setRes(data.message)
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

  const validatePhone = (phone) => {
    if (typeof phone !== "undefined") {
      var pattern = new RegExp(
        /^([+]?[\s0-9]+)?(\d{3}|[(]?[0-9]+[)])?([-]?[\s]?[0-9])+$/i
      );
      if (!pattern.test(phone)) {
        setErrorM("Please Enter Number Only");
      } else if (phone.length !== 10) {
        setErrorM("Please enter valid  Mobile Number.");
      } else {
        setErrorM("");
      }
    }
  };
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <>
      {res && (
        <div
          style={{
            backgroundColor: "#FF5C5C",
            color: "black",
            textAlign: "center",
            padding: "10px",
            cursor: "pointer",
          }}
          onClick={handleReload}
        >
          {res}
        </div>
      )}

      <section>
        <div className="signin d-flex">
          <div className="content">
            <h2>Sign Up</h2>

            <div className="form">
              <div className="inputBox">
                <input
                  type="text"
                  onChange={(e) =>
                    setFormdata({ ...formData, name: e.target.value })
                  }
                  required
                />
                <i>Name</i>
              </div>
              <div className="inputBox">
                <input
                  type="tel"
                  onChange={(e) => {
                    validatePhone(e.target.value);
                    setFormdata({ ...formData, phone: e.target.value });
                  }}
                  required
                />
                <i>Phone</i>
                <br />
                {errorM && <>{errorM}</>}
              </div>
              <div className="inputBox">
                <input
                  type="text"
                  onChange={(e) => {
                    validateEmail(e.target.value);
                    setFormdata({ ...formData, email: e.target.value });
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
                    setFormdata({ ...formData, password: e.target.value });
                  }}
                  required
                />
                <i>Password</i>
                <br />
                {errorP && <>{errorP}</>}
              </div>
              <div className="links">
                <a href="/"></a> <Link to="/login">Sign In</Link>
              </div>

              <div className="inputBox">
                <input
                  type="submit"
                  value="SignIn"
                  onClick={() => handleSubmit()}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
