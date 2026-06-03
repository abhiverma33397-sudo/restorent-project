import { createContext, useContext, useState } from "react";
import toast from "react-hot-toast";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const addToCart = (item) => {
    const newItem = { ...item, id: Date.now() };

    setCartItems((prev) => [...prev, newItem]);

    toast.custom(
      () => (
        <div className="bg-[#1A1A1A] text-white px-5 py-4 rounded-2xl shadow-2xl flex items-center gap-4 border border-red-500">
          <span className="text-3xl">👍</span>

          <div>
            <h3 className="font-bold">Added to Cart</h3>
            <p className="text-sm text-gray-300">
              {item.name} added successfully
            </p>
          </div>
        </div>
      ),
      {
        duration: 1000,
      },
    );
  };

  const removeFromCart = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const clearCart = () => {
    setCartItems([]);
  };

  const [cartItems, setCartItems] = useState([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => useContext(CartContext);
