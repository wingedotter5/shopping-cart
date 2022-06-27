import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartProvider from "./CartContext";
import Home from "./pages/Home";
import Products from "./pages/Products";

const RouteSwitch = () => {
  return (
    <BrowserRouter basename="/shopping-cart">
      <CartProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default RouteSwitch;
