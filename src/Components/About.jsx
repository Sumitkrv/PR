import React, { useState, useEffect, useRef } from "react";

const About = () => {
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

  useEffect(() => {
    if (!isIntersecting) return;
    
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, [isIntersecting]);

  const features = [
    {
      icon: "🚀",
      title: "Startup Launch Specialists",
      description: "We specialize in launching startups and building them into recognizable, scalable brands from the ground up with comprehensive market research and strategic positioning.",
    },
    {
      icon: "⭐",
      title: "Brand Building Excellence",
      description: "From defining visual identity to building comprehensive online and offline presence, we create lasting brand impact that resonates with your target audience.",
    },
    {
      icon: "🤝",
      title: "Growth Partnership",
      description: "We believe in 'You Grow, We Grow' - your success is our success in this collaborative journey towards market leadership and sustainable growth.",
    },
    {
      icon: "🎯",
      title: "Strategic Innovation",
      description: "Combining creative excellence with data-driven strategies to deliver measurable results and drive meaningful business transformation.",
    }
  ];

  const values = [
    {
      title: "Innovation First",
      description: "We stay ahead of industry trends and continuously innovate our approaches to deliver cutting-edge solutions.",
      icon: "💡"
    },
    {
      title: "Client Success",
      description: "Your success is our priority. We measure our achievements by the growth and success of our clients.",
      icon: "🏆"
    },
    {
      title: "Transparency",
      description: "Open communication, honest reporting, and transparent processes build lasting partnerships.",
      icon: "🔍"
    },
    {
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from strategy to execution and beyond.",
      icon: "⭐"
    }
  ];

  return (
    <div 
      className="min-h-screen relative overflow-hidden"
      style={{ 
        paddingTop: '100px',
        background: 'linear-gradient(135deg, #f8f6ff 0%, #ffffff 100%)'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute top-20 left-10 w-6 h-6 opacity-40">
        <div className="spark-shape animate-spark-twinkle-1" style={{ backgroundColor: '#8666A5' }}></div>
      </div>
      <div className="absolute top-40 right-20 w-4 h-4 opacity-50">
        <div className="spark-shape animate-spark-twinkle-2" style={{ backgroundColor: 'rgba(134, 102, 165, 0.8)' }}></div>
      </div>
      <div className="absolute bottom-32 left-16 w-5 h-5 opacity-45">
        <div className="spark-shape animate-spark-twinkle-3" style={{ backgroundColor: '#8666A5' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Hero Section */}
        <section 
          ref={sectionRef}
          className="py-20 text-center"
        >
          <div className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="inline-block mb-6">
              <span 
                className="text-white px-6 py-3 rounded-full text-lg font-semibold tracking-wide uppercase shadow-lg"
                style={{ backgroundColor: '#8666A5' }}
              >
                About PR Sparkz
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8">
              <span 
                className="bg-clip-text text-transparent"
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
              className="w-32 h-1 mx-auto mb-8 rounded-full"
              style={{ background: `linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)` }}
            ></div>
            <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto leading-relaxed font-light mb-8">
              We don't just do marketing – we build iconic brands from the ground up. Specializing in startup launches 
              and scale-ups, we transform innovative ideas into market-leading brands that inspire and captivate audiences.
            </p>
            <div className="mt-8">
              <span 
                className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent"
                style={{ 
                  background: `linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent'
                }}
              >
                ✨ You Grow, We Grow – Building Success Together ✨
              </span>
            </div>
          </div>
        </section>

        {/* Our Story Section with Founder */}
        <section className="py-20">
          <div className={`transition-all duration-1000 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Story</h2>
                <div 
                  className="w-20 h-1 mb-6 rounded-full"
                  style={{ background: `linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)` }}
                ></div>
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  Founded with a vision to revolutionize brand building, PR Sparkz emerged from the understanding that 
                  every great brand starts with a compelling story and strategic execution. Our journey began with a 
                  simple belief: exceptional brands are built through authentic connections and innovative strategies.
                </p>
                <p className="text-lg text-gray-700 leading-relaxed mb-8">
                  Today, we've grown into a comprehensive brand building agency that specializes in launching startups 
                  and scaling businesses. Our expertise spans across digital marketing, PR, celebrity partnerships, 
                  and strategic brand development, making us the go-to partner for businesses ready to make their mark.
                </p>
                <div className="grid grid-cols-2 gap-6">
                  <div 
                    className="bg-white p-6 rounded-xl shadow-lg"
                    style={{ border: '1px solid rgba(134, 102, 165, 0.1)' }}
                  >
                    <div 
                      className="text-3xl font-bold mb-2"
                      style={{ color: '#8666A5' }}
                    >5+</div>
                    <div className="text-gray-600">Years of Excellence</div>
                  </div>
                  <div 
                    className="bg-white p-6 rounded-xl shadow-lg"
                    style={{ border: '1px solid rgba(134, 102, 165, 0.1)' }}
                  >
                    <div 
                      className="text-3xl font-bold mb-2"
                      style={{ color: '#8666A5' }}
                    >{counters.projects}+</div>
                    <div className="text-gray-600">Brands Launched</div>
                  </div>
                </div>
              </div>
              
              {/* Founder Photo Section */}
              <div className="relative">
                <div 
                  className="bg-white rounded-3xl p-8 shadow-2xl"
                  style={{ border: '1px solid rgba(134, 102, 165, 0.1)' }}
                >
                  <div className="text-center">
                    <div 
                      className="w-48 h-48 mx-auto rounded-full mb-6 overflow-hidden border-4 border-white shadow-xl"
                      style={{ background: 'linear-gradient(135deg, rgba(134, 102, 165, 0.3) 0%, rgba(134, 102, 165, 0.5) 100%)' }}
                    >
                      <img 
                        src="/src/Components/PR-FD.jpeg" 
                        alt="PR-FD - Founder of PR Sparkz" 
                        className="w-full h-full object-cover"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.parentElement.querySelector('.fallback-avatar').style.display = 'flex';
                        }}
                      />
                      <div 
                        className="fallback-avatar w-full h-full flex items-center justify-center text-white text-6xl font-bold" 
                        style={{ 
                          display: 'none',
                          background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)'
                        }}
                      >
                        PF
                      </div>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800 mb-2">PR-FD</h3>
                    <p 
                      className="text-lg font-medium mb-4"
                      style={{ color: '#8666A5' }}
                    >Founder & CEO</p>
                    <div 
                      className="w-20 h-1 mx-auto mb-4 rounded-full"
                      style={{ background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)' }}
                    ></div>
                    <p className="text-gray-600 italic leading-relaxed">
                      "Building brands that inspire and transform markets through strategic storytelling, authentic connections, 
                      and innovative approaches. Every brand has a unique story waiting to be told."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section className="py-20">
          <div className={`transition-all duration-1000 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">Our Core Values</h2>
              <div 
                className="w-20 h-1 mx-auto mb-6 rounded-full"
                style={{ background: `linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)` }}
              ></div>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                These principles guide everything we do and shape how we build lasting partnerships with our clients.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center"
                  style={{ border: '1px solid rgba(134, 102, 165, 0.1)' }}
                >
                  <div className="text-4xl mb-4">{value.icon}</div>
                  <h3 
                    className="text-xl font-bold mb-3"
                    style={{ color: '#8666A5' }}
                  >{value.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Enhanced Stats Section */}
        <section className="py-20">
          <div className={`transition-all duration-1000 delay-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <div 
              className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
              style={{ border: '1px solid rgba(134, 102, 165, 0.1)' }}
            >
              <div 
                className="absolute top-0 left-0 w-full h-2 rounded-t-3xl"
                style={{ background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)' }}
              ></div>
              
              <div className="text-center mb-12">
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Our Impact in Numbers</h3>
                <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                  These metrics represent our commitment to delivering exceptional results for every startup we work with.
                </p>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                <div className="text-center group">
                  <div 
                    className="rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300"
                    style={{ background: 'linear-gradient(135deg, rgba(134, 102, 165, 0.1) 0%, rgba(134, 102, 165, 0.15) 100%)' }}
                  >
                    <div 
                      className="text-4xl font-bold mb-2 bg-clip-text text-transparent"
                      style={{ 
                        background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {counters.retention}%
                    </div>
                    <div className="text-gray-600 font-medium">Success Rate</div>
                  </div>
                </div>
                
                <div className="text-center group">
                  <div 
                    className="rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300"
                    style={{ background: 'linear-gradient(135deg, rgba(134, 102, 165, 0.12) 0%, rgba(134, 102, 165, 0.18) 100%)' }}
                  >
                    <div 
                      className="text-4xl font-bold mb-2 bg-clip-text text-transparent"
                      style={{ 
                        background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {counters.roi}%
                    </div>
                    <div className="text-gray-600 font-medium">Average ROI</div>
                  </div>
                </div>
                
                <div className="text-center group">
                  <div 
                    className="rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300"
                    style={{ background: 'linear-gradient(135deg, rgba(134, 102, 165, 0.1) 0%, rgba(134, 102, 165, 0.15) 100%)' }}
                  >
                    <div 
                      className="text-4xl font-bold mb-2 bg-clip-text text-transparent"
                      style={{ 
                        background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
                      }}
                    >
                      {counters.audience}M+
                    </div>
                    <div className="text-gray-600 font-medium">Audience Reached</div>
                  </div>
                </div>
                
                <div className="text-center group">
                  <div 
                    className="rounded-2xl p-6 mb-4 group-hover:scale-105 transition-transform duration-300"
                    style={{ background: 'linear-gradient(135deg, rgba(134, 102, 165, 0.12) 0%, rgba(134, 102, 165, 0.18) 100%)' }}
                  >
                    <div 
                      className="text-4xl font-bold mb-2 bg-clip-text text-transparent"
                      style={{ 
                        background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent'
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
