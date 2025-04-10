import { DollarSignIcon, LeafIcon, HomeIcon, BatteryChargingIcon } from 'lucide-react';
export function Benefits() {
  return <section id="benefits" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Benefits of Solar Energy</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover why thousands of homeowners and businesses are switching to
            solar power with Hayles Solar.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex items-start">
            <div className="bg-yellow-100 p-3 rounded-full mr-4">
              <DollarSignIcon className="h-6 w-6 text-yellow-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Significant Savings
              </h3>
              <p className="text-gray-600">
                Reduce or eliminate your electricity bills and protect yourself
                from rising energy costs. Many customers see a return on
                investment within 5-7 years.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-green-100 p-3 rounded-full mr-4">
              <LeafIcon className="h-6 w-6 text-green-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Environmentally Friendly
              </h3>
              <p className="text-gray-600">
                Solar energy is clean, renewable, and reduces your carbon
                footprint. A typical system can offset the equivalent of
                planting over 100 trees annually.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-blue-100 p-3 rounded-full mr-4">
              <HomeIcon className="h-6 w-6 text-blue-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Increased Property Value
              </h3>
              <p className="text-gray-600">
                Homes with solar installations typically sell faster and for
                more money than comparable homes without solar systems.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-purple-100 p-3 rounded-full mr-4">
              <BatteryChargingIcon className="h-6 w-6 text-purple-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-2">
                Energy Independence
              </h3>
              <p className="text-gray-600">
                Reduce your dependence on the grid and protect yourself from
                power outages with optional battery storage solutions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
}