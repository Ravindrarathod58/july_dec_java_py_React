import { Routes, Route } from "react-router";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import CheckOut from "./pages/CheckOut";
import Cart from "./pages/Cart";
import ProductDetails from "./pages/ProductDetails";
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/checkout/:id" element={<CheckOut />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/details/:id" element={<ProductDetails />} />
      </Routes>
    </>
  );
}

export default App;
