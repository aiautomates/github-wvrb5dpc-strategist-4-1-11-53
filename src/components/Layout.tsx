import { Brain, Menu, X, Phone, ChevronDown } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function Layout() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Close mobile menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location]);

  // Handle navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

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
    <div className="min-h-screen bg-white flex flex-col">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-sm shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2" aria-label="Home">
              <Brain className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" aria-hidden="true" />
              <span className="text-lg sm:text-xl font-bold text-gray-900">Aiautomates.tech</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
              {/* AI Strategist */}
              <Link 
                to="/ai-strategist"
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm lg:text-base"
              >
                AI Strategist
              </Link>

              {/* Services Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setIsServicesOpen(!isServicesOpen)}
                  className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition-colors text-sm lg:text-base"
                >
                  Services
                  <ChevronDown className="w-4 h-4" />
                </button>
                {isServicesOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-2">
                    <Link 
                      to="/chatbots"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Chat Bots
                    </Link>
                    <Link 
                      to="/agents"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      AI Agents
                    </Link>
                    <Link 
                      to="/agentic-rag"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Agentic RAG
                    </Link>
                    <Link 
                      to="/workflows"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Workflows
                    </Link>
                  </div>
                )}
              </div>

              {/* Why Us */}
              <Link 
                to="/why-us"
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm lg:text-base"
              >
                Why Us
              </Link>

              {/* Pricing */}
              <button 
                onClick={handlePricingClick}
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm lg:text-base"
              >
                Pricing
              </button>

              {/* Contact */}
              <Link 
                to="/contact"
                className="text-gray-600 hover:text-blue-600 transition-colors text-sm lg:text-base"
              >
                Contact Us
              </Link>

              <a 
                href="tel:+12693654321"
                className="bg-blue-600 hover:bg-blue-700 text-white px-3 sm:px-4 py-2 rounded-full text-sm transition-all inline-flex items-center gap-2 whitespace-nowrap"
              >
                <Phone className="w-4 h-4" />
                <span>Call Us Today</span>
              </a>
            </div>

            {/* Mobile menu button */}
            <button 
              className="md:hidden p-2 rounded-lg hover:bg-gray-100"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            >
              {isMenuOpen ? <X className="w-6 h-6" aria-hidden="true" /> : <Menu className="w-6 h-6" aria-hidden="true" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          <div 
            className={`md:hidden fixed inset-0 top-16 bg-white transform transition-transform duration-300 ease-in-out ${
              isMenuOpen ? 'translate-x-0' : 'translate-x-full'
            }`}
          >
            <div className="flex flex-col gap-2 p-4">
              {/* AI Strategist */}
              <Link 
                to="/ai-strategist"
                className="text-gray-600 hover:text-blue-600 transition-colors py-3 text-lg"
              >
                AI Strategist
              </Link>

              {/* Services - Mobile */}
              <div className="border-b border-gray-200 pb-2 mb-2">
                <div className="text-gray-900 font-semibold py-2">Services</div>
                <Link 
                  to="/chatbots"
                  className="block text-gray-600 hover:text-blue-600 transition-colors py-2 pl-4 text-lg"
                >
                  Chat Bots
                </Link>
                <Link 
                  to="/agents"
                  className="block text-gray-600 hover:text-blue-600 transition-colors py-2 pl-4 text-lg"
                >
                  AI Agents
                </Link>
                <Link 
                  to="/agentic-rag"
                  className="block text-gray-600 hover:text-blue-600 transition-colors py-2 pl-4 text-lg"
                >
                  Agentic RAG
                </Link>
                <Link 
                  to="/workflows"
                  className="block text-gray-600 hover:text-blue-600 transition-colors py-2 pl-4 text-lg"
                >
                  Workflows
                </Link>
              </div>

              {/* Why Us */}
              <Link 
                to="/why-us"
                className="text-gray-600 hover:text-blue-600 transition-colors py-3 text-lg"
              >
                Why Us
              </Link>

              {/* Pricing */}
              <button 
                onClick={handlePricingClick}
                className="text-gray-600 hover:text-blue-600 transition-colors py-3 text-lg text-left"
              >
                Pricing
              </button>

              {/* Contact */}
              <Link 
                to="/contact"
                className="text-gray-600 hover:text-blue-600 transition-colors py-3 text-lg"
              >
                Contact Us
              </Link>

              <a 
                href="tel:+12693654321"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-3 rounded-full text-lg transition-all flex items-center justify-center gap-2 mt-4"
              >
                <Phone className="w-5 h-5" />
                Call Us Today
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="flex-grow pt-16">
        <Outlet />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}