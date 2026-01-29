import React from 'react';
import { personalInfo } from '../data/mock';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Name */}
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-white mb-1">{personalInfo.name}</p>
            <p className="text-sm text-gray-500">{personalInfo.title}</p>
          </div>

          {/* Center - Social Links */}
          <div className="flex items-center gap-6">
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-gray-400 hover:text-white transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Right - Copyright */}
          <div className="text-center md:text-right">
            <p className="text-sm text-gray-500">
              © {currentYear} All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;