import React from 'react';
import { ArrowRight } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const scrollToExperience = () => {
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black">
      {/* Background - LiDAR Point Cloud Inspired */}
      <div className="absolute inset-0 z-0 bg-black overflow-hidden">
        {/* Gradient base */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-950/20 via-black to-red-950/20"></div>
        
        {/* Concentric circles mimicking LiDAR scan patterns */}
        <svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="lidarGrad1" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.6" />
              <stop offset="50%" stopColor="#f7931e" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
            <radialGradient id="lidarGrad2" cx="50%" cy="50%">
              <stop offset="0%" stopColor="#ff4e00" stopOpacity="0.4" />
              <stop offset="70%" stopColor="#ff6b35" stopOpacity="0.2" />
              <stop offset="100%" stopColor="#000000" stopOpacity="0" />
            </radialGradient>
          </defs>
          
          {/* Concentric circles */}
          <circle cx="50%" cy="50%" r="20%" fill="none" stroke="url(#lidarGrad1)" strokeWidth="1" opacity="0.3" />
          <circle cx="50%" cy="50%" r="30%" fill="none" stroke="url(#lidarGrad1)" strokeWidth="1" opacity="0.25" />
          <circle cx="50%" cy="50%" r="40%" fill="none" stroke="url(#lidarGrad2)" strokeWidth="1" opacity="0.2" />
          <circle cx="50%" cy="50%" r="50%" fill="none" stroke="url(#lidarGrad2)" strokeWidth="1" opacity="0.15" />
          <circle cx="50%" cy="50%" r="60%" fill="none" stroke="#ff6b35" strokeWidth="0.5" opacity="0.1" />
        </svg>
        
        {/* Scattered points mimicking LiDAR point cloud */}
        <div className="absolute inset-0">
          {[...Array(150)].map((_, i) => {
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = Math.random() * 2 + 0.5;
            const opacity = Math.random() * 0.4 + 0.1;
            const delay = Math.random() * 3;
            const color = i % 3 === 0 ? '#ff6b35' : i % 3 === 1 ? '#f7931e' : '#ff4e00';
            
            return (
              <div
                key={i}
                className="absolute rounded-full animate-pulse"
                style={{
                  left: `${x}%`,
                  top: `${y}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: color,
                  opacity: opacity,
                  animationDelay: `${delay}s`,
                  animationDuration: '4s',
                  boxShadow: `0 0 ${size * 2}px ${color}`
                }}
              />
            );
          })}
        </div>
        
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/80 to-black"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-32">
        <div className="max-w-4xl">
          {/* Name */}
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight">
            {personalInfo.name}
          </h1>

          {/* Title */}
          <h2 className="text-3xl md:text-5xl font-semibold text-gray-300 mb-8 leading-tight">
            {personalInfo.title}
          </h2>

          {/* Summary */}
          <p className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl leading-relaxed">
            {personalInfo.summary}
          </p>

          {/* CTA Button */}
          <button
            onClick={scrollToExperience}
            className="inline-flex items-center gap-3 bg-white text-black px-8 py-4 rounded-sm font-semibold hover:bg-gray-200 transition-all duration-300 group"
          >
            View My Work
            <ArrowRight className="group-hover:translate-x-1 transition-transform" size={20} />
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10">
        <div className="w-6 h-10 border-2 border-gray-500 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-3 bg-gray-500 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;