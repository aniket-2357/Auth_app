import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import AnalogClock from './AnalogClock';
import SliderControl from './SliderControl';
import ShareButton from './ShareButton';

const PostLoginScreen = () => {
  const [speed, setSpeed] = useState(1);
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const speedParam = params.get('speed');
    if (speedParam) {
      setSpeed(speedParam);
    }
  }, [location.search]);

  return (
    <div className='page-container'>
      <h2>Post Login Screen</h2>
      <AnalogClock speed={speed} />
      <SliderControl speed={speed} setSpeed={setSpeed} />
      <ShareButton speed={speed} />
    </div>
  );
};

export default PostLoginScreen;
