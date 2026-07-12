import { createBrowserRouter } from "react-router";
import EstoreLayout from "./components/Layout/EstoreLayout";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import About from "./Pages/About/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <EstoreLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      {
        path: "/productDetail/:productID",
        element: <ProductDetails />,
      },
      { path: "about", element: <About /> },
    ],
  },
]);

export default router;
