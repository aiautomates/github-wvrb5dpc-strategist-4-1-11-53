import { Brain, Target, Users, Lightbulb, MapPin, Calendar, ArrowRight, Building, CheckCircle2, Workflow, Phone, MessageSquare, Zap } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function AiStrategist() {
  return (
    <div className="bg-white">
      <Helmet>
        <title>AI Strategy Consulting | AI Automation Expert in Kalamazoo, MI</title>
        <meta 
          name="description" 
          content="Transform your business with expert AI strategy consulting. Get clear, practical guidance on AI tools, automation, and systems that actually work for your business needs."
        />
        <meta property="og:title" content="AI Strategy Consulting | AI Automation Expert in Kalamazoo, MI" />
        <meta 
          property="og:description" 
          content="Transform your business with expert AI strategy consulting. Get clear, practical guidance on AI tools, automation, and systems that actually work for your business needs."
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://aiautomates.tech/ai-strategist" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative py-24 bg-gray-900">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1484417894907-623942c8ee29?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Brain className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">AI Strategist Services</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
              Cut Through the Noise. Build What Matters.
            </p>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-8">
              AI is moving fast. Tools change daily. Everyone's got an opinion. But when you're running a business — you don't need hype. You need clarity, direction, and someone who knows how to translate all this tech into systems that actually work.
            </p>
            <a 
              href="https://get.aiautomates.tech/aiagents-for-small-businesses?utm_source=ai-strategist&utm_medium=organic&utm_term=organic"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 text-lg transition-all"
            >
              Schedule your free consultation call <Calendar className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* What Is an AI Strategist Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">What Is an AI Strategist?</h2>
            <p className="text-xl text-gray-600 mb-8">
              An AI Strategist is part translator, part architect, part systems thinker. We look at your business, your workflows, your goals — and then we help you choose:
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3 text-lg text-gray-700">
                <ArrowRight className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                Which tools make sense
              </li>
              <li className="flex items-start gap-3 text-lg text-gray-700">
                <ArrowRight className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                Which ones don't
              </li>
              <li className="flex items-start gap-3 text-lg text-gray-700">
                <ArrowRight className="w-6 h-6 text-blue-600 flex-shrink-0 mt-1" />
                What kind of AI agents, bots, automations, or agentic RAG systems will move the needle
              </li>
            </ul>
            <p className="text-xl text-gray-600">
              You walk away with a clear plan and the confidence to move forward. Whether we implement it with you or hand off the blueprint to your dev team, our job is simple: Make sure AI actually helps — not just adds noise.
            </p>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                number: "1",
                title: "AI Opportunity Audit (Free)",
                desc: "We'll review your current setup, pain points, and business goals. You'll get a real-time read on where AI fits (and where it doesn't).",
                cta: "Book your free AI audit"
              },
              {
                number: "2",
                title: "Discovery & Mapping",
                desc: "We'll map out your customer journey, internal workflows, and decision bottlenecks. Then we'll recommend the exact systems that can be automated, accelerated, or improved with AI.",
                questions: [
                  "Should you build a bot?",
                  "Would an AI agent save your team time?",
                  "Is an agentic RAG system right for your data?"
                ]
              },
              {
                number: "3",
                title: "Strategy Buildout",
                desc: "You'll receive a custom plan:",
                features: [
                  "The tech stack we recommend",
                  "Workflow diagrams",
                  "Suggested prompts, logic flows, and tool connections",
                  "Optional implementation support"
                ]
              }
            ].map((step, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="text-3xl font-bold text-blue-600 mb-4">Step {step.number}</div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600 mb-6">{step.desc}</p>
                {step.questions && (
                  <ul className="space-y-3">
                    {step.questions.map((q, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-700">
                        <ArrowRight className="w-4 h-4 text-blue-600" />
                        {q}
                      </li>
                    ))}
                  </ul>
                )}
                {step.features && (
                  <ul className="space-y-3">
                    {step.features.map((f, j) => (
                      <li key={j} className="flex items-center gap-2 text-gray-700">
                        <CheckCircle2 className="w-4 h-4 text-blue-600" />
                        {f}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Who This Is For Section */}
      <div className="pt-24 pb-12">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">Who This Is For</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              "Small teams with big goals",
              "Founders who want smarter systems",
              "Agencies adding AI to client offers",
              "Ops leaders ready to eliminate chaos",
              "Small Businesses wanting efficiencies and cost savings",
              "Consultants tired of duct-taping 12 tools together"
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 bg-gray-50 p-6 rounded-xl">
                <CheckCircle2 className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <p className="text-lg text-gray-700">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-xl text-gray-600 text-center mt-12 max-w-2xl mx-auto">
            You don't need to become an AI expert. You just need a clear path and someone you trust to walk it with you.
          </p>
          <div className="text-center mt-12">
            <a 
              href="https://get.aiautomates.tech/aiagents-for-small-businesses?utm_source=ai-strategist&utm_medium=organic&utm_term=organic"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 text-lg transition-all"
            >
              Schedule your free consultation call <Calendar className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Why Work With Us Section */}
      <div className="pt-12 pb-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">Why Work With AI Automates?</h2>
          <div className="max-w-3xl mx-auto text-center mb-16">
            <p className="text-xl text-gray-600 mb-6">
              We're based in Kalamazoo, Michigan, and we've helped dozens of businesses across Southwest Michigan and this great nation to bring order to their operations with AI tools and amazing automation.
            </p>
            <p className="text-xl text-gray-600">
              We're not just consultants — we're builders. We've implemented these systems ourselves. We know what works, what breaks, and most importantly — what will actually help your business grow.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Target,
                title: "Strategy backed by implementation know-how",
                desc: "We don't just plan — we know how to build and execute"
              },
              {
                icon: MessageSquare,
                title: "Plain talk, not tech overwhelm",
                desc: "Clear communication and practical solutions"
              },
              {
                icon: Users,
                title: "A partner who listens before building",
                desc: "Your business needs drive our recommendations"
              }
            ].map((feature, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg text-center">
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Make AI Work for You?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Stop guessing. Let's build something that fits your business — not just the trend cycle.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="https://get.aiautomates.tech/aiagents-for-small-businesses?utm_source=ai-strategist&utm_medium=organic&utm_term=organic"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 text-lg transition-all"
            >
              Schedule your free consultation call <Calendar className="w-5 h-5" />
            </a>
            <a 
              href="tel:+12693654321"
              className="bg-gray-800 hover:bg-gray-700 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 text-lg transition-all"
            >
              Contact Jimmy Directly <Phone className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}