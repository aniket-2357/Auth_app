import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const SliderControl = ({ speed, setSpeed }) => {
  const handleSpeedChange = (e) => {
    setSpeed(Number(e.target.value));
  };

  return (
    <div className="d-flex flex-column align-items-center my-4">
      <label htmlFor="speedRange" className="form-label">Adjust Clock Speed</label>
      <input
        type="range"
        className="form-range w-50"
        id="speedRange"
        min="0.1"
        max="10"
        step="0.1"
        value={speed}
        onChange={handleSpeedChange}
      />
      <div className="mt-2">Speed: {speed}x</div>
    </div>
  );
};

export default SliderControl;

