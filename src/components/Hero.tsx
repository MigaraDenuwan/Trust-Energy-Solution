import Slider from 'react-slick';

export function Hero() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 2000,
    autoplay: true,
    autoplaySpeed: 8000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="relative text-white min-h-[600px] overflow-hidden">
      {/* Slideshow */}
      <div className="absolute inset-0 h-full w-full z-0">
        <Slider {...settings}>
          <div className="h-[600px] sm:h-full">
            <img
              src="/images/solar1.avif"
              alt="Solar 1"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[600px] sm:h-full">
            <img
              src="/images/solar2.jpg"
              alt="Solar 2"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[600px] sm:h-full">
            <img
              src="/images/solar3.png"
              alt="Solar 3"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="h-[600px] sm:h-full">
            <img
              src="/images/solar4.avif"
              alt="Solar 4"
              className="w-full h-full object-cover"
            />
          </div>
        </Slider>

        {/* Overlay - Adjusts better on small screens */}
        <div className="absolute top-0 left-0 w-full sm:w-3/5 h-full bg-[#FAB111]/40 z-10 rounded-tr-[200px] sm:rounded-tr-full blur-sm"></div>
      </div>

      {/* Hero Content */}
      <div className="relative z-20 px-6 py-20 sm:py-28 max-w-xl mx-auto sm:mx-0 sm:ml-12">
        <h1 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight sm:leading-tight">
          Empowering a Greener Tomorrow with Solar Innovation
        </h1>
        <p className="text-base sm:text-xl mb-8">
          At <span className="font-semibold">Trust Energy Solutions</span>, we deliver cutting-edge solar energy systems designed for both homes and businesses. Reduce your electricity bills, increase efficiency, and join the movement toward a cleaner, more sustainable future.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <a
            href="#contact"
            className="bg-[#FAB111] hover:bg-yellow-600 text-gray-900 font-semibold px-6 py-3 rounded-md transition-colors text-center"
          >
            Get Free Consultation
          </a>
          <a
            href="#services"
            className="bg-white bg-opacity-20 hover:bg-opacity-30 px-6 py-3 rounded-md transition-colors text-center"
          >
            Our Services
          </a>
        </div>
      </div>
    </section>
  );
}
