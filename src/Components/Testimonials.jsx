import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    { 
      id: 1,
      name: "Shikha Khandelwal", 
      role: "Founder",
      company: "BK Shikha",
      text: "My profile was completely transformed. Within a month, I experienced 4x growth and a massive increase in subscribers — all organic, without paid ads.",
      avatar: "�‍💼",
      rating: 5,
      platform: "Social Media",
      stats: "4x growth",
      duration: "1 month",
      image: "/images/testimonials/bk-shikha.jpg"
    },
    { 
      id: 2,
      name: "Harsh Aggarwal", 
      role: "Co-founder",
      company: "Moon7 Silverhub",
      text: "Our offline events were managed with precision. From on-ground marketing to digital promotions, the reach and impact were outstanding.",
      avatar: "👨‍�",
      rating: 5,
      platform: "Events & Marketing",
      stats: "Outstanding reach",
      duration: "Event series",
      image: "/images/testimonials/moon7-silverhub.jpg"
    },
    { 
      id: 3,
      name: "Sujata Chauhan", 
      role: "MD",
      company: "Vortex Splash",
      text: "Highly active and creative team. The marketing approach was smooth, effective, and results-driven.",
      avatar: "👩‍💻",
      rating: 5,
      platform: "Digital Marketing",
      stats: "Results-driven",
      duration: "Campaign",
      image: "/images/testimonials/vortex-splash.jpg"
    },
    { 
      id: 4,
      name: "Rohit Mehra", 
      role: "Founder",
      company: "TasteBuds Café",
      text: "The social media strategy completely changed our customer engagement. Within 6 weeks, footfall increased by 3x, and our online orders grew significantly.",
      avatar: "👨‍🍳",
      rating: 5,
      platform: "Social Media",
      stats: "3x footfall increase",
      duration: "6 weeks",
      image: "/images/testimonials/tastebuds-cafe.jpg"
    },
    { 
      id: 5,
      name: "Neha Kapoor", 
      role: "Owner",
      company: "Aurora Jewellery",
      text: "The creative campaigns were flawless. From concept to execution, every detail was handled professionally, giving our brand a premium online presence.",
      avatar: "💎",
      rating: 5,
      platform: "Digital Marketing",
      stats: "Premium presence",
      duration: "Campaign series",
      image: "/images/testimonials/aurora-jewellery.jpg"
    },
    { 
      id: 6,
      name: "Vikram Singh", 
      role: "CEO",
      company: "GreenLeaf Organics",
      text: "The team brought fresh ideas and executed them with precision. Sales conversions increased, and our brand visibility across digital platforms skyrocketed.",
      avatar: "🌱",
      rating: 5,
      platform: "Digital Marketing",
      stats: "Sales conversions up",
      duration: "Multi-platform",
      image: "/images/testimonials/greenleaf-organics.jpg"
    },
    { 
      id: 7,
      name: "Ayesha Reddy", 
      role: "Co-founder",
      company: "LuxeTreats Chocolates",
      text: "Their marketing approach is both innovative and practical. The engagement on our campaigns went through the roof, and customer feedback has been overwhelmingly positive.",
      avatar: "🍫",
      rating: 5,
      platform: "Social Media",
      stats: "Engagement soared",
      duration: "Campaign series",
      image: "/images/testimonials/luxetreats-chocolates.jpg"
    },
  ];

  // Enhanced auto-rotate with pause/resume functionality
  useEffect(() => {
    if (!isAutoPlaying || isHovered) return;
    
    const interval = setInterval(() => {
      setDirection(0);
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoPlaying, isHovered, testimonials.length]);

  const handlePrev = () => {
    setDirection(-1);
    setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
    setIsAutoPlaying(false);
  };

  const handleNext = () => {
    setDirection(1);
    setActiveIndex(prev => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index) => {
    setDirection(index > activeIndex ? 1 : -1);
    setActiveIndex(index);
    setIsAutoPlaying(false);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const platformColors = {
    "Social Media": "linear-gradient(135deg, #64419a 0%, #553c8b 100%)",
    "Events & Marketing": "linear-gradient(135deg, #7c3aed 0%, #64419a 100%)",
    "Digital Marketing": "linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)"
  };

  const platformIcons = {
    "Social Media": "�",
    "Events & Marketing": "�",
    "Digital Marketing": "�"
  };

  const featuredVariants = {
    enter: (direction) => ({ 
      opacity: 0, 
      x: direction > 0 ? 100 : -100,
      scale: 0.95
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.32, 0.72, 0, 1]
      }
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction > 0 ? -100 : 100,
      scale: 1.05,
      transition: {
        duration: 0.4
      }
    })
  };

  // Enhanced avatar with fallback
  const renderAvatar = (testimonial) => {
    return (
      <div className="relative group">
        <motion.div 
          className="w-20 h-20 rounded-xl flex items-center justify-center text-4xl bg-gradient-to-br from-white to-gray-50 border-2 border-purple-200 shadow-lg relative overflow-hidden"
          whileHover={{ scale: 1.05, rotate: 2 }}
          transition={{ duration: 0.3 }}
        >
          {/* Platform icon overlay */}
          <div 
            className="absolute bottom-0 right-0 w-6 h-6 rounded-tl-lg flex items-center justify-center text-xs text-white"
            style={{ 
              background: platformColors[testimonial.platform] 
            }}
          >
            {platformIcons[testimonial.platform]}
          </div>
          {testimonial.avatar}
        </motion.div>
        
        {/* Verified badge */}
        <motion.div 
          className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-xs"
          whileHover={{ scale: 1.2 }}
          transition={{ duration: 0.2 }}
          title="Verified Client"
        >
          ✓
        </motion.div>
      </div>
    );
  };

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-gradient-to-br from-purple-50 via-white to-purple-50 text-slate-900 overflow-hidden relative"
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Enhanced background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-30">
        <motion.div 
          className="absolute top-10 left-10 w-64 h-64 bg-purple-300 rounded-full filter blur-[120px]"
          animate={{
            x: [0, 60, 0],
            y: [0, 40, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-80 h-80 bg-purple-200 rounded-full filter blur-[120px]"
          animate={{
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Geometric patterns */}
        <div className="absolute top-1/4 right-1/4 w-32 h-32 border-4 border-purple-200/30 rounded-lg rotate-45"></div>
        <div className="absolute bottom-1/3 left-1/3 w-24 h-24 border-4 border-purple-300/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Enhanced Header */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <motion.span 
            className="inline-block px-4 py-2 rounded-full bg-purple-100 text-purple-700 text-sm font-semibold mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{backgroundColor: '#f3e8ff', color: '#64419a'}}
          >
            TRUSTED BY OUR CLIENTS
          </motion.span>
          
          <motion.h2 
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            What <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-purple-800" style={{background: 'linear-gradient(to right, #64419a, #553c8b)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent'}}>Our Clients Say</span>
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            Our work speaks through the success of our clients.
          </motion.p>
        </motion.div>

        {/* Main Featured Testimonial */}
        <motion.div 
          className="max-w-6xl mx-auto mb-16 relative"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {/* Navigation Arrows */}
          <motion.button
            className="absolute left-4 md:-left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xl border border-purple-200 hover:bg-white transition-all duration-300 group"
            onClick={handlePrev}
            whileHover={{ scale: 1.1, x: -2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous testimonial"
          >
            <svg className="w-6 h-6 text-purple-700 group-hover:text-purple-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{color: '#64419a'}}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <motion.button
            className="absolute right-4 md:-right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center shadow-xl border border-purple-200 hover:bg-white transition-all duration-300 group"
            onClick={handleNext}
            whileHover={{ scale: 1.1, x: 2 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next testimonial"
          >
            <svg className="w-6 h-6 text-purple-700 group-hover:text-purple-900 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor" style={{color: '#64419a'}}>
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </motion.button>

          <AnimatePresence mode="popLayout" custom={direction}>
            <motion.div
              key={activeIndex}
              custom={direction}
              variants={featuredVariants}
              initial="enter"
              animate="center"
              exit="exit"
              className="bg-white/95 backdrop-blur-lg rounded-3xl p-8 md:p-10 border border-purple-100/50 relative overflow-hidden shadow-2xl"
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                  backgroundImage: `radial-gradient(circle at 25% 25%, #8b5cf6 0%, transparent 50%)`,
                }}></div>
              </div>
              
              {/* Platform Gradient Bar */}
              <div 
                className="absolute top-0 left-0 w-full h-2"
                style={{ 
                  background: platformColors[testimonials[activeIndex].platform] 
                }}
              />
              
              <div className="flex flex-col lg:flex-row items-start gap-8 relative z-10">
                {/* Avatar Section */}
                <div className="flex-shrink-0">
                  {renderAvatar(testimonials[activeIndex])}
                  
                  {/* Platform Badge */}
                  <motion.div 
                    className="mt-4 px-4 py-2 rounded-lg text-white font-semibold text-sm text-center shadow-lg"
                    style={{ 
                      background: platformColors[testimonials[activeIndex].platform] 
                    }}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.2 }}
                  >
                    {testimonials[activeIndex].platform}
                  </motion.div>
                </div>
                
                {/* Content Section */}
                <div className="flex-1 min-w-0">
                  {/* Rating and Stats */}
                  <div className="flex flex-wrap items-center gap-4 mb-6">
                    <div className="flex items-center gap-1">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <motion.svg 
                          key={i}
                          className="w-5 h-5 text-amber-400"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          whileHover={{ scale: 1.3, rotate: 10 }}
                          transition={{ duration: 0.1 }}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </div>
                    
                    <motion.div 
                      className="px-3 py-1 rounded-full text-sm font-bold bg-purple-100 text-purple-800 border border-purple-200"
                      whileHover={{ scale: 1.05 }}
                      style={{backgroundColor: '#f3e8ff', color: '#64419a', borderColor: '#e9d5ff'}}
                    >
                      {testimonials[activeIndex].stats}
                    </motion.div>
                    
                    <div className="text-sm text-slate-500">
                      {testimonials[activeIndex].duration}
                    </div>
                  </div>
                  
                  {/* Testimonial Text */}
                  <motion.blockquote 
                    className="text-lg md:text-xl lg:text-2xl font-light text-slate-800 mb-8 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3, duration: 0.5 }}
                  >
                    "{testimonials[activeIndex].text}"
                  </motion.blockquote>
                  
                  {/* Client Info */}
                  <div className="pt-6 border-t border-purple-100">
                    <h4 className="font-bold text-xl text-slate-900 mb-1">{testimonials[activeIndex].name}</h4>
                    <p className="text-slate-700 text-sm mb-2">{testimonials[activeIndex].role}</p>
                    <p className="text-slate-600 text-xs">{testimonials[activeIndex].company}</p>
                  </div>
                </div>
              </div>
              
              {/* Navigation Dots */}
              <div className="flex justify-center mt-8 gap-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'scale-110' 
                        : 'hover:bg-purple-400'
                    }`}
                    style={{
                      backgroundColor: index === activeIndex ? '#64419a' : '#c4b5fd'
                    }}
                    onClick={() => goToSlide(index)}
                    whileHover={{ scale: 1.3 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`View testimonial from ${testimonials[index].name}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Testimonial Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={itemVariants}
              whileHover={{ 
                y: -8, 
                scale: 1.02,
                transition: { duration: 0.3 }
              }}
              className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 relative overflow-hidden group cursor-pointer shadow-lg hover:shadow-xl transition-all duration-500"
              onClick={() => goToSlide(index)}
            >
              {/* Platform Indicator */}
              <div 
                className="absolute top-0 left-0 w-full h-1"
                style={{ background: platformColors[testimonial.platform] }}
              />
              
              {/* Hover Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-purple-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
              
              <div className="relative z-10">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="text-3xl">{testimonial.avatar}</div>
                    <div>
                      <h4 className="font-semibold text-slate-900 text-sm">{testimonial.name}</h4>
                      <p className="text-xs text-slate-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <motion.div 
                    className="px-2 py-1 rounded text-xs font-semibold text-white shadow-sm"
                    style={{ background: platformColors[testimonial.platform] }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {testimonial.platform}
                  </motion.div>
                </div>

                {/* Rating */}
                <div className="flex gap-0.5 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-3 h-3 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                {/* Text */}
                <p className="text-slate-700 text-sm mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                  "{testimonial.text}"
                </p>

                {/* Stats */}
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-purple-700" style={{color: '#64419a'}}>{testimonial.stats}</span>
                  <span className="text-slate-500">{testimonial.duration}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.9 }}
        >
          <div className="bg-gradient-to-r from-purple-600 to-purple-800 rounded-3xl p-8 md:p-12 text-white shadow-2xl relative overflow-hidden" style={{background: 'linear-gradient(to right, #64419a, #553c8b)'}}>
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 75% 25%, #ffffff 0%, transparent 50%)`,
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Write Your Success Story?</h3>
              <p className="text-purple-100 text-lg mb-8 max-w-2xl mx-auto">
                Join our satisfied clients who have transformed their brand presence with our proven strategies.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button 
                  className="px-8 py-4 rounded-xl font-semibold text-white bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all duration-300 shadow-lg hover:shadow-xl relative overflow-hidden group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10">Start Your Journey Today</span>
                  <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                </motion.button>
                
                <motion.button 
                  className="px-8 py-4 rounded-xl font-semibold text-purple-900 bg-white hover:bg-purple-50 transition-all duration-300 shadow-lg hover:shadow-xl"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  style={{color: '#64419a'}}
                >
                  View Case Studies
                </motion.button>
              </div>
              
              <div className="mt-6 text-purple-200 text-sm">
                ✨ Trusted by our clients • Proven results
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;