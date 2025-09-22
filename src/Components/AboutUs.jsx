import React, { useState, useEffect, useRef } from "react";

const AboutUs = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeFeature, setActiveFeature] = useState(0);
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
      { threshold: 0.2 }
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;
    
    // Animated counters with smoother animation
    const animateCounters = () => {
      const duration = 2500;
      const targets = { retention: 98, roi: 347, audience: 50, projects: 250 };
      const steps = 100;
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

    const timer = setTimeout(animateCounters, 500);
    return () => clearTimeout(timer);
  }, [isIntersecting]);

  // Cycle through features automatically
  useEffect(() => {
    if (!isIntersecting) return;
    
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 3);
    }, 4000);
    return () => clearInterval(interval);
  }, [isIntersecting]);

  const features = [
    {
      icon: "🚀",
      title: "Startup Launch Specialists",
      description: "We specialize in launching startups and building them into recognizable, scalable brands from the ground up.",
      gradient: "from-blue-400 to-indigo-500"
    },
    {
      icon: "⭐",
      title: "Brand Building",
      description: "From defining visual identity to building online and offline presence, we create lasting brand impact.",
      gradient: "from-purple-400 to-pink-500"
    },
    {
      icon: "🤝",
      title: "Growth Partnership",
      description: "We believe in 'You Grow, We Grow' - your success is our success in this collaborative journey.",
      gradient: "from-purple-600 to-purple-500"
    }
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="pt-20 pb-16 md:py-24 bg-gradient-to-br from-gray-50 to-indigo-50 relative overflow-hidden"
      aria-label="About PR Sparkz"
    >
      {/* Enhanced Animated Background Elements with Yellow Sparkles */}
            {/* Enhanced Animated Background Elements with Purple Sparkles */}
      <div className="absolute top-20 left-10 w-6 h-6 opacity-40">
        <div className="spark-shape bg-purple-400 animate-spark-twinkle-1"></div>
      </div>
      <div className="absolute top-40 right-20 w-4 h-4 opacity-50">
        <div className="spark-shape bg-purple-300 animate-spark-twinkle-2"></div>
      </div>
      <div className="absolute bottom-32 left-16 w-5 h-5 opacity-45">
        <div className="spark-shape bg-purple-500 animate-spark-twinkle-3"></div>
      </div>
      <div className="absolute top-60 left-1/3 w-3 h-3 opacity-60">
        <div className="spark-shape bg-purple-400 animate-spark-pulse-1"></div>
      </div>
      <div className="absolute bottom-40 right-1/4 w-4 h-4 opacity-35">
        <div className="spark-shape bg-purple-300 animate-spark-pulse-2"></div>
      </div>
      <div className="absolute top-80 right-12 w-5 h-5 opacity-50">
        <div className="spark-shape bg-purple-500 animate-spark-rotate-1"></div>
      </div>
      <div className="absolute bottom-20 left-1/4 w-6 h-6 opacity-40">
        <div className="spark-shape bg-purple-400 animate-spark-glow"></div>
      </div>

      {/* Additional sparkle dots */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/3 w-2 h-2 bg-purple-400 opacity-60 animate-twinkle"></div>
        <div className="absolute top-3/4 right-1/4 w-3 h-3 bg-purple-300 opacity-50 animate-twinkle-delayed"></div>
        <div className="absolute bottom-1/3 left-2/3 w-1.5 h-1.5 bg-purple-500 opacity-70 animate-pulse-glow"></div>
        <div className="absolute top-2/3 right-1/2 w-2.5 h-2.5 bg-purple-400 opacity-45 animate-breath"></div>
      </div>
      
      {/* Floating sparkle particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Header Section */}
        <div className={`text-center mb-16 md:mb-20 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-block mb-4">
            <span className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase shadow-md">
              About PR Sparkz
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-gray-800 via-blue-700 to-indigo-700 bg-clip-text text-transparent">
              Startup Launch Specialists
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto mb-8 rounded-full"></div>
          <p className="text-base md:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light">
            We don't just do marketing – we build iconic brands from the ground up. Specializing in startup launches 
            and scale-ups, we transform innovative ideas into market-leading brands that inspire and captivate audiences.
          </p>
          <div className="mt-6 bg-gradient-to-r from-purple-600 to-purple-500 bg-clip-text text-transparent">
            <span className="text-xl md:text-2xl font-bold">✨ You Grow, We Grow – Building Success Together ✨</span>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 md:gap-20 items-center mb-16 md:mb-24">
          {/* Left Column - Founder Image & Visual Showcase */}
          <div className={`relative transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              {/* Founder Image Card */}
              <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-8 shadow-xl md:shadow-2xl border border-gray-100 relative overflow-hidden mb-6">
                <div className="absolute top-0 right-0 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full -translate-y-12 md:-translate-y-16 translate-x-12 md:translate-x-16 opacity-60"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center">
                    {/* Founder Image */}
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-gradient-to-br from-blue-200 to-indigo-300 rounded-full mb-4 md:mb-6 overflow-hidden border-4 border-white shadow-lg">
                      <img 
                        src="/src/Components/PR-FD.jpeg" 
                        alt="Founder - PR Sparkz" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          // Fallback if image fails to load
                          e.target.style.display = 'none';
                          e.target.parentElement.querySelector('.fallback-avatar').style.display = 'flex';
                        }}
                      />
                      {/* Fallback if image doesn't load */}
                      <div className="fallback-avatar w-full h-full bg-gradient-to-br from-blue-400 to-indigo-600 flex items-center justify-center text-white text-4xl md:text-5xl font-bold" style={{ display: 'none' }}>
                        PS
                      </div>
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-2">Founder</h3>
                    <p className="text-blue-600 text-sm md:text-base font-medium">PR Sparkz</p>
                    <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-indigo-600 mx-auto my-3 rounded-full"></div>
                    <p className="text-gray-600 text-sm md:text-base mt-2">
                      "Building brands that inspire and transform markets"
                    </p>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-6 text-white shadow-xl">
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold mb-1">{counters.projects}+</div>
                    <div className="text-xs md:text-sm opacity-90">Startups Launched</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold mb-1">{counters.retention}%</div>
                    <div className="text-xs md:text-sm opacity-90">Client Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="mb-8">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4 md:mb-6">Our Expertise</h3>
              <p className="text-gray-700 mb-4 md:mb-6 leading-relaxed text-base md:text-lg font-light">
                We focus on comprehensive brand development that creates lasting impact in the market. 
                Our integrated approach ensures consistent messaging across all touchpoints.
              </p>
              
              {/* Services Grid */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-blue-600 text-xl mb-2">📱</div>
                  <h4 className="font-semibold text-gray-800 text-sm">Social Media Marketing</h4>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-purple-600 text-xl mb-2">🌟</div>
                  <h4 className="font-semibold text-gray-800 text-sm">Influencer Marketing</h4>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-green-600 text-xl mb-2">📰</div>
                  <h4 className="font-semibold text-gray-800 text-sm">PR & Offline Events</h4>
                </div>
                <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                  <div className="text-red-600 text-xl mb-2">🎯</div>
                  <h4 className="font-semibold text-gray-800 text-sm">Performance Marketing</h4>
                </div>
              </div>
              
              <p className="text-gray-600 leading-relaxed text-base md:text-lg font-light">
                We combine brand storytelling with strategic launch campaigns to create memorable brand 
                experiences that resonate with your target audience and drive measurable results.
              </p>
            </div>
            
            {/* Interactive Features */}
            <div className="space-y-3 md:space-y-4">
              {features.map((feature, index) => (
                <div 
                  key={index}
                  className={`flex items-start p-3 md:p-4 rounded-lg md:rounded-xl border cursor-pointer transition-all duration-300 ${
                    activeFeature === index 
                      ? 'bg-white border-blue-300 shadow-md md:shadow-lg scale-[1.02] md:scale-105' 
                      : 'bg-gray-50/50 border-gray-200 hover:border-blue-300 hover:bg-white'
                  }`}
                  onMouseEnter={() => setActiveFeature(index)}
                  onFocus={() => setActiveFeature(index)}
                  tabIndex={0}
                  aria-label={`Feature: ${feature.title}. ${feature.description}`}
                >
                  <div className={`text-2xl md:text-3xl mr-3 md:mr-4 p-2 md:p-3 rounded-lg md:rounded-xl bg-gradient-to-r ${feature.gradient} text-white shadow-md md:shadow-lg transition-all duration-300`}>
                    {feature.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-800 mb-1 md:mb-2 text-sm md:text-base">{feature.title}</h4>
                    <p className="text-gray-600 text-xs md:text-sm">{feature.description}</p>
                  </div>
                  {activeFeature === index && (
                    <div className="ml-2 text-blue-600 animate-pulse" aria-hidden="true">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                      </svg>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="mt-6 md:mt-8 flex flex-wrap gap-3 md:gap-4">
              <button className="group bg-gradient-to-r from-blue-600 to-indigo-700 text-white px-5 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center">
                <span>Meet Our Team</span>
                <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
              </button>
              
              <button className="bg-white text-blue-700 px-5 py-3 md:px-8 md:py-4 rounded-xl font-semibold border border-gray-200 hover:border-blue-400 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md">
                Our Process
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className={`transition-all duration-1000 delay-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-white rounded-2xl md:rounded-3xl p-6 md:p-12 shadow-xl md:shadow-2xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 md:h-2 bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 rounded-t-2xl"></div>
            
            <div className="text-center mb-8 md:mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3 md:mb-4">Our Impact in Numbers</h3>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base font-light">
                These metrics represent our commitment to delivering exceptional results for every startup we work with.
              </p>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-4 md:p-6 mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-1 md:mb-2">
                    {counters.retention}%
                  </div>
                  <div className="text-gray-600 font-medium text-xs md:text-sm">Client Success Rate</div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-1 rounded-full transition-all duration-1000 ease-out" style={{width: `${counters.retention}%`}}></div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-indigo-50 to-purple-50 rounded-xl md:rounded-2xl p-4 md:p-6 mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-1 md:mb-2">
                    {counters.roi}%
                  </div>
                  <div className="text-gray-600 font-medium text-xs md:text-sm">Average ROI</div>
                </div>
                <div className="w-full bg-indigo-200 rounded-full h-1">
                  <div className="bg-gradient-to-r from-indigo-500 to-purple-600 h-1 rounded-full transition-all duration-1000 ease-out" style={{width: `${Math.min(counters.roi / 3, 100)}%`}}></div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl md:rounded-2xl p-4 md:p-6 mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent mb-1 md:mb-2">
                    {counters.audience}M+
                  </div>
                  <div className="text-gray-600 font-medium text-xs md:text-sm">Audience Reached</div>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-1">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-1 rounded-full transition-all duration-1000 ease-out" style={{width: `${Math.min(counters.audience * 2, 100)}%`}}></div>
                </div>
              </div>
              
              <div className="text-center group">
                <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl md:rounded-2xl p-4 md:p-6 mb-3 md:mb-4 group-hover:scale-105 transition-transform duration-300">
                  <div className="text-2xl md:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent mb-1 md:mb-2">
                    {counters.projects}+
                  </div>
                  <div className="text-gray-600 font-medium text-xs md:text-sm">Brands Transformed</div>
                </div>
                <div className="w-full bg-indigo-200 rounded-full h-1">
                  <div className="bg-gradient-to-r from-indigo-500 to-blue-600 h-1 rounded-full transition-all duration-1000 ease-out" style={{width: `${Math.min(counters.projects / 2.5, 100)}%`}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Focus Section */}
        <div className={`mt-16 md:mt-24 transition-all duration-1000 delay-900 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">Our Core Services</h3>
            <p className="text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
              Comprehensive solutions to build and scale your brand across all channels
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl mb-4">📱</div>
              <h4 className="font-bold text-gray-800 mb-2">Social Media Marketing</h4>
              <p className="text-gray-600 text-sm">Strategic content and engagement across all platforms</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl mb-4">🌟</div>
              <h4 className="font-bold text-gray-800 mb-2">Influencer & Celebrity Marketing</h4>
              <p className="text-gray-600 text-sm">Authentic partnerships that amplify your brand</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl mb-4">📰</div>
              <h4 className="font-bold text-gray-800 mb-2">PR & Offline Events</h4>
              <p className="text-gray-600 text-sm">Building real-world presence and media relationships</p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl mb-4">🎯</div>
              <h4 className="font-bold text-gray-800 mb-2">Performance Marketing</h4>
              <p className="text-gray-600 text-sm">Data-driven campaigns that deliver measurable ROI</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className={`text-center mt-16 md:mt-20 transition-all duration-1000 delay-1100 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl md:rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 md:mb-6">Ready to Launch Your Brand?</h3>
              <p className="text-lg md:text-xl mb-6 md:mb-8 opacity-90 max-w-2xl mx-auto font-light">
                Let's collaborate to build your startup into an iconic brand with our creative expertise and strategic approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center">
                <button className="group bg-white text-blue-700 px-5 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 flex items-center justify-center">
                  <span>Start Your Journey</span>
                  <svg className="w-4 h-4 md:w-5 md:h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
                  </svg>
                </button>
                
                <button className="bg-transparent border-2 border-white text-white px-5 py-3 md:px-8 md:py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-700 transition-all duration-300">
                  View Success Stories
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        /* Purple Spark Shapes - 4-pointed diamond sparkle */
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
            filter: drop-shadow(0 0 8px rgba(134, 102, 165, 0.4));
          }
          25% { 
            opacity: 1; 
            transform: scale(1.4) rotate(45deg);
            filter: drop-shadow(0 0 15px rgba(134, 102, 165, 0.8));
          }
          50% { 
            opacity: 0.6; 
            transform: scale(0.8) rotate(90deg);
            filter: drop-shadow(0 0 5px rgba(134, 102, 165, 0.3));
          }
          75% { 
            opacity: 0.9; 
            transform: scale(1.2) rotate(135deg);
            filter: drop-shadow(0 0 12px rgba(134, 102, 165, 0.6));
          }
        }
        
        @keyframes spark-twinkle-2 {
          0%, 100% { 
            opacity: 0.5; 
            transform: scale(1) rotate(0deg);
            filter: drop-shadow(0 0 6px rgba(147, 125, 194, 0.5));
          }
          33% { 
            opacity: 1; 
            transform: scale(1.6) rotate(60deg);
            filter: drop-shadow(0 0 18px rgba(147, 125, 194, 0.9));
          }
          66% { 
            opacity: 0.3; 
            transform: scale(0.7) rotate(120deg);
            filter: drop-shadow(0 0 3px rgba(147, 125, 194, 0.2));
          }
        }
        
        @keyframes spark-twinkle-3 {
          0%, 100% { 
            opacity: 0.45; 
            transform: scale(1) rotate(0deg);
            filter: drop-shadow(0 0 10px rgba(124, 58, 237, 0.4));
          }
          50% { 
            opacity: 1; 
            transform: scale(1.8) rotate(90deg);
            filter: drop-shadow(0 0 20px rgba(124, 58, 237, 0.8));
          }
        }
        
        @keyframes spark-pulse-1 {
          0%, 100% { 
            opacity: 0.35; 
            transform: scale(1);
            filter: drop-shadow(0 0 12px rgba(134, 102, 165, 0.3)) brightness(1);
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
            filter: drop-shadow(0 0 8px rgba(147, 125, 194, 0.6)) brightness(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(2.2);
            filter: drop-shadow(0 0 30px rgba(147, 125, 194, 1)) brightness(2);
          }
        }
        
        @keyframes spark-rotate-1 {
          0% { 
            transform: rotate(0deg) scale(1);
            filter: drop-shadow(0 0 10px rgba(134, 102, 165, 0.5));
          }
          25% { 
            transform: rotate(45deg) scale(1.3);
            filter: drop-shadow(0 0 15px rgba(134, 102, 165, 0.7));
          }
          50% { 
            transform: rotate(90deg) scale(0.9);
            filter: drop-shadow(0 0 8px rgba(134, 102, 165, 0.4));
          }
          75% { 
            transform: rotate(135deg) scale(1.2);
            filter: drop-shadow(0 0 12px rgba(134, 102, 165, 0.6));
          }
          100% { 
            transform: rotate(180deg) scale(1);
            filter: drop-shadow(0 0 10px rgba(134, 102, 165, 0.5));
          }
        }
        
        @keyframes spark-glow {
          0%, 100% { 
            opacity: 0.45; 
            transform: scale(1);
            filter: drop-shadow(0 0 8px rgba(147, 125, 194, 0.4)) brightness(1);
          }
          25% { 
            opacity: 0.8; 
            transform: scale(1.5);
            filter: drop-shadow(0 0 20px rgba(147, 125, 194, 0.8)) brightness(1.5);
          }
          50% { 
            opacity: 1; 
            transform: scale(2);
            filter: drop-shadow(0 0 35px rgba(147, 125, 194, 1)) brightness(2);
          }
          75% { 
            opacity: 0.7; 
            transform: scale(1.2);
            filter: drop-shadow(0 0 15px rgba(147, 125, 194, 0.6)) brightness(1.3);
          }
        }
        
        /* Interactive Sparkle Effects */
        @keyframes twinkle {
          0%, 100% { 
            opacity: 0.6; 
            transform: scale(1) rotate(0deg);
            filter: brightness(1);
          }
          20% { 
            opacity: 1; 
            transform: scale(1.5) rotate(72deg);
            filter: brightness(1.5);
          }
          40% { 
            opacity: 0.3; 
            transform: scale(0.8) rotate(144deg);
            filter: brightness(0.8);
          }
          60% { 
            opacity: 0.9; 
            transform: scale(1.3) rotate(216deg);
            filter: brightness(1.3);
          }
          80% { 
            opacity: 0.4; 
            transform: scale(0.9) rotate(288deg);
            filter: brightness(0.9);
          }
        }
        
        @keyframes twinkle-delayed {
          0%, 100% { 
            opacity: 0.5; 
            transform: scale(1) rotate(0deg);
            box-shadow: 0 0 0 rgba(134, 102, 165, 0);
          }
          33% { 
            opacity: 1; 
            transform: scale(1.8) rotate(120deg);
            box-shadow: 0 0 20px rgba(134, 102, 165, 0.6);
          }
          66% { 
            opacity: 0.2; 
            transform: scale(0.6) rotate(240deg);
            box-shadow: 0 0 5px rgba(134, 102, 165, 0.3);
          }
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            opacity: 0.7; 
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(245, 158, 11, 0.4);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.6);
            box-shadow: 0 0 25px 10px rgba(245, 158, 11, 0);
          }
        }
        
        @keyframes breath {
          0%, 100% { 
            opacity: 0.45; 
            transform: scale(1) translateY(0px);
            filter: blur(1px);
          }
          50% { 
            opacity: 0.9; 
            transform: scale(2.2) translateY(-8px);
            filter: blur(0px);
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
        .animate-spark-glow {
          animation: spark-glow 4.5s ease-in-out infinite;
          animation-delay: 2.5s;
        }
        .animate-twinkle {
          animation: twinkle 3s ease-in-out infinite;
        }
        .animate-twinkle-delayed {
          animation: twinkle-delayed 4s ease-in-out infinite;
          animation-delay: 1.5s;
        }
        .animate-pulse-glow {
          animation: pulse-glow 2.5s ease-in-out infinite;
          animation-delay: 0.5s;
        }
        .animate-breath {
          animation: breath 6s ease-in-out infinite;
          animation-delay: 2.5s;
        }
        
        /* Legacy float animations for any remaining elements */
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(5deg); }
        }
        @keyframes float-delayed {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(-3deg); }
        }
        @keyframes float-slow {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(2deg); }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-delayed {
          animation: float-delayed 8s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-float-slow {
          animation: float-slow 10s ease-in-out infinite;
          animation-delay: 4s;
        }
        
        /* Performance Optimization */
        @media (prefers-reduced-motion: reduce) {
          .animate-spark-twinkle-1,
          .animate-spark-twinkle-2,
          .animate-spark-twinkle-3,
          .animate-spark-pulse-1,
          .animate-spark-pulse-2,
          .animate-spark-rotate-1,
          .animate-spark-glow,
          .animate-twinkle,
          .animate-twinkle-delayed,
          .animate-pulse-glow,
          .animate-breath {
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
      `}</style>
    </section>
  );
};

export default AboutUs;