import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
import CheckOut from "./Pages/CheckOut.jsx";
import Loader from "./Pages/Loader.jsx";
import Cart from "./Pages/Cart.jsx";
function App() {
  //http://localhost:5173/productDetail/2
  return (
    <>
      {/* Shared Componet */}
      <Header />
      {/* Routes */}
      <Routes>
        <Route path="/" element={<Loader />} />
        <Route path="/home" element={<Home />} />
        {/* Dynamic route to the productDetails page */}
        <Route path="/productDetail/:id" element={<ProductDetails />} />
        <Route path="/checkout/:id" element={<CheckOut />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
      ;
      {/* <div>
        <Header />
        <Home />
        <Footer />
      </div> */}
    </>
  );
}

export default App;
