import { MessageSquare, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';
import ContactForm from '../components/ContactForm';

export default function Contact() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-16 sm:py-24 bg-gray-900">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4">
          <div className="text-center">
            <MessageSquare className="w-12 h-12 sm:w-16 sm:h-16 text-blue-500 mx-auto mb-6" />
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-white mb-6">Get in Touch</h1>
            <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
              Let's discuss how our AI solutions can transform your business operations and drive growth
            </p>
          </div>
        </div>
      </div>

      {/* Contact Information Grid */}
      <div className="py-16 sm:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid sm:grid-cols-2 gap-6 sm:gap-8 mb-16">
            {[
              {
                icon: Phone,
                title: "Call Us",
                details: [
                  {
                    text: "(269) 365-4321",
                    link: "tel:+12693654321"
                  },
                  "Monday - Friday",
                  "9:00 AM - 6:00 PM EST"
                ]
              },
              {
                icon: Mail,
                title: "Email Us",
                details: [
                  {
                    text: "contact@aiautomates.tech",
                    link: "mailto:contact@aiautomates.tech"
                  },
                  {
                    text: "support@aiautomates.tech",
                    link: "mailto:support@aiautomates.tech"
                  },
                  "24/7 Digital Support"
                ]
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 sm:p-8 rounded-xl shadow-lg text-center">
                <div className="inline-block p-4 bg-blue-100 rounded-full mb-6">
                  <item.icon className="w-6 h-6 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
                <ul className="space-y-2">
                  {item.details.map((detail, j) => (
                    <li key={j} className="text-gray-600">
                      {typeof detail === 'string' ? (
                        detail
                      ) : (
                        <a href={detail.link} className="hover:text-blue-600 transition-colors">
                          {detail.text}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-6 sm:p-8">
            <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-center">Send Us a Message</h2>
            <ContactForm formType="contact-page" />
          </div>

          {/* Additional Information */}
          <div className="mt-16 sm:mt-24 text-center">
            <h3 className="text-xl sm:text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto px-4">
              Our team is ready to help you implement the perfect AI solution for your business needs. 
              Get in touch today and let's start building the future together.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
