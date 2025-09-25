import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [formErrors, setFormErrors] = useState({ name: "", email: "", message: "" });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isFocused, setIsFocused] = useState({
    name: false,
    email: false,
    message: false
  });
  const [isLoading, setIsLoading] = useState(false);

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  const validateField = (name, value) => {
    let error = "";
    
    switch(name) {
      case "name":
        if (value.trim().length < 2) error = "Name must be at least 2 characters";
        break;
      case "email":
        if (!validateEmail(value)) error = "Please enter a valid email address";
        break;
      case "message":
        if (value.trim().length < 10) error = "Message must be at least 10 characters";
        break;
      default:
        break;
    }
    
    return error;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
    
    // Validate field in real-time
    if (formErrors[name]) {
      const error = validateField(name, value);
      setFormErrors({ ...formErrors, [name]: error });
    }
  };

  const handleFocus = (field) => {
    setIsFocused({ ...isFocused, [field]: true });
  };

  const handleBlur = (field) => {
    setIsFocused({ ...isFocused, [field]: false });
    
    // Validate field on blur
    const error = validateField(field, form[field]);
    setFormErrors({ ...formErrors, [field]: error });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const errors = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      message: validateField("message", form.message)
    };
    
    setFormErrors(errors);
    
    // Check if form is valid
    const isValid = Object.values(errors).every(error => error === "");
    
    if (!isValid) return;
    
    setIsLoading(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitted(true);
    setIsLoading(false);
    
    // Reset form after submission
    setTimeout(() => {
      setForm({ name: "", email: "", message: "" });
      setFormErrors({ name: "", email: "", message: "" });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <section 
      id="contact" 
      className="pb-20 bg-gradient-to-br from-white to-purple-50 relative overflow-hidden"
      style={{ paddingTop: 'clamp(5rem, 10vh, 7rem)' }}
    >
      {/* Simple background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Subtle lavender circles */}
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-100 rounded-full opacity-50 blur-xl"></div>
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-100 rounded-full opacity-30 blur-xl"></div>
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{ 
          background: 'linear-gradient(to right, rgba(134, 102, 165, 0.1) 1px, transparent 1px), linear-gradient(to bottom, rgba(134, 102, 165, 0.1) 1px, transparent 1px)', 
          backgroundSize: '4rem 4rem' 
        }}></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900">
            Let's <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-purple-400">Connect</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Ready to elevate your digital presence? Reach out and let's create something amazing together.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 max-w-6xl mx-auto">
          <motion.div 
            className="w-full lg:w-2/5"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 h-full border border-purple-100 backdrop-blur-sm">
              <h3 className="text-2xl font-semibold mb-6 text-gray-900">Get In Touch</h3>
              
              <div className="space-y-6">
                <motion.div 
                  className="flex items-start p-4 rounded-xl transition-colors bg-purple-50 border border-purple-100"
                  whileHover={{ 
                    x: 5,
                    backgroundColor: 'rgb(250, 245, 255)'
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-3 rounded-lg mr-4 bg-purple-100">
                    <span className="text-2xl text-purple-600">📧</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email Us</h4>
                    <p className="text-gray-600">Info@prsparkz.com</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start p-4 rounded-xl transition-colors bg-purple-50 border border-purple-100"
                  whileHover={{ 
                    x: 5,
                    backgroundColor: 'rgb(250, 245, 255)'
                  }}
                  transition={{ duration: 0.2, delay: 0.1 }}
                >
                  <div className="p-3 rounded-lg mr-4 bg-purple-100">
                    <span className="text-2xl text-purple-600">📱</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Call Us</h4>
                    <p className="text-gray-600">+91 7738715711</p>
                  </div>
                </motion.div>
                
                <motion.div 
                  className="flex items-start p-4 rounded-xl transition-colors bg-purple-50 border border-purple-100"
                  whileHover={{ 
                    x: 5,
                    backgroundColor: 'rgb(250, 245, 255)'
                  }}
                  transition={{ duration: 0.2, delay: 0.2 }}
                >
                  <div className="p-3 rounded-lg mr-4 bg-purple-100">
                    <span className="text-2xl text-purple-600">💬</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Let's Be Social</h4>
                    <div className="flex space-x-4 mt-2">
                      {[
                        { name: 'Instagram', icon: '�', url: 'https://www.instagram.com/pr_sparkz?igsh=MTZtbm01cnZ6a3V0Zw==' },
                        { name: 'Facebook', icon: '�', url: 'https://www.facebook.com/share/1B4DSMKMXw/?mibextid=wwXIfr' },
                        { name: 'LinkedIn', icon: '�', url: 'https://www.linkedin.com/company/prsparkz/' }
                      ].map((platform) => (
                        <motion.a
                          key={platform.name}
                          href={platform.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-10 h-10 rounded-full flex items-center justify-center transition-colors bg-purple-100 text-purple-600"
                          whileHover={{ 
                            y: -3,
                            scale: 1.1,
                            backgroundColor: 'rgb(192, 132, 252)',
                            color: 'white'
                          }}
                          transition={{ duration: 0.2 }}
                          aria-label={`Follow us on ${platform.name}`}
                        >
                          {platform.icon}
                        </motion.a>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-8 p-4 rounded-xl border bg-purple-50 border-purple-100"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <h4 className="font-semibold text-gray-900 mb-2">Response Time</h4>
                <p className="text-gray-600 text-sm">We typically respond to all inquiries within 24 hours during business days.</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div 
            className="w-full lg:w-3/5"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 relative overflow-hidden border border-purple-100">
              {/* Success message overlay */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div 
                    className="absolute inset-0 flex flex-col items-center justify-center p-8 z-20 border-2 rounded-2xl bg-white/95 border-purple-200"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.5 }}
                  >
                    <motion.div 
                      className="w-20 h-20 rounded-full flex items-center justify-center mb-4 border-4 border-purple-200 bg-purple-50"
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring", stiffness: 200, damping: 15 }}
                    >
                      <motion.span 
                        className="text-3xl text-purple-600"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 }}
                      >
                        ✅
                      </motion.span>
                    </motion.div>
                    <motion.h3 
                      className="text-2xl font-semibold mb-2 text-center text-purple-600"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      Message Sent!
                    </motion.h3>
                    <motion.p 
                      className="text-center max-w-md text-gray-600"
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.4 }}
                    >
                      We'll get back to you soon. Thank you for reaching out!
                    </motion.p>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <div className="relative">
                    <motion.input
                      type="text"
                      id="name"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      onFocus={() => handleFocus('name')}
                      onBlur={() => handleBlur('name')}
                      className="w-full border border-purple-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all bg-white text-gray-900 placeholder-gray-400 shadow-sm"
                      placeholder="Enter your full name"
                      required
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-purple-500"
                    initial={{ width: "0%" }}
                    animate={{ width: isFocused.name ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <AnimatePresence>
                    {formErrors.name && (
                      <motion.p 
                        className="text-red-500 text-sm mt-1"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {formErrors.name}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <div className="relative">
                    <motion.input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      onFocus={() => handleFocus('email')}
                      onBlur={() => handleBlur('email')}
                      className="w-full border border-purple-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all bg-white text-gray-900 placeholder-gray-400 shadow-sm"
                      placeholder="your.email@example.com"
                      required
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-purple-500"
                    initial={{ width: "0%" }}
                    animate={{ width: isFocused.email ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <AnimatePresence>
                    {formErrors.email && (
                      <motion.p 
                        className="text-red-500 text-sm mt-1"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {formErrors.email}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <div className="relative">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Needs
                  </label>
                  <div className="relative">
                    <motion.textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      onFocus={() => handleFocus('message')}
                      onBlur={() => handleBlur('message')}
                      className="w-full border border-purple-200 p-4 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all min-h-[120px] bg-white text-gray-900 placeholder-gray-400 shadow-sm"
                      placeholder="Tell us about your project requirements and goals..."
                      required
                      whileFocus={{ scale: 1.01 }}
                    />
                  </div>
                  <motion.div 
                    className="absolute bottom-0 left-0 right-0 h-1 rounded-full bg-purple-500"
                    initial={{ width: "0%" }}
                    animate={{ width: isFocused.message ? "100%" : "0%" }}
                    transition={{ duration: 0.3 }}
                  />
                  <AnimatePresence>
                    {formErrors.message && (
                      <motion.p 
                        className="text-red-500 text-sm mt-1"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {formErrors.message}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>

                <motion.button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 text-white font-semibold rounded-xl relative overflow-hidden group disabled:opacity-80 disabled:cursor-not-allowed shadow-md hover:shadow-lg transition-shadow bg-gradient-to-r from-purple-600 to-purple-400"
                  whileHover={{ 
                    scale: isLoading ? 1 : 1.02,
                    boxShadow: "0 10px 25px -10px rgba(139, 92, 246, 0.5)"
                  }}
                  whileTap={{ scale: 0.98 }}
                  aria-label="Send message"
                >
                  <span className="relative z-10">
                    {isLoading ? "Sending..." : "Send Message"}
                  </span>
                  
                  {/* Loading animation */}
                  <AnimatePresence>
                    {isLoading && (
                      <motion.div 
                        className="absolute inset-0 flex items-center justify-center bg-gradient-to-r from-purple-600 to-purple-400"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                      >
                        <motion.div 
                          className="w-6 h-6 border-2 border-white border-t-transparent rounded-full"
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                  
                  {/* Animated send icon */}
                  {!isLoading && (
                    <motion.span 
                      className="absolute right-4 top-1/2 transform -translate-y-1/2"
                      initial={{ x: 0 }}
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      📨
                    </motion.span>
                  )}
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;