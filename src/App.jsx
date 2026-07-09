import React from "react";
import { RouterProvider } from "react-router";
import router from "./Router";
import WishlistProvider from "./context/WishlistContext";

function App() {
  return (
    <WishlistProvider>
      <RouterProvider router={router}></RouterProvider>;
    </WishlistProvider>
  );
}

export default App;
