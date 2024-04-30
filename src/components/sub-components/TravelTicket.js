import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './TravelTicket.css';


const TravelTicket = ({ tickets, ticketNumber = 'XZ78932', from, to, departureTime, arrivalTime}) => {
    // Helper function to handle download
    const handleDownload = (url) => {
        window.open(url, '_blank');
      };
  
    return (
      <div>
        {tickets.map((item, index) => (
          <div key={index} style={{ marginBottom: '10px', marginTop: '10px'}}>
            <br></br>
            <span className="travel-ticket-holder-name"><FontAwesomeIcon icon={faUser}/> {item.name}</span>
            <br></br>
            <strong>Ticket number: </strong>{ticketNumber}
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
  
  export default TravelTicket;
