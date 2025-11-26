import React from 'react';
import { ArrowRight, Bot, Zap } from 'lucide-react';

const GeneralHero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-[90vh] flex items-center justify-center pt-32 pb-20 overflow-hidden bg-slate-950 border-b border-slate-900">
      
      {/* Background Effects */}
      <div className="absolute top-0 right-1/4 w-[800px] h-[500px] bg-indigo-600/20 rounded-full blur-[120px] opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[600px] h-[400px] bg-brand-600/10 rounded-full blur-[100px] pointer-events-none" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10 flex flex-col items-center">
        
        {/* Dictionary Definition Badge */}
        <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-slate-900/80 border border-slate-700 mb-8 backdrop-blur-sm animate-fade-in-up delay-100 shadow-lg shadow-brand-900/10 hover:border-brand-500/30 transition-colors cursor-default">
          <span className="flex items-baseline gap-2.5 text-sm">
            <span className="font-serif font-bold text-white tracking-wide">coepi</span>
            <span className="font-mono text-xs text-slate-500 tracking-tight">/ko-eh-pee/</span>
            <span className="font-serif italic text-slate-400 text-xs">Latin</span>
            <span className="font-serif italic text-brand-300">"to begin"</span>
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-8 leading-tight animate-fade-in-up delay-200">
          Building Intelligent <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-brand-200 to-brand-500">Solutions</span>
          <br /> Designed for Business Growth
        </h1>

        {/* Subheadline */}
        <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed animate-fade-in-up delay-300">
          From custom workflow automations to autonomous voice agents, we engineer systems that scale your operations, reduce overhead, and drive revenue.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-500">
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-950 transition-all duration-200 bg-white rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 hover:bg-brand-50 hover:scale-105"
          >
            Start Your Transformation
            <Zap className="ml-2 h-5 w-5 text-slate-950 fill-slate-950" />
            <div className="absolute -inset-3 rounded-full bg-white/20 blur-lg group-hover:opacity-100 opacity-0 transition-opacity duration-200" />
          </button>

          <button 
            onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-200 bg-slate-800/50 border border-slate-700 rounded-full hover:bg-slate-700 hover:border-slate-600 backdrop-blur-sm"
          >
            Explore Solutions
            <ArrowRight className="ml-2 h-5 w-5" />
          </button>
        </div>

        {/* Tech Stack / Trust Strip */}
        <div className="mt-20 pt-8 border-t border-slate-800/50 w-full animate-fade-in-up delay-700">
          <p className="text-slate-500 text-sm font-semibold tracking-wider uppercase mb-6">Powering workflows with</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Simple text representations for demo, typically logos would go here */}
            <span className="text-xl font-bold text-white flex items-center gap-2"><Bot className="h-6 w-6" /> OpenAI</span>
            <span className="text-xl font-bold text-white flex items-center gap-2">n8n</span>
            <span className="text-xl font-bold text-white flex items-center gap-2">Vercel</span>
            <span className="text-xl font-bold text-white flex items-center gap-2">Retell AI</span>
            <span className="text-xl font-bold text-white flex items-center gap-2">Make</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GeneralHero;