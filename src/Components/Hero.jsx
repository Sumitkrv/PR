import React, { useState, useEffect } from 'react';

const SparkzHero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-gradient-to-br from-indigo-50 to-purple-50 flex items-center justify-center pt-40 relative overflow-hidden"
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* Animated star background - Multiple stars with different animations */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Main large spinning star */}
        <div className="absolute top-1/4 left-1/4 opacity-20">
          <img
            src="src/Components/star.png" // Make sure star.png is in your public folder
            alt="Animated Star"
            className="w-32 h-32 animate-spin-slow"
            style={{ animationDuration: '15s' }}
          />
        </div>
        
        {/* Medium star - opposite spin */}
        <div className="absolute top-3/4 right-1/4 opacity-15">
          <img
           src="src/Components/star.png"
            alt="Animated Star"
            className="w-20 h-20 animate-spin-slow"
            style={{ animationDuration: '12s', animationDirection: 'reverse' }}
          />
        </div>
        
        {/* Small star - faster spin */}
        <div className="absolute top-1/2 left-3/4 opacity-25">
          <img
            src="src/Components/star.png"
            alt="Animated Star"
            className="w-16 h-16 animate-spin-slow"
            style={{ animationDuration: '8s' }}
          />
        </div>
        
        {/* Additional small star */}
        <div className="absolute top-1/3 right-1/3 opacity-10">
          <img
            src="src/Components/star.png"
            alt="Animated Star"
            className="w-12 h-12 animate-spin-slow"
            style={{ animationDuration: '10s', animationDirection: 'reverse' }}
          />
        </div>
        
        {/* Bottom left star */}
        <div className="absolute bottom-1/4 left-1/5 opacity-18">
          <img
           src="src/Components/star.png"
            alt="Animated Star"
            className="w-14 h-14 animate-spin-slow"
            style={{ animationDuration: '14s' }}
          />
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className={`text-center max-w-4xl mx-auto transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <div>You Grow,</div>
            <div className="bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              We Grow
            </div>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-purple-700 font-semibold mb-8">
            Your brand's growth is our growth
          </p>

          {/* Divider */}
          <div className="flex justify-center items-center my-10">
            <div className="w-16 h-1 bg-purple-300 rounded-full"></div>
            <div className="w-3 h-3 bg-purple-500 rounded-full mx-4"></div>
            <div className="w-16 h-1 bg-purple-300 rounded-full"></div>
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed max-w-3xl mx-auto">
            At <span className="text-purple-600 font-semibold">PR Sparkz</span>, we create digital presence that drives real growth. 
            Your success is our success—we're partners in your journey.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold rounded-xl hover:from-purple-700 hover:to-indigo-700 transition-all duration-300 flex items-center space-x-2 min-w-[200px]"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L15.09 8.26L22 9L17 14L18.18 21L12 17.77L5.82 21L7 14L2 9L8.91 8.26L12 2Z" fill="currentColor"/>
              </svg>
              <span>Start a Project</span>
            </button>

            <button
              onClick={scrollToContact}
              className="px-8 py-4 bg-white text-purple-700 font-semibold border-2 border-purple-200 rounded-xl hover:border-purple-400 hover:bg-purple-50 transition-all duration-300 flex items-center space-x-2 min-w-[200px]"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6.62 10.79C8.06 13.62 10.38 15.94 13.21 17.38L15.41 15.18C15.69 14.9 16.08 14.82 16.43 14.93C17.55 15.3 18.75 15.5 20 15.5C20.55 15.5 21 15.95 21 16.5V20C21 20.55 20.55 21 20 21C10.61 21 3 13.39 3 4C3 3.45 3.45 3 4 3H7.5C8.05 3 8.5 3.45 8.5 4C8.5 5.25 8.7 6.45 9.07 7.57C9.18 7.92 9.1 8.31 8.82 8.59L6.62 10.79Z" fill="currentColor"/>
              </svg>
              <span>Book a Call</span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="border-t border-purple-100 pt-8">
            <p className="text-sm text-gray-600 uppercase tracking-widest font-semibold mb-6">
              Trusted by Businesses Worldwide
            </p>
            <div className="flex flex-wrap justify-center items-center gap-6">
              <div className="flex items-center space-x-2">
                {/* <div className="w-2 h-2 bg-green-400 rounded-full"></div> */}
                {/* <span className="text-sm font-medium text-gray-700">500+ Projects</span> */}
              </div>
              <div className="flex items-center space-x-2">
                {/* <div className="w-2 h-2 bg-purple-400 rounded-full"></div> */}
                {/* <span className="text-sm font-medium text-gray-700">98% Success Rate</span> */}
              </div>
              <div className="flex items-center space-x-2">
                {/* <div className="w-2 h-2 bg-blue-400 rounded-full"></div> */}
                {/* <span className="text-sm font-medium text-gray-700">24/7 Support</span> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Simple Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div className="w-6 h-10 border-2 border-purple-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>

      {/* Custom animation for star spin */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin linear infinite;
        }
      `}</style>
    </section>
  );
};

export default SparkzHero;