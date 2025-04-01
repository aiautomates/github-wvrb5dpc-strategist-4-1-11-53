import { ArrowRight, Sparkles, Brain, Zap, MessageSquare } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { Helmet } from 'react-helmet-async';
import toast from 'react-hot-toast';

export default function Demo() {
  const [loading, setLoading] = useState(false);
  const [demoText, setDemoText] = useState('');

  const loadBookingWidget = useCallback(() => {
    const script = document.createElement('script');
    script.src = 'https://link.msgsndr.com/js/form_embed.js';
    script.async = true;
    script.defer = true;

    script.onload = () => {
      const iframe = document.createElement('iframe');
      iframe.src = 'https://api.leadconnectorhq.com/widget/booking/vyhrEVECo4XRMdWf452c';
      iframe.style.width = '100%';
      iframe.style.border = 'none';
      iframe.style.height = '800px';
      iframe.setAttribute('scrolling', 'no');
      iframe.setAttribute('title', 'Booking Calendar');
      iframe.id = 'vyhrEVECo4XRMdWf452c_1741466541803';

      const container = document.getElementById('booking-container');
      if (container) {
        container.innerHTML = '';
        container.appendChild(iframe);
      }
    };

    script.onerror = () => {
      toast.error('Failed to load booking widget. Please try again later.');
    };

    document.body.appendChild(script);

    return () => {
      const existingScript = document.querySelector(`script[src="${script.src}"]`);
      if (existingScript) {
        document.body.removeChild(existingScript);
      }
      const container = document.getElementById('booking-container');
      if (container) {
        container.innerHTML = '';
      }
    };
  }, []);

  useEffect(() => {
    const cleanup = loadBookingWidget();
    return cleanup;
  }, [loadBookingWidget]);

  const handleDemoAction = async () => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      toast.success('Demo action completed successfully!');
      setDemoText('This is a demo response from our AI system.');
    } catch (error) {
      toast.error('Something went wrong. Please try again.');
      console.error('Demo action error:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <Helmet>
        <title>Schedule a Demo - Aiautomates.tech</title>
        <meta name="description" content="Book a personalized demo to see how our AI solutions can transform your business" />
      </Helmet>

      {/* Hero Section */}
      <div className="relative py-24 bg-gray-900">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Sparkles className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Schedule a Demo</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Book a personalized demo to see how our AI solutions can transform your business
            </p>
          </div>
        </div>
      </div>

      {/* Booking Section */}
      <div className="py-24">
        <div className="max-w-4xl mx-auto px-4">
          <div id="booking-container" className="mb-12 min-h-[800px] bg-white rounded-lg shadow-lg p-6">
            {/* Iframe will be inserted here */}
          </div>
        </div>
      </div>

      {/* Demo Interface */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-white p-8 rounded-xl shadow-lg">
            <h2 className="text-2xl font-bold mb-6">Try It Out</h2>
            
            <div className="space-y-6">
              <div>
                <label htmlFor="prompt" className="block text-sm font-medium text-gray-700 mb-2">
                  Enter your prompt
                </label>
                <textarea
                  id="prompt"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Type your message here..."
                ></textarea>
              </div>

              <button
                onClick={handleDemoAction}
                disabled={loading}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white px-6 py-3 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                {loading ? (
                  <>Processing...</>
                ) : (
                  <>
                    Generate Response <ArrowRight className="w-5 h-5" />
                  </>
                )}
              </button>

              {demoText && (
                <div className="bg-white p-6 rounded-lg border border-gray-200">
                  <h3 className="font-semibold mb-2">AI Response:</h3>
                  <p className="text-gray-700">{demoText}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16">Key Features</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Brain,
                title: "Advanced AI",
                desc: "Powered by state-of-the-art language models"
              },
              {
                icon: Zap,
                title: "Real-time Processing",
                desc: "Get responses in milliseconds with our optimized infrastructure"
              },
              {
                icon: MessageSquare,
                title: "Natural Conversations",
                desc: "Engage in human-like interactions with context awareness"
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
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Transform your business with our powerful AI solutions.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full inline-flex items-center gap-2 text-lg transition-all">
            Contact Us Today <MessageSquare className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}