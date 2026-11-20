import { useState, useEffect } from "react";
import Card from "../components/Card.jsx";
import { useContext } from "react";
import { CartContext } from "../context/cartContex.jsx";
function Home() {
  // State to hold the products
  const [data, setData] = useState([]);
  // const [cart, setCart] = useState([]);
  //   side effect to fetch the data

  const { cart, addToCart } = useContext(CartContext);

  // console.log(cart);
  console.log(cart);
  // console.log(removeFromCart);
  useEffect(() => {
    // fetch ( async)

    async function getData() {
      try {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        setData(data);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  function addProduct(id) {
    const product = data.filter((produc) => produc.id == id);
    addToCart(product[0]);
    alert("Item added to cart");
  }
  return (
    <div className="mt-3 container d-flex flex-wrap gap-2">
      {data.length > 0 ? (
        data.map((item) => (
          <Card
            key={item.id}
            src={item.image}
            title={item.title}
            price={item.price}
            id={item.id}
            type="product"
            action={addProduct}
          />
        ))
      ) : (
        <div> Data Not available </div>
      )}
    </div>
  );
}

export default Home;
