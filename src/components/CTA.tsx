import React from 'react';
export function CTA() {
  return <section className="py-16 bg-gradient-to-r from-green-600 to-green-800 text-white">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Switch to Solar?</h2>
        <p className="text-xl max-w-2xl mx-auto mb-8">
          Take the first step towards energy independence and sustainability.
          Our team is ready to help you design the perfect solar solution.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a href="#contact" className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 font-semibold px-8 py-4 rounded-md transition-colors text-lg">
            Get Your Free Quote
          </a>
          <a href="tel:+15551234567" className="bg-white bg-opacity-20 hover:bg-opacity-30 px-8 py-4 rounded-md transition-colors text-lg">
            Call Us: (555) 123-4567
          </a>
        </div>
      </div>
    </section>;
}