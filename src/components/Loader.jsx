import React, { useState, useEffect } from 'react';

const Loader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let interval;

    if (progress < 100) {
      interval = setInterval(() => {
        setProgress((prev) => {
          const next = prev + Math.floor(Math.random() * 5) + 1;
          return next >= 100 ? 100 : next;
        });
      }, 100);
    }
    // console.log(`Loading... ${progress}%`);
    

    return () => clearInterval(interval);
  }, [progress]);

  return (
    <div className="flex flex-col items-center justify-center text-white text-xl font-bold">
      <div className="mb-2 animate-pulse">Loading...</div>
      <div className="text-4xl tracking-widest">{progress}%</div>
    </div>
  );
};

export default Loader;
