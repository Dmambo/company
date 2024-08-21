const ContactUs = () => {
    return (
      <div className="max-w-5xl mx-auto p-6 md:p-12">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-8">Contact Us</h1>
  
        {/* Introduction */}
        <div className="mb-12 text-lg text-gray-600 leading-relaxed text-center">
          <p>
            Have questions or need help with a project? Get in touch with us. Our team is ready to assist you in any way we can. Fill out the form below, or use our contact information to reach us directly.
          </p>
        </div>
  
        {/* Contact Information */}
        <div className="flex flex-col md:flex-row justify-between mb-12">
          <div className="mb-8 md:mb-0 md:w-1/2 md:pr-8">
            <h3 className="text-2xl font-semibold text-gray-700 mb-4">Our Contact Information</h3>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Address:</strong> Sannoh&apos;s Office near Mtn headquaters Conakry, Guinea
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Phone:</strong> +224 613956391
            </p>
            <p className="text-lg text-gray-600 mb-4">
              <strong>Email:</strong> ibkhalidworld@gmail.com
            </p>
            <p className="text-lg text-gray-600">
              <strong>Hours:</strong> Mon-Fri, 9am-6pm
            </p>
          </div>
  
          {/* Google Map */}
          <div className="md:w-1/2">
            <div className="h-64 w-full shadow-lg rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m23!1m12!1m3!1d15739.092715275443!2d-13.702514712841797!3d9.5284255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m8!3e6!4m0!4m5!1s0xf1cd09394e6678d%3A0x3ef9af7b47ac1dbe!2sG8H8%2B9JF%20MTN%20Guin%C3%A9e%20Head%20Office%2C%207th%20Ave%2C%20Conakry%2C%20Guinea!3m2!1d9.528425499999999!2d-13.6834603!5e0!3m2!1sen!2sus!4v1724239108030!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
  
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h3 className="text-2xl font-semibold text-gray-700 mb-6">Send Us a Message</h3>
          <form>
            <div className="mb-6">
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-green-600"
                placeholder="Your Name"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-green-600"
                placeholder="Your Email"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                Message
              </label>
              <textarea
                id="message"
                className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:border-green-600"
                placeholder="Your Message"
                rows="5"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full py-3 px-6 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    );
  };
  
  export default ContactUs;
  