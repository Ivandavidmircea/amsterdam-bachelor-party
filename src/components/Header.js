import React, { useEffect, useState } from 'react';
import '../components/Header.css';
import CountdownTimer from './CountdownTimer';

const Header = () => {
    
    const targetDate = new Date('May 5, 2024 06:00:00');

    return (
        <div>
            <div className="header-wrapper">{'\uD83C\uDF7A'} Amsterdam bachelor party {'\uD83C\uDF7A'}</div>
            <div className="header-event-date">5 May 2024 - 10 May 2024</div>
            <div className="author-credits">made with {'\u2764\uFE0F'} by David Ivan</div>
            <CountdownTimer targetDate={targetDate} />
        </div>
    );
};

export default Header;