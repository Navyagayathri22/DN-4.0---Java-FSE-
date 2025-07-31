// src/App.js
import React from 'react';
import './App.css';

function App() {
  const officeList = [
    {
      name: "WeWork Tower",
      rent: 55000,
      address: "Bangalore"
    }
  ];

  const heading = <h1 style={{ color: "#333" }}>Office Space Rental App</h1>;

  const image = (
    <img
      src="https://media.istockphoto.com/id/1141421616/photo/this-office-space-is-filled-with-productivity.jpg?s=612x612&w=0&k=20&c=ka6rGPcVkhjC2cG-ICEQaE7mzufJ253bngJPahvBlCg="
      alt="Office"
      style={{ width: '400px', height: '200px' }}
    />
  );

  return (
    <div className="App" style={{ padding: '20px' }}>
      {heading}
      {image}

      <h2>Available Offices</h2>
      <ul>
        {officeList.map((office, index) => (
          <li key={index} style={{ marginBottom: '10px' }}>
            <strong>Name:</strong> {office.name}<br />
            <strong>Rent:</strong>{" "}
            <span style={{ color: office.rent > 60000 ? "green" : "red" }}>
              ₹{office.rent}
            </span>
            <br />
            <strong>Address:</strong> {office.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
