import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as THREE from 'three';
import { scrollToSection, handleSectionClick } from '../utils/navigation.js';

const ModernNavbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState(null);
  const cursorRef = useRef(null);
  const animationFrameRef = useRef(null);
  const menuRef = useRef(null);
  const dropdownTimeoutRef = useRef(null);
  const threeContainerRef = useRef(null);
  const location = useLocation();
  const sceneRef = useRef(null);
  const rendererRef = useRef(null);
  const cameraRef = useRef(null);
  const particlesRef = useRef(null);
  const raycasterRef = useRef(new THREE.Raycaster());
  const mouseRef = useRef(new THREE.Vector2());
  const interactiveMeshesRef = useRef([]);
  const animationIdRef = useRef(null);

  // Scroll detection with smooth threshold
  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 20;
      setIsScrolled(scrolled);
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Initialize Three.js scene with lavender-themed effects
  useEffect(() => {
    if (!threeContainerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    sceneRef.current = scene;

    // Camera setup
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 5;
    cameraRef.current = camera;

    // Renderer setup with improved settings
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    threeContainerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // Create a more sophisticated particle system
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 1200;
    
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position with more controlled distribution
      posArray[i] = (Math.random() - 0.5) * 20;
      posArray[i + 1] = (Math.random() - 0.5) * 20;
      posArray[i + 2] = (Math.random() - 0.5) * 10;
      
      // Lavender and white color palette
      const isWhite = Math.random() > 0.85;
      
      if (isWhite) {
        // White particles
        colorArray[i] = 0.95 + Math.random() * 0.05;     // R
        colorArray[i + 1] = 0.95 + Math.random() * 0.05; // G
        colorArray[i + 2] = 0.95 + Math.random() * 0.05; // B
      } else {
        // Lavender particles
        colorArray[i] = 0.8 + Math.random() * 0.2;     // R
        colorArray[i + 1] = 0.7 + Math.random() * 0.2; // G
        colorArray[i + 2] = 0.9 + Math.random() * 0.1; // B
      }
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    
    // Advanced particles material
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.04,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
      depthWrite: false,
      sizeAttenuation: true
    });
    
    // Particles system
    const particles = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particles);
    particlesRef.current = particles;

    // Add subtle lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.4);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.6);
    directionalLight.position.set(5, 5, 5);
    scene.add(directionalLight);

    // Create interactive elements that respond to mouse
    const createInteractiveElement = (x, y, z, size, color) => {
      const geometry = new THREE.IcosahedronGeometry(size, 1);
      const material = new THREE.MeshPhongMaterial({
        color,
        emissive: color,
        emissiveIntensity: 0.1,
        transparent: true,
        opacity: 0.6,
        specular: 0xffffff,
        shininess: 30
      });
      
      const mesh = new THREE.Mesh(geometry, material);
      mesh.position.set(x, y, z);
      mesh.userData = { originalScale: size, hover: false };
      scene.add(mesh);
      interactiveMeshesRef.current.push(mesh);
      return mesh;
    };

    // Add some interactive elements in lavender tones
    createInteractiveElement(-4, 2, 3, 0.4, 0x9678d6);
    createInteractiveElement(4, -2, 2, 0.5, 0xb8a7e3);
    createInteractiveElement(0, 4, 4, 0.6, 0xd6caf0);

    // Mouse move handler for interaction
    const handleMouseMove = (event) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1;
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove);

    // Animation
    const clock = new THREE.Clock();
    
    const animate = () => {
      animationIdRef.current = requestAnimationFrame(animate);
      
      const elapsedTime = clock.getElapsedTime();
      
      if (particlesRef.current) {
        particlesRef.current.rotation.x = elapsedTime * 0.03;
        particlesRef.current.rotation.y = elapsedTime * 0.05;
        
        // Gentle pulsing effect
        particlesRef.current.scale.set(
          1 + Math.sin(elapsedTime * 0.5) * 0.02,
          1 + Math.sin(elapsedTime * 0.5) * 0.02,
          1
        );
      }
      
      // Interactive elements animation
      interactiveMeshesRef.current.forEach(mesh => {
        mesh.rotation.x = elapsedTime * 0.1;
        mesh.rotation.y = elapsedTime * 0.15;
        
        // Hover effect
        const targetScale = mesh.userData.hover ? mesh.userData.originalScale * 1.4 : mesh.userData.originalScale;
        const targetOpacity = mesh.userData.hover ? 0.9 : 0.6;
        
        mesh.scale.lerp(new THREE.Vector3(targetScale, targetScale, targetScale), 0.1);
        mesh.material.opacity = THREE.MathUtils.lerp(mesh.material.opacity, targetOpacity, 0.1);
      });
      
      // Raycasting for interaction
      raycasterRef.current.setFromCamera(mouseRef.current, camera);
      const intersects = raycasterRef.current.intersectObjects(interactiveMeshesRef.current);
      
      interactiveMeshesRef.current.forEach(mesh => {
        mesh.userData.hover = false;
      });
      
      if (intersects.length > 0) {
        intersects[0].object.userData.hover = true;
      }
      
      renderer.render(scene, camera);
    };
    
    animate();

    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      
      if (threeContainerRef.current && rendererRef.current?.domElement) {
        threeContainerRef.current.removeChild(rendererRef.current.domElement);
      }
      
      // Dispose of Three.js objects
      if (particlesRef.current) {
        particlesRef.current.geometry.dispose();
        particlesRef.current.material.dispose();
      }
      
      interactiveMeshesRef.current.forEach(mesh => {
        mesh.geometry.dispose();
        mesh.material.dispose();
        scene.remove(mesh);
      });
      
      interactiveMeshesRef.current = [];
    };
  }, []);

  // Premium bubble cursor effect with proper cleanup
  useEffect(() => {
    // Don't create cursor on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
      document.body.classList.remove('custom-cursor');
      return;
    }

    document.body.classList.add('custom-cursor');
    
    const cursor = document.createElement('div');
    cursor.className = 'premium-cursor';
    document.body.appendChild(cursor);
    cursorRef.current = cursor;
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    
    const updateCursor = () => {
      cursorX += (mouseX - cursorX) * 0.12;
      cursorY += (mouseY - cursorY) * 0.12;
      
      if (cursorRef.current) {
        cursorRef.current.style.left = `${cursorX}px`;
        cursorRef.current.style.top = `${cursorY}px`;
      }
      
      animationFrameRef.current = requestAnimationFrame(updateCursor);
    };
    
    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    
    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.add('cursor-hover');
      }
    };
    
    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursorRef.current.classList.remove('cursor-hover');
      }
    };
    
    document.addEventListener('mousemove', handleMouseMove);
    animationFrameRef.current = requestAnimationFrame(updateCursor);
    
    // Add hover effects to interactive elements
    const interactiveElements = document.querySelectorAll('a, button, [role="button"], .interactive');
    interactiveElements.forEach(el => {
      el.addEventListener('mouseenter', handleMouseEnter);
      el.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current);
      }
      
      interactiveElements.forEach(el => {
        el.removeEventListener('mouseenter', handleMouseEnter);
        el.removeEventListener('mouseleave', handleMouseLeave);
      });
      
      if (cursor && document.body.contains(cursor)) {
        document.body.removeChild(cursor);
      }
      
      document.body.classList.remove('custom-cursor');
    };
  }, []);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
        setMobileOpenDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleDropdownEnter = (item) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setHoveredItem(item);
  };

  const handleDropdownLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setHoveredItem(null);
    }, 150);
  };

  const toggleMobileDropdown = (itemLabel) => {
    if (mobileOpenDropdown === itemLabel) {
      setMobileOpenDropdown(null);
    } else {
      setMobileOpenDropdown(itemLabel);
    }
  };

  const navItems = [
    { label: 'Home', path: '/', icon: '◉', isSection: false },
    { label: 'Services', path: '#services', icon: '◈', isSection: true },
    { 
      label: 'More', 
      path: '#', 
      icon: '◎',
      dropdown: [
        { label: 'Portfolio', path: '/portfolio', isSection: false },
        { label: 'Team', path: '/team', isSection: false },
        { label: 'About', path: '#about', isSection: true },
      ]
    },
    { label: 'Contact', path: '#contact', icon: '◐', isSection: true }
  ];

  // Check if a nav item is active
  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <>
      {/* Three.js Container */}
      <div 
        ref={threeContainerRef} 
        className="fixed inset-0 -z-10 opacity-30 pointer-events-none"
      />
      
      <nav ref={menuRef} className={`fixed top-0 w-full z-50 transition-all duration-500 ease-out ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-xl border-b border-gray-200 shadow-2xl py-3' 
          : 'bg-white/80 py-5'
      }`} style={{ fontFamily: "'Montserrat', sans-serif" }}>
        
        {/* Premium glass morphism overlay */}
        <div
          className={`absolute inset-0 transition-opacity duration-500 ${
            isScrolled ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-purple-200/30 via-purple-100/30 to-purple-300/30"></div>
          <div className="absolute inset-0 backdrop-blur-xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center justify-between">
            {/* Enhanced Logo with text below - Larger size and improved styling */}
            <Link to="/" className="group cursor-pointer interactive">
              <div className="flex flex-col items-center">
                {/* Logo container - Significantly increased size */}
                <div className="w-20 h-20 flex items-center justify-center transition-transform duration-300 group-hover:scale-105">
                  <img 
                    src="/logo.png" 
                    alt="PR Sparkz Logo" 
                    className="object-contain w-full h-full drop-shadow-sm"
                  />
                </div>
                
                {/* Text below logo - Reduced boldness and improved spacing */}
                <h1 className="text-lg font-semibold -mt-2 tracking-wide" style={{ color: '#8666A5' }}>
                  PR SPARKZ
                </h1>

                {/* Enhanced floating particles around logo with better colors */}
                <div className="absolute -top-2 -right-2 w-2.5 h-2.5 bg-purple-400 rounded-full opacity-70 group-hover:animate-ping transition-all duration-300"></div>
                <div className="absolute -bottom-1 -left-2 w-2 h-2 bg-purple-300 rounded-full opacity-60 group-hover:animate-ping delay-150 transition-all duration-300"></div>
                <div className="absolute top-2 -left-3 w-1.5 h-1.5 bg-lavender-400 rounded-full opacity-50 group-hover:animate-pulse delay-300 transition-all duration-300"></div>
              </div>
            </Link>

            {/* Desktop Navigation - Ultra Modern */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item, index) => (
                <div
                  key={item.label}
                  className="relative group"
                  onMouseEnter={() => handleDropdownEnter(item.label)}
                  onMouseLeave={handleDropdownLeave}
                >
                  {item.dropdown ? (
                    <div
                      className="nav-item group relative px-5 py-2.5 rounded-xl transition-all duration-400 hover:bg-purple-50/80 flex items-center cursor-pointer interactive"
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-600 text-sm group-hover:text-purple-700 transition-colors duration-300">
                          {item.icon}
                        </span>
                        <span className="text-gray-800 font-medium group-hover:text-purple-800 transition-all duration-300 tracking-wide">
                          {item.label}
                        </span>
                        <svg 
                          className="w-3 h-3 text-purple-500 transition-transform duration-300 group-hover:rotate-180 group-hover:text-purple-600" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                      
                      {/* Enhanced hover glow effect */}
                      <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-purple-100/0 to-purple-200/0 group-hover:from-purple-100/30 group-hover:to-purple-200/30 transition-all duration-400"></div>
                    </div>
                  ) : item.isSection ? (
                    <a
                      href={item.path}
                      onClick={(e) => handleSectionClick(e, item.path.substring(1))}
                      className={`nav-item group relative px-5 py-2.5 rounded-xl transition-all duration-400 hover:bg-purple-50/80 flex items-center interactive cursor-pointer`}
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-600 text-sm group-hover:text-purple-700 transition-colors duration-300">
                          {item.icon}
                        </span>
                        <span className="text-gray-800 font-medium group-hover:text-purple-800 transition-all duration-300 tracking-wide">
                          {item.label}
                        </span>
                      </div>
                    </a>
                  ) : (
                    <Link
                      to={item.path}
                      className={`nav-item group relative px-5 py-2.5 rounded-xl transition-all duration-400 hover:bg-purple-50/80 flex items-center interactive ${
                        isActive(item.path) ? 'bg-purple-100/60' : ''
                      }`}
                      style={{ animationDelay: `${index * 80}ms` }}
                    >
                      <div className="flex items-center space-x-2">
                        <span className="text-purple-600 text-sm group-hover:text-purple-700 transition-colors duration-300">
                          {item.icon}
                        </span>
                        <span className="text-gray-800 font-medium group-hover:text-purple-800 transition-all duration-300 tracking-wide">
                          {item.label}
                        </span>
                      </div>
                      
                      {/* Enhanced active indicator */}
                      {isActive(item.path) && (
                        <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 rounded-full ${
                          item.path === '/' ? 'w-3/4 h-0.5 bg-gradient-to-r from-purple-400 to-purple-500' : ''
                        }`}></div>
                      )}
                    </Link>
                  )}

                  {/* Enhanced Dropdown Menu */}
                  {item.dropdown && hoveredItem === item.label && (
                    <div 
                      className="absolute top-full left-0 mt-1 w-56 bg-white/97 backdrop-blur-2xl border border-purple-200/60 rounded-xl shadow-2xl shadow-purple-500/10 overflow-hidden z-50"
                      onMouseEnter={() => handleDropdownEnter(item.label)}
                      onMouseLeave={handleDropdownLeave}
                    >
                      <div className="py-2">
                        {item.dropdown.map((dropdownItem, idx) => (
                          dropdownItem.isSection ? (
                            <a
                              key={dropdownItem.label}
                              href={dropdownItem.path}
                              onClick={(e) => {
                                handleSectionClick(e, dropdownItem.path.substring(1));
                                setHoveredItem(null);
                              }}
                              className="block px-5 py-2.5 text-gray-700 hover:text-purple-800 hover:bg-purple-50/60 transition-all duration-300 group cursor-pointer"
                            >
                              <div className="flex items-center">
                                <div className="w-1 h-1 rounded-full mr-3 transition-all duration-300 bg-purple-400 opacity-0 group-hover:opacity-50"></div>
                                <span className="text-sm font-medium">{dropdownItem.label}</span>
                              </div>
                            </a>
                          ) : (
                            <Link
                              key={dropdownItem.label}
                              to={dropdownItem.path}
                              className={`block px-5 py-2.5 text-gray-700 hover:text-purple-800 hover:bg-purple-50/60 transition-all duration-300 group ${
                                isActive(dropdownItem.path) ? 'bg-purple-50/60 text-purple-800' : ''
                              }`}
                              onClick={() => setHoveredItem(null)}
                            >
                              <div className="flex items-center">
                                <div className={`w-1 h-1 rounded-full mr-3 transition-all duration-300 ${
                                  isActive(dropdownItem.path) 
                                    ? 'bg-purple-500 opacity-100' 
                                    : 'bg-purple-400 opacity-0 group-hover:opacity-50'
                                }`}></div>
                                <span className="text-sm font-medium">{dropdownItem.label}</span>
                              </div>
                            </Link>
                          )
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Premium CTA Button */}
            <div className="hidden lg:flex items-center space-x-3">
              <a href="#contact" onClick={(e) => handleSectionClick(e, 'contact')} className="group relative overflow-hidden px-6 py-2.5 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 transition-all duration-400 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/30 interactive cursor-pointer">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-purple-800 opacity-0 group-hover:opacity-100 transition-opacity duration-400"></div>
                <span className="relative z-10 text-white font-semibold text-sm flex items-center space-x-1.5 tracking-wide">
                  <span>Get Started</span>
                  <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </span>
              </a>
            </div>

            {/* Enhanced Ultra Modern Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden relative w-11 h-11 rounded-xl bg-purple-50/60 backdrop-blur-sm border border-purple-200/60 flex items-center justify-center group hover:bg-purple-100/60 transition-all duration-300 interactive shadow-sm"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="relative w-5 h-5">
                <span className={`absolute block w-5 h-0.5 bg-purple-600 rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'top-2 rotate-45' : 'top-1'
                }`}></span>
                <span className={`absolute block w-5 h-0.5 bg-purple-600 rounded-full top-2 transition-all duration-300 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute block w-5 h-0.5 bg-purple-600 rounded-full transition-all duration-300 ${
                  isMenuOpen ? 'top-2 -rotate-45' : 'top-3'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Enhanced Premium Mobile Menu */}
        <div className={`lg:hidden absolute top-full left-0 right-0 transition-all duration-400 ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}>
          <div className="bg-white/97 backdrop-blur-2xl border-b border-purple-200/60 shadow-2xl shadow-purple-500/10" style={{ fontFamily: "'Montserrat', sans-serif" }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6">
              <div className="space-y-1">
                {navItems.map((item, index) => (
                  <div key={item.label}>
                    {item.dropdown ? (
                      <div 
                        className="group flex items-center justify-between p-3 rounded-xl hover:bg-purple-50/60 transition-all duration-300 cursor-pointer interactive"
                        onClick={() => toggleMobileDropdown(item.label)}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-purple-600 text-lg">{item.icon}</span>
                          <span className="text-gray-800 font-medium group-hover:text-purple-800 text-base">
                            {item.label}
                          </span>
                        </div>
                        <svg 
                          className={`w-4 h-4 text-purple-500 transition-transform duration-300 ${mobileOpenDropdown === item.label ? 'rotate-180' : ''}`} 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    ) : item.isSection ? (
                      <a
                        href={item.path}
                        onClick={(e) => {
                          handleSectionClick(e, item.path.substring(1));
                          setIsMenuOpen(false);
                          setMobileOpenDropdown(null);
                        }}
                        className="group flex items-center justify-between p-3 rounded-xl hover:bg-purple-50/60 transition-all duration-300 interactive cursor-pointer"
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-purple-600 text-lg">{item.icon}</span>
                          <span className="text-gray-800 font-medium group-hover:text-purple-800 text-base">
                            {item.label}
                          </span>
                        </div>
                      </a>
                    ) : (
                      <Link
                        to={item.path}
                        onClick={() => {
                          setIsMenuOpen(false);
                          setMobileOpenDropdown(null);
                        }}
                        className={`group flex items-center justify-between p-3 rounded-xl hover:bg-purple-50/60 transition-all duration-300 interactive ${
                          isActive(item.path) ? 'bg-purple-50/70' : ''
                        }`}
                      >
                        <div className="flex items-center space-x-3">
                          <span className="text-purple-600 text-lg">{item.icon}</span>
                          <span className="text-gray-800 font-medium group-hover:text-purple-800 text-base">
                            {item.label}
                          </span>
                        </div>
                        {/* Enhanced mobile underline for Home */}
                        {isActive(item.path) && item.path === '/' && (
                          <div className="w-1 h-6 bg-purple-500 rounded-full shadow-sm"></div>
                        )}
                      </Link>
                    )}
                    
                    {/* Enhanced mobile dropdown items */}
                    {item.dropdown && mobileOpenDropdown === item.label && (
                      <div className="pl-12 space-y-1 mt-1">
                        {item.dropdown.map((dropdownItem) => (
                          dropdownItem.isSection ? (
                            <a
                              key={dropdownItem.label}
                              href={dropdownItem.path}
                              onClick={(e) => {
                                handleSectionClick(e, dropdownItem.path.substring(1));
                                setIsMenuOpen(false);
                                setMobileOpenDropdown(null);
                              }}
                              className="block py-2 px-4 rounded-lg text-gray-700 hover:text-purple-800 hover:bg-purple-50/50 transition-all duration-300 text-sm cursor-pointer"
                            >
                              {dropdownItem.label}
                            </a>
                          ) : (
                            <Link
                              key={dropdownItem.label}
                              to={dropdownItem.path}
                              onClick={() => {
                                setIsMenuOpen(false);
                                setMobileOpenDropdown(null);
                              }}
                              className={`block py-2 px-4 rounded-lg text-gray-700 hover:text-purple-800 hover:bg-purple-50/50 transition-all duration-300 text-sm ${
                                isActive(dropdownItem.path) ? 'bg-purple-50/50 text-purple-800' : ''
                              }`}
                            >
                              {dropdownItem.label}
                            </Link>
                          )
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-purple-200/60">
                <a 
                  href="#contact"
                  onClick={(e) => {
                    handleSectionClick(e, 'contact');
                    setIsMenuOpen(false);
                    setMobileOpenDropdown(null);
                  }}
                  className="w-full group relative overflow-hidden px-6 py-3 rounded-xl bg-gradient-to-r from-purple-600 to-purple-700 transition-all duration-400 hover:scale-[1.02] block interactive cursor-pointer"
                >
                  <span className="relative z-10 text-white font-semibold flex items-center justify-center space-x-1.5 text-sm">
                    <span>Get Started</span>
                    <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Add CSS styles for the cursor and animations */}
      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&display=swap');
        
        .premium-cursor {
          position: fixed;
          width: 16px;
          height: 16px;
          background: radial-gradient(circle, rgba(166, 139, 227, 0.6) 0%, rgba(139, 114, 208, 0.4) 50%, transparent 70%);
          border: 1px solid rgba(166, 139, 227, 0.4);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transition: width 0.3s, height 0.3s, background 0.3s, transform 0.3s;
          transform: translate(-50%, -50%);
          backdrop-filter: blur(1px);
        }
        
        .cursor-hover {
          width: 36px;
          height: 36px;
          background: radial-gradient(circle, rgba(166, 139, 227, 0.4) 0%, rgba(139, 114, 208, 0.25) 50%, transparent 70%);
          border: 2px solid rgba(166, 139, 227, 0.5);
          transform: translate(-50%, -50%) scale(1.1);
        }
        
        body.custom-cursor, 
        body.custom-cursor * {
          cursor: none !important;
        }
        
        /* Premium scroll animations */
        @keyframes float-in {
          from {
            opacity: 0;
            transform: translateY(-15px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .nav-item {
          animation: float-in 0.5s ease-out forwards;
          opacity: 0;
        }

        /* Smooth transitions for all interactive elements */
        .interactive {
          transition: all 0.3s ease;
        }

        /* Enhanced professional focus states */
        .interactive:focus {
          outline: 2px solid rgba(166, 139, 227, 0.6);
          outline-offset: 2px;
        }

        /* High-performance animations */
        @media (prefers-reduced-motion: reduce) {
          .premium-cursor,
          .interactive,
          .nav-item {
            transition: none;
            animation: none;
          }
        }
      `}</style>
    </>
  );
};

export default ModernNavbar;