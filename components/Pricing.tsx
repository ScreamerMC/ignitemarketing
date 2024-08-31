import React, { useState } from 'react';
import { ArrowLeft, Check, X } from 'lucide-react';

interface PricingProps {
  onBack: () => void;
  navigateTo: (page: string) => void; 
}

const subscriptionPlans = [
  {
    name: "Spark",
    price: 499,
    features: [
      "Basic SEO optimization",
      "Social media account setup",
      "Monthly content creation (2 posts)",
      "Basic analytics reporting",
      "Email support"
    ]
  },
  {
    name: "Blaze",
    price: 999,
    features: [
      "Advanced SEO strategies",
      "Social media management (3 platforms)",
      "Weekly content creation (2 posts/week)",
      "PPC campaign setup and management",
      "Basic website design or optimization",
      "Monthly performance review",
      "Email and phone support"
    ]
  },
  {
    name: "Inferno",
    price: 1999,
    features: [
      "Comprehensive SEO and content strategy",
      "Full social media management (5 platforms)",
      "Daily content creation (1 post/day)",
      "Advanced PPC campaign management",
      "Custom website development",
      "Reputation management",
      "Weekly performance reviews",
      "Priority support with dedicated account manager"
    ]
  }
];

const oneTimePlans = [
  {
    name: "Ignition",
    price: 1499,
    features: [
      "Website audit and optimization",
      "SEO strategy development",
      "Social media profile setup (3 platforms)",
      "Content calendar (3 months)",
      "One-time analytics setup"
    ]
  },
  {
    name: "Boost",
    price: 2999,
    features: [
      "Custom website design (5 pages)",
      "On-page SEO optimization",
      "Social media branding package",
      "Content creation (10 pieces)",
      "Google My Business optimization",
      "One-month PPC campaign management"
    ]
  },
  {
    name: "Launch",
    price: 4999,
    features: [
      "E-commerce website development",
      "Comprehensive SEO package",
      "Social media strategy and setup (5 platforms)",
      "Content strategy and creation (20 pieces)",
      "Email marketing setup and first campaign",
      "Three-month PPC campaign management",
      "Video marketing (1 promotional video)"
    ]
  }
];

const individualServices = [
  { name: "SEO Optimization", price: 500 },
  { name: "Social Media Management (per platform/month)", price: 300 },
  { name: "Content Creation (per piece)", price: 150 },
  { name: "PPC Campaign Management (per month)", price: 750 },
  { name: "Website Design (per page)", price: 500 },
  { name: "Email Marketing Campaign", price: 400 },
  { name: "Video Creation", price: 1000 },
  { name: "Analytics Report", price: 250 },
];

const Pricing: React.FC<PricingProps> = ({ onBack,navigateTo }) => {
  const [selectedServices, setSelectedServices] = useState<string[]>([]);

  const toggleService = (serviceName: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceName)
        ? prev.filter(name => name !== serviceName)
        : [...prev, serviceName]
    );
  };

  const calculateTotal = () => {
    return selectedServices.reduce((total, service) => {
      const servicePrice = individualServices.find(s => s.name === service)?.price || 0;
      return total + servicePrice;
    }, 0);
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <button onClick={onBack} className="mb-8 flex items-center text-gray-600 hover:text-orange-500 transition-colors">
        <ArrowLeft className="mr-2" />
        Back to Home
      </button>
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Pricing Plans</h1>
      
      {/* Subscription Plans */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Monthly Subscriptions</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {subscriptionPlans.map((plan, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">{plan.name}</h3>
            <p className="text-4xl font-bold text-gray-800 mb-6">${plan.price}<span className="text-base font-normal text-gray-600">/mo</span></p>
            <ul className="mb-8 space-y-2">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-center">
                  <Check className="text-green-500 mr-2 w-5 h-5" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition-colors">
              Choose Plan
            </button>
          </div>
        ))}
      </div>

      {/* One-Time Plans */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">One-Time Packages</h2>
      <div className="grid md:grid-cols-3 gap-8 mb-16">
        {oneTimePlans.map((plan, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-2xl font-bold text-orange-500 mb-4">{plan.name}</h3>
            <p className="text-4xl font-bold text-gray-800 mb-6">${plan.price}</p>
            <ul className="mb-8 space-y-2">
              {plan.features.map((feature, fIndex) => (
                <li key={fIndex} className="flex items-center">
                  <Check className="text-green-500 mr-2 w-5 h-5" />
                  <span className="text-gray-600">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition-colors">
              Get Started
            </button>
          </div>
        ))}
      </div>

      {/* Individual Services */}
      <h2 className="text-2xl font-semibold text-gray-800 mb-6 text-center">Custom Package Builder</h2>
      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <p className="text-gray-600 mb-4">Select the services you need to create a custom package:</p>
        <div className="grid md:grid-cols-2 gap-4 mb-6">
          {individualServices.map((service, index) => (
            <div key={index} className="flex items-center">
              <input
                type="checkbox"
                id={`service-${index}`}
                checked={selectedServices.includes(service.name)}
                onChange={() => toggleService(service.name)}
                className="mr-2"
              />
              <label htmlFor={`service-${index}`} className="text-gray-700">{service.name} - ${service.price}</label>
            </div>
          ))}
        </div>
        <div className="text-xl font-bold text-gray-800">
          Total: ${calculateTotal()}
        </div>
        <button className="mt-4 w-full bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition-colors">
          Request Custom Quote
        </button>
      </div>

      <p className="mt-12 text-center text-gray-600">
        Need help choosing?{' '}
        <button 
          onClick={() => navigateTo('contact')} 
          className="text-orange-500 font-semibold hover:text-orange-600 transition-colors"
        >
          Contact us
        </button>{' '}
        for a personalized recommendation.
      </p>
    </div>
  );
};

export default Pricing;