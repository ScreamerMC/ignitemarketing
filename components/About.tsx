import React from 'react';
import { ArrowLeft, Users, Target, TrendingUp } from 'lucide-react';

interface AboutProps {
  onBack: () => void;
  navigateTo: (page: string) => void;
}

const About: React.FC<AboutProps> = ({ onBack }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <button onClick={onBack} className="mb-8 flex items-center text-gray-600 hover:text-orange-500 transition-colors">
        <ArrowLeft className="mr-2" />
        Back to Home
      </button>
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Ignite Digital Marketing</h1>
      <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
        <div>
          <p className="text-lg text-gray-600 mb-6">
            At Ignite Digital Marketing, we&apos;re passionate about helping small businesses thrive in the digital landscape. Founded in 2020, we&apos;ve quickly become a trusted partner for businesses looking to establish a strong online presence and drive growth through digital channels.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            Our team of experts combines creativity, strategy, and cutting-edge technology to deliver results that exceed expectations. We believe in the power of digital marketing to transform businesses, and we&apos;re committed to staying at the forefront of industry trends and best practices.
          </p>
          <p className="text-lg text-gray-600 mb-6">
            With a client-first approach, we tailor our strategies to meet the unique needs and goals of each business we work with. Our success is measured by the success of our clients, and we take pride in the long-lasting partnerships we&apos;ve built over the years.
          </p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            To empower small businesses with the digital tools and strategies they need to compete and succeed in today&apos;s online marketplace. We strive to ignite growth, foster innovation, and create lasting impact for our clients and their customers.
          </p>
        </div>
      </div>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="text-center">
          <Users className="text-orange-500 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Team</h3>
          <p className="text-gray-600">Our diverse team brings years of experience in digital marketing, web development, and content creation. We&apos;re constantly learning and evolving to stay ahead of the curve.</p>
        </div>
        <div className="text-center">
          <Target className="text-orange-500 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Tailored Strategies</h3>
          <p className="text-gray-600">We create custom strategies that align with your unique business goals and target audience. No one-size-fits-all approaches here – just personalized solutions designed for your success.</p>
        </div>
        <div className="text-center">
          <TrendingUp className="text-orange-500 w-12 h-12 mx-auto mb-4" />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Measurable Results</h3>
          <p className="text-gray-600">We focus on delivering tangible results that drive your business growth and success. Our data-driven approach ensures that you can see the impact of our efforts in real-time.</p>
        </div>
      </div>
    </div>
  );
};

export default About;