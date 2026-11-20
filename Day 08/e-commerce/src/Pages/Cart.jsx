import Card from "../components/Card";
import { useContext } from "react";
import { CartContext } from "../context/cartContex";
function Cart() {
  const { cart, removeFromCart } = useContext(CartContext);
  return (
    <div className="container d-flex min-vh-100 flex-wrap gap-2">
      {cart.length > 0 ? (
        cart.map((item) => (
          <Card
            key={item.id}
            src={item.image}
            title={item.title}
            price={item.price}
            id={item.id}
            type="cartItem"
            action={removeFromCart}
          />
        ))
      ) : (
        <div>No items available in cart </div>
      )}
    </div>
  );
}

export default Cart;
