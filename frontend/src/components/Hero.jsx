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
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1760553120296-afe0e7692768?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxhdXRvbm9tb3VzJTIwbW9iaWxlJTIwcm9ib3R8ZW58MHx8fHwxNzY5NzIxNDgzfDA&ixlib=rb-4.1.0&q=85"
          alt="Autonomous Mobile Robot"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-black"></div>
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
            onClick={scrollToProjects}
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