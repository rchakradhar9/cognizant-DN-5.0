import React from "react";
import office from "./office.jpg";
import "./App.css";

function App() {

  const offices = [
    {
      Name: "DBS",
      Rent: 50000,
      Address: "Chennai"
    },
    {
      Name: "Regus",
      Rent: 75000,
      Address: "Bangalore"
    },
    {
      Name: "SmartWorks",
      Rent: 65000,
      Address: "Hyderabad"
    }
  ];

  return (
    <div className="container">

      <h1>Office Space, at Affordable Range</h1>

      {offices.map((officeItem, index) => (

        <div key={index} className="card">

          <img
            src={office}
            alt="Office Space"
            width="300"
            height="200"
          />

          <h2>Name: {officeItem.Name}</h2>

          <h3
            style={{
              color:
                officeItem.Rent <= 60000
                  ? "red"
                  : "green"
            }}
          >
            Rent: Rs. {officeItem.Rent}
          </h3>

          <h3>
            Address: {officeItem.Address}
          </h3>

          <hr />

        </div>

      ))}

    </div>
  );
}

export default App;