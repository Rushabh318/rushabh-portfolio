import React from 'react';
import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Header */}
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Let's Connect
          </h2>
          <p className="text-gray-400 text-lg mb-12 leading-relaxed">
            I'm currently seeking my next full-time role in Berlin, ideally in robotics, computer vision, or autonomous systems. If you think I'd be a good fit for your team, I'd love to hear from you.
          </p>

          {/* Contact Methods */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
            {/* Email */}
            <a
              href={`mailto:${personalInfo.email}`}
              className="border border-gray-800 p-8 bg-black hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <Mail size={24} className="text-gray-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    Email
                  </div>
                  <div className="text-white font-medium group-hover:text-gray-300 transition-colors">
                    Send Message
                  </div>
                </div>
              </div>
            </a>

            {/* LinkedIn */}
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-800 p-8 bg-black hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <Linkedin size={24} className="text-gray-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    LinkedIn
                  </div>
                  <div className="text-white font-medium group-hover:text-gray-300 transition-colors flex items-center gap-2">
                    Connect
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="border border-gray-800 p-8 bg-black hover:border-gray-700 transition-all duration-300 group"
            >
              <div className="flex flex-col items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gray-900 flex items-center justify-center group-hover:bg-gray-800 transition-colors">
                  <Github size={24} className="text-gray-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-2">
                    GitHub
                  </div>
                  <div className="text-white font-medium group-hover:text-gray-300 transition-colors flex items-center gap-2">
                    View Code
                    <ArrowUpRight size={16} />
                  </div>
                </div>
              </div>
            </a>
          </div>

          {/* Direct Contact Info */}
          <div className="border-t border-gray-800 pt-12">
            <p className="text-gray-500 mb-4">Or reach out directly</p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="text-2xl font-semibold text-white hover:text-gray-300 transition-colors"
            >
              {personalInfo.email}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;