import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Subtle badge indicating project status */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 mb-8 tracking-wide">
          <Sparkles size={14} className="text-gray-400" />
          <span>Phase 1 Minimum Viable Product</span>
        </div>
        
        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-gray-900 mb-6">
          SOPHIA <span className="text-gray-300 font-light">Bioinformatics</span>
        </h1>
        
        {/* Subheadline based on the proposal abstract */}
        <p className="mt-4 max-w-2xl text-lg md:text-xl text-gray-500 mx-auto mb-10 leading-relaxed font-light">
          An AI-assisted platform that automates sequence analysis, retrieves relevant annotations, and provides plain-language interpretations of biological data.
        </p>
        
        {/* Call to Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-gray-900 text-white rounded-lg hover:bg-gray-800 transition-colors font-medium text-sm">
            Explore the Platform
            <ArrowRight size={16} />
          </button>
          <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-8 py-3.5 bg-white text-gray-600 border border-gray-200 rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-all font-medium text-sm shadow-sm">
            Read the Proposal
          </button>
        </div>
      </div>

      {/* Extremely subtle background gradients for depth without clutter */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none opacity-40">
        <div className="absolute top-1/4 left-10 w-96 h-96 bg-gray-50 rounded-full mix-blend-multiply filter blur-3xl"></div>
        <div className="absolute top-1/3 right-10 w-96 h-96 bg-gray-50 rounded-full mix-blend-multiply filter blur-3xl"></div>
      </div>
    </section>
  );
};

export default Hero;