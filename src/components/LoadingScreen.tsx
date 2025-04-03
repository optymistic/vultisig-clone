import React, { useEffect, useState } from 'react';

export const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const [progress, setProgress] = useState(0);
  const [showPhrases, setShowPhrases] = useState(false);
  const [strikePhrases, setStrikePhrases] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => onComplete(), 500);
          return 100;
        }
        return prev + 1;
      });
    }, 30);

    // Show and strike through animations
    setTimeout(() => setShowPhrases(true), 500);
    setTimeout(() => setStrikePhrases(true), 2000);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 bg-background-light dark:bg-background-dark z-50 flex flex-col items-center justify-center">
      <div className="flex space-x-8 mb-16">
        <div className={`transition-all duration-1000 ${showPhrases ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <span className={`font-cursive text-3xl text-primary transition-all duration-1000 ${strikePhrases ? 'line-through decoration-[3px] decoration-secondary' : ''}`}>
            seed phrases
          </span>
        </div>
        <div className={`transition-all duration-1000 delay-300 ${showPhrases ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'}`}>
          <span className={`font-cursive text-3xl text-primary transition-all duration-1000 delay-300 ${strikePhrases ? 'line-through decoration-[3px] decoration-secondary' : ''}`}>
            private key
          </span>
        </div>
      </div>
      
      <div className="w-64">
        <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full">
          <div 
            className="h-full bg-primary rounded-full transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        <div className="mt-2 text-right text-sm text-gray-500 dark:text-gray-400">{progress}%</div>
      </div>
    </div>
  );
};