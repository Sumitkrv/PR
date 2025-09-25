import React, { useState, useEffect, useRef } from "react";

const WhyPRSparkz = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
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

  return (
    <section 
      id="why-pr-sparkz" 
      ref={sectionRef}
      className="py-16 md:py-24 bg-gradient-to-br from-gray-50 via-purple-50 to-purple-100 relative overflow-hidden"
      aria-label="Why Choose PR Sparkz"
    >
      {/* Enhanced Background Elements */}
      <div className="absolute top-10 left-2 md:left-10 w-16 h-16 md:w-32 md:h-32 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>
      <div className="absolute top-32 right-2 md:right-20 w-12 h-12 md:w-24 md:h-24 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-40 animate-float-delayed"></div>
      <div className="absolute bottom-40 left-1/4 w-16 h-16 md:w-28 md:h-28 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-25 animate-float-slow"></div>
      <div className="absolute bottom-20 right-10 w-20 h-20 md:w-16 md:h-16 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-float"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Why PR Sparkz Section */}
        <div className={`transition-all duration-700 delay-200 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-3 md:mb-4">Why PR Sparkz</h2>
            <p className="text-gray-600 max-w-4xl mx-auto text-sm md:text-base lg:text-lg px-2 leading-relaxed">
              We craft data-driven, AI-powered strategies that spark visibility, growth, and engagement—because your brand's success is ours.
            </p>
            <div className="w-20 md:w-28 h-0.5 md:h-1 bg-gradient-to-r from-purple-400 to-purple-600 mx-auto mt-4 rounded-full" style={{background: 'linear-gradient(to right, #a78bfa, #64419a)'}}></div>
          </div>

          {/* Statistics Cards */}
          <div className="grid md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-12">
            {[
              {
                icon: "📈",
                title: "+127%",
                subtitle: "Growth in Engagement",
                description: "Our strategic approach delivers measurable results that exceed industry benchmarks."
              },
              {
                icon: "🎯",
                title: "+89%",
                subtitle: "Improvement in Consistency",
                description: "Streamlined brand messaging across all channels ensures maximum impact."
              },
              {
                icon: "⚡",
                title: "3x",
                subtitle: "Faster Execution with AI",
                description: "Advanced AI tools accelerate campaign delivery without compromising quality."
              }
            ].map((stat, index) => (
              <div 
                key={index} 
                className="group bg-white p-6 md:p-8 rounded-xl md:rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 relative overflow-hidden text-center"
              >
                {/* Gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50 to-purple-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl md:rounded-2xl"></div>
                
                <div className="relative z-10">
                  <div className="flex flex-col items-center mb-4">
                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-purple-100 to-purple-200 rounded-full flex items-center justify-center text-2xl md:text-3xl mb-3 group-hover:scale-110 transition-transform duration-300" style={{background: 'linear-gradient(135deg, #e9d5ff, #c4b5fd)'}}>
                      {stat.icon}
                    </div>
                    <div className="text-2xl md:text-3xl lg:text-4xl font-bold text-purple-600 mb-1" style={{color: '#64419a'}}>
                      {stat.title}
                    </div>
                    <h3 className="font-bold text-gray-800 text-sm md:text-base lg:text-lg mb-2 group-hover:text-purple-700 transition-colors duration-300">
                      {stat.subtitle}
                    </h3>
                  </div>
                  <p className="text-gray-600 text-xs md:text-sm lg:text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {stat.description}
                  </p>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-purple-200 to-purple-300 rounded-full opacity-20 -translate-y-8 translate-x-8 group-hover:opacity-30 transition-opacity duration-300"></div>
              </div>
            ))}
          </div>

          {/* Achievement Banner */}
          <div className="bg-gradient-to-r from-purple-100 to-purple-200 rounded-xl md:rounded-2xl p-6 md:p-8 mb-8 md:mb-12 text-center relative overflow-hidden" style={{background: 'linear-gradient(to right, #f3e8ff, #e9d5ff)'}}>
            <div className="relative z-10">
              <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full mb-4" style={{background: 'linear-gradient(135deg, #8b5cf6, #64419a)'}}>
                <span className="text-white text-2xl md:text-3xl">🏆</span>
              </div>
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-800 mb-2">
                Proven record of transforming brands into category leaders
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                Our strategic approach and innovative solutions have consistently elevated brands to market leadership positions across diverse industries.
              </p>
            </div>
            
            {/* Background decoration */}
            <div className="absolute top-4 left-4 w-8 h-8 bg-purple-300 rounded-full opacity-30"></div>
            <div className="absolute bottom-4 right-4 w-12 h-12 bg-purple-400 rounded-full opacity-20"></div>
            <div className="absolute top-1/2 right-8 w-6 h-6 bg-purple-500 rounded-full opacity-25 transform -translate-y-1/2"></div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center bg-gradient-to-r from-purple-600 to-purple-700 rounded-xl md:rounded-2xl p-6 md:p-8 text-white relative overflow-hidden" style={{background: 'linear-gradient(to right, #64419a, #553c8b)'}}>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-400/10 to-purple-400/10 backdrop-blur-sm"></div>
            <div className="relative z-10">
              <h3 className="text-lg md:text-xl lg:text-2xl font-bold mb-2 md:mb-3">Ready to grow smarter?</h3>
              <p className="text-base md:text-lg opacity-90 max-w-2xl mx-auto mb-4 md:mb-6 leading-relaxed font-medium">
                Let's spark it together.
              </p>
              <div className="flex flex-col sm:flex-row gap-2 md:gap-3 justify-center">
                <button className="group bg-white text-purple-700 px-6 py-3 md:px-8 md:py-4 rounded-lg font-semibold hover:bg-gray-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center text-sm md:text-base" style={{color: '#64419a'}}>
                  <span>Let's Spark It Together</span>
                  <svg className="w-5 h-5 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                  </svg>
                </button>
              </div>
            </div>
            
            {/* Spark decoration */}
            <div className="absolute top-4 right-4 w-6 h-6 text-yellow-300 opacity-60">✨</div>
            <div className="absolute bottom-6 left-6 w-4 h-4 text-yellow-200 opacity-40">⚡</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyPRSparkz;