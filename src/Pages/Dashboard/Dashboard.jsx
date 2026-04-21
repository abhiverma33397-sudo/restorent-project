import React from "react";
import { useNavigate } from "react-router-dom";
import OrderButton from "../Layout/OrderButton";

// Assets
import FoodImage from "../../assets/FoodImage.png";
import D1 from "../../assets/Div-1-Img/D1.jpg";
import D2 from "../../assets/Div-1-Img/D2.jpg";
import D3 from "../../assets/Div-1-Img/D3.jpg";
import D4 from "../../assets/Div-1-Img/D4.jpg";
import D5 from "../../assets/Div-1-Img/D5.jpg";
import D6 from "../../assets/Div-1-Img/D6.jpg";

const Dashboard = () => {
  const navigate = useNavigate();

  const dishes = [
    { img: D1, name: "Kadai Paneer", price: "200", tag: "Signature" },
    { img: D2, name: "Idli Sambar", price: "50", tag: "Healthy" },
    { img: D3, name: "Chole Bhature", price: "150", tag: "Classic" },
    { img: D4, name: "Masala Dosa", price: "100", tag: "Popular" },
    { img: D5, name: "Maharashtrian Thali", price: "100", tag: "Premium" },
    { img: D6, name: "Rava Dosa", price: "50", tag: "Trending" },
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen text-[#1A1A1A] font-sans selection:bg-red-100">
      
      {/* --- HERO: KEEPING THE EDITORIAL TOP YOU LIKED --- */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 md:px-20 overflow-hidden bg-white">
        <div className="z-10 max-w-6xl py-20 md:py-0">
          <p className="text-red-600 font-bold tracking-[0.4em] uppercase text-[10px] mb-6">
            Sonipat's Finest Dining
          </p>
          <h1 className="text-[14vw] md:text-[11vw] font-black leading-[0.75] tracking-tighter uppercase mb-8">
            TASTY<br/><span className="text-transparent stroke-text-black">BITE.</span>
          </h1>
          
          <div className="flex flex-col md:flex-row md:items-center gap-8 mt-6 border-t border-gray-100 pt-8">
            <p className="text-gray-400 text-lg max-w-sm font-medium leading-relaxed">
              Experience authentic flavors crafted with precision and passion.
            </p>
            <button 
              onClick={() => navigate("/menu")}
              className="bg-[#1A1A1A] text-white px-10 py-5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-red-600 transition-all duration-300"
            >
              Order Online →
            </button>
          </div>
        </div>

        {/* Hero Background - Responsive Fix */}
        <div className="absolute top-0 right-0 w-full md:w-[45%] h-1/2 md:h-full opacity-20 md:opacity-100 -z-0">
          <img src={FoodImage} className="w-full h-full object-cover" alt="Hero" />
          <div className="absolute inset-0 bg-gradient-to-t md:bg-gradient-to-r from-white via-white/20 to-transparent"></div>
        </div>
      </section>

      {/* --- MENU GRID --- */}
     {/* --- MENU GRID: ENHANCED ITEMS --- */}
<section className="py-24 px-6 max-w-7xl mx-auto">
  <div className="flex items-center gap-4 mb-16">
    <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">
      Top Picks
    </h2>
    <div className="h-[2px] flex-1 bg-gray-100"></div>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
    {dishes.map((dish, i) => (
      <div 
        key={i} 
        className="group relative bg-white rounded-[2rem] p-3 shadow-[0_20px_50px_rgba(0,0,0,0.03)] hover:shadow-[0_40px_80px_rgba(0,0,0,0.08)] transition-all duration-700 ease-in-out hover:-translate-y-3"
      >
        {/* Image Container with Floating Badge */}
        <div className="relative h-72 overflow-hidden rounded-[1.5rem] mb-6">
          <img 
            src={dish.img} 
            className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
            alt={dish.name} 
          />
          
          {/* Tag: Glassmorphism Effect */}
          <div className="absolute top-4 left-4 backdrop-blur-md bg-white/70 px-4 py-1.5 rounded-full shadow-sm">
            <span className="text-[10px] font-black uppercase tracking-widest text-[#1A1A1A]">
              {dish.tag}
            </span>
          </div>

          {/* Price Tag: Floating Style */}
          <div className="absolute bottom-4 right-4 bg-[#1A1A1A] text-white px-5 py-2 rounded-2xl font-bold shadow-xl transform translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
            ₹{dish.price}
          </div>
        </div>

        {/* Content Section */}
        <div className="px-4 pb-4">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-2xl font-extrabold tracking-tight group-hover:text-red-600 transition-colors duration-300">
                {dish.name}
              </h3>
              <p className="text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">
                Freshly Prepared
              </p>
            </div>
          </div>

          {/* Interaction Area */}
          <div className="pt-4 border-t border-gray-50 flex items-center justify-between">
            <div className="transform scale-90 group-hover:scale-100 origin-left transition-transform duration-500">
              <OrderButton />
            </div>
            
            {/* Quick View Icon (Optional/Visual) */}
            <div className="w-10 h-10 rounded-full border border-gray-100 flex items-center justify-center text-gray-300 group-hover:border-red-600 group-hover:text-red-600 transition-all duration-500">
              <span className="text-xl">⊕</span>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* --- CHEF SECTION: REDUCED SIZE & BETTER MOBILE ALIGNMENT --- */}
      <section className="bg-white py-16 px-6 border-y border-gray-100">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center gap-10">
          <img 
            src="https://i.pinimg.com/736x/24/4b/3c/244b3cf33bf5bbecb36983007b6b13d0.jpg" 
            className="w-48 h-48 md:w-64 md:h-64 rounded-full object-cover shadow-xl border-4 border-[#FAF9F6]" 
            alt="Chef" 
          />
          <div className="text-center md:text-left space-y-4">
            <span className="text-red-600 font-bold uppercase tracking-widest text-[10px]">Executive Chef</span>
            <h2 className="text-4xl md:text-5xl font-black tracking-tight uppercase">John Doe</h2>
            <p className="text-lg text-gray-500 italic max-w-xl">
              "Quality is at the heart of everything we cook. With 10 years at Taj Hotel, I bring world-class techniques to every plate."
            </p>
          </div>
        </div>
      </section>

      {/* --- FOOTER: SIMPLE & CLEAN --- */}
      <footer className="bg-white py-12 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <h2 className="text-2xl font-black tracking-tighter">TASTYBITE.</h2>
          
          <div className="flex gap-8 text-xs font-bold text-gray-400 uppercase tracking-widest">
            <a href="#" className="hover:text-red-600">Instagram</a>
            <a href="#" className="hover:text-red-600">Facebook</a>
            <a href="#" className="hover:text-red-600">Twitter</a>
          </div>
          
          <p className="text-[10px] font-bold text-gray-300 uppercase tracking-widest">
            © 2026 Tasty Bite Restaurant
          </p>
        </div>
      </footer>

      {/* Custom Style for the Hero Text */}
      <style>{`
        .stroke-text-black {
          -webkit-text-stroke: 2px #1A1A1A;
          color: transparent;
        }
        @media (max-width: 768px) {
          .stroke-text-black { -webkit-text-stroke: 1px #1A1A1A; }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;