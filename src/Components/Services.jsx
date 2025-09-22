import React, { useState, useEffect, useRef } from "react";

const Services = () => {
  const [activeService, setActiveService] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [hoveredCard, setHoveredCard] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const [cursorVariant, setCursorVariant] = useState("default");
  const [isInView, setIsInView] = useState(false);
  const [animationPhase, setAnimationPhase] = useState(0);
  const ref = useRef(null);

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          setTimeout(() => setAnimationPhase(1), 200);
          setTimeout(() => setAnimationPhase(2), 600);
          setTimeout(() => setAnimationPhase(3), 1000);
        }
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  // Icon components
  const iconComponents = {
    // Branding icons
    branding: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    // Social Media icons
    socialMedia: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    // Influencer Marketing icons
    influencer: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
    // PR & Events icons
    events: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
        <line x1="16" y1="2" x2="16" y2="6"/>
        <line x1="8" y1="2" x2="8" y2="6"/>
        <line x1="3" y1="10" x2="21" y2="10"/>
        <path d="M8 14h.01"/>
        <path d="M12 14h.01"/>
        <path d="M16 14h.01"/>
        <path d="M8 18h.01"/>
        <path d="M12 18h.01"/>
        <path d="M16 18h.01"/>
      </svg>
    ),
    // Performance Marketing icons
    performance: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
        <polyline points="22,16 18,12 14,16"/>
      </svg>
    ),
    // Brand Storytelling icons
    storytelling: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
        <polyline points="14 2 14 8 20 8"/>
        <line x1="16" y1="13" x2="8" y2="13"/>
        <line x1="16" y1="17" x2="8" y2="17"/>
        <circle cx="10" cy="13" r="1"/>
        <circle cx="10" cy="17" r="1"/>
      </svg>
    )
  };

  // Services data
  const services = [
    { 
      id: 1, 
      title: "Branding", 
      desc: "Complete brand identity creation that captures your vision and connects with your target audience.",
      icon: iconComponents.branding,
      color: "from-purple-600 to-purple-500",
      hoverColor: "from-purple-700 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-50",
      stats: { metric1: "+250%", label1: "Brand Recognition", metric2: "+180%", label2: "Market Impact" },
      features: ["Logo Design", "Brand Guidelines", "Visual Identity", "Brand Positioning"],
      imagePlaceholder: "Brand portfolio showcase - Logo designs, brand guides, visual identity examples"
    },
    { 
      id: 2, 
      title: "Social Media", 
      desc: "Complete social media management that builds communities and drives meaningful engagement.",
      icon: iconComponents.socialMedia,
      color: "from-purple-600 to-purple-500",
      hoverColor: "from-purple-700 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-50",
      stats: { metric1: "+320%", label1: "Engagement", metric2: "+150%", label2: "Followers Growth" },
      features: ["Content Strategy", "Community Management", "Social Analytics", "Campaign Management"],
      imagePlaceholder: "Social media content examples - Instagram posts, Facebook campaigns, content calendar"
    },
    { 
      id: 3, 
      title: "Influencer & Celebrity Marketing", 
      desc: "Strategic partnerships with influencers and celebrities to amplify your brand's reach and credibility.",
      icon: iconComponents.influencer,
      color: "from-purple-600 to-purple-500",
      hoverColor: "from-purple-700 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-50",
      stats: { metric1: "+400%", label1: "Reach Extension", metric2: "+275%", label2: "Brand Trust" },
      features: ["Influencer Matching", "Campaign Strategy", "Content Collaboration", "Performance Tracking"],
      imagePlaceholder: "Influencer collaboration photos - Celebrity partnerships, influencer content, campaign results"
    },
    { 
      id: 4, 
      title: "PR & Offline Events", 
      desc: "Strategic public relations and memorable events that create buzz and build lasting brand connections.",
      icon: iconComponents.events,
      color: "from-purple-600 to-purple-500",
      hoverColor: "from-purple-700 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-50",
      stats: { metric1: "+200%", label1: "Media Coverage", metric2: "+165%", label2: "Event Attendance" },
      features: ["Media Relations", "Event Planning", "Press Releases", "Crisis Management"],
      imagePlaceholder: "Event photography - Product launches, press conferences, brand activations, media coverage"
    },
    { 
      id: 5, 
      title: "Performance Marketing", 
      desc: "Data-driven digital marketing campaigns that deliver measurable ROI and accelerate business growth.",
      icon: iconComponents.performance,
      color: "from-purple-600 to-purple-500",
      hoverColor: "from-purple-700 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-50",
      stats: { metric1: "+350%", label1: "ROAS", metric2: "+220%", label2: "Conversion Rate" },
      features: ["Paid Advertising", "SEO Optimization", "Analytics & Reporting", "Conversion Optimization"],
      imagePlaceholder: "Campaign dashboards - Google Ads interfaces, analytics reports, performance graphs"
    },
    { 
      id: 6, 
      title: "Brand Storytelling & Launch Campaigns", 
      desc: "Compelling narratives and comprehensive launch strategies that create emotional connections and market impact.",
      icon: iconComponents.storytelling,
      color: "from-purple-600 to-purple-500",
      hoverColor: "from-purple-700 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-50",
      stats: { metric1: "+300%", label1: "Story Engagement", metric2: "+240%", label2: "Launch Success" },
      features: ["Brand Narratives", "Launch Strategy", "Content Creation", "Multi-channel Campaigns"],
      imagePlaceholder: "Launch campaign visuals - Video storyboards, campaign concepts, launch event photos"
    },
  ];

  // Mouse tracking for cursor effects
  useEffect(() => {
    if (isMobile) return;
    
    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  // Auto-rotate services
  useEffect(() => {
    if (isHovered || hoveredCard !== null) return;
    
    const interval = setInterval(() => {
      setActiveService(prev => (prev + 1) % services.length);
    }, 4000);
    
    return () => clearInterval(interval);
  }, [isHovered, hoveredCard, services.length]);

  return (
    <section 
      id="services" 
      className="min-h-screen py-12 md:py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-purple-50 text-slate-800 overflow-hidden relative"
      ref={ref}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      style={{ fontFamily: "'Montserrat', sans-serif" }}
    >
      {/* Animated background elements with Purple Sparkles */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-100/20 via-transparent to-purple-100/20"></div>
        
        {/* Purple Sparkle Elements */}
        <div className="absolute top-20 left-4 md:left-10 w-6 h-6 opacity-40">
          <div className="spark-shape bg-purple-400 animate-spark-twinkle-1"></div>
        </div>
        <div className="absolute top-40 right-4 md:right-20 w-4 h-4 opacity-50">
          <div className="spark-shape bg-purple-300 animate-spark-twinkle-2"></div>
        </div>
        <div className="absolute bottom-32 left-1/4 w-5 h-5 opacity-45">
          <div className="spark-shape bg-purple-500 animate-spark-twinkle-3"></div>
        </div>
        <div className="absolute top-1/3 right-1/3 w-7 h-7 opacity-35">
          <div className="spark-shape bg-purple-400 animate-spark-pulse-1"></div>
        </div>
        <div className="absolute bottom-1/4 left-1/5 w-3 h-3 opacity-60">
          <div className="spark-shape bg-purple-300 animate-spark-pulse-2"></div>
        </div>
        <div className="absolute top-2/3 left-2/3 w-6 h-6 opacity-40">
          <div className="spark-shape bg-purple-500 animate-spark-rotate-1"></div>
        </div>
        <div className="absolute bottom-1/3 right-1/4 w-4 h-4 opacity-50">
          <div className="spark-shape bg-purple-400 animate-spark-glow"></div>
        </div>

        {[...Array(5)].map((_, i) => (
          <div
            key={`orb-${i}`}
            className="absolute rounded-full opacity-5 animate-pulse"
            style={{
              top: `${20 + i * 15}%`,
              left: `${10 + i * 18}%`,
              width: `${80 + i * 20}px`,
              height: `${80 + i * 20}px`,
              background: `linear-gradient(135deg, ${i % 2 ? '#8666A5' : '#9f7aea'}, ${i % 2 ? '#7c3aed' : '#8666A5'})`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}

        <div className="absolute inset-0 opacity-[0.02]">
          <svg width="100%" height="100%" className="absolute inset-0">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#8666A5" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>
      </div>

      {/* Custom cursor - desktop only */}
      {!isMobile && (
        <div
          className="fixed w-6 h-6 rounded-full pointer-events-none z-50 transition-all duration-200 ease-out"
          style={{
            left: mousePosition.x - 12,
            top: mousePosition.y - 12,
            transform: `scale(${cursorVariant === 'cardHover' ? '2' : cursorVariant === 'ctaHover' ? '3' : '1'})`,
            backgroundColor: cursorVariant === 'ctaHover' ? '#8666A5' : '#8666A5',
            opacity: cursorVariant === 'default' ? '0.3' : '0.5',
            mixBlendMode: 'difference',
          }}
        />
      )}

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div 
          className={`text-center mb-12 md:mb-16 lg:mb-20 transform transition-all duration-1000 ease-out ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div 
            className={`inline-block mb-4 md:mb-6 transform transition-all duration-800 delay-200 ${
              animationPhase >= 1 ? 'opacity-100 scale-100' : 'opacity-0 scale-90'
            }`}
          >
            <span className="px-4 py-1.5 text-xs md:text-sm bg-gradient-to-r from-purple-100 to-purple-100 text-purple-700 rounded-full font-semibold tracking-wider uppercase border border-purple-200/50">
              Complete Marketing Solutions
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 leading-tight tracking-tight">
            <span 
              className={`block transform transition-all duration-1000 delay-300 ${
                animationPhase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Full-Service Marketing &
            </span>
            <span className="relative inline-block">
              <span 
                className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-600 to-purple-600 transform transition-all duration-1000 delay-500 ${
                  animationPhase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ color: '#8666A5' }}
              >
                Brand Development
              </span>
              <div 
                className={`absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-purple-600 rounded-full transform transition-all duration-1200 delay-800 ${
                  animationPhase >= 3 ? 'scale-x-100 opacity-100' : 'scale-x-0 opacity-0'
                }`}
                style={{ transformOrigin: 'left center', backgroundColor: '#8666A5' }}
              />
            </span>
          </h1>
          
          <p 
            className={`text-base md:text-lg lg:text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed font-light transform transition-all duration-1000 delay-700 ${
              animationPhase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            }`}
          >
            From brand identity to performance marketing, we deliver comprehensive solutions that transform startups into market leaders. 
            Experience the complete spectrum of marketing excellence with PR Sparkz.
          </p>
        </div>

        <div className="flex flex-col xl:flex-row gap-8 md:gap-12 items-start">
          {/* Service cards grid */}
          <div className="w-full xl:w-2/3">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`group p-6 md:p-8 rounded-2xl md:rounded-3xl bg-white/70 backdrop-blur-sm shadow-lg border border-white/20 ${service.bgColor} relative overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-2 md:hover:-translate-y-3 hover:shadow-xl md:hover:shadow-2xl hover:shadow-amber-500/10 ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                  }`}
                  style={{
                    transitionDelay: `${index * 0.15}s`
                  }}
                  onMouseEnter={() => {
                    if (!isMobile) {
                      setActiveService(index);
                      setHoveredCard(index);
                      setCursorVariant("cardHover");
                    }
                  }}
                  onMouseLeave={() => {
                    if (!isMobile) {
                      setHoveredCard(null);
                      setCursorVariant("default");
                    }
                  }}
                  onClick={() => isMobile && setActiveService(index)}
                >
                  {/* Hover gradient overlay */}
                  <div 
                    className={`absolute inset-0 bg-gradient-to-br ${service.hoverColor} opacity-0 group-hover:opacity-5 rounded-2xl md:rounded-3xl transition-opacity duration-500`}
                  />

                  {/* Active glow */}
                  {activeService === index && (
                    <div 
                      className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20 blur-xl rounded-2xl md:rounded-3xl transition-all duration-700`}
                    />
                  )}

                  <div className="relative z-10">
                    {/* Icon */}
                    <div className={`text-transparent bg-gradient-to-r ${service.color} bg-clip-text mb-4 md:mb-6 transform group-hover:scale-110 group-hover:-rotate-3 transition-all duration-400`}>
                      {service.icon}
                    </div>
                    
                    <h3 className="text-xl md:text-2xl font-bold mb-3 md:mb-4 text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                      {service.title}
                    </h3>
                    
                    <p className="text-sm md:text-base text-slate-600 mb-4 md:mb-6 leading-relaxed">
                      {service.desc}
                    </p>

                    {/* Image Placeholder Section */}
                    <div className="mb-4 md:mb-6 p-3 md:p-4 bg-gradient-to-r from-gray-100 to-gray-50 rounded-xl border-2 border-dashed border-gray-300">
                      <div className="text-center">
                        <div className="w-8 h-8 mx-auto mb-2 text-gray-400">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <circle cx="9" cy="9" r="2"/>
                            <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                          </svg>
                        </div>
                        <p className="text-xs md:text-sm text-gray-600 font-medium leading-tight">
                          {service.imagePlaceholder}
                        </p>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="space-y-2 md:space-y-3 mb-4 md:mb-6">
                      {service.features.map((feature, idx) => (
                        <div 
                          key={idx}
                          className="flex items-center space-x-2 md:space-x-3 text-xs md:text-sm text-slate-600 transform group-hover:translate-x-1 transition-transform duration-300"
                          style={{ transitionDelay: `${idx * 50}ms` }}
                        >
                          <div 
                            className={`w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`}
                          />
                          <span className="font-medium">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4">
                      <div className="p-3 md:p-4 bg-white/80 rounded-xl md:rounded-2xl text-center shadow-sm border border-white/40 hover:scale-105 transition-transform duration-300">
                        <div className={`text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                          {service.stats.metric1}
                        </div>
                        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide mt-1">{service.stats.label1}</div>
                      </div>
                      <div className="p-3 md:p-4 bg-white/80 rounded-xl md:rounded-2xl text-center shadow-sm border border-white/40 hover:scale-105 transition-transform duration-300">
                        <div className={`text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
                          {service.stats.metric2}
                        </div>
                        <div className="text-xs text-slate-500 font-semibold uppercase tracking-wide mt-1">{service.stats.label2}</div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Active indicator */}
                  {activeService === index && (
                    <div 
                      className={`absolute top-0 left-0 right-0 h-1.5 md:h-2 bg-gradient-to-r ${service.color} rounded-t-2xl md:rounded-t-3xl transform transition-all duration-600 ${
                        isInView ? 'scale-x-100' : 'scale-x-0'
                      }`}
                      style={{ transformOrigin: 'left center' }}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Preview panel - desktop only */}
          {!isMobile && (
            <div 
              className={`w-full xl:w-1/3 sticky top-24 transform transition-all duration-1200 ease-out ${
                isInView ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 translate-x-8 scale-95'
              }`}
              style={{ transitionDelay: '0.6s' }}
            >
              <div className="relative w-full h-[500px] lg:h-[600px] rounded-3xl overflow-hidden bg-gradient-to-br from-white/90 to-violet-50/90 backdrop-blur-xl shadow-2xl border border-white/30">
                {/* Ambient background */}
                <div className="absolute inset-0">
                  <div className="absolute top-0 right-0 w-56 h-56 bg-violet-400/10 rounded-full -translate-y-28 translate-x-28 blur-3xl"></div>
                  <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-400/10 rounded-full translate-y-36 -translate-x-36 blur-3xl"></div>
                </div>

                {/* Preview content */}
                <div className="relative z-10 flex flex-col items-center justify-center p-6 md:p-8 h-full text-center">
                  <div className="w-full transition-all duration-500">
                    {/* Animated icon */}
                    <div className="mb-6 md:mb-8 animate-bounce" style={{ animationDuration: '3s' }}>
                      <div className={`inline-block p-3 md:p-4 rounded-2xl bg-gradient-to-r ${services[activeService].color} shadow-lg`}>
                        <div className="text-white">
                          {services[activeService].icon}
                        </div>
                      </div>
                    </div>
                    
                    {/* Main Service Image Placeholder */}
                    <div className="mb-6 md:mb-8 p-4 md:p-6 bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl border-2 border-dashed border-gray-300">
                      <div className="text-center">
                        <div className="w-12 h-12 mx-auto mb-3 text-gray-400">
                          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                            <circle cx="9" cy="9" r="2"/>
                            <path d="M21 15l-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/>
                          </svg>
                        </div>
                        <p className="text-sm md:text-base text-gray-600 font-medium leading-tight">
                          {services[activeService].imagePlaceholder}
                        </p>
                      </div>
                    </div>
                    
                    <h3 className={`text-xl md:text-2xl font-bold mb-4 md:mb-6 bg-clip-text text-transparent bg-gradient-to-r ${services[activeService].color}`}>
                      {services[activeService].title}
                    </h3>
                    
                    <p className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 leading-relaxed">
                      {services[activeService].desc}
                    </p>
                    
                    {/* Stats preview */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4 mb-6 md:mb-8">
                      <div className={`p-3 md:p-4 rounded-xl md:rounded-2xl bg-gradient-to-br ${services[activeService].color} text-white shadow-lg`}>
                        <div className="text-lg md:text-xl lg:text-2xl font-bold">
                          {services[activeService].stats.metric1}
                        </div>
                        <div className="text-xs md:text-sm opacity-90 font-medium">
                          {services[activeService].stats.label1}
                        </div>
                      </div>
                      <div className="p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/60 border border-white/40 shadow-lg">
                        <div className={`text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r ${services[activeService].color} bg-clip-text text-transparent`}>
                          {services[activeService].stats.metric2}
                        </div>
                        <div className="text-xs md:text-sm text-slate-500 font-medium">
                          {services[activeService].stats.label2}
                        </div>
                      </div>
                    </div>

                    {/* Progress indicator */}
                    <div className="flex justify-center space-x-1.5 md:space-x-2">
                      {services.map((_, idx) => (
                        <button
                          key={idx}
                          className={`h-1.5 md:h-2 rounded-full transition-all duration-400 hover:scale-125 ${
                            idx === activeService 
                              ? `bg-gradient-to-r ${services[activeService].color} w-6 md:w-8 shadow-lg` 
                              : 'bg-slate-300 w-1.5 md:w-2 hover:bg-slate-400'
                          }`}
                          onClick={() => setActiveService(idx)}
                          aria-label={`View ${services[idx].title} service`}
                        />
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Results section */}
        <div 
          className={`mt-16 md:mt-20 transform transition-all duration-1000 delay-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          }`}
        >
          <div className="text-center mb-8 md:mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-800 mb-3 md:mb-4">
              Proven Results Across All Marketing Channels
            </h3>
            <p className="text-base md:text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
              Our integrated approach delivers exceptional results across branding, social media, influencer marketing, events, performance marketing, and storytelling.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: "500+", label: "Brands Launched", gradient: "from-purple-600 to-purple-600" },
              { value: "250%", label: "Avg. Growth Rate", gradient: "from-purple-600 to-purple-600" },
              { value: "95%", label: "Client Retention", gradient: "from-purple-600 to-purple-600" },
              { value: "10M+", label: "Total Reach", gradient: "from-purple-600 to-purple-600" },
            ].map((stat, index) => (
              <div 
                key={index}
                className={`p-4 md:p-6 bg-white/80 rounded-xl md:rounded-2xl text-center shadow-lg border border-white/30 backdrop-blur-sm hover:scale-105 hover:shadow-xl transition-all duration-400 transform ${
                    isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${1200 + index * 100}ms` }}
              >
                <div className={`text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-1 md:mb-2`}>
                  {stat.value}
                </div>
                <div className="text-xs md:text-sm text-slate-600 font-semibold uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div 
          className={`text-center mt-16 md:mt-20 transform transition-all duration-1000 delay-1400 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="max-w-2xl mx-auto">
            <h4 className="text-xl md:text-2xl font-bold text-slate-800 mb-4 md:mb-6">
              Ready to Transform Your Brand's Success Story?
            </h4>
            
            <button 
              className="group relative px-8 py-4 md:px-10 md:py-5 rounded-full bg-gradient-to-r from-purple-600 via-purple-600 to-purple-600 text-white font-bold text-base md:text-lg overflow-hidden shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-400"
              style={{ backgroundColor: '#8666A5' }}
              onMouseEnter={() => !isMobile && setCursorVariant("ctaHover")}
              onMouseLeave={() => !isMobile && setCursorVariant("default")}
            >
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-purple-700 via-purple-700 to-purple-700 opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
              
              <span className="relative z-10 flex items-center justify-center space-x-2 md:space-x-3">
                <span>Start Your Brand Journey</span>
                <svg 
                  className="w-5 h-5 md:w-6 md:h-6 group-hover:translate-x-2 transition-transform duration-300" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </button>
            
            <p className="mt-6 md:mt-8 text-sm md:text-base text-slate-600 leading-relaxed">
              Join <span className="font-bold text-purple-600">500+</span> successful brands who trust PR Sparkz with their complete marketing transformation.{" "}
              <span className="font-semibold text-purple-700">
                Let's build your brand's legacy together.
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Enhanced CSS animations with Montserrat font and Yellow Sparkle Effects */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        /* 4-pointed diamond sparkle shape */
        .spark-shape {
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          filter: drop-shadow(0 0 4px rgba(134, 102, 165, 0.6));
        }
        
        /* Purple Sparkle Animations */
        @keyframes spark-twinkle-1 {
          0%, 100% { 
            opacity: 0.4; 
            transform: scale(1) rotate(0deg);
            filter: drop-shadow(0 0 4px rgba(134, 102, 165, 0.6));
          }
          50% { 
            opacity: 1; 
            transform: scale(1.3) rotate(45deg);
            filter: drop-shadow(0 0 8px rgba(134, 102, 165, 0.9));
          }
        }
        
        @keyframes spark-twinkle-2 {
          0%, 100% { 
            opacity: 0.5; 
            transform: scale(1) rotate(0deg);
            filter: drop-shadow(0 0 3px rgba(147, 125, 194, 0.5));
          }
          50% { 
            opacity: 0.9; 
            transform: scale(1.5) rotate(-30deg);
            filter: drop-shadow(0 0 6px rgba(147, 125, 194, 0.8));
          }
        }
        
        @keyframes spark-twinkle-3 {
          0%, 100% { 
            opacity: 0.45; 
            transform: scale(1) rotate(15deg);
            filter: drop-shadow(0 0 5px rgba(124, 58, 237, 0.7));
          }
          50% { 
            opacity: 0.95; 
            transform: scale(1.4) rotate(75deg);
            filter: drop-shadow(0 0 10px rgba(124, 58, 237, 0.9));
          }
        }
        
        @keyframes spark-pulse-1 {
          0%, 100% { 
            opacity: 0.35; 
            transform: scale(1) rotate(0deg);
            filter: drop-shadow(0 0 4px rgba(134, 102, 165, 0.6)) brightness(1);
          }
          50% { 
            opacity: 0.8; 
            transform: scale(1.6) rotate(90deg);
            filter: drop-shadow(0 0 12px rgba(134, 102, 165, 0.9)) brightness(1.2);
          }
        }
        
        @keyframes spark-pulse-2 {
          0%, 100% { 
            opacity: 0.6; 
            transform: scale(1) rotate(-45deg);
            filter: drop-shadow(0 0 3px rgba(147, 125, 194, 0.5)) brightness(1);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.2) rotate(45deg);
            filter: drop-shadow(0 0 8px rgba(147, 125, 194, 0.8)) brightness(1.3);
          }
        }
        
        @keyframes spark-rotate-1 {
          0% { 
            transform: rotate(0deg) scale(1);
            opacity: 0.4;
            filter: drop-shadow(0 0 4px rgba(124, 58, 237, 0.6));
          }
          25% { 
            transform: rotate(90deg) scale(1.2);
            opacity: 0.7;
            filter: drop-shadow(0 0 6px rgba(124, 58, 237, 0.8));
          }
          50% { 
            transform: rotate(180deg) scale(1);
            opacity: 0.4;
            filter: drop-shadow(0 0 4px rgba(124, 58, 237, 0.6));
          }
          75% { 
            transform: rotate(270deg) scale(1.2);
            opacity: 0.7;
            filter: drop-shadow(0 0 6px rgba(124, 58, 237, 0.8));
          }
          100% { 
            transform: rotate(360deg) scale(1);
            opacity: 0.4;
            filter: drop-shadow(0 0 4px rgba(124, 58, 237, 0.6));
          }
        }
        
        @keyframes spark-glow {
          0%, 100% { 
            opacity: 0.5; 
            transform: scale(1) rotate(0deg);
            filter: drop-shadow(0 0 5px rgba(134, 102, 165, 0.7)) brightness(1);
          }
          33% { 
            opacity: 0.8; 
            transform: scale(1.3) rotate(120deg);
            filter: drop-shadow(0 0 10px rgba(134, 102, 165, 0.9)) brightness(1.3);
          }
          66% { 
            opacity: 0.6; 
            transform: scale(1.1) rotate(240deg);
            filter: drop-shadow(0 0 7px rgba(134, 102, 165, 0.8)) brightness(1.1);
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          33% { transform: translateY(-10px) rotate(1deg); }
          66% { transform: translateY(-5px) rotate(-1deg); }
        }
        
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes gradient-shift {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-fade-in {
          animation: fade-in 0.6s ease-out forwards;
        }
        
        .animate-gradient-shift {
          background-size: 200% 200%;
          animation: gradient-shift 4s ease infinite;
        }
        
        .bg-grid-pattern {
          background-image: radial-gradient(circle at 1px 1px, rgba(134, 102, 165, 0.15) 1px, transparent 0);
          background-size: 20px 20px;
        }
        
        /* Performance Optimization */
        @media (prefers-reduced-motion: reduce) {
          .animate-spark-twinkle-1,
          .animate-spark-twinkle-2,
          .animate-spark-twinkle-3,
          .animate-spark-pulse-1,
          .animate-spark-pulse-2,
          .animate-spark-rotate-1,
          .animate-spark-glow {
            animation: none;
            transform: none;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;