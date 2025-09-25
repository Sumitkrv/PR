import React, { useState, useEffect } from 'react';

const CaseStudies = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Case study data with focus on jewelry, Cannes, and celebrity work
  const caseStudies = [
    {
      id: 1,
      title: "Luxury Jewelry Photo Shoot Campaign",
      client: "Premium Jewelry Brand",
      challenge: "Create stunning visual content for high-end jewelry collection launch targeting affluent customers.",
      approach: "Conceptualized and executed premium jewelry photography with dramatic lighting, elegant styling, and sophisticated composition to showcase craftsmanship.",
      results: [
        { metric: "68%", description: "boost in premium collection sales", highlight: true },
        { metric: "3.2M+", description: "social media impressions" },
        { metric: "45%", description: "increase in online engagement" }
      ],
      image: "", 
      category: "Jewelry Photography",
      duration: "2 months",
      highlight: true,
      gradientColors: ["#FFD700", "#FFA500", "#FF6B35"],
      icon: "💎"
    },
    {
      id: 2,
      title: "Cannes Film Festival Red Carpet Coverage",
      client: "International Fashion House",
      challenge: "Maximize brand visibility and prestige during Cannes Film Festival through strategic celebrity partnerships.",
      approach: "Orchestrated comprehensive Cannes coverage with celebrity styling, red carpet moments, and exclusive behind-the-scenes content creation.",
      results: [
        { metric: "15M", description: "global media reach", highlight: true },
        { metric: "2.8M", description: "social media engagements" },
        { metric: "5", description: "A-list celebrity collaborations" }
      ],
      image: "", 
      category: "Cannes Festival",
      duration: "1 month",
      highlight: true,
      gradientColors: ["#FF6B6B", "#4ECDC4", "#45B7D1"],
      icon: "🎬"
    },
    {
      id: 3,
      title: "Celebrity Brand Ambassador Campaign",
      client: "Luxury Lifestyle Brand",
      challenge: "Establish authentic celebrity partnerships to elevate brand prestige and reach new demographics.",
      approach: "Curated strategic celebrity collaborations with genuine brand alignment, creating authentic content and memorable brand moments.",
      results: [
        { metric: "₹12Cr", description: "earned media value", highlight: true },
        { metric: "250%", description: "increase in brand mentions" },
        { metric: "38%", description: "growth in target demographic reach" }
      ],
      image: "", 
      category: "Celebrity Partnership",
      duration: "4 months",
      highlight: true,
      gradientColors: ["#667eea", "#764ba2", "#f093fb"],
      icon: "⭐"
    },
    {
      id: 4,
      title: "Commercial Fashion Photography Series",
      client: "Fashion Retail Chain",
      challenge: "Create compelling commercial photography that drives both online and in-store sales across multiple product categories.",
      approach: "Developed comprehensive commercial photography strategy with lifestyle integration, model casting, and multi-channel content optimization.",
      results: [
        { metric: "52%", description: "increase in product page conversions", highlight: true },
        { metric: "4.1M", description: "content views across platforms" },
        { metric: "31%", description: "improvement in campaign ROI" }
      ],
      image: "", 
      category: "Commercial Photography",
      duration: "3 months",
      highlight: false,
      gradientColors: ["#a8edea", "#fed6e3", "#d299c2"],
      icon: "📸"
    }
  ];

  return (
    <section 
      id="case-studies" 
      className="py-12 sm:py-16 lg:py-20 relative overflow-hidden" 
      style={{ 
        paddingTop: '160px', 
        scrollMarginTop: '120px',
        background: 'linear-gradient(135deg, #f8f6ff 0%, #ffffff 100%)'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header - Mobile Optimized */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Impact <span 
              className="bg-clip-text text-transparent"
              style={{ 
                background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}
            >Case Studies</span>
          </h2>
          <div 
            className="w-16 sm:w-20 h-1 mx-auto mb-6"
            style={{ background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)' }}
          ></div>
          <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto px-4">
            Discover how our strategic creative solutions delivered measurable business results for clients across industries
          </p>
        </div>

        {/* Case Studies Grid - Mobile Optimized */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-12 sm:mb-16">
          {caseStudies.map((study, index) => (
            <div 
              key={study.id} 
              className={`bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                border: '1px solid rgba(134, 102, 165, 0.1)',
                willChange: 'transform'
              }}
            >
              {/* Image Section - Mobile Optimized */}
              <div className="relative overflow-hidden h-48 sm:h-56 lg:h-64 group">
                {study.image ? (
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                  />
                ) : (
                  <div 
                    className="w-full h-full flex items-center justify-center text-white relative overflow-hidden"
                    style={{ 
                      background: `linear-gradient(135deg, ${study.gradientColors[0]} 0%, ${study.gradientColors[1]} 50%, ${study.gradientColors[2]} 100%)`,
                      position: 'relative'
                    }}
                  >
                    {/* Pattern overlay for texture */}
                    <div 
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                        backgroundSize: '20px 20px'
                      }}
                    ></div>
                    
                    {/* Main icon */}
                    <div className="text-4xl sm:text-5xl lg:text-6xl font-bold relative z-10">
                      {study.icon}
                    </div>
                    
                    {/* Floating elements for visual interest */}
                    <div className="absolute top-4 right-4 text-2xl opacity-30 animate-pulse">
                      {study.icon}
                    </div>
                    <div className="absolute bottom-4 left-4 text-xl opacity-20 animate-bounce">
                      {study.icon}
                    </div>
                    
                    {/* Overlay for better text readability */}
                    <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                  </div>
                )}
                
                {/* Featured badge */}
                {study.highlight && (
                  <div 
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 text-white text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 rounded-full backdrop-blur-sm"
                    style={{ backgroundColor: 'rgba(134, 102, 165, 0.9)' }}
                  >
                    ⭐ Featured Project
                  </div>
                )}
                
                {/* Client badge */}
                <div 
                  className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white text-xs sm:text-sm font-medium px-2 py-1 sm:px-3 sm:py-1 rounded-full backdrop-blur-sm"
                  style={{ backgroundColor: 'rgba(0, 0, 0, 0.7)' }}
                >
                  {study.client}
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="text-white font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                    <div className="text-sm">Click to view details</div>
                    <div className="text-xs mt-1 opacity-80">{study.category}</div>
                  </div>
                </div>
              </div>
              
              {/* Content Section - Mobile Optimized with Results-First Layout */}
              <div className="p-4 sm:p-6">
                {/* Header with title and category */}
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <div className="flex-1 pr-2">
                    <div className="mb-2">
                      <span 
                        className="text-xs sm:text-sm font-semibold text-white px-2 py-1 sm:px-2.5 sm:py-1 rounded-full"
                        style={{ backgroundColor: 'rgba(134, 102, 165, 0.8)' }}
                      >
                        {study.category}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight">{study.title}</h3>
                  </div>
                  <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 sm:px-2.5 sm:py-1 rounded flex-shrink-0">
                    {study.duration}
                  </span>
                </div>
                
                {/* Challenge summary - brief */}
                <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                  <span className="font-semibold text-gray-800">Challenge: </span>
                  {study.challenge.length > 120 ? study.challenge.substring(0, 120) + '...' : study.challenge}
                </p>
                
                {/* Results Grid - Mobile Optimized with Enhanced Impact */}
                <div className="mb-4 sm:mb-6">
                  {/* Primary impact metric - highlighted */}
                  <div 
                    className="p-3 sm:p-4 rounded-xl mb-3 text-center"
                    style={{ 
                      background: 'linear-gradient(135deg, rgba(134, 102, 165, 0.1) 0%, rgba(134, 102, 165, 0.2) 100%)',
                      border: '2px solid rgba(134, 102, 165, 0.3)'
                    }}
                  >
                    <div className="flex items-center justify-center mb-2">
                      <span className="text-xs font-semibold text-gray-600 mr-2">KEY IMPACT</span>
                      <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#8666A5' }}></div>
                    </div>
                    <div 
                      className="text-2xl sm:text-3xl font-bold mb-1"
                      style={{ color: '#8666A5' }}
                    >
                      {study.results.find(r => r.highlight)?.metric || study.results[0].metric}
                    </div>
                    <div className="text-sm font-medium text-gray-700">
                      {study.results.find(r => r.highlight)?.description || study.results[0].description}
                    </div>
                  </div>
                  
                  {/* Secondary metrics */}
                  <div className="grid grid-cols-2 gap-3">
                    {study.results.filter(r => !r.highlight).map((result, i) => (
                      <div 
                        key={i} 
                        className="text-center p-2 sm:p-3 rounded-lg"
                        style={{ backgroundColor: 'rgba(134, 102, 165, 0.05)' }}
                      >
                        <div 
                          className="text-lg sm:text-xl font-bold"
                          style={{ color: '#8666A5' }}
                        >{result.metric}</div>
                        <div className="text-xs text-gray-600 mt-1 leading-tight">{result.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <button 
                  onClick={() => setActiveCaseStudy(study)}
                  className="w-full font-medium py-3 sm:py-3.5 rounded-lg transition-all duration-300 flex items-center justify-center text-sm sm:text-base group hover:transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(134, 102, 165, 0.9) 0%, rgba(134, 102, 165, 1) 100%)',
                    color: 'white',
                    boxShadow: '0 4px 15px rgba(134, 102, 165, 0.2)'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, rgba(107, 77, 122, 0.9) 0%, rgba(107, 77, 122, 1) 100%)';
                    e.target.style.boxShadow = '0 8px 25px rgba(134, 102, 165, 0.4)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, rgba(134, 102, 165, 0.9) 0%, rgba(134, 102, 165, 1) 100%)';
                    e.target.style.boxShadow = '0 4px 15px rgba(134, 102, 165, 0.2)';
                  }}
                >
                  <span className="mr-2">View Full Case Study</span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Results Summary Section - Mobile Optimized */}
        <div 
          className={`rounded-2xl p-6 sm:p-8 lg:p-12 text-white mb-12 sm:mb-16 transition-all duration-700 delay-300 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
          style={{ background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)' }}
        >
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">Our Impact By Numbers</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">150+</div>
              <div className="text-xs sm:text-sm lg:text-base">Successful Campaigns</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">₹320Cr+</div>
              <div className="text-xs sm:text-sm lg:text-base">Revenue Generated</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">85%</div>
              <div className="text-xs sm:text-sm lg:text-base">Client Retention Rate</div>
            </div>
            <div className="text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-1 sm:mb-2">12</div>
              <div className="text-xs sm:text-sm lg:text-base">Industry Awards</div>
            </div>
          </div>
        </div>

        {/* CTA Section - Mobile Optimized */}
        <div className={`text-center transition-all duration-700 delay-500 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-800 mb-4 sm:mb-6 px-4">Ready to achieve similar results?</h3>
          <p className="text-gray-600 max-w-2xl mx-auto mb-6 sm:mb-8 text-sm sm:text-base px-4">
            Let's discuss how our strategic approach can drive measurable growth for your brand.
          </p>
          <button 
            className="text-white px-6 py-3 sm:px-8 sm:py-3 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 text-sm sm:text-base"
            style={{ 
              background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)',
              willChange: 'transform'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #6b4d7a 0%, #5a3f68 100%)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)';
            }}
          >
            Schedule a Strategy Session
          </button>
        </div>
      </div>

      {/* Case Study Modal - Mobile Optimized with Enhanced Visuals */}
      {activeCaseStudy && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center p-4 z-50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl">
            <div className="relative h-48 sm:h-64 lg:h-80">
              {activeCaseStudy.image ? (
                <img 
                  src={activeCaseStudy.image} 
                  alt={activeCaseStudy.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div 
                  className="w-full h-full flex items-center justify-center text-white relative overflow-hidden"
                  style={{ 
                    background: `linear-gradient(135deg, ${activeCaseStudy.gradientColors[0]} 0%, ${activeCaseStudy.gradientColors[1]} 50%, ${activeCaseStudy.gradientColors[2]} 100%)`
                  }}
                >
                  {/* Pattern overlay for texture */}
                  <div 
                    className="absolute inset-0 opacity-10"
                    style={{
                      backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255,255,255,0.3) 1px, transparent 0)`,
                      backgroundSize: '20px 20px'
                    }}
                  ></div>
                  
                  <div className="text-6xl sm:text-7xl lg:text-8xl relative z-10">
                    {activeCaseStudy.icon}
                  </div>
                  
                  {/* Floating elements */}
                  <div className="absolute top-6 right-6 text-3xl opacity-20 animate-pulse">
                    {activeCaseStudy.icon}
                  </div>
                  <div className="absolute bottom-6 left-6 text-2xl opacity-20 animate-bounce">
                    {activeCaseStudy.icon}
                  </div>
                </div>
              )}
              <button 
                onClick={() => setActiveCaseStudy(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white text-gray-800 p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors hover:shadow-xl"
              >
                <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
              </button>
            </div>
            
            <div className="p-4 sm:p-6 lg:p-8">
              <div className="flex flex-wrap gap-2 mb-4">
                <span 
                  className="text-white text-sm font-medium px-3 py-1 rounded-full"
                  style={{ backgroundColor: '#8666A5' }}
                >
                  {activeCaseStudy.client}
                </span>
                <span className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                  {activeCaseStudy.category}
                </span>
                <span className="bg-gray-100 text-gray-700 text-sm font-medium px-3 py-1 rounded-full">
                  {activeCaseStudy.duration}
                </span>
              </div>
              
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">{activeCaseStudy.title}</h3>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">The Challenge</h4>
                <p className="text-gray-600">{activeCaseStudy.challenge}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-2">Our Approach</h4>
                <p className="text-gray-600">{activeCaseStudy.approach}</p>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Results Delivered</h4>
                
                {/* Highlight primary result */}
                <div 
                  className="p-4 rounded-xl mb-4 text-center"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(134, 102, 165, 0.1) 0%, rgba(134, 102, 165, 0.2) 100%)',
                    border: '2px solid rgba(134, 102, 165, 0.3)'
                  }}
                >
                  <div className="flex items-center justify-center mb-2">
                    <span className="text-sm font-semibold text-gray-600 mr-2">PRIMARY IMPACT</span>
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#8666A5' }}></div>
                  </div>
                  <div 
                    className="text-3xl font-bold mb-2"
                    style={{ color: '#8666A5' }}
                  >
                    {activeCaseStudy.results.find(r => r.highlight)?.metric || activeCaseStudy.results[0].metric}
                  </div>
                  <div className="text-base font-medium text-gray-700">
                    {activeCaseStudy.results.find(r => r.highlight)?.description || activeCaseStudy.results[0].description}
                  </div>
                </div>
                
                {/* Secondary results */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {activeCaseStudy.results.filter(r => !r.highlight).map((result, i) => (
                    <div 
                      key={i} 
                      className="p-4 rounded-lg text-center"
                      style={{ backgroundColor: 'rgba(134, 102, 165, 0.05)' }}
                    >
                      <div 
                        className="text-2xl font-bold mb-1"
                        style={{ color: '#8666A5' }}
                      >{result.metric}</div>
                      <div className="text-sm text-gray-600">{result.description}</div>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="border-t border-gray-200 pt-6">
                <h4 className="text-lg font-semibold text-gray-800 mb-4">Interested in similar results?</h4>
                <button 
                  className="text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-300"
                  style={{ background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)' }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #6b4d7a 0%, #5a3f68 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)';
                  }}
                >
                  Contact Our Team
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CaseStudies;