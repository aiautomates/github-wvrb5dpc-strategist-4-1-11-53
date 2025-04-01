import { ArrowRight, Shield, Zap, Brain, Target, Clock, Server, Cloud, Calendar } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function WhyUs() {
  const navigate = useNavigate();

  const navigateToContact = () => {
    navigate('/contact');
  };

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-16 bg-gray-900">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-black/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Target className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Why Choose Us?</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Leading the way in AI innovation with enterprise-grade solutions and unmatched expertise
            </p>
          </div>
        </div>
      </div>

      {/* Simplifying AI Section */}
      <div className="py-8 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-8">Simplifying AI & Automation for Your Business</h2>
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-lg text-gray-700 mb-6">
              AI and automation shouldn't feel overwhelming. I'm a coach, consultant, and small business owner—just like you. I know what it's like to juggle everything while trying to stay ahead with technology. That's why we help small businesses like yours integrate AI agents, workflows, and bots in a way that actually works—for you and your team.
            </p>
            <p className="text-lg text-gray-700 mb-6">
              Our approach is hands-on, ensuring seamless adoption, training key team members, and providing ongoing support, even as your business evolves.
            </p>
            <p className="text-lg text-gray-700 font-semibold">
              We're here to make automation simple, effective, and something your team will actually use. Let's build smarter systems together!
            </p>
          </div>
        </div>
      </div>

      {/* Core Strengths */}
      <div className="pt-8 pb-24">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Our Core Strengths</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Advanced Technology",
                desc: "State-of-the-art AI models and algorithms",
                points: [
                  "Latest LLM technologies",
                  "Custom model training",
                  "Continuous innovation",
                  "Scalable solutions"
                ]
              },
              {
                icon: Shield,
                title: "Enterprise Security",
                desc: "Bank-grade security for your data",
                points: [
                  "End-to-end encryption",
                  "SOC 2 compliance",
                  "Data privacy focus",
                  "Regular security audits"
                ]
              },
              {
                icon: Target,
                title: "Proven Results",
                desc: "Delivering measurable business impact",
                points: [
                  "ROI focused approach",
                  "Performance metrics",
                  "Success tracking",
                  "Continuous optimization"
                ]
              }
            ].map((strength, i) => (
              <div key={i} className="bg-gray-50 p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <strength.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <h3 className="text-2xl font-semibold">{strength.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{strength.desc}</p>
                <ul className="space-y-3">
                  {strength.points.map((point, j) => (
                    <li key={j} className="flex items-center gap-2 text-gray-700">
                      <ArrowRight className="w-4 h-4 text-blue-600" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deployment Options */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Flexible Deployment Options</h2>
          <div className="grid md:grid-cols-2 gap-12">
            {[
              {
                icon: Cloud,
                title: "Cloud Deployment",
                desc: "Secure cloud infrastructure with global availability",
                features: [
                  "Automatic scaling",
                  "High availability",
                  "Global CDN",
                  "Managed updates"
                ]
              },
              {
                icon: Server,
                title: "On-Premise",
                desc: "Deploy within your own infrastructure",
                features: [
                  "Full control",
                  "Data sovereignty",
                  "Custom security",
                  "Direct integration"
                ]
              }
            ].map((deployment, i) => (
              <div key={i} className="bg-white p-8 rounded-xl shadow-lg">
                <div className="flex items-center gap-3 mb-6">
                  <deployment.icon className="w-8 h-8 text-blue-600" />
                  <h3 className="text-2xl font-semibold">{deployment.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{deployment.desc}</p>
                <ul className="space-y-3">
                  {deployment.features.map((feature, j) => (
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join leading businesses that trust us with their AI transformation journey.
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