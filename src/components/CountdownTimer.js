import React, { useState, useEffect } from 'react';

import '../components/CountdownTimer.css';

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      const difference = targetDate - now;

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((difference / 1000 / 60) % 60);
      const seconds = Math.floor((difference / 1000) % 60);

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds,
      });

      if (difference < 0) {
        clearInterval(interval);
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
        });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  return (
    <div>
      {timeLeft.days !== undefined ? (
        <div className="timer-container">
          <p className="timer-unit"><strong>Days</strong> <div className="timer-unit-value">{timeLeft.days}</div></p>
          <p className="timer-unit"><strong>Hours</strong>  <div className="timer-unit-value">{timeLeft.hours}</div></p>
          <p className="timer-unit"><strong>Minutes</strong>  <div className="timer-unit-value">{timeLeft.minutes}</div></p>
          <p className="timer-unit"><strong>Seconds</strong>  <div className="timer-unit-value">{timeLeft.seconds}</div></p>
        </div>
      ) : (
        <p className='time-up'>🎉🎉It has begun. 🎉🎉</p>
      )}
    </div>
  );
};

export default CountdownTimer;