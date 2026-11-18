import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";
import Home from "./Pages/Home.jsx";
import ProductDetails from "./Pages/ProductDetails.jsx";
import { BrowserRouter, Routes, Route } from "react-router";
function App() {
  //http://localhost:5173/productDetail/2
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* Dynamic route to the productDetails page */}
        <Route path="/productDetail/:id" element={<ProductDetails />} />
      </Routes>
      ;
      {/* <div>
        <Header />
        <Home />
        <Footer />
      </div> */}
    </BrowserRouter>
  );
}

export default App;
