import React from 'react';

const LoadingScreen = ({ isVisible }) => {
  if (!isVisible) return null;

  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 className="text-yellow-400 text-2xl animate-pulse font-starwars">Loading...</h1>
      </div>
    </div>
  );
};

export default LoadingScreen;

