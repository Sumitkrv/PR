import React, { useState, useEffect } from 'react';

const Team = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100);
    
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Priyanka Ranjan",
      role: "Marketing Manager",
      bio: "Strategic marketing professional with expertise in brand management, campaign development, and market analysis. Drives comprehensive marketing initiatives that deliver measurable results.",
      skills: ["Marketing Strategy", "Campaign Management", "Brand Development"],
      quote: "Great marketing makes the company look smart. Great branding makes the customer feel smart."
    },
    {
      id: 2,
      name: "Ankush Chaudhary",
      role: "Senior Graphic Designer",
      bio: "Creative visual designer with extensive experience in brand identity, print design, and digital graphics. Transforms ideas into compelling visual narratives.",
      skills: ["Graphic Design", "Brand Identity", "Print Design"],
      quote: "Design is not just what it looks like and feels like. Design is how it works."
    },
    {
      id: 3,
      name: "Bhawneet Singh",
      role: "3D Designer",
      bio: "Specialized 3D artist creating stunning visualizations, product renderings, and immersive experiences. Brings concepts to life with cutting-edge 3D technology.",
      skills: ["3D Modeling", "Visualization", "Product Rendering"],
      quote: "In 3D design, imagination is the only limit to what can be created."
    },
    {
      id: 4,
      name: "Shrey Sharma",
      role: "Digital Marketing Manager",
      bio: "Digital marketing specialist focused on social media strategy, online advertising, and performance marketing. Expertise in driving engagement and conversion through digital channels.",
      skills: ["Digital Marketing", "Social Media", "PPC Advertising"],
      quote: "Digital marketing is about connecting with people in the right place at the right time."
    },
    {
      id: 5,
      name: "Prateek Balara",
      role: "Senior Graphic Designer & Video Editor",
      bio: "Multi-skilled creative professional combining graphic design expertise with advanced video editing capabilities. Creates cohesive visual content across all media formats.",
      skills: ["Graphic Design", "Video Editing", "Motion Graphics"],
      quote: "Great design and compelling video content together create unforgettable brand experiences."
    }
  ];

  return (
    <section 
      id="team"
      className="pb-16 sm:pb-20 lg:pb-24 px-4 lg:px-8 min-h-screen flex items-center relative overflow-hidden" 
      style={{ 
        paddingTop: 'clamp(7rem, 20vw, 10rem)',
        scrollMarginTop: '100px',
        background: 'linear-gradient(135deg, #faf8ff 0%, #f5f3ff 50%, #ffffff 100%)'
      }}
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-purple-200/20 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-purple-300/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-64 bg-purple-100/10 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        {/* Header */}
        <div className={`text-center mb-16 sm:mb-20 transition-all duration-700 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <span className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-medium mb-4 border border-purple-200">
            Our Creative Team
          </span>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Meet Our <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">Team</span>
          </h2>
          <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Talented professionals dedicated to elevating your brand with innovative strategies 
            and <span className="font-semibold text-purple-600">creative solutions</span> that drive results.
          </p>
        </div>
        
        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {teamMembers.map((member, index) => (
            <div 
              key={member.id}
              className={`group relative bg-white rounded-2xl p-8 transition-all duration-500 hover:scale-105 hover:shadow-2xl border border-purple-100 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                transitionDelay: `${index * 100}ms`,
              }}
            >
              {/* Profile Header */}
              <div className="text-center mb-6">
                <div className="mb-4">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500 to-purple-700 flex items-center justify-center text-2xl text-white shadow-lg mx-auto">
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors">
                  {member.name}
                </h3>
                <p className="text-purple-600 font-medium mt-2">{member.role}</p>
              </div>

              {/* Skills */}
              <div className="flex flex-wrap justify-center gap-2 mb-6">
                {member.skills.map((skill, i) => (
                  <span 
                    key={i} 
                    className="px-3 py-1.5 text-xs font-medium rounded-full bg-purple-50 text-purple-700 border border-purple-200 transition-all group-hover:border-purple-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              {/* Bio */}
              <p className="text-gray-600 leading-relaxed mb-6 text-center text-sm">
                {member.bio}
              </p>

              {/* Quote */}
              <div className="relative bg-gradient-to-r from-purple-600 to-purple-800 rounded-xl p-5 text-white transform transition-transform duration-300">
                <p className="text-sm leading-relaxed text-center font-medium">
                  "{member.quote}"
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Stats Section */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {[
            { number: "5", label: "Expert Team Members" },
            { number: "100+", label: "Successful Projects" },
            { number: "50+", label: "Happy Clients" },
            { number: "5+", label: "Years Experience" }
          ].map((stat, index) => (
            <div 
              key={index}
              className="text-center p-6 rounded-2xl bg-white border border-purple-100 hover:shadow-lg transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl sm:text-4xl font-bold text-purple-700 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
        
        {/* CTA Button */}
        <div className="text-center">
          {/* <button className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white rounded-xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"> */}
            {/* <span className="flex items-center justify-center">
              View All Team Members
              <svg className="w-5 h-5 ml-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
              </svg>
            </span> */}
          {/* </button> */}
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-4 h-4 rounded-full bg-purple-300/40 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-6 h-6 rounded-full bg-purple-200/30 animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-40 left-20 w-3 h-3 rounded-full bg-purple-300/40 animate-pulse" style={{animationDelay: '2s'}}></div>
    </section>
  );
};

export default Team;