import React from "react";
import { RouterProvider } from "react-router";
import router from "./Router";
import WishlistProvider from "./context/WishlistContext";
import CartProvider from "./context/CardContext";

function App() {
  return (
    <CartProvider>
      <WishlistProvider>
        <RouterProvider router={router}></RouterProvider>
      </WishlistProvider>
    </CartProvider>
  );
}

export default App;
