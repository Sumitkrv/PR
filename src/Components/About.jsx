import React, { useState, useEffect, useRef } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [counters, setCounters] = useState({
    retention: 0,
    roi: 0,
    audience: 0,
    projects: 0
  });
  
  const sectionRef = useRef(null);
  const [isIntersecting, setIsIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsIntersecting(true);
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;
    
    const animateCounters = () => {
      const duration = 2000;
      const targets = { retention: 98, roi: 347, audience: 50, projects: 250 };
      const steps = 60;
      const stepDuration = duration / steps;
      
      let current = { retention: 0, roi: 0, audience: 0, projects: 0 };
      
      const timer = setInterval(() => {
        let allReached = true;
        
        Object.keys(targets).forEach(key => {
          if (current[key] < targets[key]) {
            const increment = targets[key] / steps;
            current[key] = Math.min(current[key] + increment, targets[key]);
            allReached = false;
          }
        });
        
        setCounters({ 
          retention: Math.floor(current.retention),
          roi: Math.floor(current.roi),
          audience: Math.floor(current.audience),
          projects: Math.floor(current.projects)
        });
        
        if (allReached) clearInterval(timer);
      }, stepDuration);
      
      return () => clearInterval(timer);
    };

    const timer = setTimeout(animateCounters, 300);
    return () => clearTimeout(timer);
  }, [isIntersecting]);

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{ 
        paddingTop: '80px',
        background: 'linear-gradient(135deg, #f8f6ff 0%, #ffffff 100%)'
      }}
    >
      {/* Optimized Background Elements - Reduced for performance */}
      <div 
        className="absolute top-10 left-5 w-4 h-4 opacity-30 animate-pulse"
        style={{ backgroundColor: '#8666A5' }}
      ></div>
      <div 
        className="absolute bottom-20 right-10 w-3 h-3 opacity-40 animate-pulse"
        style={{ backgroundColor: 'rgba(134, 102, 165, 0.8)' }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Hero Section - Mobile Optimized */}
        <section 
          ref={sectionRef}
          className="py-12 sm:py-16 lg:py-20 text-center"
        >
          <div className={`transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-4 sm:mb-6">
              <span 
                className="text-white px-4 py-2 sm:px-6 sm:py-3 rounded-full text-sm sm:text-base font-semibold tracking-wide uppercase shadow-lg"
                style={{ backgroundColor: '#8666A5' }}
              >
                About PR Sparkz
              </span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 sm:mb-8 leading-tight">
              <span 
                className="bg-clip-text text-transparent block"
                style={{ 
                  background: `linear-gradient(135deg, #2d3748 0%, #8666A5 50%, #6b4d7a 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                Building Iconic Brands
              </span>
            </h1>
            <div 
              className="w-20 sm:w-32 h-1 mx-auto mb-6 sm:mb-8 rounded-full"
              style={{ background: `linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)` }}
            ></div>
            <p className="text-lg sm:text-xl lg:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light mb-6 sm:mb-8 px-4">
              We don't just do marketing – we build iconic brands from the ground up. Specializing in startup launches 
              and scale-ups, we transform innovative ideas into market-leading brands.
            </p>
            <div className="mt-6 sm:mt-8">
              <span 
                className="text-lg sm:text-xl lg:text-2xl xl:text-3xl font-bold bg-clip-text text-transparent block px-4"
                style={{ 
                  background: `linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                ✨ You Grow, We Grow ✨
              </span>
            </div>
          </div>
        </section>

        {/* Our Story Section with PR-FD - Mobile Optimized */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className={`transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-4 sm:mb-6">Our Story & Leadership</h2>
                <div 
                  className="w-16 sm:w-20 h-1 mb-4 sm:mb-6 rounded-full"
                  style={{ background: `linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)` }}
                ></div>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6">
                  Founded with a vision to revolutionize brand building, PR Sparkz emerged from the understanding that 
                  every great brand starts with a compelling story and strategic execution.
                </p>
                <p className="text-base sm:text-lg text-gray-700 leading-relaxed mb-6 sm:mb-8">
                  Under the visionary leadership of our founder PR-FD, we've grown into a comprehensive brand building 
                  agency that specializes in launching startups and scaling businesses.
                </p>
                <div className="grid grid-cols-2 gap-4 sm:gap-6">
                  <div 
                    className="bg-white p-4 sm:p-6 rounded-xl shadow-lg"
                    style={{ border: '1px solid rgba(134, 102, 165, 0.1)' }}
                  >
                    <div 
                      className="text-2xl sm:text-3xl font-bold mb-2"
                      style={{ color: '#8666A5' }}
                    >5+</div>
                    <div className="text-sm sm:text-base text-gray-600">Years of Excellence</div>
                  </div>
                  <div 
                    className="bg-white p-4 sm:p-6 rounded-xl shadow-lg"
                    style={{ border: '1px solid rgba(134, 102, 165, 0.1)' }}
                  >
                    <div 
                      className="text-2xl sm:text-3xl font-bold mb-2"
                      style={{ color: '#8666A5' }}
                    >{counters.projects}+</div>
                    <div className="text-sm sm:text-base text-gray-600">Brands Launched</div>
                  </div>
                </div>
              </div>
              
              {/* PR-FD Founder Photo Section - Mobile Optimized */}
              <div className="relative order-1 lg:order-2">
                <div 
                  className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 shadow-2xl mx-auto max-w-md lg:max-w-none"
                  style={{ border: '1px solid rgba(134, 102, 165, 0.1)' }}
                >
                  <div className="text-center">
                    {/* PR-FD Photo - Responsive sizing */}
                    <div 
                      className="w-40 h-40 sm:w-48 sm:h-48 lg:w-56 lg:h-56 mx-auto rounded-full mb-4 sm:mb-6 overflow-hidden border-4 shadow-xl relative"
                      style={{ 
                        borderColor: '#8666A5',
                        background: 'linear-gradient(135deg, rgba(134, 102, 165, 0.1) 0%, rgba(134, 102, 165, 0.2) 100%)'
                      }}
                    >
                      <img 
                        src="/src/Components/PR-FD.jpeg" 
                        alt="PR-FD - Founder & CEO of PR Sparkz" 
                        className="w-full h-full object-cover"
                        style={{ 
                          objectPosition: 'center center',
                          filter: 'brightness(1.05) contrast(1.1)'
                        }}
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.querySelector('.fallback-avatar').style.display = 'flex';
                        }}
                        loading="lazy"
                      />
                      {/* Fallback Avatar */}
                      <div 
                        className="fallback-avatar w-full h-full flex items-center justify-center text-white text-4xl sm:text-5xl lg:text-6xl font-bold" 
                        style={{ 
                          display: 'none',
                          background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)'
                        }}
                      >
                        PF
                      </div>
                    </div>
                    
                    <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-2">PR-FD</h3>
                    <p 
                      className="text-lg sm:text-xl font-medium mb-4"
                      style={{ color: '#8666A5' }}
                    >Founder & CEO</p>
                    <div 
                      className="w-16 sm:w-24 h-1 mx-auto mb-4 sm:mb-6 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)' }}
                    ></div>
                    <blockquote className="text-gray-600 italic leading-relaxed text-sm sm:text-base lg:text-lg px-2">
                      "Building brands that inspire and transform markets through strategic storytelling and authentic connections."
                    </blockquote>
                    
                    {/* Professional credentials - Mobile optimized */}
                    <div className="mt-4 sm:mt-6 grid grid-cols-2 gap-3 sm:gap-4 text-xs sm:text-sm">
                      <div 
                        className="p-2 sm:p-3 rounded-lg"
                        style={{ backgroundColor: 'rgba(134, 102, 165, 0.05)' }}
                      >
                        <div 
                          className="font-semibold text-sm sm:text-base"
                          style={{ color: '#8666A5' }}
                        >10+ Years</div>
                        <div className="text-gray-600">Experience</div>
                      </div>
                      <div 
                        className="p-2 sm:p-3 rounded-lg"
                        style={{ backgroundColor: 'rgba(134, 102, 165, 0.05)' }}
                      >
                        <div 
                          className="font-semibold text-sm sm:text-base"
                          style={{ color: '#8666A5' }}
                        >250+ Brands</div>
                        <div className="text-gray-600">Launched</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section - Mobile Optimized */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className={`transition-all duration-700 delay-400 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div 
              className="bg-white rounded-2xl sm:rounded-3xl p-6 sm:p-8 lg:p-12 shadow-2xl relative overflow-hidden"
              style={{ border: '1px solid rgba(134, 102, 165, 0.1)' }}
            >
              <div 
                className="absolute top-0 left-0 w-full h-1 sm:h-2 rounded-t-2xl sm:rounded-t-3xl"
                style={{ background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)' }}
              ></div>
              
              <div className="text-center mb-8 sm:mb-12">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">Our Impact in Numbers</h3>
                <p className="text-gray-600 max-w-2xl mx-auto text-base sm:text-lg px-4">
                  These metrics represent our commitment to delivering exceptional results.
                </p>
              </div>
              
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
                <div className="text-center group">
                  <div 
                    className="rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, rgba(134, 102, 165, 0.1) 0%, rgba(134, 102, 165, 0.15) 100%)' }}
                  >
                    <div 
                      className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2 bg-clip-text text-transparent"
                      style={{ 
                        background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {counters.retention}%
                    </div>
                    <div className="text-gray-600 font-medium text-xs sm:text-sm">Success Rate</div>
                  </div>
                </div>
                
                <div className="text-center group">
                  <div 
                    className="rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, rgba(134, 102, 165, 0.12) 0%, rgba(134, 102, 165, 0.18) 100%)' }}
                  >
                    <div 
                      className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2 bg-clip-text text-transparent"
                      style={{ 
                        background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {counters.roi}%
                    </div>
                    <div className="text-gray-600 font-medium text-xs sm:text-sm">Average ROI</div>
                  </div>
                </div>
                
                <div className="text-center group">
                  <div 
                    className="rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, rgba(134, 102, 165, 0.1) 0%, rgba(134, 102, 165, 0.15) 100%)' }}
                  >
                    <div 
                      className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2 bg-clip-text text-transparent"
                      style={{ 
                        background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {counters.audience}M+
                    </div>
                    <div className="text-gray-600 font-medium text-xs sm:text-sm">Audience Reached</div>
                  </div>
                </div>
                
                <div className="text-center group">
                  <div 
                    className="rounded-xl sm:rounded-2xl p-4 sm:p-6 mb-3 sm:mb-4 transition-transform duration-300 group-hover:scale-105"
                    style={{ background: 'linear-gradient(135deg, rgba(134, 102, 165, 0.12) 0%, rgba(134, 102, 165, 0.18) 100%)' }}
                  >
                    <div 
                      className="text-3xl sm:text-4xl font-bold mb-1 sm:mb-2 bg-clip-text text-transparent"
                      style={{ 
                        background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {counters.projects}+
                    </div>
                    <div className="text-gray-600 font-medium text-xs sm:text-sm">Brands Transformed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action - Mobile Optimized */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className={`text-center transition-all duration-700 delay-600 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div 
              className="rounded-2xl sm:rounded-3xl p-8 sm:p-12 text-white relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">Ready to Build Your Brand?</h3>
                <p className="text-lg sm:text-xl mb-6 sm:mb-8 opacity-90 max-w-2xl mx-auto font-light px-4">
                  Let's collaborate with PR-FD and our expert team to transform your startup into an iconic brand.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center px-4">
                  <button className="group bg-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                    style={{ color: '#8666A5' }}
                  >
                    <span>Start Your Journey</span>
                    <svg className="w-4 h-4 sm:w-5 sm:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                  
                  <button className="bg-transparent border-2 border-white text-white px-6 py-3 sm:px-8 sm:py-4 rounded-xl font-semibold hover:bg-white transition-all duration-300"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.color = '#8666A5';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = 'white';
                    }}
                  >
                    View Our Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
                      }}
                    >
                      {counters.projects}+
                    </div>
                    <div className="text-gray-600 font-medium">Brands Transformed</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20">
          <div className={`text-center transition-all duration-1000 delay-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div 
              className="rounded-3xl p-12 text-white relative overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)' }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-sm"></div>
              <div className="relative z-10">
                <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Brand?</h3>
                <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto font-light">
                  Let's collaborate to transform your startup into an iconic brand with our creative expertise and strategic approach.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <button className="group bg-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center"
                    style={{ color: '#8666A5' }}
                  >
                    <span>Start Your Journey</span>
                    <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                    </svg>
                  </button>
                  
                  <button className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white transition-all duration-300"
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'white';
                      e.target.style.color = '#8666A5';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'transparent';
                      e.target.style.color = 'white';
                    }}
                  >
                    View Our Work
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        .spark-shape {
          width: 100%;
          height: 100%;
          position: relative;
          filter: drop-shadow(0 0 8px rgba(134, 102, 165, 0.4));
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
        
        @keyframes spark-twinkle-1 {
          0%, 100% { 
            opacity: 0.4; 
            transform: scale(1) rotate(0deg);
            filter: drop-shadow(0 0 8px rgba(134, 102, 165, 0.4));
          }
          50% { 
            opacity: 1; 
            transform: scale(1.5) rotate(90deg);
            filter: drop-shadow(0 0 15px rgba(134, 102, 165, 0.8));
          }
        }
        
        @keyframes spark-twinkle-2 {
          0%, 100% { 
            opacity: 0.5; 
            transform: scale(1) rotate(0deg);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.3) rotate(180deg);
          }
        }
        
        @keyframes spark-twinkle-3 {
          0%, 100% { 
            opacity: 0.45; 
            transform: scale(1) rotate(0deg);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.8) rotate(270deg);
          }
        }
        
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
      `}</style>
    </div>
  );
};

export default About;
