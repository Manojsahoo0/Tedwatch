import React from "react";
import Navbar from "./Navbar";
import DoneIcon from "@mui/icons-material/Done";
import Footer from "../Home/Footer.js";
import { useNavigate } from "react-router";
export default function Pricing() {
    let name = JSON.parse(localStorage.getItem("user")).name;
    const navigate = useNavigate()
  return (
    <div>
      <Navbar />
      <div style={{ textAlign: "center", color: "white" }}>
        <h3 style={{ color: "#0096FF" }}>Choose your plan.</h3>
        <div>
          <ul style={{ display: "flex", flexDirection: "column" }}>
            <li>
              <DoneIcon color="primary" />
              No commitments, cancel at any time.
            </li>
            <li>
              <DoneIcon color="primary" />
              Everything on Netflix for one low price.
            </li>
            <li>
              <DoneIcon color="primary" />
              No adverts and no extra fees. Ever.
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <table className="table table-striped table-dark">
          <thead>
            <tr>
              <th scope="col"></th>
              <th scope="col">Basic</th>
              <th scope="col">Standard</th>
              <th scope="col">Premium</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Monthly Price</td>
              <td>Rs. 199</td>
              <td>Rs. 499</td>
              <td>Rs. 699</td>
            </tr>
            <tr>
              <td>Resolution</td>
              <td>480p</td>
              <td>1080p</td>
              <td>4K+HDR</td>
            </tr>
            <tr>
              <td>Video Quality</td>
              <td>Good</td>
              <td>Better</td>
              <td>Best</td>
            </tr>
            <tr>
              <td></td>
              <td>
                <button className="btn btn-primary" onClick={()=>{

                    navigate("/welcome/pricing/checkout/basic")
                }}>Proceed</button>
              </td>
              <td>
                <button className="btn btn-primary" onClick={()=>navigate("/welcome/pricing/checkout/standard")}>Proceed</button>
              </td>
              <td>
                <button className="btn btn-primary" onClick={()=>navigate("/welcome/pricing/checkout/premium")}>Proceed</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <p style={{ color: "grey", fontStyle: "italic" }}>
            HD (720p), Full HD (1080p), Ultra HD (4K) and HDR availability
            subject to your internet service and device capabilities. Not all
            content is available in all resolutions. Only people who live with
            you may use your account. Watch on 4 different devices at the same
            time with Premium, 2 with Standard, and 1 with Basic and Mobile.
          </p>
        </div>
      </div>
      <Footer name={name}/>
    </div>
  );
}
