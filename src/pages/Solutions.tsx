import { ArrowRight, Brain, Bot, Workflow, Server, Shield, MessageSquare, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Solutions() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-900">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Brain className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Our AI Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Comprehensive AI solutions tailored to transform your business operations and drive growth
            </p>
          </div>
        </div>
      </div>

      {/* Main Solutions Grid */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Chat Bots */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <Bot className="w-12 h-12 text-blue-600" />
                <div>
                  <h2 className="text-2xl font-bold">AI Chat Bots</h2>
                  <p className="text-gray-600">24/7 Customer Engagement</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Intelligent conversational AI that handles customer inquiries, provides support, and drives sales around the clock.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Customer service automation
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Sales and lead qualification
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Appointment scheduling
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Multi-language support
                </li>
              </ul>
              <Link 
                to="/chatbots"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* AI Agents */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <Brain className="w-12 h-12 text-blue-600" />
                <div>
                  <h2 className="text-2xl font-bold">AI Agents</h2>
                  <p className="text-gray-600">Intelligent Task Automation</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Advanced AI agents that understand context, make decisions, and take actions to automate complex business processes.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Content creation and management
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Research and analysis
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Process automation
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Decision support
                </li>
              </ul>
              <Link 
                to="/agents"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* AI Workflows */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <Workflow className="w-12 h-12 text-blue-600" />
                <div>
                  <h2 className="text-2xl font-bold">AI Workflows</h2>
                  <p className="text-gray-600">End-to-End Process Automation</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Streamline operations with intelligent workflows that adapt and learn from your business processes.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Document processing automation
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Customer service workflows
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Data analysis pipelines
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Business process optimization
                </li>
              </ul>
              <Link 
                to="/workflows"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Agentic RAG */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg border border-gray-100">
              <div className="flex items-center gap-4 mb-6">
                <Server className="w-12 h-12 text-blue-600" />
                <div>
                  <h2 className="text-2xl font-bold">Agentic RAG Solutions</h2>
                  <p className="text-gray-600">Advanced Document Intelligence</p>
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                Transform your business data into actionable intelligence with our advanced Retrieval Augmented Generation system.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Intelligent document analysis
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Advanced query processing
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Knowledge synthesis
                </li>
                <li className="flex items-center gap-2 text-gray-700">
                  <ArrowRight className="w-4 h-4 text-blue-600" />
                  Enterprise data integration
                </li>
              </ul>
              <Link 
                to="/agentic-rag"
                className="inline-flex items-center gap-2 text-blue-600 font-semibold hover:text-blue-700 transition-colors"
              >
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Enterprise-Ready Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Enterprise Security",
                desc: "Bank-grade security with end-to-end encryption and compliance measures"
              },
              {
                icon: Cpu,
                title: "Scalable Infrastructure",
                desc: "Built to handle enterprise workloads with automatic scaling capabilities"
              },
              {
                icon: Brain,
                title: "Advanced AI Models",
                desc: "Powered by the latest language models and machine learning technologies"
              }
            ].map((feature, i) => (
              <div key={i} className="text-center">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                  <feature.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let's discuss how our AI solutions can drive efficiency and growth for your organization.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 text-lg transition-all">
            Schedule a Consultation <MessageSquare className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}