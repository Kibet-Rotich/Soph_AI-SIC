import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-50 py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12 border-b border-gray-200 pb-12">
          <div>
            <h4 className="text-lg font-bold text-gray-900 mb-4">SOPHIA Bioinformatics</h4>
            <p className="text-sm text-gray-500 font-light leading-relaxed max-w-sm">
              Modernizing computational molecular biology through unified tools, automated database mapping, and natural language explanation layers.
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-xs text-gray-400 font-light">
            &copy; {new Date().getFullYear()} SOPHIA Bioinformatics Project. Built with React & Tailwind CSS.
          </p>
          <div className="flex gap-6 text-xs text-gray-400 font-light">
            <a href="#hero" className="hover:text-gray-900 transition-colors">Back to top</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;