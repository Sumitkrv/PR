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
        { metric: "45%", description: "increase in online engagement" },
        { metric: "3.2M+", description: "social media impressions" },
        { metric: "68%", description: "boost in premium collection sales" }
      ],
      image: "", // Image placeholder - Add jewelry photo shoot image here
      category: "Jewelry Photography",
      duration: "2 months",
      highlight: true
    },
    {
      id: 2,
      title: "Cannes Film Festival Red Carpet Coverage",
      client: "International Fashion House",
      challenge: "Maximize brand visibility and prestige during Cannes Film Festival through strategic celebrity partnerships.",
      approach: "Orchestrated comprehensive Cannes coverage with celebrity styling, red carpet moments, and exclusive behind-the-scenes content creation.",
      results: [
        { metric: "15M", description: "global media reach" },
        { metric: "2.8M", description: "social media engagements" },
        { metric: "5", description: "A-list celebrity collaborations" }
      ],
      image: "", // Image placeholder - Add Cannes festival image here
      category: "Cannes Festival",
      duration: "1 month",
      highlight: true
    },
    {
      id: 3,
      title: "Celebrity Brand Ambassador Campaign",
      client: "Luxury Lifestyle Brand",
      challenge: "Establish authentic celebrity partnerships to elevate brand prestige and reach new demographics.",
      approach: "Curated strategic celebrity collaborations with genuine brand alignment, creating authentic content and memorable brand moments.",
      results: [
        { metric: "250%", description: "increase in brand mentions" },
        { metric: "₹12Cr", description: "earned media value" },
        { metric: "38%", description: "growth in target demographic reach" }
      ],
      image: "", // Image placeholder - Add celebrity collaboration image here
      category: "Celebrity Partnership",
      duration: "4 months",
      highlight: true
    },
    {
      id: 4,
      title: "Commercial Fashion Photography Series",
      client: "Fashion Retail Chain",
      challenge: "Create compelling commercial photography that drives both online and in-store sales across multiple product categories.",
      approach: "Developed comprehensive commercial photography strategy with lifestyle integration, model casting, and multi-channel content optimization.",
      results: [
        { metric: "52%", description: "increase in product page conversions" },
        { metric: "4.1M", description: "content views across platforms" },
        { metric: "31%", description: "improvement in campaign ROI" }
      ],
      image: "", // Image placeholder - Add commercial photography image here
      category: "Commercial Photography",
      duration: "3 months",
      highlight: false
    }
  ];

  return (
    <section 
      id="case-studies" 
      className="pb-12 sm:pb-16 lg:pb-20 relative overflow-hidden" 
      style={{ 
        paddingTop: 'clamp(5rem, 10vh, 7rem)', 
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
              <div className="relative overflow-hidden h-48 sm:h-56 lg:h-64">
                {study.image ? (
                  <img 
                    src={study.image} 
                    alt={study.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                ) : (
                  <div 
                    className="w-full h-full flex items-center justify-center text-white text-4xl sm:text-5xl lg:text-6xl font-bold"
                    style={{ background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)' }}
                  >
                    📸
                  </div>
                )}
                {study.highlight && (
                  <div 
                    className="absolute top-3 left-3 sm:top-4 sm:left-4 text-white text-xs font-bold px-2 py-1 sm:px-3 sm:py-1 rounded-full"
                    style={{ backgroundColor: '#8666A5' }}
                  >
                    Featured Results
                  </div>
                )}
                <div 
                  className="absolute bottom-3 left-3 sm:bottom-4 sm:left-4 text-white text-xs sm:text-sm font-medium px-2 py-1 sm:px-3 sm:py-1 rounded-full"
                  style={{ backgroundColor: '#8666A5' }}
                >
                  {study.client}
                </div>
              </div>
              
              {/* Content Section - Mobile Optimized */}
              <div className="p-4 sm:p-6">
                <div className="flex justify-between items-start mb-3 sm:mb-4">
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 leading-tight pr-2">{study.title}</h3>
                  <span className="bg-gray-100 text-gray-600 text-xs font-medium px-2 py-1 sm:px-2.5 sm:py-1 rounded flex-shrink-0">
                    {study.duration}
                  </span>
                </div>
                
                <div className="mb-3 sm:mb-4">
                  <span 
                    className="text-xs sm:text-sm font-semibold text-white px-2 py-1 sm:px-2.5 sm:py-1 rounded"
                    style={{ backgroundColor: 'rgba(134, 102, 165, 0.8)' }}
                  >
                    {study.category}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-4 text-sm sm:text-base leading-relaxed">
                  <span className="font-semibold">Challenge: </span>
                  {study.challenge}
                </p>
                
                {/* Results Grid - Mobile Optimized */}
                <div className="grid grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
                  {study.results.map((result, i) => (
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
                
                <button 
                  onClick={() => setActiveCaseStudy(study)}
                  className="w-full font-medium py-2 sm:py-2.5 rounded-lg transition-all duration-300 flex items-center justify-center text-sm sm:text-base"
                  style={{ 
                    background: 'linear-gradient(135deg, rgba(134, 102, 165, 0.1) 0%, rgba(134, 102, 165, 0.2) 100%)',
                    color: '#8666A5'
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, rgba(134, 102, 165, 0.2) 0%, rgba(134, 102, 165, 0.3) 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.background = 'linear-gradient(135deg, rgba(134, 102, 165, 0.1) 0%, rgba(134, 102, 165, 0.2) 100%)';
                  }}
                >
                  View Detailed Case Study
                  <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
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

      {/* Case Study Modal - Mobile Optimized */}
      {activeCaseStudy && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="relative h-48 sm:h-64 lg:h-80">
              {activeCaseStudy.image ? (
                <img 
                  src={activeCaseStudy.image} 
                  alt={activeCaseStudy.title}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div 
                  className="w-full h-full flex items-center justify-center text-white text-6xl sm:text-7xl lg:text-8xl"
                  style={{ background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)' }}
                >
                  📸
                </div>
              )}
              <button 
                onClick={() => setActiveCaseStudy(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
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
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {activeCaseStudy.results.map((result, i) => (
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