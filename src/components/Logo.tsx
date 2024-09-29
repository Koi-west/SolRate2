import React from 'react';

const Logo = () => (
  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
    <svg width="100%" height="100%" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
      <text
        x="50%"
        y="40%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="16"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >
        Sol
      </text>
      <text
        x="50%"
        y="75%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="white"
        fontSize="11"
        fontFamily="Arial, sans-serif"
        fontWeight="bold"
      >
        Rate
      </text>
    </svg>
  </div>
);

export default Logo;