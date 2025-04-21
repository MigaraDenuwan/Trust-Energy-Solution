export function Contact() {
    return (
      <div className="bg-gray-50">
        {/* Google Map Embed Section */}
        <div className="mt-0 mb-6">
          <div className="w-full h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d619.109971184503!2d79.90880340585718!3d6.830997926053895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae25b0067db0d3b%3A0xc581026f0962fa1f!2sTrust%20Energy%20Solutions%20Lanka%20(Private)%20Limited!5e0!3m2!1sen!2slk!4v1744718545018!5m2!1sen!2slk"
              width="100%"
              height="100%"
              frameBorder="0"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-hidden="false"
              tabIndex={0}
            />
          </div>
        </div>
  
        {/* Responsive Contact Section */}
        <div className="flex flex-col md:flex-row gap-10 container mx-auto px-6 py-10">
          {/* Contact Information */}
          <div className="md:w-1/2 w-full bg-gradient-to-r from-yellow-100 to-blue-100 rounded-xl p-8 shadow-lg border border-gray-200">
            <h1 className="text-4xl font-extrabold text-center text-[#093464] mb-8">Contact Us</h1>
  
            {/* Address Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-[#093464] mb-4">Address</h2>
              <div className="space-y-4 text-lg text-gray-700">
                <div>
                  <p className="font-semibold">Main Office</p>
                  <p>180, Deans Road, Colombo 10, Sri Lanka</p>
                </div>
                <div>
                  <p className="font-semibold">Hayleys Solar Experience Center - Matara</p>
                  <p>109, Anagarika Dharmapala Mawatha, Matara</p>
                </div>
                <div>
                  <p className="font-semibold">Hayleys Solar Experience Center - Jaffna</p>
                  <p>141, Palali Road, Thirunelveli, Jaffna</p>
                </div>
                <div>
                  <p className="font-semibold">Hayleys Solar Experience Center - Kandy</p>
                  <p>465/A, William Gopallawa Mawatha, Kandy</p>
                </div>
                <div>
                  <p className="font-semibold">Hayleys Solar Experience Center - Negombo</p>
                  <p>669 Puttalam – Colombo Rd, Negombo</p>
                </div>
              </div>
            </div>
  
            {/* Phone Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-[#093464] mb-4">Phone</h2>
              <p className="text-lg text-gray-700">
                <strong>Hotline:</strong> (+94) 011 2 102 102
              </p>
            </div>
  
            {/* Email Section */}
            <div className="mb-8">
              <h2 className="text-3xl font-semibold text-[#093464] mb-4">Email</h2>
              <p className="text-lg text-gray-700">
                <strong>Email:</strong> info@hayleyssolar.com
              </p>
            </div>
          </div>
  
          {/* Contact Form */}
          <div className="md:w-1/2 w-full bg-gradient-to-r from-yellow-100 to-blue-100 rounded-xl p-8 shadow-lg border border-gray-200">
            <h2 className="text-4xl font-extrabold text-center text-[#093464] mb-8">Send Us a Message</h2>
            <form
              action="mailto:info@hayleyssolar.com"
              method="POST"
              encType="text/plain"
              className="space-y-6"
            >
              <div>
                <label className="block font-medium text-lg text-gray-700">Your Name *</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  name="name"
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FAB111] transition"
                  required
                />
              </div>
              <div>
                <label className="block font-medium text-lg text-gray-700">Your Email *</label>
                <input
                  type="email"
                  placeholder="Your Email"
                  name="email"
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FAB111] transition"
                  required
                />
              </div>
              <div>
                <label className="block font-medium text-lg text-gray-700">Phone Number *</label>
                <input
                  type="tel"
                  placeholder="Your Phone Number"
                  name="phone"
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FAB111] transition"
                  required
                />
              </div>
              <div>
                <label className="block font-medium text-lg text-gray-700">Nearest City *</label>
                <input
                  type="text"
                  placeholder="Your Nearest City"
                  name="city"
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FAB111] transition"
                  required
                />
              </div>
              <div>
                <label className="block font-medium text-lg text-gray-700">Message</label>
                <textarea
                  placeholder="Your Message"
                  name="message"
                  className="w-full p-4 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#FAB111] transition"
                />
              </div>
              <button
                type="submit"
                className="bg-[#FAB111] text-white px-6 py-3 rounded-lg hover:bg-[#C35919] font-bold transition-colors"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  