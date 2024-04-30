import React, { useEffect, useState } from 'react';
import '../components/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { faAtom } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <div>
            <div className="footer-wrapper">Powered by React <FontAwesomeIcon icon={faAtom} className='atom'/></div>
        </div>
    );
};

export default Footer;