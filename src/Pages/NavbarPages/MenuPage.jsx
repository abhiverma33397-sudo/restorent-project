import React, { useState } from "react";
import OrderButton from "../Layout/OrderButton";
import { useCart } from "../Context/CartContext";

const MenuPage = () => {
  const { addToCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState("All");
  const categories = [
    "All",
    "Pizza",
    "Burger",
    "Main Course",
    "Snacks",
    "Momos",
  ];

  const menuItems = [
    {
      id: 1,
      name: "Paneer Pizza",
      category: "Pizza",
      price: "250",
      desc: "Fresh baked crust with spicy paneer & capsicum.",
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Margherita Pizza",
      category: "Pizza",
      price: "220",
      desc: "Classic cheese loaded pizza.",
      img: "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?w=800&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Farmhouse Pizza",
      category: "Pizza",
      price: "280",
      desc: "Loaded with veggies, olives and extra cheese.",
      img: "https://images.unsplash.com/photo-1594007654729-407eedc4be65?w=800&auto=format&fit=crop",
    },

    {
      id: 4,
      name: "Veg Burger",
      category: "Burger",
      price: "120",
      desc: "Crispy patty with fresh lettuce.",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop",
    },
    {
      id: 5,
      name: "Cheese Burger",
      category: "Burger",
      price: "150",
      desc: "Burger with extra cheese.",
      img: "https://images.unsplash.com/photo-1550547660-d9450f859349?w=800&auto=format&fit=crop",
    },

    {
      id: 6,
      name: "Kadai Paneer",
      category: "Main Course",
      price: "200",
      desc: "Paneer in spicy gravy.",
      img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&auto=format&fit=crop",
    },
    {
      id: 7,
      name: "Shahi Paneer",
      category: "Main Course",
      price: "240",
      desc: "Rich creamy paneer curry.",
      img: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?w=800&auto=format&fit=crop",
    },

    {
      id: 8,
      name: "Samosa",
      category: "Snacks",
      price: "20",
      desc: "Crispy potato stuffed samosa.",
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950?w=800&auto=format&fit=crop",
    },
    {
      id: 9,
      name: "Spring Roll",
      category: "Snacks",
      price: "80",
      desc: "Crunchy vegetable rolls.",
      img: "https://imgs.search.brave.com/FnQDLKnSaF1DynJmNu508hsqBXwqJ3MWPvflJRzUitM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNTcv/NDIyLzQ4MC9zbWFs/bC9jcmlzcHktc3By/aW5nLXJvbGxzLWZp/bGxlZC13aXRoLXZl/Z2V0YWJsZXMtZ2Fy/bmlzaGVkLXdpdGgt/Z3JlZW4tb25pb25z/LWFuZC1zZXNhbWUt/c2VlZHMtcGhvdG8u/anBn",
    },

   {
  id: 10,
  name: "Veg Momos",
  category: "Momos",
  price: "120",
  desc: "Fresh steamed vegetable momos served with spicy chutney.",
  img: "https://imgs.search.brave.com/mYzo2nAXKZl1o7qSNPi3_AHfXBpIKJT3Zi69zN4H-Eg/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/cXVlaW5zLmluL2Nk/bi9zaG9wL2ZpbGVz/L3ZlZy1tb21vcy5q/cGc_dj0xNzUzNjg0/Mjg0JndpZHRoPTE0/NDU"
},
{
  id: 11,
  name: "Paneer Momos",
  category: "Momos",
  price: "180",
  desc: "Soft momos stuffed with spicy paneer filling.",
  img: "https://imgs.search.brave.com/NO1idS4WCYC5kosqNt2KiY9B2BDYDdoFRX52x61iyI0/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly93d3cu/b2hteXZlZy5jby51/ay93cC1jb250ZW50/L3VwbG9hZHMvMjAy/NS8wNS9QYW5lZXIt/TW9tb3MtMS05MDB4/MTIwMC53ZWJw"
},
{
  id: 12,
  name: "Kurkure Momos",
  category: "Momos",
  price: "220",
  desc: "Crispy deep-fried momos served with special dip.",
  img: "https://imgs.search.brave.com/zLWViKxg2tprDCyqaUsUC7UqHSky_b0PWoHxZ0vgPzg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5nZXR0eWltYWdl/cy5jb20vaWQvMTM0/NzA5NjQyMS9waG90/by9rdXJrdXJlLW1v/bW9zLmpwZz9zPTYx/Mng2MTImdz0wJms9/MjAmYz1VS2NqMmFT/dVZWZXR2ZUwwT250/dDAzbnY4UkQ3b3lt/VnJhcTdGVTVOcDNr/PQ"
}
  ];
  const filteredItems =
    selectedCategory === "All"
      ? menuItems
      : menuItems.filter((item) => item.category === selectedCategory);

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-24 font-sans selection:bg-red-50">
      <section className="text-center py-12 px-6">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          Our <span className="text-red-600">Specials.</span>
        </h1>
        <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px] mt-4">
          Premium Dining Experience
        </p>
      </section>
      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-full font-semibold transition-all duration-300
      ${
        selectedCategory === category
          ? "bg-red-600 text-white"
          : "bg-white border border-gray-300 hover:bg-red-50"
      }`}
          >
            {category}
          </button>
        ))}
      </div>

      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-[40px] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col"
            >
              {/* Image Section */}
              <div className="relative h-72 overflow-hidden rounded-[30px] mb-6 bg-gray-100">
                <img
                  src={item.img}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  alt={item.name}
                  // Image Error Handling
                  onError={(e) => {
                    e.target.src =
                      "https://placehold.co/800x600/fecaca/991b1b?text=Food+Image";
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-red-600">
                  {item.tag}
                </div>
              </div>

              {/* Text Section */}
              <div className="px-4 pb-4 text-center">
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed italic">
                  {item.desc}
                </p>
                <div className="flex flex-col items-center gap-4 pt-6 border-t border-gray-50">
                  <span className="text-2xl font-black text-red-600">
                    ₹{item.price}
                  </span>
                  <OrderButton onClick={() => addToCart(item)} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-black text-white py-12 text-center">
        <h2 className="text-xl font-black tracking-widest uppercase italic">
          Tasty.<span className="text-red-600">Bite.</span>
        </h2>
        <p className="text-gray-600 text-[10px] uppercase tracking-widest mt-4">
          © 2026 Sonipat, Haryana
        </p>
      </footer>
    </div>
  );
};

export default MenuPage;
