import React, { useState } from 'react';
import { Send, Loader2, Mail, MessageSquare } from 'lucide-react';
import { submitLeadForm } from '../services/api';
import { LeadFormData, IndustryType } from '../types';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<LeadFormData>({
    name: '',
    email: '',
    phone: '',
    company: '',
    industry: IndustryType.OTHER,
    message: '',
    source: 'website_contact_form'
  });

  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('submitting');
    setErrorMessage('');

    const result = await submitLeadForm(formData);

    if (result.success) {
      setStatus('success');
    } else {
      setStatus('error');
      setErrorMessage(result.message);
    }
  };

  return (
    <section id="contact" className="py-24 bg-slate-950 border-t border-slate-900 relative overflow-hidden">
       {/* Background Effects */}
       <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-brand-900/10 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Start Your <span className="text-brand-400">Automation Journey</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Ready to scale? Tell us about your business needs. We'll review your requirements and reach out to schedule a strategy session.
          </p>
        </div>

        <div className="max-w-3xl mx-auto bg-slate-900/50 border border-slate-800 rounded-2xl p-8 md:p-12 shadow-2xl backdrop-blur-sm">
          {status === 'success' ? (
            <div className="text-center py-12 animate-fade-in">
              <div className="mx-auto h-20 w-20 bg-green-500/10 rounded-full flex items-center justify-center mb-6">
                <Send className="h-10 w-10 text-green-500" />
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">Message Received</h3>
              <p className="text-slate-400 mb-8 max-w-md mx-auto">
                Thank you for reaching out. Our team will review your inquiry and get back to you shortly with next steps.
              </p>
              <button 
                onClick={() => {
                  setStatus('idle');
                  setFormData(prev => ({ ...prev, message: '' }));
                }}
                className="text-brand-400 hover:text-brand-300 font-medium underline"
              >
                Send another message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-slate-300 mb-2">Full Name</label>
                  <input
                    type="text"
                    id="contact-name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder="Jane Smith"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-slate-300 mb-2">Work Email</label>
                  <input
                    type="email"
                    id="contact-email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder="jane@company.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="contact-company" className="block text-sm font-medium text-slate-300 mb-2">Company Name</label>
                  <input
                    type="text"
                    id="contact-company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder="Acme Inc."
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium text-slate-300 mb-2">Phone Number</label>
                  <input
                    type="tel"
                    id="contact-phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all"
                    placeholder="+1 (555) 000-0000"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-slate-300 mb-2">How can we help?</label>
                <textarea
                  id="contact-message"
                  name="message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full bg-slate-950 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-600 focus:outline-none focus:ring-2 focus:ring-brand-500 focus:border-transparent transition-all resize-none"
                  placeholder="Tell us about your current challenges and what you're looking to automate..."
                />
              </div>

              {status === 'error' && (
                <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-lg text-red-400 text-sm">
                  {errorMessage || 'Something went wrong. Please try again.'}
                </div>
              )}

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full bg-white hover:bg-slate-200 text-slate-950 font-bold py-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-200 flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {status === 'submitting' ? (
                    <>
                      <Loader2 className="animate-spin h-5 w-5" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Mail className="h-5 w-5" />
                      Send Message
                    </>
                  )}
                </button>
              </div>
            </form>
          )}
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800">
                <Mail className="h-6 w-6 text-brand-400 mx-auto mb-4" />
                <h4 className="text-white font-semibold mb-2">Email Us</h4>
                <p className="text-slate-400 text-sm">paul.n.basco@gmail.com</p>
            </div>
            <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800">
                <MessageSquare className="h-6 w-6 text-brand-400 mx-auto mb-4" />
                <h4 className="text-white font-semibold mb-2">Live Chat</h4>
                <p className="text-slate-400 text-sm">Available Mon-Fri, 9am - 5pm EST</p>
            </div>
             <div className="p-6 rounded-xl bg-slate-900/30 border border-slate-800">
                <div className="h-6 w-6 mx-auto mb-4 text-brand-400 font-serif font-bold text-xl">C</div>
                <h4 className="text-white font-semibold mb-2">coepi.co</h4>
                <p className="text-slate-400 text-sm">Automation Solutions</p>
            </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;