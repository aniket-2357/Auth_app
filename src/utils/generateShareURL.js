// src/utils/generateShareURL.js
export const generateShareURL = (speed) => {
    const baseUrl = window.location.origin + '/postlogin';
    return `${baseUrl}?speed=${speed}`;
  };
  