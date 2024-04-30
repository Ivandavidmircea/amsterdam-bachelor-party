import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './Accomodation.css';


const Accomodation = ({ tickets, ticketNumber = 'XZ78932', imageSource, imageHeight, imageWidth}) => {
    // Helper function to handle download
    const handleDownload = (url) => {
        window.open(url, '_blank');
      };
  
    return (
      <div>
        {tickets.map((item, index) => (
          <div key={index} style={{ marginBottom: '10px', marginTop: '10px'}}>
            <br></br>
            <strong>Ticket number: </strong>{ticketNumber}
            <br></br>
            <button className="btn-modal" onClick={() => handleDownload(item.link)} style={{ marginLeft: '10px', marginBottom: '10px'}}>
              Download ticket
            </button>
            <br></br>
            <img src={imageSource} width={imageWidth} height={imageHeight}></img>
          </div>
        ))}
      </div>
    );
  };
  
  export default Accomodation;
