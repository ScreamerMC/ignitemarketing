'use client' // This directive is used in Next.js 13+ to indicate that this is a client-side component

import React, { useState, useEffect } from 'react';
// Importing necessary React hooks

import { Flame, ArrowRight, Zap, Target, TrendingUp, Coffee, Menu, X } from 'lucide-react';
// Importing icons from the lucide-react library

import Services from './Services';
import Pricing from './Pricing';
import About from './About';
import Contact from './Contact';
// Importing other components that will be rendered based on navigation

const HomePage: React.FC = () => {
  // Defining the HomePage component as a functional component

  // State hooks for managing component state
  const [currentPage, setCurrentPage] = useState('home');
  // Keeps track of which page is currently being displayed

  const [isLoading, setIsLoading] = useState(false);
  // Used to show/hide a loading indicator

  const [coffeeClicks, setCoffeeClicks] = useState(0);
  // Tracks the number of times the coffee icon has been clicked

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // Controls whether the mobile menu is open or closed

  // Function to handle navigation between pages
  const navigateTo = (page: string) => {
    setIsLoading(true);
    // Show loading indicator
    setTimeout(() => {
      setCurrentPage(page);
      setIsLoading(false);
      setIsMenuOpen(false);
      // After a short delay, update the current page, hide the loading indicator, and close the mobile menu
    }, 500);
  };

  // useEffect hook to add animation to the flame icon
  useEffect(() => {
    const interval = setInterval(() => {
      const flame = document.querySelector('.flame-icon') as HTMLElement;
      if (flame) {
        flame.style.transform = `scale(${1 + Math.random() * 0.2})`;
        setTimeout(() => {
          flame.style.transform = 'scale(1)';
        }, 150);
      }
    }, 3000);

    // Cleanup function to clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  // Function to handle coffee icon clicks
  const handleCoffeeClick = () => {
    setCoffeeClicks(prev => prev + 1);
    if (coffeeClicks === 4) {
      alert("Thanks for the coffee! ☕ Here's a dad joke: Why don't scientists trust atoms? Because they make up everything!");
      setCoffeeClicks(0);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-orange-50 to-white">
      {/* Main container with minimum full height, flexbox layout, and gradient background */}

      {isLoading && (
        <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
          <Flame className="text-orange-500 w-12 h-12 animate-pulse" />
        </div>
      )}
      {/* Loading overlay that appears when isLoading is true */}

      <header className="py-4 md:py-6 sticky top-0 bg-white bg-opacity-90 backdrop-blur-sm z-10">
        {/* Sticky header with blur effect */}
        <nav className="container mx-auto px-4 flex justify-between items-center">
          {/* Navigation bar */}
          <button 
            onClick={() => navigateTo('home')} 
            className="flex items-center space-x-2 focus:outline-none group"
          >
            {/* Logo and company name, clickable to return to home */}
            <Flame className="text-orange-500 w-6 h-6 md:w-8 md:h-8 flame-icon transition-transform duration-150 group-hover:scale-110" />
            <span className="text-xl md:text-2xl font-bold text-gray-800 group-hover:text-orange-500 transition-colors">
              Ignite Digital Marketing
            </span>
          </button>
          <div className="md:hidden">
            {/* Mobile menu toggle button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-orange-500 transition-colors">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
          <ul className={`md:flex md:space-x-6 ${isMenuOpen ? 'absolute top-full left-0 right-0 bg-white p-4 shadow-md' : 'hidden'} md:static md:shadow-none`}>
            {/* Navigation menu items */}
            <li><button onClick={() => navigateTo('services')} className="block w-full text-left py-2 md:py-0 text-gray-600 hover:text-orange-500 transition-colors hover:scale-110">Services</button></li>
            <li><button onClick={() => navigateTo('pricing')} className="block w-full text-left py-2 md:py-0 text-gray-600 hover:text-orange-500 transition-colors hover:scale-110">Pricing</button></li>
            <li><button onClick={() => navigateTo('about')} className="block w-full text-left py-2 md:py-0 text-gray-600 hover:text-orange-500 transition-colors hover:scale-110">About</button></li>
            <li><button onClick={() => navigateTo('contact')} className="block w-full text-left py-2 md:py-0 text-gray-600 hover:text-orange-500 transition-colors hover:scale-110">Contact</button></li>
            <li><button onClick={handleCoffeeClick} className="block w-full text-left py-2 md:py-0 text-gray-600 hover:text-orange-500 transition-colors hover:scale-110" title="Buy us a coffee!"><Coffee /></button></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        {/* Main content area */}
        {currentPage === 'home' && (
          <section className="py-12 md:py-20 animate-fadeIn">
            {/* Home page content */}
            <div className="container mx-auto px-4 text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Spark Your Digital Success</h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
                Welcome to Ignite Digital Marketing, where we turn your online presence into a blazing success story. Let&apos;s fuel your growth together.
              </p>
              <button 
                onClick={() => navigateTo('contact')}
                className="bg-orange-500 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-600 transition-all hover:shadow-lg inline-flex items-center group"
              >
                Ignite Your Growth
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

            <div className="container mx-auto px-4 mt-12 md:mt-20 grid md:grid-cols-3 gap-8">
              {/* Feature cards */}
              <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform">
                <Zap className="text-orange-500 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Expert Strategies</h3>
                <p className="text-gray-600">Tailored digital marketing solutions to elevate your brand</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform">
                <Target className="text-orange-500 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Proven Results</h3>
                <p className="text-gray-600">Drive traffic, increase conversions, and boost your ROI</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md text-center transform hover:scale-105 transition-transform">
                <TrendingUp className="text-orange-500 w-12 h-12 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Dedicated Support</h3>
                <p className="text-gray-600">Your success is our priority - we&apos;re with you every step of the way</p>
              </div>
            </div>
          </section>
        )}

        {/* Conditional rendering of other pages based on currentPage state */}
        {currentPage === 'services' && <Services onBack={() => navigateTo('home')} navigateTo={navigateTo} />}
        {currentPage === 'pricing' && <Pricing onBack={() => navigateTo('home')} navigateTo={navigateTo} />}
        {currentPage === 'about' && <About onBack={() => navigateTo('home')} navigateTo={navigateTo} />}
        {currentPage === 'contact' && <Contact onBack={() => navigateTo('home')} navigateTo={navigateTo} />}
      </main>

      <footer className="bg-gray-800 text-white py-6 md:py-8 mt-12">
        {/* Footer section */}
        <div className="container mx-auto px-4 text-center">
          <p>&copy; 2023 Ignite Digital Marketing. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">Made with 🔥 and a sprinkle of digital magic</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;