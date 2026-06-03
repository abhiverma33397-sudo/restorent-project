import React from "react";
import Router from "./Router";
import { CartProvider } from "./Pages/Context/CartContext";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <CartProvider>
      <Toaster
        position="top-right"
        toastOptions={{
          style: {
            zIndex: 99999,
          },
        }}
      />
      <Router />
    </CartProvider>
  );
}

export default App;
