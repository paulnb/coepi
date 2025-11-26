import React from 'react';
import Navbar from './components/Navbar';
import GeneralHero from './components/GeneralHero';
import Hero from './components/Hero';
import Features from './components/Features';
import DemoForm from './components/DemoForm';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-slate-950 text-white font-sans selection:bg-brand-500/30 selection:text-brand-200">
      <Navbar />
      <main>
        <GeneralHero />
        <Features />
        <Hero />
        <DemoForm />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;