import { Shield, Lock, Eye, FileCheck } from 'lucide-react';

export default function PrivacyPolicy() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <div className="relative py-16 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <Shield className="w-16 h-16 text-blue-500 mx-auto mb-6" />
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              How we collect, use, and protect your information
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
              <h2 className="text-2xl font-bold mb-4">Introduction</h2>
              <p className="text-gray-700 mb-4">
                At Aiautomates.tech, we take your privacy seriously. This Privacy Policy explains how we collect, use, 
                disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Information We Collect</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold">Personal Information</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>Name and contact information</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Company information</li>
                  <li>Information provided through our contact forms</li>
                </ul>

                <h3 className="text-xl font-semibold">Usage Information</h3>
                <ul className="list-disc pl-6 text-gray-700">
                  <li>IP address</li>
                  <li>Browser type</li>
                  <li>Pages visited</li>
                  <li>Time spent on pages</li>
                  <li>Device information</li>
                </ul>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">How We Use Your Information</h2>
              <ul className="list-disc pl-6 text-gray-700">
                <li>To provide and maintain our services</li>
                <li>To notify you about changes to our services</li>
                <li>To provide customer support</li>
                <li>To gather analysis or valuable information to improve our services</li>
                <li>To detect, prevent and address technical issues</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Data Security</h2>
              <p className="text-gray-700 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal 
                information against accidental or unlawful destruction, loss, alteration, unauthorized disclosure, 
                or access.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Third-Party Services</h2>
              <p className="text-gray-700 mb-4">
                We may employ third-party companies and individuals due to the following reasons:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>To facilitate our service</li>
                <li>To provide the service on our behalf</li>
                <li>To perform service-related services</li>
                <li>To assist us in analyzing how our service is used</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Your Rights</h2>
              <p className="text-gray-700 mb-4">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-gray-700">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Request transfer of your information</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
              <p className="text-gray-700">
                If you have any questions about this Privacy Policy, please contact us at:
              </p>
              <div className="mt-4">
                <p className="text-gray-700">Email: privacy@aiautomates.tech</p>
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
                icon: Lock,
                title: "Secure Data Storage",
                desc: "Your data is encrypted and stored securely using industry-standard protocols"
              },
              {
                icon: Eye,
                title: "Transparent Practices",
                desc: "We're clear about how we collect, use, and protect your information"
              },
              {
                icon: FileCheck,
                title: "Your Control",
                desc: "Access, update, or delete your information at any time"
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