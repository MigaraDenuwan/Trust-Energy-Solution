export function About() {
  return <section id="about" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
        <div className="lg:w-1/2">
          <img src="/images/solar5.jpg" className="rounded-xl" alt="Solar 5" />
        </div>
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-bold mb-6">About Trust Energy Solutions</h2>
            <p className="text-gray-600 mb-4">
              Founded in 2010, Hayles Solar has been at the forefront of the
              renewable energy revolution. Our mission is to make solar energy
              accessible, affordable, and hassle-free for homeowners and
              businesses alike.
            </p>
            <p className="text-gray-600 mb-4">
              With over 1,000 successful installations and a team of certified
              solar professionals, we bring expertise and quality craftsmanship
              to every project. We handle everything from initial consultation
              to permitting, installation, and maintenance.
            </p>
            <p className="text-gray-600 mb-6">
              What sets us apart is our commitment to customer satisfaction and
              our tailored approach to each project. We don't just sell solar
              systems – we create energy solutions that meet your specific needs
              and goals.
            </p>
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">10+</div>
                <div className="text-gray-600">Years Experience</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">1000+</div>
                <div className="text-gray-600">Installations</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">15M+</div>
                <div className="text-gray-600">kWh Generated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-green-600">99%</div>
                <div className="text-gray-600">Customer Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
}