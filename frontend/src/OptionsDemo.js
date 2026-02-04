import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import ExperienceOption1 from "./components/ExperienceOption1";
import ExperienceOption2 from "./components/ExperienceOption2";
import ExperienceOption3 from "./components/ExperienceOption3";
import Skills from "./components/Skills";
import Education from "./components/Education";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function OptionsDemo() {
  const [selectedOption, setSelectedOption] = useState(1);

  const ExperienceComponent = 
    selectedOption === 1 ? ExperienceOption1 :
    selectedOption === 2 ? ExperienceOption2 :
    ExperienceOption3;

  return (
    <div className="App bg-black">
      {/* Option Selector - Fixed at top */}
      <div className="fixed top-20 left-0 right-0 z-40 bg-black/95 backdrop-blur-sm border-b border-gray-800 py-4">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-white font-semibold">Choose Experience Layout:</p>
            <div className="flex gap-4">
              <button
                onClick={() => setSelectedOption(1)}
                className={`px-6 py-2 text-sm font-medium transition-all ${
                  selectedOption === 1
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Option 1: Alternating
              </button>
              <button
                onClick={() => setSelectedOption(2)}
                className={`px-6 py-2 text-sm font-medium transition-all ${
                  selectedOption === 2
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Option 2: Overlay
              </button>
              <button
                onClick={() => setSelectedOption(3)}
                className={`px-6 py-2 text-sm font-medium transition-all ${
                  selectedOption === 3
                    ? 'bg-white text-black'
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                Option 3: Timeline
              </button>
            </div>
          </div>
        </div>
      </div>

      <Header />
      <Hero />
      <About />
      <ExperienceComponent />
      <Skills />
      <Education />
      <Contact />
      <Footer />
    </div>
  );
}

export default OptionsDemo;
