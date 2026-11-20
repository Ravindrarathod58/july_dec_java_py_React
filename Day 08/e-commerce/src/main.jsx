import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router";
import { useContext } from "react";
import { CartProvider } from "./context/cartContex.jsx";
import App from "./App.jsx";
import "../node_modules/bootstrap/dist/css/bootstrap.css";
import "../node_modules/bootstrap-icons/font/bootstrap-icons.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CartProvider>
      <BrowserRouter>
        {/* childrens -> app -> header -> routes ->route */}
        <App />
      </BrowserRouter>
    </CartProvider>
    {/* </BrowserRouter> */}
  </StrictMode>,
);
