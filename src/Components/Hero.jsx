import React, { useState, useEffect, useRef } from 'react';

const SparkzHero = () => {
  const [animationStage, setAnimationStage] = useState(0);
  const [liquidProgress, setLiquidProgress] = useState(0);
  const [showTagline, setShowTagline] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [activeAccent, setActiveAccent] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const [hoveredButton, setHoveredButton] = useState(null);
  const heroRef = useRef(null);

  useEffect(() => {
    setMounted(true);
    
    // Preload critical images
    const preloadImages = () => {
      const imageUrls = [
        // Add any critical image URLs here for preloading
      ];
      
      Promise.all(
        imageUrls.map(url => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
          });
        })
      ).then(() => {
        setImagesLoaded(true);
      }).catch(() => {
        setImagesLoaded(true); // Continue even if some images fail
      });
    };

    preloadImages();
    
    // Check if device is mobile
    const checkIsMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkIsMobile();
    window.addEventListener('resize', checkIsMobile);
    
    // Start the animation sequence after images are loaded
    const animationSequence = async () => {
      // Wait for images to load or timeout after 1s
      if (!imagesLoaded) {
        await new Promise(resolve => setTimeout(resolve, 1000));
      }
      
      // Stage 1: Initial background
      setTimeout(() => setAnimationStage(1), 500);
      
      // Stage 2: Liquid flow animation
      setTimeout(() => {
        setAnimationStage(2);
        
        // Animate liquid flowing in
        const liquidInterval = setInterval(() => {
          setLiquidProgress(prev => {
            if (prev >= 100) {
              clearInterval(liquidInterval);
              
              // Stage 3: Tagline reveal
              setTimeout(() => {
                setAnimationStage(3);
                setShowTagline(true);
              }, 500);
              
              return 100;
            }
            return prev + 1.5;
          });
        }, 30);
      }, 1000);
    };

    animationSequence();

    return () => {
      window.removeEventListener('resize', checkIsMobile);
    };
  }, [imagesLoaded]);

  // Liquid flow path data - enhanced with more organic curves
  const liquidPath = "M 0 50 C 150 15, 250 85, 400 35 S 650 65, 800 45 C 850 40, 870 55, 900 50";

  // Handle accent hover
  const handleAccentHover = (index) => {
    setActiveAccent(index);
    setTimeout(() => setActiveAccent(null), 1000);
  };

  // Handle button hover
  const handleButtonHover = (index) => {
    setHoveredButton(index);
  };

  // Handle button leave
  const handleButtonLeave = () => {
    setHoveredButton(null);
  };

  return (
    <div 
      id="home"
      ref={heroRef}
      className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center justify-center px-6 sm:px-6 relative overflow-hidden"
      style={{ 
        fontFamily: "'Montserrat', sans-serif", 
        paddingTop: 'clamp(8rem, 12vh, 10rem)' 
      }}
      role="banner"
      aria-label="Main hero section"
    >
      {/* Enhanced background with yellow sparks animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Yellow sparks scattered across background */}
        <div className="absolute top-20 left-16 w-6 h-6 opacity-40">
          <div className="spark-shape bg-yellow-400 animate-spark-twinkle-1"></div>
        </div>
        <div className="absolute top-32 right-24 w-4 h-4 opacity-50">
          <div className="spark-shape bg-yellow-300 animate-spark-twinkle-2"></div>
        </div>
        <div className="absolute top-40 left-1/3 w-5 h-5 opacity-45">
          <div className="spark-shape bg-yellow-500 animate-spark-twinkle-3"></div>
        </div>
        <div className="absolute bottom-40 right-20 w-7 h-7 opacity-35">
          <div className="spark-shape bg-yellow-400 animate-spark-pulse-1"></div>
        </div>
        <div className="absolute bottom-32 left-20 w-3 h-3 opacity-60">
          <div className="spark-shape bg-yellow-300 animate-spark-pulse-2"></div>
        </div>
        <div className="absolute top-1/2 right-1/3 w-4 h-4 opacity-50">
          <div className="spark-shape bg-yellow-500 animate-spark-rotate-1"></div>
        </div>
        <div className="absolute bottom-1/3 left-1/4 w-6 h-6 opacity-40">
          <div className="spark-shape bg-yellow-400 animate-spark-rotate-2"></div>
        </div>
        <div className="absolute top-1/4 left-2/3 w-5 h-5 opacity-45">
          <div className="spark-shape bg-yellow-300 animate-spark-glow"></div>
        </div>

        {/* Animated paper texture */}
        <div 
          className="absolute inset-0 opacity-5 pointer-events-none"
          style={{
            backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 1px, rgba(0,0,0,0.02) 1px, rgba(0,0,0,0.02) 2px)`,
            animation: 'textureMove 20s infinite linear'
          }}
          aria-hidden="true"
        />
        
        {/* Dynamic radial gradient */}
        <div 
          className="absolute inset-0 opacity-30 pointer-events-none"
          style={{
            background: `radial-gradient(ellipse at ${activeAccent === 0 ? '30% 40%' : activeAccent === 1 ? '70% 40%' : '50% 50%'}, rgba(55, 65, 81, 0.03) 0%, transparent 60%)`,
            transition: 'all 1.5s ease-out'
          }}
          aria-hidden="true"
        />

        {/* Subtle grid pattern */}
        <div 
          className="absolute inset-0 opacity-10 pointer-events-none"
          style={{
            backgroundImage: `
              linear-gradient(rgba(0, 0, 0, 0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px',
            animation: 'gridPulse 15s infinite alternate'
          }}
          aria-hidden="true"
        />
      </div>

      {/* Enhanced liquid flow animation with multiple paths */}
      {animationStage >= 2 && (
        <div className="absolute inset-0 overflow-hidden z-5" aria-hidden="true">
          <svg 
            className="w-full h-full" 
            viewBox="0 0 900 100" 
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="liquidGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#6B7280" stopOpacity="0.6" />
                <stop offset="50%" stopColor="#374151" stopOpacity="0.7" />
                <stop offset="100%" stopColor="#1F2937" stopOpacity="0.6" />
              </linearGradient>
              <linearGradient id="secondaryLiquid" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#9CA3AF" stopOpacity="0.3" />
                <stop offset="50%" stopColor="#6B7280" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#4B5563" stopOpacity="0.3" />
              </linearGradient>
            </defs>
            
            {/* Secondary liquid path (slightly delayed) */}
            <path
              d={liquidPath}
              stroke="url(#secondaryLiquid)"
              strokeWidth="1.5"
              fill="none"
              strokeDasharray="900"
              strokeDashoffset={900 - ((liquidProgress - 10) / 100) * 900}
              style={{ transition: 'stroke-dashoffset 0.4s ease-out' }}
            />
            
            {/* Main liquid path */}
            <path
              d={liquidPath}
              stroke="url(#liquidGradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="900"
              strokeDashoffset={900 - (liquidProgress / 100) * 900}
              style={{ transition: 'stroke-dashoffset 0.4s ease-out' }}
            />
          </svg>
        </div>
      )}

      {/* Enhanced droplets with varied sizes and timing */}
      {animationStage >= 2 && liquidProgress > 0 && (
        <div className="absolute inset-0 z-5" aria-hidden="true">
          {[10, 25, 40, 55, 70, 85].map((progress, index) => (
            <div
              key={progress}
              className={`absolute rounded-full bg-gray-500 opacity-40 ${index % 2 === 0 ? 'w-1.5 h-1.5' : 'w-2 h-2'}`}
              style={{
                left: `${progress + (liquidProgress / 100) * 8}%`,
                top: `${
                  50 + 
                  Math.sin(progress * 0.1) * 12 + 
                  Math.sin(progress * 0.15 + index) * 6
                }%`,
                transition: 'all 0.6s ease-out',
                display: liquidProgress >= progress ? 'block' : 'none',
                animation: index % 2 === 0 ? 'pulse 2s infinite' : 'pulse 3s infinite',
                animationDelay: `${index * 0.2}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Floating particles with yellow sparks */}
      {animationStage >= 3 && (
        <div className="absolute inset-0 z-0" aria-hidden="true">
          {/* Yellow spark particles */}
          <div className="absolute top-1/4 left-1/5 w-3 h-3 opacity-50">
            <div className="spark-shape bg-yellow-400 animate-spark-twinkle-1"></div>
          </div>
          <div className="absolute top-3/5 right-1/4 w-2 h-2 opacity-60">
            <div className="spark-shape bg-yellow-300 animate-spark-pulse-1"></div>
          </div>
          <div className="absolute bottom-1/4 left-3/5 w-4 h-4 opacity-40">
            <div className="spark-shape bg-yellow-500 animate-spark-glow"></div>
          </div>
          <div className="absolute top-2/5 right-2/5 w-2.5 h-2.5 opacity-55">
            <div className="spark-shape bg-yellow-400 animate-spark-rotate-1"></div>
          </div>
          
          {/* Traditional floating particles (reduced) */}
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full bg-gray-300 opacity-15"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                animation: `float ${Math.random() * 15 + 10}s infinite ease-in-out`,
                animationDelay: `${Math.random() * 5}s`
              }}
            />
          ))}
        </div>
      )}

      {/* Main content */}
      <div className="text-center max-w-5xl mx-auto relative z-10 w-full mt-4 sm:mt-8 px-4">
        {/* Classic Typography with enhanced animation */}
        {animationStage >= 3 && (
          <div className="space-y-8 sm:space-y-6">
            {/* Main Headline with sequential reveal */}
            <div className="overflow-hidden mb-6">
              <h1 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-normal text-gray-900 leading-tight"
                style={{ 
                  fontWeight: 600,
                  letterSpacing: '-0.02em',
                  lineHeight: '1.1'
                }}
              >
                <span 
                  className="block opacity-0 mb-2 sm:mb-0"
                  style={{ animation: 'fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.3s forwards' }}
                >
                  Strategic Growth
                </span>
                <span 
                  className="block text-gray-700 opacity-0"
                  style={{ 
                    fontWeight: 500,
                    animation: 'fadeInUp 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94) 0.6s forwards' 
                  }}
                >
                  For Visionary Brands
                </span>
              </h1>
            </div>

            {/* Punchy tagline */}
            <div 
              className="max-w-3xl mx-auto opacity-0 mb-6 sm:mb-4"
              style={{ animation: 'fadeIn 1s ease-out 0.9s forwards' }}
            >
              <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-medium text-purple-700 mb-6 leading-relaxed px-2">
                Transforming Digital Presence into Market Leadership
              </h2>
            </div>

            {/* Enhanced divider with animation */}
            <div 
              className="flex justify-center opacity-0 my-8 sm:my-6"
              style={{ animation: 'fadeIn 1s ease-out 1.2s forwards' }}
            >
              <div 
                className="w-16 sm:w-24 h-px bg-gray-300 mx-4 mt-8 mb-6 opacity-0"
                style={{ animation: 'scaleXIn 0.8s ease-out 1.4s forwards' }}
              ></div>
              <div 
                className="w-2 h-2 bg-gray-400 rounded-full mt-7.5 mx-1 opacity-0"
                style={{ animation: 'fadeIn 0.6s ease-out 1.6s forwards' }}
              ></div>
              <div 
                className="w-16 sm:w-24 h-px bg-gray-300 mx-4 mt-8 mb-6 opacity-0"
                style={{ animation: 'scaleXIn 0.8s ease-out 1.4s forwards' }}
              ></div>
            </div>

            {/* Enhanced value proposition with word-by-word reveal */}
            <div className="max-w-3xl mx-auto mb-8 sm:mb-6">
              <p 
                className="text-lg sm:text-xl md:text-2xl text-gray-600 leading-relaxed px-4"
                style={{ 
                  fontWeight: 400,
                  lineHeight: '1.7'
                }}
              >
                <span className="opacity-0" style={{animation: 'fadeIn 0.8s ease-out 1.7s forwards'}}>We partner with ambitious businesses </span>
                <span className="opacity-0" style={{animation: 'fadeIn 0.8s ease-out 2s forwards'}}>to create transformative digital experiences</span>
                <br className="hidden sm:block" />
                <span className="opacity-0" style={{animation: 'fadeIn 0.8s ease-out 2.3s forwards'}}>that drive measurable growth </span>
                <span className="opacity-0" style={{animation: 'fadeIn 0.8s ease-out 2.6s forwards'}}>and lasting impact.</span>
              </p>
            </div>

            {/* Enhanced Call-to-Action with staggered animation */}
            <div 
              className="mt-12 sm:mt-8 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 lg:space-x-8 px-4"
            >
              <button 
                className="group w-full sm:w-auto px-8 sm:px-10 py-4 text-white font-medium tracking-wide uppercase text-sm border-2 transition-all duration-300 hover:bg-white relative overflow-hidden opacity-0"
                style={{ 
                  letterSpacing: '1px',
                  animation: 'fadeInUp 1s ease-out 2.9s forwards',
                  backgroundColor: '#64419a',
                  borderColor: '#64419a',
                  transform: hoveredButton === 0 ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: hoveredButton === 0 ? '0 15px 35px rgba(100, 65, 154, 0.25)' : '0 5px 15px rgba(0, 0, 0, 0.1)'
                }}
                onMouseEnter={() => {
                  if (!isMobile) {
                    handleAccentHover(0);
                    handleButtonHover(0);
                  }
                }}
                onMouseLeave={handleButtonLeave}
                onFocus={() => {
                  if (!isMobile) {
                    handleAccentHover(0);
                    handleButtonHover(0);
                  }
                }}
                onBlur={handleButtonLeave}
                aria-label="Start a new project with us"
              >
                <span className="relative z-10 group-hover:text-[#64419a] transition-colors duration-300">Start a Project</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" aria-hidden="true"></div>
              </button>
              
              <button 
                className="group w-full sm:w-auto px-8 sm:px-10 py-4 bg-transparent text-gray-900 font-medium tracking-wide uppercase text-sm border-2 border-gray-300 transition-all duration-300 hover:border-[#64419a] relative opacity-0"
                style={{ 
                  letterSpacing: '1px',
                  animation: 'fadeInUp 1s ease-out 3.1s forwards',
                  transform: hoveredButton === 1 ? 'translateY(-4px)' : 'translateY(0)',
                  boxShadow: hoveredButton === 1 ? '0 15px 35px rgba(0, 0, 0, 0.1)' : '0 5px 15px rgba(0, 0, 0, 0.05)'
                }}
                onMouseEnter={() => {
                  if (!isMobile) {
                    handleAccentHover(1);
                    handleButtonHover(1);
                  }
                }}
                onMouseLeave={handleButtonLeave}
                onFocus={() => {
                  if (!isMobile) {
                    handleAccentHover(1);
                    handleButtonHover(1);
                  }
                }}
                onBlur={handleButtonLeave}
                aria-label="Book a consultation call with our team"
              >
                <span className="relative z-10 group-hover:text-[#64419a] transition-colors duration-300">Book a Call</span>
              </button>
            </div>

            {/* Enhanced trust indicators with subtle animation */}
            <div 
              className="mt-16 opacity-0"
              style={{ animation: 'fadeIn 1s ease-out 3.5s forwards' }}
            >
              <p 
                className="text-sm text-gray-500 uppercase tracking-wider font-medium mb-6"
                style={{ letterSpacing: '2px' }}
              >
                Trusted by Industry Leaders
              </p>
              <div className="flex justify-center items-center space-x-8 opacity-60">
                {[1, 2, 3, 4].map((item, index) => (
                  <div 
                    key={index}
                    className="w-24 h-8 bg-gradient-to-r from-gray-200 to-gray-300 rounded-md opacity-60 hover:opacity-100 transition-all duration-300 hover:scale-105"
                    style={{
                      animation: `fadeIn 0.6s ease-out ${3.8 + index * 0.2}s forwards`
                    }}
                    aria-hidden="true"
                  ></div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Enhanced corner accents with interaction - Hidden on mobile */}
      {animationStage >= 3 && !isMobile && (
        <>
          <div 
            className="absolute top-20 left-8 w-20 h-20 border-t border-l border-gray-200 opacity-0 hover:border-gray-400 transition-colors duration-700" 
            style={{ 
              animation: 'cornerFade 1s ease-out 1.8s forwards',
              animationDelay: '1.8s'
            }}
            onMouseEnter={() => handleAccentHover(0)}
            aria-hidden="true"
          ></div>
          <div 
            className="absolute top-20 right-8 w-20 h-20 border-t border-r border-gray-200 opacity-0 hover:border-gray-400 transition-colors duration-700" 
            style={{ 
              animation: 'cornerFade 1s ease-out 2s forwards',
              animationDelay: '2s'
            }}
            onMouseEnter={() => handleAccentHover(1)}
            aria-hidden="true"
          ></div>
          <div 
            className="absolute bottom-8 left-8 w-20 h-20 border-b border-l border-gray-200 opacity-0 hover:border-gray-400 transition-colors duration-700" 
            style={{ 
              animation: 'cornerFade 1s ease-out 2.2s forwards',
              animationDelay: '2.2s'
            }}
            onMouseEnter={() => handleAccentHover(2)}
            aria-hidden="true"
          ></div>
          <div 
            className="absolute bottom-8 right-8 w-20 h-20 border-b border-r border-gray-200 opacity-0 hover:border-gray-400 transition-colors duration-700" 
            style={{ 
              animation: 'cornerFade 1s ease-out 2.4s forwards',
              animationDelay: '2.4s'
            }}
            onMouseEnter={() => handleAccentHover(3)}
            aria-hidden="true"
          ></div>
        </>
      )}

      {/* Enhanced CSS animations */}
      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        /* Yellow Spark Shapes - 4-pointed diamond sparkle */
        .spark-shape {
          width: 100%;
          height: 100%;
          position: relative;
          filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.4));
        }
        
        .spark-shape::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 100%;
          height: 100%;
          background: currentColor;
          transform: translate(-50%, -50%);
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }
        
        .spark-shape::after {
          content: '';
          position: absolute;
          top: 50%;
          left: 50%;
          width: 70%;
          height: 70%;
          background: linear-gradient(45deg, rgba(255, 255, 255, 0.9) 0%, rgba(255, 255, 255, 0.6) 50%, rgba(255, 255, 255, 0.3) 100%);
          transform: translate(-50%, -50%);
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
        }
        
        /* Spark Animation Keyframes */
        @keyframes spark-twinkle-1 {
          0%, 100% { 
            opacity: 0.4; 
            transform: scale(1) rotate(0deg);
            filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.4));
          }
          25% { 
            opacity: 1; 
            transform: scale(1.4) rotate(45deg);
            filter: drop-shadow(0 0 15px rgba(251, 191, 36, 0.8));
          }
          50% { 
            opacity: 0.6; 
            transform: scale(0.8) rotate(90deg);
            filter: drop-shadow(0 0 5px rgba(251, 191, 36, 0.3));
          }
          75% { 
            opacity: 0.9; 
            transform: scale(1.2) rotate(135deg);
            filter: drop-shadow(0 0 12px rgba(251, 191, 36, 0.6));
          }
        }
        
        @keyframes spark-twinkle-2 {
          0%, 100% { 
            opacity: 0.5; 
            transform: scale(1) rotate(0deg);
            filter: drop-shadow(0 0 6px rgba(252, 211, 77, 0.5));
          }
          33% { 
            opacity: 1; 
            transform: scale(1.6) rotate(60deg);
            filter: drop-shadow(0 0 18px rgba(252, 211, 77, 0.9));
          }
          66% { 
            opacity: 0.3; 
            transform: scale(0.7) rotate(120deg);
            filter: drop-shadow(0 0 3px rgba(252, 211, 77, 0.2));
          }
        }
        
        @keyframes spark-twinkle-3 {
          0%, 100% { 
            opacity: 0.45; 
            transform: scale(1) rotate(0deg);
            filter: drop-shadow(0 0 10px rgba(245, 158, 11, 0.4));
          }
          50% { 
            opacity: 1; 
            transform: scale(1.8) rotate(90deg);
            filter: drop-shadow(0 0 20px rgba(245, 158, 11, 0.8));
          }
        }
        
        @keyframes spark-pulse-1 {
          0%, 100% { 
            opacity: 0.35; 
            transform: scale(1);
            filter: drop-shadow(0 0 12px rgba(251, 191, 36, 0.3)) brightness(1);
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.8);
            filter: drop-shadow(0 0 25px rgba(251, 191, 36, 0.7)) brightness(1.5);
          }
        }
        
        @keyframes spark-pulse-2 {
          0%, 100% { 
            opacity: 0.6; 
            transform: scale(1);
            filter: drop-shadow(0 0 8px rgba(252, 211, 77, 0.6)) brightness(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(2.2);
            filter: drop-shadow(0 0 30px rgba(252, 211, 77, 1)) brightness(2);
          }
        }
        
        @keyframes spark-rotate-1 {
          0% { 
            transform: rotate(0deg) scale(1);
            filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.5));
          }
          25% { 
            transform: rotate(45deg) scale(1.3);
            filter: drop-shadow(0 0 15px rgba(251, 191, 36, 0.7));
          }
          50% { 
            transform: rotate(90deg) scale(0.9);
            filter: drop-shadow(0 0 8px rgba(251, 191, 36, 0.4));
          }
          75% { 
            transform: rotate(135deg) scale(1.2);
            filter: drop-shadow(0 0 12px rgba(251, 191, 36, 0.6));
          }
          100% { 
            transform: rotate(180deg) scale(1);
            filter: drop-shadow(0 0 10px rgba(251, 191, 36, 0.5));
          }
        }
        
        @keyframes spark-rotate-2 {
          0% { 
            transform: rotate(0deg) scale(1);
            filter: drop-shadow(0 0 12px rgba(245, 158, 11, 0.4));
          }
          20% { 
            transform: rotate(36deg) scale(1.4);
            filter: drop-shadow(0 0 18px rgba(245, 158, 11, 0.8));
          }
          40% { 
            transform: rotate(72deg) scale(0.8);
            filter: drop-shadow(0 0 6px rgba(245, 158, 11, 0.3));
          }
          60% { 
            transform: rotate(108deg) scale(1.2);
            filter: drop-shadow(0 0 14px rgba(245, 158, 11, 0.6));
          }
          80% { 
            transform: rotate(144deg) scale(1.6);
            filter: drop-shadow(0 0 20px rgba(245, 158, 11, 0.9));
          }
          100% { 
            transform: rotate(180deg) scale(1);
            filter: drop-shadow(0 0 12px rgba(245, 158, 11, 0.4));
          }
        }
        
        @keyframes spark-glow {
          0%, 100% { 
            opacity: 0.45; 
            transform: scale(1);
            filter: drop-shadow(0 0 8px rgba(252, 211, 77, 0.4)) brightness(1);
          }
          25% { 
            opacity: 0.8; 
            transform: scale(1.5);
            filter: drop-shadow(0 0 20px rgba(252, 211, 77, 0.8)) brightness(1.5);
          }
          50% { 
            opacity: 1; 
            transform: scale(2);
            filter: drop-shadow(0 0 35px rgba(252, 211, 77, 1)) brightness(2);
          }
          75% { 
            opacity: 0.7; 
            transform: scale(1.2);
            filter: drop-shadow(0 0 15px rgba(252, 211, 77, 0.6)) brightness(1.3);
          }
        }
        
        /* Animation Classes */
        .animate-spark-twinkle-1 {
          animation: spark-twinkle-1 4s ease-in-out infinite;
        }
        .animate-spark-twinkle-2 {
          animation: spark-twinkle-2 5s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-spark-twinkle-3 {
          animation: spark-twinkle-3 3.5s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-spark-pulse-1 {
          animation: spark-pulse-1 3s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .animate-spark-pulse-2 {
          animation: spark-pulse-2 2.5s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        .animate-spark-rotate-1 {
          animation: spark-rotate-1 6s linear infinite;
        }
        .animate-spark-rotate-2 {
          animation: spark-rotate-2 8s linear infinite;
          animation-delay: 3s;
        }
        .animate-spark-glow {
          animation: spark-glow 4.5s ease-in-out infinite;
          animation-delay: 2.5s;
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        
        @keyframes scaleXIn {
          from {
            opacity: 0;
            transform: scaleX(0);
          }
          to {
            opacity: 1;
            transform: scaleX(1);
          }
        }
        
        @keyframes cornerFade {
          from {
            opacity: 0;
            transform: scale(0.8);
          }
          to {
            opacity: 0.3;
            transform: scale(1);
          }
        }
        
        @keyframes textureMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 100px 100px;
          }
        }
        
        @keyframes gridPulse {
          0% {
            opacity: 0.05;
          }
          100% {
            opacity: 0.15;
          }
        }
        
        @keyframes pulse {
          0% {
            opacity: 0.4;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.05);
          }
          100% {
            opacity: 0.4;
            transform: scale(1);
          }
        }
        
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-15px) rotate(5deg);
          }
          100% {
            transform: translateY(0) rotate(0deg);
          }
        }
        
        /* Enhanced hover effects */
        button {
          transition: all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }
        
        button:hover {
          transform: translateY(-4px);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15);
        }
        
        /* Focus styles for accessibility */
        button:focus {
          outline: 2px solid #64419a;
          outline-offset: 2px;
        }
        
        /* Remove focus outline from decorative elements */
        div[aria-hidden="true"]:focus {
          outline: none;
        }
        
        /* Smooth transitions for professional feel */
        * {
          transition: all 0.3s ease;
        }

        /* Performance Optimization and Mobile Responsiveness */
        @media (prefers-reduced-motion: reduce) {
          .animate-spark-twinkle-1,
          .animate-spark-twinkle-2,
          .animate-spark-twinkle-3,
          .animate-spark-pulse-1,
          .animate-spark-pulse-2,
          .animate-spark-rotate-1,
          .animate-spark-rotate-2,
          .animate-spark-glow {
            animation: none;
            transform: none;
          }
        }
        
        @media (max-width: 768px) {
          .spark-shape {
            filter: drop-shadow(0 0 4px rgba(251, 191, 36, 0.3));
          }
          
          /* Reduce spark intensity on mobile for better performance */
          .animate-spark-twinkle-1,
          .animate-spark-twinkle-2,
          .animate-spark-twinkle-3 {
            animation-duration: 6s;
          }
          
          .animate-spark-pulse-1,
          .animate-spark-pulse-2 {
            animation-duration: 4s;
          }
        }

        /* Mobile-specific styles */
        @media (max-width: 768px) {
          .text-4xl {
            font-size: 2.5rem;
            line-height: 1.1;
          }
          
          .text-lg {
            font-size: 1.1rem;
            line-height: 1.6;
          }
          
          .px-8 {
            padding-left: 1.5rem;
            padding-right: 1.5rem;
          }
          
          .space-y-8 > * + * {
            margin-top: 1.5rem;
          }
          
          .mb-6 {
            margin-bottom: 1rem;
          }
          
          .mt-12 {
            margin-top: 2rem;
          }
          
          /* Ensure enough space for mobile navbar */
          [role="banner"] {
            padding-top: 7rem !important;
          }
        }
        
        @media (max-width: 480px) {
          .text-4xl {
            font-size: 2rem;
            line-height: 1.2;
          }
          
          .text-lg {
            font-size: 1rem;
            line-height: 1.5;
          }
          
          .px-4 {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .py-4 {
            padding-top: 0.875rem;
            padding-bottom: 0.875rem;
          }
          
          .space-y-8 > * + * {
            margin-top: 1rem;
          }
          
          /* Smaller padding for very small screens */
          [role="banner"] {
            padding-top: 6rem !important;
          }
        }
      `}</style>
    </div>
  );
};

export default SparkzHero;