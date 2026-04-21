import React from 'react';

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-6">
      <div className="max-w-6xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact My Restaurant
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We are happy to assist you with any questions or concerns you may have. 
            Please feel free to contact us using the information below:
          </p>
          <div className="w-20 h-1 bg-yellow-500 mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* Left Side: Contact Details Card */}
          <div className="bg-white shadow-2xl rounded-2xl overflow-hidden">
            <div className="bg-black py-4 text-center">
              <h2 className="text-white text-xl font-semibold">Contact Details</h2>
            </div>
            <div className="p-8 space-y-8">
              {/* Phone */}
              <div className="flex items-center gap-4 group">
                <div className="w-12 h-12 bg-yellow-100 text-yellow-600 flex items-center justify-center rounded-full group-hover:bg-yellow-500 group-hover:text-white transition-all">
                  <i className="fa-solid fa-headset text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Customer Care</p>
                  <p className="text-lg font-bold text-gray-800">8765432109</p>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4 group border-t border-gray-100 pt-6">
                <div className="w-12 h-12 bg-blue-100 text-blue-600 flex items-center justify-center rounded-full group-hover:bg-blue-500 group-hover:text-white transition-all">
                  <i className="fa-solid fa-envelope text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Email Us</p>
                  <p className="text-lg font-bold text-gray-800">info@gmail.com</p>
                </div>
              </div>

              {/* WhatsApp/Direct */}
              <div className="flex items-center gap-4 group border-t border-gray-100 pt-6">
                <div className="w-12 h-12 bg-green-100 text-green-600 flex items-center justify-center rounded-full group-hover:bg-green-500 group-hover:text-white transition-all">
                  <i className="fa-solid fa-phone text-xl"></i>
                </div>
                <div>
                  <p className="text-sm text-gray-500 font-medium">Direct Line</p>
                  <p className="text-lg font-bold text-gray-800">+91 9011954401</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Attractive Form */}
          <div className="bg-white p-8 shadow-2xl rounded-2xl border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <input type="text" placeholder="Your Name" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500" />
                <input type="email" placeholder="Your Email" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500" />
              </div>
              <input type="text" placeholder="Subject" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500" />
              <textarea placeholder="How can we help you?" rows="4" className="w-full p-3 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:border-yellow-500"></textarea>
              <button className="w-full bg-black text-white font-bold py-3 rounded-lg hover:bg-gray-800 transition-all shadow-lg transform hover:-translate-y-1">
                Send Message
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;