import { ArrowRight, Brain, Server, Shield, Cpu, MessageSquare, Database, Search, FileText, Calendar } from 'lucide-react';

export default function AgenticRag() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-900">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Brain className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Agentic RAG Solutions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Transform your business data into actionable intelligence with our advanced Retrieval Augmented Generation
            </p>
            <a 
              href="https://api.leadconnectorhq.com/widget/bookings/aiautomates-demo-callbc0h8s"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 text-lg transition-all"
            >
              Click Here For a Free Consultation Call <Calendar className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Overview Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Unlock the Power of Your Business Data
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our Agentic RAG system combines advanced AI with your business knowledge to deliver intelligent, context-aware solutions that drive real results.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Database,
                title: "Intelligent Document Analysis",
                desc: "Process and analyze documents with deep understanding",
                features: [
                  "Context awareness",
                  "Multi-format support",
                  "Semantic search",
                  "Knowledge extraction"
                ]
              },
              {
                icon: Search,
                title: "Advanced Query Processing",
                desc: "Get precise answers to complex business questions",
                features: [
                  "Natural language queries",
                  "Context-aware responses",
                  "Multi-source integration",
                  "Real-time processing"
                ]
              },
              {
                icon: FileText,
                title: "Knowledge Synthesis",
                desc: "Transform raw data into actionable insights",
                features: [
                  "Automated summarization",
                  "Trend identification",
                  "Pattern recognition",
                  "Insight generation"
                ]
              }
            ].map((feature, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-semibold">{feature.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{feature.desc}</p>
                <ul className="space-y-3">
                  {feature.features.map((item, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">How Agentic RAG Works</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                number: "01",
                title: "Data Ingestion",
                desc: "We securely process your business documents and data sources"
              },
              {
                number: "02",
                title: "Knowledge Processing",
                desc: "Advanced AI analyzes and indexes your information"
              },
              {
                number: "03",
                title: "Intelligent Retrieval",
                desc: "Context-aware system finds relevant information instantly"
              },
              {
                number: "04",
                title: "Smart Synthesis",
                desc: "AI generates accurate, actionable insights from your data"
              }
            ].map((step, i) => (
              <div key={i} className="relative">
                <div className="bg-white p-8 rounded-xl h-full">
                  <div className="text-5xl font-bold text-blue-600/20 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
                {i < 3 && (
                  <div className="hidden md:block absolute top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 text-blue-600">
                    <ArrowRight className="w-8 h-8" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Technical Features */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Enterprise-Grade Features</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                icon: Brain,
                title: "Advanced LLMs",
                desc: "State-of-the-art language models for deep understanding"
              },
              {
                icon: Server,
                title: "Vector Database",
                desc: "Efficient storage and retrieval of semantic information"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                desc: "Bank-grade security for your sensitive data"
              },
              {
                icon: Cpu,
                title: "Scalable Processing",
                desc: "Handle millions of documents efficiently"
              }
            ].map((tech, i) => (
              <div key={i} className="text-center">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                  <tech.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{tech.title}</h3>
                <p className="text-gray-600">{tech.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use Cases Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Common Use Cases</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Customer Support",
                desc: "Enhance support with instant access to product knowledge and customer history",
                features: [
                  "Instant answer generation",
                  "Context-aware responses",
                  "Historical data integration",
                  "Automated ticket routing"
                ]
              },
              {
                title: "Research & Analysis",
                desc: "Transform vast amounts of data into actionable business insights",
                features: [
                  "Market trend analysis",
                  "Competitive intelligence",
                  "Research synthesis",
                  "Pattern recognition"
                ]
              },
              {
                title: "Document Processing",
                desc: "Automate the extraction and analysis of business documents",
                features: [
                  "Contract analysis",
                  "Policy compliance",
                  "Information extraction",
                  "Document classification"
                ]
              },
              {
                title: "Knowledge Management",
                desc: "Create and maintain a dynamic, intelligent knowledge base",
                features: [
                  "Automated updates",
                  "Smart categorization",
                  "Version control",
                  "Access management"
                ]
              }
            ].map((useCase, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold mb-4">{useCase.title}</h3>
                <p className="text-gray-600 mb-6">{useCase.desc}</p>
                <ul className="space-y-3">
                  {useCase.features.map((feature, j) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Unlock Your Data's Potential?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your business data into actionable intelligence with our Agentic RAG solutions.
          </p>
          <a 
            href="https://api.leadconnectorhq.com/widget/bookings/aiautomates-demo-callbc0h8s"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 text-lg transition-all"
          >
            Click Here For a Free Consultation Call <Calendar className="w-5 h-5" />
          </a>
        </div>
      </div>
    </div>
  );
}