import { MapPin } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const handlePricingClick = () => {
    navigate('/');
    setTimeout(() => {
      const pricingTitle = Array.from(document.getElementsByTagName('h2'))
        .find(el => el.textContent === 'Affordable AI Agents Tailored for Your Business Needs');
      
      if (pricingTitle) {
        const yOffset = -100; // Offset to account for fixed header
        const y = pricingTitle.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <footer className="bg-gray-900 text-gray-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Solutions */}
          <div>
            <h3 className="text-white font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation('/solutions')} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  All Solutions
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/agents')} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  AI Agents
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/chatbots')} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  AI Bots
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/workflows')} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  AI Workflows
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/agentic-rag')} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Agentic RAG Solutions
                </button>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              <li>
                <button 
                  onClick={() => handleNavigation('/why-us')} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Why Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/ai-strategist')} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  AI Strategist
                </button>
              </li>
              <li>
                <button 
                  onClick={handlePricingClick} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/consultation')} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Schedule A Consultation
                </button>
              </li>
              <li>
                <button 
                  onClick={() => handleNavigation('/contact')} 
                  className="hover:text-blue-400 transition-colors text-left"
                >
                  Contact Us
                </button>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div className="md:col-span-2">
            <h3 className="text-white font-semibold mb-4">Our Location</h3>
            <div className="flex items-start gap-2">
              <MapPin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-1" />
              <div>
                <p className="text-white">Aiautomates.tech</p>
                <p>721 Westbury Lane</p>
                <p>Kalamazoo, MI 49006</p>
                <p>United States</p>
                <p className="mt-2">
                  <a href="tel:+12693654321" className="hover:text-blue-400 transition-colors">Phone: (269) 365-4321</a>
                </p>
                <p>
                  <a href="mailto:contact@aiautomates.tech" className="hover:text-blue-400 transition-colors">Email: contact@aiautomates.tech</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-sm sm:text-base">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p>© {new Date().getFullYear()} Aiautomates.tech. All rights reserved.</p>
            <div className="flex items-center gap-6">
              <button 
                onClick={() => handleNavigation('/privacy-policy')} 
                className="hover:text-blue-400 transition-colors"
              >
                Privacy Policy
              </button>
              <button 
                onClick={() => handleNavigation('/terms-conditions')} 
                className="hover:text-blue-400 transition-colors"
              >
                Terms & Conditions
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}