import React from 'react';
import { StarIcon } from 'lucide-react';
export function Testimonials() {
  const testimonials = [{
    name: 'Sarah Johnson',
    role: 'Homeowner',
    content: "Switching to solar with Hayles was the best decision we've made for our home. The installation was quick and professional, and our electricity bills have been cut in half!",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }, {
    name: 'Michael Chen',
    role: 'Business Owner',
    content: "As a small business owner, I was concerned about the upfront costs of solar. Hayles Solar worked with me to find financing options that made sense, and now I'm saving thousands annually.",
    rating: 5,
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80'
  }, {
    name: 'Lisa Rodriguez',
    role: 'Homeowner',
    content: 'The team at Hayles Solar was incredibly knowledgeable and patient with all my questions. The system they designed for our home has exceeded our expectations in energy production.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=761&q=80'
  }];
  return <section id="testimonials" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers
            have to say about their experience with Hayles Solar.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-sm">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => <StarIcon key={i} size={18} className="text-yellow-500 fill-current" />)}
              </div>
              <p className="text-gray-600 italic mb-6">
                "{testimonial.content}"
              </p>
              <div className="flex items-center">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover mr-4" />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-gray-500 text-sm">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
}