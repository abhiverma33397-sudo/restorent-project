import React from "react";
import FoodImage from "../../assets/FoodImage.png";
import OrderButton from "../Layout/OrderButton";
import D1 from "../../assets/Div-1-Img/D1.jpg";
import D2 from "../../assets/Div-1-Img/D2.jpg";
import D3 from "../../assets/Div-1-Img/D3.jpg";
import D4 from "../../assets/Div-1-Img/D4.jpg";
import D5 from "../../assets/Div-1-Img/D5.jpg";
import D6 from "../../assets/Div-1-Img/D6.jpg";

const Dashboard = () => {
  return (
    <div>
      <div>
        <img
          src={FoodImage}
          className="w-full h-lg-[200px] relative opacity-50 "
          alt=""
        />

        <div className="absolute z-10 bottom-32 left-20">
          <h1 className="text-8xl font-serif font-semibold text-red-600">
            Tasty Bite
          </h1>
          <h4 className="text-5xl font-serif">Best Food in India</h4>
          <button
            onClick={() => navigate("/")}
            className="group flex items-center gap-3 bg-[#c4673a] text-white mt-16 text-sm font-medium px-10 py-4 rounded-full shadow-lg hover:shadow-xl hover:bg-[#b05a30] hover:scale-105 active:scale-95 transition-all duration-300"
          >
            Order Here
            <span className="bg-white text-[#c4673a] rounded-full w-7 h-7 flex items-center justify-center text-base group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </button>

          <div className="mt-7"></div>
        </div>
      </div>

      <div className=" flex justify-center mt-5 ">
        <h1 className="text-5xl font-semibold font-mono  w-auto border-t-4  border-double border-red-500   border-b-4  border-double border-red-500">
          Spacial Dishes
        </h1>
      </div>

      <div className="flex justify-evenly mt-10">
        <div className="border-2 rounded-xl">
          <img src={D1} className="w-80 h-[400px] rounded-t-xl" alt="" />
          <div className="flex flex-col items-center mt-3 text-black text-center">
            <h1 className="text-2xl text-red-800 font-bold font-semibold">
              Kadai Paneer
            </h1>
            <h3 className="mt-2">
              Creamy Kadai Paneer with rich flavors of <br /> spices and butter.
            </h3>
            <h2 className="mt-2 text-xl font-bold text-red-600">₹200</h2>
          </div>

          <div>
            <h1></h1>
          </div>
          <OrderButton />
        </div>

        <div className="border-2 rounded-xl">
          <img src={D2} className="w-80 h-[400px] rounded-t-xl" alt="" />
          <div className="flex flex-col items-center mt-3 text-black text-center">
            <h1 className="text-2xl text-red-800 font-bold font-semibold">
              Idli
            </h1>
            <h3 className="mt-2">
              Soft and fluffy idlis served with coconut <br />
              chutney and sambhar.
            </h3>
            <h2 className="mt-2 text-xl font-bold text-red-600">₹50</h2>
          </div>
          <OrderButton />
        </div>

        <div className="border-2 rounded-xl ">
          <img src={D3} className="w-80 h-[400px] rounded-t-xl" alt="" />
          <div className="flex flex-col items-center mt-3 text-black text-center">
            <h1 className="text-2xl text-red-800 font-bold font-semibold">
              {" "}
              Chole Bhature{" "}
            </h1>
            <h3 className="mt-2">
              Delicious Chole Bhature served with pickle <br /> and onions.
            </h3>
            <h2 className="mt-2 text-xl font-bold text-red-600">₹150</h2>
          </div>
          <div className="mb-4">
            {" "}
            <OrderButton />
          </div>
        </div>
      </div>
      <div className="flex justify-evenly mt-10">
        <div className="border-2 rounded-xl">
          <img src={D4} className="w-80 h-[400px] rounded-t-xl" alt="" />
          <div className="flex flex-col items-center mt-3 text-black text-center">
            <h1 className="text-2xl text-red-800 font-bold font-semibold">
              Masala Dosa
            </h1>
            <h3 className="mt-2">
              Masala dosa with a spicy potato filling <br /> and crispy texture.
            </h3>
            <h2 className="mt-2 text-xl font-bold text-red-600">₹100</h2>
          </div>
          <OrderButton />
        </div>

        <div className="border-2 rounded-xl">
          <img src={D5} className="w-80 h-[400px] rounded-t-xl" alt="" />
          <div className="flex flex-col items-center mt-3 text-black text-center">
            <h1 className="text-2xl text-red-800 font-bold font-semibold">
              {" "}
              Maharashtrian Thali
            </h1>
            <h3 className="mt-2">
              Traditional Maharashtrian thali with Potato <br /> bhaji, roti,
              sabzi, and sweets.
            </h3>
            <h2 className="mt-2 text-xl font-bold text-red-600">₹100</h2>
          </div>
          <OrderButton />
        </div>

        <div className="border-2 rounded-xl">
          <img src={D6} className="w-80 h-[400px] rounded-t-xl" alt="" />
          <div className="flex flex-col items-center mt-3 text-black text-center">
            <h1 className="text-2xl text-red-800 font-bold font-semibold">
              Dosa
            </h1>
            <h3 className="mt-2">
              Crispy and tasty South Indian dosa served <br />
              with chutney and sambhar.
            </h3>
            <h2 className="mt-2 text-xl font-bold text-red-600">₹50</h2>
          </div>
          <OrderButton />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
