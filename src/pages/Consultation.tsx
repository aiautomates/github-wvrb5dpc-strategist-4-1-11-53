import { Calendar, Brain, Target, Clock } from 'lucide-react';

export default function Consultation() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-24 bg-gray-900">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Calendar className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Schedule A Consultation</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Book a free strategy call to discuss how AI can transform your business operations
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

      {/* What to Expect Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">What to Expect</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Strategic Planning",
                desc: "We'll analyze your business needs and identify the best AI solutions for your goals"
              },
              {
                icon: Target,
                title: "Custom Solutions",
                desc: "Get tailored recommendations for implementing AI in your business processes"
              },
              {
                icon: Clock,
                title: "Timeline & Budget",
                desc: "Discuss implementation timeline and flexible pricing options that fit your budget"
              }
            ].map((step, i) => (
              <div key={i} className="text-center">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                  <step.icon className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{step.title}</h3>
                <p className="text-gray-600">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gray-900 py-24">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Can't Find a Suitable Time?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Send us a message and we'll find a time that works for you.
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