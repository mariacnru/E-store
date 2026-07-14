import { createBrowserRouter, createHashRouter } from "react-router";
import EstoreLayout from "./components/Layout/EstoreLayout";
import Home from "./Pages/Home/Home";
import Products from "./Pages/Products/Products";
import ProductDetails from "./Pages/ProductDetails/ProductDetails";
import About from "./Pages/About/About";
import Contact from "./Pages/Contact/Contact";

const router = createHashRouter([
  {
    path: "/",
    element: <EstoreLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <Products /> },
      {
        path: "products/:slug",
        element: <Products />,
      },
      {
        path: "/productDetail/:productID",
        element: <ProductDetails />,
      },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
    ],
  },
]);

export default router;
