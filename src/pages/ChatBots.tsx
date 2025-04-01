import { ArrowRight, Bot, MessageSquare } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function ChatBots() {
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
            <Bot className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI-Powered Chat Bots</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Engage your customers 24/7 with intelligent conversational AI powered by the latest language models
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
                title: "Customer Service Bot",
                desc: "Handle customer inquiries automatically and provide instant support 24/7",
                features: [
                  "Instant responses",
                  "Multi-language support",
                  "Ticket creation",
                  "FAQ integration"
                ]
              },
              {
                title: "Sales Bot",
                desc: "Convert visitors into customers with intelligent product recommendations",
                features: [
                  "Product suggestions",
                  "Price quotes",
                  "Appointment scheduling",
                  "Lead qualification"
                ]
              },
              {
                title: "Support Bot",
                desc: "Provide technical support and troubleshooting assistance",
                features: [
                  "Step-by-step guidance",
                  "Knowledge base integration",
                  "Issue escalation",
                  "Solution tracking"
                ]
              }
            ].map((bot, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{bot.title}</h3>
                <p className="text-gray-600 mb-6">{bot.desc}</p>
                <ul className="space-y-3">
                  {bot.features.map((feature, j) => (
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

      {/* CTA Section */}
      <div className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Customer Service?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Get started with our AI-powered chatbots today and provide exceptional customer service around the clock.
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