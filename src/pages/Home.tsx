import { ArrowDown, Brain, Workflow, Bot, Cpu, Cloud, Shield, MessageSquare, Server, Sparkles, Phone, FileCheck, Rocket, Zap, Target, Clock, Mail, MapPin, Users, Lightbulb } from 'lucide-react';
import React from 'react';
import { Link } from 'react-router-dom';
import ContactForm from '../components/ContactForm';

function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="relative h-screen">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/50" />
        </div>
        
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4">
          <div className="flex items-center gap-3 mb-6">
            <Brain className="w-12 h-12 text-blue-400" />
            <h1 className="text-5xl md:text-7xl font-bold">Aiautomates.tech</h1>
          </div>
          <p className="text-xl md:text-2xl text-center mb-8 max-w-2xl text-blue-100">
            Choose the perfect AI solution for your business - from custom GPTs to enterprise-grade RAG systems
          </p>
          <a 
            href="https://get.aiautomates.tech/aiagents-for-small-businesses?utm_source=ai-strategist&utm_medium=organic&utm_term=organic"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center gap-2 text-lg transition-all"
          >
            Schedule your free consultation call <ArrowDown className="w-5 h-5" />
          </a>
        </div>
      </div>

      {/* AI Partner Section - NEW */}
      <div className="py-6 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Your AI Partner: Strategy, Support, and Seamless Integration</h2>
          <div className="text-xl text-gray-600 text-center mb-1 max-w-3xl mx-auto space-y-6">
            <p>
              Unlock AI's Potential, Without the Overwhelm. Navigating AI shouldn't be a burden. I'm an AI Strategist and small business owner, dedicated to helping you harness the power of automation. I'll analyze your business, translate tech jargon, and architect tailored solutions—selecting the right AI tools, agents, bots, and RAG systems to achieve your goals.
            </p>
            <p>
              Through hands-on coaching, training, and ongoing support, we'll ensure seamless adoption and empower your team to confidently leverage AI. My goal is to provide you with a clear, strategic plan, ensuring AI enhances your business, rather than adding to the noise.
            </p>
            <div className="pt-8">
              <a 
                href="https://api.leadconnectorhq.com/widget/bookings/aiautomates-demo-callbc0h8s"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 text-lg transition-all"
              >
                Now Let's Get Started <ArrowDown className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Solutions Section */}
      <div className="py-6 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">We Help You Choose The Right AI Solutions For Your Business</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            From simple chatbots to complex enterprise systems, we have the right solution for your needs
          </p>

          {/* Process Steps */}
          <div className="mb-12">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: Phone,
                  title: "Strategic Planning Call",
                  desc: "We begin with a comprehensive consultation to understand your company's unique challenges, automation goals, and efficiency targets."
                },
                {
                  icon: FileCheck,
                  title: "Custom Solution Design",
                  desc: "Our team develops a tailored plan that aligns with your budget and timeline, ensuring maximum ROI for your AI investment."
                },
                {
                  icon: Rocket,
                  title: "Implementation & Support",
                  desc: "We handle the entire implementation process and provide ongoing support to ensure your AI solution delivers lasting value."
                }
              ].map((step, i) => (
                <div key={i} className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="bg-blue-100 p-3 rounded-lg">
                      <step.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <h3 className="text-xl font-semibold">Step {i + 1}</h3>
                  </div>
                  <h4 className="text-lg font-semibold mb-2">{step.title}</h4>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Consultation Button */}
          <div className="flex justify-center mb-24">
            <a 
              href="https://get.aiautomates.tech/aiagents-for-small-businesses?utm_source=ai-strategist&utm_medium=organic&utm_term=organic"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 text-lg transition-all"
            >
              Schedule a Consultation <MessageSquare className="w-5 h-5" />
            </a>
          </div>

          {/* Dark Section */}
          <div className="py-16 px-4 bg-gray-900 rounded-3xl mb-8">
            <h2 className="text-4xl font-bold text-center mb-16 text-white">Common AI Use Cases</h2>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  id: "chatbots",
                  title: "AI Chat Bots",
                  desc: "Engage customers 24/7 with intelligent conversational AI Bots powered by the latest language models:",
                  bullets: [
                    "Customer Service Bot",
                    "Scheduling Bot",
                    "FAQ Bot",
                    "Sales Bot",
                    "Voice Bot"
                  ]
                },
                {
                  id: "agents",
                  title: "Actionable Agents",
                  desc: "Automate complex tasks with AI agents that can understand, decide, and take action on your behalf:",
                  bullets: [
                    "Blog Builder",
                    "Video Script Writer",
                    "Social Post Creator",
                    "Get a Transcription",
                    "Content Writer"
                  ]
                },
                {
                  id: "workflows",
                  title: "Unlock Intelligent Automation",
                  desc: "Automate knowledge work with intelligent agents:",
                  bullets: [
                    "Transform data into actionable reports",
                    "Anticipate future trends",
                    "Automate repetitive tasks",
                    "Gain a competitive edge"
                  ]
                }
              ].map((feature, i) => (
                <div key={i} id={feature.id} className="bg-gray-800/50 p-8 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4 text-white text-center">{feature.title}</h3>
                  <p className="text-gray-300">{feature.desc}</p>
                  {feature.bullets && (
                    <ul className="mt-4 space-y-2 text-gray-300">
                      {feature.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-center gap-2">
                          <ArrowDown className="w-4 h-4 text-blue-400" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action below Common Use Cases */}
          <div className="text-center mb-24">
            <p className="text-blue-600 text-lg">
              On our strategy planning call we can help you figure out what you need and how to use it within your company
            </p>
          </div>

          {/* Pricing Title */}
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Affordable AI Agents Tailored for Your Business Needs</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose the perfect plan that fits your requirements and budget
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { 
                icon: Sparkles, 
                title: 'Custom GPT',
                price: '$99 setup + $49/month',
                desc: 'Unlock the power of 24/7 customer engagement with our AI-powered chatbots.',
                features: [
                  'Cutting-edge language models',
                  'They deliver human-like conversations',
                  'Instant support',
                  'Integration ready'
                ]
              },
              { 
                icon: Bot, 
                title: 'Custom Agent',
                price: '$299 setup per agent / $99 month',
                desc: 'Intelligent agents with advanced capabilities and specific business logic',
                features: [
                  'Complex decision making',
                  'API integrations',
                  'Custom workflows',
                  'Enhanced security'
                ]
              },
              { 
                icon: Workflow, 
                title: 'Agent Automation',
                price: 'Contact us for a custom quote.',
                desc: 'Full-scale automation solutions with multiple coordinated agents',
                features: [
                  'Multi-agent orchestration',
                  'Advanced workflow automation',
                  'System integrations',
                  'Enterprise security'
                ]
              }
            ].map((solution, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border border-gray-100">
                <div className="flex items-center gap-3 mb-6">
                  <solution.icon className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-semibold">{solution.title}</h3>
                </div>
                <p className="text-blue-600 font-semibold mb-4">{solution.price}</p>
                <p className="text-gray-600 mb-6">{solution.desc}</p>
                <ul className="space-y-3">
                  {solution.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700">
                      <ArrowDown className="w-4 h-4 text-blue-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className="mt-8 w-full bg-gray-50 hover:bg-gray-100 text-gray-900 font-semibold px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all">
                  Learn More <ArrowDown className="w-4 h-4" />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Agentic Agent Solutions Section */}
      <div id="agentic-rag" className="py-16 px-4 bg-gray-900 rounded-3xl mb-24 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">Agentic RAG Solutions</h2>
        <p className="text-xl text-gray-300 text-center mb-4 max-w-3xl mx-auto">
          Agentic RAG: Unlock Powerful Business Insights with AI - Retrieval Augmented Generation
        </p>
        <p className="text-blue-600 text-lg text-center mb-16">
          Tailored Pricing: We'll work with you to create a solution that fits your specific needs and budget.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Understanding Your Documents",
              desc: "Process and analyze documents with AI that understands context:",
              bullets: [
                "Uncover hidden connections",
                "Summarize key information",
                "Find answers in seconds",
                "Turn data into action"
              ]
            },
            {
              title: "Intelligent Search",
              desc: "Enhanced search capabilities across your enterprise data:",
              bullets: [
                "Find anything, instantly",
                "Ask questions, get answers",
                "Zero in on what matters",
                "Discover hidden insights"
              ]
            },
            {
              title: "Knowledge Automation",
              desc: "Automate knowledge work with intelligent agents:",
              bullets: [
                "Data Extraction",
                "Report Generation",
                "Content Summarization",
                "Trend Analysis",
                "Insights Generation"
              ]
            }
          ].map((feature, i) => (
            <div key={i} className="bg-gray-800/50 p-8 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-white text-center">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
              {feature.bullets && (
                <ul className="mt-4 space-y-2 text-gray-300">
                  {feature.bullets.map((bullet, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <ArrowDown className="w-4 h-4 text-blue-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>
        <div className="max-w-3xl mx-auto mt-16 mb-12 text-center">
          <p className="text-gray-300 text-lg leading-relaxed">
            Unlock the power of your data with Agentic RAG solutions. Imagine having an AI-powered assistant that instantly answers any question about your company's documents. Our advanced technology analyzes your data to uncover hidden insights, automate research tasks, and boost productivity. Make smarter decisions, faster, with all your information organized and easily accessible. Learn more about how Agentic RAG can revolutionize your business.
          </p>
        </div>
        <div className="text-center">
          <Link 
            to="/solutions"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full flex items-center gap-2 text-lg transition-all mx-auto inline-flex"
          >
            Our AI Solutions <ArrowDown className="w-5 h-5" />
          </Link>
          <p className="text-gray-300 text-lg mt-6">
            Agentic RAG Solutions: Unlock Your Data's Potential - AI-Powered Insights & Faster Decisions
          </p>
        </div>
      </div>

      {/* Benefits Section */}
      <div className="py-24 bg-gray-50 border-t border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Why Choose Our AI Solutions?</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Experience the transformative power of custom AI solutions designed for your specific needs
          </p>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              {
                icon: Brain,
                title: "Advanced AI Models",
                desc: "State-of-the-art machine learning models customized for your specific use case"
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                desc: "Bank-grade security with end-to-end encryption and compliance measures"
              },
              {
                icon: Zap,
                title: "Real-time Processing",
                desc: "Process and analyze data in real-time for immediate insights and actions"
              },
              {
                icon: Target,
                title: "Measurable Results",
                desc: "Track ROI with detailed analytics and performance metrics tailored to your business objectives"
              },
              {
                icon: Clock,
                title: "24/7 Operation",
                desc: "Your AI solutions work around the clock, ensuring consistent service and maximum efficiency"
              },
              {
                icon: Cpu,
                title: "Scalable Infrastructure",
                desc: "Enterprise-grade infrastructure that grows with your business needs"
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

      {/* Deployment Options */}
      <div className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-4">Flexible Deployment Options</h2>
          <p className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto">
            Choose which works best for your company's security protocols
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Cloud,
                title: "Cloud Deployment",
                desc: "Deploy your solution in our secure cloud infrastructure with global availability and automatic scaling"
              },
              {
                icon: Server,
                title: "On-Premise",
                desc: "Install and run your solution within your own network infrastructure for maximum control and security"
              }
            ].map((deployment, i) => (
              <div key={i} className="flex gap-6 items-start p-8 rounded-xl bg-gray-50">
                <deployment.icon className="w-8 h-8 text-blue-600 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{deployment.title}</h3>
                  <p className="text-gray-600">{deployment.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Security Section */}
      <div className="py-24 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Enterprise-Grade Security</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Data Privacy",
                desc: "Your data never leaves your control with our secure deployment options"
              },
              {
                title: "Access Control",
                desc: "Fine-grained access controls and user management for your AI solutions"
              },
              {
                title: "Compliance Ready",
                desc: "Built to meet strict enterprise security and compliance requirements"
              }
            ].map((security, i) => (
              <div key={i} className="bg-gray-800 p-8 rounded-xl">
                <h3 className="text-xl font-semibold mb-4">{security.title}</h3>
                <p className="text-gray-300">{security.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Section */}
      <div id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <h2 className="text-4xl font-bold">Get in Touch</h2>
              <p className="text-xl text-gray-600">
                Have questions about our AI solutions? We're here to help!
              </p>
              
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Phone className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-gray-600">(269) 365-4321</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <Mail className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-gray-600">contact@aiautomates.tech</p>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="bg-blue-100 p-3 rounded-full">
                    <MapPin className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="font-semibold">Office</p>
                    <p className="text-gray-600">721 Westbury Lane<br />Kalamazoo, MI 49006</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-xl shadow-lg">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/ZM78-3uuPqg?si=eJO_LzVN92hKj2Gz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
