import React from 'react';
import { Layers, Clock, AlertCircle, TrendingDown } from 'lucide-react';

const Problem = () => {
  const painPoints = [
    {
      icon: <Layers size={24} className="text-gray-700" />,
      title: "Fragmented Resources",
      description: "Researchers must manually navigate sequence databases, structural repositories, and primer design software, jumping between disconnected platforms."
    },
    {
      icon: <Clock size={24} className="text-gray-700" />,
      title: "Time-Consuming Workflows",
      description: "Significant time is lost searching for information, downloading files, converting formats, and manually transferring data between isolated tools."
    },
    {
      icon: <AlertCircle size={24} className="text-gray-700" />,
      title: "Increased Error Rates",
      description: "The manual stitching together of data introduces opportunities for human error and misinterpretation before experimental planning even begins."
    },
    {
      icon: <TrendingDown size={24} className="text-gray-700" />,
      title: "Steep Learning Curve",
      description: "This fragmentation severely limits accessibility, creating a high barrier to entry for students, early-career researchers, and smaller laboratories."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase mb-3">The Problem</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Bioinformatics is powerful, but heavily fragmented.
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Current in-silico workflows require researchers to act as manual data integrators. The constant context-switching reduces efficiency and complicates the actual science.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {painPoints.map((point, index) => (
            <div 
              key={index} 
              className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center mb-6 border border-gray-100">
                {point.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-3">{point.title}</h4>
              <p className="text-gray-500 leading-relaxed font-light">{point.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Problem;