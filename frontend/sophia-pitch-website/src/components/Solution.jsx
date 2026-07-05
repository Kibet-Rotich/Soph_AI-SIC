import React from 'react';
import { Workflow, BrainCircuit, FileSearch, ShieldCheck } from 'lucide-react';

const Solution = () => {
  const features = [
    {
      icon: <Workflow size={20} className="text-gray-600" />,
      title: "Unified Workspace",
      description: "Upload FASTA/FASTQ files and receive integrated analyses, visualizations, and next steps within a single interface."
    },
    {
      icon: <BrainCircuit size={20} className="text-gray-600" />,
      title: "AI-Assisted Interpretation",
      description: "Translates complex outputs from tools like BLAST, UniProt, and KEGG into plain-language, natural summaries."
    },
    {
      icon: <FileSearch size={20} className="text-gray-600" />,
      title: "Automated Data Retrieval",
      description: "Automatically pulls relevant gene annotations, protein structures, and metabolic pathways without manual searches."
    },
    {
      icon: <ShieldCheck size={20} className="text-gray-600" />,
      title: "Scientist in Control",
      description: "Designed to assist and accelerate the research process, never to act as a black-box replacement for scientific expertise."
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <div>
            <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase mb-3">The Solution</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              A single, intelligent environment for molecular biology.
            </h3>
            <p className="text-lg text-gray-600 leading-relaxed font-light mb-8">
              SOPHIA Bioinformatics unifies commonly used databases and computational tools. Instead of manually navigating multiple websites, researchers simply define their objective and let the platform automate the repetitive computational tasks.
            </p>
            <div className="inline-flex items-center gap-2 text-sm font-medium text-gray-900 pb-1 border-b border-gray-900 hover:text-gray-600 hover:border-gray-600 transition-colors cursor-pointer">
              View the System Architecture &rarr;
            </div>
          </div>

          {/* Right Column: Feature List */}
          <div className="space-y-8">
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 bg-gray-50 rounded-lg border border-gray-100 flex items-center justify-center">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h4>
                  <p className="text-gray-500 leading-relaxed font-light">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solution;