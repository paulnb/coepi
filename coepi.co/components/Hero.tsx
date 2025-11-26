import React, { useState, useEffect, useCallback } from 'react';
import { ArrowRight, PhoneCall, ChevronLeft, ChevronRight, Zap, FileText, Users, BarChart } from 'lucide-react';

const slides = [
  {
    id: 'voice',
    badge: 'Flagship Solution',
    icon: PhoneCall,
    title: <>Automate Calls with <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-blue-500">Human-Like AI</span></>,
    description: "Deploy autonomous voice agents that verify leads, schedule appointments, and handle complex inquiries across industries. Zero latency. 100% conversational.",
    ctaText: "Try Live Demo",
    ctaAction: "demo",
    color: "brand", // Teal/Blue theme
    bgGlow: "bg-brand-600/10",
    secondaryGlow: "bg-blue-600/10"
  },
  {
    id: 'sales',
    badge: 'Intelligent CRM Agent',
    icon: BarChart,
    title: <>The Sales Pipeline <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-300 to-red-500">That Runs Itself</span></>,
    description: "Automated lead nurturing that feels personal. Triggers intelligent follow-ups, manages scheduling via Calendly, and re-engages no-shows 24/7 without human intervention.",
    ctaText: "Build This Workflow",
    ctaAction: "contact",
    color: "orange",
    bgGlow: "bg-orange-600/10",
    secondaryGlow: "bg-red-600/10"
  },
  {
    id: 'proposal',
    badge: 'Generative Automation',
    icon: FileText,
    title: <>From Sales Call to <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-pink-500">Proposal in Seconds</span></>,
    description: "Stop writing proposals manually. Our AI listens to your sales calls, extracts key pain points and solutions, and generates production-ready slide decks instantly.",
    ctaText: "Automate Proposals",
    ctaAction: "contact",
    color: "purple",
    bgGlow: "bg-purple-600/10",
    secondaryGlow: "bg-pink-600/10"
  },
  {
    id: 'onboarding',
    badge: 'Client Success Agent',
    icon: Users,
    title: <>Zero-Friction <br /><span className="text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-emerald-500">Client Onboarding</span></>,
    description: "Close the deal and let AI handle the rest. Instantly generate contracts, provision Google Drive folders, and deploy welcome assets the moment they sign.",
    ctaText: "Streamline Onboarding",
    ctaAction: "contact",
    color: "green",
    bgGlow: "bg-green-600/10",
    secondaryGlow: "bg-emerald-600/10"
  }
];

const Hero: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    setIsAutoPlaying(false);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
    setIsAutoPlaying(false);
  };

  useEffect(() => {
    let interval: any;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 6000); // Change slide every 6 seconds
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const slide = slides[currentSlide];

  const handleCtaClick = (actionId: string) => {
    const element = document.getElementById(actionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="solutions" className="relative min-h-[85vh] flex items-center justify-center py-24 overflow-hidden bg-slate-950 transition-colors duration-1000">
      
      {/* Dynamic Background Effects */}
      <div className={`absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] ${slide.secondaryGlow} rounded-full blur-[100px] pointer-events-none transition-all duration-1000`} />
      <div className={`absolute bottom-0 right-0 w-[800px] h-[600px] ${slide.bgGlow} rounded-full blur-[120px] pointer-events-none transition-all duration-1000`} />
      
      {/* Grid Pattern */}
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 z-10 w-full">
        
        {/* Navigation Buttons (Desktop) */}
        <button 
          onClick={prevSlide}
          className="hidden md:flex absolute left-4 lg:left-0 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-300 hover:bg-slate-800 hover:text-white transition-all z-20 backdrop-blur-sm"
          aria-label="Previous slide"
        >
          <ChevronLeft size={24} />
        </button>

        <button 
          onClick={() => {
            nextSlide();
            setIsAutoPlaying(false);
          }}
          className="hidden md:flex absolute right-4 lg:right-0 top-1/2 -translate-y-1/2 h-12 w-12 items-center justify-center rounded-full border border-slate-700 bg-slate-900/50 text-slate-300 hover:bg-slate-800 hover:text-white transition-all z-20 backdrop-blur-sm"
          aria-label="Next slide"
        >
          <ChevronRight size={24} />
        </button>

        {/* Slide Content */}
        <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
          
          {/* Badge */}
          <div className="animate-fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-700 mb-8 backdrop-blur-md">
            <span className={`flex h-2 w-2 rounded-full animate-pulse ${
              currentSlide === 0 ? 'bg-brand-500' : 
              currentSlide === 1 ? 'bg-orange-500' :
              currentSlide === 2 ? 'bg-purple-500' : 'bg-green-500'
            }`}></span>
            <span className="text-sm text-slate-300 font-medium">{slide.badge}</span>
          </div>

          {/* Headline */}
          <div className="min-h-[160px] md:min-h-[180px] flex items-center justify-center">
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-8 leading-tight animate-fade-in-up key-{currentSlide}">
              {slide.title}
            </h2>
          </div>

          {/* Subheadline */}
          <p className="max-w-2xl mx-auto text-lg md:text-xl text-slate-400 mb-10 leading-relaxed min-h-[84px] animate-fade-in-up delay-100">
            {slide.description}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up delay-200">
            <button 
              onClick={() => handleCtaClick(slide.ctaAction)}
              className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-slate-950 transition-all duration-200 bg-white rounded-full focus:outline-none hover:bg-brand-50 hover:scale-105"
            >
              {slide.ctaText}
              <slide.icon className="ml-2 h-5 w-5 text-slate-950 group-hover:rotate-12 transition-transform" />
              <div className="absolute -inset-3 rounded-full bg-white/20 blur-lg group-hover:opacity-100 opacity-0 transition-opacity duration-200" />
            </button>
            
            <button 
              onClick={() => handleCtaClick('contact')}
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white transition-all duration-200 bg-slate-800/50 border border-slate-700 rounded-full hover:bg-slate-700 hover:border-slate-600 backdrop-blur-sm"
            >
              Book Strategy Call
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Pagination Dots */}
        <div className="mt-16 flex justify-center space-x-3">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentSlide === index ? 'w-8 bg-white' : 'w-2 bg-slate-700 hover:bg-slate-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Hero;