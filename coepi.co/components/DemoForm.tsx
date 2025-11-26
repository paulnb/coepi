import React, { useState } from 'react';
import { Phone, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { submitLeadForm } from '../services/api';
import { LeadFormData, IndustryType } from '../types';

const DemoForm: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: IndustryType.RETAIL
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    // Basic validation
    if (formData.phone.length < 10) {
      setStatus('error');
      setErrorMessage('Please enter a valid phone number with country code.');
      return;
    }

    const result = await submitLeadForm(formData);

    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage(result.message);
    }
  };

  return (
    <section id="demo" className="py-24 bg-slate-900 relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-900/10 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side: Info */}
          <div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Experience the <br />
              <span className="text-brand-400">Magic in Real-Time</span>
            </h2>
            <p className="text-lg text-slate-300 mb-8">
              Fill out the form to trigger an immediate call from our AI Agent. 
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-900/30 p-3 rounded-full">
                  <Phone className="text-brand-400 h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Instant Callback</h4>
                  <p className="text-slate-400 text-sm">Our system processes your request and dials your number within seconds.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-blue-900/30 p-3 rounded-full">
                  <CheckCircle2 className="text-blue-400 h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-white font-semibold">Verification Logic</h4>
                  <p className="text-slate-400 text-sm">The AI will verify you are a human and not a bot before proceeding to the demo selection.</p>
                </div>
              </div>
            </div>

            <div className="mt-12 p-6 bg-slate-800/50 border border-slate-700 rounded-xl">
              <p className="text-sm text-slate-400 italic">
                "I was skeptical at first, but the speed and natural cadence of the voice agent blew me away. It felt like talking to a real person."
              </p>
              <div className="mt-4 flex items-center gap-2">
                <div className="h-8 w-8 rounded-full bg-gradient-to-br from-purple-500 to-blue-500"></div>
                <span className="text-white font-medium text-sm">Early Beta User</span>
              </div>
            </div>
          </div>

          {/* Right Side: Form */}
          <div className="bg-slate-950 border border-slate-800 rounded-2xl p-8 shadow-2xl relative">
            {status === 'success' ? (
              <div className="text-center py-12 animate-fade-in">
                <div className="mx-auto h-20 w-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                  <Phone className="h-10 w-10 text-green-500 animate-pulse" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-2">Calling You Now!</h3>
                <p className="text-slate-400 mb-6">
                  Please keep your phone nearby. The AI agent is dialing 
                  <span className="text-white font-mono ml-2">{formData.phone}</span>.
                </p>
                <div className="p-4 bg-slate-900 rounded-lg border border-slate-800 text-sm text-slate-300">
                  <p>Didn't receive a call? Check your signal or try again in a minute.</p>
                </div>
                <button 
                  onClick={() => setStatus('idle')}
                  className="mt-8 text-brand-400 hover:text-brand-300 text-sm font-medium underline"
                >
                  Reset Form
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-1">
                  <h3 className="text-2xl font-bold text-white">Get Your Demo</h3>
                  <p className="text-slate-400 text-sm">Select an industry to hear a tailored conversation.</p>
                </div>

                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-1">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder="John Doe"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-1">Email Address</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-slate-300 mb-1">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                      placeholder="+1 (555) 000-0000"
                    />
                    <p className="text-xs text-slate-500 mt-1">Include country code if outside US.</p>
                  </div>
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-slate-300 mb-1">Select Industry Demo</label>
                  <div className="relative">
                    <select
                      id="industry"
                      name="industry"
                      value={formData.industry}
                      onChange={handleChange}
                      className="w-full bg-slate-900 border border-slate-700 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all appearance-none"
                    >
                      {Object.values(IndustryType).map((ind) => (
                        <option key={ind} value={ind}>{ind}</option>
                      ))}
                    </select>
                    <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                      <svg className="h-4 w-4 text-slate-500" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                    </div>
                  </div>
                </div>

                {status === 'error' && (
                  <div className="flex items-center gap-2 text-red-400 bg-red-400/10 p-3 rounded-lg text-sm">
                    <AlertCircle size={16} />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-brand-500 hover:bg-brand-400 text-white font-bold py-4 rounded-lg shadow-lg shadow-brand-500/20 hover:shadow-brand-500/40 transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5" />
                      Connecting...
                    </>
                  ) : (
                    <>
                      <Phone className="h-5 w-5 fill-current" />
                      Call Me Now
                    </>
                  )}
                </button>
                
                <p className="text-center text-xs text-slate-500 mt-4">
                  By submitting, you agree to receive an automated call for demonstration purposes.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DemoForm;