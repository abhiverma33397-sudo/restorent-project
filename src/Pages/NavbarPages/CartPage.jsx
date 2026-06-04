import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";
import toast from "react-hot-toast";

const CartPage = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, clearCart } = useCart();

  const total = cartItems.reduce(
    (acc, item) => acc + Number(item.price || 0),
    0,
  );

  const handleConfirm = () => {
    if (cartItems.length === 0) {
      toast.error("Cart is empty!");
      navigate("/dashboard");
      return;
    }

    toast.success("Order placed successfully 🎉");

    clearCart();

    setTimeout(() => {
      navigate("/dashboard");
    }, 1500);
  };
  return (
    <div className="min-h-screen bg-gray-100 p-6 md:p-10">
      <h1 className="text-3xl font-bold mb-6">🛒 Your Cart</h1>

      {cartItems.length === 0 ? (
        <div className="text-center mt-20 text-gray-500">
          <p className="text-xl">Your cart is empty 😕</p>
        </div>
      ) : (
        <div className="grid md:grid-cols-3 gap-6">
          {/* ITEMS LIST */}
          <div className="md:col-span-2 space-y-4">
            {cartItems.map((item, index) => (
              <div
                key={item.id}
                className="flex justify-between items-center bg-white p-4 rounded-xl shadow hover:shadow-lg transition"
              >
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-500">₹{item.price}</p>
                </div>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="bg-white p-6 rounded-xl shadow h-fit">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>

            <div className="flex justify-between mb-3">
              <span>Items</span>
              <span>{cartItems.length}</span>
            </div>

            <div className="flex justify-between mb-5 font-bold text-lg">
              <span>Total</span>
              <span>₹{total}</span>
            </div>

            <button
              onClick={handleConfirm}
              className="w-full bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-semibold"
            >
              Confirm Order
            </button>

            <button
              onClick={clearCart}
              className="w-full mt-3 bg-gray-200 hover:bg-gray-300 py-2 rounded-lg"
            >
              Clear Cart
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartPage;
