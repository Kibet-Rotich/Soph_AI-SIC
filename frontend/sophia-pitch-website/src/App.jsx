import React from 'react';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Workflow from './components/Workflow';
import Comparison from './components/Comparison';
import Roadmap from './components/Roadmap';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-gray-100">
      <main>
        <div id="hero"><Hero /></div>
        <Problem />
        <Solution />
        <Workflow />
        <Comparison />
        <Roadmap />
      </main>
      <Footer />
    </div>
  );
};

export default App;