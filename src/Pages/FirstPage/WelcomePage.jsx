import React from 'react';
import { useNavigate } from 'react-router-dom';

const WelcomePage = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-[#f4f7f5] flex items-center justify-center p-4 md:p-6 lg:p-10 overflow-hidden font-sans selection:bg-[#064e3b] selection:text-white">
      
      <div className="w-full h-full max-w-[1400px] bg-white rounded-[30px] md:rounded-[50px] relative overflow-hidden flex flex-col md:flex-row shadow-[0_50px_100px_-20px_rgba(0,0,0,0.08)] border border-gray-100">
        
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#059669]/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#fbbf24]/10 blur-[120px] rounded-full"></div>

        <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-8 md:px-16 lg:px-20 z-30 order-2 md:order-1">
          <div className="space-y-4 md:space-y-8 lg:space-y-10">
         
            <div className="flex items-center text-center gap-3">
               <div className="h-[2px] lg:ml-14 w-8 bg-[#059669]"></div>
               <span className="text-[10px]  text-[#059669] font-black uppercase tracking-[0.4em]">The Veg Excellence</span>
               <div className="h-[2px] w-8 bg-[#059669]"></div>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-[9rem] font-black text-[#1a1a1a] leading-[0.85] md:leading-[0.8] tracking-tighter uppercase">
              Tasty<br />
              <span className="text-transparent stroke-text-green">Bite.</span>
            </h1>

            <p className="text-gray-400 text-base md:text-lg lg:text-xl max-w-sm font-medium leading-relaxed italic border-l-4 border-[#fbbf24] pl-6">
              Experience the symphony of garden-fresh flavors and modern culinary art.
            </p>

            
            <div className="pt-2 md:pt-4">
              <button
                onClick={() => navigate('/dashboard')}
                className="group relative inline-flex items-center justify-center px-10 py-3.5 overflow-hidden font-black text-[#1a1a1a] border-2 border-[#1a1a1a] rounded-full uppercase text-[10px] tracking-[0.2em] transition-all duration-500 hover:text-white"
              >
                <span className="absolute inset-0 w-0 h-full bg-[#1a1a1a] transition-all duration-500 ease-out group-hover:w-full"></span>
                <span className="relative flex items-center gap-3">
                  Enter Gallery
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" className="group-hover:translate-x-1 transition-transform ">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="w-full md:w-1/2 h-full relative order-1 md:order-2 p-3 md:p-5 lg:p-6">
          <div className="w-full h-full rounded-[20px] md:rounded-[40px] overflow-hidden relative shadow-2xl group">
            <img 
              src="https://images.unsplash.com/photo-1543339308-43e59d6b73a6?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-[3s] ease-out group-hover:scale-105" 
              alt="Gourmet Salad" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#064e3b]/40 to-transparent opacity-60"></div>
            <div className="absolute bottom-6 md:bottom-10 left-6 md:left-10 right-6 md:right-10 backdrop-blur-md bg-white/10 border border-white/20 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] hidden md:block">
               <p className="text-white font-black text-[10px] md:text-sm uppercase tracking-[0.2em]">Crafted with Love</p>
            </div>
          </div>
        </div>

      </div>

      <style>{`
        .stroke-text-green {
          -webkit-text-stroke: 1.5px #059669;
          color: transparent;
        }
        @media (max-width: 768px) {
          .stroke-text-green { -webkit-text-stroke: 1px #059669; }
        }
      `}</style>
    </div>
  );
};

export default WelcomePage;