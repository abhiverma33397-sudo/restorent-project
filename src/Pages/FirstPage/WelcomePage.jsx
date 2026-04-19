import React, { use } from 'react'
import { useNavigate } from 'react-router-dom';
import FastFood3 from '../../assets/FastFood3.jpg';

const WelcomePage = ({ onOrderClick }) => {
    const navigate = useNavigate();
  return (
    <div className="h-screen w-full bg-[#faf9f7] flex flex-col items-center justify-center px-6 overflow-hidden">

      <p className="text-xs tracking-[0.2em] uppercase text-gray-400 mb-3">
        ✦ 100% Vegetarian
      </p>

      <h1 className="text-6xl text-gray-900 mb-3 text-center leading-tight" style={{ fontFamily: 'Georgia, serif' }}>
        Tasty <br />
        <span className="italic text-[#c4673a]">Bite</span>
      </h1>

      <p className="text-sm text-gray-500 text-center max-w-xs leading-relaxed mb-5">
        Fresh vegetarian meals, crafted with care and served with warm hospitality.
      </p>

      <div className="w-full max-w-sm rounded-2xl overflow-hidden mb-6 shadow-md" style={{ aspectRatio: '4/3' }}>
        <img src={FastFood3} className="w-full h-full object-cover" alt="Vegetarian thali" />
      </div>

      <button
        onClick={() => navigate('/dashboard')}
        className="group flex items-center gap-3 bg-[#c4673a] text-white text-sm font-medium px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-[#b05a30] hover:scale-105 active:scale-95 transition-all duration-300"
      >
        Order Here
        <span className="bg-white text-[#c4673a] rounded-full w-7 h-7 flex items-center justify-center text-base group-hover:translate-x-1 transition-transform duration-300">→</span>
      </button>

    </div>
  )
}

export default WelcomePage