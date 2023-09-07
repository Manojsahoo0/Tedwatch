import React from "react";

import Navbar from "./Navbar";
import { useParams } from 'react-router-dom'

export default function CheckoutPage() {
  let res
  let params = useParams()

  if(params.plan==="basic"){
    res = "199.00"
  }
  else if(params.plan==="standard"){
    res = "499.00"
  }
  else if(params.plan==="premium"){
    res = "699.00"
  }
  return (
    <div>
      <Navbar />
      <div bgcolor="#f6f6f6" style={{color: "#333", height: "100%", width: "100%"}}>
    <table bgcolor="#f6f6f6" cellSpacing="0" style={{borderCollapse: "collapse", padding: "40px", width: "100%"}} width="100%">
        <tbody>
            <tr>
                <td width="5px" style={{padding: "0"}}></td>
                <td style={{clear: "both", display: "block", margin: "0 auto", maxWidth: "600px",padding: "10px 0"}}>
                    <table width="100%" cellSpacing="0" style={{borderCollapse: "collapse"}}>
                        <tbody>
                            <tr>
                                <td style={{padding: "0"}}>
                                    <a
                                        href="/"
                                        style={{color: "#348eda"}}
                                        target="_blank"
                                    >
                                        <img
                                            src="//ssl.gstatic.com/accounts/ui/logo_2x.png"
                                            alt="Bootdey.com"
                                            style={{height: "50px", maxWidth: "100%", width: "157px"}}
                                            height="50"
                                            width="157"
                                        />
                                    </a>
                                </td>
                                <td style={{color: "#999", fontSize: "12px", padding: "0", textAlign: "right"}} align="right">
                                    Tedwatch<br />
                                    Invoice #{Math.floor(Math.random()*1000000)}<br />
                                    {Date()}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td width="5px" style={{padding: "0"}}></td>
            </tr>

            <tr>
                <td width="5px" style={{padding: "0"}}></td>
                <td bgcolor="#FFFFFF" style={{border: "1px solid #000", clear: "both", display: "block", margin: "0 auto", maxWidth: "600px", padding: "0"}}>
                    <table width="100%" style={{background: "#f9f9f9", borderBottom: "1px solid #eee", borderCollapse: "collapse", color: "#999"}}>
                        <tbody>
                            <tr>
                                <td width="50%" style={{padding: "20px"}}><strong style={{color: "#333", fontSize: "24px"}}>${res}</strong> Paid</td>
                                <td align="right" width="50%" style={{padding: "20px"}}>Thanks for using <span className="il">Tedwatch.com</span></td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td style={{padding: "0"}}></td>
                <td width="5px" style={{padding: "0"}}></td>
            </tr>
            <tr>
                <td width="5px" style={{padding: "0"}}></td>
                <td style={{border: "1px solid #000", borderTop: "0", clear: "both", display: "block", margin: "0 auto", maxWidth: "600px", padding: "0"}}>
                    <table cellSpacing="0" style={{borderCollapse: "collapse", borderLeft: "1px solid #000", margin: "0 auto", maxWidth: "600px"}}>
                        <tbody>
                            <tr>
                                <td valign="top"  style={{padding: "20px"}}>
                                    <h3
                                        style={{
                                            borderBottom: "1px solid #000",
                                            color: "#000",
                                            // fontFamily: 'Helvetica Neue', Helvetica, Arial, 'Lucida Grande', sans-serif;
                                            fontSize: "18px",
                                            fontWeight: "bold",
                                            lineHeight: "1.2",
                                            margin: "0",
                                            marginBottom: "15px",
                                            paddingBottom: "5px",
                                        }}
                                    >
                                        Summary
                                    </h3>
                                    <table cellSpacing="0" style={{borderCollapse: "collapse", marginBottom: "40px"}}>
                                        <tbody>
                                            <tr>
                                                <td style={{padding: "5px 0"}}>Old Plan</td>
                                                <td align="right" style={{padding: "5px 0"}}>Free plan (10,000 videos/month)</td>
                                            </tr>
                                            <tr>
                                                <td style={{padding: "5px 0"}}>New Plan</td>
                                                <td align="right" style={{padding: "5px 0"}}>Concept Plan</td>
                                            </tr>
                                            <tr>
                                                <td style={{padding: "5px 0"}}>Prorated subscription amount due</td>
                                                <td align="right" style={{padding: "5px 0"}}>${res}</td>
                                            </tr>
                                            <tr>
                                                <td style={{borderBottom: "2px solid #000", borderTop: "2px solid #000", fontWeight: "bold", padding: "5px 0"}}>Amount paid</td>
                                                <td align="right" style={{borderBottom: "2px solid #000", borderTop: "2px solid #000", fontWeight: "bold", padding: "5px 0"}}>${res}</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td width="5px" style={{padding: "0"}}></td>
            </tr>

            <tr style={{color: "#666", fontSize: "12px"}}>
                <td width="5px" style={{padding: "10px 0"}}></td>
                <td style={{clear: "both", display: "block", margin: "0 auto", maxWidth: "600px", padding: "10px 0"}}>
                    <table width="100%" cellSpacing="0" style={{borderCollapse: "collapse"}}>
                        <tbody>
                            <tr>
                                <td width="40%" valign="top" style={{padding: "10px 0"}}>
                                    <h4 style={{margin: "0"}}>Questions?</h4>
                                    <p style={{color: "#666", fontSize: "12px", fontWeight: "normal", marginBottom: "10px"}}>
                                        Please visit on
                                            Contact Us
                                        
                                        with any questions.
                                    </p>
                                </td>
                                <td width="10%" style={{padding: "10px 0"}}>&nbsp;</td>
                                <td width="40%" valign="top" style={{padding: "10px 0"}}>
                                    <h4 style={{margin: "0"}}><span className="il">Tedwatch</span> Technologies</h4>
                                    <p style={{color: "#666", fontSize: "12px", fontWeight: "normal", marginBottom: "10px"}}>
                                        <a href="/">535 Mission St., 14th Floor San Francisco, CA 94105</a>
                                    </p>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </td>
                <td width="5px" style={{padding: "10px 0"}}></td>
            </tr>
        </tbody>
    </table>
</div>
    </div>
  );
}
