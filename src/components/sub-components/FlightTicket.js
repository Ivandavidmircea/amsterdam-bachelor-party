import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './FlightTicket.css';


const FlightTicket = ({ tickets, flightNumber = 'XZ78932', from, to, departureTime, arrivalTime}) => {
    // Helper function to handle download
    const handleDownload = (url) => {
      window.open(url, '_blank');
    };

    return (
      <div>
        {tickets.map((item, index) => (
          <div key={index} style={{ marginBottom: '10px', marginTop: '10px'}}>
            {/* <img src={item.image} style={{ width: '200px', height: '200px', marginTop:'10px' }} alt="User" /> */}
            <br></br>
            <span className="flight-ticket-holder-name"><FontAwesomeIcon icon={faUser}/> {item.name}</span>
            <br></br>
            <strong>Flight number: </strong>{flightNumber}
            <br></br>
            <strong>From: </strong> {from}
            <br></br>
            <strong>To: </strong> {to}
            <br></br>
            <strong>Departure time: </strong> {departureTime}
            <br></br>
            <strong>Arrival time: </strong> {arrivalTime}
            <br></br>
            <button className="btn-modal" onClick={() => handleDownload(item.link)} style={{ marginLeft: '10px', marginBottom: '10px'}}>
              Download ticket
            </button>
          </div>
        ))}
      </div>
    );
  };
  
  export default FlightTicket;
