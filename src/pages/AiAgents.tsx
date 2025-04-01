import { ArrowRight, Bot, MessageSquare, Brain, Zap, Target, Shield } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function AiAgents() {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Brain className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Agents for Business</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Intelligent agents that understand context, make decisions, and take actions to automate your business processes
            </p>
            <button 
              onClick={navigateToContact}
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 text-lg transition-all"
            >
              Contact Us Today <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Content Creation Agent",
                desc: "Generate high-quality content across multiple formats",
                features: [
                  "Blog post writing",
                  "Social media content",
                  "Email campaigns",
                  "Product descriptions"
                ]
              },
              {
                title: "Research Assistant",
                desc: "Conduct comprehensive research and analysis",
                features: [
                  "Market research",
                  "Competitor analysis",
                  "Trend identification",
                  "Data synthesis"
                ]
              },
              {
                title: "Process Automation",
                desc: "Automate repetitive tasks and workflows",
                features: [
                  "Document processing",
                  "Data entry automation",
                  "Report generation",
                  "Task orchestration"
                ]
              }
            ].map((agent, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{agent.title}</h3>
                <p className="text-gray-600 mb-6">{agent.desc}</p>
                <ul className="space-y-3">
                  {agent.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Why Choose Our AI Agents?</h2>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Brain,
                title: "Contextual Understanding",
                desc: "Our agents understand context and nuance, making intelligent decisions based on your business rules"
              },
              {
                icon: Zap,
                title: "Lightning Fast",
                desc: "Process tasks in seconds that would take humans hours or days to complete"
              },
              {
                icon: Target,
                title: "Accuracy Focused",
                desc: "Achieve higher accuracy and consistency in task execution"
              },
              {
                icon: Shield,
                title: "Secure & Private",
                desc: "Enterprise-grade security ensuring your data stays protected"
              },
              {
                icon: Bot,
                title: "Always Learning",
                desc: "Agents continuously improve their performance based on feedback and new data"
              },
              {
                icon: MessageSquare,
                title: "Easy Integration",
                desc: "Seamlessly integrate with your existing tools and workflows"
              }
            ].map((benefit, i) => (
              <div key={i} className="text-center">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                  <benefit.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-2xl font-semibold mb-4">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Automate Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your business with intelligent AI agents that work 24/7 to drive efficiency and growth.
          </p>
          <button 
            onClick={navigateToContact}
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 text-lg transition-all"
          >
            Contact Us Today <MessageSquare className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}