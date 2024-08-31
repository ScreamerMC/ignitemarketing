import React from 'react';
import { ArrowLeft, Globe, Users, Rocket, BarChart, Palette, Shield } from 'lucide-react';

const services = [
  {
    title: "Search Engine Optimization (SEO)",
    description: "Boost your visibility and climb the search engine rankings. Our SEO experts use cutting-edge techniques to improve your website's organic search performance.",
    icon: Globe
  },
  {
    title: "Social Media Management",
    description: "Engage your audience and build a strong online community. We create and manage compelling social media campaigns that resonate with your target audience.",
    icon: Users
  },
  {
    title: "Content Marketing",
    description: "Create compelling content that resonates with your target audience. Our content strategists develop high-quality, relevant content that drives engagement and conversions.",
    icon: Rocket
  },
  {
    title: "Pay-Per-Click (PPC) Advertising",
    description: "Drive targeted traffic and increase conversions with strategic ad campaigns. We manage and optimize your PPC campaigns for maximum ROI.",
    icon: BarChart
  },
  {
    title: "Web Design and Development",
    description: "Craft stunning, responsive websites that captivate and convert visitors. Our designers and developers create user-friendly, performant websites tailored to your brand.",
    icon: Palette
  },
  {
    title: "Online Reputation Management",
    description: "Build and maintain a positive online presence for your brand. We monitor and manage your online reputation to ensure a positive perception of your business.",
    icon: Shield
  }
];

interface ServicesProps {
  onBack: () => void;
  navigateTo: (page: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onBack }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <button onClick={onBack} className="mb-8 flex items-center text-gray-600 hover:text-orange-500 transition-colors">
        <ArrowLeft className="mr-2" />
        Back to Home
      </button>
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Our Services</h1>
      <p className="text-xl text-gray-600 mb-12 text-center max-w-3xl mx-auto">
        At Ignite Digital Marketing, we offer a comprehensive suite of digital marketing services designed to help your business thrive in the online world. Explore our offerings below:
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <service.icon className="text-orange-500 w-12 h-12 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;