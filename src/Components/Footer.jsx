import React, { useState } from 'react';

const Footer = () => {
  const [email, setEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const currentYear = new Date().getFullYear();

  const handleSubscribe = () => {
    if (email) {
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 2000);
    }
  };

  return (
    <footer className="bg-white border-t border-lavender-200">
      <div className="max-w-6xl mx-auto px-6 py-12">
        
        {/* Main Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="md:col-span-1">
            <div className="flex items-center mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-lavender-500 to-lavender-700 rounded-lg flex items-center justify-center mr-3">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-gray-900">PR SPARKZ</h2>
            </div>
            <p className="text-gray-600 text-sm mb-6 leading-relaxed">
              Transform your digital presence with creative solutions that connect and inspire.
            </p>
            
            {/* Social Links with updated icons */}
            <div className="flex space-x-4">
              {[
                { 
                  name: 'Instagram', 
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 16s-3-3.5-3-6c0-1.7 1.3-3 3-3s3 1.3 3 3c0 2.5-3 6-3 6zm0-10c-.6 0-1 .4-1 1s.4 1 1 1 1-.4 1-1-.4-1-1-1zm4 1c0-2.2-1.8-4-4-4S8 5.8 8 8c0 1.9 1.3 3.4 3 3.9V14h2v-2.1c1.7-.4 3-2 3-3.9z" />
                        </svg>,
                  bg: 'bg-gradient-to-r from-lavender-400 to-lavender-600' 
                },
                { 
                  name: 'Twitter', 
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
                        </svg>,
                  bg: 'bg-gradient-to-r from-lavender-500 to-lavender-700' 
                },
                { 
                  name: 'LinkedIn', 
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>,
                  bg: 'bg-gradient-to-r from-lavender-600 to-lavender-800' 
                },
                { 
                  name: 'YouTube', 
                  icon: <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                        </svg>,
                  bg: 'bg-gradient-to-r from-lavender-500 to-lavender-700' 
                }
              ].map((social) => (
                <a
                  key={social.name}
                  href="#"
                  className={`w-10 h-10 ${social.bg} rounded-full flex items-center justify-center text-white hover:scale-110 transform transition-all duration-200 shadow-md hover:shadow-lg`}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {['Services', 'About', 'Portfolio', 'Blog', 'Careers', 'Contact', 'Support', 'Resources'].map((link) => (
                <a
                  key={link}
                  href="#"
                  className="text-gray-600 text-sm py-1 hover:text-lavender-600 transition-colors flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2 text-lavender-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                  {link}
                </a>
              ))}
            </div>
          </div>

          {/* Newsletter Card */}
          <div>
            <div className="bg-gradient-to-br from-lavender-50 to-lavender-100 rounded-2xl p-6 border border-lavender-200">
              <h3 className="font-semibold text-gray-900 mb-2">Stay Connected</h3>
              <p className="text-gray-600 text-sm mb-4">
                Get updates and inspiration delivered to your inbox.
              </p>
              
              <div className="space-y-3">
                <div className="relative">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-2.5 text-lavender-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="w-full pl-10 pr-4 py-2 bg-white border border-lavender-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-lavender-500 focus:border-transparent text-sm"
                  />
                </div>
                <button
                  onClick={handleSubscribe}
                  disabled={isSubscribed}
                  className={`w-full py-2 rounded-xl font-medium text-sm transition-all duration-200 flex items-center justify-center ${
                    isSubscribed
                      ? 'bg-lavender-700 text-white'
                      : 'bg-gradient-to-r from-lavender-500 to-lavender-700 text-white hover:shadow-lg hover:scale-105'
                  }`}
                >
                  {isSubscribed ? (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      Subscribed!
                    </>
                  ) : (
                    <>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                      Subscribe
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-6 border-t border-lavender-100">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-gray-500 text-sm">© {currentYear} PR SPARKZ</span>
            <span className="w-1 h-1 bg-lavender-300 rounded-full"></span>
            <span className="text-gray-500 text-sm flex items-center">
              Made with 
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mx-1 text-lavender-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </span>
          </div>
          
          <div className="flex items-center space-x-6 text-sm">
            <a href="#" className="text-gray-500 hover:text-lavender-600 transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
              Privacy Policy
            </a>
            <a href="#" className="text-gray-500 hover:text-lavender-600 transition-colors flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              Terms of Service
            </a>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="w-8 h-8 bg-lavender-100 hover:bg-lavender-200 rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-lavender-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;