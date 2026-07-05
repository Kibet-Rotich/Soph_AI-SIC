import React from 'react';

const Comparison = () => {
  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase mb-3">Positioning</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Bridging the gap in bioinformatics.
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            SOPHIA does not attempt to match the immense tool breadth of Galaxy or the commercial polish of Benchling. Instead, it offers a distinctly lower barrier to entry paired with an AI-interpretation layer that other platforms treat as an afterthought.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-900">
                <th className="py-5 px-6 text-sm font-semibold text-gray-500 uppercase tracking-wider w-1/4">Feature</th>
                <th className="py-5 px-6 text-sm font-semibold text-gray-900 w-1/4 bg-gray-50 rounded-t-lg">SOPHIA (Proposed)</th>
                <th className="py-5 px-6 text-sm font-semibold text-gray-500 uppercase tracking-wider w-1/4">Galaxy</th>
                <th className="py-5 px-6 text-sm font-semibold text-gray-500 uppercase tracking-wider w-1/4">Benchling / Geneious</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              
              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-5 px-6 text-sm font-medium text-gray-900">Primary Users</td>
                <td className="py-5 px-6 text-sm text-gray-800 bg-gray-50 font-medium">Students, early-career researchers</td>
                <td className="py-5 px-6 text-sm text-gray-500 font-light">Bioinformaticians, core facilities</td>
                <td className="py-5 px-6 text-sm text-gray-500 font-light">Industry & academic labs</td>
              </tr>

              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-5 px-6 text-sm font-medium text-gray-900">Tool Breadth</td>
                <td className="py-5 px-6 text-sm text-gray-800 bg-gray-50 font-medium">Narrow but growing (phased)</td>
                <td className="py-5 px-6 text-sm text-gray-500 font-light">Very large tool ecosystem</td>
                <td className="py-5 px-6 text-sm text-gray-500 font-light">Broad, commercially curated</td>
              </tr>

              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-5 px-6 text-sm font-medium text-gray-900">AI Interpretation</td>
                <td className="py-5 px-6 text-sm text-gray-800 bg-gray-50 font-medium">Core feature (Phase 1)</td>
                <td className="py-5 px-6 text-sm text-gray-500 font-light">Not a core feature</td>
                <td className="py-5 px-6 text-sm text-gray-500 font-light">Limited</td>
              </tr>

              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-5 px-6 text-sm font-medium text-gray-900">Cost & Access</td>
                <td className="py-5 px-6 text-sm text-gray-800 bg-gray-50 font-medium">Intended to be free / low-cost</td>
                <td className="py-5 px-6 text-sm text-gray-500 font-light">Free, self-host or public servers</td>
                <td className="py-5 px-6 text-sm text-gray-500 font-light">Commercial licensing</td>
              </tr>

              <tr className="hover:bg-gray-50 transition-colors">
                <td className="py-5 px-6 text-sm font-medium text-gray-900">Learning Curve</td>
                <td className="py-5 px-6 text-sm text-gray-800 bg-gray-50 font-medium rounded-b-lg">Designed to be low</td>
                <td className="py-5 px-6 text-sm text-gray-500 font-light">Moderate-high</td>
                <td className="py-5 px-6 text-sm text-gray-500 font-light">Low (paid onboarding)</td>
              </tr>

            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
};

export default Comparison;