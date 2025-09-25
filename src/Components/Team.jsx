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
      name: "Priyanka Ranjan",
      role: "Marketing Manager",
      bio: "Strategic marketing professional with expertise in brand management, campaign development, and market analysis. Drives comprehensive marketing initiatives that deliver measurable results.",
      image: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      social: [FaLinkedin, FaEnvelope, FaInstagram],
      socialLinks: ["#", "#", "#"],
      skills: ["Marketing Strategy", "Campaign Management", "Brand Development"],
      quote: "Great marketing makes the company look smart. Great branding makes the customer feel smart."
    },
    {
      id: 2,
      name: "Ankush Chaudhary",
      role: "Senior Graphic Designer",
      bio: "Creative visual designer with extensive experience in brand identity, print design, and digital graphics. Transforms ideas into compelling visual narratives.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      social: [FaLinkedin, FaDribbble, FaEnvelope],
      socialLinks: ["#", "#", "#"],
      skills: ["Graphic Design", "Brand Identity", "Print Design"],
      quote: "Design is not just what it looks like and feels like. Design is how it works."
    },
    {
      id: 3,
      name: "Bhawneet Singh",
      role: "3D Designer",
      bio: "Specialized 3D artist creating stunning visualizations, product renderings, and immersive experiences. Brings concepts to life with cutting-edge 3D technology.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      social: [FaLinkedin, FaDribbble, FaEnvelope],
      socialLinks: ["#", "#", "#"],
      skills: ["3D Modeling", "Visualization", "Product Rendering"],
      quote: "In 3D design, imagination is the only limit to what can be created."
    },
    {
      id: 4,
      name: "Shrey Sharma",
      role: "Digital Marketing Manager",
      bio: "Digital marketing specialist focused on social media strategy, online advertising, and performance marketing. Expertise in driving engagement and conversion through digital channels.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      social: [FaLinkedin, FaTwitter, FaEnvelope],
      socialLinks: ["#", "#", "#"],
      skills: ["Digital Marketing", "Social Media", "PPC Advertising"],
      quote: "Digital marketing is about connecting with people in the right place at the right time."
    },
    {
      id: 5,
      name: "Prateek Balara",
      role: "Senior Graphic Designer & Video Editor",
      bio: "Multi-skilled creative professional combining graphic design expertise with advanced video editing capabilities. Creates cohesive visual content across all media formats.",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=80",
      social: [FaLinkedin, FaDribbble, FaEnvelope],
      socialLinks: ["#", "#", "#"],
      skills: ["Graphic Design", "Video Editing", "Motion Graphics"],
      quote: "Great design and compelling video content together create unforgettable brand experiences."
    }
  ];

  const handleMemberClick = (memberId) => {
    if (isMobile) {
      setActiveMember(activeMember === memberId ? null : memberId);
    }
  };

  return (
    <section 
      id="team"
      className="py-12 sm:py-16 lg:py-20 px-4 lg:px-8 min-h-screen flex items-center relative overflow-hidden" 
      style={{ 
        paddingTop: '160px', 
        scrollMarginTop: '120px',
        background: 'linear-gradient(135deg, #f8f6ff 0%, #ffffff 100%)'
      }}
    >
      {/* Decorative elements */}
      <div 
        className="absolute top-0 left-0 w-48 sm:w-72 h-48 sm:h-72 rounded-full -translate-x-1/2 -translate-y-1/2 opacity-15"
        style={{ backgroundColor: '#8666A5' }}
      ></div>
      <div 
        className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 rounded-full translate-x-1/3 translate-y-1/3 opacity-15"
        style={{ backgroundColor: '#8666A5' }}
      ></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
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
        
        {/* Team Grid - 3 Cards per Row */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className={`bg-white rounded-2xl p-4 sm:p-6 shadow-lg hover:shadow-xl transition-all duration-300 transform ${
                !isMobile ? 'hover:-translate-y-1' : ''
              } group relative ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
                border: '1px solid rgba(134, 102, 165, 0.1)',
              }}
              onMouseEnter={() => !isMobile && setActiveMember(member.id)}
              onMouseLeave={() => !isMobile && setActiveMember(null)}
              onClick={() => handleMemberClick(member.id)}
            >
              {/* Avatar */}
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
                className="text-center mb-3 sm:mb-4 text-sm sm:text-base font-medium"
                style={{ color: '#8666A5' }}
              >{member.role}</p>
              
              {/* Skills */}
              <div className="flex justify-center flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                {member.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 text-xs rounded-full font-medium"
                    style={{ 
                      backgroundColor: 'rgba(134, 102, 165, 0.1)', 
                      color: '#8666A5' 
                    }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
              
              <p className="text-gray-600 text-xs sm:text-sm text-center mb-4 sm:mb-6 leading-relaxed line-clamp-3">
                {member.bio}
              </p>
              
              {/* Social Icons */}
              <div className={`social-icons flex justify-center space-x-3 sm:space-x-4 transition-all duration-300 ${
                isMobile 
                  ? 'opacity-100' 
                  : 'opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0'
              }`}>
                {member.social.map((SocialIcon, i) => (
                  <a 
                    key={i}
                    href={member.socialLinks[i]} 
                    className="w-8 h-8 sm:w-10 sm:h-10 rounded-full transition-all duration-200 flex items-center justify-center hover:scale-110"
                    style={{ 
                      backgroundColor: 'rgba(134, 102, 165, 0.1)',
                      color: '#8666A5'
                    }}
                    onClick={(e) => e.stopPropagation()}
                    aria-label={`Connect with ${member.name} on ${SocialIcon.name}`}
                  >
                    <SocialIcon className="text-xs sm:text-sm" />
                  </a>
                ))}
              </div>

              {/* Quote - Fixed for mobile and desktop */}
              <div 
                className={`mt-3 sm:mt-4 text-white p-3 sm:p-4 rounded-lg transition-all duration-300 ${
                  activeMember === member.id ? 'max-h-32 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden`}
                style={{ backgroundColor: '#8666A5' }}
              >
                <div className="flex items-start">
                  <FaQuoteLeft 
                    className="mt-1 mr-2 flex-shrink-0 text-xs" 
                    style={{ color: 'rgba(255, 255, 255, 0.7)' }}
                  />
                  <p className="text-xs sm:text-sm italic leading-relaxed">{member.quote}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div 
          className="bg-white rounded-2xl p-6 sm:p-8 shadow-lg mt-12 sm:mt-16"
          style={{ border: '1px solid rgba(134, 102, 165, 0.1)' }}
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center">
              <div 
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{ color: '#8666A5' }}
              >5</div>
              <div className="text-gray-600 text-sm sm:text-base">Expert Team Members</div>
            </div>
            <div className="text-center">
              <div 
                className="text-3xl sm:text-4xl font-bold mb-2"
                style={{ color: '#8666A5' }}
              >100+</div>
              <div className="text-gray-600 text-sm sm:text-base">Successful Projects</div>
            </div>
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
              >5+</div>
              <div className="text-gray-600 text-sm sm:text-base">Years Experience</div>
            </div>
          </div>
        </div>
        
        {/* CTA Button */}
        <div className="text-center mt-12 sm:mt-16">
          <button 
            className="px-6 py-3 sm:px-8 sm:py-4 text-white rounded-full font-medium transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5 flex items-center mx-auto text-sm sm:text-base hover:scale-105"
            style={{ 
              background: 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)'
            }}
            onMouseEnter={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #6b4d7a 0%, #5a3f68 100%)';
            }}
            onMouseLeave={(e) => {
              e.target.style.background = 'linear-gradient(135deg, #8666A5 0%, #6b4d7a 100%)';
            }}
          >
            View All Team Members
            <FaArrowRight className="ml-2 text-xs sm:text-sm transition-transform duration-300 group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Team;