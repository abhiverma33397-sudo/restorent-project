import React from 'react';

const AboutPage = () => {
  return (
    <div className="min-h-screen bg-[#FFF3EC]">
      {/* Hero Section with Background Overlay */}
      <div className="relative h-[400px] flex items-center justify-center bg-black">
        <img 
          src="https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&q=80&w=2070" 
          className="absolute inset-0 w-full h-full object-cover opacity-50"
          alt="Restaurant Hero"
        />
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif font-bold mb-4 drop-shadow-lg">
            Our Story
          </h1>
          <p className="text-xl md:text-2xl font-light italic">
            "Serving happiness on a plate since 2016"
          </p>
        </div>
      </div>

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        
        {/* Welcome Section */}
        <div className="text-center mb-20">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Welcome To My Restaurant</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
            World best food in my restaurant and we have the best service for you and your family. 
            We don't just cook, we create memories.
          </p>
          <div className="w-24 h-1 bg-orange-500 mx-auto mt-6"></div>
        </div>

        {/* Two Column Section: Image + Text */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="rounded-2xl overflow-hidden shadow-2xl transform hover:scale-105 transition duration-500">
            <img 
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&q=80&w=1974" 
              alt="Our Kitchen"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">About Us</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              We are a family-owned restaurant that has been serving delicious food for over <span className="font-bold text-orange-600">10 years</span>. 
              Our mission is to provide our customers with the best dining experience possible. 
            </p>
            <p className="text-gray-700 text-lg leading-relaxed">
              We use only the freshest ingredients and prepare each dish with care and attention to detail. 
              Our menu features a variety of dishes from around the world.
            </p>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-full font-bold hover:bg-orange-600 transition shadow-lg">
              Explore Menu
            </button>
          </div>
        </div>

        {/* Stats Section (Attractive Element) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-white p-10 rounded-3xl shadow-xl text-center">
          <div>
            <h4 className="text-4xl font-bold text-orange-500">10+</h4>
            <p className="text-gray-500 uppercase text-sm tracking-widest mt-2">Years Exp</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-orange-500">50+</h4>
            <p className="text-gray-500 uppercase text-sm tracking-widest mt-2">Dishes</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-orange-500">20k+</h4>
            <p className="text-gray-500 uppercase text-sm tracking-widest mt-2">Happy Clients</p>
          </div>
          <div>
            <h4 className="text-4xl font-bold text-orange-500">15+</h4>
            <p className="text-gray-500 uppercase text-sm tracking-widest mt-2">Master Chefs</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default AboutPage;