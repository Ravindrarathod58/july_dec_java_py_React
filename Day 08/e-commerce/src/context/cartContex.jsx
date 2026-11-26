import { createContext, useEffect, useState, useReducer } from "react";
import { initialState, CartReducer } from "../reducers/CartReducer";
export const CartContext = createContext();
//  cartProvider({props, childrens})
export function CartProvider({ children }) {
  // const [cart, setCart] = useState([]);

  // useEffect(() => {
  //   const cartItems = JSON.parse(localStorage.getItem("cartItems"));
  //   if (cartItems.length > 0) {
  //     setCart(cartItems);
  //   }

  //   console.log("cart items " + cartItems);
  // }, []);

  // function addToCart(product) {
  //   setCart([...cart, product]);
  //   localStorage.setItem("cartItems", JSON.stringify(cart));
  //   console.log(localStorage.getItem("cartItems"));
  // }
  // function removeFromCart(id) {
  //   const rem = cart.filter((products) => products.id != id);
  //   setCart(rem);
  //   localStorage.setItem("cartItems", JSON.stringify(cart));

  //   alert("Item removed");
  // }

  const [cart, dispatch] = useReducer(CartReducer, initialState);
  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}
