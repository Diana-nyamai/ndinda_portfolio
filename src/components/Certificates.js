import React from "react";
import "../css/certificates.css";
function Certificates() {
  const certData = [
    {
      image: "../certs/react.jpg",
    },
    {
      image: "../certs/CSS.jpg",
    },
    {
      image: "../certs/HTML.jpg",
    },
    {
      image: "../certs/javaScript.jpg",
    },
    {
      image: "../certs/PHP.jpg",
    },
    {
      image: "../certs/GADS.jpeg",
    },
  ];
  return (
    <div className="certificate" id="certificates">
    <h2>Certificates</h2>
    <div className="c-container">
    {
      certData.map((cdata) =>
      <div className="c-card">
        <div className="c-content">
        <img src={cdata.image} alt="" />
        </div>
      </div>
      )
    }
      
    </div>
    </div>
  );
}

export default Certificates;
