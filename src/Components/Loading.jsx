import React, { useState, useEffect } from 'react';

const PRLoadingAnimation = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showProgressText, setShowProgressText] = useState(false);

  useEffect(() => {
    // Show progress text after a short delay
    const textTimer = setTimeout(() => setShowProgressText(true), 800);
    
    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval);
          // Fade out after completion
          setTimeout(() => setIsVisible(false), 1200);
          return 100;
        }
        return prev + (prev < 50 ? 2.5 : 1.5); // Faster at first, then slower
      });
    }, 100);

    return () => {
      clearInterval(progressInterval);
      clearTimeout(textTimer);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <>
      <style jsx>{`
        @keyframes drawPath {
          0% { stroke-dashoffset: 1000; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes fadeIn {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes pulse-glow {
          0%, 100% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 1; }
        }
        @keyframes float {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.4; }
          50% { transform: translateY(-15px) scale(1.05); opacity: 0.7; }
        }
        @keyframes float-reverse {
          0%, 100% { transform: translateY(0) scale(1); opacity: 0.3; }
          50% { transform: translateY(15px) scale(1.05); opacity: 0.6; }
        }
        @keyframes twinkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.2); }
        }
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        @keyframes fadeOut {
          0% { opacity: 1; }
          100% { opacity: 0; }
        }
        
        .animate-draw-path { 
          animation: drawPath 1.5s ease-out forwards; 
          stroke-dasharray: 1000;
          stroke-dashoffset: 1000;
        }
        .animate-fade-in { animation: fadeIn 0.5s ease-out forwards; }
        .animate-pulse-glow { animation: pulse-glow 2s ease-in-out infinite; }
        .animate-float { animation: float 8s ease-in-out infinite; }
        .animate-float-reverse { animation: float-reverse 10s ease-in-out infinite; }
        .animate-twinkle { animation: twinkle 4s ease-in-out infinite; }
        .animate-shimmer { animation: shimmer 1.5s ease-in-out infinite; }
        .animate-fade-out { animation: fadeOut 0.7s ease-out forwards; }
      `}</style>
      
      <div className={`fixed inset-0 bg-gradient-to-br from-white to-purple-50 flex items-center justify-center z-50 transition-opacity duration-700 ${!isVisible ? 'animate-fade-out' : ''}`}>
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-48 h-48 bg-purple-200/40 rounded-full blur-xl animate-float"></div>
          <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-300/30 rounded-full blur-xl animate-float-reverse"></div>
          
          {/* Subtle particles */}
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-400/50 rounded-full animate-twinkle"
              style={{
                top: `${15 + Math.random() * 70}%`,
                left: `${10 + Math.random() * 80}%`,
                animationDelay: `${i * 0.3}s`,
                animationDuration: `${3 + Math.random() * 2}s`
              }}
            />
          ))}
        </div>

        <div className="relative w-80 h-80 flex items-center justify-center">
          {/* PR Logo/Icon Drawing Animation */}
          <div className="relative w-48 h-48 animate-pulse-glow">
            <svg
              viewBox="0 0 200 200"
              className="w-full h-full"
            >
              {/* Background Circle */}
              <circle
                cx="100"
                cy="100"
                r="80"
                fill="none"
                stroke="#E9D5FF"
                strokeWidth="2"
                opacity="0.5"
              />
              
              {/* PR Letters - Animated Drawing */}
              <g fill="none" stroke="#7E22CE" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round">
                {/* Letter P - Vertical stroke */}
                <path
                  d="M 70 60 L 70 140"
                  className="animate-draw-path"
                  style={{ animationDelay: '0.2s' }}
                />
                {/* Letter P - Top curve */}
                <path
                  d="M 70 60 L 100 60 C 120 60 120 80 100 80 L 70 80"
                  className="animate-draw-path"
                  style={{ animationDelay: '0.8s' }}
                />
                
                {/* Letter R - Vertical stroke */}
                <path
                  d="M 130 60 L 130 140"
                  className="animate-draw-path"
                  style={{ animationDelay: '1.4s' }}
                />
                {/* Letter R - Top curve */}
                <path
                  d="M 130 60 L 160 60 C 180 60 180 80 160 80 L 130 80"
                  className="animate-draw-path"
                  style={{ animationDelay: '2.0s' }}
                />
                {/* Letter R - Diagonal stroke */}
                <path
                  d="M 140 80 L 160 140"
                  className="animate-draw-path"
                  style={{ animationDelay: '2.6s' }}
                />
              </g>
              
              {/* Communication Waves */}
              <circle
                cx="100"
                cy="100"
                r="60"
                fill="none"
                stroke="#A855F7"
                strokeWidth="2"
                strokeDasharray="5,5"
                opacity="0"
                className="animate-fade-in"
                style={{ animationDelay: '3.2s' }}
              />
              <circle
                cx="100"
                cy="100"
                r="70"
                fill="none"
                stroke="#C084FC"
                strokeWidth="1"
                strokeDasharray="3,3"
                opacity="0"
                className="animate-fade-in"
                style={{ animationDelay: '3.4s' }}
              />
              
              {/* Central Dot - Represents Connection */}
              <circle
                cx="100"
                cy="100"
                r="8"
                fill="#7E22CE"
                opacity="0"
                className="animate-fade-in"
                style={{ animationDelay: '3.6s' }}
              />
            </svg>
            
            {/* Floating elements around PR */}
            <div className="absolute -top-2 -left-2 w-6 h-6 bg-purple-400 rounded-full opacity-70 animate-float"></div>
            <div className="absolute -bottom-2 -right-2 w-5 h-5 bg-purple-500 rounded-full opacity-60 animate-float-reverse" style={{ animationDelay: '1s' }}></div>
            <div className="absolute -top-4 right-4 w-4 h-4 bg-purple-300 rounded-full opacity-50 animate-float" style={{ animationDelay: '2s' }}></div>
            <div className="absolute bottom-4 -left-4 w-3 h-3 bg-purple-600 rounded-full opacity-40 animate-float-reverse" style={{ animationDelay: '1.5s' }}></div>
          </div>
          
          {/* Progress indicator */}
          <div className="absolute -bottom-8 w-full text-center">
            <div className={`text-purple-700 text-lg font-medium mb-3 transition-opacity duration-500 ${showProgressText ? 'opacity-100' : 'opacity-0'}`}>
              {Math.round(progress)}% Loaded
            </div>
            <div className="w-48 h-1.5 bg-purple-100 rounded-full mx-auto overflow-hidden shadow-inner">
              <div 
                className="h-full bg-gradient-to-r from-purple-400 to-purple-600 transition-all duration-300 ease-out relative"
                style={{ width: `${progress}%` }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
              </div>
            </div>
          </div>

          {/* Branding */}
          <div className="absolute -top-16 text-center">
            <div className="text-purple-800 font-light text-2xl tracking-wider mb-1">PR SPARKZ</div>
            <div className="text-purple-600 text-sm font-light tracking-wide">Public Relations Excellence</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PRLoadingAnimation;