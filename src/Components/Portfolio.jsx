import React, { useState, useEffect, useRef, useMemo } from 'react';

const CaseStudies = () => {
  const [activeCaseStudy, setActiveCaseStudy] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedGalleryImage, setSelectedGalleryImage] = useState(0);
  const [imageStatus, setImageStatus] = useState({});
  const [isLoading, setIsLoading] = useState({});
  const [touchStart, setTouchStart] = useState(null);
  const modalRef = useRef();
  
  useEffect(() => {
    setIsVisible(true);
    
    // Pre-check image availability
    caseStudiesData.forEach(async (study) => {
      const imageExists = await checkImageExists(study.image);
      setImageStatus(prev => ({...prev, [study.id]: imageExists}));
    });
  }, []);

  // Keyboard accessibility for modal
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && activeCaseStudy) {
        setActiveCaseStudy(null);
      }
    };

    const handleClickOutside = (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        setActiveCaseStudy(null);
      }
    };

    if (activeCaseStudy) {
      document.addEventListener('keydown', handleEscape);
      document.addEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'hidden'; // Prevent background scroll
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('mousedown', handleClickOutside);
      document.body.style.overflow = 'unset';
    };
  }, [activeCaseStudy]);

  // Helper function to check if image exists
  const checkImageExists = async (url) => {
    if (!url) return false;
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url;
    });
  };

  // Touch gesture handlers for mobile gallery
  const handleTouchStart = (e) => {
    setTouchStart(e.touches[0].clientX);
  };

  const handleTouchEnd = (e) => {
    if (!touchStart || !activeCaseStudy || !activeCaseStudy.gallery) return;
    
    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        // Swipe left - next image
        setSelectedGalleryImage(prev => 
          prev < activeCaseStudy.gallery.length - 1 ? prev + 1 : 0
        );
      } else {
        // Swipe right - previous image
        setSelectedGalleryImage(prev => 
          prev > 0 ? prev - 1 : activeCaseStudy.gallery.length - 1
        );
      }
    }
    setTouchStart(null);
  };

  // Image component with fallback
  const ImageWithFallback = ({ src, alt, fallback, className, onLoad, ...props }) => {
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(true);

    const handleError = () => {
      setError(true);
      setLoading(false);
    };

    const handleLoad = () => {
      setLoading(false);
      onLoad?.();
    };

    if (error) {
      return fallback || (
        <div className={`flex items-center justify-center bg-gray-100 ${className}`}>
          <div className="text-center">
            <span className="text-4xl mb-2 block">
              {alt.includes('Jewelry') ? '💍' : 
               alt.includes('Cannes') ? '🎬' :
               alt.includes('Celebrity') ? '⭐' : '📸'}
            </span>
            <span className="text-gray-400 text-sm">Image not available</span>
          </div>
        </div>
      );
    }

    return (
      <div className={`relative ${className}`}>
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-500"></div>
          </div>
        )}
        <img 
          src={src} 
          alt={alt}
          className={`${className} ${loading ? 'opacity-0' : 'opacity-100'} transition-opacity duration-300`}
          onError={handleError}
          onLoad={handleLoad}
          loading="lazy"
          {...props}
        />
      </div>
    );
  };

  // Case study data with focus on jewelry, Cannes, and celebrity work
  const caseStudiesData = [
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
      image: "/images/portfolio/jewelry/image32.jpeg",
      category: "Jewelry Photography",
      gallery: [
        "/images/portfolio/jewelry/image29.jpeg",
        "/images/portfolio/jewelry/image30.jpeg",
        "/images/portfolio/jewelry/image31.jpeg",
        "/images/portfolio/jewelry/image32.jpeg",
        "/images/portfolio/jewelry/image33.jpeg",
        "/images/portfolio/jewelry/image34.jpeg",
        "/images/portfolio/jewelry/image35.jpeg",
        "/images/portfolio/jewelry/image36.jpeg",
        "/images/portfolio/jewelry/image37.jpeg",
        "/images/portfolio/jewelry/image38.jpeg",
        "/images/portfolio/jewelry/image39.jpeg"
      ],
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
      image: "/images/portfolio/cannes/image45.jpeg",
      category: "Cannes Festival",
      gallery: [
        "/images/portfolio/cannes/image43.jpeg",
        "/images/portfolio/cannes/image44.jpeg",
        "/images/portfolio/cannes/image45.jpeg",
        "/images/portfolio/cannes/image46.jpeg",
        "/images/portfolio/cannes/image47.jpeg"
      ],
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
      image: "/images/portfolio/celebrity/image49.jpeg",
      category: "Celebrity Partnership",
      gallery: [
        "/images/portfolio/celebrity/image48.jpeg",
        "/images/portfolio/celebrity/image49.jpeg",
        "/images/portfolio/celebrity/image50.jpeg",
        "/images/portfolio/celebrity/image51.jpeg"
      ],
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
      image: "/images/portfolio/commercial/image66.png",
      category: "Commercial Photography",
      gallery: [
        "/images/portfolio/commercial/image64.png",
        "/images/portfolio/commercial/image65.png",
        "/images/portfolio/commercial/image66.png",
        "/images/portfolio/commercial/image67.png",
        "/images/portfolio/commercial/image68.png",
        "/images/portfolio/commercial/image69.png",
        "/images/portfolio/commercial/image70.jpeg",
        "/images/portfolio/commercial/image71.jpeg",
        "/images/portfolio/commercial/image72.jpeg"
      ],
      duration: "3 months",
      highlight: false
    }
  ];

  // Memoize case studies data
  const caseStudies = useMemo(() => caseStudiesData, []);

  return (
    <section 
      id="case-studies" 
      className="pb-12 sm:pb-16 lg:pb-20 relative overflow-hidden" 
      style={{ 
        paddingTop: 'clamp(7rem, 20vw, 10rem)',
        scrollMarginTop: '100px',
        background: 'linear-gradient(135deg, #f8f6ff 0%, #ffffff 100%)'
      }}
    >
      {/* Structured Data for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "name": "Photography Case Studies",
            "description": "Professional photography case studies showcasing successful campaigns",
            "numberOfItems": caseStudies.length,
            "itemListElement": caseStudies.map((study, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "item": {
                "@type": "CreativeWork",
                "name": study.title,
                "description": study.challenge,
                "datePublished": "2024-01-01"
              }
            }))
          })
        }}
      />

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
              {/* Image Section */}
              <div className="relative overflow-hidden h-48 sm:h-56 lg:h-64">
                <ImageWithFallback
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-contain p-2 bg-gray-100"
                  fallback={
                    <div 
                      className="w-full h-full flex items-center justify-center text-white text-4xl sm:text-5xl lg:text-6xl font-bold"
                      style={{ 
                        background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)'
                      }}
                    >
                      {study.category === 'Jewelry Photography' ? '💍' : 
                       study.category === 'Cannes Festival' ? '🎬' :
                       study.category === 'Celebrity Partnership' ? '⭐' : '📸'}
                    </div>
                  }
                />
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
              
              {/* Content Section */}
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
                
                {/* Results Grid */}
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
                  onClick={() => {
                    setActiveCaseStudy(study);
                    setSelectedGalleryImage(0);
                  }}
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

        {/* Results Summary Section */}
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
      </div>

      {/* Case Study Modal */}
      {activeCaseStudy && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div 
            ref={modalRef}
            className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <div className="relative h-48 sm:h-64 lg:h-80">
              {activeCaseStudy.gallery && activeCaseStudy.gallery.length > 0 ? (
                <div className="relative w-full h-full bg-gray-100">
                  <ImageWithFallback
                    src={activeCaseStudy.gallery[selectedGalleryImage]}
                    alt={`${activeCaseStudy.title} - Image ${selectedGalleryImage + 1}`}
                    className="w-full h-full object-contain p-4"
                    fallback={
                      <div 
                        className="w-full h-full flex items-center justify-center text-white text-6xl"
                        style={{ 
                          background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)'
                        }}
                      >
                        {activeCaseStudy.category === 'Jewelry Photography' ? '💍' : 
                         activeCaseStudy.category === 'Cannes Festival' ? '🎬' :
                         activeCaseStudy.category === 'Celebrity Partnership' ? '⭐' : '📸'}
                      </div>
                    }
                  />
                  {activeCaseStudy.gallery.length > 1 && (
                    <>
                      <button 
                        onClick={() => setSelectedGalleryImage(prev => 
                          prev > 0 ? prev - 1 : activeCaseStudy.gallery.length - 1
                        )}
                        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
                        aria-label="Previous image"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                        </svg>
                      </button>
                      <button 
                        onClick={() => setSelectedGalleryImage(prev => 
                          prev < activeCaseStudy.gallery.length - 1 ? prev + 1 : 0
                        )}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-all z-10"
                        aria-label="Next image"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                        </svg>
                      </button>
                      <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm z-10">
                        {selectedGalleryImage + 1} / {activeCaseStudy.gallery.length}
                      </div>
                    </>
                  )}
                </div>
              ) : (
                <ImageWithFallback
                  src={activeCaseStudy.image}
                  alt={activeCaseStudy.title}
                  className="w-full h-full object-contain p-4 bg-gray-100"
                  fallback={
                    <div 
                      className="w-full h-full flex items-center justify-center text-white text-6xl"
                      style={{ 
                        background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)'
                      }}
                    >
                      {activeCaseStudy.category === 'Jewelry Photography' ? '💍' : 
                       activeCaseStudy.category === 'Cannes Festival' ? '🎬' :
                       activeCaseStudy.category === 'Celebrity Partnership' ? '⭐' : '📸'}
                    </div>
                  }
                />
              )}
              <button 
                onClick={() => setActiveCaseStudy(null)}
                className="absolute top-3 right-3 sm:top-4 sm:right-4 bg-white text-gray-800 p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors z-20"
                aria-label="Close modal"
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
              
              {/* Gallery Thumbnails */}
              {activeCaseStudy.gallery && activeCaseStudy.gallery.length > 0 && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-800 mb-4">
                    Photo Gallery ({activeCaseStudy.gallery.length} images)
                  </h4>
                  <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
                    {activeCaseStudy.gallery.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setSelectedGalleryImage(index)}
                        className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          selectedGalleryImage === index 
                            ? 'border-purple-500 ring-2 ring-purple-200' 
                            : 'border-gray-200 hover:border-purple-300'
                        }`}
                        aria-label={`View image ${index + 1}`}
                      >
                        <ImageWithFallback
                          src={image}
                          alt={`Gallery image ${index + 1}`}
                          className="w-full h-full object-cover"
                          fallback={
                            <div className="w-full h-full flex items-center justify-center bg-gray-100">
                              <span className="text-2xl">
                                {activeCaseStudy.category === 'Jewelry Photography' ? '💍' : 
                                 activeCaseStudy.category === 'Cannes Festival' ? '🎬' :
                                 activeCaseStudy.category === 'Celebrity Partnership' ? '⭐' : '📸'}
                              </span>
                            </div>
                          }
                        />
                        {selectedGalleryImage === index && (
                          <div className="absolute inset-0 bg-purple-500 bg-opacity-20 flex items-center justify-center">
                            <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                            </svg>
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CaseStudies;