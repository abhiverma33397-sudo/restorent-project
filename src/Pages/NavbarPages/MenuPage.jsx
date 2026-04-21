import React from 'react'
import D1 from "../../assets/Div-1-Img/D1.jpg";
import D2 from "../../assets/Div-1-Img/D2.jpg";
import D3 from "../../assets/Div-1-Img/D3.jpg";
import D4 from "../../assets/Div-1-Img/D4.jpg";
import D5 from "../../assets/Div-1-Img/D5.jpg";
import D6 from "../../assets/Div-1-Img/D6.jpg";
import OrderButton from '../Layout/OrderButton';

const MenuPage = () => {
  return (
    <div>
      this is menu page
      {/* this is 1st div */}
       <div className="flex justify-center justify-evenly mt-10">
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

        {/* this is 2nd div */}
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
          <div className="mb-4">
            <OrderButton />
          </div>
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
          <div className="mb-4">
            <OrderButton />
          </div>
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

      {/* this is 3rd div */}
       <div className="flex justify-center justify-evenly mt-10 mb-16">
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

        <div className="border-2 rounded-xl ">
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

{/* footer */}
       <div className="bg-black text-white py-10 flex flex-col items-center justify-center">
        <div className="flex gap-6 mb-6 text-2xl">
          <a href="#" className="hover:text-gray-400">
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href="#" className="hover:text-gray-400">
            <i className="fa-brands fa-whatsapp"></i>
          </a>
        </div>

        <p className="text-xl font-medium tracking-wide">
          All Rights Reserved © My Restaurant 2026
        </p>
      </div>
    </div>
  )
}

export default MenuPage
