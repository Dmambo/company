import React from 'react';

const Logo = () => {
  return (
    <div className="flex items-center">
      {/* Icon Part */}
      <div className="bg-red-600 text-white rounded-full p-2.5">
        <svg 
          xmlns="http://www.w3.org/2000/svg" 
          className="h-6 w-6" 
          fill="none" 
          viewBox="0 0 24 24" 
          stroke="currentColor"
        >
          <path 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth={2} 
            d="M13 16h-1v-4h-1m0 0H9m1-1V9m0 3h2m0-2V9m0 6v2m-4 0h2a2 2 0 012 2v1H7v-1a2 2 0 012-2h2z" 
          />
        </svg>
      </div>

      {/* Text Part */}
      <h1 className="text-2xl font-bold text-yellow-600">
        Web<span className="text-green-600">Con</span>
      </h1>
    </div>
  );
};

export default Logo;
