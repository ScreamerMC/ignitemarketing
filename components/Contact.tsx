import React from 'react';
import { ArrowLeft, Mail, Phone, MapPin } from 'lucide-react';

interface ContactProps {
  onBack: () => void;
  navigateTo: (page: string) => void;
}

const Contact: React.FC<ContactProps> = ({ onBack }) => {
  return (
    <div className="container mx-auto px-4 py-12">
      <button onClick={onBack} className="mb-8 flex items-center text-gray-600 hover:text-orange-500 transition-colors">
        <ArrowLeft className="mr-2" />
        Back to Home
      </button>
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Us</h1>
      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-gray-600 mb-6">
            We&apos;d love to hear from you! Whether you have a question about our services, pricing, or just want to say hello, we&apos;re here to help. Reach out to us using any of the methods below, or fill out the form to send us a message directly.
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="text-orange-500 w-6 h-6 mr-2" />
              <span className="text-gray-600">info@ignitedigital.com</span>
            </div>
            <div className="flex items-center">
              <Phone className="text-orange-500 w-6 h-6 mr-2" />
              <span className="text-gray-600">+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center">
              <MapPin className="text-orange-500 w-6 h-6 mr-2" />
              <span className="text-gray-600">123 Digital Avenue, Tech City, 12345</span>
            </div>
          </div>
          <div className="mt-8">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Office Hours</h3>
            <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
            <p className="text-gray-600">Saturday: 10:00 AM - 2:00 PM</p>
            <p className="text-gray-600">Sunday: Closed</p>
          </div>
        </div>
        <div>
          <form className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">Name</label>
              <input type="text" id="name" name="name" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">Email</label>
              <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="subject" className="block text-gray-700 font-semibold mb-2">Subject</label>
              <input type="text" id="subject" name="subject" className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500" required></textarea>
            </div>
            <button type="submit" className="w-full bg-orange-500 text-white py-2 px-4 rounded-full hover:bg-orange-600 transition-colors">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;