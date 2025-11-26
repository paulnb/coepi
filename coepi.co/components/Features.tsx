import React from 'react';
import { Phone, BarChart3, FileText, Rocket, MessageSquare, Heart } from 'lucide-react';

const features = [
  {
    title: "Autonomous Voice Agent",
    description: "Natural, human-like voice AI that handles inbound/outbound calls, schedules appointments, and qualifies leads 24/7 without latency.",
    icon: Phone,
    color: "text-brand-400"
  },
  {
    title: "Intelligent Sales Agent",
    description: "Automates your CRM pipeline. Triggers intelligent follow-ups, manages scheduling, and re-engages dead leads automatically.",
    icon: BarChart3,
    color: "text-orange-400"
  },
  {
    title: "Proposal Generator",
    description: "Turns sales calls into closed deals. Listens to conversation transcripts and generates production-ready slide decks and proposals in seconds.",
    icon: FileText,
    color: "text-purple-400"
  },
  {
    title: "Client Onboarding Agent",
    description: "Zero-friction starts. Automatically sends contracts, provisions Google Drive folders, and deploys welcome assets immediately upon signing.",
    icon: Rocket,
    color: "text-green-400"
  },
  {
    title: "SMS & Text Agent",
    description: "Engage customers where they pay attention. Instant text responses, appointment reminders, and personalized marketing campaigns at scale.",
    icon: MessageSquare,
    color: "text-blue-400"
  },
  {
    title: "Assistance, Not Replacement",
    description: "We believe in AI as a tool to empower people. We automate the busy work so your human team can focus on strategy and relationships.",
    icon: Heart,
    color: "text-red-400"
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 bg-slate-950 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Ecosystem of <span className="text-brand-400">Intelligent Agents</span>
          </h2>
          <p className="text-slate-400 max-w-2xl mx-auto">
            A comprehensive suite of intelligent automations designed to handle every stage of your business lifecycle.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-brand-500/50 transition-all duration-300 hover:bg-slate-900 hover:shadow-lg hover:shadow-brand-900/20"
            >
              <div className={`h-12 w-12 rounded-lg bg-slate-800 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`h-6 w-6 ${feature.color}`} />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-brand-300 transition-colors">
                {feature.title}
              </h3>
              <p className="text-slate-400 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;