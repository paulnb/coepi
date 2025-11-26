import React from 'react';

const CalBooking: React.FC = () => {
  return (
    <section id="booking" className="py-24 bg-slate-950 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Build Your Solution?
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto mb-8">
            Schedule a 1-on-1 strategy session. We'll map out your workflows and design a custom implementation plan.
          </p>
        </div>

        <div className="w-full h-[700px] bg-white rounded-xl overflow-hidden shadow-2xl ring-1 ring-slate-800">
            <iframe 
                src="https://cal.com/paulbasco/ai-voice-demo" 
                width="100%" 
                height="100%" 
                frameBorder="0"
                title="Book a consultation"
                style={{ width: '100%', height: '100%' }}
            ></iframe>
        </div>
      </div>
    </section>
  );
};

export default CalBooking;