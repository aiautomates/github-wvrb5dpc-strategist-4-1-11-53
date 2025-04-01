import { ArrowDown, Workflow, Brain, Zap, Target, Clock, Calendar } from 'lucide-react';

export default function AiWorkflows() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-900">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Workflow className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI-Powered Workflows</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Automate complex business processes with intelligent workflows that adapt and learn
            </p>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 text-lg transition-all">
              Explore Solutions <ArrowDown className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Workflow Types */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Intelligent Workflow Solutions</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Document Processing",
                desc: "Automate document handling and data extraction",
                features: [
                  "Invoice processing",
                  "Contract analysis",
                  "Form extraction",
                  "Document classification"
                ]
              },
              {
                title: "Customer Service",
                desc: "Streamline customer support processes",
                features: [
                  "Ticket routing",
                  "Response automation",
                  "Sentiment analysis",
                  "Priority handling"
                ]
              },
              {
                title: "Data Analysis",
                desc: "Automated data processing and insights",
                features: [
                  "Data cleaning",
                  "Pattern recognition",
                  "Trend analysis",
                  "Report generation"
                ]
              }
            ].map((workflow, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{workflow.title}</h3>
                <p className="text-gray-600 mb-6">{workflow.desc}</p>
                <ul className="space-y-3">
                  {workflow.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700">
                      <ArrowDown className="w-4 h-4 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Workflow Features</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "Adaptive Learning",
                desc: "Workflows that learn and improve from experience"
              },
              {
                icon: Zap,
                title: "Real-time Processing",
                desc: "Handle tasks and make decisions in real-time"
              },
              {
                icon: Target,
                title: "Custom Rules",
                desc: "Define custom business rules and logic"
              },
              {
                icon: Clock,
                title: "24/7 Operation",
                desc: "Automated workflows that never sleep"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Transform Your Business Processes</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Let our AI-powered workflows handle your complex business processes while you focus on growth.
          </p>
          <a 
            href="https://api.leadconnectorhq.com/widget/bookings/aiautomates-demo-callbc0h8s"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 text-lg transition-all"
          >
            Click Here To Schedule A Day And Time <Calendar className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}