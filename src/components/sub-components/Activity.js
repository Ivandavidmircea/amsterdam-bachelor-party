import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

import './Activity.css';


const Activity = ({ address, startsAt, imageSource, imageWidth, imageHeight }) => {

    return (
      <div>
            <strong>Starts at: </strong>{startsAt}
            <br></br>
            <strong>Address: </strong> {address}
            <br></br>
            <img src={imageSource} width={imageWidth} height={imageHeight}></img>
      </div>
    );
  };
  
  export default Activity;
