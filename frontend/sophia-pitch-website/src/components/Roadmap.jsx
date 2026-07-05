import React from 'react';
import { CheckCircle2, Triangle, HelpCircle } from 'lucide-react';

const Roadmap = () => {
  const phases = [
    {
      number: "Phase 1",
      title: "Core Sequence Analysis (MVP)",
      status: "Current Scope",
      statusColor: "text-gray-900 bg-gray-100",
      icon: <CheckCircle2 size={20} className="text-gray-900" />,
      items: [
        "FASTA/FASTQ upload, validation, and safe storage",
        "Core sequence statistics (length, GC content, codon usage, ORF detection)",
        "DNA-to-protein translation pipelines",
        "Sequence similarity searching against NCBI BLAST",
        "LLM-generated, plain-language summary of raw findings",
        "Relational database storage (PostgreSQL) for history"
      ]
    },
    {
      number: "Phase 2",
      title: "Annotation & Visualization",
      status: "Planned",
      statusColor: "text-gray-500 bg-gray-50",
      icon: <Triangle size={18} className="text-gray-400 rotate-180" />,
      items: [
        "Protein functional annotation via UniProt lookups",
        "Pathway context mapping using KEGG queries",
        "Retrieval of structural models from PDB and AlphaFold DB",
        "Primer design assistance integration via Primer3",
        "Downloadable unified PDF reporting pipelines"
      ]
    },
    {
      number: "Phase 3",
      title: "Extended Integrations",
      status: "Stretch Goals",
      statusColor: "text-gray-400 bg-gray-50 border border-dashed border-gray-200",
      icon: <HelpCircle size={20} className="text-gray-300" />,
      items: [
        "Ensembl and Gene Ontology reference matrix mapping",
        "Cloning and vector/plasmid design utility tools",
        "Automated scientific literature search assistance",
        "Multi-agent AI scaling for complex downstream reasoning"
      ]
    }
  ];

  return (
    <section className="py-24 bg-white border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-16">
          <h2 className="text-sm font-semibold tracking-wide text-gray-500 uppercase mb-3">Timeline</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            A structured, achievable path forward.
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed font-light">
            Building all integrations at once introduces unnecessary development risk. SOPHIA minimizes this by structuring delivery into standalone, functional milestones that prove scientific utility at every milestone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {phases.map((phase, idx) => (
            <div key={idx} className="border border-gray-200 rounded-xl p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-widest">{phase.number}</span>
                  <span className={`text-xs px-2.5 py-1 rounded-full font-medium ${phase.statusColor}`}>
                    {phase.status}
                  </span>
                </div>
                
                <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  {phase.icon}
                  {phase.title}
                </h4>
                
                <ul className="space-y-4">
                  {phase.items.map((item, itemIdx) => (
                    <li key={itemIdx} className="flex items-start gap-3 text-sm text-gray-500 font-light leading-relaxed">
                      <span className="mt-1.5 w-1 h-1 bg-gray-400 rounded-full flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Roadmap;