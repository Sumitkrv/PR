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
      { threshold: 0.1 } // Reduced threshold for earlier trigger
    );
    
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isIntersecting) return;
    
    const animateCounters = () => {
      const duration = 2000; // Reduced duration for faster animation
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
      gradient: "from-purple-400 to-purple-500"
    },
    {
      icon: "⭐",
      title: "Brand Building",
      description: "From defining visual identity to building online and offline presence, we create lasting brand impact.",
      gradient: "from-purple-500 to-purple-600"
    },
    {
      icon: "🤝",
      title: "Growth Partnership",
      description: "We believe in 'You Grow, We Grow' - your success is our success in this collaborative journey.",
      gradient: "from-purple-600 to-purple-700"
    }
  ];

  // Improved image handling with fallback
  const handleImageError = (e) => {
    e.target.style.display = 'none';
    const fallback = e.target.nextSibling;
    if (fallback) {
      fallback.style.display = 'flex';
    }
  };

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="pb-12 md:pb-24 bg-gradient-to-br from-gray-50 via-purple-50 to-purple-100 relative overflow-hidden"
      style={{ paddingTop: 'clamp(5rem, 10vh, 7rem)' }}
      aria-label="About PR Sparkz"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute top-10 left-2 md:left-10 w-16 h-16 md:w-32 md:h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
      <div className="absolute top-32 right-2 md:right-20 w-12 h-12 md:w-24 md:h-24 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float-delayed"></div>
      <div className="absolute bottom-40 left-1/4 w-16 h-16 md:w-28 md:h-28 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 md:w-16 md:h-16 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section - Improved Responsiveness */}
        <div className={`text-center mb-12 md:mb-20 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="inline-block mb-3 md:mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-semibold tracking-wide uppercase shadow-md" style={{background: 'linear-gradient(to right, #64419a, #553c8b)'}}>
              About PR Sparkz
            </span>
          </div>
          <h1 className="text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold mb-4 md:mb-6">
            <span className="bg-gradient-to-r from-gray-800 via-purple-700 to-purple-800 bg-clip-text text-transparent leading-tight" style={{background: 'linear-gradient(to right, #1f2937, #64419a, #553c8b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>
              Building Iconic Brands
            </span>
          </h1>
          <div className="w-16 md:w-24 h-0.5 md:h-1 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto mb-6 md:mb-8 rounded-full" style={{background: 'linear-gradient(to right, #8b5cf6, #64419a)'}}></div>
          <p className="text-sm md:text-lg lg:text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light px-2 md:px-0">
            At PR Sparkz, we specialize in launching startups and building them into recognizable, scalable brands. 
            From defining visual identity to building online and offline presence, our approach blends creativity, 
            strategy, and real-time execution.
          </p>
          <div className="mt-4 md:mt-6 bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent">
            <span className="text-xl md:text-2xl lg:text-3xl font-bold" style={{background: 'linear-gradient(to right, #a78bfa, #64419a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>We believe — You Grow, We Grow.</span>
          </div>
        </div>

        {/* Main Content Grid - Improved Mobile Layout */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-12 lg:gap-20 items-start mb-12 md:mb-20">
          {/* Left Column - Founder Section */}
          <div className={`relative transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            <div className="space-y-4 md:space-y-6">
              {/* Founder Card */}
              <div className="bg-white rounded-xl md:rounded-2xl p-4 md:p-6 shadow-lg md:shadow-xl border border-gray-100 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-16 h-16 md:w-24 md:h-24 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full -translate-y-8 md:-translate-y-12 translate-x-8 md:translate-x-12 opacity-60"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col items-center text-center">
                    {/* Founder Image with actual photo */}
                    <div className="w-24 h-24 md:w-32 md:h-32 lg:w-40 lg:h-40 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full mb-3 md:mb-4 overflow-hidden border-4 border-white shadow-lg relative" style={{background: 'linear-gradient(135deg, #c4b5fd, #a78bfa)'}}>
                      <img 
                        src="/PR-FD.jpeg"
                        alt="Priyanka Khandelwal - Founder of PR Sparkz" 
                        className="w-full h-full object-cover"
                        onError={handleImageError}
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center hidden" style={{background: 'linear-gradient(135deg, #a78bfa, #64419a)'}}>
                        <span className="text-white text-2xl md:text-3xl lg:text-4xl font-bold">PK</span>
                      </div>
                    </div>
                    
                    <div className="space-y-1 md:space-y-2">
                      <h2 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800">Priyanka Khandelwal</h2>
                      <p className="text-purple-600 text-sm md:text-base font-medium" style={{color: '#64419a'}}>Founder & Brand Strategist</p>
                      <div className="w-12 md:w-16 h-0.5 bg-gradient-to-r from-purple-500 to-purple-600 mx-auto my-2 rounded-full" style={{background: 'linear-gradient(to right, #8b5cf6, #64419a)'}}></div>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed max-w-md">
                        "With over 5 years of experience in brand building, digital strategy, and public relations, 
                        I bring a dynamic vision to help startups and established businesses scale with innovative campaigns 
                        and authentic storytelling."
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Card */}
              <div className="bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl md:rounded-2xl p-4 md:p-6 text-white shadow-lg md:shadow-xl" style={{background: 'linear-gradient(to right, #64419a, #553c8b)'}}>
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  <div className="text-center">
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-1">{counters.projects}+</div>
                    <div className="text-xs md:text-sm opacity-90">Startups Launched</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xl md:text-2xl lg:text-3xl font-bold mb-1">{counters.retention}%</div>
                    <div className="text-xs md:text-sm opacity-90">Client Success Rate</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Content */}
          <div className={`transition-all duration-700 delay-400 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="space-y-4 md:space-y-6">
              <div>
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-3 md:mb-4">Our Expertise</h2>
                <p className="text-gray-700 mb-3 md:mb-4 leading-relaxed text-sm md:text-base lg:text-lg font-light">
                  We focus on comprehensive brand development that creates lasting impact in the market. 
                  Our integrated approach ensures consistent messaging across all touchpoints.
                </p>
                
                {/* Services Grid - Improved Responsiveness */}
                <div className="grid grid-cols-2 gap-3 mb-4 md:mb-6">
                  {[
                    { icon: "📱", name: "Social Media Marketing", color: "purple" },
                    { icon: "🌟", name: "Influencer Marketing", color: "purple" },
                    { icon: "📰", name: "PR & Offline Events", color: "purple" },
                    { icon: "🎯", name: "Performance Marketing", color: "purple" }
                  ].map((service, index) => (
                    <div 
                      key={index}
                      className="bg-white p-3 rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 hover:border-purple-300"
                    >
                      <div className="text-purple-600 text-lg mb-1" style={{color: '#64419a'}}>{service.icon}</div>
                      <h4 className="font-semibold text-gray-800 text-xs md:text-sm leading-tight">{service.name}</h4>
                    </div>
                  ))}
                </div>
                
                <p className="text-gray-600 leading-relaxed text-sm md:text-base lg:text-lg font-light">
                  We combine brand storytelling with strategic launch campaigns to create memorable brand 
                  experiences that resonate with your target audience and drive measurable results.
                </p>
              </div>
              
              {/* Interactive Features - Improved Touch Targets */}
              <div className="space-y-2 md:space-y-3">
                <h3 className="font-semibold text-gray-800 text-lg md:text-xl">Why Choose Us</h3>
                {features.map((feature, index) => (
                  <button
                    key={index}
                    className={`w-full text-left flex items-start p-3 md:p-4 rounded-lg md:rounded-xl border transition-all duration-300 ${
                      activeFeature === index 
                        ? 'bg-white border-purple-300 shadow-md scale-[1.02]' 
                        : 'bg-gray-50/50 border-gray-200 hover:border-purple-200'
                    }`}
                    onMouseEnter={() => setActiveFeature(index)}
                    onClick={() => setActiveFeature(index)}
                    aria-pressed={activeFeature === index}
                    aria-label={`Feature: ${feature.title}. ${feature.description}`}
                  >
                    <div className={`text-xl md:text-2xl mr-3 md:mr-4 p-2 rounded-lg text-white shadow-md flex-shrink-0`} 
                         style={{background: index === 0 ? 'linear-gradient(to right, #a78bfa, #8b5cf6)' : 
                                           index === 1 ? 'linear-gradient(to right, #8b5cf6, #64419a)' : 
                                           'linear-gradient(to right, #64419a, #553c8b)'}}>
                      {feature.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <h4 className="font-bold text-gray-800 mb-1 text-sm md:text-base leading-tight">{feature.title}</h4>
                      <p className="text-gray-600 text-xs md:text-sm leading-relaxed">{feature.description}</p>
                    </div>
                    {activeFeature === index && (
                      <div className="ml-2 text-purple-600 animate-pulse flex-shrink-0" aria-hidden="true" style={{color: '#64419a'}}>
                        <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* CTA Buttons - Stack on mobile */}
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 pt-2">
                <button className="group bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-purple-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center text-sm md:text-base" style={{background: 'linear-gradient(to right, #64419a, #553c8b)'}}>
                  <span>Meet Our Team</span>
                  <svg className="w-4 h-4 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
                
                <button className="bg-white text-purple-700 px-4 py-2 md:px-6 md:py-3 rounded-lg font-semibold border border-gray-200 hover:border-purple-400 hover:bg-gray-50 transition-all duration-300 shadow-sm hover:shadow-md text-sm md:text-base" style={{color: '#64419a', borderColor: '#e5e7eb'}}>
                  Our Process
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Enhanced Stats Section */}
        <div className={`transition-all duration-700 delay-600 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-white rounded-xl md:rounded-2xl p-6 md:p-8 lg:p-12 shadow-lg md:shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-1 md:h-1.5 bg-gradient-to-r from-purple-400 via-purple-500 to-purple-600 rounded-t-xl md:rounded-t-2xl" style={{background: 'linear-gradient(to right, #a78bfa, #64419a, #553c8b)'}}></div>
            
            <div className="text-center mb-6 md:mb-8 lg:mb-12">
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-800 mb-2 md:mb-3">Our Impact in Numbers</h2>
              <p className="text-gray-600 max-w-2xl mx-auto text-xs md:text-sm lg:text-base font-light px-2">
                These metrics represent our commitment to delivering exceptional results for every startup we work with.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
              {[
                { value: counters.retention, suffix: "%", label: "Client Success Rate", color: "purple" },
                { value: counters.roi, suffix: "%", label: "Average ROI", color: "purple" },
                { value: counters.audience, suffix: "M+", label: "Audience Reached", color: "purple" },
                { value: counters.projects, suffix: "+", label: "Brands Transformed", color: "purple" }
              ].map((stat, index) => (
                <div key={index} className="text-center group">
                  <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-lg md:rounded-xl p-3 md:p-4 mb-2 md:mb-3 group-hover:scale-105 transition-transform duration-300">
                    <div className="text-lg md:text-2xl lg:text-3xl font-bold text-purple-600 mb-1" style={{color: '#64419a'}}>
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-gray-600 font-medium text-xs md:text-sm">{stat.label}</div>
                  </div>
                  <div className="w-full bg-purple-200 rounded-full h-1">
                    <div 
                      className="bg-gradient-to-r from-purple-500 to-purple-600 h-1 rounded-full transition-all duration-1000 ease-out"
                      style={{ 
                        width: `${stat.label.includes('ROI') ? Math.min(stat.value / 3, 100) : stat.label.includes('Audience') ? Math.min(stat.value * 2, 100) : stat.label.includes('Brands') ? Math.min(stat.value / 2.5, 100) : stat.value}%`,
                        background: 'linear-gradient(to right, #8b5cf6, #64419a)'
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;