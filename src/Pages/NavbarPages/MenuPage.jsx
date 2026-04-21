import React from 'react';
import OrderButton from '../Layout/OrderButton';

const MenuPage = () => {
  const menuItems = [
    { 
      id: 1, 
      name: "Paneer Pizza", 
      price: "250", 
      desc: "Fresh baked crust with spicy paneer & capsicum.", 
      img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=800&auto=format&fit=crop", 
      tag: "New" 
    },
    { 
      id: 2, 
      name: "Veg Burger", 
      price: "120", 
      desc: "Crispy patty with fresh lettuce and secret sauce.", 
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800&auto=format&fit=crop", 
      tag: "Best Seller" 
    },
    { 
      id: 3, 
      name: "Kadai Paneer", 
      price: "200", 
      desc: "Cottage cheese in flavorful bell pepper gravy.", 
      img: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?w=800&auto=format&fit=crop", 
      tag: "Signature" 
    },
    { 
      id: 4, 
      name: "Samosa", 
      price: "20", 
      desc: "Crispy pastry stuffed with spiced potatoes.", 
      img: "https://imgs.search.brave.com/fGR9R2wkY9Q8buClKKm9ZZE7ovX0p3rCcUjrZerYee4/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly90NC5m/dGNkbi5uZXQvanBn/LzE3LzcwLzMyLzcz/LzM2MF9GXzE3NzAz/MjczODVfZ1RBQzQy/UkU2YWFvdURSeGQy/bjJBb256dVF3SmhO/SVYuanBn", 
      tag: "Snack" 
    },
    { 
      id: 5, 
      name: "Spring Roll", 
      price: "80", 
      desc: "Soft and fluffy steamed gram flour snack.", 
      img: "https://imgs.search.brave.com/cccLjVYAS9F1T0Ws_OlCYOKjL9WzWVaFHDe7XJfpB0I/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucGV4ZWxzLmNv/bS9waG90b3MvNDAw/MTg2Ny9wZXhlbHMt/cGhvdG8tNDAwMTg2/Ny5qcGVnP2F1dG89/Y29tcHJlc3MmY3M9/dGlueXNyZ2ImZHBy/PTEmdz01MDA", 
      tag: "Healthy" 
    },
    { 
      id: 6, 
      name: "Momos", 
      price: "180", 
      desc: "Soft and fluffy steamed gram flour snack", 
      img: "https://imgs.search.brave.com/dSQDq2ciSROPseAsOLdE7jBoAmXoW3VsPH2tlPrnkEA/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9zdGF0/aWMudmVjdGVlenku/Y29tL3N5c3RlbS9y/ZXNvdXJjZXMvdGh1/bWJuYWlscy8wNDcv/OTg5LzIwMC9zbWFs/bC93b29kZW4tcGxh/dGUtd2l0aC1kdW1w/bGluZ3MtY292ZXJl/ZC1pbi1zYXVjZS1w/aG90by5qcGVn", 
      tag: "Full Meal" 
    }
  ];

  return (
    <div className="bg-[#FAF9F6] min-h-screen pt-24 font-sans selection:bg-red-50">
      <section className="text-center py-12 px-6">
        <h1 className="text-5xl md:text-7xl font-black uppercase tracking-tighter">
          Our <span className="text-red-600">Specials.</span>
        </h1>
        <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px] mt-4">Premium Dining Experience</p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pb-28">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {menuItems.map((item) => (
            <div key={item.id} className="group bg-white rounded-[40px] p-4 shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 flex flex-col">
              
              {/* Image Section */}
              <div className="relative h-72 overflow-hidden rounded-[30px] mb-6 bg-gray-100">
                <img 
                  src={item.img} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  alt={item.name} 
                  // Image Error Handling
                  onError={(e) => {
                    e.target.src = "https://placehold.co/800x600/fecaca/991b1b?text=Food+Image";
                  }}
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest text-red-600">
                  {item.tag}
                </div>
              </div>

              {/* Text Section */}
              <div className="px-4 pb-4 text-center">
                <h3 className="text-2xl font-black mb-2 uppercase tracking-tight">{item.name}</h3>
                <p className="text-gray-400 text-sm mb-6 leading-relaxed italic">{item.desc}</p>
                <div className="flex flex-col items-center gap-4 pt-6 border-t border-gray-50">
                  <span className="text-2xl font-black text-red-600">₹{item.price}</span>
                  <OrderButton />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-black text-white py-12 text-center">
        <h2 className="text-xl font-black tracking-widest uppercase italic">Tasty.<span className="text-red-600">Bite.</span></h2>
        <p className="text-gray-600 text-[10px] uppercase tracking-widest mt-4">© 2026 Sonipat, Haryana</p>
      </footer>
    </div>
  );
};

export default MenuPage;