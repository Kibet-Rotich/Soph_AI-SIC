import React from 'react';
import { UploadCloud, Cpu, Database, Sparkles, FileText } from 'lucide-react';

const Workflow = () => {
  const steps = [
    {
      icon: <UploadCloud size={20} className="text-gray-700" />,
      title: "1. Upload & Validation",
      description: "Securely upload FASTA or FASTQ sequence files. SOPHIA instantly validates the sequence data and prepares it for the core analysis engine."
    },
    {
      icon: <Cpu size={20} className="text-gray-700" />,
      title: "2. Core Analysis Engine",
      description: "The system runs essential sequence statistics, including GC content, codon usage, open reading frame (ORF) detection, and translation."
    },
    {
      icon: <Database size={20} className="text-gray-700" />,
      title: "3. Database & Tool Integration",
      description: "SOPHIA automatically queries external resources like NCBI BLAST, UniProt, KEGG, and structural databases (PDB/AlphaFold) to retrieve deep biological context."
    },
    {
      icon: <Sparkles size={20} className="text-gray-700" />,
      title: "4. AI Interpretation Layer",
      description: "A large language model reviews the raw computational outputs and synthesizes a plain-language, scientifically sound summary of the findings."
    },
    {
      icon: <FileText size={20} className="text-gray-700" />,
      title: "5. Report Generation",
      description: "Results, AI summaries, and interactive visualizations are compiled into a clean dashboard and a downloadable PDF report for easy sharing."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-b border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase mb-3">How It Works</h2>
          <h3 className="text-3xl font-bold text-gray-900">The SOPHIA Pipeline</h3>
        </div>

        <div className="relative border-l border-gray-200 ml-6 md:ml-8 space-y-12 pb-4">
          {steps.map((step, index) => (
            <div key={index} className="relative pl-8 md:pl-12">
              {/* Timeline dot */}
              <div className="absolute -left-6 top-1 w-12 h-12 bg-white rounded-full border border-gray-200 flex items-center justify-center shadow-sm">
                {step.icon}
              </div>
              
              <div className="bg-white p-8 rounded-xl border border-gray-100 shadow-sm">
                <h4 className="text-xl font-semibold text-gray-900 mb-3">{step.title}</h4>
                <p className="text-gray-500 leading-relaxed font-light">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Workflow;