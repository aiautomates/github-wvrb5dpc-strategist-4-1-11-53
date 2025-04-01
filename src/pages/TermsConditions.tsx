import { Scale, Shield, FileCheck } from 'lucide-react';

export default function TermsConditions() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Scale className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Terms and Conditions</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Please read these terms carefully before using our services
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="prose prose-lg">
            <p className="text-gray-600 mb-8">
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
            </p>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-700 mb-4">
                By accessing or using Aiautomates.tech services, you agree to be bound by these Terms and Conditions. 
                If you disagree with any part of these terms, you may not access our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. Services Description</h2>
              <p className="text-gray-700 mb-4">
                Aiautomates.tech provides AI-powered solutions including but not limited to:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>AI Chatbots</li>
                <li>AI Agents</li>
                <li>AI Workflows</li>
                <li>Agentic RAG Solutions</li>
                <li>Consulting Services</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. User Responsibilities</h2>
              <p className="text-gray-700 mb-4">
                Users of our services agree to:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Provide accurate and complete information</li>
                <li>Maintain the security of their account credentials</li>
                <li>Use services in compliance with applicable laws</li>
                <li>Not engage in unauthorized access or use of our systems</li>
                <li>Not interfere with service performance or functionality</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. Intellectual Property</h2>
              <p className="text-gray-700 mb-4">
                All content, features, and functionality of our services, including but not limited to text, graphics, 
                logos, and software, are the exclusive property of Aiautomates.tech and protected by international 
                copyright, trademark, and other intellectual property laws.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. Payment Terms</h2>
              <p className="text-gray-700 mb-4">
                For paid services:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Payment is required in advance for service activation</li>
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>Prices are subject to change with notice</li>
                <li>Users are responsible for applicable taxes</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">6. Service Availability</h2>
              <p className="text-gray-700 mb-4">
                While we strive for maximum uptime, we do not guarantee uninterrupted access to our services. 
                We reserve the right to modify, suspend, or discontinue any part of our services without notice.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">7. Limitation of Liability</h2>
              <p className="text-gray-700 mb-4">
                Aiautomates.tech shall not be liable for any indirect, incidental, special, consequential, or 
                punitive damages resulting from your use or inability to use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">8. Indemnification</h2>
              <p className="text-gray-700 mb-4">
                You agree to indemnify and hold Aiautomates.tech harmless from any claims, damages, or expenses 
                arising from your use of our services or violation of these terms.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">9. Changes to Terms</h2>
              <p className="text-gray-700 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material 
                changes via email or through our website.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">10. Contact Information</h2>
              <p className="text-gray-700">
                For questions about these Terms and Conditions, please contact us at:
              </p>
              <div className="mt-4">
                <p className="text-gray-700">Email: legal@aiautomates.tech</p>
                <p className="text-gray-700">Phone: (269) 365-4321</p>
                <p className="text-gray-700">
                  Address: 721 Westbury Lane<br />
                  Kalamazoo, MI 49006<br />
                  United States
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Shield,
                title: "Protected Rights",
                desc: "Clear terms to protect both parties' interests and rights"
              },
              {
                icon: Scale,
                title: "Fair Terms",
                desc: "Balanced and reasonable terms for all parties involved"
              },
              {
                icon: FileCheck,
                title: "Legal Compliance",
                desc: "Terms that comply with all applicable laws and regulations"
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
    </div>
  );
}