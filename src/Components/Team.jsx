import React, { useState, useEffect } from 'react';
import { FaLinkedin, FaTwitter, FaInstagram, FaDribbble, FaEnvelope, FaArrowRight, FaQuoteLeft } from 'react-icons/fa';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeMember, setActiveMember] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    // Check if mobile on initial render and window resize
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Sarah Johnson",
      role: "CEO & Founder",
      bio: "10+ years of experience in public relations and brand management. Passionate about helping brands tell their stories.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      social: [FaLinkedin, FaTwitter, FaEnvelope],
      skills: ["Strategy", "Leadership", "Branding"],
      quote: "Your brand is a story unfolding across all customer touchpoints."
    },
    {
      id: 2,
      name: "Michael Chen",
      role: "Creative Director",
      bio: "Award-winning designer with a passion for storytelling through visuals and immersive experiences.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      social: [FaLinkedin, FaDribbble, FaEnvelope],
      skills: ["Design", "Art Direction", "UX/UI"],
      quote: "Design is not just what it looks like, it's how it works and feels."
    },
    {
      id: 3,
      name: "Emily Rodriguez",
      role: "PR Strategist",
      bio: "Specializes in crisis management and media relationships with a focus on tech and healthcare industries.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      social: [FaLinkedin, FaInstagram, FaEnvelope],
      skills: ["PR", "Crisis Management", "Media Relations"],
      quote: "In a world of noise, the right message at the right time stands out."
    },
    {
      id: 4,
      name: "David Kim",
      role: "Content Manager",
      bio: "Expert in creating compelling narratives across multiple platforms with a data-driven approach.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      social: [FaLinkedin, FaTwitter, FaEnvelope],
      skills: ["Content Strategy", "Copywriting", "SEO"],
      quote: "Content is the bridge between your brand and your audience."
    },
    {
      id: 5,
      name: "Jessica Williams",
      role: "Social Media Expert",
      bio: "Grew audience engagement by 300% for previous clients through innovative social strategies.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      social: [FaLinkedin, FaInstagram, FaEnvelope],
      skills: ["Social Strategy", "Community Management", "Analytics"],
      quote: "Social media is about the people, not just the platforms."
    },
    {
      id: 6,
      name: "Alex Turner",
      role: "Analytics Specialist",
      bio: "Turns data into actionable insights for campaign optimization and performance measurement.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      social: [FaLinkedin, FaTwitter, FaEnvelope],
      skills: ["Data Analysis", "ROI Measurement", "KPI Tracking"],
      quote: "What gets measured gets managed, and what gets managed gets improved."
    }
  ];

  return (
    <section 
      id="team"
      className="py-12 sm:py-16 lg:py-20 px-4 lg:px-8 min-h-screen flex items-center relative overflow-hidden" 
      style={{ 
        paddingTop: '100px', 
        scrollMarginTop: '80px',
        background: 'linear-gradient(135deg, #f8f6ff 0%, #ffffff 100%)'
      }}
    >
      {/* Optimized Decorative elements */}
      <div 
        className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-15"
        style={{ backgroundColor: '#8666A5' }}
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full translate-x-1/3 translate-y-1/3 opacity-15"
        style={{ backgroundColor: '#8666A5' }}
      ></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header - Mobile Optimized */}
        <div className={`text-center mb-12 sm:mb-16 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <div 
            className="w-20 sm:w-24 h-1 mx-auto mb-6"
            style={{ backgroundColor: '#8666A5' }}
          ></div>
          <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto px-4">
            Talented professionals dedicated to elevating your brand with innovative strategies and creative solutions.
          </p>
        </div>
        
        {/* Team Grid - Improved Mobile Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className={`bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 group relative ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                border: '1px solid rgba(134, 102, 165, 0.1)',
                willChange: 'transform' // Optimize for animations
              }}
              onMouseEnter={() => !isMobile && setActiveMember(member.id)}
              onMouseLeave={() => !isMobile && setActiveMember(null)}
            >
              {/* Avatar - Mobile Optimized */}
              <div className="avatar-container w-20 h-20 sm:w-24 sm:h-24 lg:w-28 lg:h-28 mx-auto mb-4 sm:mb-6 relative">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-white shadow-lg">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="avatar-badge absolute bottom-1 right-1 sm:bottom-2 sm:right-2 w-3 h-3 sm:w-4 sm:h-4 rounded-full bg-green-500 border-2 border-white"></div>
              </div>
              
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900 text-center mb-2">{member.name}</h3>
              <p 
                className="text-center mb-3 sm:mb-4 text-sm sm:text-base"
                style={{ color: '#8666A5' }}
              >{member.role}</p>
              
              {/* Skills - Mobile Optimized */}
              <div className="flex justify-center flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                {member.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 text-xs rounded-full"
                    style={{ 
                      backgroundColor: 'rgba(134, 102, 165, 0.1)', 
                      color: '#8666A5' 
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 text-xs sm:text-sm text-center mb-4 sm:mb-6 min-h-[60px] sm:min-h-[72px] leading-relaxed">{member.bio}</p>
              
              {/* Social Icons - Mobile Optimized */}
              <div className="social-icons flex justify-center space-x-3 sm:space-x-4 opacity-100 md:opacity-0 md:translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                {member.social.map((SocialIcon, i) => (
                  <a 
                    key={i}
                    href="#" 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-colors flex items-center justify-center"
                    style={{ 
                      backgroundColor: 'rgba(134, 102, 165, 0.1)',
                      color: '#8666A5'
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.backgroundColor = 'rgba(134, 102, 165, 0.2)';
                      e.target.style.color = '#6b4d7a';
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.backgroundColor = 'rgba(134, 102, 165, 0.1)';
                      e.target.style.color = '#8666A5';
                    }}
                  >
                    <SocialIcon className="text-xs sm:text-sm" />
                  </a>
                ))}
              </div>

              {/* Quote - Mobile Optimized */}
              <div 
                className={`mt-3 sm:mt-4 text-white p-3 sm:p-4 rounded-lg transition-all duration-300 
                  ${activeMember === member.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}
                  md:absolute md:bottom-4 md:left-4 md:right-4 md:mt-0`}
                style={{ backgroundColor: '#8666A5' }}
              >
                <FaQuoteLeft 
                  className="mb-2 text-xs sm:text-sm" 
                  style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                />
                <p className="text-xs sm:text-sm italic leading-relaxed">{member.quote}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section - Mobile Optimized */}
        <div 
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mt-12 sm:mt-16"
          style={{ border: '1px solid rgba(134, 102, 165, 0.1)' }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div 
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{ color: '#8666A5' }}
              >50+</div>
              <div className="text-gray-600 text-sm sm:text-base">Happy Clients</div>
            </div>
            <div className="text-center">
              <div 
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{ color: '#8666A5' }}
              >120+</div>
              <div className="text-gray-600 text-sm sm:text-base">Projects</div>
            </div>
            <div className="text-center">
              <div 
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{ color: '#8666A5' }}
              >15+</div>
              <div className="text-gray-600 text-sm sm:text-base">Years Experience</div>
            </div>
            <div className="text-center">
              <div 
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{ color: '#8666A5' }}
              >25+</div>
              <div className="text-gray-600 text-sm sm:text-base">Awards</div>
            </div>
          </div>
        </div>
        
        {/* CTA Button - Mobile Optimized */}
        <div className="text-center mt-12 sm:mt-16">
          <button 
            className="px-6 py-3 sm:px-8 sm:py-3 text-white rounded-full font-medium transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center mx-auto text-sm sm:text-base"
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
            View All Team Members
            <FaArrowRight className="ml-2 text-xs sm:text-sm" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;