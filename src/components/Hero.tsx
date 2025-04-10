import React from 'react';
export function Hero() {
  return <section className="relative bg-gradient-to-r from-green-700 to-blue-800 text-white">
      <div className="absolute inset-0 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1509391366360-2e959784a276?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1504&q=80" alt="Solar panels on a sunny day" className="w-full h-full object-cover opacity-20" />
      </div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Powering Your Home With Clean Solar Energy
          </h1>
          <p className="text-xl mb-8">
            Hayles Solar provides high-quality solar solutions for residential
            and commercial properties. Save money while saving the planet.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-md transition-colors">
              Get Free Consultation
            </a>
            <a href="#services" className="bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-md transition-colors">
              Our Services
            </a>
          </div>
        </div>
      </div>
    </section>;
}