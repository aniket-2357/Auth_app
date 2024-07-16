import React, { useEffect, useState, useRef } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const AnalogClock = ({ speed }) => {
  const [value, setValue] = useState(new Date());
  const intervalRef = useRef();

  useEffect(() => {
    const startTime = new Date();
    intervalRef.current = setInterval(() => {
      setValue(new Date(startTime.getTime() - (new Date() - startTime) * speed));
    }, 1000);

    return () => clearInterval(intervalRef.current);
  }, [speed]);

  return (
    <div className="d-flex justify-content-center align-items-center my-4">
      <div className="border p-3 rounded">
        <Clock value={value} />
      </div>
    </div>
  );
};

export default AnalogClock;
