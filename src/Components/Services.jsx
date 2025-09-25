import React, { useState, useEffect, useRef } from "react";
import { scrollToSection } from '../utils/navigation.js';

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
    branding: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    socialMedia: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
    influencer: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
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
    performance: (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <line x1="18" y1="20" x2="18" y2="10"/>
        <line x1="12" y1="20" x2="12" y2="4"/>
        <line x1="6" y1="20" x2="6" y2="14"/>
        <polyline points="22,16 18,12 14,16"/>
      </svg>
    ),
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

  // Service images - high-quality images for better visual appeal
  const serviceImages = {
    campaign: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90",
    social: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90",
    influencer: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90",
    celebrity: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90",
    website: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90",
    digital: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90",
    offline: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90",
    ai: "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=90"
  };

  // Services data - updated with your content
  const services = [
    { 
      id: 1, 
      title: "Campaign Planning", 
      desc: "Data-backed, trend-driven campaigns tailored to your audience.",
      icon: iconComponents.branding,
      image: serviceImages.campaign,
      color: "from-purple-600 to-purple-500",
      hoverColor: "from-purple-700 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-50",
      stats: { metric1: "+250%", label1: "ROI", metric2: "+180%", label2: "Engagement" },
      features: ["Data Analysis", "Trend Research", "Audience Targeting", "Strategy Development"]
    },
    { 
      id: 2, 
      title: "Social Media Management", 
      desc: "End-to-end handling with content calendars, engagement, and community building.",
      icon: iconComponents.socialMedia,
      image: serviceImages.social,
      color: "from-purple-600 to-purple-500",
      hoverColor: "from-purple-700 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-50",
      stats: { metric1: "+320%", label1: "Engagement", metric2: "+150%", label2: "Followers Growth" },
      features: ["Content Calendars", "Community Management", "Analytics", "Campaign Management"]
    },
    { 
      id: 3, 
      title: "Influencer Marketing", 
      desc: "Building brand trust through niche and macro influencers.",
      icon: iconComponents.influencer,
      image: serviceImages.influencer,
      color: "from-purple-600 to-purple-500",
      hoverColor: "from-purple-700 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-50",
      stats: { metric1: "+400%", label1: "Reach", metric2: "+275%", label2: "Trust" },
      features: ["Influencer Matching", "Campaign Strategy", "Content Collaboration", "Performance Tracking"]
    },
    { 
      id: 4, 
      title: "Celebrity Branding", 
      desc: "Strategic partnerships with well-known personalities for mass reach.",
      icon: iconComponents.events,
      image: serviceImages.celebrity,
      color: "from-purple-600 to-purple-500",
      hoverColor: "from-purple-700 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-50",
      stats: { metric1: "+500%", label1: "Brand Awareness", metric2: "+300%", label2: "Credibility" },
      features: ["Celebrity Matching", "Partnership Strategy", "Media Coverage", "Impact Analysis"]
    },
    { 
      id: 5, 
      title: "Website Design & Development", 
      desc: "Smart, user-centric, and conversion-optimized websites.",
      icon: iconComponents.performance,
      image: serviceImages.website,
      color: "from-purple-600 to-purple-500",
      hoverColor: "from-purple-700 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-50",
      stats: { metric1: "+350%", label1: "Conversions", metric2: "+220%", label2: "User Engagement" },
      features: ["UI/UX Design", "Development", "SEO Optimization", "Performance Tracking"]
    },
    { 
      id: 6, 
      title: "Digital Marketing", 
      desc: "SEO, paid ads, email, and funnel strategies that drive measurable results.",
      icon: iconComponents.storytelling,
      image: serviceImages.digital,
      color: "from-purple-600 to-purple-500",
      hoverColor: "from-purple-700 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-50",
      stats: { metric1: "+300%", label1: "ROAS", metric2: "+240%", label2: "Leads" },
      features: ["SEO", "Paid Advertising", "Email Marketing", "Funnel Optimization"]
    },
    { 
      id: 7, 
      title: "Offline Marketing", 
      desc: "PR activations, events, and brand experiences that create lasting impact.",
      icon: iconComponents.events,
      image: serviceImages.offline,
      color: "from-purple-600 to-purple-500",
      hoverColor: "from-purple-700 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-50",
      stats: { metric1: "+200%", label1: "Brand Recall", metric2: "+165%", label2: "Media Coverage" },
      features: ["Event Planning", "PR Activations", "Brand Experiences", "Media Relations"]
    },
    { 
      id: 8, 
      title: "AI-Powered Solutions", 
      desc: "Predictive trend analysis, AI-driven optimization, and advanced analytics.",
      icon: iconComponents.performance,
      image: serviceImages.ai,
      color: "from-purple-600 to-purple-500",
      hoverColor: "from-purple-700 to-purple-600",
      bgColor: "bg-gradient-to-br from-purple-50 to-purple-50",
      stats: { metric1: "+450%", label1: "Efficiency", metric2: "+280%", label2: "Accuracy" },
      features: ["Predictive Analysis", "AI Optimization", "Advanced Analytics", "Content Creation"]
    }
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
      className="min-h-screen pb-12 md:pb-20 lg:pb-32 bg-gradient-to-br from-slate-50 via-white to-purple-50 text-slate-800 overflow-hidden relative"
      ref={ref}
      onMouseEnter={() => !isMobile && setIsHovered(true)}
      onMouseLeave={() => !isMobile && setIsHovered(false)}
      style={{ 
        fontFamily: "'Montserrat', sans-serif",
        paddingTop: 'clamp(5rem, 10vh, 7rem)'
      }}
    >
      {/* Animated background elements */}
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

        {[...Array(3)].map((_, i) => (
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
              Complete 360° Brand Growth Solutions
            </span>
          </div>
          
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl font-bold mb-6 md:mb-8 leading-tight tracking-tight">
            <span 
              className={`block transform transition-all duration-1000 delay-300 ${
                animationPhase >= 1 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
            >
              Social Media Excellence
            </span>
            <span className="relative inline-block">
              <span 
                className={`bg-clip-text text-transparent bg-gradient-to-r from-purple-600 via-purple-600 to-purple-600 transform transition-all duration-1000 delay-500 ${
                  animationPhase >= 2 ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{ color: '#8666A5' }}
              >
                with PR Sparkz
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
            With the power of human ideas and AI innovation, we craft campaigns that don't just look good they drive real growth. 
            From social to digital, influencer to offline, every move is designed to spark visibility, engagement, and success.
          </p>
        </div>

        {/* Service cards grid - Full width now */}
        <div className="w-full">
          {/* Floating image preview for desktop */}
          {!isMobile && hoveredCard !== null && (
            <div 
              className="fixed w-80 h-56 rounded-2xl overflow-hidden shadow-2xl z-50 pointer-events-none transition-all duration-300 transform"
              style={{
                left: mousePosition.x + 20,
                top: mousePosition.y - 140,
                opacity: hoveredCard !== null ? 1 : 0,
                transform: `translate(${hoveredCard !== null ? '0' : '20px'}, ${hoveredCard !== null ? '0' : '20px'}) scale(${hoveredCard !== null ? '1' : '0.9'})`
              }}
            >
              <div className="relative w-full h-full">
                <img 
                  src={services[hoveredCard]?.image} 
                  alt={services[hoveredCard]?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h4 className="text-white font-bold text-lg mb-1">{services[hoveredCard]?.title}</h4>
                  <p className="text-white/90 text-sm line-clamp-2">{services[hoveredCard]?.desc}</p>
                </div>
              </div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
            {services.map((service, index) => (
              <div
                key={service.id}
                className={`group p-6 rounded-2xl bg-white/70 backdrop-blur-sm shadow-lg border border-white/20 ${service.bgColor} relative overflow-hidden cursor-pointer transform transition-all duration-500 hover:-translate-y-2 hover:shadow-xl ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
                }`}
                style={{
                  transitionDelay: `${index * 0.1}s`,
                  minHeight: '320px'
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
                  className={`absolute inset-0 bg-gradient-to-br ${service.hoverColor} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-500`}
                />

                {/* Background Image with Enhanced Overlay */}
                <div className="absolute inset-0 overflow-hidden rounded-2xl">
                  <div 
                    className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110 group-hover:opacity-20"
                    style={{ 
                      backgroundImage: `url(${service.image})`,
                      opacity: 0.15
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/85 to-white/90 group-hover:from-white/80 group-hover:via-white/75 group-hover:to-white/80 transition-all duration-500" />
                  
                  {/* Enhanced gradient overlay on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />
                </div>

                {/* Active glow */}
                {activeService === index && (
                  <div 
                    className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-20 blur-xl rounded-2xl transition-all duration-700`}
                  />
                )}

                <div className="relative z-10 h-full flex flex-col">
                  {/* Icon with enhanced hover effects */}
                  <div className={`text-transparent bg-gradient-to-r ${service.color} bg-clip-text mb-4 transform group-hover:scale-125 group-hover:-rotate-6 transition-all duration-500 relative`}>
                    <div className="relative z-10">
                      {service.icon}
                    </div>
                    {/* Icon glow effect on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-30 blur-lg transition-all duration-500`}>
                      {service.icon}
                    </div>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-3 text-slate-800 group-hover:text-slate-900 transition-all duration-300 transform group-hover:translate-x-1">
                    {service.title}
                  </h3>
                  
                  <p className="text-sm text-slate-600 group-hover:text-slate-700 mb-4 leading-relaxed flex-grow transition-all duration-300">
                    {service.desc}
                  </p>

                  {/* Features */}
                  <div className="space-y-2 mb-4">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div 
                        key={idx}
                        className="flex items-center space-x-2 text-xs text-slate-600 transform group-hover:translate-x-1 transition-transform duration-300"
                        style={{ transitionDelay: `${idx * 50}ms` }}
                      >
                        <div 
                          className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`}
                        />
                        <span className="font-medium">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="flex items-center space-x-2 text-xs text-purple-600 font-medium">
                        <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color} flex-shrink-0`}/>
                        <span>+{service.features.length - 3} more</span>
                      </div>
                    )}
                  </div>

                  {/* Enhanced Stats with better hover effects */}
                  <div className="grid grid-cols-2 gap-3 mt-auto">
                    <div className="p-3 bg-white/90 group-hover:bg-white/95 rounded-xl text-center shadow-sm border border-white/40 group-hover:border-white/60 group-hover:shadow-md transition-all duration-300 transform group-hover:scale-105">
                      <div className={`text-lg font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                        {service.stats.metric1}
                      </div>
                      <div className="text-xs text-slate-500 group-hover:text-slate-600 font-semibold uppercase tracking-wide mt-1 transition-colors duration-300">{service.stats.label1}</div>
                    </div>
                    <div className="p-3 bg-white/90 group-hover:bg-white/95 rounded-xl text-center shadow-sm border border-white/40 group-hover:border-white/60 group-hover:shadow-md transition-all duration-300 transform group-hover:scale-105">
                      <div className={`text-lg font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent group-hover:scale-110 transition-transform duration-300`}>
                        {service.stats.metric2}
                      </div>
                      <div className="text-xs text-slate-500 group-hover:text-slate-600 font-semibold uppercase tracking-wide mt-1 transition-colors duration-300">{service.stats.label2}</div>
                    </div>
                  </div>
                </div>
                
                {/* Enhanced active indicator with pulse effect */}
                {activeService === index && (
                  <>
                    <div 
                      className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${service.color} rounded-t-2xl transform transition-all duration-600 ${
                        isInView ? 'scale-x-100' : 'scale-x-0'
                      }`}
                      style={{ transformOrigin: 'left center' }}
                    />
                    {/* Pulsing border effect */}
                    <div 
                      className={`absolute inset-0 rounded-2xl border-2 bg-gradient-to-r ${service.color} opacity-30 animate-pulse`}
                      style={{
                        borderImage: `linear-gradient(135deg, ${service.color}) 1`,
                        animation: 'pulse-border 2s infinite'
                      }}
                    />
                  </>
                )}
              </div>
            ))}
          </div>
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
              Our integrated approach delivers exceptional results across all digital and traditional marketing channels.
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {[
              { value: "500+", label: "Brands Transformed", gradient: "from-purple-600 to-purple-600" },
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
              onClick={() => scrollToSection('contact', 80)}
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

      {/* Enhanced CSS animations */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        .spark-shape {
          width: 100%;
          height: 100%;
          clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%);
          filter: drop-shadow(0 0 4px rgba(134, 102, 165, 0.6));
        }
        
        @keyframes spark-twinkle-1 {
          0%, 100% { 
            opacity: 0.4; 
            transform: scale(1) rotate(0deg);
          }
          50% { 
            opacity: 1; 
            transform: scale(1.3) rotate(45deg);
          }
        }
        
        @keyframes spark-twinkle-2 {
          0%, 100% { 
            opacity: 0.5; 
            transform: scale(1) rotate(0deg);
          }
          50% { 
            opacity: 0.9; 
            transform: scale(1.5) rotate(-30deg);
          }
        }
        
        @keyframes spark-twinkle-3 {
          0%, 100% { 
            opacity: 0.45; 
            transform: scale(1) rotate(15deg);
          }
          50% { 
            opacity: 0.95; 
            transform: scale(1.4) rotate(75deg);
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
        
        /* Performance Optimization */
        @media (prefers-reduced-motion: reduce) {
          .animate-spark-twinkle-1,
          .animate-spark-twinkle-2,
          .animate-spark-twinkle-3 {
            animation: none;
            transform: none;
          }
        }

        /* Pulse border animation for active cards */
        @keyframes pulse-border {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.02);
          }
        }

        /* Line clamp utility for text truncation */
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        /* Enhanced hover effects */
        .group:hover .group-hover\\:scale-125 {
          transform: scale(1.25) rotate(-6deg);
        }

        /* Mobile responsiveness improvements */
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
          
          .grid-cols-1 {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 1024px) {
          .xl\\:text-7xl {
            font-size: 4.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Services;