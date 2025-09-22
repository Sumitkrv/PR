import React, { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [direction, setDirection] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    { 
      name: "Aarav Patel", 
      role: "CEO, FashionHub",
      text: "PR Social transformed our Instagram presence! We went from 5K to 50K followers in just 3 months and saw a 200% increase in engagement.",
      avatar: "👨‍💼",
      rating: 5,
      platform: "Instagram",
      stats: "+45K followers"
    },
    { 
      name: "Sneha Desai", 
      role: "Marketing Director, TechStart",
      text: "The TikTok strategy they developed for us went viral! Our campaign reached over 2 million views and generated 5,000+ leads for our startup.",
      avatar: "👩‍💻",
      rating: 5,
      platform: "TikTok",
      stats: "2M+ views"
    },
    { 
      name: "Rohan Mehta", 
      role: "Brand Manager, FreshBites",
      text: "Their Facebook ad management exceeded our expectations. We achieved a 5x return on ad spend and significantly lowered our cost per conversion.",
      avatar: "👨‍🍳",
      rating: 5,
      platform: "Facebook",
      stats: "5x ROAS"
    },
    { 
      name: "Priya Sharma", 
      role: "Influencer, LifestyleBlog",
      text: "Working with PR Social helped me monetize my YouTube channel effectively. They secured brand partnerships that increased my revenue by 300%.",
      avatar: "👩‍🎤",
      rating: 5,
      platform: "YouTube",
      stats: "300% revenue growth"
    },
    { 
      name: "Vikram Singh", 
      role: "E-commerce Director, StyleCart",
      text: "Their Pinterest marketing strategy drove a 40% increase in website traffic and a 25% boost in sales for our online store. Absolutely phenomenal!",
      avatar: "👨‍💻",
      rating: 5,
      platform: "Pinterest",
      stats: "40% traffic increase"
    },
    { 
      name: "Ananya Reddy", 
      role: "Content Creator",
      text: "PR Social helped me build a personal brand on LinkedIn that attracted speaking opportunities and premium clients. My network grew by 10x in 6 months!",
      avatar: "👩‍🎓",
      rating: 5,
      platform: "LinkedIn",
      stats: "10x network growth"
    },
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (isHovered) return;
    
    const interval = setInterval(() => {
      setDirection(0);
      setActiveIndex(prev => (prev + 1) % testimonials.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isHovered, testimonials.length]);

  const handlePrev = () => {
    setDirection(1);
    setActiveIndex(prev => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(0);
    setActiveIndex(prev => (prev + 1) % testimonials.length);
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
    Instagram: "linear-gradient(45deg, #8b5cf6, #7c3aed, #6d28d9)",
    Facebook: "#4c1d95",
    TikTok: "#5b21b6",
    YouTube: "#6d28d9",
    Pinterest: "#7c3aed",
    LinkedIn: "#8b5cf6"
  };

  const featuredVariants = {
    enter: (direction) => ({ 
      opacity: 0, 
      x: direction === 0 ? 100 : -100,
      scale: 0.98
    }),
    center: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: (direction) => ({
      opacity: 0,
      x: direction === 0 ? -100 : 100,
      scale: 1.02,
      transition: {
        duration: 0.4
      }
    })
  };

  return (
    <section 
      id="testimonials" 
      className="py-20 bg-gradient-to-br from-lavender-50 to-white text-slate-900 overflow-hidden relative"
      ref={ref}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <motion.div 
          className="absolute top-0 left-0 w-72 h-72 bg-lavender-300 rounded-full filter blur-[100px]"
          animate={{
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        <motion.div 
          className="absolute bottom-0 right-0 w-96 h-96 bg-lavender-200 rounded-full filter blur-[100px]"
          animate={{
            x: [0, -40, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        ></motion.div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(0,0,0,0.1) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-lavender-600 to-lavender-800">Success Stories</span>
          </motion.h2>
          <motion.p 
            className="text-lg text-slate-600 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            Discover how we've transformed social media presence for brands and creators
          </motion.p>
        </motion.div>

        {/* Featured Testimonial - Modern Design */}
        <motion.div 
          className="max-w-5xl mx-auto mb-16 relative"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          {/* Navigation arrows */}
          <motion.button
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-12 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg border border-lavender-200 hover:bg-white transition-colors"
            onClick={handlePrev}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Previous testimonial"
          >
            <svg className="w-5 h-5 text-lavender-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </motion.button>
          
          <motion.button
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-12 z-20 w-10 h-10 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center shadow-lg border border-lavender-200 hover:bg-white transition-colors"
            onClick={handleNext}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Next testimonial"
          >
            <svg className="w-5 h-5 text-lavender-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
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
              className="bg-white/90 backdrop-blur-md rounded-2xl p-8 border border-lavender-100 relative overflow-hidden shadow-xl"
            >
              {/* Decorative elements */}
              <div className="absolute -top-20 -right-20 w-40 h-40 rounded-full bg-lavender-100/50"></div>
              <div className="absolute -bottom-20 -left-20 w-40 h-40 rounded-full bg-lavender-100/50"></div>
              
              {/* Accent line */}
              <div 
                className="absolute top-0 left-0 h-full w-1"
                style={{ 
                  background: typeof platformColors[testimonials[activeIndex].platform] === 'string' 
                    ? platformColors[testimonials[activeIndex].platform] 
                    : 'linear-gradient(to bottom, #8b5cf6, #6d28d9)'
                }}
              ></div>
              
              <div className="flex flex-col md:flex-row items-start">
                <motion.div 
                  className="flex-shrink-0 mb-6 md:mb-0 md:mr-8"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="relative">
                    <motion.div 
                      className="w-20 h-20 rounded-xl flex items-center justify-center text-4xl bg-white border border-lavender-200 shadow-sm"
                      whileHover={{ rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      {testimonials[activeIndex].avatar}
                    </motion.div>
                    <motion.div 
                      className="absolute -bottom-2 -right-2 px-3 py-1 rounded-lg text-xs font-bold text-white shadow-lg"
                      style={{ 
                        background: platformColors[testimonials[activeIndex].platform] 
                      }}
                      whileHover={{ 
                        scale: 1.1,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {testimonials[activeIndex].platform}
                    </motion.div>
                  </div>
                </motion.div>
                
                <div className="flex-1">
                  <div className="flex flex-wrap items-center mb-6">
                    <div className="flex mr-4">
                      {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                        <motion.svg 
                          key={i}
                          className="w-5 h-5 text-lavender-600 mr-1"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                          whileHover={{ scale: 1.2, rotate: 10 }}
                          transition={{ duration: 0.1 }}
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </motion.svg>
                      ))}
                    </div>
                    
                    <motion.div 
                      className="px-3 py-1 rounded-lg text-xs font-bold bg-lavender-100 text-lavender-800 border border-lavender-200"
                      whileHover={{ scale: 1.05 }}
                    >
                      {testimonials[activeIndex].stats}
                    </motion.div>
                  </div>
                  
                  <motion.blockquote 
                    className="text-xl md:text-2xl font-light text-slate-800 mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2, duration: 0.4 }}
                  >
                    "{testimonials[activeIndex].text}"
                  </motion.blockquote>
                  
                  <div className="pt-4 border-t border-lavender-100">
                    <h4 className="font-bold text-lg text-slate-900">{testimonials[activeIndex].name}</h4>
                    <p className="text-slate-600 text-sm">{testimonials[activeIndex].role}</p>
                  </div>
                </div>
              </div>
              
              {/* Navigation dots */}
              <div className="flex justify-center mt-8">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-2 h-2 rounded-full mx-1 ${index === activeIndex ? 'bg-lavender-700' : 'bg-lavender-300'}`}
                    onClick={() => {
                      setDirection(index > activeIndex ? 0 : 1);
                      setActiveIndex(index);
                    }}
                    whileHover={{ scale: 1.5 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Testimonial Cards Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ 
                y: -5, 
                transition: { duration: 0.2 }
              }}
              className="bg-white/90 backdrop-blur-sm rounded-xl p-5 border border-lavender-100 relative overflow-hidden group cursor-pointer shadow-md hover:shadow-lg transition-all duration-300"
              onMouseEnter={() => {
                setDirection(index > activeIndex ? 0 : 1);
                setActiveIndex(index);
              }}
            >
              {/* Platform indicator */}
              <div 
                className="absolute top-0 left-0 w-full h-1"
                style={{ 
                  background: platformColors[testimonial.platform] 
                }}
              ></div>
              
              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-lavender-500/5 to-lavender-700/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"></div>
              
              {/* Rating stars */}
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.svg 
                    key={i}
                    className="w-4 h-4 text-lavender-600 mr-0.5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    whileHover={{ scale: 1.3, rotate: 10 }}
                    transition={{ duration: 0.1 }}
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </motion.svg>
                ))}
              </div>
              
              <p className="text-slate-700 text-sm mb-4 line-clamp-3 group-hover:line-clamp-none transition-all duration-300 relative z-10">"{testimonial.text}"</p>
              
              <div className="flex items-center justify-between relative z-10">
                <div className="flex items-center">
                  <motion.div 
                    className="text-2xl mr-3"
                    whileHover={{ rotate: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    {testimonial.avatar}
                  </motion.div>
                  <div>
                    <h4 className="font-medium text-slate-900 text-sm">{testimonial.name}</h4>
                    <p className="text-xs text-slate-600">{testimonial.role}</p>
                  </div>
                </div>
                
                {/* Platform badge */}
                <motion.div 
                  className="px-2 py-1 rounded text-xs font-semibold text-white"
                  style={{ 
                    background: platformColors[testimonial.platform] 
                  }}
                  whileHover={{ scale: 1.05 }}
                >
                  {testimonial.platform}
                </motion.div>
              </div>
              
              {/* Stats badge */}
              <div className="mt-3 text-xs font-medium text-lavender-700 relative z-10">
                {testimonial.stats}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <h3 className="text-xl font-medium mb-6 text-slate-900">Ready to achieve similar results?</h3>
          <motion.button 
            className="px-6 py-3 rounded-lg font-medium text-white bg-gradient-to-r from-lavender-600 to-lavender-800 hover:from-lavender-700 hover:to-lavender-900 transition-all duration-300 shadow-md hover:shadow-lg relative overflow-hidden group"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <span className="relative z-10">Start Your Success Story</span>
            <div className="absolute inset-0 bg-gradient-to-r from-lavender-700 to-lavender-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;