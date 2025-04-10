import React from 'react';
import { HomeIcon, BuildingIcon, FactoryIcon, WrenchIcon } from 'lucide-react';
export function Services() {
  const services = [{
    icon: <HomeIcon size={32} className="text-green-600" />,
    title: 'Residential Solar',
    description: 'Custom solar solutions designed for your home, reducing electricity bills and increasing property value.'
  }, {
    icon: <BuildingIcon size={32} className="text-green-600" />,
    title: 'Commercial Solar',
    description: 'Scalable solar systems for businesses of all sizes, delivering significant long-term savings.'
  }, {
    icon: <FactoryIcon size={32} className="text-green-600" />,
    title: 'Industrial Solutions',
    description: 'High-capacity solar installations for industrial facilities, reducing operational costs.'
  }, {
    icon: <WrenchIcon size={32} className="text-green-600" />,
    title: 'Maintenance & Repair',
    description: 'Professional maintenance and repair services to keep your solar system operating at peak efficiency.'
  }];
  return <section id="services" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Our Solar Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We offer comprehensive solar solutions tailored to your specific
            needs, from initial consultation to installation and maintenance.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600">{service.description}</p>
            </div>)}
        </div>
      </div>
    </section>;
}