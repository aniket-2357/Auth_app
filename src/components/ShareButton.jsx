import React from 'react';
import { generateShareURL } from '../utils/generateShareURL';
import 'bootstrap/dist/css/bootstrap.min.css';

const ShareButton = ({ speed }) => {
  const handleShare = () => {
    const shareUrl = generateShareURL(speed);
    
    navigator.clipboard.writeText(shareUrl);
    alert('URL copied to clipboard: ' + shareUrl);
  };

  return (
    <div class="d-grid gap-2 col-6 mx-auto ">
    <button onClick={handleShare} className="btn btn-primary my-3 me-md-2">
      Share
    </button>
    </div>
    
    
  
  );
};

export default ShareButton;

